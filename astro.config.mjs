// astro.config.mjs — al-nizam-web Astro configuration
// Phase 0 launch package; al-Wasatiyya bounded (minimal config; expand at Phase 1+)

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// House-HTML rehype pass — turns plain canonical markdown into the site's figure/lead
// conventions on the HTML AST, so a promoted .md renders identically to the hand-authored
// .astro it replaces. Runs on hast (real <img>/<table>/<figure> elements) rather than raw
// markdown strings, so it behaves the same for .md and .mdx (bespoke JSX figures are
// separate nodes it skips). See src/lib/rehype-house-html.mjs.
import { rehypeHouseHtml } from './src/lib/rehype-house-html.mjs';

export default defineConfig({
  site: 'https://al-nizam.ai',
  // mdx() inherits the top-level `markdown` config below (extendMarkdownConfig
  // defaults true), so this rehype pass applies to both .md and .mdx articles.
  integrations: [mdx(), sitemap()],
  build: {
    format: 'directory',
  },
  markdown: {
    rehypePlugins: [rehypeHouseHtml],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
