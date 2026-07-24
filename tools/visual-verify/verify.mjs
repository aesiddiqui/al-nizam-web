// Native visual-verify via the Playwright CLI/library.
//
// Absorbed 2026-07-23 from the assessed `playwright-visual-testing` skill — we took the
// methodology (navigate → stabilize → screenshot → eyeball/diff) and built it natively,
// rather than installing the MCP-bound skill (no Playwright MCP is wired here). This
// replaces the ad-hoc headless-Edge screenshot approach for render-verifying figures and
// pages before a deploy.
//
// Kept in tools/visual-verify/ with its OWN package.json so Playwright is never a
// dependency of the site build (Cloudflare installs only the root package.json).
//
// One-time setup (gated — downloads a browser, ~150MB):
//   cd tools/visual-verify && npm install && npx playwright install chromium
//
// Usage (pages mode — needs the site served):
//   npm run build && npm run preview        # terminal 1 → serves http://localhost:4321
//   npm run verify:visual                    # terminal 2 → screenshots pages
// Usage (figures mode — no server needed, renders the SVGs via file://):
//   npm run verify:figures
//
// Output: .visual-verify/*.png at the repo root (gitignored). Review by eye now; a
// committed baseline + pixel diff can be layered on later if this earns its keep.

import { chromium } from 'playwright';
import { readdir, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const REPO_ROOT = path.resolve(process.cwd());
const OUT = path.join(REPO_ROOT, '.visual-verify');
const BASE = process.env.VERIFY_BASE ?? 'http://localhost:4321';

const VIEWPORTS = [
  { tag: 'desktop', width: 1280, height: 900 },
  { tag: 'mobile', width: 390, height: 844 },
];

// Representative surfaces — the marketing entry, the section index, an article (hero +
// figures), and the identity pages. Extend as the corpus grows.
const PAGES = [
  '/',
  '/leadership/',
  '/leadership/thousand-fold-acceleration/',
  '/about/',
  '/founder/',
  '/confidant/',
];

const figuresMode = process.argv.includes('--figures');

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

try {
  if (figuresMode) {
    const dir = path.join(REPO_ROOT, 'public', 'figures');
    const files = (await readdir(dir)).filter((f) => f.endsWith('.svg'));
    for (const f of files) {
      const page = await browser.newPage({ viewport: { width: 960, height: 520 } });
      await page.goto(pathToFileURL(path.join(dir, f)).href, { waitUntil: 'load' });
      await page.screenshot({ path: path.join(OUT, `figure-${f.replace(/\.svg$/, '')}.png`) });
      await page.close();
      console.log(`✓ figure ${f}`);
    }
  } else {
    for (const vp of VIEWPORTS) {
      for (const route of PAGES) {
        const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
        await page.goto(BASE + route, { waitUntil: 'networkidle' });
        const name = route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replace(/\//g, '-');
        await page.screenshot({ path: path.join(OUT, `${name}@${vp.tag}.png`), fullPage: true });
        await page.close();
        console.log(`✓ ${route} @ ${vp.tag}`);
      }
    }
  }
} finally {
  await browser.close();
}
