---
name: Linear
source: https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1
category: devtools
tags: [dark, near-black, single-accent, acid-lime, hairline-borders, compact]
best_for: Dark-first product/devtool marketing sites led by real product screenshots
---
# Linear
> Midnight precision instrument: near-black substrate, paper-white type, one acid-lime accent, hairline geometry.

Darkness is treated as substrate rather than theme. Text is crisp at tight tracking (-0.022em), weights stay 400–510 (no bold), borders are hairline (0.5px) so geometry creates hierarchy. Components feel precision-machined with minimal ornament.

## Color tokens
### Brand & accents
| token | hex | role |
|---|---|---|
| Acid Lime | #e4f222 | Primary action buttons, active nav indicators — sole chromatic accent |
| Pulse Green | #27a644 | Green outline accent for tags, dividers, focused edges |
| Coral Red | #eb5757 | Red wash for highlights, decorative bands, soft emphasis |
| Signal Teal | #02b8cc | Decorative accent, informational icon fills |
| Iris Violet | #6366f1 | Tag/badge fills — soft chromatic punctuation |
| Lavender | #8b5cf6 | Secondary tag fills, category indicators |

### Neutrals
| token | hex | role |
|---|---|---|
| Void | #08090a | Page canvas, full-bleed backgrounds |
| Carbon | #0f1011 | Card surfaces, nav bars |
| Obsidian | #161718 | Elevated surfaces, deeper card panels |
| Graphite | #23252a | Subtle borders, dividers, ghost button outlines |
| Smoke | #383b3f | Hairline borders — higher contrast than graphite |
| Ash | #62666d | Muted body text, inactive icons, secondary metadata |
| Fog | #8a8f98 | Tertiary text, placeholder copy, icon fills |
| Mist | #d0d6e0 | Secondary headings, button text on dark surfaces |
| Bone | #e5e5e6 | Near-white surface fills, high-contrast button text |
| Paper | #ffffff | Primary headings, hero type, max-contrast emphasis |

### Surface hierarchy
| level | name | hex | purpose |
|---|---|---|---|
| 0 | Void | #08090a | Canvas — full-bleed background |
| 1 | Carbon | #0f1011 | Cards, screenshot frames, nav containers |
| 2 | Obsidian | #161718 | Elevated panels, nested surfaces |
| 3 | Slate | #23252a | Interactive surface tint, ghost fills, borders |

## Typography
- **Inter Variable** (primary) — weights 300, 400, 510, 590; sizes 10–72px (14 values); line-height 1.0–2.75; tracking -0.022em (48–72px), -0.012em (20–32px), -0.011em (15px), -0.010em (13–16px); features `"cv01" on, "ss03" on, "zero" on`; fallback system-ui.
- **Berkeley Mono** (secondary) — weight 400; sizes 12, 14; line-height 1.40–1.71; tracking -0.013em; features `"cv01" on, "ss03" on`; role: code-adjacent UI, issue IDs, keyboard shortcuts; fallback JetBrains Mono, IBM Plex Mono, ui-monospace.

