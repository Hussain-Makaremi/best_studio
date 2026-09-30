---
name: Peak Design
source: https://styles.refero.design/style/6f3fb64d-d4c9-4ec1-86a1-7983e5180985
category: ecommerce
tags: [monochrome, split-layout, serif-display, uppercase-labels, no-shadows, editorial]
best_for: Premium gear/lifestyle DTC with editorial serif heroes and dense product grids
---
# Peak Design
> Gallery wall, half lit — a near-monochrome canvas where editorial italic serif and product photography do all the work; dramatic white/near-black split layouts.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Ember Red | #cc2e39 | Single-instance emphasis only (sale badges, urgency) |
| True Black | #000000 | Max contrast: headline fills, announcement bars, solid icon strokes |
| Obsidian | #0c0c0c | Deep panel surfaces, image overlays |
| Carbon Ink | #1a211e | Primary text, dark hero panels, body, icons, borders on light |
| Slate | #363537 | Nav text, mid-weight borders (warm near-black) |
| Pewter | #4e4e4e | Secondary UI, dividers, muted labels |
| Graphite | #606562 | Muted body, secondary nav, metadata |
| Ash Border | #cccfcd | Hairline input borders, subtle dividers |
| Mist | #e0e0e0 | Divider lines, disabled, section boundaries |
| Fog | #eef1f0 | Light supporting surface, subtle backgrounds |
| Paper White | #ffffff | Primary page background, light surfaces |

Surfaces: L0 Canvas #ffffff · L1 Soft Card #eef1f0 (components, inputs, secondary buttons) · L2 Hairline #e0e0e0 · L3 Deep Panel #0c0c0c (dark sections, hero panels)

## Typography
- **Geist** (400, 600, 700; 14, 16px; lh 1.00–1.50; fallback Inter, Söhne, Helvetica Neue) — body, product titles, descriptions, inputs, links. 400 body, 600 emphasis, 700 product names.
- **Exposure-10** (Exposure-style serif; 400 only; 40, 48, 80px; lh 1.10; -0.025em at 40–80px; fallback Playfair Display, GT Super, Tiempos Headline) — display/hero only, italic-leaning; never below 40px.
- **bryant** (Bryant-style condensed sans; 700 only; 14, 16, 24, 32px; lh 1.10–1.40; 0.038em @14px, 0.057em @16px; fallback Druk Wide, Inter Display Bold, Neue Haas Grotesk Display Bold) — nav, category buttons, button text, eyebrows, tags. All caps only.
- **Geist Mono** (400; 14px; lh 1.00; fallback JetBrains Mono, IBM Plex Mono) — SKUs, technical labels, micro-data.

