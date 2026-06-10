// astro.config.mjs — al-nizam-web Astro configuration
// Phase 0 launch package; al-Wasatiyya bounded (minimal config; expand at Phase 1+)

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://al-nizam.ai',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
