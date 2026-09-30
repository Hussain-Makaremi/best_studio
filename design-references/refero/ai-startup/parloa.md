---
name: Parloa
source: https://styles.refero.design/style/c90e63f8-76c1-4159-9460-29e0d18751ae
category: ai-startup
tags: [light, warm-cream, serif-display, orange-outline-accent, near-square-corners, shadowless, print-inspired]
best_for: AI customer-service / voice-agent brand that wants a warm, print-like editorial site with portrait photography
---
# Parloa
> "warm editorial paper with ink and highlighter." Cream canvas, Exposure30 serif display at 350, ink-black filled buttons, Highlighter Orange only for outlines and links, 0–2px radii, no shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink Black | #1f1c1b | Primary text, filled action buttons, dark surfaces |
| Paper White | #ffffff | Card surfaces, button text on dark fills |
| Canvas Cream | #ebe9e1 | Page background |
| Linen | #f5f4f0 | Nav bar background, subtle section alternation |
| Stone | #a69b92 | Muted text, input borders, heading underlines |
| Hairline | #d9d6ce | Link underlines, card borders, subtle dividers |
| Espresso | #2d2724 | Dark surface accent, input fills |
| Charcoal | #000000 | SVG icon fills, pure black instances |
| Cobblestone | #c7c1b7 | Secondary border, decorative dividers |
| Highlighter Orange | #ff7714 | Accent for links, icon strokes, outlined callouts |

Surfaces: 1 Canvas #ebe9e1 (full page bg) → 2 Linen #f5f4f0 (nav bar, section banding) → 3 Paper #ffffff (cards) → 4 Espresso #2d2724 (announcement bar) → 5 Ink #1f1c1b (deepest dark: navigation, buttons, headings).

## Typography
- **Exposure30** (display serif) — weights 350, 400; sizes 24, 28, 42, 82, 96px; line-height 1.00, 1.10, 1.20, 1.30; tracking -0.01em at display sizes, 0.01em at 24–28px. Fallback: Fraunces, Playfair Display, DM Serif Display. Weight 350 at 82–96px is the signature move.
- **Geist** (body & UI grotesque) — weights 300, 400, 500, 600; sizes 10, 11, 13, 14, 16, 18px; line-height 1.20, 1.30, 1.33, 1.40, 1.50; tracking 0.01em at 14–16px, 0.02em at 10–11px. Fallback: Inter, Manrope, system-ui.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 10px | 1.2 | 0.2px |
| body | 16px | 1.5 | 0.16px |
| subheading | 18px | 1.4 | 0.18px |
| heading-sm | 24px | 1.3 | 0.24px |
| heading | 42px | 1.1 | -0.42px |
| heading-lg | 82px | 1.05 | -0.82px |
| display | 96px | 1.0 | -0.96px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 64, 72px.
- Radius: tags 2px, cards 0px, inputs 2px, buttons 2px.
- Shadows: none — intentionally shadow-free; depth via color contrast and 1px hairline borders.

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 16px.
- Hero carried by photography: full-bleed warm-lit portraiture with gradient overlay.

## Components
_not captured_ as a component list; the source lists only these usage specs: primary actions are Ink Black filled buttons with white text; 8–12px button padding; white cards on cream canvas with 1px Hairline borders at 0px radius; body text Geist 16px/400, 0.01em, line-height 1.50.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Exposure30 weight 350 for display headings (42px+).
- Primary actions in Ink Black filled buttons with white text.
- Highlighter Orange exclusively for outlines, links, icon strokes, decorative accents.
- White cards on cream canvas with 1px Hairline borders at 0px radius.
- Body in Geist 16px/400, 0.01em letter-spacing, 1.50 line-height.
- 4px base unit; 8–12px button padding, 16px element gaps, 24px card padding, 80px section gaps.
- Let photography carry the hero.

Don't:
- No orange as filled button or large background block.
- No box-shadows or drop-shadows on cards.
- No bold (600+) weights for headings.
- No border-radius above 4px on any element.
- No pure black #000000 for body text or large surfaces.
- No colored backgrounds (blue, green, purple) beneath cards.
- No bold or vivid colors for body text.

## Steal this
- Orange used only as an outline/link/icon-stroke color, never as fill.
- 0px-radius white cards with 1px hairlines on a cream canvas for a printed-page feel.
- 82–96px serif at weight 350 as the editorial signature.
- Dark announcement bar in Espresso above a Linen nav bar.
