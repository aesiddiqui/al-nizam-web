# HANDOFF — al-nizam-web

## 2026-08-03 — ERSA (standalone)
**Built:** ITEM 2 (content-derivation renderer) **COMPLETE + verified, uncommitted.** All 7 leadership
articles now render from a `leadership` **content collection** through **one** `src/pages/leadership/[slug].astro`
— the 7 per-slug `.astro` and `src/data/articles.ts` are deleted. Fork resolved → collection + MDX (Steward's
call). New: `@astrojs/mdx`; `src/content.config.ts` (RENDER schema); `src/lib/rehype-house-html.mjs` (lead/figure/
table/endnote transforms on the HTML AST); `src/styles/article-figures.css` (all figure CSS, deduped from the
per-`.astro` copies); `src/components/figures/{FigTerminal,FigFlow,Lineage}.astro`; `src/content/leadership/` (5
`.md` + 2 `.mdx`); `src/lib/leadership.ts` (index + RSS accessor). Bodies = canonical Chronicle prose; bespoke
figures sourced from the live `.astro`. **Sanitization gate built in** — mention's raw U+200C ZWSP demo swapped for
visible `⟨ZWSP⟩` + fig-note; 0 invisible codepoints across collection + built HTML.

**Verified:** build clean (15 pages); clean-article DOM parity vs live (only diffs = heading anchors + smart quotes
+ endnote-as-class, all benign); rich pages **visually** confirmed (terminal, flow, lineage w/ live durations, SVG
figures, tables, fig-note, shiki code); index order + RSS (7) match the old `articles.ts` exactly.

Also shipped: **whole-card clickable** leadership cards (stretched title-link, verified 3/3), and a
`/pre-publish` enhancement (Step 6.5 — build + serve locally on **127.0.0.1**, never `--host`, for a visual
fidelity review before deploy).

**Stopped:** SHIPPED + verified live on al-nizam.ai (commits `03ce938` migration + `4b2e31b` card fix; pushed →
Cloudflare deployed; all routes 200; trust terminal/flow/lineage render live; mention 0 invisible codepoints live).
`/pre-publish` clean. Foreign WIP UNTOUCHED (`.claude/CLAUDE.md`, `public/platform-graph-data.js`, `public/vendor/`).

**Next:** **item 2b** — fold the two migration scripts (scratchpad `migrate-clean.mjs`/`migrate-rich.mjs`) into a
`/pre-publish`-integrated `promote` step so P6–P10 ship as promotions (never hand-built). See
`.claude/PROJECT_STATE.md` → Exact Next Action.

## 2026-07-27 — ERSA (standalone)
**Built:** Shipped + LIVE (8 commits): SEO completeness (robots.txt, branded OG card, Organization/WebSite/BlogPosting JSON-LD); a modern UI/UX pass (hero legibility scrim + mobile clip fix, site-wide focus-visible + skip-link + nav underlines, capabilities BENTO, leadership + About/Confidant CARDS via a theme-aware `.card-list`, scroll-reveal + stat count-up); absorbed `ui-ux-polish` + `astro-seo` skills + native **Playwright visual-verify** (real iPhone-13 device emulation). Then ran the **first end-to-end publication pipeline** — published `mention-vs-use` (week-1 ship) live on al-nizam.ai. Also relocated the Marketing Channel (al-Tarwij) out of the framework engine → `~/ersa/al-tarwij` (own repo).

**Stopped:** Clean. Everything committed + pushed + verified live. Foreign WIP left UNTOUCHED (`.claude/CLAUDE.md`, `public/platform-graph-data.js`, `public/vendor/`) — do NOT `git add -A`. `tools/visual-verify/verify.mjs` route-add committed at close.