Scale (Minor Third from 16px base):
| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 72px | 510 | 1.0 | -1.584px |
| heading-lg | 64px | 510 | 1.0 | -1.408px |
| heading | 48px | 510 | 1.0 | -1.056px |
| heading-sm | 32px | 400 | 1.13 | -0.704px |
| subheading | 24px | 400 | 1.33 | -0.288px |
| body-lg | 20px | 590 | 1.33 | -0.24px |
| body | 16px | 400 | 1.5 | — |
| body-sm | 15px | 400 | 1.6 | -0.165px |
| caption | 13px | 400 | 1.2 | — |
| label | 12px | 400 | 1.4 | — |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 128px.
- Radius: small 2px · badges 4px · inputs 6px · buttons 6px · cards 12px · pills 9999px.
- Elevation via hairline borders (0.5px #23252a or 1px inset #23252a) and subtle dark drop shadows, not stacked shadow layers.

| shadow | value |
|---|---|
| sm | rgba(0,0,0,0.4) 0px 2px 4px 0px |
| md | rgba(0,0,0,0.2) 0px 0px 12px 0px inset |
| subtle | rgb(35,37,42) 0px 0px 0px 1px inset |
| subtle-2 | rgba(0,0,0,0.2) 0px 0px 0px 1px |
| subtle-3 | rgba(0,0,0,0.01) 0px 5px 2px, rgba(0,0,0,0.04) 0px 3px 2px, rgba(0,0,0,0.07) 0px 1px 1px, rgba(0,0,0,0.08) 0px 0px 1px |
| xl | rgba(8,9,10,0.6) 0px 4px 32px 0px |
| subtle-4 | rgba(255,255,255,0.03) 0px 0px 0px 1px inset, rgba(255,255,255,0.04) 0px 1px 0px inset, rgba(0,0,0,0.6) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 4px 4px |
| subtle-5 | rgba(0,0,0,0.1) 0px 0px 0px 2px |

The acid-lime CTA is the only place using stacked inset shadows (0px 5px 2px / 0px 3px 2px / 0px 1px 1px).

## Layout
- Max width 1200px, centered; section gap 96px; card padding 24px; element gap 8px.
- Full-bleed dark backgrounds to viewport edges.
- Hero: left-aligned 64–72px headline with right-aligned link CTA; large product screenshot bleeds slightly beyond max-width, floating on a dark-to-light gradient floor.
- Sections alternate text-left/image-right and full-width showcase bands.
- Customer logo strip: single horizontal row, neutral grey (#8a8f98), uniform size.
- Never 3-column grids or masonry.
- Nav: fixed top bar (logo left, links right), no sidebar or mega-menu.
- Imagery: product-screenshot-first (issue cards, kanban, AI panels) in hairline-bordered card frames; no stock photos, lifestyle or abstract illustration; icons are minimal single-color greyscale line SVGs.

## Components
- **Primary action (Acid Lime)** — bg #e4f222, text #08090a, radius 6px, padding 10px 16px, Inter 14px/510, tracking -0.011em. One chromatic button per view only.
- **Nav text button** — transparent, text #d0d6e0, padding 8px 12px, Inter 13px/400, no border, underline on hover.
- **Pill button** — bg rgba(255,255,255,0.05), text #d0d6e0, radius 9999px, padding 4px 12px, Inter 12–13px/400. Tag chips, status pills.
- **Ghost/outline button** — transparent, border 1px #23252a, text #d0d6e0, radius 6px, padding 8px 12px, Inter 13px/400.
- **Sign-up button (neutral pill)** — bg #ffffff, text #08090a, radius 9999px, padding 8px 16px, Inter 13px/510. Second-highest contrast after acid lime.
- **Card (product screenshot)** — bg #0f1011, radius 12px, inset shadow rgb(35,37,42) 0 0 0 1px, padding 24px; hairline inner border, no outer shadow.
- **Card (subtle)** — bg rgba(255,255,255,0.02), radius 6px, shadow rgba(0,0,0,0.4) 0 2px 4px, padding 8px.
- **Text input** — bg rgba(255,255,255,0.02), border 1px rgba(255,255,255,0.08), text #d0d6e0, radius 6px, padding 12px 14px, Inter 14px/400; focus border brightens to #d0d6e0.
- **Badge/status tag** — bg rgba(255,255,255,0.05), text #8a8f98, radius 4px, padding 0 6px, Inter 12px/400; variants #27a644 success, #eb5757 error, #6366f1 tags.
- **Logo mark** — Inter 16px/510, #ffffff, wordmark + geometric SVG glyph.
- **Hero gradient floor** — linear gradient rgb(8,9,10) at 10% → rgb(208,214,224) at 100%, atmospheric base under product screenshot.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Use Inter Variable with `'cv01' on, 'ss03' on, 'zero' on`.
- Use #e4f222 exclusively for the single primary action per view.
- Body 16px Inter 400, line-height 1.5.
- Letter-spacing -0.022em at 48px and above.
- Card radius 12px, button 6px, pill 9999px.
- Hairline borders instead of shadows for surface separation.
- Section gaps 96px, element gaps 8px.

**Don't**
- No bold (700+); system caps at 590.
- No decorative gradients on buttons, cards, or text.
- No additional chromatic action colors.
- No large radii (16px+) on cards.
- No shadows to separate cards from canvas.
- No chromatic text colors for body copy.
- No Berkeley Mono for headings or marketing copy.

Similar brands: Vercel, Cursor, Raycast, Framer.

## Steal this
- Semi-bold that isn't bold: variable weights 510/590 give authority without heaviness.
- One neon accent reserved for exactly one CTA per view; everything else greyscale.
- Surface elevation by 4-step near-black progression + 1px inset hairline instead of shadows.
- Dark-to-light gradient "floor" under the hero screenshot for depth without decoration.
