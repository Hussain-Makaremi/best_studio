---
name: Hungry Tiger
source: https://styles.refero.design/style/47f15da7-8905-45b3-bcab-06a4277c6168
category: ecommerce
tags: [dark, warm, maximalist, poster-type, single-accent, no-shadows]
best_for: Bold food/condiment DTC brands wanting poster-scale typography on a warm dark canvas
---
# Hungry Tiger
> Turmeric-bright graffiti on a rust-brown canvas — a single searing Tiger Gold accent, absurdly oversized custom display face, pill controls, dotted dividers, botanical watermarks.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Tiger Gold | #faae33 | Primary action, filled buttons, active nav, heading strokes, key accents |
| Ember Rust | #823513 | Dominant page canvas and hero backdrop |
| Saffron Glow | #9f531b | Secondary heading accent, decorative borders, mid-tone text |
| Dark Spice | #402011 | Card surfaces, input fields, badge fills, ghost button backgrounds, body text |
| Charred Clove | #281006 | Deepest surface for modals, inner cards, max-contrast text backing |
| Cardamom Brown | #6b2e12 | Input borders, subtle dividers, muted inline elements |
| Chili Red | #d1255c | Heat-level badges and alert highlights (sparingly) |

## Typography
**Salmond** (universal) — weights 400, 500, 700; 16 sizes from 11–213px; line height 0.70–0.95 for display 65px+, 1.20–1.43 for UI 11–18px; letter spacing inverse-scaled from -0.02em at 213px to 0.02em at 11px. Display at 130–213px / 700 / lh 0.80–0.90. Fallback: Druk Wide, Antonio, Bebas Neue (display); Inter, Untitled Sans (small).

**Graphikx** (functional) — weight 500 only, 13px only, lh 1.00–1.30, tracking -0.02em to 0.01em. Micro-copy, button labels, inline meta. Fallback: Inter, Geist, Untitled Sans.

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| caption | 11px | 500 | 1.2 | 0.02em |
| subheading | 18px | 500 | 1.2 | 0.01em |
| heading-sm | 29px | 700 | 1.1 | -0.005em |
| heading | 65px | 700 | 0.95 | -0.01em |
| heading-lg | 101px | 700 | 0.9 | -0.016em |
| display | 195px | 700 | 0.8 | -0.02em |

## Spacing, radius, elevation
- Spacing: 4, 6, 8, 9, 10, 12, 14, 16, 17, 20, 24, 26, 28, 32, 42, 192px
- Radius: cards 6px; badges 9999px (1080–1296px tokens); inputs 9999px (1224px token); buttons 9999px (1296px token)
- Elevation: none. Depth by stepping three browns: #823513 → #402011 → #281006.

## Layout
- Max width 1440px; section gap 80–120px; card padding 12–16px; element gap 10px; density comfortable
- Crown every viewport with massive type first; product photography small below

## Components
- **Ghost Outline Button** — Salmond 13px 500, #faae33 text, 1px #faae33 border, transparent, 1296px radius, padding 8px 17px. Nav links and secondary actions.
- **Filled Primary Button** — Salmond 13px 500, #281006 text on #faae33, 1px #faae33 border, 1296px radius, padding 10px 20px. The only filled button.
- **Pill Badge** — Salmond 11–12px 500 uppercase, 0.02em, 1080px radius, 4–8px × 12–16px padding. Primary: #faae33 fill / #281006 text; secondary: #402011 fill / #faae33 text.
- **Alert Badge** — #d1255c fill, Salmond 11px 500, 1080px radius, 4px 12px padding. Heat/intensity only.
- **Pill Input** — 1224px radius, transparent, 1px #6b2e12 border, Salmond 13px 500 placeholder, 12–16px × 16–20px padding; focus border → #faae33.
- **Surface Card** — 6px radius, #402011, 12–16px padding, no shadow.
- **Product Bottle Showcase** — raw product photo on transparent canvas, no frame/plate; jar sits on #823513 with warm backlight highlight.
- **Botanical Watermark** — faded fern/leaf/flower illustrations as low-contrast background layers.
- **Dotted Divider** — 1px dotted #faae33, full width, separates major sections.
- **Iconography** — 1.5px thin-stroke line icons in #faae33, 16–20px, in 1296px-radius circular containers; never filled or multi-color.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Salmond 130–213px / 700 / lh 0.80–0.90 for hero and section headlines
- All buttons, badges, inputs, icon containers at 9999px (pill)
- Only #faae33 as chromatic accent (plus #d1255c for heat badges)
- Step depth through three browns; never box-shadow
- Dotted #faae33 rules as section dividers
- Tracking inverse to size: -0.02em display, 0.01–0.02em UI
- Massive type first in every viewport, product photo small below

**Don't**
- No secondary display typeface
- No box-shadow, drop-shadow, or glow
- No frames, cards, or rounded edges on product photography
- No 6px radius on buttons/badges/inputs (cards only)
- Don't dilute gold-on-brown with white, blue, green, or cool neutrals
- Body copy not above 18px or 1.4 line-height
- No solid color background blocks for sections

**Best fit:** fire-roasted condiment brands, spice/seasoning labels, maximalist food packaging, poster-scale type systems, warm monochromatic dark mode, Asian cuisine brands.

## Steal this
- Depth by tonal stepping (3 shades of one hue) instead of shadows — works for any warm dark theme.
- Inverse tracking rule: negative at display, slightly positive at micro sizes.
- Dotted accent-colored rules as section dividers — cheap texture with brand color.
- One typeface stretched from 11px to 213px for total typographic unity.
