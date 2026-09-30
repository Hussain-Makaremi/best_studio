---
name: Flying Papers
source: https://styles.refero.design/style/7d254296-6817-487a-a58c-4d5eca89cbf3
category: editorial
tags: [colored-canvas, riso, oversized-display, cartoon-mascot, flat, playful]
best_for: Loud, cheeky brand microsites and poster-style landing pages with a mascot
---
# Flying Papers
> Saturday morning cartoon printed on thick riso cardstock — flat muted-violet stage, saturated confetti colors, viewport-scale display type; each screen is one bold poster.

## Color tokens
| token | hex | role |
|---|---|---|
| Dusk Violet | #8584bd | Primary canvas, hero background |
| Hi-Vis Yellow | #f4ed36 | Outlined action borders, linked labels, interactive emphasis |
| Buttery Yellow | #f9cc73 | Secondary display text, softer borders |
| Lilac Shadow | #61609a | Card and block backgrounds |
| Bubblegum Pink | #f8c1ba | Decorative borders, confetti |
| Matcha Cream | #b5c995 | Decorative borders, confetti |
| Magenta Punch | #ac4f98 | Standout accent card surface |
| Firecracker Red | #c94245 | Highlight backgrounds, soft emphasis |
| Pure Black | #000000 | Hard borders, icons, text on yellow |
| Ink Black | #1a1a1a | Body text, primary borders, button strokes |
| Bone White | #f9f5f2 | Hairlines, dividers, input outlines; cream pill / light card fill |

Surfaces: 0 Dusk Violet #8584bd → 1 Bone White card #f9f5f2 → 2 Lilac Shadow #61609a → 3 Hi-Vis Yellow #f4ed36 (single most important element) → 4 Accent paint cards (#f8c1ba, #b5c995, #ac4f98, #c94245).

## Typography
- **ObviouslyVariable** — display/large headings, 18–341px; weights 800, 900; line-height 0.80–1.00; tracking 0.02em; `calt` disabled. Substitutes: Founders Grotesk Condensed, Knockout, Druk Wide.
- **DegularVariable** — ultra-small UI (10px nav, labels); 400; line-height 1.00. Sub: Inter, IBM Plex Sans.
- **bergen_monoregular** — mono micro-type (tags, labels); 400, 600; 12px, 14px; line-height 0.80, 1.00; `calt` disabled. Sub: JetBrains Mono, IBM Plex Mono.
- **DegularDisplay-Bold** — small bold body, CTAs; 700; 16px; line-height 1.00; tracking 0.05em. Sub: Söhne Bold.

Scale (Perfect Fourth from 14px):
| role | size | line-height | tracking |
|---|---|---|---|
| Caption | 10px | 1.0 | 0 |
| Body | 16px | 1.0 | 0.8px |
| Body-lg | 18px | 0.9 | 0.36px |
| Subheading | 30px | 0.9 | 0.6px |
| Heading-sm | 100px | 0.9 | 2px |
| Heading | 149px | 0.85 | 2.98px |
| Heading-lg | 184px | 0.85 | 3.68px |
| Display | 341px | 0.8 | 6.82px |

## Spacing, radius, elevation
- Base 4px; comfortable. Element gap 17px; card padding 17px; section gap 40px. Values: 16, 20, 40, 60, 80, 160px.
- Radius: cards 6px; tags 100px; buttons 100px (sharp card vs. soft pill contrast).
- Elevation: intentionally absent — flat risograph; depth from color contrast and stacking order only.

## Layout
- Full-bleed poster, no max-width; one viewport-sized composition per screen: one massive headline (centered or left), one mascot overlapping type, one inline action.
- Whole page on Dusk Violet with flat cards layered; no light/dark alternation.
- Nav: single centered wordmark, no menu bar.
- Card grids: loose 2–3 columns, 40px gaps, sized by content.
- Imagery: illustration only — hand-drawn cartoon, 2–3px black outlines, flat 2–3 color fills, no shading; mascots peek/lean into type; line icons in Pure Black or Bone White, 1.5–2px stroke.

## Components
- **Gate Pill Button:** #f9f5f2 fill, 100px radius, 17px horizontal padding, DegularDisplay-Bold 16px Pure Black, no shadow.
- **Outlined Display Button:** transparent, 2–3px #f4ed36 border, #f4ed36 text, DegularDisplay-Bold 16px, 100px radius.
- **Underline Text Link:** Bone White on violet, 1px underline, Bergen Mono 12px / 0.80.
- **Hero Display Headline:** ObviouslyVariable 800–900 at 184–341px, 0.80–0.85, 0.02em; alternates Hi-Vis / Buttery Yellow; full bleed.
- **Brand Wordmark:** ObviouslyVariable 800, Hi-Vis Yellow, 30px, centered above hero.
- **Mascot Illustration:** 2–3px black outlines, cream fill, flat accents, overlapping display type; no gradients/shading.
- **Confetti Card:** solid accent fill, 6px radius, 17px padding, no shadow/border; one per row, never adjacent.
- **Dark Text Card:** Bone White fill, 6px, 17px, Ink Black text, optional 1px Ink Black border.
- **Color Swatch Card:** solid fill with color name + hex in DegularDisplay-Bold 16px.
- **Top Nav Bar:** transparent on violet, centered wordmark, 17px top/bottom padding, optional 1px bottom border.
- **Mono Label Tag:** Bergen Mono 12px / 0.80, no fill, optional 1px border in current color, 0.05em tracking.
- **Footer Block:** solid brand/accent block, Bergen Mono 12px Bone White, 17–25px padding.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Hero display 184–341px ObviouslyVariable 800–900, 0.80–0.85, 0.02em.
- Hi-Vis Yellow only for outlined action borders (Outlined Display Button).
- One headline, one illustration, one inline action per screen.
- Exactly 6px card radius, 100px button/tag radius.
- Cards on violet with 17px padding, no shadows.
- Accent palette one card at a time, never adjacent rows.
- Micro-copy in Bergen Mono 12px / 0.80 for receipt-on-cardstock texture.

Don't:
- Filled CTA buttons (only outlined Hi-Vis Yellow and cream pills).
- ObviouslyVariable below 18px or above 341px.
- Drop shadows, glow, inner shadows.
- More than two accent colors per composition.
- White/cream page background instead of violet.
- Card radius past 6px.
- ObviouslyVariable `calt` enabled.

Similar: Bumble, Skittles microsites, Kakao Entertainment, Dazed, Telfar.

## Steal this
- Mid-tone colored canvas (not white/black) as the "stage" with flat paint cards on top.
- Viewport-scale condensed display type (up to 341px) with mascot illustration overlapping the letters.
- Sharp 6px cards vs. 100px pills — a deliberate two-radius contrast.
- Mono micro-type at 0.80 line-height for a printed-receipt texture.
