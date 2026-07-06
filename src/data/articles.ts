// Leadership articles — SINGLE SOURCE OF TRUTH for the article corpus.
// Powers the leadership index (list + tag filtering), the RSS feed, and the
// foundation for future full-text search (Pagefind, when the corpus grows).
//
// Add a new article: prepend an entry here (newest first). The `slug` MUST match
// the page route (/leadership/<slug>/). `tags` drive discoverability + filtering —
// reuse existing tags where they fit; the taxonomy accrues deliberately, not per-piece.

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;        // ISO yyyy-mm-dd
  series: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: 'trust-comes-from-structure',
    title: "I can't let AI near my real, sensitive work",
    description: 'Why al-Nizam can be trusted with PII, HIPAA, PCI, and the work that makes the difference between safe and exposed.',
    date: '2026-06-10',
    series: 'Introducing al-Nizam — Boundaries',
    tags: ['Trust', 'Security', 'Compliance', 'Governance'],
  },
  {
    slug: 'memory-and-pipeline-in-practice',
    title: 'AI forgets everything the moment I close the tab',
    description: "How al-Nizam keeps continuity that doesn't depend on the AI tool remembering.",
    date: '2026-06-10',
    series: 'Introducing al-Nizam — Amnesia',
    tags: ['Memory', 'Continuity', 'Architecture'],
  },
];

// Unique tags across the corpus, in first-appearance order.
export const allTags: string[] = [...new Set(articles.flatMap((a) => a.tags))];

export const hrefFor = (a: Article): string => `/leadership/${a.slug}/`;
