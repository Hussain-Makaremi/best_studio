---
name: Monocle
source: https://styles.refero.design/style/9165ecb1-f068-4093-8783-1f3c98898b8a
category: editorial
tags: [light, cream-canvas, serif, monochrome, single-accent, hairline-rules, broadsheet]
best_for: News / magazine publications and content-dense editorial homepages
---
# Monocle
> Quality broadsheet on cream paper — Plantin serif everywhere, tightly-edited grid, thin rules, minimal radii, monochrome plus one signal yellow.

## Color tokens
| token | hex | role |
|---|---|---|
| Signal Yellow | #ffc500 | Subscribe button, Radio card, illustration fills — low-frequency emphasis (not a general CTA color) |
| Folio Black | #000000 | Primary text, headlines, nav, icons, 1px hairlines |
| Newsprint Cream | #fdfcf3 | Page canvas |
| Broadsheet White | #ffffff | Card surfaces, feature panels, inverted text |
| Margin White | #fdfbe4 | Elevated/featured blocks (radio card, portrait bgs) |
| Pull Quote Gray | #e7e7e7 | Card backgrounds, muted panel fills |
| Rule Gray | #d9d9d9 | Borders, dividers, input outlines |
| Caption Gray | #6e6e6e | Secondary text, metadata, bylines |
| Mute Gray | #b3b3b3 | Tertiary text, disabled, low-emphasis nav, read-times |
| Charcoal | #211d1c | Warm near-black button borders/outlines |
| Desk Blue | #64d5ff | Decorative illustration accent only |

Surfaces: 0 #fdfcf3 canvas → 1 #ffffff (utility bar, sponsored, cards) → 2 #fdfbe4 (featured) → 3 #e7e7e7 (recessed, portrait circles).

## Typography
- **Plantin** (brand serif) — 400, 700; 13–40px (9 values); line-height 1–1.5; tracking -0.02em display, 0.01em body, 0.05em small caps, 0.075em eyebrows. Fallback: Source Serif Pro, Spectral, Playfair Display. The only typeface carrying editorial voice (wordmark, headlines, body, titles, bylines).
- **Helvetica Neue** (utility sans) — 400, 700; 13, 14, 16, 24px; line-height 1–1.5; 0.01em. Fallback: Inter, Helvetica, Arial. UI chrome only.
- **Chanel** — 700, 9px, line-height 1 (detected, not described).

Scale (Major Second 1.125 from 16px):
| role | size | line-height | tracking | token |
|---|---|---|---|---|
| caption | 13px | 1.2 | 0.65px | --text-caption |
| body | 16px | 1.38 | 0.16px | --text-body |
| subheading | 18px | 1.3 | 0.18px | --text-subheading |
| heading-sm | 20px | 1.25 | -0.4px | --text-heading-sm |
| heading | 24px | 1.2 | -0.48px | --text-heading |
| heading-lg | 28px | 1.2 | -0.56px | --text-heading-lg |
| heading-xl | 32px | 1.15 | -0.64px | --text-heading-xl |
| display | 40px | 1 | -0.8px | --text-display |

## Spacing, radius, elevation
- Base 4px; compact. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 80, 216px.
- Radius: nav 0, tags 0, buttons 0, cards 8px (8px only on photo containers in hero feature row).
- No drop shadows — elevation via tonal surface shifts and 1px #d9d9d9 hairlines (print convention).

## Layout
- Max-width 1200px; section gap 80px; card padding 16px; element gap 8px.
- Broadsheet model: masthead with centered wordmark → pipe-separated category nav → 3-column grid (large lead left, secondary stack middle, persistent Radio sidebar right); collapses to single column on mobile.
- Sticky utility bar; typographic nav, no dropdowns/mega-menus.
- Imagery: documentary photography (portraits, architecture, still-lifes), full-bleed in grid cells, no grading/overlays; flat geometric illustrations in black line + #ffc500 fills + occasional #64d5ff. High image density.

## Components
- **Wordmark Header:** centered MONOCLE, Plantin 700 ~40px, -0.02em; editorial flag (thumbnail + captions) left, mascot + tagline right; on #fdfcf3, no border.
- **Primary Section Nav:** AFFAIRS | BUSINESS | CULTURE | DESIGN | FASHION | TRAVEL | CITY GUIDES — Plantin 13px/400 uppercase 0.075em, pipe-separated, 1px hairline above/below, 0 radius.
- **Utility Bar:** sticky; hamburger + MAGAZINE / RADIO / SHOP left; search + LOG IN + SUBSCRIBE + cart + language right; #ffffff, 1px #d9d9d9 bottom; Helvetica Neue 13px/700.
- **Subscribe Button:** #ffc500 fill, #000000 Helvetica Neue 13px/700 uppercase 0.01em, 0 radius, 8px/16px padding — sole yellow element in the chrome.
- **Lead Article Card:** on #fdfcf3; eyebrow Plantin 13px uppercase tracked; headline Plantin 24–28px/400, -0.56px, 1.20; deck Plantin 16px #6e6e6e; read-time 13px #b3b3b3; full-bleed photo; no border/fill.
- **Sidebar Article Card:** photo top, eyebrow + headline + read-time; no border/bg; 8px gap.
- **Opinion Card:** centered circular portrait on #e7e7e7 or #fdfbe4; author Plantin 16px/700; headline Plantin 20px/400; read-time #b3b3b3; vertical 1px #d9d9d9 divider between cards.
- **Monocle Radio Card:** tall right sidebar; header #000000 with white Plantin 13px uppercase tracked "MONOCLE RADIO"; body #fdfbe4; "LISTEN LIVE" button (#000000 bg, #ffc500 play icon); show list; 0 radius; 1px #d9d9d9 left border.
- **Sponsored Module:** white card, "SPONSORED BY" Plantin 13px tracked #6e6e6e, logo, 8px padding, 1px #d9d9d9 border.
- **Hero Feature Banner:** full-width 4-column article tiles, full-bleed photos, 0 radius, 16px gap, #fdfcf3.
- **Editorial Illustration Block:** flat geometric, 0 radius, black line, #ffc500 fills, occasional #64d5ff.
- **Audio Indicator Icon:** 24px circular #ffc500 with black speaker glyph over photos.
- **Section Divider:** 1px solid #d9d9d9, full container width.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Plantin for all editorial content; never another serif.
- Headlines 24–40px Plantin 400, -0.02em (signature).
- Eyebrows: uppercase Plantin 13px, 0.05–0.075em.
- #ffc500 only on Subscribe, Radio card, illustration fills.
- Separate cards/columns with 1px #d9d9d9 rules, not spacing alone.
- 0 radius borders; 8px only on hero-row photo containers.
- 3-column grid on desktop → single column mobile.

Don't:
- Drop shadows.
- Additional accents.
- Sans-serif body copy (Helvetica Neue is chrome only).
- Radius larger than 8px.
- Centered article headlines — left-align.
- Subscribe button outside the utility bar.
- Icon fills other than #000000 or #ffc500.

Signature choices: one color, one button; Plantin does everything editorial; cream canvas not white; zero shadows, all hairlines.

## Steal this
- Hairline 1px rules (#d9d9d9) between columns/cards as the grid's skeleton — broadsheet structure without boxes.
- Uppercase, widely-tracked serif eyebrows (0.075em) instead of sans labels.
- One accent reserved for exactly one conversion element (Subscribe) + editorial illustration.
- Tonal surface stack (cream → white → pale yellow → gray) instead of shadows.
