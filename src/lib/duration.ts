// Build-time duration computation for article lineage metadata.
// Computes smart-grain "~N days/weeks/months/years" strings at Astro build time.
// Honest-uncertainty framing: always prefixed with "~" — approximation, not claim of exactness.

export function durationSince(isoDate: string, asOf: Date = new Date()): string {
  const start = new Date(isoDate + 'T00:00:00Z');
  const ms = asOf.getTime() - start.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  if (days < 0) return 'not yet codified';
  if (days < 7) return days === 1 ? '~1 day' : `~${days} days`;
  if (days < 14) return '~1 week';
  if (days < 60) return `~${Math.round(days / 7)} weeks`;
  if (days < 730) {
    const months = Math.round(days / 30);
    return months === 1 ? '~1 month' : `~${months} months`;
  }
  const years = Math.round(days / 365);
  return years === 1 ? '~1 year' : `~${years} years`;
}

export function formatDate(isoDate: string): string {
  const d = new Date(isoDate + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
