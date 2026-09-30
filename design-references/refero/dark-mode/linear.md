---
name: Linear
source: https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1
category: dark-mode
tags: [dark, developer-tool, single-accent, acid-lime, hairline-borders, product-screenshots]
best_for: Developer / productivity SaaS where real product UI is the hero and precision is the brand
---
# Linear
> Midnight precision instrument — near-black surfaces, paper-white type, one electric acid-lime accent.

Darkness is substrate, not theme. Hairline borders (0.5px) and geometry over shadows; precision-machined components; product UI becomes the visual texture.

## Color tokens
| token | hex | role |
|---|---|---|
| Acid Lime | #e4f222 | Primary action buttons, active nav — the brand accent |
| Pulse Green | #27a644 | Tags, dividers, focused UI edges |
| Coral Red | #eb5757 | Highlight backgrounds, soft emphasis |
| Signal Teal | #02b8cc | Decorative accent, informational icons |
| Iris Violet | #6366f1 | Tag/badge fills |
| Lavender | #8b5cf6 | Secondary tag fills, category indicators |
| Void | #08090a | Page canvas, full-bleed backgrounds |
| Carbon | #0f1011 | Card surfaces, nav bars |
| Obsidian | #161718 | Elevated surfaces, deeper panels |
| Graphite | #23252a | Subtle borders, ghost button outlines |
| Smoke | #383b3f | Hairline borders, section separators |
| Ash | #62666d | Muted body text, inactive icons |
| Fog | #8a8f98 | Tertiary text, placeholder, icon fills |
| Mist | #d0d6e0 | Secondary headings, button text on dark |
| Bone | #e5e5e6 | Near-white fills, high-contrast button text |
| Paper | #ffffff | Primary headings, hero type, max contrast |

## Typography
- **Inter Variable** (UI & headings): weights 300, 400, 510, 590; sizes 10–72px (14 steps); lh 1.0–2.75; tracking -0.022em (48–72px), -0.012em (20–32px), -0.011em (15px), -0.010em (13–16px). Features `cv01 on, ss03 on, zero on`. Fallback Inter variable, system-ui.
- **Berkeley Mono** (code-adjacent UI): 400; 12, 14px; lh 1.40–1.71; -0.013em; features `cv01, ss03`. Fallback JetBrains Mono, IBM Plex Mono, ui-monospace. For issue IDs, shortcuts, mono metadata.

Scale (minor third 1.2 from 16px):
| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 72px | 510 | 1.0 | -0.022em |
| heading-lg | 64px | 510 | 1.0 | -0.022em |
| heading | 48px | 510 | 1.0 | -0.022em |
| heading-sm | 32px | 400 | 1.13 | -0.022em |
| subheading | 24px | 400 | 1.33 | -0.012em |
| body-lg | 20px | 590 | 1.33 | -0.012em |
| body | 16px | 400 | 1.5 | default |
| body-sm | 15px | 400 | 1.6 | -0.011em |
| caption | 13px | 400 | 1.2 | default |

## Spacing, radius, elevation
- Base 4px, compact. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 128px.
- Max-width 1200px; section gap 96px; card padding 24px; element gap 8px.
- Radius: small 2px, badges 4px, inputs/buttons 6px, cards 12px, pills 9999px.
- Shadows:
  - sm: `rgba(0,0,0,0.4) 0px 2px 4px 0px`
  - md: `rgba(0,0,0,0.2) 0px 0px 12px 0px inset`
  - subtle: `rgb(35,37,42) 0px 0px 0px 1px inset`
  - subtle-2: `rgba(0,0,0,0.2) 0px 0px 0px 1px`
  - subtle-3: `rgba(0,0,0,0.01) 0px 5px 2px, rgba(0,0,0,0.04) 0px 3px 2px, rgba(0,0,0,0.07) 0px 1px 1px, rgba(0,0,0,0.08) 0px 0px 1px`
  - xl: `rgba(8,9,10,0.6) 0px 4px 32px 0px`
  - subtle-4: `rgba(255,255,255,0.03) inset + rgba(0,0,0,0.6) 0px 0px 0px 1px + rgba(0,0,0,0.1) 0px 4px 4px`
  - subtle-5: `rgba(0,0,0,0.1) 0px 0px 0px 2px`

