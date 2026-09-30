---
name: Cal.com
source: https://styles.refero.design/style/5d7aa503-8cfa-49a4-bd3b-0c2f0f075c70
category: productivity
tags: [light, monochrome, pill-buttons, rounded-headline-sans, single-blue-accent, shadow-separation, compact]
best_for: Scheduling / utility SaaS marketing that wants stark black-and-white clarity softened by friendly rounded type and pill buttons
---
# Cal.com
> "Monochrome Utility, Human Touch. A system that prioritizes clarity and function with a stark black-and-white palette, but softens it with friendly typography and rounded forms." Cal Sans 600 headlines, Ink pill CTAs, cards separated by shadow rather than border.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink | #101010 | Primary CTAs, primary text, active states |
| Action Blue | #0099ff | Secondary links, informational highlights |
| White | #ffffff | Card backgrounds, text on dark buttons |
| Paper | #f4f4f4 | Main page background |
| Graphite | #242424 | Headlines, primary body text |
| Slate | #6b7280 | Secondary text, descriptive copy, disabled states |
| Stone | #898989 | Placeholder text, decorative UI elements |
| Silver | #e5e7eb | Borders, dividers, subtle backgrounds |
| Info Banner BG | #eff6fe | Top-of-page informational banner background |
| Google Blue | #4285f4 | Integration logos only |
| Google Yellow | #fbbc04 | Integration logos only |
| Google Green | #34a853 | Integration logos only |
| Google Red | #ea4335 | Integration logos only |

## Typography
- **Cal Sans** (primary headlines) — weight 600 only; sizes 20, 24, 48, 64px; line-height 1.10–1.30; tracking +0.01em. Fallbacks: Poppins, Gilroy.
- **Cal Sans UI Variable Light** (body/UI) — weight 300; sizes 14, 16, 18px; line-height 1.40–1.50; tracking -0.19px to -0.24px. Fallback: Inter Light.
- **Inter** (secondary UI) — weights 400, 500, 600; sizes 10, 12, 14, 16px; line-height 1.14–1.43. Fallback: system-ui, -apple-system, sans-serif.
- **Matter** (tertiary captions) — weight 400; sizes 10, 12, 14px; line-height 1.14–1.50. Fallback: Inter.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.4 | -0.24px |
| body-sm | 14px | 1.5 | -0.2px |
| body | 16px | 1.5 | -0.19px |
| subheading | 18px | 1.4 | -0.2px |
| heading-sm | 20px | 1.3 | +0.2px |
| heading | 24px | 1.3 | +0.24px |
| heading-lg | 48px | 1.1 | +0.48px |
| display | 64px | 1.1 | +0.64px |

## Spacing, radius, elevation
- Density compact (base unit not captured).
- Spacing: 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 80px.
- Max-width 1200px; section gap 96px; card padding 24px.
- Radius: tags 9999px, cards 12px, inputs 8px, buttons (pills) 9999px, buttons (rectangular) 8px.
- Shadows:
  - sm: rgba(36,36,36,0.7) 0 1px 5px -4px, rgba(36,36,36,0.05) 0 4px 8px 0
  - subtle: rgba(255,255,255,0.15) 0 2px 0 0 inset
  - sm-2, sm-3, sm-4, subtle-2, subtle-3: values not captured

## Layout
- Max-width 1200px, section gap 96px, card padding 24px. Further layout structure not captured.

## Components
- **Primary CTA Button:** pill-shaped (9999px), Ink bg (#101010), White text, Cal Sans UI 14–16px, padding ~12px 24px.
- **Secondary Ghost Button:** pill outline, transparent/Paper bg, Graphite text, 1px Silver border, 9999px radius, ~12px 24px padding.
- **Header CTA Button:** rectangular, Ink bg, White text, Cal Sans UI 14px, 8px radius, ~8px 16px padding.
- **Tag Button:** small pill, Paper/Silver bg, Graphite text, 9999px radius, ~4px 12px padding.
- **Scheduling Widget Card:** white bg, 16px padding, 12px radius, `rgba(36,36,36,0.05) 0 4px 8px 0` shadow.
- **Navigation Link:** text-only, Graphite, Cal Sans UI 14–16px, no underline.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Cal Sans weight 600 exclusively for headings (20px and above).
- Strict monochrome palette (Ink, Graphite, Slate, Paper, White) for 99% of the UI.
- Pill-shaped buttons (9999px) for all primary and secondary page CTAs.
- 12px border radius on all content cards and large containers.
- Subtle, diffuse shadows for elevation.
- Body copy in Cal Sans UI Variable Light with tight negative letter-spacing.
- Reserve the single Action Blue (#0099ff) for secondary links or informational highlights.

Don't:
- No new colors in the core UI; confine color to logos and the single blue accent.
- No sharp corners on buttons or cards.
- No font weights heavier than 600.
- No traditional outlined buttons; use solid Ink or ghost pill buttons.
- No gradients on buttons or card backgrounds.
- No borders on cards; use shadows for separation.
- Don't set body text in Cal Sans; it is for headlines only.

## Steal this
- Ink (#101010) pill as the only primary CTA, with a Silver-bordered ghost pill as secondary.
- Cards separated by a diffuse shadow, not a border, on a #f4f4f4 page.
- Light-weight (300) rounded UI face for body with tight negative tracking, bolder rounded face for headlines.
- Third-party brand colors (Google) confined to integration logos only.
