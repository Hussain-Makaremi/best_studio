---
name: OFF+BRAND.
source: https://styles.refero.design/style/6b667ffc-5158-4000-9252-3a107d5161ee
category: agency
tags: [light, warm-neutral, monochrome, single-typeface, iridescent-hero, flat]
best_for: Editorial agency sites on warm parchment with one custom sans and a single gradient-sphere hero moment
---
# OFF+BRAND.
> Iridescent sphere on warm parchment.

Typographic architecture on a near-monochrome canvas where a single custom geometric sans (Ataero Retina OB) carries nearly all expressive weight. Restraint: no shadows, no fills, no buttons heavier than ghost links. Interfaces read like editorial spreads with thin concentric circle ornaments, precise logo grids and grid-paper project cards. Sole chromatic event: an iridescent gradient sphere (yellow→pink→blue→white) anchoring the hero.

## Color tokens
| token | hex | role |
|---|---|---|
| Parchment | #e5e4e0 | Page canvas, section backgrounds — warm off-white replacing pure white |
| Ink | #1d1d1d | Primary text, heading strokes, link borders |
| Paper | #ffffff | Elevated card surfaces, logo containers |
| Ash | #bfbebe | Hairline borders, subtle dividers, structural outlines |
| Stone | #cdcdc9 | Mid-tone secondary surface for quiet separation |
| Iridescent Sphere | linear-gradient(255deg, rgb(250, 203, 14), rgb(240, 107, 168) 30%, rgb(120, 186, 230) 65%, rgb(255, 255, 255)) | Signature gradient; hero anchor only |

## Typography
- **Ataero Retina OB Edition** — sole typeface. Custom geometric sans, tall x-height, generous counters. Weights 400 (body & display), 700 (labels & nav). Fallback consideration: Neue Haas Grotesk Display, Inter (tight tracking), Suisse Int'l.
- Scale: Minor Third 1.2 from 16px base.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| Caption | 11px | 400 | 1.4 | 0.55px | `--text-caption` |
| Body Small | 15px | 400 | 1.4 | 0.15px | `--text-body-sm` |
| Body | 18px | 400 | 1.4 | 0.23px | `--text-body` |
| Subheading | 34px | 400 | 1.0 | 0.44px | `--text-subheading` |
| Heading Small | 46px | 400 | 1.0 | 0.60px | `--text-heading-sm` |
| Heading | 70px | 400 | 0.8 | 0.91px | `--text-heading` |
| Heading Large | 76px | 400 | 0.8 | 0.99px | `--text-heading-lg` |
| Display | 103px | 400 | 0.8 | 1.34px | `--text-display` |

Display sizes (70–103px) use 0.80 line-height to stack headlines into a single typographic block. Note positive tracking even at display sizes.

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 5, 6, 8, 15, 19, 30, 32, 46, 76, 119px.
- Section gap 76–119px · card padding 30px · element gap 19px.
- Radius: cards 0px; links, inputs, buttons 10px.
- Elevation: intentionally shadowless. Depth via surface shifts (Parchment → Paper → Stone) and layered decorative elements behind text.

## Layout
- Max width 1400px.
- Full-viewport hero; display text centered/left overlapping gradient sphere right-of-center.
- Left-aligned blocks with asymmetric weight (large text left, supporting copy right).
- Logo grid strict 2×5 with hairline dividers; project cards are large rectangular tiles with grid-pattern backgrounds.
- Rhythm: hero → intro → logo grid → featured work grid. No sidebar, sticky nav or heavy footer. Concentric circles repeat across sections for continuity.

## Components
- **Display Headline** — Ataero Retina OB 400, 70–103px, line-height 0.80, ~0.013em tracking, Ink on Parchment, all caps, stacked tight.
- **Ghost Text Link** — 15px 400, Ink, no bg, 10px radius hit area, often trailing →, 5px vertical padding; underline or arrow reveals on hover.
- **Section Label** — 11px 400, Ink, all caps, 0.05em tracking, left-aligned with generous space.
- **Client Logo Cell** — white rectangle, 0px radius, no border/shadow, logo centered at 60% width; 2 rows × 5 columns with 1px Ash hairline dividers.
- **Featured Work Card** — white surface with subtle dot/line-grid overlay (#e5e4e0 lines), 46px title in Ink, no border/shadow/radius, image below title.
- **Hero Gradient Sphere** — ~600px circle, iridescent gradient (255deg fixed), right-of-center, partially behind headline; no border/shadow/interaction.
- **Concentric Circle Ornament** — Ash or Ink-at-20%-opacity outlines, 1px stroke, 2–3 rings; never filled, never animated.
- **Scroll Indicator** — 11px, all caps, 0.05em tracking, Ink, "SCROLL" with down arrow, fixed bottom-right 30px inset; disappears on scroll.
- **All Work Filter Button** — ghost pill: Ink 1px border, 10px radius, 8px / 19px padding, 11px 400 all caps 0.05em tracking, arrow right. Hover: Ink fill, Parchment text.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #e5e4e0 exclusively as page canvas — never pure #ffffff or gray at page level.
- Display headlines 70–103px, 400, 0.80 line-height, stacked blocks.
- Iridescent sphere (255deg) as hero anchor only.
- 10px radius on interactive elements; 0px on cards.
- Section labels 11px, 0.05em tracking, all caps.
- 76–119px section gaps; Ash 1px hairlines for dividers only.
- Monochrome discipline — reassess before adding any color.

**Don't**
- No second typeface.
- No colored fills on buttons, cards, backgrounds.
- No drop shadows, box-shadows, elevation effects.
- Gradient only in the hero sphere.
- Body text only in 15–18px range; always left-aligned.
- No rounded card/image corners (0px); only interactive elements get 10px.

Imagery: pure-CSS gradient sphere hero; product renders/screenshots on white with grid-paper overlays; flat monochrome client logos. No lifestyle photos, abstract illustration or stock.

## Steal this
- Warm parchment canvas (#e5e4e0) with pure white used only as the "raised" surface — elevation by color, not shadow.
- 0.80 line-height all-caps display stacks that read as a single typographic slab.
- Grid-paper overlay on work cards as a subtle "studio" texture.
- Concentric hairline circles as a repeating, non-animated spatial motif.
