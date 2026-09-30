---
name: Dub
source: https://styles.refero.design/style/b0d80806-b724-4ed1-a1d1-074edd3c9bc9
category: clean-saas
tags: [light, monochrome, single-accent, borders-over-shadows, compact]
best_for: Developer / link-management dashboards and SaaS marketing that should feel like a printed document
---
# Dub
> Frosted link dashboard on rice — near-white canvas held together by 1px #e5e5e5 hairlines, dense monochrome type, one electric blue accent.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Blue | #2563eb | Primary brand, links, active states |
| Deep Sapphire | #1e40af | Single primary action per surface |
| Soft Mint | #dcfce7 | Tag/divider accents; "complete" status badge bg |
| Vivid Green | #16a34a | Text accent |
| Tangerine | #ea580c | Orange accent |
| Lavender | #7c3aed | Violet accent |
| Conic Spectrum | (gradient) | Decorative only — never on UI; reserved for logo |
| Primary Action Fill | #000000 | Primary action fill |
| Midnight Ink | #0a0a0a | Dark CTA / text |
| Charcoal | #171717 | Default body text |
| Graphite | #262626 | Neutral |
| Slate | #404040 | Neutral |
| Steel | #525252 | Neutral |
| Fog | #737373 | Neutral |
| Silver | #a3a3a3 | Neutral |
| Pebble | #c8c8c8 | Neutral |
| Smoke | #d4d4d4 | Neutral |
| Ash | #e5e5e5 | Structural hairline border (1942 deployments) |
| Paper Mist | #f5f5f5 | Alt-surface |
| Canvas White | #ffffff | Base |
| (sidebar active) | #dbeaff | Active sidebar item bg / soft tint |
| (muted card) | #fafafa | Muted alt card bg |
| (input text) | #111827 | Input text |

Surfaces: 0 Canvas #ffffff → 1 Paper #f5f5f5 (alt-section, nested panels) → 2 Card #ffffff → 3 Tinted Accent #dcfce7 (feature highlights, badges).

## Typography
- **Satoshi** — display only, 36–48px, weight 500 (geometric editorial headlines).
- **Inter** — workhorse, 8–30px, weights 400/500/600 (body, UI labels, nav).
- **Geist Mono** — 12–24px, weights 400/500 (code, technical metadata).

| role | size | weight | line-height |
|---|---|---|---|
| Display | 48px | 500 | 1.0 |
| Heading-lg | 36px | 500 | 1.11 |
| Heading | 30px | 400 | 1.38 |
| Heading-sm | 24px | 400 | 1.33 |
| Subheading | 20px | 500 | 1.4 |
| Body-xl | 18px | 400 | 1.56 |
| Body-lg | 16px | 400 | 1.5 (canonical, 1220 occurrences) |
| Body | 14px | 400 | 1.43 |
| Caption | 11px | 400 | 1.5 |

Rules: Satoshi 500 only at 36–48px; Inter for 30px and below. 16px/1.5 body; 14px for dense data; 11–12px for labels.

## Spacing, radius, elevation
- Base 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 112px.
- Radius vocabulary (only these): tags/badges 9999px (367 deployments), large cards 16px, cards 12px, buttons 8px, inputs 6px.
- Shadows:
  - Subtle (primary buttons): rgba(0,0,0,0.05) 0px 1px 2px 0px
  - Small: rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px
  - Inset sm: rgba(0,0,0,0.2) 0px 2px 6px 0px inset
  - Subtle-2 (ring): rgba(0,0,0,0.1) 0px 0px 0px 4px
  - Medium: rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px
  - Large: rgba(0,0,0,0.09) 0px 20px 20px 0px
  - Subtle-3 (focus ring): white 0px 0px 0px 3px, black 0px 0px 0px 4px

## Layout
- Max-width 1200px; section gap 64px; card padding 16px; element gap 8px; density compact.
- Philosophy: "borders over shadows" — the 1px #e5e5e5 edge is the primary container mechanism, giving a printed-document feel; shadows rationed to genuine emphasis.

## Components
- **Ghost Nav Button:** transparent, #171717 text, 9999px radius, no border, 16px horizontal padding.
- **Outlined Nav Button:** white bg, #171717 text, 1px #e5e5e5 border, 8px radius, 16px padding.
- **Filled Dark CTA:** #0a0a0a or #171717 bg, white text, 8px radius, 16px padding — primary action.
- **Outlined Action Button:** white bg, #171717 text, 1px #e5e5e5 border, 8px radius, 12px/16px padding.
- **Pill Feature Tag:** transparent/white bg, colored icon (orange/violet/green), #171717 label, 9999px radius, 12px/16px padding.
- **Pill Badge:** transparent/white bg, #0a0a0a text, 9999px radius, minimal padding.
- **Dashboard Card:** #ffffff, 1px #e5e5e5 border, 12px radius, 8px internal padding, no shadow.
- **Elevated Feature Card:** white, 16px radius, 16px padding, rgba(0,0,0,0.1) 0 0 0 4px ring.
- **Muted Alt Card:** #fafafa, 16px radius, 16px padding, no border.
- **Dashboard Table Row:** transparent/white, 1px #e5e5e5 bottom border, 16px height, 14–16px text.
- **Status Badge:** tinted bg (#dcfce7 complete; light yellow/orange pending), dot icon, dark text, 9999px radius, 6px/10px padding.
- **Sidebar Nav Item:** transparent or #dbeaff active bg, 8px radius, #171717 text, 12px/8px padding.
- **Input Field:** white bg, #111827 text, 1px #000000 border (signature black), 6px radius, 8px/12px padding.
- **Logo Cloud:** transparent, grayscale wordmarks (#262626–#737373), centered, no border.
- **Product Mockup:** white, 16px top-left/top-right radius (asymmetric), rgba(0,0,0,0.1) 0 0 0 4px outer ring.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 1px #e5e5e5 for all container borders.
- Reserve #1e40af for one primary action per surface — never decorative.
- Apply 9999 tags, 8 buttons, 12 cards, 16 large cards.
- Soft tints (#dcfce7, #dbeaff, light yellow) only on small badge backgrounds.
- Product mockups and desaturated logos; no stock photography.

Don't:
- No heavy drop shadows for elevation — rely on borders.
- No pure #000000 body text — use #171717 / #0a0a0a.
- No #2563eb on large background fills.
- No multiple chromatic colors per component.
- No Satoshi below 36px; no radii outside 9999/16/12/8/6.
- No decorative gradients on UI (conic spectrum is logo-only).

## Steal this
- Borders-over-shadows: one hairline color (#e5e5e5) as the entire container system.
- 4px translucent "ring" shadow (0 0 0 4px rgba(0,0,0,.1)) instead of drop shadows for elevated cards/mockups.
- Strict 5-value radius vocabulary, each tied to a component type.
- Black 1px input border as a deliberate emphasis signature in an otherwise grey UI.
