---
name: Spotify
source: https://styles.refero.design/style/1514a95f-878c-4d4d-bb14-99d1b83f6227
category: editorial
tags: [dark, near-black, compact, spotify-green, pill-buttons, app-shell, artwork-led]
best_for: Media / music app UIs and web players: dense dark app shell with sidebar, carousels, square and circular art cards
---
# Spotify
> "Nocturnal jukebox control room." Void Black canvas with #121212 panels and #1f1f1f cards, compact 4px-based density, white pill buttons, green reserved for play buttons and active states.

## Color tokens
| token | hex | role |
|---|---|---|
| Spotify Green | #1ed760 | Green supporting accent for decorative details and low-frequency emphasis; play buttons and active states; not the primary CTA color |
| Signal Red | #b85850 | Red supporting accent for decorative details and low-frequency emphasis; not a status color |
| Void Black | #000000 | Page canvas, top nav background, deepest surface layer |
| Carbon | #121212 | Card surfaces, sidebar panels, secondary surface layer above canvas |
| Graphite | #1f1f1f | Elevated surface: hover states, input fields, selected nav items |
| Smoke | #292929 | Active navigation background, subtle highlight wash |
| Iron | #333333 | Input borders, subtle dividers between surface layers |
| Steel | #535353 | Muted UI elements, secondary borders |
| Fog | #73777c | Muted text, secondary icon fills, inactive nav icons |
| Mist | #b3b3b3 | Secondary text, metadata, artist names, timestamps |
| Bone | #c5c5c5 | Input placeholder text, subtle captions |
| Pure White | #ffffff | Light supporting surface for subtle backgrounds and section separation; filled button bg |
| Promo Gradient | linear-gradient(90deg, rgb(175,40,150), rgb(80,155,245)) | Sign-up banner gradient endpoint |
| Magenta Glow | linear-gradient(90deg, rgb(175,40,150), rgb(80,155,245)) | Promotional banner gradient start; pink-to-blue sweep for marketing CTAs |

Surfaces: 1 Canvas #000000 (page background, top nav) → 2 Sidebar #121212 (left library panel, main content wrapper) → 3 Card #1f1f1f (content cards, input fields) → 4 Card Hover #292929.

## Typography
- **SpotifyMixUI** (body) — weights 400, 600, 700; sizes 11–16px; line-height 1.20, 1.33, 1.50. Fallback: Inter, system-ui, -apple-system, sans-serif.
- **SpotifyMixUITitle** (display) — weight 700; 24px; line-height 1.20. Fallback: Inter weight 700, system-ui bold.

Scale (from 16px base, Minor Second 1.067):
| role | size / line-height |
|---|---|
| Caption | 11px / 1.2 |
| Body Small | 12px / 1.2 |
| Body | 13px / 1.2 |
| Body Large | 14px / 1.2 |
| Body Regular | 16px / 1.2 |
| Heading | 24px / 1.2 |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 172px.
- Section gap 32–48px; card padding 12px; element gap 8–12px.
- Radius: small 2px, cards 6px, images 6px, inputs 500px, avatars 500px, buttons 9999px.
- Shadows:
  - Large: rgba(0,0,0,0.5) 0 8px 24px 0
  - Subtle: rgb(18,18,18) 0 1px 0 0, rgb(124,124,124) 0 0 0 1px inset

## Layout
- Structure: fixed two-column shell (340px sidebar + fluid main).
- Top bar: full-width 64px black strip.
- Main content: vertical scroll with horizontal card carousels.
- Geometry rhythm: alternating square (6px radius) and circular (500px radius) cards.
- Bottom banner: sticky/fixed promotional gradient bar at the viewport floor.

## Components
1. **Pill Button (Filled White):** 9999px radius, #ffffff bg, black text, SpotifyMixUI 14px/700, 8px vertical / 12px horizontal padding.
2. **Ghost Text Button:** no bg/border, white or mist text, SpotifyMixUI 14px/700, 12–16px padding.
3. **Square Album Card:** 6px radius, title 14px/600 white, artist 14px/400 mist, 12px padding, #121212 bg, #1f1f1f hover.
4. **Circular Artist Card:** full circle (500px), artist name 14px/600, 'Artist' label 12px mist, no card background.
5. **Sidebar Panel:** #121212 bg, 6px top-left/right radius, internal cards #1f1f1f 6px radius 12px padding.
6. **Top Navigation Bar:** #000000 bg, 8px vertical padding, search input 36px tall, #1f1f1f fill, 500px radius.
7. **Section Header:** SpotifyMixUITitle 24px/700 white, 24px gap to content below.
8. **Promotional Banner:** full-width sticky bottom, gradient bg, white headline/body, white pill button, 16px padding.
9. **Search Input:** #1f1f1f bg, 500px radius, white icon/placeholder, 12px horizontal / 8px vertical padding.
10. **Navigation Arrow Button:** #000000 or transparent bg, 9999px radius, white chevron, 32px diameter.
11. **Language Selector:** white globe icon, 'English' text, 9999px pill border on hover.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #121212 as default card/sidebar surface, #000000 as canvas.
- 6px radius for content cards and images.
- 9999px radius for interactive buttons and tags.
- 500px radius for inputs (soft pill shape).
- #1ed760 exclusively for play buttons and active states.
- SpotifyMixUI 14px/700 for section headings and button labels.
- #b3b3b3 for secondary text (artist names, metadata, timestamps).

Don't:
- No heavy drop shadows; elevation from surface color shifts only.
- No accent colors outside #1ed760 and the promo gradient.
- Don't mix border-radius families; keep 6px / 9999px / 500px.
- No light backgrounds or white surfaces in the core interface.
- No typography larger than 24px for headings.
- No colored buttons on dark surfaces.
- No decorative borders or outlines on cards.

## Imagery
Album artwork and artist photography are the primary visual content. Covers are tight square crops (1:1) at 6px radius, artist photos are circular crops emphasizing the face. No decorative photography, lifestyle imagery, or abstract graphics in the core interface.

## Steal this
- Alternating square (6px) and circular (500px) cards as the visual rhythm of a shelf.
- White pill as the only filled button; green only on play and active states.
- Four-step near-black surface ladder (#000 / #121212 / #1f1f1f / #292929) for elevation.
- Sticky bottom gradient promo bar with a white pill CTA.
