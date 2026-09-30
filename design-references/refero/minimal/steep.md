---
name: Steep
source: https://styles.refero.design/style/75fdb89f-ca64-41b3-af36-7a78bd09448e
category: minimal
tags: [light, serif-display, near-monochrome, peach-accent, pill-buttons, floating-cards]
best_for: Analytics / SaaS marketing sites that want an editorial serif voice instead of dashboard chrome
---
# Steep
> Serif analytics on warm paper — oversized Signifier headlines on a near-monochrome white canvas, one warm peach accent, 24px soft cards, barely-there shadows, hairline borders.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Ink Black | #17191c | Primary text, filled button background, nav logo |
| Paper White | #ffffff | Page canvas, button text, elevated card surfaces |
| Mist Gray | #f2f2f3 | Card surfaces, secondary backgrounds, input fills |
| Fog White | #fafafb | Secondary page background, hover surfaces |
| Slate Gray | #777b86 | Link color, muted helper text, footer copy |
| Ash Gray | #979799 | Tertiary labels, category tags |
| Smoke Gray | #a3a6af | Placeholder text, disabled labels |
| Blush Peach | #fbe1d1 | Accent card background (only chromatic surface) |
| Sienna Brown | #5d2a1a | Text/stroke on peach surfaces, chart line strokes |
| (input border) | #ececec | Composer input border (from component spec) |

Surfaces: L0 Canvas #ffffff · L1 Card Mist #f2f2f3 · L2 Section Fog #fafafb (alternating bands) · L3 Accent Blush #fbe1d1 · L4 Elevated White #ffffff (floating product UI with subtle shadow)

## Typography
- **Signifier** (display serif) — 400 only; 44, 64, 90px; lh 1.30; tracking -2.25px @90, -0.96px @64, -0.66px @44; fallback GT Sectra, Tiempos Headline, Source Serif 4, ui-serif/Georgia. H1/H2 only.
- **Sohne** (body/UI/nav) — 400, 430, 450, 480, 500; 14, 15, 16, 17, 18, 20, 22, 26px; lh 1.00–1.50; tracking -0.234px @26, -0.162px @18, 0 at body sizes; fallback Inter, Söhne, ui-sans-serif/system-ui.

| Role | Size | Line height | Letter spacing |
|---|---|---|---|
| caption | 15px | 1.5 | — |
| body | 17px | 1.35 | — |
| body-lg | 20px | 1.35 | — |
| subheading | 22px | 1.5 | — |
| heading-sm | 26px | 1.18 | -0.23px |
| heading | 44px | 1.3 | -0.66px |
| heading-lg | 64px | 1.3 | -0.96px |
| display | 90px | 1.3 | -2.25px |

Tracking rule: -0.025em (90px), -0.015em (64/44px), -0.009em (26/18px).

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 64, 80, 96, 124, 128, 160px
- Radius: cards 24px; images 12px; inputs 16px; buttons 9999px; smallCards 16px; elevatedCards 20px

| Shadow | Value |
|---|---|
| Floating Product Artifact | 0 0 0 1px rgba(4,23,43,0.05), 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1) |
| Modal / Overlay Card | oklab(0 0 0 / 0.05) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 8px 40px 0px |
| Dropdown / Popover | oklab(0 0 0 / 0.05) 0px 0px 0px 1px, rgba(0,0,0,0.08) 0px 4px 24px 0px |

## Layout
- Max width 1200px centered; section gap 80px; card padding 20px; element gap 8px
- Hero: centered oversized serif headline + subhead + pill button pair, surrounded by four floating product artifact cards at varied offsets
- Sections alternate Paper White and Card Mist; features use 2-column text + UI with 80px gaps
- Nav: transparent top bar (no bg/border/shadow) — logo left, links center, text link + filled pill right

## Components
- **Pill Button — Filled** — #17191c bg, #ffffff text, 1px solid #ffffff border, 9999px, padding 0 20px, Sohne 16px 400, no shadow.
- **Pill Button — Ghost** — transparent, #17191c text, 1px solid #17191c, 9999px, padding 0 20px, Sohne 16px 400.
- **Text Link with Arrow** — no chrome, #17191c Sohne 16px 400, padding 20px 0, → in label, underline on hover only.
- **Nav Link** — #17191c Sohne 16px 400, padding 2px 0.
- **Neutral Card** — #f2f2f3, 24px, no shadow/border.
- **Accent Peach Card** — #fbe1d1, text/strokes #5d2a1a, 24px, no shadow/border; max once per page.
- **Floating Product Artifact** — #ffffff, 20px radius, 10%-opacity shadow, padding 16px 20px 12px 12px.
- **Input / Composer** — #ffffff, 1px solid #ececec, 16px, padding 16px, placeholder #a3a6af, Sohne 16px.
- **Stat Card with Chart** — white floating artifact; metric Sohne 20px 500 #17191c; delta Sohne 14px #777b86; minimal chart stroke #5d2a1a.
- **Avatar Bubble** — 40px, 9999px, 2-letter monogram Sohne 500.
- **Tag / Category Label** — no chrome, Sohne 14px 400 #979799.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Signifier 400 at 44/64/90px; never sans at these sizes
- Peach card max once per page
- 9999px buttons, 24px content cards
- Filled pill + ghost pill pair on same row
- Use Sohne half-step weights (430, 450, 480) before 500
- Tracking -0.025em (90), -0.015em (64/44), -0.009em (26/18)
- 4px base: 4/8/12/16/20/24 padding, 80px section gaps

**Don't**
- No chromatic colors beyond peach/brown — "intentionally 97% achromatic"
- No 500+ weights in Signifier
- No drop shadows on content cards (floating artifacts only)
- No card radius below 16px; no button radius below 9999px
- No underlines on links at rest (arrow carries affordance)
- Don't place peach card on non-white background
- No Sienna Brown outside peach surfaces

## Steal this
- Hero surrounded by 3–4 floating product-UI "artifacts" at offset positions — shows the product without a screenshot frame.
- Shadows only on floating artifacts; content cards flat — elevation encodes "this is product UI".
- Half-step font weights (430/450/480) for subtle hierarchy.
- One peach card per page as the editorial highlight.
