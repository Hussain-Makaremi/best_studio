---
name: Calendly.com
source: https://styles.refero.design/style/9946887b-ffa9-4276-af81-ae6352795afb
category: clean-saas
tags: [light, navy-ink, single-accent, decorative-blobs, blue-tinted-shadows]
best_for: Scheduling / productivity SaaS with a product-screenshot-led marketing site
---
# Calendly.com
> Navy ink on cool marble — near-white canvas, crisp white product cards on cool stone-gray, deep navy text, one vivid blue for actions, pink/cyan blobs for warmth.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink Navy | #0b3558 | Primary text, headings, icons, dark CTA bg |
| Signal Blue | #006bff | Primary CTA fill, active states, link accents |
| Coral Magenta | #e55cff | Decorative blob (atmospheric only) |
| Sky Cyan | #0099ff | Decorative blob, pairs with magenta |
| Deep Cobalt | #004eba | Badge text on light fills, info labels |
| Carbon | #0a0a0a | Pure-black fallback, logos |
| Slate Gray | #476788 | Secondary body copy, helper text |
| Mist Gray | #a6bbd1 | Disabled text, inactive labels, trust logos |
| Hairline | #d4e0ed | Borders, dividers |
| Pebble | #f0f3f8 | Badge bg, input fills, hover washes |
| Cloud | #f8f9fb | Page canvas, footer bg |
| Paper | #ffffff | Card surfaces, elevated panels |
| (badge bg) | #e6f0ff | Pill badge background |

Surfaces: 0 Canvas #f8f9fb → 1 Card #ffffff → 2 Input Fill #f0f3f8 → 3 Dark Surface #0b3558 → 4 Accent Surface #006bff.

## Typography
- **Gilroy** (geometric humanist; fallback Manrope) — weights 400/500/600/700; base 16px, 1.2 minor third. All letter-spacing normal; line heights 1.0–1.71.

| role | size | weight | line-height |
|---|---|---|---|
| Display | 80px | 700 | 1.2 |
| Heading-lg | 68px | 700 | 1.2 |
| Heading | 50px | 700 | 1.2 |
| Heading-sm | 38px | 700 | 1.21 |
| Subheading | 28px | 600 | 1.4 |
| Body-lg | 20px | 500 | 1.4 |
| Button | 18px | 600 | 1.6 |
| Body | 16px | 400 | 1.0 |
| Body-sm | 14px | 500 | 1.4 |
| Caption | 12px | — | 1.5 |

## Spacing, radius, elevation
- Base 8px; comfortable. Scale: 8, 16, 24, 32, 40, 48, 56, 64, 72, 96px.
- Radius: small 4px, inputs/buttons 8px, product cards 16px, cards 24px, badges 9999px.
- Shadow (blue-tinted three-layer stack): rgba(71,103,136,0.04) 0px 4px 5px, rgba(71,103,136,0.03) 0px 8px 15px, rgba(71,103,136,0.08) 0px 30px 50px. Variants sm / sm-2 / sm-3 vary the third layer 0.05–0.08 opacity.

## Layout
- Max-width 1200px centered; section gap 48–64px; card padding 24px; element gap 8–16px; 64px sticky top nav.
- Every product card sits in front of a soft, offset (20–40px), blurred magenta or cyan blob — editorial collage effect. Icons line-style 1.5–2px stroke in navy or blue. No photography.

## Components
- **Primary CTA:** #006bff, #ffffff 18px/600, padding 6–10px × 16px, 8px radius, no border.
- **Dark CTA:** #0b3558, #ffffff 18px/600, 8px radius.
- **Ghost Text Link:** #0b3558 14–18px/500–600, no bg/border/padding; optional hover underline.
- **Outlined White Button:** white text, 1px solid white border, 4px radius (dark/image backgrounds).
- **Social Sign-In Button:** full-width, 12px × 16px, 8px radius. Google: white bg, navy text, Hairline border. Microsoft: navy bg, white text, no border.
- **Elevated Product Card:** #ffffff, 16px radius, padding 0, three-layer shadow, in front of decorative blob.
- **Feature Accordion:** active 18–20px/600 navy with Signal Blue icon; inactive 16px/400 Mist Gray; 1px Hairline divider.
- **Pill Badge:** #e6f0ff bg, #004eba 12px/500, 50px radius, 4px × 8px.
- **Trust Logo Strip:** monochrome logos in #a6bbd1, single row, no card/border.
- **Booking Widget Card:** #ffffff, 16px radius, padding 0; three columns (organizer info, date grid with #006bff active highlight, time slots).
- **Section Header Block:** H2 50–68px/700 navy centered; subtext 16px/400 Slate Gray max ~640px; optional CTA.
- **Footer:** #f8f9fb, 40px horizontal padding; headings 12px/600 uppercase Slate Gray; links 14px/500 navy.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Ink Navy for all text; never #000000.
- Signal Blue exclusively for filled primary CTAs.
- Card radius 16px (products) or 24px (feature panels).
- Blue-tinted three-layer shadow on elevated surfaces.
- Gilroy 700 at 50–80px for headlines.
- Every product visual in front of a decorative blob (offset 20–40px).
- 8px button radius — not 4px or pill.

Don't:
- #000000 text; neutral black shadows.
- Magenta/cyan blobs as functional fills.
- Button radius outside 4–12px.
- H2 below 38px or H3 below 24px.
- Deep Cobalt for CTAs (reads informational).
- Background gradients.
- Signal Blue and Ink Navy CTAs close together.

## Steal this
- Blurred, offset color blobs behind product cards — warmth without cluttering the UI palette.
- Navy as the "black": all text, icons and the dark CTA share one brand ink.
- Slate-blue-tinted three-layer shadow stack (rgba(71,103,136,…)).
- Product widget cards with zero padding so the real UI is the card.
