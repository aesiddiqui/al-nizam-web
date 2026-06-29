# Brand exports — production SVGs

Clean, standalone production assets derived from the locked mark geometry
(`../logo-v3-yours.html`) and the gold-on-night palette (`../theme.html`).
Canonical usage rules: see `../BRAND-GUIDE.html`.

## Files

| File | Color | Use |
|------|-------|-----|
| `mark.svg` | `currentColor` (themeable) | **Master.** The mark inherits the surface's text color via CSS `color`. This single file covers the gold / ink / reversed / mono variants — set the color in CSS, don't fork the file. |
| `favicon.svg` | Gold `#C9A24B` (fixed) | Browser tab / app icon. Fixed color because favicons render outside our CSS. |
| `lockup.svg` | `currentColor` (themeable) | Horizontal mark + wordmark + tight tagline. |

### Why no separate gold/ink/reverse/mono files
The mark is monochrome and uses `fill="currentColor"`, so one file themes to every
variant through CSS `color`:

```css
.mark-gold    { color: #C9A24B; }   /* on night */
.mark-ink     { color: #14171C; }   /* on paper */
.mark-reverse { color: #F6F3EC; }   /* on dark photo */
.mark-mono    { color: #000; }
```

Forking per-color files would just create drift. Keep one master.

## Status — NOT yet wired into the site

These are staged exports. The live site (`src/layouts/Layout.astro`) still uses the
pre-brand blue-typography theme and has **no favicon**. Wiring them re-themes the live
site, and **pushing this repo auto-deploys to al-nizam.ai** (Cloudflare) — so the wiring
step is a deliberate go, gated on:

- Steward ratifies gold-on-night (color)
- Final display serif selected (the `lockup.svg` wordmark is placeholder Georgia)
- al-'Alim consult before public ship

## Wiring sketch (when ready)

1. Move `favicon.svg` → `public/favicon.svg`; add to `<head>`:
   `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
2. Inline `mark.svg` into the `header.site-header` logo (mark + "al-Nizam" wordmark).
3. Repoint `Layout.astro` CSS tokens to the palette
   (`--color-bg: #0E1220; --color-accent: #C9A24B; --color-text: #F6F3EC;` … or a
   paper reading variant — decide dark-first vs light-reading per page).
