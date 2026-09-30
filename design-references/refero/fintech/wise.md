---
name: Wise
source: https://styles.refero.design/style/367c0c6e-73a7-441c-a8ff-91d139ac60dc
category: fintech
tags: [light, forest-green, lime-accent, weight-900-display, pill-buttons, flat, all-caps-hero]
best_for: Money-transfer / global finance brands that want a loud, blocky display voice with a green-and-lime palette
---
# Wise
> "deep moss with lime voltage. Lime sparks on a near-black forest floor, with massive blocky display type announcing every move." Weight-900 display at 89–105px, pill controls, flat by design.

## Color tokens
| token | hex | role |
|---|---|---|
| Forest Ink | #163300 | Dominant brand dark: nav text, dark section backgrounds, primary copy, icon strokes, filled nav pills |
| Lime Voltage | #9fe870 | Green accent for decorative details and low-frequency emphasis (token role); Components/Do's use it as the primary CTA pill fill and active-segment fill |
| Spruce | #054d28 | Secondary dark green for card surfaces, supporting iconography, tonal depth on dark sections |
| Linen Mist | #e2f6d5 | Pale green wash for soft highlight surfaces, tinted backgrounds, nav hover states |
| Signal Blue | #0b4c72 | Blue accent for decorative details and low-frequency emphasis |
| Alarm Red | #cb272f | Red accent for decorative details; supporting accent, not a status color |
| Obsidian | #0e0f0c | Display headlines, high-contrast headings, pure-black moments in nav/hero |
| Charcoal | #454745 | Primary text, body copy, dense UI (slightly warm black) |
| Slate | #6a6c6a | Supporting body text, helper labels, subdued iconography |
| Pebble | #868685 | Muted secondary text, placeholder copy, icon strokes, input borders |
| Fog | #e8ebe6 | Card surfaces, section dividers, subtle panel backgrounds |
| Paper | #ffffff | Page canvas, inverted card surfaces, button text on lime fill |

Surfaces (elevation): 0 Paper #ffffff (page canvas) → 1 Fog #e8ebe6 (card surfaces) → 2 Linen Mist #e2f6d5 (tinted highlights) → 3 Lime Voltage #9fe870 (active surfaces) → 4 Forest Ink #163300 (inverted surfaces).

## Typography
- **Inter** — weights 400, 500, 600, 700; sizes 12–300px; line-height 0.72–2.17; tracking -0.03 to -0.003px. Body, UI, labels, sub-headings.
- **Wise Sans** (display) — weight 900 only; sizes 40–300px; line-height 0.85, 1.50; tracking -0.002em. Fallback: Inter Black (900) with -0.04em tracking. Ultra-heavy weight 900 at 89–105px, the brand's signature shout.
- **monospace** (400; 300px) and **sans-serif** (400; 300px) generic fallbacks.

| role | size | line-height | tracking |
|---|---|---|---|
| micro | 12px | 1.63 | -0.036px |
| caption | 14px | 1.55 | -0.07px |
| body-sm | 16px | 1.5 | -0.096px |
| body | 18px | 1.5 | -0.126px |
| body-lg | 25px | 1.3 | -0.225px |
| subheading | 36px | 1.25 | -0.396px |
| heading-sm | 45px | 1.1 | -0.495px |
| heading | 61px | 1.1 | -0.915px |
| heading-lg | 89px | 0.85 | -2.67px |
| display | 105px | 0.85 | -3.15px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48, 56, 64, 100, 124px.
- Radius: tags 9999px, cards 10px, inputs 10px, buttons 9999px, image masks 1000px, large cards 28px, nav segments 9999px.
- Shadows:
  - subtle: rgba(14,15,12,0.12) 0 0 0 1px
  - subtle-2: rgb(134,134,133) 0 0 0 1px inset
  - lg: rgba(0,0,0,0.08) 0 6px 20px 0
  - xl: rgba(0,0,0,0.15) 0 10px 32px 0, rgba(0,0,0,0.04) 0 40px 40px 0

## Layout
- Max-width 1200px centered, hero/dark sections full-bleed; section gap 64–80px; card padding 24px; element gap 8–12px.
- Hero: centered massive display headline over white space, large globe illustration breaking the lower viewport edge.
- Section rhythm: white → light green band → dark Forest Ink. Centered stacks in hero, then 2-column text+visual or 3-column feature rows; 5-column flag grid for the country directory.
- Single sticky top nav with segmented pill switcher; floating QR badge fixed bottom-right.

