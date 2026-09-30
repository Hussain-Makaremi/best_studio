---
name: Wealthsimple
source: https://styles.refero.design/style/043341c3-cf82-4be1-9142-fa5e6a370ca9
category: fintech
tags: [light, warm-neutrals, serif-display, sculptural-3d, pill-buttons, monochrome, editorial]
best_for: Wealth / investing brands wanting a boutique, gallery-lit editorial feel with serif display and 3D sculptural art
---
# Wealthsimple
> "Cashmere-lined vault with gallery lighting." Tiempos serif display + The Future sans, warm cream-graphite neutrals only, 100px-radius soft cards and 1600px pills, sculptural 3D art on a warm floor.

## Color tokens
| token | hex | role |
|---|---|---|
| Onyx | #000000 | SVG icon fills, crisp borders on warm-cream surfaces |
| Charcoal | #09090a | Dark neutral for text, icons, strong contrast; filled pill fill |
| Graphite Ink | #32302f | Primary text, secondary UI, dividers, muted labels |
| Bronze Field | #3a3525 | Full-bleed hero/feature-block background |
| Pebble | #686664 | Secondary text, link body, helper copy |
| Stone | #e4e2e1 | Hairline borders, input outlines, dividers |
| Fog Veil | #f1f0f0 | Elevated surfaces, hover washes, inset tints |
| Linen Cream | #faf8f5 | Alternate section background, warm washes |
| Paper White | #fcfcfc | Default page canvas, card surfaces |

Surfaces: 1 Page Canvas #fcfcfc → 2 Warm Section #faf8f5 (alternate cream sections, hero wash, cards) → 3 Soft Surface #f1f0f0 (elevated regions, hover states, dividers) → 4 Hero Bronze #3a3525 (full-bleed dark feature blocks).

## Typography
- **Tiempos** (display serif) — weights 400, 500; sizes 14–84px (14, 16, 18, 36, 56, 64, 72, 84); line-height 1.08, 1.16, 1.24; tracking -0.01em. Fallback: Source Serif 4, Lora, PT Serif. 56–84px for hero/section titles, 36px for sub-section heads, 14–18px for emphasis lead-ins.
- **The Future** (primary UI/body sans) — weights 400, 500; sizes 14–58px (14, 16, 18, 20, 56, 58); line-height 1.00, 1.16, 1.40; tracking 0.005em. Fallback: Inter, Söhne, GT America. Paragraph copy, nav links, card titles, inputs, small labels.
- **Wealthsimple Sans** (utility) — weight 400; 16px; line-height 1.20; tracking 0.025em. Fallback: Inter with 0.025em tracking, Söhne Buch. Tracked-out face for buttons and nav controls so interactive elements read as stamp-like marks.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 14px | 1.4 | 0.07px |
| body | 16px | 1.5 | — |
| subheading | 18px | 1.4 | — |
| heading-sm | 20px | 1.3 | — |
| heading | 36px | 1.2 | -0.36px |
| heading-lg | 56px | 1.1 | -0.56px |
| display | 84px | 1.08 | -0.84px |

## Spacing, radius, elevation
- Density comfortable (base unit not captured).
- Spacing: 4, 6, 8, 12, 15, 16, 20, 24, 32, 40, 48, 64, 73, 80, 128, 160px.
- Radius: small elements 12px, cards 100px, inputs 100px, badges/buttons 1600px.
- Elevation: no CSS shadows; sculptural 3D illustrations carry a soft ambient-occlusion shadow on a warm-cream floor (warm-grey falloff, no hard drop shadow).

## Layout
- Max-width 1200px; section gap 80px; card padding 32px; element gap 16px.
- Bronze Hero Panel: full-bleed Bronze Field; left-aligned (~40% width): eyebrow, Tiempos display headline, paragraph, two pill CTAs; right: large sculptural 3D form on warm-cream floor; radial fade transition, no hard edge.
- Light Editorial Section: Paper White or Linen Cream, max-width 1200px, 80px vertical padding; two-column, text left (~45%), illustration right; no card chrome.
- Feature columns: three equal, ~48px gaps, each with 1px Stone rule on top.

