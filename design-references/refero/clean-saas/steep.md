---
name: Steep
source: https://styles.refero.design/style/75fdb89f-ca64-41b3-af36-7a78bd09448e
category: clean-saas
tags: [light, near-monochrome, serif-display, single-accent, pill-buttons]
best_for: Analytics / data products that want an editorial, calm, premium marketing site
---
# Steep
> Serif analytics on warm paper — oversized serif display type, generous breathing room, 24px soft cards, pill controls, one warm peach accent on a 97% achromatic system.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink Black | #17191c | Primary text, filled buttons, nav logo |
| Paper White | #ffffff | Page canvas, dominant background |
| Mist Gray | #f2f2f3 | Card surfaces, secondary backgrounds |
| Fog White | #fafafb | Section bands, hover surfaces |
| Slate Gray | #777b86 | Links, muted helper text |
| Ash Gray | #979799 | Tertiary labels, category tags |
| Smoke Gray | #a3a6af | Placeholder text, disabled states |
| Blush Peach | #fbe1d1 | Accent card background (max 1/page) |
| Sienna Brown | #5d2a1a | Text/strokes on peach, chart lines |

Surfaces (stacking): 0 Canvas #ffffff → 1 Card Mist #f2f2f3 (nested blocks) → 2 Section Fog #fafafb (alternating bands) → 3 Accent Blush #fbe1d1 (editorial cards) → 4 Elevated White #ffffff + shadow (floating UI).

## Typography
- **Signifier** (display serif) — weight 400 only; sizes 44 / 64 / 90px (H1/H2 exclusive); line-height 1.30; tracking -2.25px @90, -0.96px @64, -0.66px @44. Fallback: GT Sectra, Tiempos Headline, Source Serif 4, ui-serif.
- **Söhne** (body sans) — weights 400, 430, 450, 480, 500; sizes 14–26px (8 values); line-height 1.00–1.50; tracking -0.234px @26, -0.162px @18, 0 body. Fallback: Inter, ui-sans-serif.

Scale (Minor Third 1.2 from 15px):
| role | size |
|---|---|
| Display | 90px |
| Heading-lg | 64px |
| Heading | 44px |
| Subheading | 22px |
| Body-lg | 20px |
| Body | 17–18px |
| Caption | 15px |

Rules: Signifier 400 only at 44/64/90 — never substitute sans. Use Söhne half-steps (430/450/480) before 500. Tracking: -0.025em (90px display), -0.015em (headings), -0.009em (26/18px).

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 40, 64, 80, 96, 124, 128, 160px.
- Radius: cards 24px, elevated cards 20px, small cards 16px, inputs 16px, images 12px, buttons 9999px.
- Shadows:
  - Subtle: 1px border + 4px/24px rgba(0,0,0,0.08)
  - Subtle-2: 1px border + 8px/40px rgba(0,0,0,0.1)
  - Floating artifact: 1px border (oklab) + 20px/25px rgba(0,0,0,0.1) + 8px/10px
  - Modal: 1px border + 8px/40px rgba(0,0,0,0.1)
  - Dropdown: 1px border + 4px/24px rgba(0,0,0,0.08)

## Layout
- Max-width 1200px; section gap 80px; card padding 20px; element gap 8px.
- Hero: centered 90px serif headline + 17px subhead + pill button pair, surrounded by 4 floating artifact cards (table, chart, stat, composer) at varied offsets.
- Sections alternate Paper White / Card Mist. 2-column text+UI feature layouts, 80px vertical gaps.
- Transparent nav bar: logo left, links center, CTAs right. Spacious — content never crowds edges.

## Components
- **Pill Button — Filled:** #17191c bg, white text, 9999px radius, Söhne 16px/400, no shadow.
- **Pill Button — Ghost:** transparent bg, #17191c border/text, 9999px radius, no shadow.
- **Neutral Card:** #f2f2f3 bg, 24px radius, 20px padding, no shadow/border.
- **Accent Peach Card:** #fbe1d1 bg, #5d2a1a text, 24px radius, max 1 per page.
- **Floating Artifact:** #ffffff bg, 20px radius, subtle-3 shadow, 16–20px padding.
- **Input/Composer:** #ffffff bg, 1px #ececec border, 16px radius, Söhne 16px placeholder.
- **Text Link:** #17191c, no bg/border, → suffix, underline on hover only.
- **Nav Link:** #17191c, 16px/400, transparent bar.
- **Stat Card:** white artifact + Söhne 20px/500 metric + delta line + minimal chart.
- **Avatar:** 40px circle, 9999px radius, 2-letter monogram.
- **Tag/Label:** Söhne 14px/400, #979799, no background.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Signifier 400 only at 44/64/90px.
- Peach #fbe1d1 max once per page for editorial emphasis.
- 9999px on buttons, 24px on content cards (structural radii).
- Pair filled pill with ghost pill as secondary action.
- Söhne half-steps (430/450/480) before 500.
- Maintain the 4px base unit.

Don't:
- No chromatic colors beyond the peach/brown pair (system is 97% achromatic).
- No bold (600+) or semibold (500) Signifier.
- No drop shadows on content cards (only floating artifacts).
- No radius below 16px on cards or below 9999px on buttons.
- No underlines on text links at rest (arrow carries the affordance).
- Don't place the peach card on non-white backgrounds; don't use Sienna Brown outside peach surfaces.

## Steal this
- Floating "product artifact" cards (table, chart, stat, composer) orbiting a centered serif hero — proof without a full screenshot.
- One-accent-card-per-page budget: a single peach/brown pair carries all warmth.
- Shadows only on floating UI; content cards stay flat grey (#f2f2f3) at 24px radius.
- Fractional sans weights (430/450/480) for subtle hierarchy instead of jumping to bold.
