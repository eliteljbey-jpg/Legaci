import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ljbey.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/epk/one-sheet') })],
  vite: { plugins: [tailwindcss()] },
});
