---
name: Changelog
source: https://styles.refero.design/style/a5cc9b0f-d274-458a-b990-d18482b70838
category: productivity
tags: [dark, near-black, monochrome, inter-variable, compact, hairline-borders, outlined-pill-buttons, flat, developer-tool]
best_for: Changelog / docs / product-update pages in a machined dark UI style: stacked gray surfaces, hairline borders, weight 510/590 Inter
---
# Changelog
> "Observatory console behind dark glass." Note: the page content is headed "Linear (Changelog)". Onyx Canvas #08090a, Snow #f7f8f8 as the only near-white, Inter Variable at weights 510/590, outlined pill buttons only, depth from five stacked gray surfaces and hairlines.

## Color tokens
| token | hex | role |
|---|---|---|
| Void | #030404 | Deepest recess, box-shadow tint, absolute dark accent |
| Onyx Canvas | #08090a | Page background, primary surface |
| Carbon Surface | #141516 | Elevated card, input field, subtle surface layer |
| Graphite Surface | #1c1c1f | Mid-elevation panels, nested surfaces |
| Smoke Surface | #23252a | Hover state, deeper card, button surface tone |
| Iron Surface | #2d2e31 | Pressed/active surface, highest tier elevation |
| Ash Border | #34343a | Primary hairline border: dividers, table rows, list separators |
| Ferrite Border | #3e3e44 | Inner shadow stroke, focus-adjacent borders, subtle 1px outlines |
| Steel Text | #62666d | Tertiary text, icon muted state, low-emphasis helper text |
| Pewter Text | #7f7f80 | Disabled text, placeholder-tier secondary content |
| Fog Text | #8a8f98 | Muted body text, metadata, timestamps, nav sub-items |
| Mist Text | #d0d6e0 | Secondary text, descriptions, list body, paragraph fallback |
| Chalk Border | #e4e5e9 | Light icon accent, rare light-tone dividers |
| Snow | #f7f8f8 | Primary text, headings, logo, pill button border; the only near-white |

## Typography
- **Inter Variable** — weights 400, 500, 510, 590; sizes 12–48px (9 values); line-height 1.13–2.86; tracking -0.010em to -0.022em (scaling with size); OpenType features "cv01", "ss03", "ss01". Fallback: Inter (Google Fonts) or system-ui. All UI: body, nav, headings, buttons, icons, links, footer.
- **Berkeley Mono** — weights 400, 590; sizes 15px, 21px; line-height 1.30; tracking -0.014em. Fallback: JetBrains Mono or IBM Plex Mono. Inline code references, command examples, technical callouts.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.6 | -0.12px |
| body | 15px | 400 | 1.5 | -0.15px |
| heading-sm | 24px | 590 | 1.33 | -0.288px |
| heading | 32px | 510 | 1.2 | -0.416px |
| display | 48px | 510 | 1.13 | -1.056px |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 48, 56, 80px.
- Max-width 1080px; section gap 48px; card padding 16px; element gap 8px.
- Radius: nav 9999px, tags 4px, inputs 4px, icons 4.4625px, cards 8px, buttons 9999px.
- Shadows:
  - subtle: rgb(62,62,68) 0 0 0 1px
  - subtle-2: rgba(0,0,0,0.01) 0 5px 2px 0, rgba(0,0,0,0.04) 0 3px 2px 0, rgba(0,0,0,0.07) 0 1px 1px 0, rgba(0,0,0,0.08) 0 0 1px 0
  - subtle-3: rgba(255,255,255,0.03) 0 0 0 1px inset, rgba(255,255,255,0.04) 0 1px 0 0 inset, rgba(0,0,0,0.6) 0 0 0 1px, rgba(0,0,0,0.1) 0 4px 4px 0