## Components
- **Primary CTA Pill Button:** Lime Voltage fill, Forest Ink or Charcoal text, 9999px radius, 11px vertical / 24px horizontal padding, Inter 500 @16px, no border/shadow.
- **Outlined Pill Button:** white fill, 1px Forest Ink border, 9999px radius, same padding, secondary actions in nav.
- **Text Link Button:** underlined Forest Ink, 16px Inter 500, no bg/border; pairs as secondary with the primary CTA.
- **Top Navigation Bar:** white bg, 64px height, logo left, three-segment pill nav (9999px), right cluster with flag/Help/Log in/Sign up outlined pill.
- **Segmented Tab Control:** active Lime Voltage fill + Charcoal text; inactive transparent + Charcoal text; ~40px height, 9999px container, 12px horizontal padding per segment.
- **Display Headline:** Wise Sans 900 @89–105px, line-height 0.85, tracking -3.15px, Charcoal or Obsidian on light, Lime on dark sections, ALL CAPS for hero.
- **Feature Row:** 3-column (1 on mobile), icon 24px Charcoal stroke, 24px gap to Inter 700 @18px heading, 8px gap to Inter 400 @16px Pebble body, 32px column gap.
- **Country Grid Item:** circular flag 56px (1000px radius), 12px gap to country name Inter 500 @16px Forest Ink, 5-column grid, 32px row gap, underline on hover.
- **Dark Section Card:** Forest Ink bg, 28px radius, 40px padding, Lime headline, Paper body text, inset white card (10px radius, 16px padding) for currency selector.
- **Currency Selector Pill:** white pill inside dark card, circular 24px flag + country name Charcoal Inter 500 left, outlined "Change" button Forest Ink right, 9999px radius, 8px vertical padding.
- **Input Field:** 10px radius, 1px Pebble border, 12px vertical / 16px horizontal padding, Inter 400 @16px; Forest Ink border + no glow on focus.
- **Floating QR Badge:** Forest Ink rounded square (16px radius), fixed bottom-right, 120px wide, QR in Paper, "Get the Wise app" label Lime Voltage Inter 500 @12px.
- **Badge / Tag:** 9999px radius, 8px/12px padding, Linen Mist bg + Forest Ink text OR Forest Ink bg + Lime text, Inter 500 @12px.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Display headlines in Wise Sans weight 900 with -3.15px tracking at 105px; the heaviness is the signature.
- Lime Voltage exclusively for primary action fills and active states; one lime element per visible viewport section.
- 9999px radius for all buttons, tags, nav segments.
- Forest Ink #163300 for text and dark surfaces, not pure black.
- Tight negative letter-spacing at large sizes (-0.030em at 100px+ down to -0.003em at 12px).
- Pair a filled primary CTA with an underlined text link; never two filled buttons side by side.
- Invert section backgrounds from white to Forest Ink for rhythm; lime text on dark green is built-in emphasis.

Don't:
- No Charcoal #454745 for display headlines; use Obsidian #0e0f0c or Forest Ink.
- No gradients, drop shadows beyond hairline borders, or decorative blurs; flat by design.
- No Lime Voltage as text on light backgrounds (contrast too low).
- No sharp corners (0–4px) on buttons, tags, or nav.
- No display headlines in Inter; Wise Sans 900 mandatory at 60px+.
- Don't stack multiple lime elements close together.
- No #000000 for body text; Charcoal @18px on white is baseline.

## Imagery
Painted 3D-style globe with gold coins as the visual world: tactile, slightly surreal, soft gradients, warm light. Photography minimal (high-key, lifestyle-casual). Country flags are the only icon system (circular thumbnails, 5-column grid). No abstract graphics or stock patterns. Globe + coins is the recurring mascot for global reach.

## Steal this
- Weight-900 ALL-CAPS display at 0.85 line-height as the whole brand voice.
- Pill CTA + underlined text link as the standard pairing, never two filled buttons.
- White → pale green → Forest Ink section cadence, with lime text only on dark.
- Circular flags in a 5-column grid as functional decoration.
