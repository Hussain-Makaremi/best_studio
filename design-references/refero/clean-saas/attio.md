---
name: Attio
source: https://styles.refero.design/style/08c8700c-f278-42bc-812e-f60dc6ce996e
category: clean-saas
tags: [light, monochrome, single-accent, cobalt, serif-quotes, blue-tinted-shadows]
best_for: CRM / data-heavy B2B SaaS wanting a financial-publication level of restraint
---
# Attio
> Architectural editorial on white — near-black type on white, one vivid cobalt, three-voice type stack (Inter UI, InterDisplay headlines, Tiempos serif pull-quotes).

## Color tokens
| token | hex | role |
|---|---|---|
| Cobalt Core | #266df0 | Primary accent: links, focus rings, active states |
| Cobalt Bright | #407ff2 | Hover states, decorative strokes |
| Cobalt Soft | #538bf3 | Highlight backgrounds, soft emphasis, "New" badge |
| Periwinkle | #bad0fa | Decorative card borders |
| Ice Wash | #e4edff | Soft backgrounds, button shadows |
| Onyx Footer | #000000 | Footer, promo banner |
| Obsidian | #101113 | Dark surfaces / promo banner |
| Ink Black | #1c1d1f | Primary heading/body text |
| Graphite | #232529 | Dark surfaces, filled buttons |
| Carbon | #2e3238 | Dark borders / ghost text |
| Slate 500 | #505967 | Borders, elevated surfaces |
| Slate 600 | #6f7988 | Muted body text |
| Slate 700 | #8f99a8 | Tertiary headings, captions |
| Fog 400 | #9fa1a7 | Placeholder, disabled |
| Mist 300 | #b5bdc9 | Footer column titles |
| Cloud 200 | #cad0d9 | Hairline borders |
| Cloud 100 | #d3d8df | Card borders |
| Mist 50 | #e4e7ec | Primary border, subtle backgrounds |
| Haze | #eeeff1 | Background fills, section bands |
| Paper | #f4f5f6 | Alternate surfaces, panels |
| Page Canvas | #ffffff | Primary background |

## Typography
- **Inter** (UI body) — weights 400/500/600/700; 10–32px (10 values); line-height 1.2–1.5; tracking -0.02em @14, -0.01em @16, 0 @12; OpenType ss03. Default UI weight 500.
- **InterDisplay** (marketing headlines) — weights 500/600; 12–64px (7 values); line-height 1.0–1.2; tracking -0.02 to 0.06px (5 settings); OpenType ss03, calt. 600 for large headings at -0.015em to -0.02em. Signature: 56px @ -0.015em.
- **TiemposText** (editorial serif) — weights 400/500; 28px, 40px; line-height 1.1–1.23; tracking -0.015em. Testimonial/pull-quote headings only.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 11px | 1.42 | -0.22px |
| body-lg | 16px | 1.38 | -0.16px |
| subheading | 20px | 1.3 | -0.2px |
| heading-sm | 32px | 1.19 | -0.32px |
| heading | 40px | 1.1 | -0.4px |
| heading-lg | 56px | 1.07 | -0.84px |
| display | 64px | 1.0 | -1.28px |

## Spacing, radius, elevation
- Base 4px, compact. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 60, 80, 100, 120px.
- Radius: badges/tags 7px; tabs, inputs, buttons 10px; cards 11–14px.
- Shadows (blue-tinted, very low opacity; never warm-gray or pure black):
  - Subtle: rgb(238,239,241) 0px 0px 0px 1px inset
  - Subtle-2: rgba(28,40,64,0.1) 0px 2px 3px -2px, rgba(28,40,64,0.04) 0px 4px 6px -2px
  - SM: rgba(28,40,64,0.06) 0px 2px 6px 0px, rgba(28,40,64,0.08) 0px 6px 20px -2px
  - XL: rgba(0,0,0,0.04) 0px 12px 30px 0px

## Layout
- Max-width 1440px; section gap 80–120px; card padding 24px; element gap 8px.
- Imagery: product screenshots as primary visuals (cards, zero padding, subtle blue shadow); one hero uses avatar tiles in a wave/contour pattern; monochrome customer logos; no photography/lifestyle. Icons 16–20px line, 1.5px stroke, monochrome. Low density — white space dominates.

## Components
- **Primary Filled Button:** #232529 bg, white text, 10px radius, 12px horizontal padding, ~40px height, Inter 500 15px, no border.
- **Secondary Outline:** white bg, 1px #e4e7ec, #1c1d1f text, 10px radius, 12px padding, Inter 500 15px.
- **Ghost Text Button:** transparent, #1c1d1f or #2e3238 text, 10px radius, 0 padding (nav/inline).
- **Dark Inverted Button:** #1c1d1f bg, white text, 1px #2e3238 border, 10px radius (dark surfaces/footer).
- **Tab Bar:** 2px bottom-border active indicator; inactive #6f7988, active #1c1d1f; Inter 500 15px; no fill.
- **Product Screenshot Card:** white, 11–14px radius, shadow rgba(28,40,64,0.04) 0 12px 30px, zero padding.
- **Feature Card:** white, 12px radius, 1px #e4e7ec border OR subtle shadow stack, 11–24px padding; heading 20–32px InterDisplay 600, body 15–16px Inter 500 #6f7988.
- **Eyebrow Pill/Tag:** light bg, 1px #e4e7ec, 7px radius, 6–8px/10–12px padding, Inter 500 12px.
- **New Badge:** #538bf3 bg, white/dark text, 7px radius, ~5px/8px padding, Inter 500 11–12px.
- **Chat Input:** white, 1px #e4e7ec, 10–12px radius, subtle shadow, 12–16px padding; placeholder #9fa1a7 Inter 15px 500; send button 28px square #266df0, 7px radius.
- **Sidebar Nav:** #ffffff or #f4f5f6 bg; items Inter 14–15px 500 #1c1d1f; 16–24px left indent; icons 16px, 1.5px stroke.
- **Footer:** full-bleed #000000, 4-column grid; titles Inter 15px 500 #b5bdc9; links Inter 14px 500 white; 80–120px vertical padding.
- **Logo Strip:** monochrome logos #1c1d1f/#2e3238, no cards/dividers, 60–80px vertical padding.
- **Promo Banner:** top, 48px height, #000000 or #101113, white Inter 14px 500, centered, dismissable, white arrow link.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #266df0 as sole accent for interactive highlights/active/links.
- Display headlines InterDisplay 600 at 40–64px, -0.015 to -0.02em, line-height 1.0–1.1.
- 10px buttons/inputs, 7px tags, 11–14px cards.
- Blue-tinted shadows rgba(28,40,64,0.04–0.1).
- Inter 500 as default UI weight; ss03 on all Inter/InterDisplay.
- 1440px max-width, 80–120px section gaps.

Don't:
- Button radius above 12px.
- Secondary accents, gradients on buttons, decorative color.
- TiemposText outside testimonial pull-quotes.
- Inter 400 as default.
- Shadows warmer than rgba(28,40,64,…).
- Positive letter-spacing on body/heading text.
- Cobalt on filled backgrounds in body copy.

Similar systems: Linear, Stripe, Vercel, Notion, Framer.

## Steal this
- Three-voice type stack: UI sans, display cut of the same sans, and a serif reserved only for testimonials.
- Cool, navy-tinted low-opacity shadows (rgba(28,40,64,…)) for crisp, non-muddy elevation.
- Inter 500 + ss03 as the default UI weight for a more confident product feel.
- Graphite (not accent) filled primary button; accent reserved for links, focus and small send buttons.
