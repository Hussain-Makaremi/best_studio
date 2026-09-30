---
name: Pirsch Analytics
source: https://styles.refero.design/style/e4b9d41a-8165-47dd-818a-5f6810046ea9
category: clean-saas
tags: [light, warm-cream, achromatic, single-accent, ink-borders, flat]
best_for: Privacy-focused analytics, BI, research tools, notebook/journal apps where calm, high-trust presentation matters
---
# Pirsch Analytics
> Sunlit paper notebook with highlighter swatches — cream canvas, ink-black 1px borders, 24px sticky-note corners, one sunshine-yellow highlighter.

## Color tokens
| token | hex | role |
|---|---|---|
| Sunshine Highlight | #ffda6e | Primary CTA fills, step badges, accent callouts |
| Mint Signal | #6ece9d | Status/availability dots, positive chips, live badges |
| Cream Paper | #f8f5ed | Page canvas, card surfaces, pill interiors |
| Ink | #000000 | Headings, body text, 1px hairline borders, dividers |
| Graphite | #707070 | Secondary body text, link text, muted borders |

## Typography
- **DM Sans** only (fallback Inter, Nunito Sans). Weights 400 (prose), 500 (headings, badges, labels). OpenType ss03, ss04 globally.

Scale (Minor Third 1.2 from 16px):
| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 14px | 400 | 1.5 | 0 | --text-caption |
| body-sm | 16px | 400 | 1.5 | 0 | --text-body-sm |
| body | 18px | 400 | 1.5 | 0 | --text-body |
| subheading | 20px | 500 | 1.5 | 0 | --text-subheading |
| heading-sm | 24px | 500 | 1.5 | 0 | --text-heading-sm |
| heading | 28px | 500 | 1.25 | 0 | --text-heading |
| display | 64px | 500 | 1.25 | -1.02px (-0.016em) | --text-display |

Badges/labels only: uppercase DM Sans 500, +0.286em tracking.

## Spacing, radius, elevation
- Base 8px; comfortable. Scale: 8, 16, 24, 32, 48, 64, 128, 192px.
- Radius: inputs 6px, images 12px, cards/buttons 24px, tags/pills 9999px.
- Elevation: zero drop shadows — "intentionally flat and ink-on-paper." Cards/images/tiles defined by 1px #000000 borders on cream. If elevation needed, raise border weight or switch to yellow surface.
- Borders: default 1px solid #000000 on cards, images, inputs, groups; 1px #707070 for subtle text-block dividers. 24px radius + 1px ink border is the signature shape.

## Layout
- Max-width 1200px; section gap 64px; card padding 32px; element gap 16px.
- Vertical editorial bands: logo cloud → numbered step → display headline → centered subtext → two-up feature cards → logo cloud → CTA.
- All heroes are centered stacks on cream; no split/asymmetric layouts. Feature sections: 2-column card grid, 32px gap. Minimal nav (small wordmark, no sticky header/sidebar).

## Components
- **Sunshine Filled Button:** #ffda6e fill, #000000 DM Sans 500 16px, 16px 24px, 24px radius; one per view.
- **Ghost Ink Button:** transparent, 1px #000000, #000000 500 16px, 16px 24px, 24px radius.
- **Numbered Step Badge:** pill 9999px, 1px #000000; left cell 24×24 cream with numeral 14px/500; right: uppercase 14px/500 name, +0.286em (e.g. "1 EASY START", "2 INSTANT OUTPUT").
- **Feature Card:** #f8f5ed, 1px #000000, 24px radius, 32px padding; heading 24px/500 #000000; body 18px #707070; no shadow.
- **Filter Tag Pill:** #f8f5ed, 1px #000000, 24px radius, 14px/500, leading icon.
- **Dark Filter Chip:** #000000 fill, #f8f5ed 14px/500 text, 24px radius, trailing × dismiss.
- **Logo Grid Cell:** transparent, no border, centered monochrome #000000 wordmark; responsive 4–8 column grid, 32px gap.
- **Display Headline:** 64px DM Sans 500, #000000, -0.016em, 1.25, centered.
- **Section Subhead:** 18px/400 #707070, max-width ~640px, centered, 16px below headline.
- **Status Dot Badge:** 12px circle or 24px pill, #6ece9d, optional #000000 label.
- **CTA Block:** centered stack: avatar tile → 64px display question → 18px #707070 subtext → Sunshine button; 64px top/bottom padding.
- **Image Frame:** 12px radius, 1px #000000, no shadow.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Ration #ffda6e to one primary CTA per view; never fill large surfaces.
- Cards: 1px #000000 at 24px, never shadows.
- Display 64px DM Sans 500, -0.016em.
- Uppercase +0.286em only for badges/labels.
- Keep cream canvas unbroken; alternate rhythm via spacing and border weight.
- ss03 & ss04 globally.
- #6ece9d only for status dots and positive chips.

Don't:
- Drop shadows, blurs, box-shadow elevation.
- A second body font or a serif.
- Pure white #ffffff.
- Yellow body text at small sizes (contrast fails on cream).
- Green as CTA/button bg.
- #000000 for body/caption where #707070 reads cleanly.
- Gradients, image overlays, decorative fills.

Imagery: monochrome product screenshots in 1px ink borders at 12px radius; raw monochrome logos; no photography/illustration.

## Steal this
- 1px pure-black border + 24px radius on cream as the entire card language — zero shadows.
- Accent used as a "highlighter" (CTA, step badges) not a brand stamp.
- Numbered step pill: bordered capsule with a numeral cell + widely tracked uppercase label.
- Single-family (DM Sans ss03/ss04) system with only 400/500 weights.
