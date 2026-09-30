---
name: Apple (España)
source: https://styles.refero.design/style/764b6a64-c233-4e0f-b8e1-bc01e2f8aa16
category: ecommerce
tags: [dark, single-accent, glassmorphism, shadowless, product-first, cinematic]
best_for: Dark-mode-first hardware launches with floating glass price/buy bars over photography
---
# Apple (España) — Black theater with luminous hardware
> Pure black canvas, oversized 56–80px headlines, one blue CTA, zero shadows; elevation via tonal contrast, frosted glass, and a signature 28px radius.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| True Black | #000000 | Primary canvas, hero background, nav backdrop |
| Charcoal | #1d1d1f | Elevated card surfaces, section dividers, body text on light |
| Smoke | #333336 | Nav segment bar, secondary button fills |
| Graphite | #424245 | Secondary body text, nav labels, subdued headings |
| Ash Gray | #86868b | Muted body, meta labels, input borders |
| Platinum | #cccccc | Icon fills, nav glyphs, decorative outlines |
| Silk | #f5f5f7 | Primary heading/body text on dark, light surface fills |
| Pure White | #ffffff | Max contrast text, icon fills, light cards, button text |
| Apple Blue | #0071e3 | Primary purchase CTA fill only |
| Link Blue | #2997ff | Text accent for links, tags, emphasized phrases |
| Deep Link | #0066cc | Standard body link color, secondary anchor text |
| Ember | #b64400 | New badge accent |
| M5 Spectrum Gradient | linear-gradient(108deg, rgb(0,144,247), rgb(186,98,252) 33%, rgb(242,65,107) 66%, rgb(245,86,0)) — i.e. #0090f7, #ba62fc, #f2416b, #f55600 | Decorative gradient for product chip badges |

Surfaces: L0 Canvas #000000 · L1 Elevated #1d1d1f (dark cards, promo banner) · L2 Glass #424245 (floating UI over photography) · L3 Light Card #ffffff

## Typography
- **SF Pro Display** (fallback Inter) — display/headline; **SF Pro Text** (fallback Inter) — body/UI. `numr` on throughout.
- Scale: Minor Third 1.2 from 20px base

| Role | Size | Weight | Line height | Letter spacing | Token |
|---|---|---|---|---|---|
| display | 80px | 600 | 1.05 | -1.2px | --text-display |
| heading-lg | 64px | 600 | 1.06 | -0.576px | --text-heading-lg |
| heading | 56px | 600 | 1.07 | -0.28px | --text-heading |
| heading-sm | 40px | 600 | 1.1 | 0px | --text-heading-sm |
| subheading | 28px | 600 | 1.14 | 0.196px | --text-subheading |
| body | 21px | 600 | 1.19 | 0.231px | --text-body |
| body-sm | 17px | 400 | 1.47 | -0.374px | --text-body-sm |
| caption | 12px | 400 | 1.33 | -0.12px | --text-caption |

Detail:
- Display headings 600 at 40/56/64/80px, lh 1.10/1.07/1.06/1.05, tracking 0 / -0.005em / -0.009em / -0.015em
- Display subheads/labels 600 at 19/21/28/32px, lh 1.21/1.19/1.14/1.13, tracking 0.012em / 0.011em / 0.007em / 0.004em
- Text body 400 17px, lh 1.47, -0.022em
- Text UI 400 at 12/14/20px, lh 1.33/1.29/1.33, tracking -0.010em @12, -0.006em @20
- Text logo 400 44px, lh 1.00, tracking -0.0370em to -0.0030em

