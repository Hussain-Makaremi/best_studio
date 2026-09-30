---
name: Micro
source: https://styles.refero.design/style/cc43cfe3-195b-4081-b586-c42db054a466
category: productivity
tags: [light, warm-off-white, pastel-washes, blue-teal-gradient-hero, serif-display, marker-colors, compact]
best_for: AI-assisted notes / email / workspace app with a sunrise-gradient hero, ink-on-paper product UI, and pastel feature blocks
---
# Micro
> "Sunrise over a digital meadow — a calm horizon gradient holding a quiet, ink-on-paper workspace beneath it." Blue-to-teal gradient only on the hero, #f5f5f5 canvas, perfectlyNineties display, haffer UI, categorical marker colors on icons.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink Black | #221f1c | Primary text, dark CTA backgrounds, dark icon fills |
| Paper White | #f5f5f5 | Page canvas, card backgrounds, subtle surface fills |
| Pure White | #ffffff | Elevated product card surfaces |
| Stone Gray | #797267 | Secondary text, icon strokes, muted body copy |
| Pebble | #8c8a88 | Tertiary text, disabled states, low-emphasis icons |
| Slate Edge | #27272a | Hairline borders on cards and inputs |
| Azure Action | linear-gradient(to right in oklab, rgb(81,139,219) 0%, rgb(54,186,184) 100%) | Primary action, hero gradient |
| Teal Pulse | #36bab8 | Teal text accent for links, tags, emphasized phrases; category icon color |
| Mint Wash | #cbfbf1 | Soft pastel surface tint for feature cards |
| Peach Wash | #f8ebd8 | Soft pastel surface tint, warm counterpart |
| Lavender Wash | #ede9fe | Soft pastel surface tint for alternate blocks |
| Teal Mist | #cff2ef | Subtle teal-tinted surface |
| Coral Marker | #ed6d68 | Red text accent for links, tags, phrases; category icon color |
| Amber Marker | #e5a057 | Warm icon accent, category color |
| Orchid Marker | #bf89cd | Purple-toned icon accent, category color |
| Forest Edge | #1a3a12 | Dark green border for mockup edges |
| Signal Green | #3a6b2a | Green wash for highlight backgrounds |
| Live Lime | #7efa55 | Green wash for highlight backgrounds |

Surfaces: 0 Canvas #f5f5f5 (warm off-white base) → 1 Card #ffffff (product UI cards, elevated panels) → 2 Pastel Wash #cbfbf1 (soft tinted highlights) → 3 Gradient Sky #518bdb (hero-only gradient background).

## Typography
- **perfectlyNineties** (display) — weights 400, 700, 800, 900; sizes 14–72px (6 values); line-height 1.00, 1.20, 1.25; tracking 0.0200em. Fallback: "Druk Wide, Climate Crisis, Recoleta, or heavy condensed serif". Display and editorial headlines (hero, section H1/H2).
- **haffer** (primary) — weights 400, 500, 600, 700, 900; sizes 8–96px (11 values); line-height 1–1.63; tracking -0.0250em at display sizes, 0.10em at micro/eyebrow sizes. Fallback: Inter, Söhne, General Sans, or Geist Sans. Body, UI labels, buttons, nav, product chrome, card content.
- **ui-monospace** (code) — weights 400, 500; sizes 8, 14, 16px; line-height 1.43, 1.50, 1.71. Fallback: JetBrains Mono, IBM Plex Mono, or system monospace. Timestamps, email addresses, technical metadata, AI prompt placeholders.

Scale basis: Minor Third (1.2) from 15px.
| role | size | line-height | tracking |
|---|---|---|---|
| eyebrow | 10px | 1.4 | 1px |
| caption | 12px | 1.4 | — |
| body-sm | 14px | 1.5 | — |
| body | 16px | 1.5 | — |
| subheading | 18px | 1.5 | — |
| heading-sm | 24px | 1.4 | -0.6px |
| heading | 30px | 1.25 | 0.6px |
| heading-lg | 48px | 1.2 | 0.96px |
| display | 72px | 1 | 1.44px |
| hero-mark | 96px | 1 | -2.4px |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 52, 64, 80, 96, 128, 192, 240px.
- Max width 1200px; section gap 64px; card padding 16px; element gap 8px.
- Radius: inputs 8px, buttons 8px, nav-pills 8px, small-cards 14px, large-cards 18px, feature-blocks 18px, pills 9999px.
- Shadows:
  - subtle: rgba(0,0,0,0.1) 0 1px 3px 0, rgba(0,0,0,0.1) 0 1px 2px -1px
  - subtle-2: oklab(0.241527 0.00279061 0.00670661 / 0.065) 0 0 0 1px, rgba(0,0,0,0.1) 0 1px 3px 0, rgba(0,0,0,0.1) 0 1px 2px -1px
  - subtle-3: rgba(0,0,0,0.08) 0 1px 2px 0
  - md: rgba(0,0,0,0.1) 0 10px 15px -3px, rgba(0,0,0,0.1) 0 4px 6px -4px
  - subtle-4: rgba(0,0,0,0.2) 0 -2px 0 0 inset
  - md-2: oklab(0 0 0 / 0.065) 0 10px 15px -3px, oklab(0 0 0 / 0.065) 0 4px 6px -4px
  - sm: rgba(0,0,0,0.1) 0 4px 6px -1px, rgba(0,0,0,0.1) 0 2px 4px -2px
  - subtle-5: rgba(0,0,0,0.15) 0 1px 2px 0
  - subtle-6: rgb(212,212,212) 0 1px 0 0, rgb(208,208,208) 0 4px 0 0... (truncated in source)
  - subtle-7: oklab(0.241527 0.00279061 0.00670661 / 0.1) 0 0 0 1px, oklab(0 0 0 / 0.25) 0 25px 50px -12px
  - xl: rgba(0,0,0,0.1) 0 20px 25px -5px, rgba(0,0,0,0.1) 0 8px 10px -6px
  - subtle-8: rgba(0,0,0,0.15) 0 1px 2px 0, rgba(0,0,0,0.04) 0 0 0 3px
  - subtle-9: oklab(0 0 0 / 0.065) 0 1px 3px 0, oklab(0 0 0 / 0.065) 0 1px 2px -1px
  - xl-2: oklab(0 0 0 / 0.15) 0 25px 50px -12px

