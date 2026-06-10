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

export const substrates: Record<string, Substrate> = {
  framework: {
    name: 'al-Nizam framework foundational',
    since: '2026-04-01',
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
