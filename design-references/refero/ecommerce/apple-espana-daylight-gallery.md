---
name: Apple (España)
source: https://styles.refero.design/style/a4f123f2-cd4b-4d26-998f-a3d3ee158024
category: ecommerce
tags: [light, monochrome, single-accent, centered, frosted-nav, tinted-washes]
best_for: Multi-product storefront homepage stacking centered product heroes on tinted washes
---
# Apple (España) — Museum gallery in soft daylight
> A single, immersive, weightless white room where each product is spotlit against a faintly tinted wall; #f5f5f7 reads as infinite light, blue only for filled primary actions.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Iris Blue | #0071e3 | Filled primary action buttons — sole chromatic CTA |
| Sapphire | #0066cc | Outlined buttons, body text, inline links |
| Sky Signal | #2997ff | Outlined actions on dark sections, secondary CTAs |
| Cornflower | #509be7 | Hover state for inline links, decorative accents |
| Ice Wash | #aad0f6 | Gradient section background wash |
| Carbon | #000000 | Nav glyphs, link underlines, dark text |
| Obsidian | #1d1d1f | Primary headlines and body text |
| Iron | #333333 | Nav icon fill, button text |
| Graphite | #474747 | Nav and link text at rest |
| Slate | #505050 | Tertiary body text, subdued link states |
| Pewter | #707070 | Secondary body, footer copy, muted helpers |
| Silver | #858585 | Icon strokes, tertiary glyphs, muted controls |
| Pale Mist | #d6d6d6 | Hairline dividers, subtle borders |
| Ash Veil | #e2e2e5 | Secondary filled action backgrounds (dark mode) |
| Fog White | #f5f5f7 | Dominant canvas, section backgrounds, footer |
| Pure White | #ffffff | Nav background, button text, elevated surfaces |
| (footer link) | #515154 | Footer link text (from component spec) |

Surfaces: L0 Canvas #f5f5f7 · L1 Pure White #ffffff (nav, cards) · L2 Section Wash Ice #aad0f6 (soft blue gradient behind product heroes) · L3 Dark Band #000000 (entertainment carousel, dark hero bands)

## Typography
- **SF Pro Display** (400, 600, 700) — product headlines, editorial display; sizes 21, 28, 40, 56px; lh 1.07–1.19; tracking -0.005em, 0.007em, 0.011em; fallback system-ui, -apple-system, BlinkMacSystemFont
- **SF Pro Text** (400, 600) — nav, body, buttons, footer, subheads; 7 sizes 12–44px; lh 1.00–1.47; tracking -0.03 to -0.003em; same fallback
- Scale: Major Second 1.125 from 17px base

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| display | 56px | 600 | 1.07 | -0.28px |
| heading-lg | 40px | 600 | 1.1 | 0px |
| heading | 34px | 600 | 1.47 | -0.37px |
| heading-sm | 26px | 600 | 1.47 | -0.39px |
| subheading | 21px | 400 | 1.19 | 0.23px |
| body | 17px | 400 | 1.47 | -0.37px |
| caption | 12px | 400 | 1.33 | -0.12px |

## Spacing, radius, elevation
- Base 4px, compact. Scale: 4, 8, 12, 16, 20, 24, 40, 48, 56, 60px
- Radius: tags 980px; buttons 980px; nav 0px; sections 0px; (entertainment carousel tiles ~12px)
- Elevation: none on buttons/cards/sections. Global nav: no shadow, `backdrop-filter: saturate(1.8) blur(20px)` frosted glass.

## Layout
- Page max-width 980px, centered; section gap 80–120px; card padding 0px; element gap 12px
- Vertical stack of full-bleed product sections; fixed 44px frosted nav. Each section: centered 56px headline → 21px subhead → centered button pair → large product render (~60% of section). Sections alternate #f5f5f7 and soft washes. TV+ carousel is the only break from centered text. Footer: dense 4-column link grid on #f5f5f7. No sidebar or visible mega-menus.
- Imagery ~50% of page: studio-catalog renders floating directly on section bg, soft natural shadows in the photography itself, no lifestyle context; TV+ uses cinematic, color-graded dark photography. SF Symbols 1.5–2px monochrome icons. Zero illustration.

## Components
- **Filled Primary Button** — pill 980px, #0071e3, #ffffff 14px SF Pro Text 400, padding 11px 21px, no border/shadow (e.g., "Más información").
- **Outlined Secondary Button** — pill 980px, transparent, 1px solid #0066cc, #0066cc 14px 400, padding 11px 21px; pairs with filled at 8px gap (e.g., "Comprar").
- **Ghost Outline Button (dark surface)** — pill 980px, transparent, 1px solid #2997ff, #2997ff 14px 400, padding 8px 15px.
- **Text Link** — #0066cc, no bg/radius, underline on hover, optional chevron suffix.
- **Global Nav Bar** — 44px, full width, #ffffff with backdrop saturate(1.8) blur(20px); logo left; 9 items 12px/400 #1d1d1f (hover #474747); search + bag right in 44px tap targets; optional 1px #d6d6d6 bottom border on scroll.
- **Global Message Bar** — #ffffff, 12px/400 centered, inline blue link, no border.
- **Product Hero Section** — full-bleed, 600–700px typical; bg #f5f5f7 or soft gradient wash; centered headline 56px/600 → subhead 21px/400 → button pair → product render full width, no card/shadow.
- **Button Pair (CTA cluster)** — two pills centered, 8px gap: filled #0071e3 left, outlined #0066cc right. Only place blue appears as color.
- **Entertainment Carousel** — full-bleed horizontal scroll; dark/photographic bg; tiles ~280 × 420px, ~12px radius; "Ver ahora" white pill bottom-left; 8-dot pagination below.
- **Product Lineup Display** — full-width photography, no card/border, products float on #f5f5f7 or #aad0f6; multiple angles/colorways in a row.
- **iPad Air Wordmark** — "iPad" 40px/600 + "air" lighter/italic at same size, both #1d1d1f.
- **Footer Link List** — #f5f5f7; two columns; headings 12px/600 #1d1d1f; links 12px/400 #515154; ~10px row gap; no dividers.
- **Legal/Terms Block** — 12px/400 #707070, lh 1.33, inline blue links.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 980px radius on all buttons and pill tags
- SF Pro Display 600 for headlines at 40px or 56px (never 400)
- Center all hero text stacks
- #0071e3 only for filled primary buttons; #0066cc for outlines and links
- Separate sections by bg tint change (#f5f5f7 → #aad0f6 → dark), never borders
- Body 17px/400/1.47, -0.022em
- 44px nav with backdrop blur(20px) saturate(1.8)

**Don't**
- No box-shadows on buttons, cards, sections
- Never #0071e3 outside filled primary buttons
- Never left-align product headlines
- Never button radius below 980px
- No horizontal rules or borders between sections
- Never SF Pro Display below 21px
- No secondary accents, gradients, or decorative backgrounds in hero areas

## Steal this
- Filled + outlined pill pair, 8px apart, as the only color on the page.
- Per-section pale tinted washes (#aad0f6) to differentiate product lines without borders.
- Frosted nav: `saturate(1.8) blur(20px)` over white.
- Narrow 980px content column for a calm, centered catalog cadence.
