---
name: Gsap
source: https://styles.refero.design/style/00537a20-e99e-4ef2-b119-c6f532c44cc9
category: devtools
tags: [dark, warm-cream-type, giant-display, outlined-only, color-coded-taxonomy, 3d-shapes]
best_for: Motion/creative-coding libraries and playful dev brands where giant type is the hero
---
# Gsap
> Animated chalkboard in a design studio: massive cream type on near-black, ghost pills, color-coded categories.

"The system runs on a single warm cream surface color (#fffce1) against an almost-black background," each animation discipline wearing its own vivid hue. Typography is the hero — aggressive negative tracking and near-1.0 line-height make words feel carved. No filled CTAs: only ghost pills and one gradient-stroked primary action.

## Color tokens
### Core neutrals
| token | hex | role |
|---|---|---|
| Just Black | #0e100f | Page canvas, footer, deep sections |
| Off Black | #191919 | Nested panels, code blocks |
| Surface 25 | #42433d | Hairline borders, dividers, low-contrast outlines |
| Surface 50 | #7c7c6f | Muted secondary text, resting icons, disabled |
| Surface Cream | #fffce1 | Primary text, button borders, nav links, card text |

### Brand & accents
| token | hex | role |
|---|---|---|
| Shockingly Green | linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%) | Links, tags, emphasized phrases; CTA stroke |
| Light Green | #abff84 | Secondary green |
| Core Green | #dfffd1 | Subtle brand-tinted washes |
| Orangey | #ff8709 | SVG category label, orange icon fills |
| Pink | #fec5fb | Scroll category label, decorative splashes |
| Lilac | #9d95ff | Text category label, thin strokes |
| Blue | #00bae2 | UI category label |
| Lipstick Pink | #f100cb | Deep gradient stop, decorative gradients only |

Surfaces: L0 #0e100f canvas · L1 #191919 footer/code · L2 #fffce1 cream callout panels (sparingly).

## Typography
- **Mori** — single family, weights 400 & 600, 14–224px, lh 0.90–1.40. Fallback Inter Tight, Söhne, DM Sans (humanist over geometric). "Mori weight 600 at 224px with lh 0.9 and −0.02em tracking is the hero display."

Scale (Minor Third 1.2 from 20px):
| role | size | weight | lh | tracking |
|---|---|---|---|---|
| caption | 14px | 400 | 1.4 | −0.14px |
| body-sm | 16px | 400 | 1.15 | 0 |
| body | 19px | 400 | 1.15 | 0 |
| body-lg | 23px | 400 | 1.38 | −0.23px |
| subheading | 34px | 400 | 1.2 | −0.34px |
| heading-sm | 44px | 400 | 1.2 | −0.44px |
| heading | 66px | 400 | 1.2 | −0.66px |
| heading-lg | 101px | 400 | 1.0 | −1.11px |
| display | 224px | 600 | 0.9 | −4.48px |

## Spacing, radius, elevation
- Base 4px; density comfortable. Scale: 8, 12, 16, 20, 24, 32, 76, 96, 108px.
- Radius: cards 8px · small tags 8px · buttons 100px · pills 9999px.
- No drop shadows anywhere. Depth from internal multi-stop gradients, surface steps, 8px radius + gap separation. The CTA's gradient border is the only lift indicator.

## Layout
- Max width 1280px; section gap 80px (80–120px); card padding 24px; element gap 16px.
- Hero edge-bleeds (no max-width container), headline wraps two lines, 3D shapes overlap the type.
- Section pattern: curly-bracket eyebrow → centered headline or two-column row (illustration left, category + subhead + body + button right). Tools section stacks four two-column blocks divided by 1px #42433d.
- Showcase: 2–3 column card grid, 24px gaps.
- Top nav: 6–16px link spacing, cream 16px Mori 400, wordmark far left.
- Imagery: soft 3D organic shapes (pills, domes, blobs, splashes) with multi-stop gradients in discipline colors; no people/places photography; ~1.5px cream monochrome icons.

## Components
- **Outlined cream pill** — transparent, #fffce1 text + 1px cream border, 100px radius, 15px/24px padding, Mori 18px/600 lh 1.05. Never fill.
- **Gradient-stroked CTA pill (primary)** — ghost with 1.5–2px gradient border (114.41deg #0ae448 → #abff84), cream text, 100px, 15px/24px.
- **Ghost nav link** — no bg/border, #fffce1 or #7c7c6f 16px Mori 400 lh 1.15; nav row gap 6px, vertical padding 10px.
- **Borderless icon button** — 50% radius, no bg, cream ~1.5px stroke.
- **Category color label** — Mori 19–24px/400 single word; Scroll #fec5fb, SVG #ff8709, Text #9d95ff, UI #00bae2, GSAP #0ae448.
- **Curly-bracket annotation** — "{ Why GSAP® }" at 16–19px Mori 400, no bg.
- **Hero display** — 224px/600, lh 0.9, −4.48px, #fffce1, bleeds to viewport edge.
- **Tool feature block** — left large 3D shape; right category label + 34–44px subhead + 23px body + outlined button; 1px #42433d full-width divider.
- **Showcase card** — 8px radius, cream heading 24–33px, no border, 16:9 or 1:1 preview, 24px padding, preview slightly overflows.
- **Footer** — #191919, 1px #42433d top divider, cream 16px links, 60–80px vertical padding.
- **3D organic illustration** — gradient-lit shapes, no shadows, overlap type.
- **Announcement banner** — full-bleed cream 14px Mori centered, 0–40px from top; optional links #0ae448; no tint.

## Motion
_not captured_ (imagery "suggests motion"; no timing values returned)

## Rules (do / don't)
**Do**
- Body/UI Mori 400 at 16–19px, lh 1.15.
- Five-discipline color mapping; never reuse a color for a different discipline.
- Every button a 100px ghost pill (1px cream, Mori 600 18px) — except the gradient-stroke CTA.
- Hero 224px/600, lh 0.9, −0.02em, bleeding to edge.
- 1px #42433d full-width hairline between tool blocks.

**Don't**
- No filled solid CTAs — gradient stroke is the max escalation.
- No pure #ffffff or #000000.
- Body not below 14px or above 23px.
- No colors beyond the five-discipline palette.
- No drop shadows on cards or illustrations.
- Don't reverse cream-on-black cards except deliberate callouts.
- No Inter/Roboto/system sans — Mori's humanist warmth is load-bearing.

## Steal this
- Color as taxonomy: each product category owns one hue, used only for its label.
- Curly-bracket `{ eyebrow }` section markers — code-flavored without being monospace.
- Outlined-only buttons with a single gradient-stroked primary.
- Viewport-bleeding 224px display at lh 0.9 as the entire hero.
