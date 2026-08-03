// Leadership corpus accessor — the collection IS the registry now (replaces the
// hand-kept src/data/articles.ts). The leadership index + RSS both read from here, so
// ordering and the composed series label live in one place.
import { getCollection } from 'astro:content';

export type LeadArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;      // ISO yyyy-mm-dd (conceived date)
  series: string;    // composed "Series — Cluster" (as the old articles.ts exposed)
  tags: string[];
  href: string;
};

// Newest-first by conceived `date`, `seq` breaking same-date ties (higher = newer) —
// preserving the exact hand-order articles.ts encoded (e.g. trust before memory, both 06-10).
export async function getLeadershipArticles(): Promise<LeadArticle[]> {
  const entries = await getCollection('leadership');
  return entries
    .map((e) => ({
      slug: e.id,
      title: e.data.title,
      description: e.data.description,
      date: e.data.date,
      series: `${e.data.series} — ${e.data.cluster}`,
      tags: e.data.tags,
      seq: e.data.seq ?? 0,
      href: `/leadership/${e.id}/`,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.seq - a.seq))
    .map(({ seq, ...rest }) => rest);
}

// Unique tags in first-appearance order across the newest-first corpus.
export function tagsOf(articles: LeadArticle[]): string[] {
  return [...new Set(articles.flatMap((a) => a.tags))];
}
