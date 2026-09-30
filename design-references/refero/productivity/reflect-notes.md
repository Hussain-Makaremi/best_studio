---
name: Reflect Notes
source: https://styles.refero.design/style/e7f92774-3c08-402b-917d-020ba1f3d489
category: productivity
tags: [dark, violet-indigo, star-field, inset-glow, medium-weight-display, floating-pill-nav, single-accent]
best_for: Notes / thinking-tool / AI-notes landing pages with a violet-tinted near-black observatory look and inset rim-light instead of shadows
---
# Reflect Notes
> "starlit violet cosmos — a dark observatory where notes float like constellations against a near-black indigo void." Void Canvas #030014, AeonikPro 500 headings, Inter V body, Lavender Accent #9382ff for links and focus only, inset white glows instead of drop shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Void Canvas | #030014 | Page background, hero canvas, deepest surface layer |
| Midnight Surface | #060317 | Elevated surface, card backgrounds, slightly raised panels |
| Deep Indigo | #10093a | Most elevated surface, hover states, prominent UI panels |
| Lilac White | #f4f0ff | Primary text, headings, icons, high-contrast UI elements |
| Pearl | #ffffff | Pure white for text on violet-filled elements, max-contrast headlines |
| Ash | #a8a6b7 | Secondary body text, card labels |
| Fog | #918ea0 | Tertiary text, metadata, helper text, inactive controls |
| Steel | #54525f | Deepest muted text, disabled labels, dark-mode border contrast |
| Mercury | #cdccd0 | Bright neutral in dividers, subtle borders, light-on-dark tints |
| Dusk | #72707b | Mid-neutral for secondary borders, inactive icon strokes |
| Lavender Accent | #9382ff | Brand accent: links, active icons, focus rings, gradient endpoints |
| Iris | #5046e4 | Violet supporting accent for decorative details; primary CTA background |
| Cosmic Gradient | linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%) | Decorative gradient for accent text and thin strokes only |
| Aurora | linear-gradient(180deg, rgba(183,164,251,0) 0%, #b7a4fb 50%, #8562ff 100%, rgba(133,98,255,0) 100%) | Vertical violet glow for divider lines and edge highlights |

Surfaces: 0 Void Canvas #030014 → 1 Midnight Surface #060317 (cards, nav pill, slightly elevated panels) → 2 Deep Indigo #10093a (highest elevation, prominent UI blocks, button fills) → 3 Testimonial Card #060317 (same as level 1, differentiated by padding/radius).

## Typography
- **AeonikPro** (display & headings) — weight 500; sizes 24, 32, 48, 56, 72px; line-height 1.11–1.33; tracking normal. Fallback: Aeonik, Inter, or DM Sans. Headings 24px+; weight 500 for an editorial, restrained voice.
- **Inter V** (body & UI) — weights 400, 500; sizes 12, 13, 14, 15, 16, 18px; line-height 1.20–1.85; OpenType features "calt" 0, "cv10", "liga" 0, "ss01". Fallback: Inter, Geist, or system-ui. Body, navigation, buttons, inputs, badges, labels.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.33 | — |
| body-sm | 14px | 1.43 | — |
| body | 16px | 1.5 | — |
| body-lg | 18px | 1.56 | — |
| subheading | 24px | 1.33 | — |
| heading-sm | 32px | 1.25 | -0.2px |
| heading | 48px | 1.17 | -0.3px |
| heading-lg | 56px | 1.14 | -0.4px |
| display | 72px | 1.11 | -0.5px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 48, 52, 56, 64, 72, 108, 232px.
- Page max-width 1200px; section gap 96–120px; card padding 24–32px; element gap 8–16px.
- Radius: buttons 5px, inputs 5px, cards 16px, feature blocks 24px, badges 32px, nav pill 999px.
- Shadows (inset only):
  - lg: rgba(255,255,255,0.04) 0 0 24px 0 inset
  - lg-2: rgba(255,255,255,0.06) 0 0 24px 0 inset
  - md: rgba(164,143,255,0.12) 0 -7px 11px 0 inset
  - subtle, subtle-2, subtle-3: multi-point star-field dot patterns (decorative)
  - subtle-4: rgba(255,255,255,0.03) 0 0 0 8px inset

## Layout
- Navigation: floating pill-shaped container, centered, ~40px height, radius 999px.
- Hero: full-bleed with centered headline, subtitle, product screenshot below.
- Sections: center-aligned within max-width container; 4-column grid for features (8 items), 3-column grid for testimonials (6 items).
- Page structure: no sidebar, no sticky elements beyond floating nav; one continuous dark scroll with rhythmic section pauses.

## Components
- **Navigation Pill:** bg #060317, inset white glow, ~40px height; logo left + nav links (Inter V 15px/400, #f4f0ff) + Login text link (#918ea0) + filled CTA button right.
- **Primary CTA Button:** #5046e4 bg, 5px radius, Inter V 15px/500, white text, 10px/16px padding.
- **Ghost Text Button:** no bg, Inter V 15px/400, #918ea0 text, 5px radius, subtle hover.
- **AI Badge Pill:** 32px radius, #060317 bg, #5046e4 border, Inter V 13px/500 in #f4f0ff, inset violet glow rgba(164,143,255,0.12).
- **Hero Product Screenshot:** full-width app screenshot, 16px radius, subtle #918ea0 border, inset white glow.
- **Feature Card:** 16px padding, no visible bg/border; outlined icon (stroke 1.5px, #f4f0ff, ~24px) top-left, AeonikPro 500 18–20px title #f4f0ff, Inter V 15px/400 description #918ea0.
- **Feature Icon:** 1.5px stroke, outlined, ~24px, #f4f0ff, no fill; geometric and minimal.
- **Testimonial Card:** 16px radius, #060317 bg, 24px padding, inset white glow; 40px circular avatar top, name Inter V 15px/500 #f4f0ff, handle Inter V 14px/400 #918ea0, quote Inter V 15px/400 #f4f0ff with @mentions in #9382ff.
- **Section Header:** centered, AeonikPro 500 48–56px #f4f0ff; subtitle Inter V 18px/400 #918ea0.
- **Text Link with Chevron:** Inter V 15px/500 #9382ff, right-arrow chevron, 8px radius.
- **Star Field Background:** subtle 1–2px white dots at low opacity across the hero, decorative only.
- **Aurora Divider:** thin ~1px line using the Aurora gradient, full or column width.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Body text Inter V weight 400 at 16px/1.50, colors #a8a6b7 or #f4f0ff (never pure #ffffff).
- Headlines AeonikPro weight 500 at 48–72px (not bold).
- Radius: 5px buttons/inputs, 16px cards, 32px badges, 999px nav only.
- Inset white glow on elevated surfaces instead of drop shadows.
- #9382ff exclusively for links, active states, focus rings, small accent icons (sparse).
- Cosmic gradient only on text and thin decorative strokes (never large fills).
- Page background #030014 (violet undertone essential, not pure black).

Don't:
- No bold (600+) or extra-bold (700+) weights anywhere.
- No drop shadows on cards/panels (inset rim-light only).
- No brand accent on large fills, backgrounds, or hero sections.
- No border-radius outside the defined set (5/16/24/32/999px).
- No pure white #ffffff for body text.
- No semantic colors (red/green/yellow) for status.
- No multiple accent hues (single #9382ff only).

## Steal this
- Inset white rim-light ("glow") on cards and the nav pill instead of drop shadows.
- Violet-undertone black (#030014) with two more indigo steps for elevation.
- Faint star-field dot background and a vertical Aurora gradient divider line.
- Gradient used only for accent text and hairline strokes.