**Next:** Build the **markdown→`.astro` transformer** (double-justified: kills the manual body-conversion typo-ships risk AND is the home for the sanitization gate `/pre-publish` doesn't provide). Then DEC-012 config split; changelog (awaits al-Tarwij framing). See `.claude/PROJECT_STATE.md` → Exact Next Action.

Transfer candidate → al-Tarwij (Marketing Channel): the publication-pipeline observations (body-conversion = automation target; sanitization-gate is discipline-only) are already metabolized in its week-01 RUN-REPORT.

**Spec added (leadership-channel session, 2026-07-27):** the Next-action above (markdown→`.astro`
transformer / kill manual body-conversion) now has a full executable design at
`.claude/ITEM-2-RENDERER-SPEC.md` — independently converged from the framework Q1/Q2 memo
(`project_content_publishing_derivation_and_content_model_resolved_2026_07_21`). ⚠ **Design fork to
resolve first:** the spec defaults to an Astro **content collection + one `[slug].astro` template +
remark/rehype** (eliminates per-page `.astro` entirely); this HANDOFF's Next names a
**markdown→`.astro` transformer** (generates per-page `.astro`). Same goal, two shapes — the spec's
opening section lays out the tradeoff. Once chosen: migrate all 7 live pages → collection, then P6–P10
render through the pipeline (never hand-authored). *No code written — spec only.*

## 2026-07-08 — ERSA (standalone)
**Built:** Big session, all **uncommitted + build-verified + NOT pushed** (every push = public deploy). (1) Leadership index → sticky right-rail search + tag filter, per-article pills removed (DEC-009). (2) **Token refactor COMPLETE** — ~155 hardcoded brand hex across 10 files → `--brand-*`/`--color-*`, value-exact/zero visual change (DEC-010); PlatformGraph got a JS `BRAND` palette. (3) contact/privacy/terms got the night `PageHeader` band (DEC-011, design-alignment). (4) **P2 article** thousand-fold-acceleration built (page + poster + 2 figures + articles.ts) as the template; Steward built P3/P4/P5 (self-correction/hallucination/tests-pass) during idle gaps. Corpus now 6 articles.

**Stopped:** Mid-way into an identity/brand **config split** (DEC-012): standardize logo + company info, Chronicle = source of record, site = derived copy (Cloudflare can't read the Chronicle at build). Spec-write was interrupted; Steward chose "bank + fresh session." Nothing committed/pushed anywhere in al-nizam-web.

**Next:** Fresh session — execute the config split (Chronicle `config/{identity,brand,mark}` → site `identity.ts` + `Mark.astro`; fix drifted `brand/` `#C9A24B`). Then batch P6+P7 articles + token-swap the 3 sibling articles. Then `/pre-publish` + push (one deploy). See `.claude/PROJECT_STATE.md` → Exact Next Action.

<!-- previous session blocks below, newest-first -->

## 2026-07-06 — ERSA (standalone)
**Built:** Large content+design pass shipped and verified live on al-nizam.ai (many pushes, latest `5cc5992`): pages overhaul (night `PageHeader` on founder/about/confidant; founder portrait + links + dimensions + "Why it comes from me"), 3 visualizations (About operating-layer, Confidant orbital SVG, founder dimensions), tags foundation (single-source `articles.ts` + tag filtering + RSS categories), audience broadening (solo/early operators), homepage headline `scale`→`discipline of an institution`, brand-constant `--brand-*` token layer, last `#0E1220`→`#14171C` canonicalization. DEC-008 recorded (reader theme toggle model).

**Stopped:** Clean close. Everything code-wise committed, pushed, live. Token refactor was checkpoint-banked but NOT started. Only `.claude/` state + HANDOFF committed at close.

**Next:** Token refactor (~155 hardcoded brand hex → `var(--brand-*)` / `var(--color-*)`, per-instance judgment, file-by-file, build-verify, publish). Then reader theme toggle per DEC-008. See `.claude/PROJECT_STATE.md` → "Exact Next Action".

<!-- previous session blocks (import 2026-07-01) metabolized into PROJECT_STATE; older flat handoff superseded -->
