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

// Ordered newest-first by the date each piece was ORIGINALLY conceived in the
// framework (the candidate-capture date in al-Nizam memory), not the day it was
// polished into a publish-clean draft — so the corpus reflects genuine cadence
// and age, not a bulk drop. Index + RSS render in array order (no re-sort), so
// keep this array sorted newest-first when adding a piece.
export const articles: Article[] = [
  {
    slug: 'tests-pass-not-works',
    title: 'All ten tests passed. The feature never ran.',
    description: "A test that builds its own fixtures can encode the exact wrong assumption as the code it checks. Green is not verified — it's self-consistent.",
    date: '2026-07-07',
    series: 'Introducing al-Nizam — Trust & Correctness',
    tags: ['Correctness', 'Testing', 'Verification'],
  },
  {
    slug: 'hallucination-multi-layer-answer',
    title: "Your AI didn't lie to you. It just can't tell you when it's guessing.",
    description: "Hallucination isn't the model being wrong — it's the model being wrong in the same confident voice it's right. The fix is a protocol, not a smarter model.",
    date: '2026-07-01',
    series: 'Introducing al-Nizam — Trust & Correctness',
    tags: ['Trust', 'Correctness', 'Honesty'],
  },
  {
    slug: 'self-correction-is-a-substrate',
    title: 'Your AI apologized. Then it made the same mistake tomorrow.',
    description: "Why a sincere-sounding correction that nothing carries forward isn't self-correction at all — and what changes when the fix becomes a file.",
    date: '2026-06-24',
    series: 'Introducing al-Nizam — Trust & Correctness',
    tags: ['Trust', 'Correctness', 'Memory', 'Architecture'],
  },
  {
    slug: 'thousand-fold-acceleration',
    title: 'Your AI got faster. Your work with it plateaued anyway.',
    description: "Why raw AI use flattens after the first few months — and what changes when the discipline compounds instead of you. Snapshot capability plateaus; trajectory compounds.",
    date: '2026-06-17',
    series: 'Introducing al-Nizam — Trajectory',
    tags: ['Trajectory', 'Compounding', 'Memory', 'Continuity'],
  },
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
