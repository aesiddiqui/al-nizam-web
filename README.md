# al-nizam-web

Source repository for the al-Nizam framework website at **al-nizam.ai**.

## What this is

The public-facing al-Nizam framework website. Hosts:

- **Landing page** — al-Nizam positioning + ahead-of-curve framings
- **Leadership section** (`/leadership/`) — long-form articles examining the disciplines al-Nizam has evolved
- **RSS feed** for syndication

## Stack

Built with [Astro](https://astro.build/). Deployed to Cloudflare Pages. Source markdown + static HTML/CSS/JS output.

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Articles

The Leadership section publishes pieces from the introducing-al-nizam series. Each piece takes a problem the world is already struggling with — AI amnesia, governance, cost, trust — and shows the structural answer al-Nizam evolved.

Current articles:

- **Piece 1 — Amnesia.** "AI forgets everything the moment I close the tab." → `/leadership/memory-and-pipeline-in-practice/`

## What al-Nizam is

al-Nizam — Arabic for *the order, the system, the discipline* — is a personal operating framework. It runs in the layer between an operator and the AI tools they use. It enforces continuity, governance, and accountability structurally.

See the landing page at [al-nizam.ai](https://al-nizam.ai) for full positioning.

## License

Articles and content: copyright reserved. Code (Astro templates / config): MIT-style permissive for reuse where applicable.
