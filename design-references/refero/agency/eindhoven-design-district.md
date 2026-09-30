---
name: Eindhoven Design District
source: https://styles.refero.design/style/c90b584e-de5b-4971-9e13-8ab991bd96c0
category: agency
tags: [light, monochrome, brutalist, helvetica, red-labels, photo-led]
best_for: Editorial/cultural platforms and design-district style sites — oversized Helvetica plus documentary photography
---
# Eindhoven Design District
> Editorial brutalism on white paper.

Near-monochromatic interface where oversized HelveticaNow typography and documentary photography drive the aesthetic. Absolute restraint: flat components, hairline borders, zero shadows, and a single red accent reserved exclusively for content labels. Black-on-white is 95% of the visual language.

## Color tokens
| token | hex | role |
|---|---|---|
| Charcoal Ink | #000000 | Text, borders, icon strokes, structural lines |
| Paper White | #ffffff | Page canvas, card surfaces, button fills |
| Newsprint Gray | #e8e8e8 | Section backgrounds, quiet tonal shifts |
| Pewter | #bfbfbf | Muted helper text, secondary dividers |
| Signal Red | #ff0000 | Editorial category labels only (never UI chrome) |

## Typography
- **HelveticaNow** — sole typeface, weights 400, 600. Fallback: Helvetica Neue, Inter, Neue Haas Grotesk.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| Display | 150px | 400 | 0.93 | -7.5px |
| Heading-lg | 50px | 400 | 1.0 | -1.5px |
| Heading | 46px | 400 | 1.0 | -1.38px |
| Heading-sm | 35px | 400 | 1.15 | -0.7px |
| Subheading | 23px | 400 | 1.2 | -0.39px |
| Body | 18px | 400 | 1.31 | -0.07px |
| Body-sm | 16px | 400 | 1.4 | 0.08px |
| Caption | 14px | 400 | 1.4 | 0.21px |

Key rule: display uses weight 400 exclusively. Weight 600 reserved for card titles (19px), button labels and structural emphasis at small sizes.

## Spacing, radius, elevation
- Spacing: 8, 10, 12, 15, 16, 18, 19, 20, 21, 25, 27, 30, 35, 40, 50, 100px.
- Section gap 80px · card padding 20px · element gap 20px.
- Radius: only 0px (cards, inputs) and 500px (pill buttons, tags, language selector).
- Elevation: intentionally shadowless; separation via spacing, tonal contrast (#ffffff vs #e8e8e8) and vertical rhythm.

## Layout
- Max-width 1200px.
- Sections separated by 80px+ space and white → gray background shifts (no visible divider lines).

## Components
- **Pill Ghost Button** — 1px solid #000000, 500px radius, #ffffff fill, #000000 text 16px 400, padding 10–16px.
- **Pill Filled Button** — #000000 fill, #ffffff text, 500px radius, no border.
- **Display Headline** — 150px+ HelveticaNow 400, #000000, lh 0.93, -0.05em; can rotate 90° for architectural compositions.
- **Navigation Bar** — top-only (non-sticky), white bg; logo left (14px 400); language selector, search icon and menu pill right.
- **Article Card** — full-bleed photo top (no border/radius/shadow), red 14px label, title 19px 600, excerpt 16px 400 truncated to 3 lines; no card padding or borders.
- **Section Divider** — no visible line; 80px+ space and white → gray background shift.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Weight 400 for all display text above 50px.
- 500px radius on buttons, tags, language selectors.
- Black / white / #e8e8e8 trichromatic discipline.
- #ff0000 only for editorial content labels.
- Alternate section backgrounds for rhythm without ornament.
- Photos as raw rectangular crops with no frames.

**Don't**
- No weight 600 for display above 50px.
- No drop shadows, gradients, glass.
- No second action color.
- No radius other than 0px or 500px.
- No line-height above 1.0 for display.
- Never separate photographs from typographic composition.
- Never use red for interactive states or focus rings.

Imagery: documentary/editorial — architecture, people at work, in-situ objects; full-saturation natural color, no filters or overlays; rectangular crops at varying scales, often overlapping type boundaries.

## Steal this
- Red reserved purely for content taxonomy labels, never for interaction — color = meaning, not action.
- Rotated 90° display type as an architectural compositional device.
- Section separation by white/#e8e8e8 background alternation instead of rules.
- Article card with zero chrome: photo, red label, 600 title, 3-line excerpt.
