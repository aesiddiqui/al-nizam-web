// About canonical data — framework-identity narrative for /about page.
//
// CURRENT STATE: site-local data file (this file).
// FUTURE CANONICAL: framework-identity substrate canonical-record when activated;
// projection from al-Sijill (the Register) + Sibawayh-the-Codex chapters.
// Per project CLAUDE.md "al-nizam-web COMPOSES (not duplicates) content from other
// al-Nizam capability modules" — this data SHOULD compose from canonical when the
// canonical-source substrate activates.
//
// DISCIPLINE HONORED:
// - al-Nizam alone (no name-meaning stacking with "framework"/"system")
// - "the framework" / "the system" / "al-Nizam" used interchangeably in prose
// - praxis_what_this_is_not_disambiguation: explicit disambiguation section
// - Calibrated-uncertainty: claims defensible from framework's actual structural design
// - Streams-becoming-rivers-becoming-ocean lineage acknowledgment honored

export type AboutSection = {
  heading: string;
  body: string[];
  bullets?: { strong: string; rest: string }[];
};

export const about = {
  pageTitle: 'About al-Nizam',
  description: "al-Nizam — Arabic for the order, the system, the discipline — is an operating layer between operator and AI. Framework identity, what it is not, the operator-AI partnership thesis, and civilizational lineage.",

  leadParagraph:
    "al-Nizam — Arabic for the order, the system, the discipline — is an operating layer between operator and AI. It holds continuity, governance, and accountability structurally, in files the operator controls, outside the AI tool's memory entirely.",

  sections: [
    {
      heading: 'What al-Nizam is',
      body: [
        "The framework was built for a specific problem the AI industry has not solved: how a single operator wields AI as a coequal partner across years of serious work without losing the structural discipline that determines whether the work compounds or evaporates. The substrate is the answer. al-Nizam codifies it.",
        "The work is not aspirational. al-Nizam is what I had to build, after three decades of IT, to operate AI without losing what I had built before.",
      ],
    },
    {
      heading: 'What al-Nizam is not',
      body: [
        "Disambiguation matters. al-Nizam is none of the following:",
      ],
      bullets: [
        {
          strong: 'Not a chat wrapper.',
          rest: "It is not a UI layer over a single AI model. It is an operating layer that engages multiple AI tools through their native interfaces and persists state outside them.",
        },
        {
          strong: 'Not vibe coding.',
          rest: "It is not a \"let AI do it\" promise. The operator stays in the loop, sets direction, and bears the risk. The partnership is coequal; the responsibility is not.",
        },
        {
          strong: "Not \"compliance-ready\" sloganware.",
          rest: "It does not offload regulatory burden. It makes the boundaries structural so they are impossible to cross by accident. The operator still has to know what the boundaries are.",
        },
        {
          strong: 'Not a single-vendor product.',
          rest: "The Confidant role is substrate-replaceable by design. As AI capability evolves — different model generations, different vendors, eventually open-weights — the framework keeps functioning. The operator is the constant. The substrate is the constant. The model is the substrate-replaceable component.",
        },
      ],
    },
    {
      heading: 'The operator-AI partnership thesis',
      body: [
        "al-Nizam is built on a single architectural claim: serious knowledge work needs a coequal partner, and AI can occupy that role if the substrate holds the discipline structurally rather than asking the operator to be disciplined every session perfectly forever.",
        "The two coequal roles are:",
      ],
      bullets: [
        {
          strong: 'The operator —',
          rest: "sets direction, bears the risk, holds strategic authority, brings domain experience.",
        },
        {
          strong: 'The Confidant —',
          rest: "surfaces what the operator does not know, holds the structural pairing for codified disciplines, refuses sycophancy, supplies calibrated-uncertainty discipline in dialogue.",
        },
      ],
    },
    {
      heading: 'Substrate architecture',
      body: [
        "The framework is the substrate that makes the partnership work across years. Memory, protocols, transparency lifecycle, vigilance, reckoning — all the disciplines that survive operator-discipline lapses because they are codified into files, hooks, and protocols outside any single AI session.",
        "When the AI tool's context fills, the framework has already written state to files. When the session ends, the next session reads them. When the vendor changes models, the new model reads the same files. When the operator switches machines, the files synchronize. Continuity is structural, and it composes through everything underneath it.",
      ],
    },
    {
      heading: 'Civilizational lineage',
      body: [
        "al-Nizam is the current canonical name. The work iterated through prior names — streams becoming rivers becoming ocean — drawing on three decades of operator experience and on a deeper civilizational tradition of structured discipline, accountability, and reckoning.",
        "Substrate names within the framework honor that lineage where they fit: al-Sijill (the Register), al-Wilaya (the Tenancy), Ibn Khaldun (the Quaestor), al-Muhasaba (the Reckoning), among others. Each name carries weight; each is chosen for distinctive-contribution match, not for marketing.",
      ],
    },
    {
      heading: 'For whom',
      body: [
        "al-Nizam is for operators who hold serious work and cannot afford to lose continuity, boundary, or honest accounting to AI tooling that was not designed for either.",
        "The leadership channel makes the design visible. The Confidant role makes the partnership tangible. The framework is operating now; this site is one of its surfaces.",
      ],
    },
  ] as AboutSection[],
};
