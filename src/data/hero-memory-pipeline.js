// Per-article hero constellation — "Memory + Pipeline in Practice".
// Atmosphere, not a precise figure: the article's concepts as celestial bodies
// on the durable-state orbit (the in-body Fig 1 carries the exact argument).
// Colors inherit the al-Nizam night palette. `kind`/`val` drive size + labelling
// in ArticleHero.astro (the shared engine, reused from PlatformGraph).

export const graph = {
  nodes: [
    { id: 'a',    label: 'Session A',      kind: 'anchor', val: 20, color: '#F6F3EC' },
    { id: 'b',    label: 'Session B',      kind: 'anchor', val: 20, color: '#F6F3EC' },
    { id: 't1',   label: 'the Continuum',  kind: 'tier',   val: 12, color: '#C9A24B' },
    { id: 't2',   label: 'private state',  kind: 'tier',   val: 12, color: '#C9A24B' },
    { id: 't3',   label: 'personal cloud', kind: 'tier',   val: 12, color: '#C9A24B' },
    { id: 'close',label: '/close',         kind: 'gate',   val: 5,  color: '#E6C66E' },
    { id: 'resume',label: '/resume',       kind: 'gate',   val: 5,  color: '#E6C66E' },
    { id: 'conv', label: 'conversation',   kind: 'ghost',  val: 6,  color: '#8A93A3' },
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
    { source: 'a', target: 'conv', kind: 'ghost' },   // the discarded path — dim, off the orbit
  ],
};