- Elevation model: avoids drop shadows; depth via (1) stacked gray surfaces (5 levels), (2) 1px hairline borders (#23252a–#34343a), (3) rare inner-stroke pattern (rgba(255,255,255,0.03) inset).

## Layout
- Max-width 1080px; section gap 48px; card padding 16px; element gap 8px.
- Body Paragraph max-width ~640px.
- App Connector Icon Grid: 3-row grid, ~64px tiles, 16px gap.

## Components
- **Top Navigation Bar:** sticky header, full-bleed #08090a, 1px bottom border #23252a, ~56px height; logo left (#f7f8f8); nav links (Product, Resources, Customers, Pricing, Now, Contact) right-aligned in #8a8f98 weight 510; vertical separator + ghost Login + outlined Sign Up pill.
- **Outlined Pill Button:** 9999px radius, 1px solid #f7f8f8 border, transparent bg, 14px weight 510 in #f7f8f8, padding 8px/16px; no fill, no shadow.
- **Ghost Text Button:** no border/bg, 14px weight 510, color #8a8f98; hover transitions text to #f7f8f8; 8px horizontal padding.
- **Search Input:** #141516 bg, 1px border #23252a, 4px radius, ~32px height, 8px/12px padding; placeholder "Search..." #8a8f98; magnifying glass icon left; focus: border shifts to #34343a.
- **Section Tab Nav:** horizontal row; active tab #f7f8f8 weight 510, inactive #8a8f98, 14px, 16px gap, no underline.
- **Date Marker:** 6px dot (warm accent) + date text 13px/400 #8a8f98, left-aligned.
- **Changelog Entry Heading:** 24–32px weight 510, #f7f8f8, tracking -0.012em to -0.013em; hash anchor icon (#8a8f98) appears on hover.
- **App Connector Icon Grid:** 3-row grid, ~64px tiles, 8px radius, bg #1c1c1f, 1px border #23252a, white glyphs centered, 16px gap.
- **Inline Product Reference List:** unordered list, 6–8px row gap, 4px left padding, bullet #62666d, body 15px/400 #d0d6e0; product names bolded to weight 590 in #f7f8f8 (no underline).
- **Command Reference Card:** #1c1c1f bg, 1px border #23252a, 4px radius, padding 12px/16px; Berkeley Mono 15px label #f7f8f8; optional icon cluster right in #8a8f98.
- **Sub-section Divider Heading:** 20–24px weight 510 #f7f8f8, 16px top margin; single-sentence preamble 15px/400 #d0d6e0.
- **Body Paragraph:** 15–16px/400, line-height 1.5–1.6, #d0d6e0, ~640px max-width; links weight 510 #f7f8f8, no underline (underline on hover).
- **Hash Anchor Link:** "#" icon, 16px, #8a8f98, 12px right of headings, appears on hover.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 9999px radius for action buttons, nav items, pill tags (signature geometry).
- Primary text/borders #f7f8f8 against #08090a.
- Inter Variable weight 510 (headings) / 590 (emphasis); avoid 600/700 bold.
- Negative letter-spacing: -0.010em body, scaling to -0.022em at 48px.
- Layer surfaces: #08090a → #141516 → #1c1c1f → #23252a → #2d2e31 (one step lighter each).
- 1px hairline borders #23252a or #34343a for dividers; never drop shadows.
- Berkeley Mono for code references/commands only.

Don't:
- No chromatic brand colors, accent fills, or gradient CTAs.
- No 600/700 bold for headings; voice is 510/590.
- No drop shadows on cards/panels; use gray surface shifts.
- No filled primary action buttons; outlined pills (#f7f8f8 border) only.
- Don't break the 4px base spacing rhythm (section gaps 48px, element gaps 6–8px).
- No rounded corners above 8px on cards/images (4–5px and 8px only; 9999px pill-only).
- No 600/700 bold for inline emphasis; use 590 or a color shift to #f7f8f8.

## Steal this
- Outlined-only pill buttons (1px #f7f8f8 border, no fill) on a near-black page.
- Inter Variable at the in-between weights 510 and 590 in place of 500/600/700.
- Five-step gray surface ladder plus 1px hairlines for all depth.
- Changelog entry pattern: 6px date dot, 24–32px heading with hover "#" anchor, 15px body capped at ~640px.
