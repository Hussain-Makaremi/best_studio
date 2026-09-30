---
name: Getharvest
source: https://styles.refero.design/style/1eee9aa2-1e23-4675-9f6e-fb98c93969bd
category: productivity
tags: [light, warm-cream, single-orange, serif-display, soft-radii, warm-shadows, floating-cards]
best_for: Time-tracking / small-business productivity SaaS that wants a warm, friendly cream canvas with one vivid orange and floating product cards
---
# Getharvest
> "Golden hour workbench — warm cream canvas, white floating cards, and one vivid orange flame." Cream #fff8f1 page, Harvest Flame CTAs, Monarch serif for the 72px hero only, warm-tinted shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Harvest Flame | #fa5d00 | Primary CTA fill, active nav indicator, brand link color, heading underlines |
| Marigold Glow | #fee3b5 | Soft warm highlight wash on cards, decorative glow tint behind product UI |
| Parchment Shadow | #e3d6c5 | Warm-tinted card shadow color, subtle image shadow |
| Ink Black | #1d1e1c | Primary text, icon strokes, nav borders, card headings |
| Paper White | #ffffff | Card surfaces, input fields, elevated panels, button text on orange fill |
| Cream Canvas | #fff8f1 | Page background, hero section base, nav backdrop |
| Mist Gray | #d9d9d9 | Hairline dividers, subtle borders on neutral surfaces |
| Warm Stone | #615f5c | Secondary body text, list items, muted icon strokes |
| Driftwood | #8e8b87 | Tertiary body text, decorative strokes, subtle metadata |
| Ironwood | #4a4a47 | Strong secondary text, emphasized muted labels |
| Ash | #777571 | Helper text, placeholder-adjacent copy, low-priority borders |
| Bone | #c0bbb6 | Input borders, form field outlines at rest |
| Smoke | #a5a19c | Disabled text, decorative borders, very low-priority separators |
| Graphite | #999999 | List borders, tertiary structural lines |

Surfaces: 1 Cream Canvas #fff8f1 (page-level background) → 2 Paper White #ffffff (cards, elevated surfaces) → 3 Orange Brand Surface #fa5d00 (CTA buttons, active states, brand accent surfaces).

## Typography
- **MuotoWeb** (primary) — weights 400, 500, 600, 700; sizes 13–50px (14 values); line-height 1.15–1.50; tracking 0.015em. Fallback: Inter or Sohne. Geometric sans for navigation, buttons, body, subheadings, most headings up to 50px.
- **Monarch** (display) — weight 400; 72px; line-height 1.20. Fallback: GT Super or Tiempos Headline. Hero display serif for the largest emotional headline only.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 13px | 1.35 | 0.2px |
| subheading | 18px | 1.4 | 0.27px |
| heading-sm | 20px | 1.3 | 0.3px |
| heading | 24px | 1.26 | 0.36px |
| heading-lg | 28px | 1.2 | 0.42px |
| display | 48px | 1.15 | 0.72px |
| display-lg | 72px | 1.2 | 0px |

## Spacing, radius, elevation
- Base unit not captured (implied 4px); density comfortable.
- Spacing: 4, 5, 7, 10, 14, 15, 16, 20, 22, 25, 30, 35, 40, 50, 100, 113px.
- Max-width 1200px; section gap 64–80px; card padding 32–40px; element gap 16–24px.
- Radius: tags 999px, cards 20px, images 16px, inputs 16px, buttons 16px.
- Shadows:
  - sm: rgba(0,0,0,0.2) 0 1px 4px 0
  - lg: rgba(250,166,0,0.25) 6px 4px 24px 0

## Layout
- Hero pattern: centered headline + subtitle + email capture form over a flowing warm gradient wash, with two floating product preview cards left and right at slight offsets.
- Section rhythm: consistent vertical 64–80px gaps; sections alternate centered text-only blocks and 2-column text+screenshot layouts.
- Feature Grid (2-column): max 1200px, equal columns, 40px gap, alternating left/right.

## Components
1. **Primary CTA Button:** #fa5d00 fill, #ffffff text, MuotoWeb 16px/600, 12px/24px padding, 16px radius, shadow sm.
2. **Ghost/Text Link:** #fa5d00 text, MuotoWeb 16px/500, no bg/border/padding, underline on hover.
3. **Email Input Field:** #ffffff fill, 1px solid #c0bbb6, 16px radius, 14px/20px padding, #8e8b87 placeholder.
4. **Feature Card:** #fff8f1 or #ffffff fill, 20px radius, 40px/32px padding, optional shadow lg, dark icon 48px, heading MuotoWeb 20–24px/600, body 16px/400, link #fa5d00.
5. **Integration Logo Circle:** 48px circle, #ffffff fill, brand logo (literal colors only).
6. **Navigation Bar:** #fff8f1 bg, 1px border, logo + nav links MuotoWeb 16px/500, right: 'Sign in' ghost link + primary CTA.
7. **Dashboard Preview Card:** #ffffff, 16px radius, soft shadow, contains product screenshots.
8. **Section Heading:** eyebrow MuotoWeb 14px/600 uppercase #fa5d00, title MuotoWeb 34–48px/400–500 #1d1e1c.
9. **Trust Badge Logo Row:** label MuotoWeb 13px/600 uppercase #615f5c, logos #1d1e1c grayscale 60–80% opacity.
10. **Hero Gradient Wash:** soft flowing #fa5d00, #fee3b5, warm peach at 30–50% opacity, organic shape.
11. **Feature Grid (2-column):** see Layout.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #fa5d00 exclusively for primary actions, active states, brand moments.
- Page backgrounds #fff8f1 (cream), not #ffffff.
- Reserve Monarch for 72px hero headlines only; MuotoWeb for headings up to 50px.
- 16px radius on buttons/inputs, 20px on cards.
- 0.015em letter-spacing on all MuotoWeb text.
- Keep shadows warm-tinted (never cool blue/gray).
- Trust logos in grayscale so orange remains the only chromatic focal point.

Don't:
- No #ffffff as page background; cream #fff8f1 is the brand.
- No second accent color; one orange discipline only.
- No Monarch for body text, subheadings, or anything under 48px.
- No sharp 0–4px radii on cards/buttons.
- No cool blue-tinted shadows or borders.
- No saturated colors on large background fills.
- No pure #000000 for text; use #1d1e1c.

## Steal this
- Cream #fff8f1 page as the brand, with white floating dashboard cards.
- Warm amber shadow (rgba(250,166,0,0.25)) instead of neutral gray drop shadows.
- Two floating product preview cards flanking a centered headline + email capture.
- Eyebrow labels in uppercase orange above 34–48px section titles.