## Components
- **Top Navigation Bar:** on Paper White. Thin 12px segmented row ('Personal | Business', The Future 12–14px) above main bar. Main bar: wordmark (Graphite Ink, The Future 500), nav links (400, 16px), right: outlined pill (Graphite border) + filled pill (Charcoal fill, Paper White text). Optional Stone hairline bottom rule. No shadow.
- **Filled Dark Pill Button (Primary):** 1600px radius, Charcoal or Graphite fill, Paper White text; Wealthsimple Sans 400, 16px, 0.025em; vertical ~12px, horizontal 24–32px; no shadow; always the loudest button on a surface.
- **Outlined Pill Button (Secondary):** 1600px radius, transparent, 1px Graphite border and text; same sizing; paired with filled, never the sole CTA in a section.
- **Ghost Pill Button:** 1600px radius, Linen Cream fill, Graphite text, no border; quiet non-competing CTA.
- **Editorial Section Heading:** Tiempos 500, 56–84px, line-height 1.08–1.16, -0.01em, Graphite Ink on light or Paper White on Bronze; often with a The Future eyebrow above (14–16px, 0.005em, Pebble).
- **Bronze Hero Panel / Light Editorial Section:** see Layout.
- **Feature Column with Top Divider:** 1px Stone rule at top, The Future 500 18–20px headline, 14–16px The Future 400 paragraph in Graphite Ink; no background, no card.
- **Eyebrow Tag:** The Future 400, 14–16px, 0.005em, Pebble, 12–16px above Tiempos heading; never bold, never uppercase.
- **Sculptural 3D Illustration:** twisted paper ribbons, draped fabric, geometric blocks in sage green, cream, terracotta, off-white; on warm cream floor; right half of layout, single art object.
- **Soft Card Surface:** Linen Cream or Paper White fill, 100px radius, 32px padding, no border, no shadow.
- **Text Input:** transparent or Paper White, 1px Stone border, 100px radius, The Future 400 16px; focus 1px Graphite border, no glow; Pebble placeholder; 16px vertical padding.
- **Chat Bubble:** 48px circular Charcoal button, Paper White chat icon, floats 24px from bottom-right.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Tiempos 56–84px, -0.01em tracking, for all display/section titles.
- 1600px radius on every button, tag, pill control.
- Warm neutrals (#fcfcfc, #faf8f5, #e4e2e1, #32302f); Bronze Field only for full-bleed dark blocks.
- Pair Tiempos headlines with The Future body; never body in Tiempos, never display in The Future.
- 0.025em tracking on every Wealthsimple Sans button/nav label.
- ~80px section gaps, 32px card padding; let whitespace carry hierarchy.
- Sculptural 3D illustrations only; no stock photography, product UI, or flat icons as heroes.

Don't:
- No pure #000000 for primary text; use Graphite Ink #32302f.
- No accent colors, gradients, or brand hues; color lives only in the 3D illustrations.
- No square or moderately rounded buttons.
- No CSS drop shadows on cards, modals, buttons.
- Don't set display in The Future or body in Tiempos.
- No bright/cool grays, blues, cool whites.
- Don't crowd the page with cards, borders, grid lines.

## Imagery
Sculptural 3D renders only: twisted paper ribbons, draped fabric forms, geometric block compositions, isometric card stacks in muted sage, cream, terracotta, off-white. Treated as gallery objects, right half of the section, on a warm cream floor with soft ambient-occlusion shadow, never cropped, never overlapped with text. No photography, flat illustration, product UI screenshots, or chart art. Icons: minimal outlined glyphs in Graphite Ink. Feel closer to a Kinfolk spread or Bottega Veneta product page than typical fintech.

## Steal this
- Serif/sans split as a hard rule: Tiempos for display, The Future for body, tracked utility sans for buttons.
- 100px-radius cards and 1600px pills: extreme softness as the signature.
- Bronze full-bleed hero with a sculptural 3D object and radial fade.
- Feature columns with only a 1px top rule; no card chrome.
