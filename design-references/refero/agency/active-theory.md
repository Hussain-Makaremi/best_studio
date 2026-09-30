---
name: Active Theory
source: https://styles.refero.design/style/3416bd14-96bb-4c23-bd01-b2ea178ba5ce
category: agency
tags: [dark, immersive-webgl, glassmorphism, serif-body, single-accent, pill-buttons]
best_for: Immersive WebGL creative studios where the portfolio IS the rendered 3D experience and UI recedes
---
# Active Theory
> Cosmic void with a single luminous portal — deep-space command deck where chrome whispers and the rendered world shouts.

Prioritizes immersive 3D WebGL by reducing UI chrome to near-invisible. Canvas is pure black; UI floats as translucent ghost containers with hairline borders and pill controls. Typography splits between geometric sans (nbarchitekt) for navigation and editorial serif (Times) for body — craft over convention. Color rationed to a single muted violet accent (#343755) and white text, keeping the rendered scene the chromatic focus.

## Color tokens
| token | hex | role |
|---|---|---|
| Void Black `--color-void-black` | #000000 | Page canvas, immersive background, card surfaces on dark |
| Ghost White `--color-ghost-white` | #ffffff | Primary text, icon strokes, high-contrast labels |
| Ash Border `--color-ash-border` | #4d4d4d | Card borders, divider hairlines |
| Smoke `--color-smoke` | #808080 | Muted borders on ghost buttons, secondary chrome |
| Fog `--color-fog` | #999999 | Medium-contrast borders, control outlines, separators |
| Pale Mist `--color-pale-mist` | #c6c6c6 | Tertiary text, link default state, low-priority metadata |
| Dusk Violet `--color-dusk-violet` | #343755 | Primary action fill — filled pill buttons; only chromatic accent |

Surfaces: 0 Void Canvas #000000 (WebGL background) · 1 Translucent Overlay #00000080 (cookie banner, modals, tooltips) · 2 Dusk Violet Surface #343755 (filled pill CTA, selected) · 3 Frosted Glass #ffffff1a (ghost button fills).

## Typography
Scale: Major Second (1.125) from 16px base.
- **nbarchitekt** (primary UI) — weights 400, 700; sizes 10, 12, 14px; line-height 1.20, 1.50, 3.00; tracking normal. Fallback: Space Grotesk, Inter, clean geometric sans. Role: nav, button labels, micro-labels, link text.
- **Times** (body) — weight 400; 16px; line-height 1.20, 1.88; tracking normal. Fallback: Times New Roman, Georgia. Role: body copy, card descriptions, inline links — deliberate serif counterpoint.
- **Arial** (compliance) — weight 400; 13px; line-height 1.20. Role: cookie consent micro-copy.

| role | size | weight | line-height |
|---|---|---|---|
| caption | 10px | 400 | 1.5 |
| body-sm | 12px | 400 | 1.5 |
| body | 14px | 400 | 1.5 |

## Spacing, radius, elevation
- Density compact.
- Spacing: 4, 6, 12, 13, 14, 16, 18, 28px (`--spacing-*`).
- Section gap 48px · card padding 28px · element gap 6px.
- Radius: inputs 5px · ghost buttons 5px · cards 12px · tags 500px · pill buttons 500px.
- Elevation: no box-shadows. Stacked translucency + backdrop-filter blur(4px); cards/overlays use rgba(0,0,0,0.5) frosted glass.

## Layout
- Full-bleed immersive canvas, no max-width.
- Single viewport of rendered 3D space, not a scrolling document.
- Nav floats as ghost bar pinned top-right.
- Hero centered; aurora wash creates asymmetric balance.
- No visible grid; content density near zero. Translucent panels overlay the 3D canvas rather than replacing it.

## Components
- **Ghost Navigation Button** — transparent, 2px hairline border rgba(255,255,255,0.6), 5px radius, 1px / 6px padding, nbarchitekt 10–12px 400 uppercase white; flush top-right.
- **Pill Primary Button (Dusk Violet)** — #343755 fill, 500px radius, 4px / 18px padding, nbarchitekt 14px 700 black label; only saturated UI color, used sparingly.
- **Pill Primary Button (Void Black)** — #000000 at 0.333 opacity, 500px radius, 4px / 18px padding, nbarchitekt 14px 700 black text; tonal alternative.
- **Translucent Cookie Banner** — rgba(0,0,0,0.5) + backdrop-filter blur(4px), 12px radius, padding 16px top / 28px horizontal / 32px bottom, no shadow; Times 16px lh 1.88 white; links #c6c6c6.
- **Ghost Card Container** — transparent, 1px #4d4d4d border, 12px radius, 28px horizontal padding, no shadow.

## Motion
- Micro-interactions 0.2–0.4s ease-out.
- Scene-level transitions 0.8–9s ease or linear.
- Primary property: opacity (fade preferred over slide/scale).
- Default timing function `ease` (61 occurrences), not snappy cubic-beziers.
- Named ticker animation for sequential content reveals.
- Should feel gravitational and unhurried.

## Rules (do / don't)
**Do**
- Use #000000 only; no gray page backgrounds.
- Reserve #343755 for singular dominant CTAs.
- 500px radius on all pill controls.
- Body copy in Times 16px lh 1.88.
- 1px #4d4d4d borders to define cards; never shadows.
- backdrop-filter blur(4px) on overlay panels.
- nbarchitekt 10–12px for nav, 14px 700 for button labels.

**Don't**
- No chromatic accents beyond black, white, grays and one violet.
- No box-shadows.
- No solid white/gray card backgrounds; all surfaces translucent.
- No body text in nbarchitekt.
- No radius between 5px and 500px.
- No gradients on UI chrome; the 3D scene carries gradient richness.
- No light theme components; dark-first only.

Comparable: Resn, Unseen Studios, Tool of North America, Lusion, Unicorn Studio.

## Steal this
- Serif body (Times, lh 1.88) under a geometric sans UI layer — instant "crafted" signal with zero cost.
- A desaturated dark violet (#343755) as the lone CTA color, so the content/scene owns saturation.
- Frosted overlays (rgba(0,0,0,0.5) + blur 4px) instead of shadows for anything that floats over media.
- Opacity-first motion with long, gravitational scene timings.
