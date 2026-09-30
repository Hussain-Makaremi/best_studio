---
name: Monarch
source: https://styles.refero.design/style/a9dd8050-c03a-4901-b7fa-a9cc0ca54812
category: fintech
tags: [light, warm-linen, serif-display, ember-orange, pill-buttons, personal-finance]
best_for: Personal-finance app marketing that wants a warm, notebook-like, serif-display feel with one orange accent
---
# Monarch
> "warm linen notebook under morning light" — Linen canvas, Copernicus serif headings at weight 350 with heavy negative tracking, ABC Oracle UI, Ember Orange as the only chromatic color.

## Color tokens
| token | hex | role |
|---|---|---|
| Ember Orange | #ff692d | Primary action buttons, active nav indicators, key UI accents; the only chromatic color |
| Ink | #22201d | Primary text, icon strokes, heading color, footer text; warm brown undertone |
| Graphite | #777573 | Muted body text, secondary helper text, captions |
| Smoke | #cccccc | Light text on dark surfaces, inverse labels, high-contrast captions |
| Stone | #dcd9d6 | Hairline borders, dividers, table separators, icon outlines |
| Linen | #efecea | Page canvas and section backgrounds; the warm cream |
| Paper | #ffffff | Card surfaces, elevated product panels, input fields |

Surfaces: 0 Linen Canvas #efecea → 1 Paper Card #ffffff → 2 Ember Accent #ff692d (button fills, badges, active states).

Single gradient: linear-gradient(to right, #e5484d, #ff692d), promotional contexts only, never on buttons/cards/backgrounds.

## Typography
- **ABC Oracle** (UI) — weights 100, 350, 400, 500; sizes 14–20px; line-height 1.30–1.56; tracking -0.012em (14px), -0.010em (16px), normal (20px+). Fallback: Inter or Söhne (prefer weight 350). All UI text.
- **Copernicus** (display) — weight 350 only; sizes 32, 40, 48px; line-height 1.20; tracking -0.050em (32px), -0.060em (40px), -0.067em (48px). Fallback: Fraunces or Source Serif 4. All display and section headings.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 14px | 1.43 | -0.17px |
| body | 16px | 1.5 | -0.16px |
| body-lg | 18px | 1.56 | -0.18px |
| subheading | 20px | 1.33 | -0.2px |
| heading-sm | 32px | 1.2 | -1.6px |
| heading | 40px | 1.2 | -2.4px |
| display | 48px | 1.2 | -3.22px |

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 40, 48, 64, 72, 80, 96px.
- Radius: inputs 8px, cards 12px, pills/tags/buttons 9999px.
- Shadows:
  - Subtle: rgba(34,32,29,0.05) 0 1px 2px 0
  - MD: rgba(34,32,29,0.1) 0 10px 15px -3px, rgba(34,32,29,0.1) 0 4px 6px -4px

## Layout
- Max-width 1200px; section gap 64px; card padding 24px; element gap 16px.
- Hero: full-bleed lifestyle photo, headline card overlay (bottom-left, 85% white, 12px radius), floating data cards right side.
- Content below on Linen: 64px sections alternating white screenshots and text blocks; 3–2 column grids with 64px gaps; press badges in a single full-width strip; sticky white nav.

## Components
- **Primary Pill Button:** 9999px radius, Ember Orange fill, white 16px/500 text, 12px/24px padding, subtle shadow.
- **Ghost Pill Button:** 9999px radius, transparent, Ink text, no border.
- **Outlined Pill Button:** 9999px radius, 1.5px Ember Orange border, Ember Orange text, 8px/20px padding.
- **Feature Card:** 12px radius, white/transparent on Linen, 24px padding, uppercase tracked eyebrow (14px Ember Orange), heading (32px Copernicus).
- **Product Screenshot Card:** 12px radius, white fill, 1px Stone border, two-layer MD shadow.
- **Top Navigation:** sticky white, 64px height, logo left, nav center (16px/400 Ink), auth right.
- **Section Header:** uppercase eyebrow (14px/500 Ember Orange), heading (40–48px Copernicus), subtext (18px Graphite).

## Motion
_not captured_

## Rules (do / don't)
Do:
- Ember Orange exclusively for filled buttons, active states, and eyebrow labels.
- All buttons at 9999px radius; the pill is the most recognizable element.
- Copernicus weight 350 with matching negative tracking per size.
- Linen background, Paper cards (never inverted).
- Stone for 1px hairline borders.
- Body in ABC Oracle weight 350–400 with -0.010em tracking.
- Embed screenshots as 12px cards with Stone border and MD shadow.

Don't:
- No additional accent colors.
- No square or 4px-radius buttons.
- No headings in ABC Oracle or body in Copernicus.
- No pure black/white backgrounds.
- No heavy card/button shadows.
- No uppercase for body content.
- No orange gradient on UI elements.

## Steal this
- Serif heading at ultra-light weight 350 with -0.067em tracking against a workhorse sans.
- Linen-canvas / white-card pairing with a 1px Stone border and a single soft MD shadow only on screenshots.
- Orange restricted to filled pill buttons, active states, and small uppercase eyebrows.
- Bottom-left translucent headline card over a full-bleed lifestyle hero.
