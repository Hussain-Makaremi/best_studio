---
name: Apple
source: https://styles.refero.design/style/aecac5da-f397-4ddf-b71f-de1efc434cb8
category: minimal
tags: [light, single-accent, full-bleed, pill-buttons, whisper-subheads, flat]
best_for: Product marketing pages with full-bleed sections, centered heroes, and one blue action color
---
# Apple
> White room with a single blue accent — near-white canvas, generous breathing room, one vivid blue that makes every action deliberate; typography is the voice, product photography the visual language.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Apple Blue | #0071e3 | Filled action buttons, selected states only |
| Link Blue | #0066cc | Outlined action borders, inline links |
| Signal Blue | #2997ff | Decorative borders, image outlines, icon strokes |
| Onyx | #000000 | Heading borders, nav borders, dark backgrounds |
| Carbon | #1d1d1f | Primary text, heading borders, nav rules, card borders |
| Smoke | #333333 | Secondary text, nav fills, button borders |
| Graphite | #474747 | Nav text, nav borders, link borders |
| Ash | #707070 | Footer text, list borders, muted body |
| Mist | #858585 | Body borders, icon strokes, button borders |
| Pebble | #e2e2e5 | Button fills, disabled surfaces |
| Frost | #f5f5f7 | Page canvas, body backgrounds, footer |
| Ice | #f4f8fb | Elevated surface washes, subtle fills |
| (input border) | #d2d2d7 | Form input border (from component spec) |

## Typography
- **SF Pro Display** — 400, 600, 700; 21, 28, 40, 56px
- **SF Pro Text** — 300, 400, 600; 12–44px (8 values)
- Fallback: Inter, system-ui

SF Pro Text scale:
| Role | Size | Line height | Letter spacing |
|---|---|---|---|
| Caption | 12px | 1.33 | -0.264px |
| Body SM | 14px | 1.29 | -0.224px |
| Body | 17px | 1.47 | -0.272px |
| Subheading | 21px | 1.24 | -0.105px |
| Heading SM | 28px | 1.18 | 0.196px |
| Heading | 40px | 1.14 | 0.44px |
| Heading LG | 44px | 1.18 | -0.44px |
| Display | 56px | 1.07 | 0.616px |

SF Pro Display: 21px 400/600 lh 1.19 -0.005em · 28px 400/600 lh 1.10 0.007em · 40px 400/600 lh 1.14 0.011em · 56px 600 lh 1.07 0.011em

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 40, 48, 56px
- Radius: cards 8px; images 8px; inputs 8px; buttons & tags 980px
- Shadow XL: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` — product images only
- Elevation otherwise avoided: hierarchy via surface shifts (#f5f5f7 canvas, #f4f8fb wash, #e2e2e5 fills) and 1px hairlines

## Layout
- Page max-width 1440px; section gap 64px; card padding 24px; element gap 12px
- Full-bleed sections edge-to-edge, text blocks centered internally (~980px); sticky global nav + product sub-nav on scroll
- Hero: centered product name, one-line tagline, two pill buttons, full-bleed render
- 64px+ vertical rhythm alternating #f5f5f7 and color-wash backgrounds; no sidebars, multi-column, or asymmetric layouts
- Imagery: isolated products on white/soft gray; tightly cropped full-bleed lifestyle banners; pastel blue/pink/green washes; 1–2px grayscale line icons; no illustration

## Components
- **Filled Pill Button** — 980px, #0071e3, white text, 17px 400, padding 11px 15px, no border/shadow.
- **Outlined Pill Button** — 980px, 1px #0066cc border, #0066cc text, transparent, 17px 400, padding 11px 15px.
- **Ghost Link** — #0066cc, underline on hover, inherits size.
- **Global Nav Bar** — full width, #1d1d1f or white, 8px vertical padding, 12px 400 links, 1px hairline border.
- **Product Hero Section** — #f5f5f7; headline 56px 600; tagline 26px 300; two centered pills; full-bleed render below.
- **Service Card Grid** — full-bleed photo bg, 8px radius, white overlay text (title 24–28px 600, label 12–14px, pill action).
- **Form Input** — 8px, 1px #d2d2d7/#707070 border, 14–17px text, #f5f5f7 fill, 2px #0071e3 focus ring.
- **Footer** — #f5f5f7/#1d1d1f; multi-column 12px 400 #707070 links; 1px hairline dividers; 12px fine print.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #0071e3 only for filled buttons and selected states
- Pair filled with outlined secondary (never two filled)
- Body 17px, -0.016em — "the negative tracking is what makes Apple type feel precise"
- Product photography full viewport width
- 980px radius for buttons, tags, pills
- Full-bleed #f5f5f7 or product color-wash section backgrounds
- Weight 300 for subheads (whisper voice)

**Don't**
- Never #0071e3 for text, borders, decoration
- No drop shadows on cards, buttons, nav
- No 700 on product-name headlines (600 max)
- No cards/panels inside #f5f5f7 sections
- Don't constrain main content to a narrow column
- No radius other than 8px (cards) or 980px (buttons)
- Never mix the three blues in one interactive element

## Steal this
- Weight-300 tagline under a 600 headline — the "whisper voice" contrast.
- One heavy soft shadow reserved for product imagery only; all UI flat.
- Filled + outlined pill pair as the universal CTA cluster.
- Pastel color-wash section backgrounds per product instead of cards.
