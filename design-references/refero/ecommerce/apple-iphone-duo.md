---
name: Apple iPhone Duo
source: https://styles.refero.design/style/a73148b9-449b-42cd-9f38-86ef694f500e
category: ecommerce
tags: [light, monochrome, single-accent, product-first, shadowless, editorial]
best_for: Single-product launch / product story pages with oversized hardware photography
---
# Apple iPhone Duo
> Foldable device in a white gallery — oversized hardware photography dominates, compact black type gives editorial weight, flat shadowless surfaces, blue only for conversion.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Gallery White | #ffffff | Primary canvas, hero, product sections, feature cards |
| Studio Mist | #f5f5f7 | Full-width feature bands, footer, muted blocks |
| Paper Frost | #fafafc | Navigation surface, secondary fills |
| Hairline Silver | #d6d6d6 | 1px dividers, control outlines, separators |
| Control Gray | #e6e6e8 | Disabled fills, subdued surfaces, nav edges |
| Ink | #1d1f1d | Headlines, primary copy, labels, dark icons |
| Slate | #707070 | Secondary copy, legal text, low-emphasis glyphs |
| Steel | #86868b | Input outlines, inactive indicators, control edges |
| Apple Blue | #0066cc | Inline/section links, text controls |
| Pricing Blue | #0071e3 | Filled conversion pills |
| Launch Orange | #b64400 | New-product status labels |

Surfaces: L0 #ffffff (hero, editorial, local nav, cards) · L1 #f5f5f7 (alt bands, carousel backdrop, footer) · L2 #fafafc (opened nav) · L3 #e6e6e8 (disabled fills, nav edge)

## Typography
- **SF Pro Display** — product names, display headlines, section claims (400/500/600; 19–80px)
- **SF Pro Text** — nav, body, links, buttons, labels (400/500/600; 10–44px)
- **Arial** — input fallback only (13px, 400)
- OpenType `"numr"` on both display and text

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| global-nav | 12px | 400 | 1 | -0.12px |
| compact-control | 12px | 400 | 1.33 | -0.12px |
| body-small | 14px | 400 | 1.29 | -0.224px |
| body | 17px | 400 | 1.47 | -0.374px |
| feature-copy | 17px | 400 | 1.24 | -0.374px |
| product-nav-title | 19px | 600 | 1.21 | 0.228px |
| product-kicker | 21px | 600 | 1 | 0.231px |
| feature-heading | 40px | 600 | 1 | 0px |
| hero-display | 80px | 600 | 1.05 | -1.2px |

Tracking profiles — Display: -1.2px @80, normal @40, +0.23px @19–21 (range -0.015em to 0.012em). Text: -0.37px @10, -0.12px @12, -0.22px @14, -0.37px @17 (range -0.037em to -0.003em).

## Spacing, radius, elevation
- Base 4px; section gap 90px; card padding 28px; element gap 20px; density comfortable
- Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 52, 64, 76, 80, 128, 144px

| Element | Radius |
|---|---|
| links | 10px |
| navigation | 20px |
| cards | 28px |
| images | 28px |
| pills | 36px |
| inputs | 980px |
| buttons | 9999px |

| Shadow | Value |
|---|---|
| subtle | rgb(230,230,232) 0px 0px 0px 1px |
| subtle-2 | rgb(134,134,139) 0px 0px 0px 1px |

Elevation strategy: "Surfaces gain separation through #ffffff against #f5f5f7, 28px media corners, and sparse 1px #d6d6d6 edges rather than cast shadows."

## Layout
Compact global nav → product local bar → centered white hero (label, 80px headline, preorder copy, render, floating pricing) → #f5f5f7 highlights band (large 28px white media cards advancing horizontally) → wide white editorial sections (left text + right/bottom oversized imagery) → section anchors for long scrolling.

Imagery: high-res product photography/renders isolated on white or warm neutral, often oversized so fold/thin profile become composition; hands for scale in hero; product UI inside screens as evidence; icons small monochrome glyphs.

## Components
- **Global Store Navigation** — 44px white bar, SF Pro Text 12px/400 links, rgba(0,0,0,0.8) labels; opened: #fafafc, 1px #e6e6e8 edge, blur(20px).
- **Product Local Navigation** — white bar, SF Pro Display 19px/600 product name, right-aligned pills, 20px container radius when floated, #d6d6d6 hairline.
- **Outlined Explore Pill** — transparent, #1d1d1f text, 1px #86868b outline, 9999px, SF Pro Text 12px/400, 16px lh.
- **Pricing Blue Pill** — #0071e3, #ffffff SF Pro Text 12px/400, 16px lh, -0.12px, 9999px.
- **Hero Product Stage** — #ffffff full-bleed; centered SF Pro Display 21px/600 product name, then 80px/600 headline, 84px lh, -1.2px; render directly beneath with no card.
- **Floating Pricing Callout** — #ffffff 28px-radius capsule, 14px/600 #1d1d1f price, compact secondary copy, Pricing Blue pill inside; no shadow.
- **Section Anchor Navigation** — horizontal SF Pro Text 17px/500, 25px lh, -0.374px, #1d1d1f; transparent; 28px vertical padding; no card/underline.
- **Highlights Stage** — #f5f5f7 full width; large #1d1d1f heading with Apple Blue link opposite; #ffffff 28px feature cards, no shadow.
- **Feature Media Card** — #ffffff, 28px, no border/shadow; SF Pro Display 24px/600 or 40px/600 statement above centered media; media may crop beyond edge.
- **Carousel Playback Control** — rgba(210,210,215,0.64) track, 36px radius, rgba(0,0,0,0.56) glyphs; dots + pause in a small pill.
- **Editorial Feature Block** — small #1d1d1f SF Pro Display kicker above left-aligned display statement; SF Pro Text 17px/400 body, ~21px lh, -0.374px; oversized hardware enters from opposite side.
- **Rounded Search Input** — #ffffff, #1d1d1f 13px Arial, 24px left / 45px right padding, 1px #86868b, 980px; hidden until expanded.
- **Launch Status Label** — #b64400 SF Pro Text 12px/600, 16px lh, -0.12px; plain text.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #ffffff as default canvas; #f5f5f7 for full-width bands and footer
- Hero headline SF Pro Display 80px/600, 84px lh, -1.2px
- Feature paragraphs SF Pro Text 17px/400 (-0.374px); in-page nav 17px/500
- 28px radius for feature cards and media; shadowless
- #0071e3 only for compact filled conversion pills with #ffffff 12px text
- #0066cc for inline/section links, not every nav item
- 90px between major sections; 20px between related elements

**Don't**
- No gradients — imagery supplies color and depth
- No shadows on feature cards, editorial blocks, or pricing capsules
- Don't replace 28px card radius with 8px, 12px, or square
- Don't use #0071e3 as large hero background or universal button color
- No 700 bold heroes or tracking wider than -1.2px at 80px
- No colored status pills — bare #b64400 12px text
- No dense boxed UI panels over renders; keep white space around hardware

## Steal this
- Floating pricing capsule (white, 28px, no shadow) with a tiny filled CTA — conversion without shouting.
- Two-tier nav: global 44px store bar + a product-local bar with product name and pills.
- Separation via 1px inset "shadows" (`0 0 0 1px`) instead of drop shadows.
- Tracking profile that tightens at display, loosens slightly at 19–21px kicker sizes.
