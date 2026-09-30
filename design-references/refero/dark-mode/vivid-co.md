---
name: Vivid+Co
source: https://styles.refero.design/style/8875b14e-c59a-492f-8780-8027a480f21c
category: dark-mode
tags: [dark, monochrome, agency, scale-hierarchy, zero-radius, prism-artifact]
best_for: Creative studio / agency portfolio where one signature 3D artifact and huge type carry the brand
---
# Vivid+Co
> Prismatic light through obsidian — cinematic dark void, near-white type, an RGB-split glass prism as the only color.

Authority from scale (136px, 105px display), not weight. All text and links share #fffdf9; no separate accent button, no fills, zero shadows — differentiation through spacing, scale, and the prism alone. Centered, roomy layout.

## Color tokens
| token | hex | role |
|---|---|---|
| Bone White | #fffdf9 | Primary text, nav, links, headings |
| Obsidian | #101010 | Page canvas |
| Graphite Veil | #495764 | Dominant surface behind headings/content blocks |
| Ash Border | #403f3f | 1px hairline dividers and card outlines |
| Fog Blue | #6f879c | Muted secondary text; ghost labels (3.7:1 contrast) |
| Pure Black | #000000 | SVG icon/illustration fill only |
| Prism Red | #ff2a2a | Prism red channel — illustration only |
| Prism Cyan | #2a7fff | Prism blue channel |
| Prism Lime | #2aff2a | Prism green channel |

## Typography
- **Neue Montreal** (exclusive): 400 default, 700 (36px subheadings only); fallback Söhne, Inter, General Sans; `"ss01" on`; 14–136px (13 values); lh 1.00–1.50; tracking -0.02em @ 136px, -0.01em @ 33–56px, +0.01em @ 15–21px body, +0.02em @ 17px uppercase labels.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 15px | 400 | 1.2 | +0.15px | --text-caption |
| body-sm | 18px | 400 | 1.5 | 0 | --text-body-sm |
| body | 20px | 400 | 1.2 | -0.2px | --text-body |
| body-lg | 22px | 400 | 1.2 | -0.22px | --text-body-lg |
| heading-sm | 33px | 400 | 1.2 | -0.33px | --text-heading-sm |
| heading | 36px | 700 | 1.5 | 0 | --text-heading |
| heading-lg | 56px | 400 | 1.13 | -0.56px | --text-heading-lg |
| display-sm | 105px | 400 | 1.01 | -2.1px | --text-display-sm |
| display | 136px | 400 | 1.00 | -2.72px | --text-display |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 16, 20, 40, 56, 60, 64, 72, 108px.
- Max-width 1440px; section gap 108px; card padding 20px; element gap 7px.
- Radius: nav 5px, tags 9999px, cards 15px, buttons 0px.
- Flat: zero box-shadows. Depth from #101010 vs #495764 contrast and prism edges. Borders 1px solid #403f3f (Contact button, footer divider only).

## Layout
Full-bleed dark canvas, single ~1440px column. Hero: centered prism with overlapping headline (text crosses cubes), left-aligned subtitle beneath. Thin top bar: wordmark left, four ghost links right, outlined Contact button last. Alternates full-viewport hero panels with narrower bands at 108px gaps. Single-column text max ~440px; no multi-column grids, card matrices, or pricing tables. Footer: hairline-divided band, two metadata columns.

## Components
- **Ghost nav button:** transparent, #fffdf9, uppercase 14–15px, 0 radius, no padding/border.
- **Outlined Contact button:** transparent, 1px #fffdf9, 5px radius, 9px 15px, uppercase 14px.
- **Ghost service label:** #6f879c, 0 radius, 20px padding-top, 30px padding-bottom; taxonomy below case-study titles.
- **Display headline block:** 400, 105–136px, lh 1.00–1.01, -0.02em, #fffdf9; 50–60% viewport height.
- **Hero lead paragraph:** 400, 18–22px, lh 1.5, #fffdf9, max ~440px, left-aligned below prism.
- **Prism artifact:** 4–6 staggered glass cubes, #000000 cores, #fffdf9 speculars, red/cyan/green channel-offset edges; no shadow.
- **Section heading:** 400, 18–22px, #fffdf9, max ~440px, above larger display.
- **Footer hairline:** 1px solid #403f3f, full width, 15px margin-top.
- **Case study title link:** 400, 33px, -0.33px, lh 1.2, no underline; hover likely → #6f879c.
- **Eyebrow label:** 400, 32px or 17px, uppercase, lh 1.01–1.5, +0.02em at 17px.
- **Pill tag:** 9999px; minimal presence.

## Motion
- "Expressive but restrained." Default 0.5s ease.
- Signature cubic-bezier(0.52, 0.01, 0, 1) for meaningful state changes (slow start, decisive stop — focus-pull).
- Transform and opacity ~90% of transitions; border-color and color ~10%.
- Named animation kVfqLU runs 6.65s (likely prism shimmer).
- Avoid springs, bounces, scale-pop.

## Rules (do / don't)
Do:
- #fffdf9 for all text/interactive; #6f879c only for de-emphasized metadata
- Scale hierarchy: 136px display vs 18px body (7.5×) instead of bold
- Weight 400 default; 700 only for 36px subheadings
- Display lh 1.00–1.01, -0.02em
- 0px radius for buttons/most cards
- Center hero, ~50% viewport height headline block
- Prism at full scale as the only chromatic element

Don't:
- Filled buttons, gradients, saturated action colors
- Weight 600–800 headlines
- Box-shadows
- Display line-height above 1.5
- Tracking looser than -0.01em above 22px
- Prism colors as UI tokens
- Canvas lighter than #495764

Imagery: single abstract 3D glass-cube artifact with RGB-split chromatic aberration; no photography, people, product shots; minimal thin-line icons.

## Steal this
- One hero artifact as the only color; everything else monochrome type.
- Motion curve cubic-bezier(0.52, 0.01, 0, 1) for a "focus-pull" feel.
- 7.5× display-to-body scale ratio replaces weight for hierarchy.
- Off-white #fffdf9 (warm) text on #101010 for softer premium contrast.