## Layout
Max-width ~1200px centered, full-bleed dark to viewport edges. Hero: left-aligned oversized headline (64–72px) with right-aligned link CTA, then large product screenshot bleeding slightly beyond max-width. Alternating 2-column text/image and full-width showcase bands, 96px gaps. Single-row customer logo strip. No 3-column grids or masonry; low density, one focal point per screen. Fixed top nav: logo left, links right, no sidebar/mega-menu.

## Components
- **Primary (Acid Lime):** bg #e4f222, text #08090a, radius 6px, padding 10px 16px, Inter 14px/510, -0.011em. One chromatic CTA per view.
- **Nav text button:** transparent, #d0d6e0, padding 8px 12px, 13px/400, underline on hover.
- **Pill button / tag chip:** bg rgba(255,255,255,0.05), #d0d6e0, radius 9999px, padding 4px 12px, 12–13px/400.
- **Ghost/outline:** transparent, 1px #23252a, #d0d6e0, radius 6px, padding 8px 12px, 13px/400.
- **Sign-up pill:** bg #ffffff, text #08090a, radius 9999px, padding 8px 16px, 13px/510.
- **Product screenshot card:** bg #0f1011, radius 12px, inset 1px #23252a via box-shadow, padding 24px, no outer shadow.
- **Subtle card:** bg rgba(255,255,255,0.02), radius 6px, shadow rgba(0,0,0,0.4) 0 2px 4px, padding 8px.
- **Text input:** bg rgba(255,255,255,0.02), 1px rgba(255,255,255,0.08), #d0d6e0, radius 6px, padding 12px 14px, 14px/400; focus border → #d0d6e0.
- **Badge/status tag:** bg rgba(255,255,255,0.05), #8a8f98, radius 4px, padding 0 6px, 12px/400; variants in Pulse Green, Coral Red, Iris Violet, Lavender.
- **Logo mark:** wordmark + glyph, Inter 16px/510, #ffffff, inline SVG.
- **Top nav:** bg #08090a, 16px horizontal padding, max 1200px; links #d0d6e0 13px/400, 8px gaps; white pill sign-up right.
- **Hero gradient floor:** linear gradient rgb(8,9,10) at 10% → rgb(208,214,224) at 100%, under product screenshot.

## Motion
_not captured_ (only: underline on nav hover, input focus border brighten).

## Rules (do / don't)
Do:
- Inter Variable with `'cv01' on, 'ss03' on, 'zero' on`
- #e4f222 only for the single primary action per view
- Body 16px/400, lh 1.5
- -0.022em at 48px+
- Only three radii: cards 12, buttons 6, pills 9999
- 0.5px hairline borders instead of shadows for separation
- Section gaps 96px, element gaps 8px

Don't:
- Bold 700+ (cap at 590)
- Decorative gradients on buttons, cards, text
- Additional chromatic accents as actions
- Card radii 16px+
- Shadows to separate cards from canvas
- Chromatic body text
- Berkeley Mono for headings/marketing

Imagery: product-screenshot-first (issue cards, kanban, AI panels, command palettes) in hairline-bordered frames; no stock/lifestyle/abstract illustration; customer logos grey #8a8f98; single-color line icons. Similar: Vercel, Cursor, Raycast, Framer.

## Steal this
- A 10-step neutral ramp (#08090a → #ffffff) doing all surface/text work; accents only for status tags.
- Non-standard variable weights (510/590) for a crisp but not heavy voice.
- Inset 1px box-shadow as a "border" on screenshot cards.
- Dark-to-light gradient floor under the hero screenshot for depth.
