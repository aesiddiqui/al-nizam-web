// rehype-house-html — turn plain canonical markdown into al-nizam-web's article
// "house HTML" conventions, on the HTML AST (hast), so a promoted .md renders
// byte-for-byte like the hand-authored .astro it replaces.
//
// Three block-level transforms (all idempotent, all skip MDX JSX nodes so the
// bespoke .mdx figures — <FigTerminal/> etc. — pass through untouched):
//
//   1. Lead        `> **Lead.** text`               → <p class="lead">text</p>
//   2. Figure      image paragraph + `**Figure N.**` → <figure class="fig"><img><figcaption>…</figcaption></figure>
//   3. Table figure  table + `**Table N.**`/`**Figure N.**` → <figure class="fig-table"><table>…</table><figcaption>…</figcaption></figure>
//   4. Endnote     a paragraph that is entirely one *…*   → <p class="endnote">…</p>  (the series closing note)
//
// Pairing is by adjacency at the block level (the caption paragraph immediately
// follows the image/table, whitespace text nodes ignored). Path rewriting is NOT
// done here — it belongs to the Chronicle→web promote step; migrated .md already
// carries final /figures/*.svg paths.

const isElement = (n, tag) => n && n.type === 'element' && (!tag || n.tagName === tag);
const isWhitespace = (n) => n && n.type === 'text' && /^\s*$/.test(n.value);

// Concatenated text content of a hast node.
function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(textOf).join('');
  return '';
}

// Index of the next non-whitespace node at or after `from`, else -1.
function nextIndex(children, from) {
  for (let i = from; i < children.length; i++) {
    if (!isWhitespace(children[i])) return i;
  }
  return -1;
}

// First non-whitespace child, or null.
function firstMeaningful(node) {
  if (!node || !node.children) return null;
  for (const c of node.children) {
    if (!isWhitespace(c)) return c;
  }
  return null;
}

// A <p> whose only meaningful content is a single <img>.
function singleImageParagraph(node) {
  if (!isElement(node, 'p')) return null;
  const meaningful = node.children.filter((c) => !isWhitespace(c));
  if (meaningful.length === 1 && isElement(meaningful[0], 'img')) return meaningful[0];
  return null;
}

// A caption <p> that starts with <strong>Figure N.</strong> / <strong>Table N.</strong>.
function isCaptionParagraph(node, kindRe) {
  if (!isElement(node, 'p')) return false;
  const first = firstMeaningful(node);
  if (!isElement(first, 'strong')) return false;
  return kindRe.test(textOf(first).trim());
}

const figcaption = (captionP) => ({
  type: 'element',
  tagName: 'figcaption',
  properties: {},
  // Reuse the caption paragraph's inline children verbatim (keeps <strong>, <em>, <code>).
  children: captionP.children,
});

const figure = (className, ...children) => ({
  type: 'element',
  tagName: 'figure',
  properties: { className: [className] },
  children,
});

// `> **Lead.** rest` blockquote → <p class="lead">rest</p>; null if it isn't one.
function tryLead(blockquote) {
  const inner = firstMeaningful(blockquote);
  if (!isElement(inner, 'p')) return null;
  const first = firstMeaningful(inner);
  if (!isElement(first, 'strong') || textOf(first).trim() !== 'Lead.') return null;

  // Drop the "Lead." strong and one following space; keep the rest of the inline run.
  const rest = [];
  let seenStrong = false;
  for (const c of inner.children) {
    if (!seenStrong && c === first) { seenStrong = true; continue; }
    if (seenStrong && rest.length === 0 && c.type === 'text') {
      const trimmed = c.value.replace(/^\s+/, '');
      if (trimmed) rest.push({ ...c, value: trimmed });
      continue;
    }
    if (seenStrong) rest.push(c);
  }
  return { type: 'element', tagName: 'p', properties: { className: ['lead'] }, children: rest };
}

function transformChildren(children) {
  const out = [];
  for (let i = 0; i < children.length; i++) {
    const node = children[i];

    // 1 — Lead blockquote.
    if (isElement(node, 'blockquote')) {
      const lead = tryLead(node);
      if (lead) { out.push(lead); continue; }
    }

    // 2 — Image figure: <p><img></p> immediately followed by a **Figure N.** caption.
    const img = singleImageParagraph(node);
    if (img) {
      const j = nextIndex(children, i + 1);
      if (j > -1 && isCaptionParagraph(children[j], /^Figure\s+\d+/)) {
        out.push(figure('fig', img, figcaption(children[j])));
        i = j;
        continue;
      }
    }

    // 3 — Table figure: <table> immediately followed by a **Table N.**/**Figure N.** caption.
    if (isElement(node, 'table')) {
      const j = nextIndex(children, i + 1);
      if (j > -1 && isCaptionParagraph(children[j], /^(Table|Figure)\s+\d+/)) {
        out.push(figure('fig-table', node, figcaption(children[j])));
        i = j;
        continue;
      }
    }

    // 4 — Endnote: a paragraph whose only meaningful content is a single <em>
    // (the series closing note). Unwrap to <p class="endnote"> so it reads italic +
    // muted like the hand-authored version, without markdown's nested-emphasis breakage.
    // Skip paragraphs that ALREADY carry a class (e.g. an authored .fig-note is also a
    // single-<em> paragraph but must keep its own class).
    const hasClass = isElement(node, 'p') && node.properties && node.properties.className;
    if (isElement(node, 'p') && !hasClass) {
      const meaningful = node.children.filter((c) => !isWhitespace(c));
      if (meaningful.length === 1 && isElement(meaningful[0], 'em')) {
        out.push({
          type: 'element',
          tagName: 'p',
          properties: { className: ['endnote'] },
          children: meaningful[0].children,
        });
        continue;
      }
    }

    // Otherwise recurse into element children (bespoke MDX JSX nodes are not
    // type 'element', so they're never descended into or rewritten).
    if (node.type === 'element' && Array.isArray(node.children)) {
      node.children = transformChildren(node.children);
    }
    out.push(node);
  }
  return out;
}

export function rehypeHouseHtml() {
  return (tree) => {
    if (!Array.isArray(tree.children)) return;

    // Lead-from-leading-italic: some drafts open with an italic *subtitle* paragraph
    // instead of a `> **Lead.**` blockquote. Promote that first lone-<em> paragraph to
    // .lead BEFORE the endnote pass, so it isn't mistaken for the closing endnote (which
    // is also a lone-<em> paragraph, but at the end). Clean drafts start with the
    // blockquote, not a lone-<em>, so this is a no-op for them.
    // First ELEMENT (skips MDX import/ESM nodes + whitespace that precede the body).
    const firstIdx = tree.children.findIndex((n) => n.type === 'element');
    const first = tree.children[firstIdx];
    if (isElement(first, 'p') && !(first.properties && first.properties.className)) {
      const meaningful = first.children.filter((c) => !isWhitespace(c));
      if (meaningful.length === 1 && isElement(meaningful[0], 'em')) {
        tree.children[firstIdx] = {
          type: 'element', tagName: 'p', properties: { className: ['lead'] },
          children: meaningful[0].children,
        };
      }
    }

    tree.children = transformChildren(tree.children);
  };
}
