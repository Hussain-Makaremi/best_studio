---
name: Relate
source: https://styles.refero.design/style/337ade6a-4bae-49ba-b4aa-8994ac805a81
category: clean-saas
tags: [light, cool-white, single-accent, royal-blue, pill-buttons, compact, glassmorphism]
best_for: CRM / pipeline SaaS showcasing Kanban-style product UI in a compact, cool layout
---
# Relate
> Cool dawn over product canvas — cool-white surfaces, near-black violet-cast ink, one royal blue; product UI floats in soft rounded cards on pale lavender; no hard corners anywhere.

## Color tokens
| token | hex | role |
|---|---|---|
| Royal Signal | #145aff | Sole saturated accent: headlines, links, hero highlights, pipeline-active dots, logo |
| Cobalt Glow | #3b82f6 | Highlight washes, decorative bands; blue status dot |
| Mint Win | #16ca2e | Green text accent; "won" status dot |
| Coral Lost | #f26052 | Red text accent; "lost" status dot |
| Amber Pending | #ffa64d | Orange text accent; pending status dot |
| Azure Focus | #0099ff | Input focus ring glow |
| Midnight Ink | #020520 | Hero/section headings (violet cast) |
| Graphite Body | #14141e | Body text, secondary headings, product UI labels |
| Slate Caption | #374151 | Muted body, nav labels, list items |
| Ash Helper | #6b7280 | Helper text, metadata, timestamps |
| Stone Divider | #e2e8f0 | Hairline borders, card edges |
| Lavender Wash | #f0f4fe | Accent surface behind hero/feature blocks |
| Fog Surface | #f1f5f9 | Input backgrounds, disabled, grouping |
| Snow Canvas | #fcfcfc | Page background, cards, nav |

Surfaces: 0 Canvas #fcfcfc → 1 Wash #f0f4fe → 2 Card #ffffff → 3 Frosted #fcfcfc (backdrop-blur).

## Typography
- **Inter** (primary) — 400/500/600; 10–80px (11 values); line-height 1.05–1.50; tracking -0.037 to 0.013em; display 56–80px at -0.027 to -0.037em. Fallback: DM Sans, Geist, Manrope.
- **Pretendard** (secondary) — 400; 12–18px; line-height 1.17–1.71; tracking 0.019–0.030em; Korean rendering, UI labels.
- **Roboto Mono** — 500/700; 12px, 22px; line-height 1.00–1.27; tracking -0.045 to -0.030em; numeric callouts, technical labels. Fallback: JetBrains Mono, Geist Mono.
- **Font Awesome 6** (Pro Light/Solid/Regular, Brands) for icons.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.2 | — |
| body-sm | 14px | 400 | 1.43 | 0 |
| body | 16px | 400 | 1.63 | — |
| subheading | 20px | 600 | 1.4 | -0.16px |
| heading-sm | 22px | 600 | 1.4 | -0.2px |
| heading | 40px | 600 | 1.05 | -1.48px |
| heading-lg | 56px | 600 | 1.05 | -1.51px |
| display | 80px | 600 | 1.05 | -1.52px |

## Spacing, radius, elevation
- Density compact. Scale: 4, 6, 8, 9, 10, 11, 12, 16, 20, 24, 28, 32, 36, 40, 52, 72px.
- Radius: cards 8px, inputs 12px, pipeline cards 16px, containers 16–40px, pills 100px, buttons 9999px.
- Shadows:
  - sm: rgba(0,0,0,0.1) 0px 0px 4px -2px (pipeline/deal cards)
  - sm-2: rgba(0,0,0,0.25) 0px 0px 4px -2px
  - xl: rgba(20,90,255,0.1) 0px 0px 100px -28px (blue glow)
  - sm-3: rgba(20,90,255,0.3) 0px 0px 4px -2px
  - xl-2: rgba(20,90,255,0.1) 0px 0px 50px -28px, rgba(0,0,0,0.18) 0px 0px 3px -1px
  - Feature section card stack: rgba(0,0,0,0.08) 0px 0.36px 1.8px -1.4px, rgba(0,0,0,0.07) 0px 1.37px 6.87px -2.8px, rgba(0,0,0,0.016) 0px 6px 30px -4.25px

## Layout
- Max-width 1200px; section gap 80px; card padding 12px; element gap 8–12px.
- Two-tier rounding: 8px inner cards, 16–40px outer containers.
- Imagery: floating product UI (Kanban pipeline, prospect lists, contact details); monochrome logo grids; no illustrations/3D/photography.

## Components
- **Ghost Outline Button:** #fcfcfc bg, #145aff (or #020520) text, 1px #145aff border, 50px radius, 14px 32px padding (secondary: "Book a demo", nav CTAs).
- **Filled CTAs:** white surface with #145aff text, pill radius — ghost-outline or frosted, never heavy filled blocks.
- **Pipeline Column Card:** #ffffff, 16px radius, sm shadow, 12px padding; header: 4px colored dot + count + deal value in #145aff.
- **Deal Card:** #ffffff, 8px radius, 12px 16px, sm shadow; avatar+name, value, activity note, assignee, timestamp.
- **Prospect List Card:** #ffffff, 16px radius, 12px; rows: logo, name, contact, timestamp, detail panel.
- **Logo Mark Badge:** 32–40px rounded square, #145aff, white lowercase "r".
- **Nav Link:** Inter 15px/500, #14141e (captured as "#14141"), 16px gap; hover/active #145aff.
- **Hero Gradient Banner:** linear rgba(20,90,255,0.1) → rgba(182,203,253,0.4); 40–48px bottom-edge radius; behind hero headline/CTA.
- **Feature Section Card:** #fcfcfc, 40px radius, 52px 72px padding, multi-layer stack above.
- **Glassmorphic Container:** rgba(252,252,252,0.2), 28–48px radius, 12–20px padding, backdrop blur(15px).
- **Status Dot:** 4–6px; #3b82f6 / #ffa64d / #16ca2e / #f26052.
- **Customer Logo Strip:** white canvas, monochrome logos ~60% opacity, 40–60px gaps, 2 rows × 4.
- **Input Field:** rgba(255,255,255,0.08) (dark) or #ffffff (light); 1px #ffffff or #e2e8f0; 12px radius; 15px padding; focus glow ring #0099ff.

## Motion
Restrained, functional. Ease timing on all transitions (no spring/bounce). Feedback via color shifts (gray → blue), opacity on hover, subtle shadow increase on cards. No scroll-triggered animation, parallax, or entrance choreography.

## Rules (do / don't)
Do:
- #145aff as sole saturated accent.
- Body 14–16px Inter 400, #14141e or #374151 on #fcfcfc (min 17.8:1 contrast).
- Pill radius on buttons, tags, nav — no 90° corners on interactive elements.
- Multi-layer soft shadow on feature section cards.
- Status dots 4–6px in the four state colors.
- Display 56–80px Inter 600, -0.027 to -0.037em.
- Two-tier rounding (8px inner / 16–40px outer).

Don't:
- #0000ee / default link blue.
- Heavy solid-filled CTA blocks.
- Gradients with more than two stops.
- 0px corners anywhere.
- Body below 14px or lighter than #6b7280.
- Multiple saturated accents in one component.
- Inter above 600 or below 400.

## Steal this
- Tiny (4–6px) colored status dots as the only multi-color moment in an otherwise single-accent UI.
- Accent-tinted glow shadow (rgba(20,90,255,0.1) 0 0 100px -28px) for a "dawn" halo around hero UI.
- Two-tier rounding: tight 8px product cards nested in huge 40px section containers.
- Ghost/frosted pill CTAs instead of heavy filled buttons.
