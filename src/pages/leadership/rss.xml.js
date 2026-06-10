import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'al-Nizam Leadership',
    description: 'Long-form pieces examining the disciplines al-Nizam has evolved.',
    site: context.site,
    items: [
      {
        title: 'AI forgets everything the moment I close the tab',
        pubDate: new Date('2026-06-10'),
        description: 'How al-Nizam keeps continuity that does not depend on the AI tool remembering. Piece 1 of introducing-al-nizam series.',
        link: '/leadership/memory-and-pipeline-in-practice/',
      },
    ],
    customData: '<language>en-us</language>',
  });
}
