// Content collections (Astro 5 Content Layer).
//
// `leadership` — the article corpus. This collection IS the registry: it replaces
// the hand-kept src/data/articles.ts (index + RSS read getCollection('leadership'))
// AND the per-page render metadata that used to live inline in each .astro. One
// canonical superset per piece; the body is canonical markdown (.md) or, for pieces
// with bespoke figures, .mdx that embeds the shared figure components.
//
// Field groups mirror the content-publishing memo's RENDER field-group
// (project_content_publishing_derivation_and_content_model_resolved_2026_07_21).

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const leadership = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/leadership' }),
  schema: z.object({
    // ── Identity / SEO ──
    title: z.string(),                       // H1 + <title> stem + BlogPosting headline
    description: z.string(),                  // meta description + index blurb + RSS + BlogPosting

    // ── Series taxonomy (composed where a combined label is shown) ──
    series: z.string(),                      // e.g. "Introducing al-Nizam"
    cluster: z.string(),                     // e.g. "Trust & Correctness" / "Boundaries"
    kicker: z.string(),                      // hero eyebrow, e.g. "Green is not verified"

    // ── Ordering / dating ──
    // The date the piece was CONCEIVED in the framework (candidate-capture date in
    // memory), not the polish date — so the corpus reflects genuine cadence. Drives
    // index order (newest-first), RSS pubDate, and BlogPosting datePublished.
    date: z.string(),                        // ISO yyyy-mm-dd
    // Tiebreak for same-date pieces (higher = newer). Preserves the exact hand-order
    // that articles.ts encoded (e.g. trust before memory, both 2026-06-10).
    seq: z.number().default(0),

    // ── Discovery ──
    tags: z.array(z.string()),

    // ── Render surface ──
    theme: z.enum(['light', 'dark']).default('light'),
    poster: z.string(),                      // /heroes/<slug>-poster.svg (web-side asset)

    // ── Provenance ──
    // Backlink to the Chronicle draft this page derives from (the source of record).
    canonicalSource: z.string().optional(),

    // ── Optional rich-piece extras ──
    // Substrate key (into src/data/substrates) whose live, build-time duration shows in
    // the hero byline ("· Substrate operating <n> · Details ↓"). Presence also adds the
    // "Details ↓" jump to the in-body <Lineage/> appendix. Rich pieces only.
    heroSubstrate: z.string().optional(),
  }),
});

export const collections = { leadership };
