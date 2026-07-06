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

export type FounderDimension = {
  label: string;
  note: string;
};

export const founder = {
  pageTitle: 'Ebadullah Siddiqui',
  description: "Ebadullah Siddiqui — Founder of al-Nizam, Founder and CEO of ERSA Technologies. Three decades across enterprise IT, business development, program management, government contracting, entrepreneurship, and product development.",

  subtitle: 'Founder of al-Nizam. Founder and CEO of ERSA Technologies.',

  // Breadth-of-experience strip — the credibility argument for al-Nizam is that
  // it comes from someone who has operated across the business, not only the IT.
  dimensions: [
    { label: 'Enterprise IT', note: 'Virtualization, cloud, cybersecurity, governance, automation — the infrastructure built to hold.' },
    { label: 'Business Development', note: 'Finding the opportunity, shaping the offer, building the relationships that turn capability into a business.' },
    { label: 'Program & Project Management', note: 'Running complex delivery to scope, schedule, and accountability across many stakeholders.' },
    { label: 'Government Contracting', note: 'Operating inside the compliance, structure, and rigor that public-sector work demands.' },
    { label: 'Entrepreneurship', note: 'Founder and CEO of ERSA Technologies — carrying the risk and building the company.' },
    { label: 'Product Development', note: 'Turning a lived problem into a built product. al-Nizam is the latest.' },
  ] as FounderDimension[],

  sections: [
    {
      heading: 'Three decades in the work',
      body: [
        "I have spent thirty years in serious work — and not only the technical kind. I have built and run enterprise infrastructure: virtualization, cloud, cybersecurity, governance, automation. And I have done the work around it that decides whether technology becomes a business — development, program and project management, government contracting, and building a company from the ground up. The engagements have spanned government, healthcare, financial services, and commercial sectors, often the parts where the stakes are highest and the structure has to hold.",
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
      heading: 'Why it comes from me',
      body: [
        "al-Nizam is not an IT tool with better branding. It is an operating discipline — governance, accountability, continuity, honest accounting of cost and reasoning. Those are business concerns before they are technical ones.",
        "Building it took the full breadth. The infrastructure lens, yes — but also the program-management rigor that holds delivery accountable, the government-contracting discipline where boundaries are not optional, the business-development judgment about what is actually worth building, and the founder's willingness to carry the risk of building something new before anyone asked for it. That is why al-Nizam looks the way it does: structural where a narrower background would have shipped a slogan.",
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