| Role | Size | Line height | Letter spacing |
|---|---|---|---|
| caption | 14px | 1.00 | 0px |
| button-label | 16px | 1.10 | 0.91px |
| heading-sm | 24px | 1.20 | 0.91px |
| heading | 32px | 1.20 | — |
| heading-lg | 48px | 1.10 | -1.2px |
| display | 80px | 1.10 | -2px |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- Radius: nav 4px; inputs 4px; buttons 4px; cards 8px; images 8px; buttonsRounded 32px; badges 9999px
- Elevation: none. Separation by flat contrast, 1px hairlines (#e0e0e0 / #cccfcd), whitespace.

```css
:root {
  --color-carbon-ink: #1a211e; --color-paper-white: #ffffff; --color-true-black: #000000;
  --color-obsidian: #0c0c0c; --color-fog: #eef1f0; --color-mist: #e0e0e0;
  --color-graphite: #606562; --color-ash-border: #cccfcd; --color-slate: #363537;
  --color-pewter: #4e4e4e; --color-ember-red: #cc2e39;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-exposure-10: 'Exposure-10', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-bryant: 'bryant', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --text-caption: 14px; --leading-caption: 1; --tracking-caption: 0px;
  --text-button-label: 16px; --leading-button-label: 1.1; --tracking-button-label: 0.91px;
  --text-heading-sm: 24px; --leading-heading-sm: 1.2; --tracking-heading-sm: 0.91px;
  --text-heading: 32px; --leading-heading: 1.2;
  --text-heading-lg: 48px; --leading-heading-lg: 1.1; --tracking-heading-lg: -1.2px;
  --text-display: 80px; --leading-display: 1.1; --tracking-display: -2px;
  --spacing-4: 4px; --spacing-8: 8px; --spacing-12: 12px; --spacing-16: 16px; --spacing-20: 20px;
  --spacing-24: 24px; --spacing-32: 32px; --spacing-40: 40px; --spacing-48: 48px; --spacing-64: 64px;
  --page-max-width: 1440px; --section-gap: 80px; --card-padding: 24px; --element-gap: 24px;
  --radius-md: 4px; --radius-lg: 8px; --radius-3xl: 32px; --radius-full: 9999px;
  --surface-canvas: #ffffff; --surface-soft-card: #eef1f0; --surface-hairline: #e0e0e0; --surface-deep-panel: #0c0c0c;
}
```

## Layout
- Max-width 1440px; section gap 80px; card padding 24px; element gap 24px
- Full-bleed sections alternate white / near-black. Hero: 50/50 split (text left, full-bleed image right). Product grids: 4 equal columns, 24–32px gaps. Category pill filters directly under nav. Sticky nav with thin announcement strip above.
- Imagery: studio product photography on pure white; lifestyle only in full-bleed editorial sections; hero images flush (no radius), 8px radius in cards; no illustration.

## Components
- **Announcement Bar** — full-width #1a211e, ~32px, white 14px bryant 700 uppercase (0.057em), centered.
- **Primary Navigation** — white, ~64px, 1px #e0e0e0 bottom border; logo left #1a211e; category links bryant 700 16px uppercase #363537 (0.057em); centered search (#eef1f0 bg, #cccfcd border, 4px radius, 14px Geist placeholder #606562); right support link + account/cart icons #1a211e.
- **Category Filter Bar** — pill chips, 8px row gap; active #1a211e fill/white text; inactive transparent, #363537 text, #cccfcd border; bryant 700 16px uppercase; ~40px tall, 20px horizontal padding, 9999px.
- **Product Card** — white, no border/shadow; 1:1 image with 8px radius; "New" badge top-left (#4e4e4e fill, bryant 700 14px white, padding 2px 8px, 9999px); 12px gap → title Geist 400 16px #1a211e → 4px → brand Geist 400 14px #606562 → 4px → price Geist 400 16px #1a211e.
- **Hero Split Panel** — full width 50/50, 400–600px tall; left #0c0c0c or #1a211e, vertically centered: eyebrow bryant 700 14px white uppercase; headline Exposure 48–80px italic white, -0.025em, lh 1.10; subtext Geist 400 16px white 80% opacity. Right: full-bleed image, no radius.
- **Filled Button (dark)** — white fill, no border, 4px, padding 12px 20px; bryant 700 16px uppercase #1a211e (0.057em); no shadow/hover lift.
- **Outlined Button (dark)** — transparent, 1px white border, 4px, padding 12px 20px; bryant 700 16px uppercase white.
- **Ghost Button (light)** — no bg/border; bryant 700 14–16px uppercase #1a211e.
- **Carousel Pagination Dots** — 8px gap; active ~8px #1a211e pill; inactive ~8px #cccfcd circle; centered.
- **Search Field** — #eef1f0, 1px #cccfcd, 4px, ~40px tall; 16px #606562 icon; placeholder Geist 400 14px #606562.
- **Section Heading Block** — display serif #1a211e, left, 48–80px, lh 1.10, optional em-dash suffix, 64px top padding.
- **Navigation Icon Button** — no bg/border; 20–24px icon, 1.5px stroke, #1a211e; 8px padding; hover opacity 0.85.

## Motion
_not captured_ (only: icon button hover → opacity 0.85)

## Rules (do / don't)
**Do**
- Exposure serif italic only for hero/section headlines at 48px+
- Body Geist 400 16px, lh 1.5; 600/700 for product names and inline emphasis
- bryant 700 uppercase (0.038em @14 / 0.057em @16) for every nav label, button, eyebrow — never mixed case
- Alternate white and near-black (#0c0c0c / #1a211e) full-bleed sections; never both tones in one card/form
- Radius: 8px cards/images, 4px buttons/inputs/nav, 9999px badges/pills
- #cc2e39 for single-instance emphasis only
- Product cards borderless/shadowless, separated by 24px+ whitespace

**Don't**
- No colored backgrounds on buttons, cards, panels
- No box-shadow or drop-shadow anywhere
- No body/UI text in Exposure serif (illegible below 32px)
- No mixed case in bryant
- No Ember Red on more than one element per viewport
- No radius >8px on cards/images; 32px and 9999px reserved for buttons and badges
- Don't center body copy or product descriptions (center only hero headlines and section labels)

**Similar references:** Aesop, Mismo, Bellroy, Muji.

## Steal this
- Three-voice type system: italic serif (voice) + condensed uppercase sans (labels) + neutral sans (content).
- 50/50 split hero: dark text panel left, flush full-bleed photo right.
- Tight product card stack with 12/4/4px gaps — title, brand, price — no container.
- Red reserved as a scarce single-instance signal inside a grayscale system.
