---
name: Air
source: https://styles.refero.design/style/d3289fe7-a85e-42d8-96b7-eb7faa62a104
category: dark-mode
tags: [dark, photographic, compressed-display, cursive-accent, ghost-buttons, light-cards]
best_for: AI / SaaS product marketing balancing atmospheric full-bleed photography with calm, text-led feature sections
---
# Air
> Midnight sky through glass sculpture — full-bleed cloud photography, sculptural glass 3D forms, restrained type with one cursive word.

A single restrained sans (Control) at moderate weights; compressed and cursive display variants for emphasis. One italic word ("AI") in cursive adds personality. Lightweight components: minimal elevation, thin borders, small radii, near-transparent surfaces; imagery carries emotion.

## Color tokens
| token | hex | role |
|---|---|---|
| Whiteout | #ffffff | Text on dark, nav button borders, hairlines, card surfaces over photo |
| Haze | #f5f5f5 | Card surfaces, inputs, subtle button fills on dark |
| Ink | #1b1b1b | Text on light surfaces, button borders on light cards |
| Black Void | #000000 | Nav borders, link underlines, deepest contrast |
| Twilight Blue | #426188 | Heading text on dark — only chromatic text color |
| Signal Blue | #2b7fff | Links, tags, short emphasized phrases; not a CTA color |

## Typography
- **Control** (fallback Inter, system-ui): 500 (body, nav, buttons, links) + 400 (long-form); 12, 13, 14, 16, 20px; lh 1.10 / 1.40 / 1.50.
- **Control Compressed** (fallback Anton, Druk Wide): 900; 259px; lh 0.85; always uppercase (e.g. "MAKE IT ONCE.").
- **Control Cursive** (fallback Caveat, Reenie Beanie): 400, 500; 20, 32, 56px; lh 1.00, 1.10, 1.50 — italic accent words ("AI", "real").
- **Control TNT** (fallback Inter): 400, 500; 20, 32, 56px; lh 1.00, 1.10, 1.50 — upright display for taglines/feature headlines.

Scale (Major Second 1.125 from 16px):
| role | size | weight | line-height | token |
|---|---|---|---|---|
| caption | 13px | — | 1.5 | --text-caption |
| body | 16px | 500 | 1.5 | --text-body |
| subheading | 20px | 500 | 1.4 | --text-subheading |
| heading | 32px | 500 | 1.1 | --text-heading |
| heading-lg | 56px | — | 1.0 | --text-heading-lg |
| display | 259px | 900 | 0.85 | --text-display |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 52, 64, 80, 120px.
- Max-width 1150px; section gap 48px; card padding 20px; element gap 8px.
- Radius: inputs 4px, buttons 8px, images 11px (also 14px on image cards), cards 12px, pills 9999px.
- No elevation — background color + 1px borders. Levels: 0 Dark Canvas #000000; 1 Haze Card #f5f5f5; 2 Whiteout #ffffff.

## Layout
Full-bleed dark photographic sections alternate with centered content blocks. 72px-high top nav: links left, actions right. Feature sections: centered headline + subtitle, then 2- or 3-column grids with 24px gutters. Compressed display bleeds to viewport edges. Single-row logo grids. Dark footer with light text.

## Components
- **Ghost nav button:** transparent, 1px white border, white text, 8px, 10px 16px ("Start for free", "Book a demo").
- **Solid light button:** #f5f5f5, #1b1b1b text, 1px #1b1b1b, 8px, padding 8px horizontal & 16px vertical (as returned).
- **Pill toggle:** ~9999px, semi-transparent dark bg (oklab 10% black), black text; feature toggles/filters.
- **Underline link:** transparent, 2px bottom underline, #2b7fff or #1b1b1b, 8px horizontal padding.
- **Haze card:** #f5f5f5, 12px, 20px padding, no shadow/border — light island on dark photo.
- **Image card:** transparent, 11px or 14px radius, no padding/shadow.
- **Text input:** #f5f5f5, #1b1b1b text, 1px rgba(0,0,0,0.1), 4px, 10px padding.
- **Logo bar:** monochrome white/semi-white logos, 32px column gap, 48px row gap.
- **Full-bleed photographic section:** full viewport height, clouds/glass sculpture, centered headline in Whiteout or Twilight Blue.
- **Compressed display headline:** Control Compressed 900, 259px, lh 0.85, uppercase, Whiteout, bleeds to edges; sparingly.
- **Dual-style headline:** Control Cursive italic 56px for emphasized words + Control TNT upright for the rest.
- **Feature section header:** Control 500 20px subheading; Cursive or TNT 32–56px title; centered; 48px gap above/below.

## Motion
_not captured_ (no motion specs in source).

## Rules (do / don't)
Do:
- Control 500 for all body, nav, button, link text
- 8px radius for all buttons/interactive elements
- 4px radius for inputs only
- #f5f5f5 for cards/inputs on dark
- #ffffff for borders/text on dark
- #1b1b1b for text/borders on light
- Break headlines with one Control Cursive italic word

Don't:
- Solid filled colored buttons (ghost or haze only)
- Shadows/elevation on cards
- More than one saturated accent per page (Signal Blue = links only)
- Body below 16px or above weight 500
- Pill shapes except toggles/filters
- New radii beyond 4 / 8 / 11–14
- Gradients

Imagery: moody sky/cloud photography with translucent 3D glass forms, full-bleed; product UI in Haze cards as islands; white monochrome logos.
Best-fit: AI tools, developer platforms, SaaS long-form marketing and documentation-heavy interfaces.

## Steal this
- One cursive italic word inside an upright headline for personality.
- Poster-scale compressed uppercase display (259px, lh 0.85) used sparingly.
- Light "island" cards (#f5f5f5) floating on dark photography instead of dark cards.
- Ghost-only CTAs so photography stays the emotional focus.
