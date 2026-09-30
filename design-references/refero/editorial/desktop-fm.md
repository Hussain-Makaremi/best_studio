---
name: Desktop.fm
source: https://styles.refero.design/style/cb266ff9-f168-4a42-a522-f0e84508f90f
category: editorial
tags: [light, achromatic-ui, 3d-hero, system-font, single-cta, teaser]
best_for: Minimal, object-focused product teasers / coming-soon pages with one 3D render and one CTA
---
# Desktop.fm
> Chrome disc in a laser grid — Apple keynote restraint meets cyberpunk CD-ROM nostalgia; achromatic UI, one 3D render carries all color, one black CTA.

## Color tokens
| token | hex | role |
|---|---|---|
| Canvas Mist | #f1f2f3 | Page background / hero stage |
| Carbon Black | #111111 | Text, icons, contrast; sole filled button bg |
| Pure White | #ffffff | App-window card surface, inverse text on dark button |
| Graphite | #2d2d2d | Secondary dark surfaces, icon strokes, traffic-light dots |
| Pale Stone | #dddddd | Hairline borders, dividers, secondary card bg |
| Silver Mist | #b4b4b4 | Muted bg, disabled, traffic-light dot |

## Typography
- **System UI** — `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`; fallback Inter (500/700/800) or SF Pro Display; weights 500, 700, 800; sizes 12, 16, 18, 28px; line-height 1.25 locked.
- **System mono** — `ui-monospace, 'SF Mono', Menlo, monospace`; fallback JetBrains Mono / IBM Plex Mono at 800; weight 800; 12px; 1.25. Stamped-serial-number labels.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 700 | 1.25 | normal |
| body-sm | 16px | 700 | 1.25 | -0.016em (-0.256px) |
| body | 18px | 500 | 1.25 | -0.016em (-0.288px) |
| heading | 28px | 800 | 1.25 | -0.036em (-1.008px) |

Rule: never below weight 500.

## Spacing, radius, elevation
- Density compact. Scale: 5, 8, 10, 20, 30px. Section gap 30px; card padding 10px; element gap 8px.
- Radius: default 1.5px; window-chrome 13px; buttons 20px; cards 25px. Binary: sharp or lozenge — nothing above 25px or below 1.5px.
- Elevation (app window card only): 0 1px 3px rgba(17,17,17,0.08), 0 4px 12px rgba(17,17,17,0.06).

## Layout
- Full-bleed single screen, no scroll sections, no max-width, no nav.
- Upper ~70%: hero render zone (disc ~60vh, centered); 30px gap; lower: centered app-window card (~200px wide, ~80px tall).
- No grid/columns, no bands.

## Components
- **App Window Card:** #ffffff on #f1f2f3, 25px radius, 10px padding; title bar with three traffic-light dots (#b4b4b4, #2d2d2d); 2px #dddddd separator; soft shadow; houses 28px/800 wordmark above CTA; no visible border.
- **Filled Primary Button:** #111111 bg, #ffffff 12px/800, 20px radius, 10px/20px padding, trailing › chevron 12px/800; no hover differentiation; the only CTA.
- **Traffic Light Controls:** three ~2px circles, #b4b4b4 (close) / #2d2d2d (min/max), 1.5px radius; decorative.
- **Brand Wordmark:** "Desktop.fm", 28px/800, #111111, -0.036em, 1.25, centered in card.
- **Hero Render Stage:** full-bleed, #f1f2f3; single 3D chrome disc with two thin neon-green diagonal laser lines; specular highlights (blue-white left, warm right), dark hub, slight tilt; ~60% viewport height; single rendered asset.
- **Chevron Glyph:** › 12px/800 #ffffff, 2–5px gap after label.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #111111 as the only filled button background (one CTA).
- Headlines 28px/800, -1.008px.
- 25px radius only for the window card, 20px for button, 1.5px elsewhere.
- Let the 3D render be the only color source.
- 30px margin between render and card.
- System font 700–800; never below 500.
- Line-height locked at 1.25.

Don't:
- Chromatic UI tokens.
- Radius above 25px or below 1.5px.
- Weights below 500.
- Multiple CTAs.
- Visible borders on the window card.
- A max-width container.
- Replacing the 3D render with illustration/gradient/flat graphic.

Similar: Apple launch pages, Arc browser, Nothing.tech, Rayo.fm.

## Steal this
- Achromatic UI + one rendered hero object that owns 100% of the color.
- Tiny macOS-window card as the CTA container (traffic lights signal "this is an app").
- Heavy system-font weights (700–800) with locked 1.25 leading for a stamped, mechanical feel.
- Binary radius system: near-sharp (1.5px) vs. lozenge (20–25px).
