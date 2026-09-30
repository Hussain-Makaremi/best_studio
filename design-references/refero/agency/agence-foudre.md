---
name: Agence Foudre
source: https://styles.refero.design/style/c1534c74-f7b8-44de-a913-586d0f78fb08
category: agency
tags: [light, warm-pink, heavy-condensed-display, editorial, flat, green-body-text]
best_for: Editorial-magazine agency portfolios driven by giant heavy display type and bold pink/green color punctuation
---
# Agence Foudre
> Magazine splash page in lipstick pink.

Editorial-magazine portfolio aesthetic centered on typographic hierarchy and generous whitespace. Brand personality lives entirely in bold display type and strategic color punctuation rather than traditional UI components.

## Color tokens
| token | hex | role |
|---|---|---|
| Lipstick Magenta | #db3c8a | Display headlines, brand recognition, icon buttons |
| Forest Ink | #00522d | Body text, links, iconography — editorial gravitas |
| Bubblegum | #f29ebd | Secondary accent, faded display type |
| Cotton Pink | #e878b2 | Mid-tone surface for elevated cards |
| Charcoal Black | #000000 | High-contrast text, icons, line art |
| Lilac Mist | #d1cfe4 | Decorative type tint, subtle dividers |
| Blush Cream | #fce5df | Badge backgrounds, gentle wash blocks |
| Warm Chalk | #fff8f6 | Primary page canvas |

Surfaces: 1 Warm Chalk #fff8f6 (canvas) · 2 Blush Cream #fce5df (badges/blocks) · 3 Cotton Pink #e878b2 (elevated accent, rare).

## Typography
- **Beni** (display) — weight 900 only; 46, 80, 94, 130, 230px; line-height 0.70. Fallback: Druk Wide Heavy, Tungsten Bold, Antonio Black. Display headlines exclusively.
- **Clash Grotesk** (primary) — weights 400 (body), 500 (emphasized), 700 (buttons/active); 10–30px across 8 values; line-height 1.20. Fallback: Inter, Satoshi, General Sans. All UI chrome, body, nav, buttons, badges, links.

| token | size | leading |
|---|---|---|
| micro | 10px | 12 |
| label | 12px | 14 |
| caption | 14px | 17 |
| body-sm | 16px | 19 |
| body | 20px | 24 |
| subheading | 46px | 32 |
| heading-sm | 80px | 56 |
| heading | 94px | 66 |
| heading-lg | 130px | 91 |
| display | 230px | 161 |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 8, 12, 20, 60, 120, 140px.
- Section gap 120px · card padding 30px · element gap 15–20px · body text cap 60 characters.
- Radius: badges/buttons/icon buttons 10px (or 9999px fully rounded) · cards 20px · elevated 25px · tags 9999px.
- Elevation: none — no shadows, gradients or glass (deliberately flat).

## Layout
- Page max-width 1440px.
- Full-bleed single column with extreme vertical whitespace.
- Nav stripped to two pink circles in absolute corners (menu top-left, brand top-right).
- Each section owns full viewport height, anchored by massive display type; content scrolls as typographic statements.
- ~95% typography, ~5% imagery; full-bleed editorial photography with no rounded corners, shadows or frames.

## Components
- **Circular Menu Trigger & Brand Mark** — 50px diameter, 9999px radius, #db3c8a fill, fixed (menu top-left, brand top-right). Only two interactive circles on the page.
- **Display Headline Block** — Beni 900, 94–230px, lh 0.70; color cycles #db3c8a (full), #f29ebd (mid), #fce5df (faded); left-aligned, no margins; full viewport per statement.
- **Section Label** — Clash Grotesk 500, 12–14px, uppercase, #00522d (or faded magenta), directly above headline.
- **Pill Badge/Tag** — Clash Grotesk 500, 12–14px, #00522d on #fce5df, padding 7px 15px, 9999px radius.
- **Body Paragraph** — Clash Grotesk 400, 16–20px, lh 1.20, #00522d, max ~60ch, 30–60px between blocks.
- **Text Link** — Clash Grotesk 500, inherits body size, #00522d; hover underline in #db3c8a; no border/bg.
- **Icon Button (Ghost)** — no bg/border, icon #000000 or #00522d, 20–24px; hover → #db3c8a.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Beni 900 at 0.70 line-height for all display type.
- Canvas #fff8f6; #fce5df as 5–10% accent only.
- Pair loud #db3c8a with whispered #fce5df for section dialogue.
- #00522d exclusively for body text and links.
- Whitespace structures layout (60–120px section gaps).
- Interactive circles at 50px with #db3c8a fill.
- Cap body at 60ch regardless of viewport.

**Don't**
- Never #000000 for body text (#00522d is the editorial voice).
- Don't set Beni below 30px.
- Avoid card-heavy layouts.
- Never #db3c8a on large body areas ("exclamation, not wallpaper").
- No shadows, gradients or glass.
- Only two typefaces (Beni + Clash Grotesk).
- Avoid symmetric/centered layouts.

## Steal this
- Deep green (#00522d) as body text color instead of black — distinctive yet readable, pairs with pink.
- One display color at three intensities (full / mid / faded) cycling across headlines for rhythm.
- Navigation reduced to two fixed brand-colored circles.
- 0.70 line-height ultra-heavy display for poster-like section openers.
