# HANDOFF — al-nizam-web

## 2026-08-20 — ERSALTP (the question was framework-shaped; the finding was on this site's own pages)
**Built:** no code here. Resumed, then answered a framework-altitude question about AI-spend
accounting across vendors and users — which closed to **framework canon**, not to this project,
per `praxis_a_session_closes_where_the_work_happened`.

What this project actually got: two verifications and one defect. **Verified on disk** that the
Chronicle→web promote step genuinely does not exist (`tools/` holds only `visual-verify`; no
promote script in `package.json`) — so item 2b is real unbuilt work, not a card whose work
quietly shipped. And **measured a live-copy defect**: the framework's open locale decision
(`project_no_locale_is_declared_anywhere_and_the_canon_drifted_british_2026_08_18`) is not
theoretical here — **three British spellings sit in published reader-visible text**, at
`src/pages/confidant.astro:34` (`aria-label`), `:37` (visible `<text>`), and
`src/content/leadership/trust-comes-from-structure.mdx:94` (figure alt text). **Two are
accessibility surfaces**, so they are read aloud. Everything else matching in `src/` is a code
comment and is not published.

**Stopped:** the locale fix is **deliberately not applied** — the framework has not declared a
locale yet, and correcting published copy ahead of that decision is guessing at it. No deploy, no
code touched, foreign WIP untouched.

**Next:** unchanged — item 2b, the Chronicle→web `promote` step, written fresh from
`.claude/ITEM-2-RENDERER-SPEC.md` after reading
`project_content_publishing_derivation_and_content_model_resolved_2026_07_21`. Fold the three
locale fixes into whichever pass adopts the declared locale.

> **Cadence flag:** last article published 2026-07-27 — **24 days**. Two consecutive sessions have
> now closed here without shipping content. The next one should either ship item 2b or say why not.

## 2026-08-16 — ERSALTP (the capability was already declared; nobody had built the instrument)
**Built:** no code. Resumed the project, then answered a Steward question — *"a visitor counter, and
where the user originated from… are we recreating the wheel?"* The answer was a **recall finding**:
al-Tarwij's `B1-publication-and-promotion-plan.md` §5 already defines an *"al-nizam.ai referral
sessions"* ledger field, already carries **B1-R5** (*"Search Console before week 4, so referral data
isn't guessed"*), and `week-01-mention-vs-use/RUN-REPORT.md` already logged the miss verbatim:
`N/A week 1 — Search Console not connected`. Declared 2026-07-26, unmet since 2026-07-27. The
duplicated wheel was his own requirement, not a vendor product.

Recommendation scoped in **three tiers separated by privacy cost** — (1) read the Cloudflare zone
dashboard, zero code; (2) connect **Search Console**, no site code and **no privacy-page change**,
and the only source of search *queries*; (3) only then the Cloudflare Web Analytics beacon, the one
tier that makes `privacy.astro`'s published *"no tracking"* copy **false** and so ships its copy edit
in the **same commit**. Rejected: building any counter (the real reinvention), and a visible on-page
counter.

Recorded in four channels: framework canon `project_the_measurement_slot_was_declared_and_left_empty_2026_08_16`
(verified on the board at **p3**, declared `horizon: 30d` registered in the ledger) · a B1-R5 row in
`.claude/ADVISORIES-FROM-AL-TARWIJ.md` · `.claude/PROJECT_STATE.md` → Open Questions · and
`~/ersa/al-tarwij/advisory/ADVISORIES-FROM-WEB.md` (**new file, `WEB-001`**).

**Stopped:** nothing built — **execution deferred by the Steward** (*"we'll visit this when I'm
ready"*). No code touched, no deploy. Foreign WIP UNTOUCHED (`.claude/CLAUDE.md`,
`public/platform-graph-data.js`, `public/vendor/`). Two things found and left open: the
marketing↔web advisory edge was **asymmetric** (web had an inbox, al-Tarwij had none — counterpart
created), and **item 2b's stated inputs no longer exist** — the `migrate-clean.mjs`/`migrate-rich.mjs`
scripts lived in the 2026-08-03 scratchpad and are gone.

**Next:** item 2b — the Chronicle→web `promote` step, **written fresh** from
`.claude/ITEM-2-RENDERER-SPEC.md`, after reading
`project_content_publishing_derivation_and_content_model_resolved_2026_07_21` (it already defines the
AUTHORING-vs-RENDER field split — do not re-derive it). If measurement comes first instead, the
cheapest real move is **Search Console alone**.

> Transfer candidate → al-Tarwij (Marketing Channel): a **UTM convention** for campaign links is owed
> before the cadence resumes — referrers give the domain, never the thread, and web can only consume
> what the links carry.

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

## ⤵ Older blocks pruned to archive (2026-08-16)
2026-07-06 and earlier → `HANDOFF-ARCHIVE.md` (read-on-demand, NOT loaded at /resume).

<!-- previous session blocks (import 2026-07-01) metabolized into PROJECT_STATE; older flat handoff superseded -->
