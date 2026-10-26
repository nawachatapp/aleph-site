// Usage: node scripts/brand.mjs <path-to-logo.jpg> <project-root>
// Cuts the Aleph logo (colour on black JPEG) into transparent web assets.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const [src, out] = process.argv.slice(2);
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
const W = info.width, C = info.channels;

// Build an RGBA crop. keep(x,y) decides which source pixels belong to the asset;
// fill, when given, paints every kept pixel one solid colour (for masks).
function cut(x0, y0, x1, y1, keep, fill) {
  const w = x1 - x0, h = y1 - y0, buf = Buffer.alloc(w * h * 4);
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    const i = (y * W + x) * C, o = ((y - y0) * w + (x - x0)) * 4;
    const m = Math.max(data[i], data[i + 1], data[i + 2]);
    const a = Math.min(1, Math.max(0, (m - 25) / 45));
    if (!a || !keep(x, y)) continue;
    for (let c = 0; c < 3; c++) buf[o + c] = fill ? fill[c] : Math.min(255, Math.round(data[i + c] / a));
    buf[o + 3] = Math.round(a * 255);
  }
  // Erode alpha by 2px: the JPEG's black background bleeds a dark fringe into
  // the outermost pixels of every stroke; shaving them off leaves clean edges.
  for (let pass = 0; pass < 2; pass++) {
    const src = Buffer.from(buf);
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
      const o = (y * w + x) * 4 + 3;
      buf[o] = Math.min(src[o], src[o - 4], src[o + 4], src[o - w * 4], src[o + w * 4]);
    }
  }
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } });
}

// Geometry measured from the 1600px master: hamza y<510, letter body to
// y~1165, the small "ألف" wordmark sits at x<806 below y 1015.
const isWordmark = (x, y) => x < 806 && y > 1015 && y < 1175;
const MARK = [570, 285, 1035, 1170];
const all = () => true;

const mark = await cut(...MARK, (x, y) => !isWordmark(x, y)).png().toBuffer();
await sharp(mark).toFile(`${out}/public/brand/mark.png`);
await sharp(mark).resize({ height: 176 }).webp({ quality: 90 }).toFile(`${out}/public/brand/mark-176.webp`);
await sharp(mark).resize({ height: 176 }).png().toFile(`${out}/public/brand/mark-176.png`);
await sharp(mark).resize({ height: 640 }).webp({ quality: 90 }).toFile(`${out}/public/brand/mark-640.webp`);

// Silhouette of the two letter strokes only (no hamza) - used as a CSS mask.
await cut(...MARK, (x, y) => y > 505 && !isWordmark(x, y), [255, 255, 255])
  .resize({ height: 640 }).png().toFile(`${out}/public/brand/mark-body-mask.png`);

// Full lockup with both wordmarks, for the footer and social cards.
const full = await cut(560, 285, 1040, 1300, all).png().toBuffer();
await sharp(full).resize({ height: 400 }).png().toFile(`${out}/public/brand/logo-full-400.png`);
await sharp(full).resize({ height: 400 }).webp({ quality: 90 }).toFile(`${out}/public/brand/logo-full-400.webp`);

// Favicons: the mark centred on the brand's peach ground.
const PEACH = { r: 253, g: 240, b: 231, alpha: 1 };
async function icon(size, file, pad = 0.12) {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ height: inner, width: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: PEACH } })
    .composite([{ input: m, gravity: 'center' }]).png().toFile(`${out}/public/${file}`);
}
await icon(16, 'favicon-16.png', 0.04);
await icon(32, 'favicon-32.png', 0.06);
await icon(64, 'favicon.png', 0.08);
await icon(180, 'apple-touch-icon.png', 0.14);

// Social card, 1200x630.
const og = await sharp(full).resize({ height: 520 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: PEACH } })
  .composite([{ input: og, gravity: 'center' }]).png().toFile(`${out}/public/og.png`);
console.log('done');
