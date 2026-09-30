---
name: Gsap
source: https://styles.refero.design/style/00537a20-e99e-4ef2-b119-c6f532c44cc9
category: dark-mode
tags: [dark, warm-cream, outlined-pills, color-coded-taxonomy, giant-display, 3d-blobs]
best_for: Developer libraries / creative tools with multiple product disciplines needing color-coded taxonomy on a playful dark stage
---
# Gsap
> Animated chalkboard in a design studio — near-black stage, massive cream typography, thin outlined pills, color-coded category labels as taxonomy.

Dark-canvas language built for motion; typographic hierarchy and weightless interaction over chromatic saturation.

## Color tokens
| token | hex | role |
|---|---|---|
| Shockingly Green | #0ae448 | Green text accent; gradient endpoint |
| Light Green | #abff84 | Secondary green accent |
| Core Green | #dfffd1 | Subtle brand-tinted background washes |
| Orangey | #ff8709 | SVG category label, icon fills |
| Pink | #fec5fb | Scroll category label, decorative splashes |
| Lilac | #9d95ff | Text category label, thin strokes |
| Blue | #00bae2 | UI category label, gradient endpoint |
| Lipstick Pink | #f100cb | Deep gradient stops only; no text/UI |
| Just Black | #0e100f | Page canvas, deep backgrounds |
| Off Black | #191919 | Nested panels, code blocks, footer |
| Surface 25 | #42433d | Hairline borders, dividers, outlines |
| Surface 50 | #7c7c6f | Muted secondary text, disabled |
| Surface Cream | #fffce1 | Primary text, button borders, nav |

Gradients:
- Shockingly Green: `linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)`
- Primary CTA gradient: #0ae448 → #abff84 at 114.41deg (1.5–2px stroke)

## Typography
- **Mori** (single family): 400, 600; sizes 14, 16, 17, 18, 19, 20, 21, 23, 24, 32, 33, 34, 40, 44, 66, 76, 89, 101, 224px; lh 0.90–1.40; tracking -0.02em @ 224px, -0.011em @ ≤101px headings, -0.01em body/UI. Fallback Inter Tight, Söhne, or DM Sans (humanist preferred).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 14px | — | 1.4 | -0.14px |
| body-sm | 16px | — | 1.15 | 0 |
| body | 19px | — | 1.15 | 0 |
| body-lg | 23px | — | 1.38 | -0.23px |
| subheading | 34px | — | 1.2 | -0.34px |
| heading-sm | 44px | — | 1.2 | -0.44px |
| heading | 66px | — | 1.2 | -0.66px |
| heading-lg | 101px | — | 1.0 | -1.11px |
| display | 224px | 600 | 0.9 | -4.48px |

Key rule: body Mori 400 at 16–19px, lh 1.15 — "the system's resting rhythm."

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 8, 12, 16, 20, 24, 32, 76, 96, 108px.
- Max-width 1280px; section gap 80px; card padding 24px; element gap 16px.
- Radius: cards 8px, small tags 8px, buttons 100px, pills 9999px.
- No drop shadows. Depth via internal multi-stop gradients on 3D shapes, surface steps (canvas → nested panel → cream), gradient CTA borders, 8px radius + spacing.

```css
--color-just-black:#0e100f; --color-surface-cream:#fffce1; --color-surface-50:#7c7c6f;
--color-surface-25:#42433d; --color-off-black:#191919; --color-shockingly-green:#0ae448;
--gradient-shockingly-green:linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%);
--font-mori:'Mori', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--text-display:224px; --leading-display:0.9; --tracking-display:-4.48px;
--page-max-width:1280px; --section-gap:80px; --radius-buttons:100px;
```

## Layout
Max-width 1280px; hero headline allowed to bleed to viewport edge. Tool feature blocks: two-column rows with 80px vertical gap, separated by full-width 1px #42433d hairlines. Showcase cards in 2–3 column grids with 24px gaps. Flat dark canvas unbroken across scroll.

## Components
- **Outlined cream pill:** 100px, 1px #fffce1, transparent, cream 18px Mori 600, 15px / 24px padding; hover border opacity 0.8; never filled.
- **Gradient-stroked CTA pill (primary):** 1.5–2px gradient border (114.41deg #0ae448 → #abff84), transparent, cream text, 100px, 15px/24px; via border-image or --color-core-button-gradient. Only chromatic control.
- **Ghost nav link:** #fffce1 or #7c7c6f 16px Mori 400 lh 1.15; hover color → #fffce1; row gap 6px, vertical padding 10px.
- **Category color label:** single word 19–24px Mori 400 in discipline hue — Scroll #fec5fb | SVG #ff8709 | Text #9d95ff | UI #00bae2 | GSAP #0ae448 | Other #abff84. Never reuse a color across disciplines.
- **Curly-bracket annotation:** literal `{ }` around 16–19px Mori 400 cream ("{ Why GSAP® }", "{ GSAP® Tools }").
- **Hero display headline:** 224px Mori 600, lh 0.9, -4.48px, #fffce1; two-line wrap; bleeds to edge; soft 3D splashes overlap type.
- **Tool feature block:** left soft 3D shape with multi-stop gradient in tool accent; right category label → 34–44px cream subhead → 23px body → outlined "Explore" pill; 1px #42433d divider between blocks.
- **Showcase card:** 8px, near-black surface, 24px padding, cream heading 24–33px, 16:9 or 1:1 preview, may overflow slightly.
- **Footer:** #191919, 1px #42433d top divider, multi-column cream 16px Mori 400, 60–80px vertical padding.
- **3D organic illustration:** pills/domes/liquid blobs with multi-stop gradients, internal-gradient lighting, loose overlap with type.

## Motion
_not captured_ (only: hover border opacity shift to 0.8; the brand is a motion library but no timing specs returned).

## Rules (do / don't)
Do:
- Body/UI Mori 400 16–19px lh 1.15
- Consistent discipline color mapping
- All buttons 100px ghost pills, 1px cream border, #fffce1 18px Mori 600
- Exception: primary CTA 1.5px green gradient stroke
- Hero 224px Mori 600, lh 0.9, -0.02em, bleeding to edge
- Curly-bracket annotations as section intros
- 1px #42433d hairlines between tool blocks

Don't:
- Filled CTAs
- Color inversions (cream bg + black text) except deliberate callouts
- Pure colors — use #fffce1 and #0e100f for warmth
- Body type outside 14–23px (display reserved for 66–224px)
- A sixth category color
- Drop shadows
- Generic sans (Inter, Roboto, system)
- Reversed cream/black pairing

Imagery: soft 3D organic shapes in discipline-accent gradients; no photography; monochrome cream ~1.5px icons; flat dark backgrounds. Similar: Framer, Linear, Vercel, Webflow, Spline.

## Steal this
- Color as taxonomy: one hue per product discipline, used only for labels.
- Gradient-stroked (not filled) primary CTA as the maximum escalation in an outlined-only system.
- `{ curly-bracket }` eyebrows as a developer-flavored typographic signature.
- Warm off-black/cream pair (#0e100f / #fffce1) instead of pure black/white.
