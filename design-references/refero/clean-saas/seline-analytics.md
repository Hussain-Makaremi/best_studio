---
name: Seline Analytics
source: https://styles.refero.design/style/7967c6d9-e50c-42b5-b4d1-74003ba41781
category: clean-saas
tags: [light, warm-neutral, single-accent, pill-buttons, flat]
best_for: Privacy-first analytics or quiet B2B tools wanting calm, whispered authority
---
# Seline Analytics
> Quiet analyst's desk on warm paper — warm stone canvas, flat white cards, one vivid cyan, headlines at weight 400 with tight tracking.

## Color tokens
| token | hex | role |
|---|---|---|
| Stone Canvas | #fafaf9 | Page background — warm off-white reads as paper |
| Pure White | #ffffff | Card surfaces, elevated panels, input fills |
| Stone Border | #e8e6e5 | Primary hairline borders (structural) |
| Stone Muted | #d6d3d1 | Secondary borders, subtle tints |
| Ash Gray | #a8a29e | Muted helper text, icon strokes, disabled |
| Warm Gray | #78716c | Body text, nav links, secondary copy |
| Ink Black | #0c0a09 | Headings, emphasized body, strong icons |
| Soot | #1c1917 | Dark surfaces, inverted sections |
| Sky Wash | #c1e1f7 | Soft highlight wash behind text spans |
| Cyan Signal | #3ba6f1 | Primary CTA fill, active links, brand strokes — only chromatic voice |
| Cyan Edge | #3398e1 | Outlined borders, linked labels |

Surfaces: 0 Canvas #fafaf9 → 1 Card #ffffff → 2 Floating Preview #ffffff (hero dashboard only) → 3 Inverted #1c1917 (dark tab pills, rare panels).

## Typography
- **Roobert** (display/headings) — weights 400, 500; sizes 18, 20, 32, 52px; line-heights 1.12, 1.22, 1.25, 1.69; tracking -0.025em @32, -0.021em @52, -0.017em @18. Fallback: Inter Tight or Satoshi. Weight 400 at 52px is the signature "whisper-weight".
- **Inter** (body/UI) — weights 400, 500, 600; sizes 10–18px (7 values); line-heights 1.33–2.3; tracking 0.003em, 0.004em, 0.025em. Dominant body: 14px/400/1.64.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 10px | 400 | 2.3 | 0 |
| body | 14px | 400 | 1.64 | 0.004em |
| body-lg | 16px | 400 | 1.69 | 0.048px |
| subheading | 20px | 400 | 1.2 | -0.1px |
| heading-sm | 32px | 400 | 1.25 | -0.8px |
| display | 52px | 400 | 1.12 | -1.092px |

## Spacing, radius, elevation
- Base 4px; density compact. Scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160px.
- Radius: icons 4px, inputs 6px, cards 10px, feature-card 16px, buttons/tags 9999px.
- Shadows:
  - subtle: rgba(0,0,0,0.05) 0px 1px 2px 0px
  - md (content card): rgba(0,0,0,0.05) 0px 4px 16px 0px
  - sm: rgba(0,0,0,0.1) 0px 4px 6px -1px, 0px 2px 4px -2px
  - xl (floating preview): rgba(17,12,46,0.12) 0px 12px 45px 0px

## Layout
- Max-width 1200px; section gap 96px; card padding 24px; element gap 8px.

## Components
- **Primary CTA:** pill 9999px, #3ba6f1 fill, 1px #3398e1 border, #ffffff text 500, padding 8px 16px. Only chromatic filled element per viewport.
- **Secondary Ghost:** pill, transparent, 1px #e8e6e5 border, #0c0a09 text 400, 8px 16px.
- **Navigation Link:** Inter 14px/400, #78716c, padding 0 12px, height 32px; hover #0c0a09.
- **Flat Content Card:** #ffffff, 10px radius, 1px #e8e6e5 border, 24px padding, shadow md. Border IS the structure.
- **Floating Dashboard Preview:** 16px radius, #ffffff, shadow xl (only card with deep elevation), 8px padding, filter grayscale(1) contrast(0.94).
- **Highlighted Text Span:** inline #3398e1 text on #c1e1f7 pill bg (~2px 8px padding, 4px radius). Exactly one per headline — marks the value-prop keyword.
- **Text Input:** #ffffff, 6px radius, 1px #d6d3d1 border, #78716c placeholder, padding 4px 12px; focus ring 2px #3ba6f1.
- **Testimonial Card:** no chrome. Star row (★ #0c0a09), 16px quote #0c0a09 with inline cyan highlight, 32px avatar + 14px/500 name + 14px #78716c role; 16px vertical gap.
- **Tab Pill Group:** active #1c1917 fill, white text, 9999px; inactive transparent, #0c0a09 text, 1px #e8e6e5 border.
- **Mascot Sticker:** grayscale line-art SVG with drop-shadow rgba(0,0,0,0.25) 0 2px 4px. Max once per section.

## Motion
_not captured_ (mascot: do not animate)

## Rules (do / don't)
Do:
- Roobert 400 for all display/headings — emphasis via size and the cyan highlight span.
- #fafaf9 page bg; #ffffff only for cards.
- Exactly one cyan highlight span per headline.
- 1px #e8e6e5 borders as primary separator; heavy shadow only on the one dashboard preview.
- Pill buttons 8px 16px; cyan filled CTA is the only chromatic filled element.
- Body 14px Inter 400 / 1.64.

Don't:
- No new accents (green, purple, red).
- No heavy shadows on content cards.
- No Inter headlines.
- No #ffffff page background.
- No dark/neutral fills for primary actions.
- No gradients, glassmorphism, decorative washes.
- No more than one highlight span per headline.

## Steal this
- Inline keyword highlight: accent-colored text on a pale pill wash, one per headline.
- Grayscale + slight contrast-drop filter on product screenshots so the UI accent pops outside them.
- Light-weight (400) large display type with negative tracking for "whispered" authority.
- Single deep-shadow budget reserved for the hero preview.
