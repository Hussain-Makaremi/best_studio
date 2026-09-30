---
name: OpenAI
source: https://styles.refero.design/style/dc541737-8bf2-4b31-b729-0352f696e82f
category: ai-startup
tags: [light, monochrome, editorial, pill-controls, hairline-borders, photography]
best_for: Research/editorial AI brands where a centered prompt and large articles do the work
---
# OpenAI
> Research lab notebook at noon: pure white, near-black type, one black button as the only punctuation.

Typographic, editorial restraint. The only filled element is the black "Try ChatGPT" button — "a single period at the end of an otherwise monochrome sentence." 12%-opacity hairlines give structure without weight; 6px card radius "whispers geometry rather than announcing it." OpenAI Sans on a Major Second scale with progressive tracking gives "compressed, almost newsprint authority." Lightweight pill controls, ghost buttons, transparent surfaces.

Collection group: "Put a task in front of the claim."

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #000000 | Primary text, filled action button — sole punctuation |
| Hairline | #0000001f | All borders, dividers, card outlines |
| Whisper | #0000000a | Small decorative accents, ghost hover bg; not a CTA |
| Graphite | #666666 | Muted captions, helper text |
| Smoke | #8f8f8f | Tertiary text, disabled, icon strokes, placeholder |
| Ash | #f1f1f1 | Subtle elevation, hover states, language selector bg |
| Paper | #ffffff | Canvas, cards, input fills |

## Typography
- **OpenAI Sans** (custom geometric sans with humanist warmth) — 400, 500, 600; 13–48px (8 values); lh 1.00–1.65; tracking −0.03em at 48px, 0.011em at 28px, −0.01em at 22px and below; features `'calt'`, `'liga'`; fallback Inter, Söhne, system-ui. 400 body, 500 nav/labels/headings, 600 only largest headings.

Scale (Major Second 1.125 from 17px):
| role | size | weight | lh | tracking |
|---|---|---|---|---|
| display | 48px | 500 | 1.16 | −1.44px |
| heading | 28px | 600 | 1.21 | 0.31px |
| subheading | 22px | 500 | 1.26 | −0.22px |
| body-lg | 18px | 500 | 1.32 | −0.18px |
| body | 17px | 400 | 1.65 | −0.01em |
| input | 16px | 400 | 1.5 | −0.16px |
| caption | 13–14px | 500 | 1.4–1.51 | −0.13px |

## Spacing, radius, elevation
- Base 4px; density comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 52, 64, 80, 120px.
- Radius: buttons 9999px · tags 9999px · inputs 9999px · cards 6px · links 4px.
- Shadow sm (hover): `rgba(0,0,0,0.02) 0px 4px 6px 0px, rgba(0,0,0,0.05) 0px 0px 2px 0px`.

## Layout
- Max width 1200px; section gap 32–64px; card padding 12px; element gap 12–16px.
- Hero: vertically centered prompt on empty white canvas — the search input is the entire first screen ("command line" feeling).
- Below: 2-column asymmetric grid — large featured article (~65% width, left) with full-bleed photography; stacked smaller cards right. No background shifts, no 3+ column grids, no mega-menu or sidebar.
- Imagery: large-format editorial photography (cosmic, space, planets, nebulae), full-bleed in cards at 6px radius, no shadows; no lifestyle/product shots, illustrations or 3D. Icons thin-stroke monochrome #000.

## Components
- **Filled action button** — #000000, white 14px/500, 9999px, 8px/20px. Only primary conversion ("Try ChatGPT").
- **Outlined pill** — transparent, #000000 14px/500, 1px solid rgba(0,0,0,0.12), 9999px, 8px/20px. Secondary, filters, chips.
- **Ghost text button** — no bg/border, #000000 13–14px/500; hover Whisper bg. Nav, breadcrumbs, "Log in".
- **Search input** — transparent, #000000 16px/400, 1px solid rgb(229,231,235), 9999px, padding 10px vertical / 52px left / 24px right; placeholder #666666; no visible focus ring.
- **Article card** — transparent, 6px, no shadow, no padding; image clipped at 6px.
- **Featured article hero card** — full-width or 2-col span; large photo (6px); 48px/500 headline −0.03em; metadata 14px/500 Graphite.
- **Section header** — 14px/500 Graphite, 32–64px top margin, optional "View more" ghost link; separation by whitespace.
- **Top nav** — ~64px, Paper; wordmark left; items (Research, Products, Business, Developers, Company, Foundation) 14px/500 #000; search icon, "Log in" ghost, "Try ChatGPT" filled right; no border-bottom.
- **Tag chip row** — outlined pills 13–14px, 8px apart, below prompt input.
- **Footer** — multi-column links 13–14px/500 Graphite, 64px+ top padding; no social icons or newsletter.

CSS quick reference (as returned):
```
--color-obsidian:#000000; --color-graphite:#666666; --color-smoke:#8f8f8f; --color-paper:#ffffff;
--color-ash:#f1f1f1; --color-hairline:#0000001f; --color-whisper:#0000000a;
--font-openai-sans:'OpenAI Sans', ui-sans-serif, system-ui;
--radius-buttons:9999px; --radius-cards:6px;
--shadow-sm: rgba(0,0,0,0.02) 0px 4px 6px 0px, rgba(0,0,0,0.05) 0px 0px 2px 0px;
```

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #000000 only for filled buttons.
- All borders rgba(0,0,0,0.12).
- 9999px on all buttons, tags, inputs.
- 6px for cards/images; avoid 12–16px.
- Body 17px, lh 1.65, −0.01em.
- 500 for nav/labels/subheads, 400 body, 600 only at 28px.
- Whitespace over dividers.

**Don't**
- No accent colors, gradients, brand hues.
- No card box-shadows.
- No 8px/12px button radius.
- No 700+ weights.
- No body below 16px.
- No colored section backgrounds.
- No icons inside buttons/text links.

## Steal this
- The empty first screen: just a centered pill prompt input — the product is the hero.
- 12%-black hairline as the single universal border color (adapts to any surface).
- 17px / 1.65 body for an editorial reading rhythm on a product site.
- Pill controls + 6px media: soft interactive, architectural content.
