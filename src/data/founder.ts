// Founder canonical data — operator-public-identity narrative for /founder page.
//
// CURRENT STATE: site-local data file (this file).
// FUTURE CANONICAL: al-Izhar (الإظهار, the Operator Showcase) substrate when activated.
// Per project CLAUDE.md "al-nizam-web COMPOSES (not duplicates) content from other
// al-Nizam capability modules" — this data SHOULD compose from canonical when the
// canonical-source substrate activates.
//
// PRE-PUBLISH DISCIPLINE applied: bio is intentional public-facing identity content
// (name + company are the founder identity; sectors named generically without
// specific client names). Distinct from author bio (~55 words byline) — this is the
// substantial standalone-page narrative (~500 words) sized for /founder page substance
// threshold + reuse-economics (LinkedIn About / Substack profile / grant narratives /
// pitch decks compose from this canonical).
//
// CALIBRATED-UNCERTAINTY applied: three-decade IT lens claim defensible; AI/LLM
// "recent years" framing honest (LLMs are recent technology); "streams becoming
// rivers becoming ocean" implicit in the lineage acknowledgment.

export type FounderSection = {
  heading: string;
  body: string[];
};

export const founder = {
  pageTitle: 'Ebadullah Siddiqui',
  description: "Ebadullah Siddiqui — Founder of al-Nizam, Founder and CEO of ERSA Technologies. Three decades in IT across government, healthcare, financial services, and commercial sectors.",

  subtitle: 'Founder of al-Nizam. Founder and CEO of ERSA Technologies.',

  sections: [
    {
      heading: 'Three decades in the work',
      body: [
        "I have spent thirty years in IT — virtualization, cloud, governance, cybersecurity, scripting, automation, enterprise infrastructure. The engagements have spanned government, healthcare, financial services, and commercial sectors, often the parts of those sectors where the stakes are highest and the structure has to hold.",
        "The work taught me one thing I keep returning to: serious infrastructure does not get built by tools. It gets built by the discipline that operates the tools. The substrate underneath is what determines whether the work compounds across years or evaporates across months.",
        "In recent years, the discipline question shifted shape. AI tooling arrived in a serious way, and with it the operator-AI partnership problem: how does a single operator wield AI as a coequal partner without losing the structural discipline that made the prior thirty years' work compound? The capability was suddenly available; the substrate to operate it correctly was not.",
      ],
    },
    {
      heading: 'Why al-Nizam exists',
      body: [
        "al-Nizam — the order, the system, the discipline — is the answer I had to build because no one else was building it.",
        "I had lived inside the gap that the AI industry was not closing. Continuity that did not survive the next session. Boundaries that depended on operator memory rather than structural enforcement. Reasoning that the tool was not asked to label. Costs that accumulated in the dark. Discipline that was supposed to come from the operator, every time, in every session, perfectly, forever.",
        "That model does not scale to the actual complexity of serious work. It does not survive the normal variance of human attention, energy, and time. It does not compound. After three decades of building infrastructure that does, I could not accept that AI tooling would not.",
        "So I built the substrate. Memory that lives in files outside the AI tool, not chat history inside it. Protocols that survive operator lapses. A partnership model — the operator and the Confidant role — that holds discipline structurally rather than through hope. al-Nizam is the arrived name — chosen deliberately after deep introspection into the naming convention itself. The work iterated through prior names, and the underlying lens draws on the full thirty-year career.",
      ],
    },
    {
      heading: 'Where the work happens now',
      body: [
        "I am Founder and CEO of ERSA Technologies. The engagements continue to span government, healthcare, financial services, and commercial sectors. al-Nizam is the operating layer I built for myself, am building in the open, and intend to make available to other operators who hold serious work and cannot afford to lose continuity, boundary, or honest accounting to AI tooling that was not designed for either.",
      ],
    },
    {
      heading: 'What this is',
      body: [
        "Partnership with teeth, not partnership with slogans. I built al-Nizam because the structural answer was missing. If you are a peer operator who has felt the same gap, you are who this work is for.",
      ],
    },
  ] as FounderSection[],
};
