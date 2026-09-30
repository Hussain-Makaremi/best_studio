---
name: Monzo
source: https://styles.refero.design/style/e8a1d114-6924-4f03-acd2-996dd30f15a6
category: fintech
tags: [light, mint-canvas, hot-coral-accent, pill-buttons, 64px-radius, photography]
best_for: Consumer bank / neobank sites wanting a friendly, rounded, photography-led look with one hot accent
---
# Monzo
> "Warm coral on cool mint paper — confident restraint with a single hot accent." 95% achromatic on a mint canvas, 64px containers, 500px pills, tight -0.05em body tracking.

## Color tokens
| token | hex | role |
|---|---|---|
| Hot Coral | #ff4f40 | Brand signature: logo, links, headings, icons, card product |
| Pure Black | #000000 | Maximum-contrast text |
| Midnight Ink | #091723 | Dark supporting neutral for text, icons; Sign Up CTA fill |
| Deep Navy | #112231 | Secondary surface tint and footer accents |
| Slate Button | #3b4c54 | Secondary UI, dividers, muted labels |
| Steel | #6b747b | Secondary body text, metadata, descriptive copy |
| Ash | #75817e | Icon strokes, decorative line work, subtle dividers |
| Fog | #b5b9bd | Tertiary text, placeholder, low-emphasis borders |
| Soft Mint | #e3ebe4 | Hover washes, subtle filled buttons, inset surface treatment |
| Page Mist | #f2f8f3 | Page canvas: dominant background behind all content sections |
| Pure White | #ffffff | Card surfaces, elevated panels, button text on dark fills |

Surfaces: 0 Page Canvas #f2f8f3 (warm mint viewport fill) → 1 Card Surface #ffffff → 2 Soft Fill #e3ebe4 (inset surfaces, hover washes) → 3 Active Highlight #b5b9bd (low-emphasis borders, inactive washes).

## Typography
- **MonzoSansText** — weights 400, 600, 700; sizes 13–36px; line-height 1.15, 1.38, 1.40, 1.50; tracking -0.05em. Fallback: Inter. Body and UI text.
- **MonzoSansDisplay** — weights 600, 700, 800; sizes 16–61px; line-height 1.00, 1.20, 1.40; tracking normal. Fallback: Manrope. Headlines and display.

Scale (Major Second 1.125 from 18px):
| role | size | line-height | tracking |
|---|---|---|---|
| caption | 13px | 1.38 | -0.65px |
| body-sm | 16px | 1.50 | -0.8px |
| body | 20px | 1.40 | -1px |
| subheading | 24px | 1.38 | -1.2px |
| heading | 36px | 1.15 | -1.8px |
| heading-lg | 44px | 1.20 | — |
| display | 61px | 1.00 | — |

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 48, 64, 80, 128px.
- Radius: badges 4px, inputs 24px, containers 32px, cards 64px, buttons 500px, nav-pills 500px.
- Shadow: rgba(0,0,0,0.1) 0 0 10px 0. Layering on the mint canvas is preferred to shadows.

## Layout
- Max-width 1200px; section gap 64–80px; card padding 30–32px; element gap 24px.
- Sticky top bar 64–80px: coral wordmark left, segment toggle center-left, Sign Up right, 1px Soft Mint bottom border on scroll.
- Full-bleed photography carousel cards at 64px radius; coral category link list; fixed bottom search bar.

## Components
- **Pill Nav Toggle:** 500px radius, light mint active state (#f2f8f3), MonzoSansText 16px/600, 8px vertical / 12–16px horizontal padding.
- **Sign Up CTA (Dark Pill):** 500px radius, Midnight Ink #091723 bg, white text, MonzoSansText 16px/600, 12px vertical / 20–24px horizontal padding.
- **White Pill CTA:** 500px radius, white bg, Midnight Ink text, 14–16px vertical / 28–32px horizontal padding.
- **Category Link List:** Hot Coral at 32–36px MonzoSansDisplay 700, separated by 1px Soft Mint borders, 60–72px row height.
- **Carousel Card:** 64px radius container, full-bleed photograph, overlaid headline MonzoSansDisplay 44–61px/700 white, white pill CTA, white circle nav dots, 40px arrow circles with thin white outlines.
- **Product Card:** 64px radius, 30–32px padding, coral product visual left, MonzoSansText description right, no shadow or border.
- **Which? Badge:** circular, 100–120px diameter, white bg, thin Hot Coral border, MonzoSansText 11–13px.
- **FSCS Badge:** small white rounded rectangle (4px radius), FSCS Protected logo in coral and dark navy.
- **Arrow Control (Circular):** 40px diameter, transparent fill, 1.5px stroke (white or Midnight Ink), centered chevron.
- **Fixed Bottom Search Bar:** 64px radius, white bg, 2px Hot Coral left edge focus ring, full-width minus margins, MonzoSansText 16px placeholder in Steel.
- **Sticky Top Bar:** see Layout.
- **Menu Label:** MonzoSansText 24–32px/700 Midnight Ink above coral link list.
- **Carousel Dot Indicator:** three to five 8px circles, active white full opacity, inactive white 40%.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 500px radius for all interactive pills: buttons, nav toggles, tag chips.
- Keep the interface 95% achromatic; Hot Coral only on logo, links, headings, icons, card.
- MonzoSansDisplay 600–800 for all headings at 36px and above.
- -0.05em letter-spacing on all MonzoSansText.
- Layer surfaces on mint canvas instead of shadows.
- Body text 20px with 1.4 line-height for descriptive paragraphs.
- 64px border-radius on all large containers.

Don't:
- No Hot Coral as a button background fill.
- No drop shadows on cards or buttons.
- No system fonts or non-brand sans-serifs.
- No letter-spacing other than -0.05em on MonzoSansText.
- Don't mix red and dark navy as a gradient or color pair on one element.
- No square or 8px radii on primary buttons.
- Body text no smaller than 16px; headlines no smaller than 32px.

## Imagery
Real photography of people in everyday financial moments, full-bleed within 64px-rounded containers with dark overlay for legibility. The Hot Coral card product is the recurring graphic element. Minimal outlined arrows and chevrons in thin strokes, never filled. No illustration, 3D, or abstract graphics.

## Steal this
- Mint-tinted canvas (#f2f8f3) with white cards: surface stacking instead of shadows.
- Coral used only as ink (logo, links, headings, icons), never as a button fill; buttons are midnight or white pills.
- Giant 64px-radius photo carousel cards with white pill CTAs.
- Oversized coral link list with hairline separators as the menu.
