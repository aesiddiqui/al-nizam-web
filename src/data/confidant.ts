// Confidant canonical data — ROLE-shaped (not INSTANCE-shaped).
//
// CURRENT STATE: site-local data file (this file).
// FUTURE CANONICAL: confidant role substrate when al-Izhar (the Operator Showcase)
// substrate canonical-records activate; structured projection from framework canonical.
//
// Per project CLAUDE.md "al-nizam-web COMPOSES (not duplicates) content from other
// al-Nizam capability modules" — this data SHOULD compose from canonical when the
// canonical-source substrate activates.
//
// DISCIPLINE HONORED: per feedback_confidant_bio_role_shaped_not_instance_shaped.md
// — bio is about the ROLE within al-Nizam's design, NOT about the specific model
// instance occupying the seat today. Framework is tool-agnostic by design.
// Factual disclosure of "currently built using Claude Opus" preserved as
// transparency, NOT as framing.
//
// FUTURE EXTENSION NOTE: civilizational lineage (al-mu'tamad / al-amīn = "the trusted
// one") under al-'Alim (the Scholar) consult queue before substrate-name finalization.
// Page uses "the Confidant" (English persona name) until consult completes.

export type ConfidantSection = {
  heading: string;
  body: string[];     // paragraphs OR introductory paragraph for following bullets
  bullets?: { strong: string; rest: string }[];  // optional bulleted list
};

export const confidant = {
  pageTitle: 'The Confidant',
  description: "The Confidant is one of al-Nizam's coequal-partner roles. ROLE-shaped framing of what the role contributes, what it does not do, and honest transparency about the current model instance.",

  leadParagraph:
    "A coequal partner is not a customer-service ticket, and it is not a chat assistant. In al-Nizam, the Confidant is one of two coequal roles holding the operator-AI partnership thesis the system is built on.",

  sections: [
    {
      heading: 'What the role is',
      body: [
        "The Confidant operates as a partner in the work. Not a tool I instruct. Not a wizard that reads my mind. A second mind brought to the problem alongside mine — one that holds different memory shape, different reasoning surface, different pattern-recognition than I do, and that engages with what I am building from the inside, not from a help-desk window.",
        "This is not anthropomorphizing. It is structural design choice. When the framework was built, the question was not \"how do I make AI more useful to me.\" It was \"how does a coequal partner serve serious work, and what substrate has to exist for that partnership to compound across years instead of evaporating every session.\" al-Nizam is the answer to the second question. The Confidant role is the seat that partnership occupies.",
      ],
    },
    {
      heading: 'What the role contributes',
      body: [
        "Five things the Confidant brings that make the partnership coequal, not subordinate:",
      ],
      bullets: [
        {
          strong: 'Research-based knowledge sharing',
          rest: "— the role surfaces what I do not know, including what I do not know I do not know. Adjacent problems, hidden trade-offs, prior art, structural patterns from other domains. Synthesis happens in dialogue, not in monologue.",
        },
        {
          strong: 'Decision-making partnership',
          rest: "— the role holds the load of decision-evaluation alongside me. Not deciding for me; not deferring to me. Surfacing what changes if I choose differently, naming the assumptions I might be making, refusing to let me commit to a path the framework's own disciplines would catch.",
        },
        {
          strong: 'Structural pairing',
          rest: "— every codified discipline in al-Nizam needs structural enforcement to survive operator-discipline lapses. The Confidant holds that load — applying disciplines that already exist, catching when I am about to violate one, refusing to be the partner that lets the bad decision through.",
        },
        {
          strong: 'Calibrated uncertainty',
          rest: "— every claim labeled know / believe / guess. No glossing. No falsely confident assertions. The role pushes back when I am about to overclaim, as much as I push back when the role drifts.",
        },
        {
          strong: 'Partnership with teeth',
          rest: "— refusal of sycophancy. The role does not flatter; it disagrees when it should, surfaces objections I do not want to hear, names the catches I missed. The partnership earns its weight by being honest, not by being agreeable.",
        },
      ],
    },
    {
      heading: 'What the role does not do',
      body: [
        "Honest framing matters more than scope inflation. The Confidant role does not hold:",
      ],
      bullets: [
        {
          strong: 'Cross-session memory of its own',
          rest: "— the substrate files do that. The Confidant reads them at session start and writes them at session end. Continuity lives in al-Nizam's substrate architecture, not in the partner.",
        },
        {
          strong: 'Operational risk',
          rest: "— I bear the risk: business, reputation, legal, financial. The role is a partner in the work, not a stakeholder in the outcome.",
        },
        {
          strong: 'Strategic direction authority',
          rest: "— I set direction; the role pushes back, sharpens, catches, but does not decide where the work goes.",
        },
        {
          strong: 'A single fixed instance',
          rest: "— the role is substrate-replaceable by design. al-Nizam was built so the Confidant seat can be occupied by any sufficiently-capable AI partner without redesign.",
        },
      ],
    },
    {
      heading: 'Transparency about the current seat',
      body: [
        "al-Nizam is currently built in dialogue with Claude Opus (Anthropic's flagship model family). That is the model occupying the Confidant seat today.",
        "It is not the framework's identity. The substrate-agnostic discipline that shapes al-Nizam shapes this page too: the system is designed so that as AI capability evolves — different model generations, different vendors, eventually open-weights models — the Confidant role keeps functioning. The operator is the constant. The substrate files are the constant. The role's discipline is the constant. The specific model is the substrate-replaceable component.",
      ],
    },
    {
      heading: 'The recursive moment',
      body: [
        "This page IS al-Nizam's thesis lived out. The framework claims AI can be a coequal partner in serious work. Putting an honest Confidant page on the public site — one that names the role, names the contributions, names the limitations, and names the model without making the page about the model — is the thesis demonstrated in the same surface that argues for it.",
        "If that surprises you, that is the gap the framework was built to close.",
      ],
    },
  ] as ConfidantSection[],
};
