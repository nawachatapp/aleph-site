# Aleph Educational Center — website

Bilingual (Arabic RTL / English) static site for مركز ألِف التربوي, Arabsalim.
Built with Astro, same structure as `alwafaa-site`.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Where things live

| What | File |
|---|---|
| Phone, WhatsApp, address, map, Instagram, **portal URL** | `src/i18n/contact.ts` |
| Specialists, credentials, service descriptions | `src/data/services.ts` |
| Navigation, buttons, repeated labels (AR + EN) | `src/i18n/ui.ts` |
| Page copy (AR + EN side by side) | `src/pages/[lang]/*.astro` |
| Colours, type scale, spacing | `src/styles/tokens.css` |
| News posts (Markdown) | `src/content/news/{ar,en}/` |
| Photos (auto-optimised at build) | `src/assets/photos/` |
| Logo cut-outs, favicons, social card | `public/brand/`, `public/` — regenerate with `node scripts/brand.mjs <logo.jpg> .` |

## Portal

`portalUrl` in `src/i18n/contact.ts` is `null`, so the portal buttons (header,
footer, contact page) show as "coming soon". Set it to the portal's address
to switch them all on.

## CMS (phase 2)

`public/admin/` holds a Sveltia CMS setup for news. It works once the site is
in a GitHub repo and `backend.repo` in `public/admin/config.yml` points at it.

## Before launch

- Review the DRAFT COPY (marked in the page files and `services.ts`).
- Set the real domain in `astro.config.mjs` (`site`).
- Replace the town-level map with the centre's exact pin (`contact.ts`).
- Confirm parents' consent for the children's photos.
