---
name: Ui
source: https://styles.refero.design/style/0fd67ec5-7e9c-4ca9-b368-5d9c7388477a
category: minimal
tags: [light, achromatic, developer-tool, geist, hairline-borders, component-library]
best_for: Dev-tool / dashboard component libraries (shadcn-style) needing an achromatic, copyable token set
---
# Ui
> Clinical blueprint on frosted paper — pure white surfaces, soft warm grays, large-radius cards on hairline borders, red only for destructive states; "engineered rather than editorial".

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Canvas | #f5f5f5 | Page background, muted surface fills, secondary buttons |
| Paper | #ffffff | Card surfaces, popover backgrounds, primary button fills |
| Surface Alt | #fafafa | Sidebar, subtle card variant, input resting state |
| Ink | #0a0a0a | Primary text, headings, button labels, icon strokes |
| Ink Soft | #171717 | Filled button backgrounds, secondary text on light |
| Mid Gray | #737373 | Muted body, placeholder, helper labels, icons at rest |
| Hairline | #e5e5e5 | Borders, input outlines, card edges, badge outlines |
| Ember | #e7000b | Error/destructive only (icons, marks, small details) |

Surfaces: L0 Canvas #f5f5f5 · L1 Sidebar #fafafa · L2 Card #ffffff · L3 Input Fill #f5f5f5

## Typography
**Geist** (fallback Inter) — weights 400, 500, 600; sizes 12, 13, 14, 16, 18, 24, 30, 36, 48px; lh 1.10–2.00; tracking tightens at display (48px -0.05em), loosens at small caps (12px +0.05em), -0.025em at 24–30px; OpenType `ss01`, `cv11` on. Body 14/400, headings 24–48/600, buttons 13–14/500.

Scale: Major Second 1.125 from 16px base

| Role | Size | Weight | Line height | Tracking | Token |
|---|---|---|---|---|---|
| caption | 12px | 400 | 1.33 | +0.6px | --text-caption |
| body | 14px | 400 | 1.43 | — | --text-body |
| body-lg | 16px | 400 | 1.5 | — | --text-body-lg |
| subheading | 18px | 400 | 1.56 | — | --text-subheading |
| subheading (medium) | 18px | 500 | 1.56 | — | — |
| heading-sm | 24px | 600 | 1.33 | -0.6px | --text-heading-sm |
| heading | 30px | 600 | 1.2 | -0.75px | --text-heading |
| heading-lg | 36px | 600 | 1.11 | -0.9px | --text-heading-lg |
| display | 48px | 600 | 1.1 | -2.4px | --text-display |

## Spacing, radius, elevation
- Base 4px, compact. Scale (--spacing-N): 4, 8, 12, 16, 20, 24, 48px
- Radius: small 6px; nested 10px; badges 18px; inputs 18px; buttons 18px; cards 24px

| Component | Shadow |
|---|---|
| Card | oklab(0.145 -0.00000143796 0.00000340492 / 0.05) 0px 0px 0px 1px + rgba(0,0,0,0.1) 0px 1px 3px + rgba(0,0,0,0.1) 0px 1px 2px -1px |
| Button (filled) | none — tonal contrast |
| Input (focus) | 1px solid #e5e5e5 ring, no offset shadow |

## Layout
- Max width 1280px; section gap 48–80px; card padding 20px; element gap 8px

## Components
- **Primary Filled Button** — #0a0a0a bg, #fafafa text, no border, 18px, padding 0 12px (compact) or 8px 16px (comfortable), 14px Geist 500, ~36–40px tall, no shadow.
- **Secondary Ghost Button** — #f5f5f5 bg, #0a0a0a text, no border, 18px, same padding, 14px 500.
- **Outline Button** — transparent, #0a0a0a text, 1px solid #e5e5e5, 18px, padding 0 12px or 8px 10px.
- **Card** — #ffffff, 24px, 1px solid #e5e5e5, padding 20px, stacked shadow.
- **Nested Card Header/Footer** — asymmetric 24px on applicable corners, 20px horizontal padding, transparent.
- **Input Field** — resting #f5f5f5 (inline transparent), #0a0a0a text, #737373 placeholder, no border at rest, 1px #e5e5e5 on focus, 18px, padding 8px 10px, 14px 400.
- **Badge – Solid** — #171717 bg, #fafafa text, 18px, padding 2px 8px, 12px 500.
- **Badge – Soft** — #f5f5f5 bg, #171717 text, 18px, 2px 8px, 12px 500.
- **Badge – Outline** — transparent, #0a0a0a text, 18px, 2px 8px.
- **Sidebar Surface** — #fafafa, full height.
- **Breadcrumb Trail** — 14px 400, separators #737373, active #0a0a0a, typographic only.
- **Stat Block** — label 12–14px uppercase #737373; value 30–48px 600 #0a0a0a tight tracking; supporting 14px #737373; no card chrome.
- **Search Trigger** — #f5f5f5, #737373 text, 18px, padding 8px 10px, right-aligned ⌘K hint.
- **Destructive Action** — #e7000b on text/icons only.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #0a0a0a filled buttons on #ffffff — the only primary treatment
- 18px radius on buttons/inputs/badges; 24px only on cards
- Display 48px/600, -0.05em
- #e7000b only for destructive states
- Card shadow = 1px hairline + 1px + 2px offset
- Three-tone stack: #f5f5f5 secondary/inputs, #fafafa sidebar, #ffffff cards

**Don't**
- No chromatic colors beyond #e7000b
- No radius other than 18px (interactive) or 24px (containers)
- Don't skip the 1px hairline on cards
- No body text below 14px or lighter than #737373
- No gradients, colored shadows, or accent fills
- No tracking outside ±0.05em
- Don't mix filled and outline buttons without visual rhythm

**Philosophy:** (1) achromatic by default; (2) radius defines hierarchy — 18px interactive, 24px containers; (3) whisper-quiet elevation via 1px hairlines and tonal contrast. "Designed to be copied, modified, and owned."

## Steal this
- Radius-as-hierarchy: exactly two radii (18 interactive / 24 container).
- Three near-white tones (#f5f5f5 / #fafafa / #ffffff) to layer canvas, sidebar, card without shadows.
- Geist with `ss01` + `cv11` for a crisper engineered feel.
- Stat blocks with no card chrome — pure type scale.
