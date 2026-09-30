---
name: Lpalo
source: https://styles.refero.design/style/79b4ebc4-30f6-45b6-b2d2-922e28e05ca9
category: editorial
tags: [light, peach-canvas, slab-serif, black-outline-cards, multi-accent, playful]
best_for: Children's media, playful podcasts, youth editorial and educational brands
---
# Lpalo
> Children's storybook spread — warm peach canvas, chunky slab-serif headlines, black-outlined white cards, line-art doodles at irregular angles, zero shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Peach Paper | #f6e0db | Page canvas |
| Charcoal Ink | #000000 | Primary text, borders (1400+ occurrences) |
| Snow | #ffffff | Card fills, primary surfaces |
| Ember Orange | #ef724f | Warm accent, most-used chromatic |
| Magenta Pop | #981082 | Bold fuchsia punctuation, nav highlight |
| Sunbeam Yellow | #e7db4c | Highlight backgrounds, emphasis bands |
| Mint Wash | #ace2df | Cool desaturated teal accent |
| Powder Blue | #84bfff | Sky-blue card surfaces, illustration washes |
| Lilac Tint | #e69dff | Soft pink-violet accent |
| Lime Zest | #6ed311 | High-chroma green, sparse punctuation |
| Cobalt Spark | #5196ff | Vivid blue illustration accent |

## Typography
- **Alfa Slab One** (display) — 400 only; 16, 35, 46, 50, 120px; line-height 1.09–1.20. Fallback: Bowlby One, Roboto Slab 900, Recoleta Black. Carries the entire brand voice.
- **Manrope** (UI & body) — 400, 500, 700, 800; 12, 25, 34, 50, 120px; line-height 1.00–1.60. Fallback: Inter, Outfit, Plus Jakarta Sans. Nav 500, body 400, emphasis 700–800.

Scale (Perfect Fourth from 15px):
| role | size | line-height | token |
|---|---|---|---|
| caption | 12px | 1.5 | --text-caption |
| body | 16px | 1.6 | --text-body |
| heading-sm | 25px | 1.24 | --text-heading-sm |
| subheading | 34px | 1.16 | --text-subheading |
| heading | 46px | 1.09 | --text-heading |
| heading-lg | 50px | 1.12 | --text-heading-lg |
| display | 120px | 1 | --text-display |

## Spacing, radius, elevation
- Density comfortable. Scale: 4, 8, 10, 13, 15, 16, 17, 20, 24, 25, 27, 30, 38, 40, 46, 80px.
- Radius: small 10px, cards 40–47px, navigation 47px, buttons 47px.
- Borders: all structural lines 2px solid #000000; signature = 2px black border + white fill.
- Elevation: intentionally flat; no gradients, shadows, inner shadows — components sit ON the page.

## Layout
- Max-width 1200px; section gap 46–64px; card padding 24–40px; element gap 8–16px.
- Line-art scattered at varied rotations (asymmetric, not gridded); full-bleed solid color bands as section dividers.

## Components
- **Pill Navigation Button:** white, 2px black border, 47px radius, 10px/20px padding, Manrope 500 16px black; active = colored fill (orange, magenta, or teal).
- **Outline Content Card:** white, 2px black border, 40–47px radius, 24–40px padding; Alfa Slab titles, Manrope body.
- **Flat Color Card:** single vivid fill, no border, 40–47px radius, 24–40px padding, black text; sparing.
- **Display Headline Block:** Alfa Slab One 400 at 46–120px, 1.09–1.20, black on peach; multi-line "shout" rhythm.
- **Line-Art Illustration:** thin black-stroke drawings (robots, headphones, cassettes, faces), varied rotations, outlined or minimal flat fill.
- **Tilted Content Card:** white card rotated 2–4°, offset color band behind (teal or lavender) — scrapbook; 40px radius, black border.
- **Tag Pill:** 47px radius, 8px/16px padding, Manrope 700 12–14px; accent fill + black text, or white with black border.
- **Section Divider:** full-bleed 60–100px solid color band (orange, teal, yellow, lilac), no text.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Display in Alfa Slab One at 46px+, line-height ≤ 1.20.
- 47px radius on primary containers; 10px only for small nested elements.
- Default to peach canvas; color surfaces only to break rhythm intentionally.
- 2px black borders + white fills; never shadows.
- Scatter line-art at varied rotations; asymmetry essential.
- Manrope 500 nav, 400 body, 700–800 emphasis only.
- One vivid accent per block, saturating the whole card.

Don't:
- Shadows or elevation effects.
- Gradients.
- Alfa Slab One below 16px.
- Center-aligned body paragraphs.
- Neutral grays for borders/text — pure black only.
- More than two accents within one component.
- Traditional colored CTA with white text — use black-bordered white pills or colored-fill cards.

## Steal this
- Tilted (2–4°) card with an offset color band behind it — cheap scrapbook depth without shadows.
- Solid full-bleed color bands (no text) as section dividers for rhythm.
- 2px pure-black outline + white fill as a universal component skin.
- One accent per block, flooding the whole card rather than mixing hues.
