---
name: Firecrawl
source: https://styles.refero.design/style/78fec83e-4b27-44ab-9f64-31e9dee53e46
category: ai-startup
tags: [light, near-white, ember-orange-accent, hairline-grid, pill-buttons, mono-code, developer-first]
best_for: Developer-facing AI/data API landing pages with a blueprint feel: hairline grids, code windows, one orange signal
---
# Firecrawl
> "Technical blueprint on warm vellum. A developer tool that swaps cold gray for a single burning orange signal, sitting on near-white surfaces stitched together by hairline grid lines."

## Color tokens
| token | hex | role |
|---|---|---|
| Ember Orange | #ff4d00 | Primary action background, accent text, highlight words, fire icon, active tab underline, badge dots, link strokes; the system's only chromatic signal |
| Ember Glow (light) | #fcddcc | Soft orange-tinted shadow halos behind orange buttons and badges |
| Ember Wash (deep) | #febec2 | Secondary warm-tinted shadow wash for outer glow rings on highlighted cards and code windows |
| Gridline | #e5e7eb | Dominant hairline border, card outlines, input strokes, code window dividers, grid background lines |
| Ink | #262626 | Primary text, heading fills, icon strokes, button text on light surfaces, code text |
| Vellum | #f9f9f9 | Page and card background; softest surface |
| Slate | #727272 | Secondary text, muted body copy, placeholder labels, disabled-state copy |
| Graphite | #616161 | Link text in body copy, supporting paragraphs, inline emphasis |
| Ash | #949494 | Tertiary text, helper text, subtle icon strokes, caption-tier metadata |
| Stone | #c7c7c7 | Placeholder text in inputs and code blocks |
| Mist | #b5b5b5 | Decorative strokes, faint dividers, background-pattern dots and crosses |
| Pebble | #838383 | Muted button text on neutral surfaces, subtle UI labels |

Surfaces: 0 Canvas #ffffff → 1 Vellum #f9f9f9 (cards, code windows) → 2 Gridline #e5e7eb (hairline borders, grid pattern lines) → 3 Shadow Tint #fcddcc (warm ambient shadow ring around orange elements).

## Typography
- **Suisse** (primary) — weights 400, 450, 500; sizes 10–60px (10, 12, 13, 14, 15, 16, 20, 24, 40, 52, 60); line-height 1.0–1.6; tracking -0.01em to +0.02em. Fallback: Inter, Söhne, or Untitled Sans. 450 is a custom intermediate weight for slightly denser body text; headings carry 500.
- **Geist Mono** (code) — weights 400, 500; sizes 12, 13, 14; line-height 1.33, 1.54, 1.57; tracking normal. Fallback: JetBrains Mono, IBM Plex Mono, or Berkeley Mono. Code blocks, tab labels, URL examples, inline snippets.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 10px | 400 | 1.5 | +0.2px |
| body | 14px | 400 | 1.5 | 0 |
| heading-sm | 20px | 400 | 1.33 | 0 |
| heading | 24px | 400 | 1.2 | 0 |
| heading-lg | 40px | 400 | 1.1 | -0.2px |
| display | 52px | 400 | 1.07 | -0.26px |
| display-xl | 60px | 400 | 1.0 | -0.6px |

Letter-spacing behavior: tighten on display sizes (-0.005em at 40–52px, -0.01em at 60px), open on small sizes (+0.01–0.02em below 14px).

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 164, 188px.
- Radius: buttons 999px, tags 999px, icons 999px, inputs 8px, code windows 8px, cards 16px.
- Shadows:
  - subtle: rgb(249,249,249) 0 0 0 6px
  - xl: rgba(0,0,0,0.02) 0 40px 48px -20px, rgba(0,0,0,0.03) 0 32px 32px -20px, rgba(0,0,0,0.03) 0 16px 24px -12px, rgba(0,0,0,0.03) 0 0 0 1px
  - xl-2: rgba(0,0,0,0.03) 0 24px 32px -12px, rgba(0,0,0,0.03) 0 16px 24px -8px, rgba(0,0,0,0.03) 0 8px 16px -4px, rgba(0,0,0,0.03) 0 0 0 1px
  - subtle-2: color(display-p3 0.984314 0.984314 0.984314) 0 0 0 8px
  - subtle-3: rgb(253,253,253) 0 0 0 8px
  - xl-3: rgba(0,0,0,0.02) 0 0 44px 0, rgba(0,0,0,0.03) 0 88px 56px -20px, rgba(0,0,0,0.02) 0 56px 56px -20px, rgba(0,0,0,0.03) 0 32px 32px -20px, rgba(0,0,0,0.03) 0 16px 24px -12px, rgba(0,0,0,0.05) 0 0 0 1px, rgb(249,249,249) 0 0 0 10px

