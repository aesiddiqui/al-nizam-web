// Per-article hero constellation — "Memory + Pipeline in Practice".
// NOT a random force-graph: a DELIBERATE, fixed 3D layout of the article's spine so
// the hero is relevant, not decorative — two Sessions bookending a durable core, with
// gold particles flowing A → durable → B (state surviving the close). Positions are
// pinned (fx/fy/fz); the in-body Fig 1 carries the exact tier detail.
// Colors inherit the al-Nizam night palette.

export const graph = {
  nodes: [
    // Bookending sessions (labelled — this is the "across sessions" story).
    { id: 'a', label: 'Session A', kind: 'anchor', val: 26, color: '#F6F3EC', fx: -150, fy: 6,  fz: 0 },
    { id: 'b', label: 'Session B', kind: 'anchor', val: 26, color: '#F6F3EC', fx: 150,  fy: 6,  fz: 0 },
    // Gates.
    { id: 'close',  label: '', kind: 'gate', val: 5, color: '#E6C66E', fx: -78, fy: 2,  fz: 10 },
    { id: 'resume', label: '', kind: 'gate', val: 5, color: '#E6C66E', fx: 78,  fy: 2,  fz: 10 },
    // Durable core — three tiers clustered at centre; the middle one carries the label.
    { id: 't1', label: '',              kind: 'tier', val: 12, color: '#C9A24B', fx: -6, fy: 30,  fz: -6 },
    { id: 't2', label: 'durable state', kind: 'core', val: 16, color: '#C9A24B', fx: 0,  fy: 0,   fz: 8  },
    { id: 't3', label: '',              kind: 'tier', val: 12, color: '#C9A24B', fx: -4, fy: -30, fz: -3 },
    // The conversation — off the flow, dim, discarded.
    { id: 'conv', label: '', kind: 'ghost', val: 8, color: '#8A93A3', fx: -70, fy: 60, fz: -26 },
  ],
  links: [
    { source: 'a', target: 'close',  kind: 'flow' },
    { source: 'close', target: 't1', kind: 'flow' },
    { source: 'close', target: 't2', kind: 'flow' },
    { source: 'close', target: 't3', kind: 'flow' },
    { source: 't1', target: 'resume', kind: 'flow' },
    { source: 't2', target: 'resume', kind: 'flow' },
    { source: 't3', target: 'resume', kind: 'flow' },
    { source: 'resume', target: 'b', kind: 'flow' },
    { source: 'a', target: 'conv', kind: 'ghost' },   // the discarded path — dim, off the flow
  ],
};
