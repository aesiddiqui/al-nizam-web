import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'al-Nizam Leadership',
    description: 'Long-form pieces examining the disciplines al-Nizam has evolved.',
    site: context.site,
    items: [
      {
        title: 'I can\'t let AI near my real, sensitive work',
        pubDate: new Date('2026-06-10'),
        description: 'Why al-Nizam can be trusted with PII, HIPAA, PCI, and the work that makes the difference between safe and exposed. Piece 2 of introducing-al-nizam series.',
        link: '/leadership/trust-comes-from-structure/',
      },
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
