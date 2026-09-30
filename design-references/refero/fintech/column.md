---
name: Column
source: https://styles.refero.design/style/a76ec6ba-20b3-495c-9d89-1e58281e79e7
category: fintech
tags: [light, deep-navy, sans-only, seafoam-data-color, 8px-radius, developer-banking]
best_for: Banking-infrastructure / API fintech that wants a calm, technical, code-forward marketing site
---
# Column
> "deep navy ledger under cool dawn" — Indigo Navy CTAs on a cool near-white canvas, seafoam for code/data, 8px radii everywhere, five-layer floating product cards.

## Color tokens
| token | hex | role |
|---|---|---|
| Indigo Navy | #111a4a | Primary brand: filled CTAs, nav active states, heading text, logo wordmark |
| Seafoam 600 | #44b48b | Code and data text: JSON keys, identifiers, financial values |
| Seafoam 700 | #167e6c | Strokes, chart lines, data icon accents; stat numbers; code keys |
| Seafoam 400 | #94efb7 | Highlighted code text: string values, URLs, API endpoints |
| Deep Sea | #023247 | Decorative stroke / chart accent in SVG illustrations |
| Signal Orange | #ec652b | Accent CTA fill and featured card background |
| Peach Glow | #f2936b | Soft accent surface, lighter companion to Signal Orange |
| Sky Cyan | #88deeb | Soft accent surface/stroke; background washes behind data widgets |
| Cobalt Edge | #1e4199 | Violet wash for highlight backgrounds, decorative bands |
| Ocean Depth | #0c6997 | Decorative fill in illustration/SVG |
| Pure Black | #000000 | Maximum-contrast text, dark fills in illustrations |
| Midnight Ink | #011821 | Dark surface and emphasis text; product card backgrounds |
| Obsidian | #12161e | Deep icon strokes and nav elements |
| Charcoal | #232730 | Nav icons, dark icon strokes |
| Slate Ink | #3b3e47 | Secondary heading/body text where pure black is too harsh |
| Steel | #7c7f88 | Body and link text; dominant muted text color |
| Fog | #a9acb6 | Icon strokes, tertiary borders, placeholder text |
| Mist | #cbcccf | Lightest body text: captions, disclaimers, fine print |
| Silver Lining | #e3e4e8 | Card borders, input borders, dividers (structural hairline) |
| Cloud Canvas | #f6f6f8 | Page background, near-white with a cool tint |
| Pure White | #ffffff | Card surfaces, nav background, button fills |

Surfaces (stacking): 0 Page Canvas #f6f6f8 → 1 Card Surface #ffffff → 2 Frosted Overlay #ffffff80 (translucent nav pills, badges) → 3 Sky Wash #88deeb (decorative wash behind data) → 4 Signal Orange Surface #f2936b (featured accent card, at most once per page) → 5 Deep Surface #011821 (dark mode inversion).

