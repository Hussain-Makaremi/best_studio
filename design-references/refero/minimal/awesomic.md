---
name: Awesomic
source: https://styles.refero.design/style/8512e28d-5385-4c20-a336-214568c4370c
category: minimal
tags: [light, zinc-neutral, orange-accent, large-radius, hairline-borders, single-font]
best_for: Marketplace / service SaaS landing pages mixing editorial spacing with dashboard density
---
# Awesomic
> Editorial zinc grid with confetti-orange punctuation — monochrome zinc palette, one vivid orange, 36px cards, hairline borders instead of shadows, bold 56–64px Cosmica headlines.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Obsidian | #09090b | Primary action buttons, hero headlines, dominant text |
| Graphite | #18181b | Body text, nav text, badge text |
| Slate | #27272a | Secondary headings, elevated card surfaces |
| Iron | #3f3f46 | Muted text, button labels, badge text |
| Steel | #52525b | Icon strokes, supporting metadata |
| Fog | #71717a | Helper text, tertiary labels |
| Ash | #a1a1aa | Placeholder, disabled labels, light icon strokes |
| Mist | #d4d4d8 | Subtle borders, secondary card fills, link pill backgrounds |
| Cloud | #ececee | Primary border (1px hairlines on cards, badges, inputs) |
| Paper | #f4f4f5 | Canvas, card surfaces, badge fills |
| Snow | #ffffff | Elevated surfaces, inputs, ghost/neutral button bg |
| Ember | #ff5a00 | Accent badges (YC batch tags, highlight chips) — sole chromatic |
| Magenta Spark | #fe45e2 | Rare decorative card accent |
| (neutral pill / subtle card) | #fafafa | Neutral pill button bg, recessed surface |
| (dark button border) | #2c2e34 | 1.5px primary button border |
| (input text) | #333333 | Email input text |

Surfaces: L0 Canvas #f4f4f5 · L1 Card #ffffff · L2 Subtle Card #fafafa · L3 Dark Surface #18181b · L4 Deep Dark #27272a

## Typography
**Cosmica** (geometric sans; fallback DM Sans) — weights 300–700; 12 steps 10–64px; lh 1.0–1.8; normal tracking; single family for everything.

Scale: Minor Third 1.2 from 16px base
| Role | Size | Weight | Line height |
|---|---|---|---|
| caption | 12px | 400 | 1.64 |
| body | 15px | 400 | 1.45 |
| body-lg | 18px | 400 | 1.45 |
| subheading | 20px | 600 | 1.5 |
| heading-sm | 32px | 700 | 1.5 |
| heading | 40px | 600 | 1.28 |
| heading-lg | 56px | 600 | 1.28 |
| display | 64px | 600 | 1.12 |

## Spacing, radius, elevation
- Base 4px, compact. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 68, 80, 120px
- Radius: badges 12px; inputs 14px; buttons 14px; cards 36px; icons 40px; pills (nav CTAs) 10000px
- Primary dark button: inset `rgba(255,255,255,0.5) 0px 0.5px 0px 0px, rgba(117,123,133,0.4) 0px 9px 14px -5px`; border 1.5px solid #2c2e34; outer `rgba(0,0,0,0.14) 0px 4px 6px 0px`
- Cards: no shadow — 1px solid #ececee only
- Link/pill: inset `0 1px 0 0 rgb(228,228,231)`

## Layout
- Centered 1200px; section gap 80px; card padding 28px; element gap 8px
- Hero: split — left 56–64px headline, right email capture form; horizontal scroll of category image-cards below; alternating light card sections and dark feature blocks; full-bleed nature photography breaks the grid before testimonials. "Editorial-magazine meets marketplace dashboard."
- Imagery: full-bleed landscape/macro nature (moss, organic textures) as dividers; real work imagery in category cards; grayscale logos; raw photography with 48–64px corner radius; 30–40% of viewport.

## Components
- **Primary Action Button (dark filled)** — #09090b, white text, 14px radius, padding 12px 16px, 14px Cosmica 400, 1.5px border with inset highlight.
- **Ghost Action Button (white)** — #ffffff, #3f3f46 text, 1px border, 36px pill radius, 20px padding, 14px.
- **Neutral Pill Button** — #fafafa, #18181b text, 14px, padding 12px 16px, no visible border.
- **Category Card (image top)** — 36px radius, full-width top image, 28px bottom padding, title 20px 600, no shadow.
- **Dark Feature Card** — #27272a or #18181b, white text, 28–36px radius, 24px padding, list items 20px 500 with right-arrow accents.
- **Tag Pill Badge (outlined)** — transparent, 1px solid #ececee, #18181b text, 12px radius, padding 4px 8px, 12–13px 400.
- **Filled Tag Badge** — #3f3f46, #fafafa text, 12px, 4px 8px.
- **Orange Accent Badge** — #ff5a00, white text, 12px, 4px 8px; YC-style credentials only.
- **Email Input Field** — #ffffff, #333333 text, 14px, padding 12px 16px, 1px transparent border.
- **Logo Strip** — grayscale logos #71717a at 60–70% opacity, centered, even spacing.
- **Stats Block** — number 40–56px 600 #09090b; label 14px 400 #52525b on baseline.
- **Navigation Bar** — sticky white, logo left, nav center (14px), login + dark CTA right, no border.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #09090b for all primary buttons
- Cards 36px radius with 1px solid #ececee (no shadows)
- Body 14–15px Cosmica 400 #18181b
- #ff5a00 only for YC-style badges
- Display 56–64px 600, lh 1.12–1.28
- 28px card padding, 80px section rhythm
- 10000px for nav pills, 14px for inline buttons

**Don't**
- No new accents (99% achromatic)
- No drop shadows on cards
- No display headlines below 600
- No #ff5a00 for body, links, large fills
- No radius below 12px
- Cosmica only
- No pure #000000 — use #09090b

## Steal this
- Tactile dark button: 1.5px border + 0.5px white inset highlight + soft drop — feels pressable without color.
- Tailwind zinc ramp (#09090b → #f4f4f5) as a ready-made neutral system.
- Accent reserved for credential badges (social proof), not CTAs.
- Nature photography as full-bleed section breaks in a SaaS page.
