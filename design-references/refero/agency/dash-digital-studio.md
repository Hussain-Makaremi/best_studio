---
name: Dash Digital Studio
source: https://styles.refero.design/style/6036b661-3886-4f76-a5e6-bb8960eb7db5
category: agency
tags: [light, warm-neutral, achromatic, light-weight-display, uppercase, photo-led]
best_for: Achromatic editorial studio sites where full-bleed case-study photography does the talking
---
# Dash Digital Studio
> Editorial museum on warm paper. A gallery where giant whisper-weight typography floats over off-white walls and full-bleed product photography does all the talking.

Strictly achromatic; zero chromatic accent. Hierarchy and emphasis driven entirely by type weight, scale, spacing and tonal shifts.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink | #000000 | Maximum-contrast text; strongest emphasis |
| Carbon Black | #2a2a2a | Primary text, nav, body, badges, footer |
| Stone | #bcbcb4 | Low-emphasis supporting text; dim separators |
| Clay | #ccc4b9 | Transitional surfaces between bone & parchment |
| Ash | #d6d6d6 | Muted fills, hairline borders, disabled states |
| Parchment | #f0edea | Alternate warm section background |
| Bone | #f0f0f0 | Page canvas & primary surface |
| Linen | #fafafa | Elevated surface; section dividers |

## Typography
- **Founders Grotesk** (primary) — weights 300, 400; 12–101px (8 values); lh 0.80–1.20; tracking -0.06 to -0.018px. Fallback: Söhne, Inter, GT America, Neue Haas Grotesk. 300 at 70–101px for monumental hero/section titles; 400 at 12–22px for body, nav, meta, case descriptions.
- **Editorial Neue** (secondary accent) — weight 400; 16px; lh 0.90; tracking -0.0600em. Fallback: Tiempos Text, Lyon Display, Source Serif Pro. Sparing accent for specific body or pull-text moments.
- Scale from 16px base, Minor Third 1.2.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.17 | -0.018px |
| body-sm | 14px | 400 | 1.2 | -0.018px |
| body-lg | 17px | 400 | 1.2 | -0.018px |
| subheading | 22px | 400 | 1.17 | -0.02px |
| heading-sm | 40px | 400 | 0.9 | -0.023px |
| display | 70px | 300 | 0.88 | -0.03px |
| display-xl | 101px | 300 | 0.8 | -0.06px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 12, 20, 24, 32px.
- Section gap 80–120px · card padding 20–24px · element gap 12–20px · case-study column gap 29px.
- Radius: inputs 4px · buttons 999px · tags 999px · cards 0px · images 0px.
- Elevation: deliberately shadowless. Separation via tonal shifts (#fafafa, #f0f0f0, #f0edea) and 1px #2a2a2a hairlines. "Elevation is implied by tonal warmth, not by depth."

## Layout
- Max-width 1440px.
- Case studies in a 2-up grid with 29px column gap.

## Components
- **Pill Action Button** — solid #2a2a2a, #fafafa text, 12px Founders Grotesk 400 uppercase, 999px radius, ~14px horizontal / ~4px vertical padding. Labels: VIEW CASE STUDY, VIEW WORK, MORE +.
- **Editorial Display Heading** — Founders Grotesk 300, 70–101px, #2a2a2a, uppercase, lh 0.80–0.88, -0.03 to -0.06em; full-width, intentionally long lines.
- **Case Study Card** — 2-up, 29px gap; meta tags (12px uppercase) + 20px space + title (22px uppercase) above full-bleed 0px-radius photo.
- **Meta Tag Row** — "DIGITAL DESIGN · WEB DEVELOPMENT", 12px uppercase 400 #2a2a2a, middot separators.
- **Text Nav Link** — 12–14px 400 #2a2a2a uppercase, no underline/bg/border, 29px horizontal padding between items.
- **Brand List Row** — full-width, 1px solid #2a2a2a bottom border; left brand name 12–14px uppercase; right service tags + "MORE +" pill.
- **Section Divider Rule** — 1px solid #2a2a2a full-bleed (sparingly; prefer 80–120px whitespace).
- **Text Input** — 1px solid #2a2a2a border, 4px radius, no fill, 16px 400.

CSS returned:
```css
--color-carbon-black: #2a2a2a; --color-bone: #f0f0f0; --color-ink: #000000; --color-linen: #fafafa;
--color-ash: #d6d6d6; --color-parchment: #f0edea; --color-stone: #bcbcb4; --color-clay: #ccc4b9;
--font-founders-grotesk: 'Founders Grotesk', ui-sans-serif, system-ui...;
--font-editorial-neue: 'Editorial Neue', ui-sans-serif, system-ui...;
--text-display-xl: 101px; --leading-display-xl: 0.8; --tracking-display-xl: -0.06px;
--spacing-4: 4px; --spacing-12: 12px; --spacing-20: 20px; --spacing-24: 24px; --spacing-32: 32px;
--radius-full: 999px; --radius-md: 4px;
--page-max-width: 1440px;
```

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Hero/section titles Founders Grotesk 300, 70–101px, lh 0.80–0.88, -0.03 to -0.06em.
- Only #2a2a2a for body text, #f0f0f0 for page background (18:1 contrast).
- 999px radius on pills & tags; images/cards/blocks 0px.
- Separate sections with 80–120px gaps over dividers.
- 29px horizontal padding in nav rows & case-study gaps.
- All action labels (uppercase 12px 400) in solid #2a2a2a pills.
- Discipline tags (uppercase 12px) 20px above project titles.

**Don't**
- Never chromatic color.
- Never body copy in 300 (300 only for 40px+ display).
- No drop shadow, glow, gradient.
- Never round image corners or border photography.
- No line-height above 1.20.
- Never underline text links.
- No chromatic or soft-background CTAs.

## Steal this
- Near-black (#2a2a2a) instead of #000 for text and pills on #f0f0f0 — softer, still 18:1.
- Tiny uppercase pill CTAs ("VIEW CASE STUDY") as the only solid shapes on the page.
- Brand/client list as full-width rows with hairline bottom borders and a "MORE +" pill.
- One recurring gap value (29px) reused across nav and grid for invisible consistency.
