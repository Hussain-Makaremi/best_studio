---
name: ClickUp™
source: https://styles.refero.design/style/efcb73cb-b84a-4ae7-9a2b-e1116f79f130
category: productivity
tags: [light, heavy-display, pill-buttons, black-cta, conic-gradient, product-screenshots]
best_for: High-contrast light SaaS landing pages with heavy display type, black pill CTAs and one animated rainbow border
---
# ClickUp™
> Hardworking dashboard on white.

"Sharp, high-contrast productivity" on a white canvas. Oversized bold display type (52–80px, weights 650–800, tracking -0.04em) with compact 14px button labels and a black filled CTA. Signature geometry: the 9999px pill on chips, tags, nav items and badges. Color is surgical — brand violet (#6647f0) for identity markers, signal blue (#0091ff) for interactive elements, grayscale for structure. A rotating conic-gradient border animates around hero elements as the most expressive moment.

## Color tokens
| token | hex | role |
|---|---|---|
| Brand Violet | #6647f0 | Badges, validation surfaces, short status labels, brand identity only |
| Signal Blue | #0091ff | Outlined action borders, linked labels, lightweight interactive emphasis (not CTA fill) |
| Mint | #6ee7b7 | Green text accent for links, tags, emphasized phrases; "done" status bg |
| Emerald | #00c07a | Green outline accent for tags, dividers, focused edges |
| Teal Tag | #16c0a4 | Badges, validation, short status labels |
| Onyx | #090c1d | Display headlines 48–80px |
| Ink Black | #202020 | Primary action fills, headline text, filled CTAs (12.9:1 on white) |
| Carbon | #2a2a2a | Card borders, button text on light fills, dividers |
| Slate | #646464 | Secondary body, link text, nav labels, icon fills |
| Ash | #838383 | Tertiary text, muted nav, meta labels, disabled |
| Fog | #b3b3b3 | Low-contrast card borders, subtle dividers, placeholders |
| Cloud | #d4d4d4 | Hairline borders, dashed dividers, input outlines |
| Bone | #e8e8e8 | Default border color |
| Plaster | #e9ebf0 | Body section background band |
| Mercury | #eeeeee | Badge text, card accents, neutral chip backgrounds |
| Mist | #f8f9fa | Light neutral action fill; card surface |
| Signal White | #ffffff | Page background, card surfaces, button fills |

Gradients:
- **Rainbow Conic** — `conic-gradient(from 90deg, rgb(125, 91, 231) 19%, rgb(188, 63, 218) 28%, rgb(250, 36, 206) 37%, rgb(251, 73, 165) 45%, rgb(252, 109, 123) 52%, rgb(253, 132, 97) 55%, rgb(253, 154, 70) 58%, rgb(246, 135, 198) 65%, rgb(163, 160, 224) 80%, rgb(79, 185, 250) 95%, rgb(0, 145, 255) 100%)` — animated border around hero CTAs and Brain² element.
- **Primary Gradient** — `linear-gradient(83deg, rgba(64,221,255) -5%, rgba(118,18,250) 51%, rgba(250,18,227) 125%)` — premium brand moments.
- **Dark Fade** — `linear-gradient(rgb(17, 17, 17) 24%, rgb(0, 0, 0))` — dark feature panels.

Surfaces: 1 Canvas #ffffff · 2 Card #f8f9fa · 3 Section Band #e9ebf0 · 4 Dark Panel #111111 · 5 Ink Surface #000000.

## Typography
- **Plus Jakarta Sans** (primary) — weights 400, 500, 600, 650, 700, 800; 14–80px (8 values); lh 1.05–1.50; tracking -0.0400em at 80/52px, -0.0350em at 60/48px, -0.0230em at 34px, normal at 16px body. OpenType `"calt" 0`. Display 48–80px at 650–800; body 16px/400; button labels 14px/700. Fallback: Inter or General Sans.
- **Inter** (secondary) — weights 400, 500, 600, 650, 700; 8–24px (10 values); lh 0.90–1.57; tracking -0.026 to -0.008px. OpenType `"calt" 0, "clig" 0, "liga" 0`. Supporting copy, card body, captions, micro-labels. Fallback: system-ui.
- **Sometype Mono** — weights 400, 500; 10–40px (5 values); lh 1.10–2.00; tracking 0.0600em at 12px uppercase, 0.0800em at 10px uppercase, -0.0080em at body. Status labels, feature tags, uppercase meta. Fallback: JetBrains Mono or IBM Plex Mono.
- **SF Pro** — weights 500, 590; 12px; lh 1.5 (detected, role not described).
- Scale: Minor Third 1.2 from 14px.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| Display | 80px | 700 | 1.2 | -0.04em | `--text-display` |
| Heading Large | 60px | — | 1.1 | -0.035em | `--text-heading-lg` |
| Heading | 48px | — | 1.25 | -0.035em | `--text-heading` |
| Heading Small | 34px | — | 1.2 | -0.04em | `--text-heading-sm` |
| Subheading | 20px | — | 1.5 | -0.02em | `--text-subheading` |
| Body | 16px | 400 | 1.5 | -0.01em | `--text-body` |
| Body Small | 14px | 500 | 1.5 | -0.01em | `--text-body-sm` |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 52, 56, 72, 80, 100px.
- Section gap 80px · card padding 28px · element gap 12px.
- Radius: tags 100px · cards 12px · badges 9999px · images 16px · inputs 9px · buttons 9999px · large cards 20px.
- Shadows:
  - Subtle: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
  - Subtle-2: `rgba(18, 43, 165, 0.04) 0px 1px 1px -0.5px, rgba(18, 43, 165, 0.04) 0px 3px 3px -1.5px, rgba(18, 43, 165, 0.04) 0px 6px 6px -3px, rgba(18, 43, 165, 0.04) 0px 12px 12px -6px`
  - Subtle-3: `rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px -0.5px 0px 0px inset`
  - Small: `rgba(13, 21, 48, 0.04) 0px 4px 4px 0px`
  - Medium: `rgba(0, 0, 0, 0.43) -8px 10px 13px 0px, rgba(0, 0, 0, 0.49) -2px 2px 7px 0px`
  - XL: `rgba(0, 0, 0, 0.17) -34px -13px 37px 0px, rgba(0, 0, 0, 0.2) -9px -3px 20px 0px`
  - XL-2: `rgba(0, 0, 0, 0.55) 0px -13px 32px 0px` · XL-3: `rgba(0, 0, 0, 0.55) 0px -12px 29px 0px` · XL-4: `rgba(0, 0, 0, 0.55) 0px -11px 26px 0px`
- Philosophy: elevation as negative space — cards defined by 1px #e8e8e8 borders or #f8f9fa shifts; product screenshot is the exception with a soft directional shadow.

## Layout
- Max-width 1200px centered; no sidebar.
- Hero: 2-column split — left headline (80px), checkmark list, dark CTA, feature tag pills; right product UI screenshot.
- Tight inside sections (8–12px gaps), spacious between (80px).
- Reading order: announcement bar → nav → hero → logos → illustration section → awards grid → stats → footer.

## Components
- **Filled Dark CTA** — #202020 bg, #ffffff 14px Plus Jakarta Sans 700, 9999px, 12px 24px padding, no border/shadow.
- **Ghost Outline Button** — transparent, 1px #e8e8e8 (neutral) or #0091ff (interactive), #202020 14px 700, 9999px, 10px 20px.
- **Nav Pill Button** — rgba(0,0,0,0.04) on hover, #2a2a2a 14–16px, 9999px, 4px 12px padding, no border.
- **Feature Tag Pill** — transparent or #f8f9fa, #202020 or #0091ff 14px 700, 9999px, 8px 16px, none or 1px #e8e8e8; blue text = active.
- **Product Screenshot Card** — no bg, 12px radius, no shadow, 0 padding; screenshot corner radius 16–32px.
- **Stat Callout Card** — #ffffff, no border/shadow, 28px padding; number Plus Jakarta Sans 60–80px 700, -0.04em, #090c1d; caption Inter 16–18px #646464.
- **Dark Feature Card** — linear gradient #000000 → #191919, 12–16px radius, 40–80px vertical padding; heading #ffffff 48–60px 650; body #b3b3b3 16px.
- **Trust Badge Strip** — horizontal flex, logos #838383 to #202020 grayscale; label Sometype Mono 10px 400, 0.08em, uppercase, #838383.
- **Rounded Avatar Cluster** — circles 24–32px, ~8px overlap, 1–2px white border.
- **G2 Award Badge** — white card, 1px #d4d4d4, 8px radius, 16px padding; 3-column grid.
- **Conic Gradient Border Element** — 1.5–2px rotating conic border, 0.45s linear infinite from 90deg, white inner fill, 9999px (pill) or 12–20px (cards).
- **Checkmark List Item** — #0091ff 18px check; lead text #202020 14–16px 600–700; descriptor #646464; 8–12px row gap.
- **Status Pill (in-product)** — 9999px, 10–12px 600, 3px 9px padding; green done #6ee7b7 bg dark text; blue in-progress #0091ff bg white text; pink overdue magenta tones.

## Motion
- Primary 0.45s cubic-bezier(0.33, 1, 0.68, 1) — slow-out settle.
- State changes 0.25s and 0.3s; hovers 0.15s.
- Conic border 0.45s linear infinite.
- Named: Brain2MemoryVisual, ContextCardVisual, HomeHero4o (border-pulse / rainbow rotation).
- One dramatic continuous animation per viewport; everything else soft ease-out.

## Rules (do / don't)
**Do**
1. Plus Jakarta Sans 650–800 for display 34px+.
2. All buttons, tags, badges 9999px.
3. #202020 (not #000) for CTAs and headlines.
4. -0.04em tracking on display 48px+.
5. #6647f0 only for brand identity moments, never CTA fill.
6. 4px spacing base.
7. 1px solid #e8e8e8 as default border.
8. Conic border on one hero element per page.

**Don't**
1. No #000000 for large text/backgrounds — use #202020 or #090c1d.
2. Don't mix radius values at the same component level.
3. No Plus Jakarta Sans below 14px — use Inter.
4. No brand purple on primary CTAs.
5. No more than two elevation levels per section.
6. No positive tracking on body text (only uppercase mono labels).
7. No Inter as display font.
8. No decorative gradients on cards/section backgrounds.

Imagery: UI-screenshot dominant; G2 badges, grayscale logo strip, gray line-art swirls with floating app icons. No stock or hero video.

Comparable: Linear, Notion, Vercel, Webflow.

## Steal this
- Near-black (#202020) pill CTA as the primary action, keeping brand violet for identity only.
- One animated conic "rainbow" border per page as the sole expressive flourish.
- Uppercase mono micro-labels (0.08em) for trust strips and meta.
- Layered low-alpha blue-tinted shadow (Subtle-2) for barely-there lift.
