// Author canonical data — operator-public-identity for al-nizam.ai surfaces.
//
// CURRENT STATE: site-local data file (this file).
// FUTURE CANONICAL: al-Izhar (الإظهار, the Operator Showcase) substrate when activated,
// OR al-Ifada (Leadership Channel) canonical author record at
// ~/projects/leadership-channel/content/author.json.
//
// Per project CLAUDE.md "al-nizam-web COMPOSES (not duplicates) content from other
// al-Nizam capability modules" — this data SHOULD compose from canonical when the
// canonical-source substrate activates. Build-time read mechanism (sync at /close OR
// direct read at build) to be designed when al-Izhar substrate activates.
//
// Adding a future author: extend to authors[] array; AuthorBio.astro takes optional
// authorId prop (default to founder).

export type Author = {
  name: string;
  bio: string;  // body text WITHOUT leading name — name renders separately for <strong>
};

export const founder: Author = {
  name: 'Ebadullah Siddiqui',
  bio: 'is the architect behind al-Nizam. Three decades in IT spanning virtualization, cloud, governance, cybersecurity, scripting, automation, and enterprise infrastructure — with recent years deep in operator-AI partnership and LLM-driven workflow architecture — across government, healthcare, financial services, and commercial sectors. Founder and CEO of ERSA Technologies. al-Nizam is the operating framework he had to build when he kept losing continuity the industry had no excuse to keep dropping.',
};
