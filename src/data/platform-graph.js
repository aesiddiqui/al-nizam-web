/* al-Nizam — PUBLIC platform graph data (curated, default-deny).
 *
 * SECURITY: the ONLY graph data that ships to the public site. Hand-authored from
 * tools/al-mushahada/PUBLIC-GRAPH-SPEC.md. Contains NO memory entry, client/tenant
 * name, personal identifier, commercial strategy, file path, or internal description.
 * Named nodes carry generalized, marketing-grade descriptions only; the remainder are
 * ANONYMOUS density nodes (no id/name/description) — true breadth, no disclosure.
 * Aggregate counts are real (framework counts 2026-06-29).
 */

// Real, verifiable maturity numbers.
export const meta = {
  families: 9,
  substrates: '40+',
  disciplines: '500+', // 503 codified memory entries (disciplines + decisions)
  chapters: 37,        // Codex canonical specs
  skills: 30,          // invocable /commands
  hooks: 15,           // structural enforcement hooks
};

// Generalized PUBLIC capability families (NOT internal family names).
export const families = [
  { id: 'fam-structure',     label: 'Structure & Boundaries',        color: '#C9A24B' },
  { id: 'fam-continuity',    label: 'Continuity & State',            color: '#6BA3C9' },
  { id: 'fam-recovery',      label: 'Recovery & Resilience',         color: '#C97B6B' },
  { id: 'fam-governance',    label: 'Governance & Decisions',        color: '#8FB36B' },
  { id: 'fam-provenance',    label: 'Provenance & Attribution',      color: '#B38FC9' },
  { id: 'fam-observability', label: 'Observability & Health',        color: '#6BC9B0' },
  { id: 'fam-transparency',  label: 'Transparency & Accountability', color: '#E0A96B' },
  { id: 'fam-knowledge',     label: 'Knowledge & Memory',            color: '#9BA9C9' },
  { id: 'fam-lifecycle',     label: 'Lifecycle & Protocols',         color: '#C99BB8' },
];

// Named, described substrates (allowlist headliners — all shipped/real).
const named = [
  { id: 'al-wilaya', label: 'al-Wilaya', family: 'fam-structure',
    desc: 'Organizes everything into a clear hierarchy of boundaries — project, client, domain — so the right context, permissions, and data-handling apply automatically, never by memory.' },
  { id: 'continuum', label: 'the Continuum', family: 'fam-continuity',
    desc: 'Carries working state across sessions and machines, so continuity never depends on the AI remembering. Close the tab, switch machines, change models — the thread holds.' },
  { id: 'ark', label: 'the Ark', family: 'fam-recovery',
    desc: 'Backup, recovery, and disaster-resilience for accumulated state — the work is never one mistake away from gone.' },
  { id: 'al-sijill', label: 'al-Sijill', family: 'fam-governance',
    desc: 'A unified registry of decisions and classifications — every significant choice is recorded, classified, and resolvable later.' },
  { id: 'al-isnad', label: 'al-Isnad', family: 'fam-provenance',
    desc: 'Provenance and attribution — capabilities and decisions are traceable to their origin and lineage, not floating free.' },
  { id: 'pulse', label: 'the Pulse', family: 'fam-observability',
    desc: 'Continuously checks the framework’s own health and invariants, surfacing drift or breakage before it becomes a problem.' },
  { id: 'al-mushahada', label: 'al-Mushahada', family: 'fam-observability',
    desc: 'The framework observing itself — the live architectural map you are looking at right now.' },
  { id: 'al-bayan', label: 'al-Bayan / al-Muhasaba', family: 'fam-transparency',
    desc: 'A declare-before, reckon-after discipline: substantial work is announced as intent, then honestly reviewed against what shipped — accountability built into the workflow.' },
];

// Anonymous density nodes per family — present-but-private. Total lands the honest
// "40+ substrates" at true density; no id/name/description exposed.
const anonCounts = {
  'fam-structure': 3, 'fam-continuity': 3, 'fam-recovery': 2, 'fam-governance': 4,
  'fam-provenance': 3, 'fam-observability': 2, 'fam-transparency': 3,
  'fam-knowledge': 6, 'fam-lifecycle': 6,
};

const colorOf = (id) => (families.find((f) => f.id === id) || {}).color || '#8A93A3';

function build() {
  const nodes = [];
  nodes.push({ id: 'core', label: 'al-Nizam', kind: 'core', level: 3, color: '#C9A24B',
    desc: 'The operating layer between you and AI — continuity, governance, and accountability, held structurally as one composed system.' });
  families.forEach((f) => nodes.push({ id: f.id, label: f.label, kind: 'family', level: 2, color: f.color }));
  named.forEach((n) => nodes.push({ id: n.id, label: n.label, kind: 'named', level: 1, family: n.family, color: colorOf(n.family), desc: n.desc }));
  let a = 0;
  families.forEach((f) => {
    for (let i = 0; i < (anonCounts[f.id] || 0); i++) {
      nodes.push({ id: 'anon-' + a++, kind: 'anon', level: 1, family: f.id, color: colorOf(f.id) });
    }
  });

  const links = [];
  families.forEach((f) => links.push({ source: f.id, target: 'core', kind: 'membership' }));
  nodes.filter((n) => n.family).forEach((n) => links.push({ source: n.id, target: n.family, kind: 'membership' }));
  // Composition — substrates wired to EACH OTHER (the composed whole).
  [['continuum', 'al-wilaya'], ['pulse', 'al-wilaya'], ['al-mushahada', 'al-sijill'],
   ['al-bayan', 'al-sijill'], ['ark', 'continuum'], ['al-isnad', 'al-sijill']]
    .forEach(([s, t]) => links.push({ source: s, target: t, kind: 'composition' }));

  return { nodes, links };
}

export const graph = build();
export const familyLabel = (id) => (families.find((f) => f.id === id) || {}).label || '';
