---
name: Revolut
source: https://styles.refero.design/style/a3161c3c-26d4-425b-aaa3-4fc3f06b77ee
category: fintech
tags: [light, monochrome, photography-led, pill-buttons, shadowless, editorial]
best_for: Global banking / super-app marketing that wants monochrome editorial chrome with photography carrying all the color
---
# Revolut
> "Monochrome editorial banking on cloud photography — white ink, pill buttons, one blue ribbon of color in an otherwise grayscale world." No shadows; hairlines and color shifts only.

## Color tokens
| token | hex | role |
|---|---|---|
| Pure Black | #000000 | Button text on light surfaces, pure-black background blocks |
| Ink | #1f1f1f | Primary text, footer background, filled dark buttons |
| Graphite | #4c4c4c | Tertiary body text, inline badge copy, muted surfaces |
| Slate | #717173 | Neutral form states, badge text, quiet UI feedback; muted section headers |
| Ash Grey | #c9c9cd | Hairline borders, disabled dividers, dominant link color |
| Mist | #f7f7f7 | List and grouped-background fills, recessed surfaces |
| Bone | #ffffff | Page canvas, card surfaces, button text on dark fills |
| Cobalt Wash | linear-gradient(to right, #1227fd, #6fa0ff) | Promotional bar gradient only |

Surfaces: 0 Canvas #ffffff → 1 Recessed #f7f7f7 (secondary containers, list groups) → 2 Edge #c9c9cd (hairline dividers 1–2px) → 3 Card #ffffff (radius/border) → 4 Inverted #1f1f1f (dark bands, footer, navigation).

## Typography
- **Aeonik Pro** (display) — weights 400, 500; sizes 16–88px (7 values); line-height 1–1.38; tracking -0.024em (88px) → -0.012em (52px) → -0.01em (40–24px). Fallback: Inter, DM Sans, or Manrope. Weight 500 across the entire scale, never heavier.
- **Inter** (body) — weights 400, 600, 700; sizes 12, 14, 16px; line-height 1.20, 1.50, 1.57; tracking -0.01em to -0.005em body, +0.015em for uppercase 12px labels. Fallback: system UI sans. Carries buttons, form labels, navigation, badges.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.5 | +0.015em |
| body-sm | 14px | 1.57 | -0.005em |
| body | 16px | 1.2 | — |
| subheading | 18px | 1.33 | — |
| heading-sm | 24px | 1.17 | -0.01em |
| heading | 32px | 1.19 | -0.01em |
| heading-lg | 40px | 1.2 | -0.01em |
| display | 52px | 1 | -0.012em |
| display-xl | 88px | 1 | -0.024em |

## Spacing, radius, elevation
- Base unit 8px; density compact.
- Spacing: 8, 16, 24, 32, 40, 56, 64, 80, 232px.
- Radius: buttons/tags 9999px, cards 22.5px, lists 20px, small controls 12px.
- Shadows: none (system deliberately avoids shadows; separation via color shifts and hairline borders).

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 8px.
- Navigation header: #1f1f1f band, white wordmark, centered 16px Inter nav, pill sign-up right.
- Phone Preview Card: 22.5px top radius, 0 bottom, white card overlapping full-bleed sky/cloud photo.
- Pricing on #1f1f1f backgrounds with white cards.

## Components
- **Pill Button (Light):** white bg, #1f1f1f text/border (2px), 9999px radius, 10px/24px padding, 16px Inter 600.
- **Pill Button (Dark):** #1f1f1f bg, white text, 9999px radius, 0/20px padding.
- **Pill Button (Ghost on Photo):** rgba(255,255,255,0.1) bg, white text, white 1px border, 9999px radius, 10px/24px padding.
- **Pill Button (Text Link):** transparent, #1f1f1f text at 80% opacity, 12px radius, no padding.
- **Promo Gradient Bar:** cobalt wash gradient, 32–40px height, 16px Inter 400 white text, centered.
- **Navigation Header:** see Layout.
- **Pricing Tier Card:** white, 22.5px radius, 24–40px padding; tier name 24px Aeonik Pro 500, price 32px Aeonik Pro 500, description 16px Inter 400.
- **Phone Preview Card:** see Layout.
- **List Container:** #f7f7f7 bg, 20px radius, 16–24px padding.
- **Section Header (Muted):** 24–40px Aeonik Pro 500, #717173 color (not ink).
- **Trust Badge Block:** transparent, centered logo/icon, 12–14px Inter caption below in #717173.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 9999px for all buttons, tags, inputs.
- Display headlines at Aeonik Pro weight 500 maximum.
- Reserve cobalt gradient for the top promotional bar only.
- #c9c9cd hairlines (1–2px) instead of shadows.
- Let photography carry all color; surfaces stay white, #f7f7f7, or #1f1f1f.
- Tighten tracking at display sizes; open only at 12px uppercase.
- Place pricing on #1f1f1f backgrounds with white cards.

Don't:
- No chromatic colors beyond the 7-neutral + 1-blue palette.
- No shadows on cards or buttons.
- No Aeonik Pro weights above 500.
- No promo gradient on heroes, buttons, or product cards.
- No square corners on primary actions.
- Don't mix Inter and Aeonik Pro at the same size.
- Don't use color to indicate state; use opacity shifts and border weight instead.

## Photography direction
Full-bleed sky/cloud photography is the only color source: high-key, overexposed skies with soft cumulus clouds. Subjects in editorial close-up, looking off-camera, warm natural daylight, candid not posed. White display headlines overlay; product UI shown via iPhone-frame card overlapping the photo bottom. No decorative graphics, 3D renders, or illustrations. Icons: monochrome line icons at 1.5–2px stroke, never filled with brand color. Award logos: full-color third-party marks on white.

## Steal this
- Color budget spent entirely on sky photography; UI is white / #f7f7f7 / #1f1f1f.
- Phone-preview card with a 22.5px top radius overlapping the bottom of a hero photo.
- State conveyed by opacity and border weight, not color.
- Muted (#717173) section headers so the ink-black content reads as primary.
