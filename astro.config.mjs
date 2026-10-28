// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public domain: drives canonical URLs, the sitemap and social-image URLs.
export default defineConfig({
  site: 'https://alephcenter.net',

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
