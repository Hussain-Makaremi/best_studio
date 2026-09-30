---
name: Airbnb
source: https://styles.refero.design/style/c2325884-4391-4688-85cd-e143f5107517
category: ecommerce
tags: [light, monochrome, single-accent, photo-first, compact, pill-search]
best_for: Listing/marketplace grids where full-bleed photos lead and UI stays quiet
---
# Airbnb
> Quiet white gallery wall with one coral-red bookmark — full-bleed property imagery against monochrome UI, single saturated accent, custom geometric sans at small confident sizes.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Rausch | #ff385c | Red decorative accent for icons, marks, small details; not primary CTA |
| Rausch 600 | #e00b41 | Hover/active variant of brand accent |
| Hof | #222222 | Primary text, body, headings, icon strokes, inverse backgrounds |
| Foggy | #6a6a6a | Secondary text, muted labels, helper copy, disabled fills |
| Grey 500 | #c1c1c1 | Disabled text, placeholder, muted icon strokes |
| Deco | #dddddd | Muted card backgrounds, skeletons, disabled states |
| Bebe | #ebebeb | Hairline borders, input underlines, dividers |
| Faint | #f7f7f7 | Page canvas, footer surface, hover states |
| White | #ffffff | Card surfaces, inputs, modals, primary surface |

Surfaces: L0 Canvas #f7f7f7 · L1 Card #ffffff · L2 Muted #dddddd (skeletons/disabled) · L3 Inverse #222222 (dark overlays)

## Typography
**Airbnb Cereal VF** (custom geometric sans; fallback Circular, Inter, DM Sans) — weights 400/500/600/700; 9 sizes 11–28px; line height 1.18–1.43; OpenType `salt` enabled.

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| caption | 11px | 400 | 1.18 | 0px |
| body | 14px | 400/500/600 | 1.29–1.43 | 0px |
| ui | 16px | 500 | 1.25 | 0px |
| subheading | 20px | 600 | 1.2 | -0.18px |
| heading-sm | 22px | 500 | 1.18 | -0.44px |
| heading | 28px | 700 | 1.43 | 0px |

## Spacing, radius, elevation
- Base 4px, compact density. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48px
- Radius: cards 12px; inputs 8px; badges, buttons, search bar 9999px

| Shadow | Value |
|---|---|
| Search bar | 0px 0px 0px 1px rgba(0,0,0,0.02), 0px 2px 6px rgba(0,0,0,0.04), 0px 4px 8px rgba(0,0,0,0.10) |
| Elevated overlay (modal, popover) | 0 8px 28px rgba(0,0,0,0.28) |
| Dropdown/menu | 0 6px 20px rgba(0,0,0,0.2) |
| Tooltip | 0 2px 4px rgba(0,0,0,0.18) |

## Layout
- Max-width 1440px; section gap 48px; card padding 12px; element gap 12px

## Components
- **Search Bar Capsule** — white, 9999px, max-width ~880px, centered; three segments (Where, When, Who) with 16px/500 labels and 14px/400 Foggy placeholders; right 48px circular submit in Rausch with white icon; layered shadow stack.
- **Property Listing Card** — 12–14px radius, no border, white; ~1:1 image full width with 12px radius; heart icon top-right 48px circle (white stroke inactive, Rausch fill active); title 14px/500 Hof one line; metadata 14px/400 Foggy; price 14px/400 Hof with amount 14px/600.
- **Guest Favorite Badge** — white pill, 12px/600 Hof, 6px 12px padding, 9999px, top-left on image.
- **Top Navigation Bar** — fixed, 80px; left Rausch logo; center icon+label tabs 16px/500, active 2px Hof underline, inactive Foggy; right "Become a host" 14px/500, globe button, hamburger — all 40px circles on #f7f7f7.
- **Circular Nav Button** — 40px, 9999px, #f7f7f7 bg, Hof icon; hover #ebebeb.
- **Section Title with Arrow** — 22px/500 Hof, -0.02em, right arrow; carousel arrows 32px white circles, subtle shadow, Hof chevron.
- **Ghost Outline Button** — transparent, 1px Hof border, 8px radius, 14px/500 Hof, padding 0 16px; hover #f7f7f7.
- **Filled Inverse Button** — Hof bg, white text, 8px radius, 14px/500, padding 0 16px.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Body 14px/400 Hof, 1.43 line-height
- Rausch only for logo, search submit, active hearts, one primary action per surface
- Listing images 12px radius, full-bleed into card edge, no padding above text
- Section headings 22px/500, -0.02em
- Canvas #f7f7f7, cards #ffffff — elevation via value contrast
- Full-bleed imagery, no decorative borders or margins around photos

**Don't**
- No additional accents beyond Rausch
- No shadows on listing cards
- No body text below 12px
- No inconsistent radius (cards 12px, pill 9999px, ghost buttons 8px only)
- No borders on listing cards
- No Rausch on text or decorative backgrounds
- No 700 for body/metadata; reserved for 28px/21px titles

## Steal this
- Shadow budget spent only on floating layers (search capsule, menus, modals) — listing cards stay flat.
- Segmented pill search with a single accent-colored circular submit.
- Price line: same size, weight bump only on the amount (14/400 → 14/600).
- Canvas one step off-white (#f7f7f7) so white cards read as elevated without shadow.