## Layout
- Page max-width ~1200px centered.
- Hero: full-bleed gradient sky; eyebrow pill, headline, subhead, buttons centered; mockup overlaps the transition.
- Sections: centered H1, supporting copy, content in 2-column or 3–4 column grids.
- Navigation: top bar with left-aligned wordmark, centered nav pills, right-aligned auth buttons.
- Product UI: fixed left sidebar (~200px), top utility bar, main content area.

## Components
- **Dark Filled Button:** #221f1c bg, #ffffff text, 8px radius, 10px/16px padding, haffer 500 14px; optional inset shadow for pressed state.
- **White Filled Button:** #ffffff bg, #221f1c text, 8px radius, 10px/16px padding, haffer 500 14px.
- **Ghost Text Button:** transparent, #221f1c text, 8px radius, 8px/12px padding, haffer 500 14px.
- **Pill Nav Tab:** transparent, #221f1c haffer 500 14px, 6px/12px padding, 8px radius; active #f5f5f5 fill.
- **Product Card (App UI):** #ffffff, 1px solid rgba(0,0,0,0.065), 14px radius, 12px/16px padding, haffer 400 14px.
- **Context Graph Node:** #ffffff, 18px radius, 16px padding, haffer 500–700 12–14px, 2–3px accent border in marker colors.
- **Soft Pastel Feature Block:** pastel wash (#cbfbf1, #f8ebd8, #ede9fe, #cff2ef), 18px radius, 32px padding, no border/shadow.
- **Search / Prompt Input:** #ffffff, 1px solid #27272a at low opacity, 8px radius, 10px/14px padding, haffer 400 14px.
- **Sidebar Nav Item:** transparent, 20px row height, 12px padding, 8px radius, haffer 400 14px; active #f5f5f5 fill, haffer 500.
- **Badge / Tag:** transparent or #f5f5f5, #221f1c text, 9999px radius, 4px/10px padding, haffer 500 12px.
- **Logo Strip:** single centered row, 5–6 monochrome logos in #221f1c, 48–64px gap, no background card.
- **Floating Audio Player:** #ffffff, 14px radius, shadow md, 8px/12px padding, 280–320px wide.
- **Hero Product Mockup Container:** no visible card chrome, 18px radius, 1px #1a3a12 border, shadow md.
- **Section Eyebrow Pill:** #ffffff at 0.9 opacity, 9999px radius, 4px/12px padding, haffer 500 12px.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Blue→teal gradient only on the hero; it is the single saturated viewport.
- Hero and section display headlines in perfectlyNineties at 30–72px with 0.02em tracking.
- Body and product UI in haffer, not the display face.
- 8px radius for buttons/inputs/nav; 14px for product rows; 18px for feature blocks.
- Product surfaces #ffffff with a 1px border and subtle two-layer shadow.
- Pastel washes for marketing feature blocks.
- Color icons categorically with Teal Pulse, Coral Marker, Amber Marker, Orchid Marker.

Don't:
- Don't apply the gradient sky to anything other than the top of the page.
- No perfectlyNineties for body text, buttons, nav, or product UI.
- Don't skip the 1px border on product cards.
- No 4px radius on feature cards.
- No new chromatic accents beyond the named marker palette.
- Don't center body copy in product UI.
- No pure black #000000 for text; use #221f1c Ink Black.

## Steal this
- Single saturated blue→teal gradient hero over an otherwise #f5f5f5 / white ink-on-paper UI.
- Four categorical marker colors (teal, coral, amber, orchid) for icons and text accents.
- Pastel wash feature blocks (mint / peach / lavender / teal mist) at 18px radius with no border.
- Graph-node cards with 2–3px accent borders in marker colors.
