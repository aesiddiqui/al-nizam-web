// Substrate-dates registry — single source of truth for article lineage metadata.
// Each entry: substrate identifier → display name + first-substantive-codification date.
// Articles import this + compute durations at build time via lib/duration.ts.
// Adding a new substrate-covered-in-article: add one entry here; reference by key in
// the article frontmatter. Dates verifiable via al-Sijill register + DECISIONS log +
// memory entry frontmatter (more defensible than git history split across account rename).

export type Substrate = {
  name: string;
  since: string;      // YYYY-MM-DD format
  caveat?: string;    // optional appended honest-framing phrase
};

// Framework lineage — streams → rivers → ocean.
// al-Nizam is the current name (ratified Islamic Theme Migration Sitting A, June 1, 2026).
// Loci was the immediate predecessor framework name (early April → early June 2026).
// Pre-Loci: piecemeal development through multiple smaller threads that gradually coalesced.
// The conceptual + operational discipline draws on three decades of operator IT experience.
// AVOID specific April 1 framing in user-facing surfaces (April Fools' Day credibility-trap).
export type FrameworkLineageEntry = {
  name: string;
  era: string;
  note?: string;
};

export const frameworkLineage: FrameworkLineageEntry[] = [
  {
    name: 'al-Nizam',
    era: 'June 2026 — present',
    note: 'current canonical name; ratified Islamic Theme Migration Sitting A',
  },
  {
    name: 'Loci',
    era: 'April 2026 — June 2026',
    note: 'immediate predecessor framework name',
  },
  {
    name: 'Pre-Loci piecemeal threads',
    era: 'preceding years — early 2026',
    note: 'multiple smaller concepts and threads that gradually coalesced into Loci',
  },
];

export const substrates: Record<string, Substrate> = {
  framework: {
    name: 'al-Nizam framework operational',
    since: '2026-04-15',  // approximate early-April coalescence — AVOID April 1 specifically
    caveat: 'al-Nizam is the current name; the framework operated as Loci from early April through May 2026; pre-Loci work developed piecemeal — streams becoming rivers becoming ocean — over preceding years drawing on three decades of operator IT experience',
  },
  frameworkPlatformUpgrade: {
    name: 'Substantial platform upgrade (memory system + Continuum foundations)',
    since: '2026-04-26',
  },
  memorySystem: {
    name: 'Memory system + PROJECT_STATE + HANDOFF protocol',
    since: '2026-04-26',
  },
  continuum: {
    name: 'The Continuum cross-strand convention',
    since: '2026-04-26',
  },
  resumeClose: {
    name: '/resume + /close session-bridge protocols',
    since: '2026-04-26',
  },
  visibilityTiered: {
    name: 'Data classification + visibility-tiered exposure + Sanctum disciplines',
    since: '2026-04-26',
  },
  alWilaya: {
    name: 'al-Wilaya (the Tenancy) + ip_separation_guard',
    since: '2026-04-26',
  },
  prePublishGate: {
    name: '/pre-publish gate skill',
    since: '2026-06-04',
    caveat: 'the underlying sanitization discipline operating in practice longer than the skill that names it',
  },
  quaestor: {
    name: 'Ibn Khaldun (the Quaestor) audit + INCEPTION.md decision record + compliance-framework checks',
    since: '2026-04-26',
  },
  alAlim: {
    name: "al-'Alim (the Scholar) consult discipline for civilizational lineage",
    since: '2026-04-26',
  },
};
