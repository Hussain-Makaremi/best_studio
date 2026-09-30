---
name: Shop
source: https://styles.refero.design/style/4fa67bd1-f01d-454a-b522-4a0359ff9815
category: ecommerce
tags: [light, single-accent, violet, soft-shadows, pill-controls, rounded-cards]
best_for: Image-first product discovery / marketplace feeds with soft, pillowy card UI
---
# Shop
> Floating shopping constellation on white marble — large heavily-rounded product cards, compact tight-tracked GT Standard, one saturated violet reserved for search submit and wordmark.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Shop Violet | #5433eb | Search submit, wordmark dot, sole saturated accent |
| Violet Wash | #c0b5f3 | Translucent halo behind violet button |
| Ink Black | #000000 | Primary text, headings, icons |
| Slate Ink | #332f2d | Dark card surfaces, overlay text |
| Ash Veil | #665a54 | Warm desaturated gray for imagery backdrops |
| Muted Gray | #787574 | Secondary text, nav labels, idle icon strokes |
| Cool Stone | #cccccc | Placeholder fills, disabled states |
| Warm Fog | #acb0aa | Secondary card tints, section backgrounds |
| Faint Border | #ebebeb | Hairline dividers, input outlines |
| Canvas Mist | #f2f4f5 | Page background, secondary surface wash |
| Pure White | #ffffff | Primary surfaces: cards, inputs, buttons |

Surfaces: L0 Canvas #f2f4f5 (page) · L1 Surface #ffffff (cards, inputs, sidebar, search) · L2 Elevated Card #ffffff (lifted by dual shadow) · L3 Accent Product #000000 (dark imagery with white overlay text)

## Typography
**GT Standard** (primary; fallback Inter, system-ui, -apple-system)
- Weight 400 — hierarchy via grade/tracking, never bold
- Sizes: 9, 11, 12, 14, 16, 20px
- Line height 1.10–1.38
- Letter spacing: −0.058em (9px) → −0.031em (16px) → −0.05em (20px)
- "GTStandard-MRegular at 16px/-0.031em is the workhorse for body, buttons, and labels"

**Shopify Sans** (secondary; fallback Inter)
- Weights 400, 700; sizes 10px, 14px; line height 1.20–1.71; letter spacing −0.023em
- Role: system-level messaging (app banners, cookie consent)

_Full role-based scale table not captured._

## Spacing, radius, elevation
- Spacing scale: 4, 6, 8, 10, 11, 12, 16, 20, 24, 32, 38, 40, 48, 64px
- Radius: cards 28px; pills / inputs / buttons / search / chips 9999px; product imagery edges 0px

| Shadow | Value |
|---|---|
| sm | rgba(0,0,0,0.06) 0px 2px 8px 0px |
| sm-2 | rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px |
| lg | rgba(0,0,0,0.12) 0px 4px 24px 0px |
| lg-2 (violet-tinted) | rgba(69,36,219,0.34) 0px 4px 24px 0px |

## Layout
- Max-width 1200px
- Section gap 64–80px; element gap 12px
- Card padding 0px (images bleed to edge); density compact

## Components
- **Search Input with Violet Submit** — 9999px pill, white fill, 1px ink-black border at 0.1 opacity; padding 4px vertical, 20px left, 48px reserved right; 48px circular violet button with white arrow, shadow lg-2.
- **Hero / Brand Spotlight Card** — 28px radius, white, dual-layer soft shadow (sm-2); 1:1 product image with 20px inner radius bleeding to card edge; 14px semibold brand name, 9px caption rating below; zero internal padding.
- **Category Pill** — 9999px radius, white, 1px faint border, shadow sm; left 16px circular category icon (native color); right 16px regular label in ink black; padding 6px vertical/left, 16px right.
- **Category Section Header** — 20px GT Standard Semibold, −1.0px tracking, ink black; right-chevron 16px; 24px bottom margin before grid.
- **Sidebar Nav Rail** — 64px wide, white, no border; 24px centered ink icons in 48px tap targets; active: 20px-radius #f2f4f5 fill; 32px avatar at bottom with 1px #ebebeb ring.
- **App Download Banner** — full-width #000000 band, 48px tall, 1px radius; white centered text: 24px rounded app icon, 14px Shopify Sans label, 10px subtext.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 28px radius for cards, 9999px for all pills/inputs/chips
- Violet #5433eb only on search submit + wordmark dot
- Body text min 16px GT Standard Regular with −0.5px tracking; 12px floor for secondary labels
- Pair every elevated card with dual-layer soft shadow (sm-2); never a single hard shadow
- Separate layers via shadow alone on white; skip borders on cards
- 64–80px vertical spacing between major sections
- Tint search button shadow violet (rgba(69,36,219,0.34))

**Don't**
- No second saturated accent — monochrome + one violet
- No sharp corners on cards/buttons/inputs (0px only for image edges)
- No bold (700+) weights — hierarchy via grade and tracking
- No visible borders on elevated cards
- No colored backgrounds for UI containers
- Don't break the 9999px pill convention for inline controls
- No body text below 12px (9px only for review counts/metadata)
- No gradients, illustrations, or decorative shapes

**Similar references:** Instagram Shopping, Pinterest, SSENSE, Apple Shop, Faire.

## Steal this
- Accent-tinted shadow on the single primary control (rgba(69,36,219,0.34)) to make it glow without adding color elsewhere.
- Zero-padding cards where the image bleeds to a 28px-radius edge — the photo *is* the card.
- Hierarchy without bold: one weight, varied size and negative tracking.
- Category pills with a small native-color icon on white as the only color in chrome.
