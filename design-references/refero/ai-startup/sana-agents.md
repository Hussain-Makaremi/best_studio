---
name: Sana Agents
source: https://styles.refero.design/style/5bfbe8b0-de0e-470f-b130-929f50437160
category: ai-startup
tags: [light, serif-display, electric-lime, pill-buttons, shadowless, ink-black-cards]
best_for: Enterprise AI agent platform with an editorial serif hero and rare lime accent on dark panels
---
# Sana Agents
> "Lime spark on editorial white." 72px serif hero, near-black ink cards, Electric Lime allowed only on ink surfaces, depth from surface color instead of shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Lime | #cdfe00 | Green supporting accent for decorative details and low-frequency emphasis; accent button on dark surfaces only |
| Obsidian | #000000 | Hairline borders, nav text, input outlines where sharpest contrast is required |
| Ink Black | #0a1217 | Primary text, dark card surfaces, sign-up panel, filled primary buttons on light backgrounds |
| Stone Gray | #85898b | Muted helper text, footer labels, desaturated secondary copy |
| Frost Wash | #e4eff7 | Soft tinted surface for light product cards and secondary panels |
| Paper White | #ffffff | Page canvas, subtle backgrounds and section separation |

Surfaces: 0 Paper White #ffffff → 1 Frost Wash #e4eff7 (light product cards, secondary panels) → 2 Ink Black #0a1217 (dark product cards, sign-up CTA panels) → 3 Electric Lime #cdfe00 (accent action surface on ink-black only).

## Typography
- **Sana Serif** (display) — weight 400. Fallback: GT Super, Tiempos Headline, Source Serif 4.
- **Sana Sans** (primary) — weights 400, 450, 500. Fallback: Söhne, Inter, Untitled Sans. OpenType tnum and lnum on for all Sana Sans.

Scale (Minor Third 1.2 from 16px):
| role | size | weight | line-height |
|---|---|---|---|
| Display | 72px | 400 | 1.10 |
| Heading | 20px | 450 | 1.2 |
| Body | 16px | 400/500 | 1.5 |
| Caption | 13px | 400 | 1.5 |

Letter-spacing: _not captured_

## Spacing, radius, elevation
- Base unit 8px (comfortable density).
- Spacing: 6, 8, 10, 12, 16, 18, 20, 24, 25, 32, 62px.
- Radius: cards 24px, inputs 24px, buttons 9999px.
- Shadows: none — depth comes from surface color contrast.

## Layout
- Max-width 1200px; section gap 64px; card padding 24–32px; element gap 8–16px.
- Hero centered; rest left-aligned.
- Nav: #ffffff background; wordmark left; centered nav links 16px/400 #0a1217; "Sign in" pill right.
- Footer: #ffffff; wordmark left; three link columns 14px/400 #0a1217; headers 16px/450; copyright 13px #85898b.

## Components
- **Hero Headline:** 72px Sana Serif 400, #0a1217 on #ffffff, centered, line-height 1.10.
- **Product Card (Dark):** #0a1217, 24px radius, 24–32px padding; title 20px/500 #ffffff; subtitle 16px/400 #85898b; two pills (dark + lime accent).
- **Product Card (Light):** #e4eff7, 24px radius, 24–32px padding; title 20px/500 #0a1217; subtitle 16px/400; buttons (dark pill + ghost pill).
- **Pill Button (Filled Dark):** #0a1217 bg, #ffffff text, 16px/450, 9999px radius, 10px/18px padding.
- **Pill Button (Accent Lime):** #cdfe00 bg, #0a1217 text, 16px/450, 9999px radius, 10px/18px padding (dark surfaces only).
- **Pill Button (Ghost/White):** #ffffff or transparent, border #ffffff or #0a1217, 16px/450, 9999px radius.
- **OAuth Button (Google):** full-width pill, #ffffff bg, Google logo + label, centered.
- **Sign-Up Card:** #0a1217, 24px radius, 32–62px padding; centered heading 500 #ffffff; email input + oauth stack.
- **Email Input:** #ffffff, 1px border #000000/#0a1217, 24px radius, 10px/18px padding.
- **Navigation Bar / Footer:** see Layout.
- **Product Section Label:** 13px/400 #85898b, left-aligned.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Sana Serif exclusively for the 72px hero headline at weight 400.
- 24px radius on cards, inputs, panels; 9999px for pill buttons.
- Restrict #cdfe00 to filled buttons on #0a1217 surfaces only.
- Weight 450 for button labels and nav links (not 500).
- Enable "lnum" and "tnum" on all Sana Sans usage.
- Create depth via surface color shifts, not box-shadows.
- Keep hero centered; rest left-aligned.

Don't:
- No Sana Serif below 56px.
- No #cdfe00 on #ffffff or #e4eff7.
- No second accent color.
- No drop shadows on cards.
- No sharp corners (0px radius).
- No center-aligned body text or navigation.
- No gradients, patterns, or background imagery.

## Steal this
- Lime only as a button color on ink-black panels: a rule that keeps the accent rare and legible.
- Paired light (Frost) and dark (Ink) product cards at identical 24px radius.
- Serif hero at 72px over a purely sans, shadowless system.
- Weight 450 half-step for labels and nav.
