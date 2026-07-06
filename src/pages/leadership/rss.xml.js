import rss from '@astrojs/rss';
import { articles } from '../../data/articles';

export async function GET(context) {
  return rss({
    title: 'al-Nizam Leadership',
    description: 'Long-form pieces examining the disciplines al-Nizam has evolved.',
    site: context.site,
    // Single source of truth: src/data/articles.ts (shared with the leadership index).
    items: articles.map((a) => ({
      title: a.title,
      pubDate: new Date(a.date),
      description: a.description,
      link: `/leadership/${a.slug}/`,
      categories: a.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
