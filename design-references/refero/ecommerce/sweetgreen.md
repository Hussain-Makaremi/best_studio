---
name: sweetgreen
source: https://styles.refero.design/style/d91841cf-c717-43ef-97a2-400778fa6e1a
category: ecommerce
tags: [light, warm, cream, lime-accent, pill-buttons, food-photography]
best_for: Food / restaurant ordering and wellness brands with warm cream canvas and one bright CTA color
---
# sweetgreen
> Farm-stand chalkboard at golden hour — cream canvas, deep forest green structure, electric lime as the singular action color, saturated overhead food photography.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Deep Forest | #00473c | Primary brand: nav, dark buttons, text accents, borders, links |
| Lime Glow | #e6ff55 | Filled buttons, selected states, conversion moments |
| Sage Mist | #d8e5d6 | Section backgrounds, card surfaces, band alternation |
| Warm Sand | #e8dcc6 | Alternate section bands, earthy accent |
| Cream Canvas | #f4f3e7 | Primary page background |
| Forest Shadow | #0e150e | Primary text, borders, input strokes (green-tinted near-black) |
| Pure Ink | #000000 | Max contrast text, hairlines, icon strokes |
| Warm Gray | #8c8c82 | Medium-contrast borders, outlines, separators |
| Slate Gray | #555555 | Secondary text in disabled/low-emphasis contexts |

## Typography
- **SweetSans** — display headlines, hero, category labels (400; 40–80px)
- **Grenette** — secondary display accent (200; 48px; -0.047em)
- **SweetSansText** — body, nav, labels, descriptions (400/700; 12–24px)

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| caption | 12px | 400 | 1.33 | 0.2px |
| body-sm | 14px | 400 | 1.29 | 0.24px |
| body | 16px | 400 | 1.25 | 0.27px |
| body-lg | 18px | 400 | 1.33 | 0.54px |
| subheading | 20px | 400 | 1.2 | 0.6px |
| heading-sm | 24px | 400/700 | 1.21 | 1.2px |
| heading | 40px | 400 | 0.85 | 0px |
| heading-lg | 48px | 200 | 1.0 | -2.26px |
| display | 70px | 400 | 0.85 | 0px |
| display-lg | 80px | 400 | 1.0 | 0px |

## Spacing, radius, elevation
- Base 4px. Scale: 4, 8, 12, 16, 20, 24, 40, 60px
- Radius: small 4px; inputs 8px; badges/images 20px; cards 24px; buttons 9999px
- Elevation (product cards, CTA buttons): `rgba(14, 21, 14, 0.4) 3px 3px 32px -10px`

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 8px

## Components
- **Pill CTA Button** — #e6ff55 fill, #0e150e text, SweetSansText 700 16–18px, padding 16px 24px, 9999px.
- **Pill Outline Button** — transparent/cream fill, 2px #00473c border, #00473c text, padding 12px 20px.
- **Ghost Text Link** — no bg/border, #0e150e, right-arrow glyph, underline on hover.
- **Product Card** — square photo (20px radius) top; 24px padding below; name SweetSansText 700 20px; description 400 16px lh 1.25; ghost link. No bg, border, or shadow.
- **Menu Category Tab** — text-only, 40px SweetSans 400 for both states; active has dot indicator beneath.
- **Online Only Badge** — #e6ff55 bg, #0e150e "ONLINE ONLY" SweetSansText 700 12px caps 0.05em, padding 4px 12px, 20px radius, absolute top-left.
- **Navigation Bar** — #f4f3e7; centered #00473c logo (24–28px SweetSansText 700); flanking items 14px, 0.05em; "ORDER" as outline pill.
- **Split Content Section** — full-width #d8e5d6 or #e8dcc6, 80–120px vertical padding; left: SweetSans 48–70px 400 headline, SweetSansText 700 18px labels, 400 16px body; right: single photo (20px radius).

## Motion
_not captured_

## Rules (do / don't)
**Do**
- SweetSans 70–80px / 400 / lh 0.85 for primary headlines
- Default #f4f3e7; #d8e5d6 or #e8dcc6 only for alternating full-width bands
- #e6ff55 fill + #0e150e text only for primary action buttons
- All buttons 9999px pills, SweetSansText 700 16px
- Food photography edge-to-edge in containers, 20px radius, no frames/borders/overlays
- "Order now →" ghost text link for secondary actions
- Positive tracking (0.01–0.05em) on all text below 24px

**Don't**
- No multiple accents — one lime, one forest green
- No headline weight 700+ — authority from calm 400 at large sizes
- No card backgrounds, borders, or shadows _(note: an elevation token for product cards/CTAs was also returned)_
- Lime only for primary CTA fills and badges
- Display line-height never above 1.0
- No rectangular, capsule, or subtly rounded buttons
- No gradients

## Steal this
- Neon-lime CTA on cream with near-black text — high conversion contrast without red/blue clichés.
- Headlines at weight 400 and huge size (70–80px, lh 0.85): authority without bold.
- Positive tracking on all small text for a friendly, airy label voice.
- Alternating earthy bands (sage / sand) on a cream base instead of white/gray.
