---
name: Netflix
source: https://styles.refero.design/style/32959012-f50d-4465-bb01-2aa4d506e0a8
category: editorial
tags: [dark, pure-black, netflix-red, cinematic, carousels, gradient-depth, shadowless]
best_for: Streaming / media landing pages needing a cinematic black stage with one red action color and content-carousel layouts
---
# Netflix
> "The Infinite Digital Shelf. A cinematic experience where an endless library of content is presented against a pure black, theatrical backdrop." Netflix Red for logo and CTAs only, gradients instead of shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Netflix Red | #e50914 | Brand logo, primary CTAs, active indicators |
| Feature Card Gradient | linear-gradient(149deg, #192247, #210e17) | Secondary feature card backgrounds |
| Deep Space | #000000 | Primary page/section backgrounds |
| Graphite | #2d2d2d | Subtle background surfaces, component backgrounds |
| Charcoal | #414141 | Component backgrounds, inactive elements |
| Slate | #5a5a5a | Borders on inputs and interactive elements |
| Ash | #808080 | Placeholder text in input fields |
| Silver | #b3b3b3 | Footer links, secondary body copy |
| Chalk White | #ffffff | Primary headings, body text, icon fills |

## Typography
- **Netflix Sans** (fallbacks: Roboto, Inter) — weights 400, 500, 700, 900; sizes 10, 12, 13, 14, 16, 20, 24, 56, 100px; line-heights 1.0, 1.17, 1.2, 1.25, 1.5, 1.6.

| role | size | weight | line-height |
|---|---|---|---|
| Display | 100px | 400 | 1.2 |
| Heading | 56px | 900 | 1.25 |
| Heading-sm | 24px | 400 | 1.2 |
| Subheading | 20px | 500 | 1.2 |
| Body | 16px | 400 | 1.2 |
| 14px | 14px | 400 | 1.5 |
| Caption | 13px | 400 | 1.2 |
| 12px | 12px | 400 | 1.17 |

Letter-spacing: _not captured_

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 24, 32, 36, 64, 100, 128, 148px.
- Max-width 1280px; section gap 48px; card padding 24px; element gap 16px.
- Radius: cards 16px, inputs 4px, buttons 4px.
- Shadows: none (explicitly avoids box-shadows; depth via gradients).

## Layout
- Content carousels and card grids are the primary content display; max-width 1280px on pure black backgrounds.
- Header kept minimal.

## Components
1. **Hero CTA Button:** Netflix Red bg, Chalk White text, Netflix Sans 700 at 24px, 4px radius, 16px/24px padding.
2. **Header Sign-In Button:** Netflix Red bg, Chalk White text, Netflix Sans 500 at 14px, 4px radius, 4px/16px padding.
3. **Translucent Header Button:** rgba(0,0,0,0.4) bg, Chalk White text, 1px Ash (#808080) border, 4px radius, 6px/16px padding.
4. **Hero Email Input:** rgba(22,22,22,0.7) bg, 1px Slate (#5a5a5a) border, Chalk White text 16px, Ash placeholder, 4px radius, 20px/16px padding.
5. **Trending Poster Card:** vertical image container with overlaid number (Netflix Sans 900, ~100px) at bottom-left.
6. **Footer Link:** Silver (#b3b3b3) text, Netflix Sans 400 at 14px, no underline.
7. **Promotional Banner:** Graphite (#232323) bg, 8px radius, Chalk White text with link-style button.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Pure black (#000000) for all main backgrounds.
- Reserve Netflix Red exclusively for logo, primary CTAs, key moments.
- Netflix Sans for all typography.
- Content carousels and card grids as primary content display.
- Feature Card Gradient for depth instead of shadows.
- 4px rounding (buttons/inputs), 16px (cards).
- Chalk White (#ffffff) text on dark backgrounds.

Don't:
- No saturated colors other than Netflix Red.
- No box-shadows.
- No light/gray backgrounds.
- No outlined buttons; use solid fills.
- Don't clutter the header; keep it minimal.
- No multiple font families.
- No complex shapes.

## Steal this
- Oversized ranking numbers (Netflix Sans 900, ~100px) overlaid on vertical poster cards.
- Depth from a single navy-to-maroon diagonal gradient (149deg) on feature cards instead of shadows.
- Red reserved for logo, primary CTA, and key moments on a pure black stage.
- Translucent black header button with a 1px gray border next to the solid red one.
