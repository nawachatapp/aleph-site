// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER DOMAIN - update `site` once the centre's domain is registered.
// It drives canonical URLs, the sitemap and the absolute og:image paths.
export default defineConfig({
  site: 'https://www.aleph.edu.lb',

  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    routing: {
      // Both languages keep an explicit prefix (/ar/, /en/).
      prefixDefaultLocale: true,
    },
  },

  build: {
    // /ar/team/index.html rather than /ar/team.html - clean URLs on any host.
    format: 'directory',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: { ar: 'ar-LB', en: 'en-US' },
      },
    }),
  ],
});
