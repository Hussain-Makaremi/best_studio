---
name: Cake Equity
source: https://styles.refero.design/style/4c33d8fe-81d5-46cb-9dc1-dd231be1c9ec
category: fintech
tags: [light, electric-violet, chartreuse-accent, pill-buttons, bone-canvas, dark-product-cards]
best_for: Cap-table / equity-management SaaS that wants a friendly-but-serious founder tool site with dark product showcase cards
---
# Cake Equity
> "founder's command center on warm bone-white, electric violet switches, chartreuse receipts" — Electric Violet pills on bone canvas, 20px cards with tinted 1px borders, dark Midnight product cards showing cap-table data.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Violet | #4823ff | Primary action buttons, filled CTAs, link accents, key icon strokes |
| Voltage Mid | #7e78ff | Hover/active states, selected nav background, secondary fills |
| Iris Accent | #6d67fb | Violet outline accent for tags, dividers, focused UI edges |
| Lilac Wash | #ede9ff | Soft section backgrounds, card borders on light surfaces |
| Periwinkle Border | #d9d2ff | Decorative border tint on light surfaces, card frames |
| Chartreuse Receipt | #e7ff6e | Promotional banner, highlight callouts, dark-card accent fill |
| Powder Blue | #99cefe | Soft highlight washes on product mockups, small badges |
| Obsidian Ink | #18161a | Primary text, dominant borders, dark card backgrounds |
| Midnight Surface | #1e1b22 | Dark feature card backgrounds, product showcase panels |
| Graphite | #222222 | Navigation borders, secondary button borders |
| Carbon Border | #333333 | Structural borders on cards, icon strokes on dark surfaces |
| Slate Helper | #898b91 | Muted helper text, inactive form labels |
| Lavender Gray | #9e99ab | Muted secondary text, subtle card borders |
| Bone Canvas | #fafaf8 | Page background, hero canvas, base layer |
| Paper White | #ffffff | Card surfaces, elevated panels, button text on dark fills |

Surfaces: 1 Bone Canvas #fafaf8 → 2 Paper White #ffffff (cards) → 3 Lilac Wash #ede9ff (tinted section backgrounds) → 4 Chartreuse Receipt #e7ff6e (promo banner, dark-card accents) → 5 Midnight Surface #1e1b22 (dark product showcase cards).

## Typography
- **Plus Jakarta Sans** (display) — weight 700; sizes 63px, 77px; line-height 1.00; tracking -0.04em (77px), -0.032em (63px). Fallback: Manrope. Display headlines only.
- **Inter** (body/UI) — weights 300, 400, 500, 600, 700; sizes 11–31px (11 values); line-height 1.20–1.60; tracking -0.01em to 0.05em context-dependent. Body, UI labels, navigation, sub-headlines.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 11px | 1.4 | 0.05px |
| body | 16px | 1.5 | -0.001px |
| subheading | 20px | 1.4 | -0.01px |
| heading-sm | 22px | 1.3 | -0.02px |
| heading | 31px | 1.2 | -0.032px |
| display | 77px | 1 | -0.04px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 56, 60, 84px.
- Radius: small 12px, cards 20px, icons 50px, buttons 100px, tags 999px.
- Elevation: Dark Product Showcase Card `0 0 0 1px rgba(24,22,26,0.04)` (border only). Cards defined by 1px tinted borders, not shadows.

## Layout
- Max-width 1200px; section gap 80px; card padding 20px; element gap 20px.
- Hero: two-column (left: eyebrow, display headline, sub-copy, rating, CTA; right: Midnight Surface card with live data).
- Below: full-bleed dark testimonial ticker, G2 badge row. Feature sections alternate light/tinted backgrounds, each with left screenshot + right text. Nav: sticky top bar (logo left, links center, actions right).

## Components
- **Primary Filled Button:** #4823ff, #ffffff text (Inter 600, 15–16px), padding 10px 22px, 100px radius, no border/shadow.
- **Outlined Action Button:** transparent, 1.5px #4823ff border, #4823ff text (Inter 600, 15–16px), padding 10px 22px, 100px radius.
- **Ghost Text Link:** no bg/border, Inter 500 15–16px, #4823ff, arrow character, underline on hover.
- **Promotional Banner Bar:** full-width #e7ff6e, centered Inter 500 text #18161a, close button, ~40px height.
- **Feature Card (Light):** #ffffff, 1px #d9d2ff border, 20px radius, 20px padding, two-column (screenshot + text).
- **Dark Product Showcase Card:** #1e1b22, 20px radius, 20px padding, colored avatar tiles (32px circular, 2-letter initials white), progress bars in #e7ff6e/#7e78ff.
- **Testimonial Card:** #ffffff, 1px #ede9ff border or none, 20px radius, 20px padding; quote Inter 400, circular avatar, name Inter 600, title Inter 400 #898b91.
- **Navigation Bar:** transparent, logo left, links Inter 500, right: Login link + outlined button + filled button, sticky on scroll.
- **Section Eyebrow Label:** Inter 700, 11–13px, tracking 0.05em, uppercase, #4823ff or #18161a.
- **G2 Badge/Award Tile:** ~80×80px, white, 1px #ede9ff border, 12px radius.
- **Rating Display:** Inter 500 numeric (e.g. 4.8/5) #18161a, 5 star icons, review count caption Inter 400 #898b91.
- **Play Button Overlay:** circular 60px, bg #ede9ff, #4823ff play triangle, on thumbnail.
- **Avatar Tile:** circular 32–40px, white 2-letter initials (Inter 600), colored bg (violet/blue/orange/green palette).
- **Pill Tag/Badge:** tinted bg (Lilac Wash/Powder Blue/Chartreuse), matching text, Inter 600 12–13px, 999px radius, 4px/12px padding.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Electric Violet #4823ff as the only filled button background.
- Round all cards to exactly 20px.
- 100px (full pill) radius for all buttons.
- Display headlines Plus Jakarta Sans 700 (63–77px, -0.04em to -0.032em).
- Chartreuse only on promotional banner and dark-card highlights.
- Define cards with 1px tinted borders (#d9d2ff or #ede9ff), not drop shadows.
- Inter 300 for sub-copy beneath display headlines.

Don't:
- No second primary action color.
- No chartreuse for body content, icons, or large fills.
- No display headlines in Inter.
- No drop shadows on cards.
- No rectangular or 8px-radius buttons.
- Don't place white cards on Bone Canvas without a border.
- Midnight Surface for no more than one section per page.

## Imagery
Product-UI-driven, not photography-driven: dark-themed product screenshots (cap table views, shareholder lists) embedded in light showcase cards; colored avatar tiles, chartreuse/violet progress bars, tabular data; small circular headshots in testimonials; purple play-button overlay for video. No lifestyle photography, illustration, or 3D renders.

## Steal this
- Dark Midnight product card (avatar tiles + chartreuse/violet progress bars) in the hero of an otherwise light page.
- Chartreuse used as a tiny "receipt" highlight (banner and card accents) against violet.
- Cards defined by tinted 1px violet borders instead of shadows.
- Heavy Plus Jakarta 700 display with -0.04em tracking over light Inter 300 sub-copy.
