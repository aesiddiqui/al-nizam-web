import rss from '@astrojs/rss';
import { getLeadershipArticles } from '../../lib/leadership';

export async function GET(context) {
  const articles = await getLeadershipArticles();
  return rss({
    title: 'al-Nizam Leadership',
    description: 'Long-form pieces examining the disciplines al-Nizam has evolved.',
    site: context.site,
    // Single source of truth: the `leadership` content collection (shared with the index).
    items: articles.map((a) => ({
      title: a.title,
      pubDate: new Date(a.date),
      description: a.description,
      link: a.href,
      categories: a.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
