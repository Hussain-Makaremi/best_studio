---
name: MasterClass
source: https://styles.refero.design/style/4367b4cd-b002-4719-a418-cbce020f0d33
category: editorial
tags: [dark, magenta-action, editorial-gold, condensed-display, portrait-photography, inset-hairlines, premium]
best_for: Premium learning / media platforms wanting a theatrical dark stage, condensed display headlines, and portrait-driven cards
---
# MasterClass
> "black-box stage lit by magenta spotlights." Charcoal canvas, Sohne Schmal condensed headlines at 0.85 line-height, Magenta Spotlight for the one key action, Editorial Gold for category pills, inset hairlines instead of shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #222326 | Page canvas and primary background; the stage floor |
| Carbon | #0d0d0e | Elevated surface for secondary panels and the sticky bottom promotional bar |
| Charcoal Plate | #272c33 | Card surfaces and raised containers |
| Slate Body | #191c21 | Nested surface for body blocks and form panels within cards |
| Bone White | #f4f4f5 | Secondary text, hairline borders, inactive outlines on dark surfaces |
| Ash Mute | #9ea0a9 | Muted helper text, icon strokes, low-emphasis dividers |
| Smoke | #43454c | Inactive button fills and dormant control surfaces |
| Paper | #ffffff | Primary text, icon fills, high-contrast borders |
| Magenta Spotlight | #e32652 | Primary action buttons, active states, key interactive accents |
| Editorial Gold | #eed37f | Decorative category pill borders, subtle brand warmth, section highlights |
| Neon Volt | #dcff00 | Green action color for filled buttons, selected navigation states, focused conversion moments (per Don'ts: accent only, e.g. "New" badge) |

Surfaces: 1 Obsidian Canvas #222326 (base background) → 2 Carbon Panel #0d0d0e (elevated bars, footers) → 3 Slate Body #191c21 (nested blocks) → 4 Charcoal Plate #272c33 (cards, interactive surfaces).

## Typography
- **Sohne** (primary UI & body) — weights 400, 600; sizes 8–48px (9 values); line-height 1.00–2.50; tracking 0.0100em–0.0390em. Fallback: Inter. Navigation, buttons, forms, body copy, card titles, subheadings up to 32px.
- **Sohne Schmal** (hero & display) — weight 500; sizes 64px, 80px; line-height 0.85–0.90; tracking -0.0100em to 0.0100em. Fallback: Inter Tight or Oswald. Hero and display headlines with dramatic vertical compression.
- **Ivar Display Condensed** (editorial) — weight 400; 64px; line-height 1.10; tracking 0.0050em. Fallback: Playfair Display Condensed. Alternative display face for editorial sub-headlines and class-section titles.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.5 | 0.012px |
| body-sm | 14px | 1.45 | 0.01px |
| body | 16px | 1.5 | 0.01px |
| subheading | 20px | 1.33 | 0.02px |
| heading-sm | 24px | 1.25 | 0.023px |
| heading | 32px | 1.25 | 0.027px |
| heading-lg | 48px | 1.1 | 0.039px |
| display | 80px | 0.85 | -0.8px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 112px.
- Max width 1280px; section gap 64–80px; card padding 16–24px; element gap 12–16px.
- Radius: inputs 4px, buttons 8px (default) or 48px (pill), cards 12px, images 12px, tags 20px, badges 20px.
- Shadows (inset hairlines only):
  - subtle: rgb(148,154,164) 0 0 0 2px inset
  - subtle-2: rgb(39,44,51) 0 0 0 1px inset
  - subtle-3: rgb(67,69,76) 0 0 0 2px inset
  - subtle-4: rgb(148,154,164) 0 0 0 1px inset

## Layout
- Max width 1280px; 64–80px vertical gaps between major sections.
- Class Hero Block: 16:9 landscape photo background, Sohne Schmal 48px white headline, Sohne 400 16px #f4f4f5 subhead, outlined "Watch Trailer" button, 12px radius.
- Instructor Portrait Card: 2×2 grid hero / 1:1 ratio carousel.
- Sticky Bottom Promo Bar: fixed bottom.

## Components
- **Magenta Primary Button:** #e32652 fill, #ffffff text, Sohne 600 at 16px, 24px horizontal / 12px vertical padding, 8px radius, no border/shadow.
- **Ghost Outline Button:** transparent, 1px #ffffff border, white text, Sohne 600 at 16px, 12px/24px padding, 8px radius.
- **Category Pill Button:** transparent, 1px #eed37f border, #eed37f text, Sohne 400 at 14px, 8px/16px padding, 20px radius.
- **Onboarding Checkbox Card:** #191c21 bg, 1px #f4f4f5 border (~20% opacity), 8px radius, 16px/20px padding, 8×8 checkbox.
- **Instructor Portrait Card:** full-bleed photo, 12px radius, no border/shadow.
- **Membership Feature Row:** small #eed37f icon left, Sohne 400 at 16px #f4f4f5 text, no card background, 16px row gap.
- **Class Hero Block:** see Layout.
- **Sticky Bottom Promo Bar:** fixed bottom, #0d0d0e fill, 80px height, 5 circular 32px avatars left, Sohne 600 16px white headline center, 12px #9ea0a9 subhead, magenta CTA right-aligned.
- **Navigation Bar:** top-fixed, transparent, Sohne 14px #f4f4f5 links left, centered white logo, utility links + magenta CTA right.
- **Search Input:** #0d0d0e fill, 1px #9ea0a9 border, 4px radius, 10px/16px padding, Sohne 400 14px placeholder, left magnifying icon, ~320px width.
- **Class Thumbnail Card:** portrait image 12px radius, Sohne 600 16px white title below, Sohne 400 14px #9ea0a9 instructor name, optional #dcff00 "New" badge top-right (20px radius).
- **Video Player Surface:** 16:9 frame, #000000 bg, centered white play circle with magenta triangle, 12px radius.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #e32652 exclusively for the single most important action on any screen.
- Hero and section headlines in Sohne Schmal at 64–80px with line-height 0.85–0.90.
- Define surfaces with 1px inset hairline borders; never drop shadows.
- 12px border-radius on all images and media cards.
- #eed37f for category pills, decorative icons, and section accents.
- 64–80px vertical gaps between major sections.
- Body copy in Sohne weight 400 at 16px with 1.50 line-height.
- Pair every primary magenta CTA with at most one ghost outline secondary.

Don't:
- No drop shadows.
- No #dcff00 for large areas or buttons; accent only.
- No radii above 12px for cards/images.
- No body text below 14px or headlines below 32px.
- No new accent colors outside the magenta-gold-volt triad.
- Don't use Sohne Schmal for body copy/labels (legibility below 48px is destroyed).
- No light/white backgrounds anywhere.
- Borders maximum 2px.

## Steal this
- Magenta-gold-volt triad: one action color, one decorative gold outline, one tiny "New" volt badge.
- Compressed condensed display at 0.85 line-height for theatrical hero headlines.
- Surface definition through inset 1–2px hairlines in stepped grays.
- Sticky bottom promo bar with a stack of circular instructor avatars and a magenta CTA.
