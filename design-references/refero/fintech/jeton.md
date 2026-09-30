---
name: Jeton
source: https://styles.refero.design/style/1f32d914-6fdd-4692-b4fc-fcee2c414766
category: fintech
tags: [light, editorial, signal-orange, huge-display-type, warm-tints, single-typeface]
best_for: Payments / wallet brands wanting oversized editorial display type and one hot orange voice with warm tinted surfaces
---
# Jeton
> "Editorial fintech on warm marble." Sequel Sans as the sole voice, Signal Orange as the sole chromatic voice, 72–155px display at 0.9–1.0 line-height, warm-tinted surfaces with #360802 ink.

## Color tokens
| token | hex | role |
|---|---|---|
| Signal Orange | #f73b20 | Brand accent for headings, links, icons, key emphasis; the sole chromatic voice; primary button fill |
| Brand Orange Tint | #f84d35 | Subtle orange surface variant for nav indicators |
| Ink Roast | #360802 | Primary body and input text |
| Paper White | #ffffff | Page canvas and card surfaces |
| Carbon Black | #000000 | Secondary text and utility icons |
| Ash Grey | #ababab | Disabled states and placeholder text |
| Sand Wash | #e7dcdb | Tinted neutral surface for section differentiation |
| Linen Blush | #fdedea | Ultra-light orange-tinted surface |
| Citrus Wash | #f5ffbb | Pale yellow-green surface tint |
| Mint Wash | #bcffbb | Green wash for highlights |
| Coral Red | #fb2d54 | Exchange/currency category accent |
| Cobalt Blue | #477ee9 | Send category accent |
| Emerald Green | #34c771 | Add/funding category accent |

Surfaces: 0 Canvas #ffffff → 1 Card Surface #ffffff (white cards with inverted shadow) → 2 Orange Tint #fdedea → 3 Frosted Glass #ffffff1a (translucent overlay panels) → 4 Category Tint #f73b200d (brand-tinted feature cards).

## Typography
- **Sequel Sans** (custom geometric grotesque) — weights 400, 450, 500; sizes 12, 14, 16, 23, 33, 44, 72, 106, 110, 155px; line-height 0.90 / 1.00 / 1.20 / 1.25 / 1.40 / 1.50; tracking 0.01em (display/heading 72–155px), 0.03em (small text 12–14px). Fallback: Inter, Manrope, or DM Sans.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.5 | 0.36px |
| body-sm | 14px | 1.4 | 0.42px |
| body | 16px | 1.0 | — |
| subheading | 23px | 1.2 | 0.23px |
| heading-sm | 33px | 1.2 | 0.33px |
| heading | 44px | 1.2 | 0.44px |
| heading-lg | 72px | 1.0 | 0.72px |
| display | 106px | 1.0 | — |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 48, 56, 160px.
- Radius: nav 84px, cards 16px, links 8px, buttons 12px, inputs 16px, pills 9999px.
- Shadows:
  - md (inverted lift): rgba(0,0,0,0.05) 0 -4px 16px 0
  - lg: rgba(247,59,32,0.1) 0 8px 24px 0, rgba(247,59,32,0.05) 0 2px 8px 0

## Layout
- Max-width 1200px; section gap 80px; card padding 16px; element gap 8px.
- Canvas #ffffff; sections separated by whitespace alone. Restrained, spacious, editorial rhythm over dense SaaS. Hierarchy from size and tight line-height, not boldness.
- Top navigation: white/transparent with backdrop blur, 14–16px weight 400–450, right-aligned toggle and pill button.

## Components
1. **Primary Pill Button:** #f73b20 fill, white text, 12px radius, 8px v / 16px h padding, 14px weight 450, tracking 0.03em.
2. **Ghost Text Link:** no bg, #f73b20 text, 8px radius, 8px padding, inline arrow.
3. **White Ghost Button:** transparent, #ffffff text, 1px white border, 84px radius, 16px h padding.
4. **Outline Brand Button:** transparent, #f73b20 text, 1px border, no radius, underlined text.
5. **Utility Icon Button:** transparent, #000000 text, 16px radius, 12px padding.
6. **Frosted Glass Card:** rgba(255,255,255,0.1) bg, 16px radius, 16px padding, backdrop-filter blur(20–40px).
7. **Feature Category Card:** pastel bg rgba(247,59,32,0.05), 16px radius, variable padding, colored icon.
8. **Floating Input Field:** rgba(247,59,32,0.05) bg, #360802 text, 16px radius, 17.6px top / 6.4px bottom / 48px left padding.
9. **Bordered Content Card:** white, 16px radius, 16px padding, inverted shadow rgba(0,0,0,0.05) 0 -4px 16px 0.
10. **Orange-Tinted Card:** rgba(247,59,32,0.05) bg, 16px radius.
11. **Scroll Indicator:** numbered list (01, 02, 03, 04), Sequel Sans small sizes.
12. **Top Navigation Bar:** see Layout.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Display headlines 72–155px with line-height 0.9–1.0 for editorial feel.
- #f73b20 as sole chromatic voice; other accents (blue, green, coral) only for category-coded cards.
- 16px radius on cards/inputs/containers; 9999px only for pill elements.
- Pair warm-tinted backgrounds with #360802 text.
- Inverted shadow pattern for card lift.
- 0.03em letter-spacing on small text and 0.01em on display sizes.
- Canvas #ffffff; separate sections via whitespace alone.

Don't:
- No secondary typeface; Sequel Sans is the sole voice.
- No weights 600+; system uses 400/450/500 only.
- No drop shadows on text or buttons; elevation via documented shadow tokens only.
- No #000000 for body text; use #360802.
- Don't multiply chromatic accents on the same card.
- No line-height above 1.2 on display sizes.
- No 0px radius on interactive surfaces; 8–16px minimum.

## Imagery
No lifestyle photography; visual language is abstract, geometric, editorial. Color appears sparingly.

## Steal this
- Enormous 106–155px display at 0.9–1.0 line-height with light 0.01em positive tracking.
- Ink Roast #360802 as body ink so warm-tinted surfaces stay tonal.
- Inverted (upward) soft shadow for card lift instead of the usual drop.
- Category-coded cards (coral / blue / green) confined to functional categories so orange stays the brand voice.