## Spacing, radius, elevation
- Base 4px, comfortable. Scale (tokens --spacing-N): 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48, 60, 80, 104, 144, 208px
- Radius: nav 980px (--radius-full-2); cards 28px (--radius-3xl); links 10px (--radius-lg); badges 20% (--radius-20%); inputs 210px (--radius-full); buttons 9999px (--radius-full-4)
- Elevation: no box-shadows. Depth via tonal contrast (#1d1d1f on #000000), frosted glass rgba(66,66,69,0.72) + `backdrop-filter: blur(20px) saturate(1)`, and 28px radius.

```css
:root {
  --color-true-black: #000000; --color-charcoal: #1d1d1f; --color-smoke: #333336;
  --color-graphite: #424245; --color-ash-gray: #86868b; --color-platinum: #cccccc;
  --color-silk: #f5f5f7; --color-pure-white: #ffffff; --color-apple-blue: #0071e3;
  --color-link-blue: #2997ff; --color-deep-link: #0066cc; --color-ember: #b64400;
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-weight-regular: 400; --font-weight-semibold: 600;
  --page-max-width: 1440px; --section-gap: 80px; --card-padding: 28px; --element-gap: 10px;
}
```

## Layout
- Max width 1440px; section gap 80px; card padding 28px; element gap 10px
- Hero: single viewport, left-aligned oversized headline (~20% from left), centered-right product image, floating glass price/buy bar bottom-right
- Alternating full-bleed black and white bands, 80px padding; feature grids 3-column at 28px radius; text-first (headline left, optional video link right, media grid below)
- Nav: sticky 44px + optional 52px promo strip, fully opaque; no sidebar or mega-menu
- Imagery: pure black void, dramatic side-lighting on metallics; no lifestyle or 3D; chip badges use prismatic gradients; icons monochrome white outlined SF Symbols

## Components
- **Primary CTA Pill Button** — #0071e3, #ffffff, 9999px, padding 11px 22px, 17px SF Pro Text 400, -0.022em. Only chromatic action button (e.g., "Comprar").
- **Ghost Pill Button** — transparent, #ffffff at 80% opacity, 9999px, padding 11px 22px, 17px 400; no visible border.
- **Glassmorphic Floating Bar** — rgba(66,66,69,0.72), backdrop blur(20px) saturate(1), 36px or 980px radius, padding 11px 22px, #ffffff 80% text; price + buy anchored bottom-right on hero.
- **Text Link with Arrow** — #2997ff, 400 17px, -0.022em, no underline, trailing arrow glyph.
- **Dark Card Surface** — #000000 or transparent, 28px, padding 28px, no shadow.
- **Light Card Surface** — #ffffff or #f5f5f7, 28px, padding 28px, text #1d1d1f, no shadow.
- **Section Header** — 40px SF Pro Display 600, 0px tracking, #f5f5f7, left-aligned; optional right video link #2997ff; 40–60px vertical padding above content (e.g., "Lo principal.", "Más de cerca.").
- **Chip Badge with Prismatic Gradient** — ~200px square, 20% radius, M5 Spectrum Gradient, white Apple logo + chip name overlay.
- **Nav Link** — #cccccc at 80% opacity, 12px SF Pro Text 400, -0.010em, padding 10px, no underline.
- **Search Input (global)** — #000000 bg, #f5f5f7 text, #86868b placeholder, 1px #86868b border, 210px radius, padding 0 22px left / 0 42px right.
- **Eyebrow Product Label** — 17px SF Pro Text 400, -0.022em, #f5f5f7, directly above hero h1.
- **Finishes Swatch** — ~40px, 20% or 999px radius, no border; e.g. #c8d8e0 Sky Blue, #f0e4d3 Starlight, #2e3642 Midnight, #e3e4e5 Silver.
- **Promo Banner Bar** — #1d1d1f or #ffffff, #f5f5f7 or #1d1d1f text 400 14px, ~52px tall (96px with nav), inline #2997ff link.

## Motion
_not captured_ ("Not specified in source")

## Rules (do / don't)
**Do**
- #0071e3 + #ffffff + 9999px exclusively for primary Buy — never a second chromatic button
- Display 56–80px SF Pro Display 600, -0.015em to -0.005em
- 28px radius on every card, viewer, light container
- Body 17px SF Pro Text 400, lh 1.47, -0.022em
- Pure #000000 canvas, no gradient/texture
- rgba(66,66,69,0.72) + blur(20px) saturate(1) for floating UI over photos
- Nav text 80% white (#cccccc) 12px 400

**Don't**
- No second action accent (green, orange, purple)
- No box-shadows on cards/buttons
- Never weight 700 (max 600)
- No headings below 28px
- No interactive radius below 10px (only 9999px, 28px, 10px)
- Never #0066cc as a button fill
- No gradients on text blocks/sections (only chip badges and imagery)

**Best for:** premium product galleries, hardware launches, dark-mode-first interfaces, cinematic product storytelling, high-end electronics retail. **Comparable:** Apple, Tesla, Bang & Olufsen, Nothing.

## Steal this
- Floating glass price+buy bar anchored bottom-right of hero: rgba(66,66,69,0.72) + blur(20px).
- Nav text at 80% opacity on black — full white "feels aggressive".
- Weight ceiling at 600 with negative tracking for a calm premium voice.
- Gradient allowed in exactly one place (product chip badge) as a signature element.
