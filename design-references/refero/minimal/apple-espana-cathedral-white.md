---
name: Apple (España)
source: https://styles.refero.design/style/c9cabb96-32fa-4896-837a-f2497ce1c856
category: minimal
tags: [light, monochrome, single-accent, product-first, pill-buttons, shadowless]
best_for: Premium hardware/product storefronts where product imagery carries all the color
---
# Apple (España)
> Cathedral of white space with whispered headlines — oversized SF Pro Display type floating on near-white canvas, color reserved for product imagery and a single blue interactive accent.

## Color tokens
### Brand accents
| Token | Hex | Role |
|---|---|---|
| Electric Blue | #0071e3 | Filled CTA buttons only — sole chromatic accent in UI |
| Link Blue | #0066cc | Inline body text links and arrow chevrons |
| Ember | #b64400 | Orange state accent for badges and validation |

### Product finishes (swatches)
| Token | Hex | Role |
|---|---|---|
| Sky | #c8d8e0 | Pastel blue surface option |
| Citrus | #dddc8c | Pastel yellow-green surface |
| Starlight | #f0e4d3 | Warm cream finish |
| Silver | #e3e4e5 | Cool gray finish |
| Blush | #e8d0d0 | Soft pink finish |
| Indigo | #596680 | Muted indigo finish |
| Midnight | #2e3642 | Deep charcoal finish |
| Citrus Gradient | linear-gradient(184deg, #1d1d1f 0%, #dfe74f 33%, #5a7e2 100%) | Product hero alternative (last stop returned as `#5a7e2` — appears truncated at source) |

### Neutrals
| Token | Hex | Role |
|---|---|---|
| Primary Ink | #1d1d1f | Headlines, body text, dominant foreground |
| Deep Gray | #474747 | Navigation text and iconography (medium emphasis) |
| Mid Gray | #707070 | Secondary text, inactive nav, muted labels |
| Quiet Dot | #777779 | Pagination fills, tertiary interactive state |
| Hairline | #d6d6d6 | Hairline borders between sections |
| Cool Wash | #e8e8ed | Subtle button backgrounds, hover surfaces |
| Canvas | #f5f5f7 | Alternating section backgrounds |
| Faded Surface | #fafafc | Global nav opened state, elevated panels |
| Paper | #ffffff | Card surfaces, primary background |

## Typography
- **SF Pro Display** — hero headlines and display titles (600, 700; fallback Inter)
- **SF Pro Text** — body copy and navigation (400, 500, 600; fallback Inter)
- Scale: Minor Third 1.2 from 20px base
- OpenType: apply `"numr"` to all numeric content

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| display | 96px | 600–700 | 1.04–1.07 | -1.44px |
| heading-lg | 80px | 600–700 | 1.04–1.07 | -1.2px |
| heading | 56px | 600–700 | 1.04–1.07 | -0.28px |
| heading-sm | 40px | 600 | 1.14–1.38 | — |
| subheading | 32px | 600 | 1.14–1.38 | 0.128px |
| body-lg | 28px | 600 | 1.14–1.38 | 0.196px |
| body | 21px | 400–600 | 1.38–1.47 | 0.231px |
| body-sm | 17px | 400 | 1.47 | -0.022em |
| caption | 14px | 400 | 1.47 | -0.224px |
| micro | 12px | 400 | 1.47 | -0.12px |

## Spacing, radius, elevation
- Base unit 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48, 52, 76, 80, 120, 144px
- Section gap 100–120px vertical; card padding 28px; element gap 8–10px

| Element | Radius |
|---|---|
| links | 10px |
| cards | 28px |
| productImages | 28px |
| badges | 36px |
| buttons (pill) | 980px or 9999px |

- Elevation: none — never use shadows on cards; sections separated by alternating #ffffff / #f5f5f7 backgrounds.

## Layout
- Page max-width 1200px, centered
- Full-bleed sections with 40–80px internal padding
- Hero: centered stack (eyebrow, headline, CTA, pricing, product image filling lower 60%)
- Sections repeat: heading → 2-col / 3-col / showcase layout, alternating backgrounds, 100–120px gaps
- Imagery: tightly cropped hardware renders on white or finish-colored backgrounds; no lifestyle staging, illustration, or abstract graphics; high-key shadowless lighting. Icons: monochrome SF Symbols-style line icons, 1.5–2px stroke.

## Components
- **Filled Pill Button (primary CTA)** — bg #0071e3, white text, 17px SF Pro Text 400, radius 980px, padding 11px × 16px. Max one per section.
- **Ghost Pill Button** — transparent, 1px border #1d1d1f, radius 999px, text #1d1d1f 17px 400, 16px horizontal padding.
- **Text Link with Arrow** — no bg/border, #0066cc 17px SF Pro Text 400, trailing arrow glyph, underline on hover only.
- **Hairline Underlined Link** — #1d1d1f or #474747, 12–14px SF Pro Text, 1px bottom border matching text color.
- **Feature Showcase Card** — 28px radius, bg white or #f5f5f7, padding 28–40px; headline 40–56px SF Pro Display, body 17px SF Pro Text; no shadow or stroke.
- **Product Finish Swatch** — ~80px rounded square, 28px radius, filled with finish color, no border or label.
- **Section Header** — 28–32px SF Pro Display 600, #1d1d1f; optional 21px supporting paragraph; left-aligned; +0.007em tracking at mid sizes.
- **Global Navigation Bar** — 44px tall; white/transparent → #fafafc on scroll with backdrop-filter blur 20px; logo + 7 product links + search + bag; links 12px SF Pro Text 400, 8–10px gaps.
- **Promo Ribbon** — single line, 12–14px SF Pro Text, black on white, optional inline #0066cc link.
- **Product Hero** — white bg; product name 17px centered; headline 96px SF Pro Display 600, #1d1d1f, -1.44px tracking; blue CTA below; pricing 17px; product image fills lower half.
- **Color Variant Showcase** — two side-by-side cards, 28px radius, no border/shadow, each on finish-colored bg, sitting on #f5f5f7; visual only.
- **"Nuevo" Badge** — inline text only, #b64400, 12–14px SF Pro Text 500, above product name.
- **Dot Pagination** — ~8px circles; active #1d1d1f, inactive #777779; 7px spacing.
- **Section Divider** — no line; bg alternates #ffffff ↔ #f5f5f7; 100–120px vertical spacing.
- **Footer Legal Block** — bg #f5f5f7; 12px SF Pro Text 400 #707070; inline links #0066cc; line-height 1.33.

## Motion
_not captured_ (only: nav transitions to #fafafc with blur on scroll)

## Rules (do / don't)
**Do**
- SF Pro Display 700 for hero headlines at 80–96px with -1.44px tracking
- Alternate section backgrounds white / #f5f5f7 for rhythm without borders
- 28px radius on all cards and product images
- Reserve #0071e3 for filled CTAs; #0066cc for inline link text
- Pill buttons at 980px or 9999px radius
- Body copy 17px SF Pro Text 400, -0.022em tracking
- Apply `numr` to all numeric content
- Tight display line-height (1.04–1.07); open body (1.47)
- Let product imagery carry all color; keep UI monochrome

**Don't**
- Never use shadows or elevation on cards
- Never add accents beyond #0071e3, #0066cc, #b64400
- Never set headlines below 40px
- Never use borders to separate sections
- Never radius below 10px on interactive elements
- Never place decorative gradients on UI surfaces
- Never weight below 400 for body or below 600 for headings
- Never add background fills to text links
- Never center multi-line body paragraphs (headlines only)

## Steal this
- Section rhythm via alternating #ffffff / #f5f5f7 bands instead of dividers or shadows.
- Split accent roles: one blue for filled CTAs (#0071e3), a slightly darker blue for inline links (#0066cc).
- Status labels as bare colored text ("Nuevo" in #b64400) rather than pill badges.
- Enormous tight-tracked display type (96px / -1.44px / 1.04 lh) paired with a calm 17px body.