## Layout
- Max-width 1200px centered, but hero and decorative bands extend full-bleed; section gap 96px; card padding 24px; element gap 12px.
- Navigation is a sticky top bar with center-aligned product links.
- Hero is a centered stack: announcement banner → nav → badge → oversized display headline (52–60px) with one orange highlight phrase → 2-line 16px subhead → URL input with action chips.
- Below: (1) 3-column feature card grid, equal-width cards separated by #e5e7eb borders; (2) full-bleed code-window section, 2-column split (code left, output right) with a floating language tab switcher; (3) logo cloud in a single row of 5–6 equal cells; (4) dot-map section header with large centered display heading.

## Components
- **Primary CTA Button (Pill):** #ff4d00, text #ffffff, Suisse 14px/500, tracking +0.01em; padding 10px 18px; 999px radius; outer glow box-shadow #fcddcc 0 0 0 6px; no border.
- **Ghost Nav Button:** transparent, text #262626, Suisse 14px/500; padding 8px 12px; 999px radius; hover #f9f9f9 bg; no border.
- **Code Tab Pill:** transparent, text #727272, Geist Mono 13px/500; padding 6px 12px; 999px radius; active: bg #262626, text #ffffff; 2px gap.
- **Search/Scrape Input Bar:** container #ffffff, 1px #e5e7eb border, 999px radius, padding 8px 8px 8px 20px; URL input Suisse 14px, placeholder #c7c7c7; inline action chips Geist Mono 13px #262626 on #f9f9f9, 999px radius; trailing submit #ff4d00 36px square with right-arrow; outer shadow rgb(249,249,249) 0 0 0 6px.
- **Feature Card (Centered Icon):** #f9f9f9, 1px #e5e7eb, 16px radius, padding 32px 24px; centered orange stroke icon 24px in 40px circle; title Suisse 16px/500 #262626; description 14px/400 #727272; three per row, 24px gap.
- **Code Window:** #f9f9f9, 1px #e5e7eb, 8px radius. Header bar 40px: 3 traffic-light dots (6px, #e5e7eb) left, Geist Mono 12px filename centered, copy button right. Body Geist Mono 13px/400, line-height 1.57, padding 20px. Line numbers Geist Mono 12px #b5b5b5. Syntax: #262626 default, #ff4d00 keywords/strings, #616161 comments. Outer shadow rgb(253,253,253) 0 0 0 8px.
- **Announcement Banner:** full-width, #ff4d00, white Suisse 14px/500 centered, padding 10px 16px, inline underlined link, flush above nav.
- **Logo Cloud Card:** #f9f9f9, 1px #e5e7eb, 8px radius, padding 24px; logos #262626 monochrome; equal-width cards forming a continuous grid; left 2-line label Suisse 14px (#262626 with #ff4d00 for numbers).
- **Section Header (Numbered):** orange 4px dot + Geist Mono 12px #727272 index + "/" separator + uppercase Geist Mono 12px #727272 label; left-aligned with 2px orange vertical line; followed by display heading (Suisse 40–52px #262626 500) with optional orange highlight words.
- **Pill Badge (Tag):** #ff4d00, white Suisse 12px/500, +0.01em; padding 2px 8px; 999px radius.
- **Action Card Button (Scraping Selector):** #f9f9f9, #262626, Geist Mono 13px/500; padding 4px 10px; 999px radius; 12px icon in #727272; 4px gap.
- **Elevated Card (Marketing):** #ffffff, 1px #e5e7eb, 16px radius, padding 32px; shadow stack xl.
- **Navigation Bar:** white, ~64px height, padding 0 24px; left fire-icon logo (#ff4d00) + "Firecrawl" Suisse 15px/500; center items Suisse 14px/500 with chevron-down icons, 24px gap; right GitHub star count Geist Mono 13px + orange Sign up pill; border-bottom 1px #e5e7eb.
- **World Map Background:** full-width, ~400px tall, tiny #e5e7eb dots forming a world-map silhouette; no labels or interactivity.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #ff4d00 exclusively for functional emphasis: CTA fills, active states, highlight words in headlines, badge dots, the fire icon; never large decorative areas.
- Body 14px Suisse weight 400; weight 500 for headings and interactive elements; the 450 weight is not used in interface copy.
- 999px radius on buttons/tags/pills; 8px on inputs and code windows; 16px on cards; never mix tiers.
- #e5e7eb 1px borders as primary visual structure.
- Suisse for prose, Geist Mono for any technical content (code, URLs, API names, file paths).
- Tighten letter-spacing on display sizes, open it on small sizes; no uniform tracking.
- Shadow stacks at 2–3% black alpha; depth from layering and ambient rings.

Don't:
- No chromatic color other than #ff4d00.
- No filled colored backgrounds for large surface areas.
- No sharp corners (0–4px) on buttons or tags.
- No shadows with dark alpha above 5%.
- No 450 weight in headings; headings are 500.
- Don't use color to convey hierarchy in body text.
- Don't place text directly on the dot/grid background without a card or surface layer.

## Steal this
- Soft orange halo ring (#fcddcc, 6px spread) around orange pills instead of a drop shadow.
- Numbered section headers: orange dot + mono "01 / LABEL" with a 2px orange rule.
- Hairline-bordered logo-cloud cells forming a continuous grid.
- URL input bar with inline mono action chips and an orange square submit.