Gradient (imagery): dotted halftone world map in indigo-to-orange-to-seafoam spectrum (#d65620 orange → violet → blue → sky cyan → seafoam → yellow).

## Typography
- **SuisseIntl** (primary) — weights 300, 400, 500, 600; sizes 11–60px (12 steps); line-height 1–1.5; tracking -0.03em @52px, -0.02em @40–48px, -0.01em @20–28px, normal @14–16px. Fallback: Inter. Used for all headings, body, buttons, nav, links, card text.
- **SuisseIntlMono** — weight 400; sizes 10, 12, 14; line-height 1.5. Fallback: JetBrains Mono. Technical labels, API identifiers, inline data in UI chrome.
- **SFMono** — weight 400; sizes 10, 12; line-height 1.5. Fallback: Fira Code. Code snippets (JSON examples, API docs).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 60px | 600 | 1 | -0.6px |
| heading-lg | 52px | 600 | 1.1 | -1.56px |
| heading | 48px | 500 | 1.1 | -0.96px |
| heading-sm | 40px | 500 | 1.1 | -0.8px |
| subheading-lg | 28px | 500 | 1.1 | -0.28px |
| subheading-sm | 20px | 500 | 1.1 | -0.2px |
| body-lg | 18px | 400 | 1.33 | 0 |
| body | 16px | 400 | 1.5 | 0 |
| caption | 12px | 400 | 1.5 | 0 |
| micro | 10px | 400 | 1.5 | 0 |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72, 80, 96, 100, 144px.
- Radius: cards 8px, inputs 8px, buttons 8px, nav-pills 8px, tags 9999px.
- Shadows:
  - subtle: rgba(17,26,74,0.1) 0 1px 3px 0, rgba(17,26,74,0.05) 0 1px 0 0, rgba(255,255,255,0.5) 0 1px 0 0 inset, rgba(255,255,255,0.5) 0 1px 4px 0 inset
  - subtle-2: rgba(87,90,100,0.12) 0 0 0 1px
  - subtle-3: rgba(0,0,0,0.05) 0 0 0 1px inset
  - xl (five-layer product card): rgba(0,0,0,0.02) 0 40px 32px 0, rgba(0,0,0,0.03) 0 22px 18px 0, rgba(0,0,0,0.03) 0 12px 10px 0, rgba(0,0,0,0.04) 0 7px 5px 0, rgba(0,0,0,0.07) 0 3px 2px 0
  - subtle-4: rgba(0,0,0,0.1) 0 1px 2px 0, rgb(255,255,255) 0 0 0 1px inset
  - subtle-5: rgba(0,0,0,0.1) 0 1px 2px 0
  - subtle-6: rgb(17,26,74) 0 0 0 1px, rgba(0,0,0,0.25) 0 2px 4px 0, rgba(0,0,0,0.25) 0 1px 2px 0
  - xl-2 (transaction widget): rgba(30,30,44,0.15) 24px 48px 64px 0, rgb(255,255,255) 0 0 0 1px inset
  - sm: rgba(18,22,30,0.024) 0 1px 4px 0, rgba(18,22,30,0.05) 0 1px 0 0, rgba(18,22,30,0.024) 0 0 0 1px
  - lg: rgb(255,255,255) 0 0 20px 0 inset, rgba(0,0,0,0.1) 0 1px 2px 0, rgba(255,255,255,0.5) 0 0 0 1px inset
  - subtle-7, subtle-8, subtle-9, md, sm-2: defined in source, values not captured

## Layout
- Max-width 1200px centered; side margins 64–80px desktop; section gap 72px; card padding 24px; element gap 8px.
- Hero: split layout — headline/CTAs left (40% width), floating transaction widget right (55–70% width) over halftone map.
- Sections alternate white / Cloud Canvas, 72px vertical gaps.
- 6-column grid: text blocks 4 columns (66%), product cards 5–6 columns with off-grid positioning.
- Feature sections 2-column text-left / product-right. Trust stats: full-width 4-column equal grid. Logos: single centered row, 48px gaps. Footer: 2-column compact.
- Nav: fixed top bar 62px tall, transparent over hero with backdrop blur, transitions to white on scroll.

## Components
- **Primary Filled Button:** #111a4a bg, white text, 14px SuisseIntl 500, no border, 8px radius, 12px/20px padding, arrow icon after label, shadow rgba(17,26,74,0.1) 0 1px 3px + rgba(17,26,74,0.05) 0 1px 0 inset white highlight.
- **Secondary Outlined Button:** transparent, #111a4a text 14px/500, 1px solid #111a4a, 8px radius, 12px/32px padding.
- **Ghost Navigation Pill:** rgba(255,255,255,0.25) + backdrop blur, black 14px/400, 1px solid white, 8px radius, 6px/12px padding, chevron for dropdowns.
- **Pill Button:** rgba(255,255,255,0.5) bg, Charcoal #232730 text 12–14px/400, 1px solid #e3e4e8, 8px radius, 0/16px padding.
- **Accent Orange Button:** #ec652b bg, white 14px/500, no border, 8px radius, 12px/20px padding.
- **Product Card (Elevated):** rgba(2,50,71,0.01) bg, 8px radius, five-layer xl shadow, no padding/border.
- **Transaction Widget Card:** white, 8px radius, shadow rgba(30,30,44,0.15) 24px 48px 64px with inset white border, 12px vertical padding; flag icons, amount text 16–18px/500, status badges.
- **Bordered Content Card:** white, 8px radius, sm shadow, 12px padding.
- **Code Block:** white, 8px radius, SFMono 12px/1.5; keys #167e6c, string values #94efb7, brackets #232730.
- **FDIC Badge:** rgba(255,255,255,0.8) + blur(8px), black 10–12px/400, 9999px radius, 4px/12px padding.
- **Tag with Dot:** transparent, black or Indigo Navy 12px/500 uppercase, green or blue dot prefix, radius 0.
- **Logo Bar:** white/transparent, 16–20px logos monochrome black or #7c7f88, 48px spacing, no chrome.
- **Account Balance Card:** Signal Orange (primary) or white (secondary), 8px radius, amount 24px/500, chart line white @60%, metadata 12px/400.
- **Stats Row:** four equal columns on #f6f6f8, number 28px/500 #167e6c, label 14px/400 #7c7f88, gap 48px, no dividers.
- Icons: outlined 1.5–2px stroke in #232730 or #a9acb6; filled for active states.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 8px radius on all cards, buttons, inputs, interactive surfaces.
- Pair Indigo Navy primary button with the Secondary Outlined Button.
- Code in SFMono 12px / line-height 1.5, keys tinted #167e6c.
- Five-layer progressive shadow on product cards only.
- Heading tracking -0.03em @52px, -0.02em @40–48px.
- Signal Orange (#ec652b) on at most one surface per page.
- Section gaps 72px, card padding 24px.

Don't:
- No 9999px pill radius on buttons.
- No seafoam #44b48b on body copy outside code/data contexts.
- Don't stack more than two card shadow styles on one page.
- No linear rainbow gradient on UI elements.
- No body text below 14px in SuisseIntl.
- No Cobalt Edge #1e4199 or Ocean Depth #0c6997 on text or buttons.
- No pure black #000000 for body text.

## Steal this
- Seafoam reserved for code and financial values only: a data-specific color that never leaks into prose.
- Five-layer progressive shadow stack on floating product/transaction cards, everything else near-flat.
- Floating transaction widget over a halftone gradient world map instead of a screenshot.
- Highlighted 8px-radius everywhere plus one orange featured surface per page.
- Constant tabular stats row (28px seafoam numbers, steel labels, 48px gap, no dividers).
