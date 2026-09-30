---
name: Vivid+Co
source: https://styles.refero.design/style/8875b14e-c59a-492f-8780-8027a480f21c
category: agency
tags: [dark, monochrome, oversized-display, chromatic-aberration, flat, sans]
best_for: Cinematic dark agency sites where a single 3D/prismatic hero artifact supplies all the color
---
# Vivid+Co
> Prismatic light through obsidian.

Cinematic dark-void aesthetic on near-black canvas (#101010–#495764) with near-white typography (#fffdf9). Authority derives from scale (136px, 105px display) rather than weight. Signature element: an RGB-split prism artifact — glass cubes with chromatic aberration edges in red/cyan/lime — the only saturated color in the system.

## Color tokens
| token | hex | role |
|---|---|---|
| Bone White | #fffdf9 | Primary text, nav, links, headings across entire dark canvas |
| Obsidian | #101010 | Page canvas; hero and section band backgrounds |
| Graphite Veil | #495764 | Surface behind headings/content blocks; cool dark slate |
| Ash Border | #403f3f | 1px hairline dividers and card outlines |
| Fog Blue | #6f879c | Muted secondary text; de-emphasized metadata labels |
| Pure Black | #000000 | SVG/illustration fill (prism cores, icon glyphs only) |
| Prism Red | #ff2a2a | RGB-split accent; prism artifact only, never UI |
| Prism Cyan | #2a7fff | Blue channel of chromatic dispersion effect |
| Prism Lime | #2aff2a | Green channel of RGB-split prism |

Surfaces: 0 Obsidian Canvas #101010 (deepest, hero void) · 1 Graphite Veil #495764 (primary content surface) · 2 Bone Card #fffdf9 (inverted cards, rare; flips type to dark).

## Typography
- **Neue Montreal** — exclusive across all UI. Fallback: Söhne, Inter, General Sans. Weights 400 (default), 700 (36px subheadings only). OpenType `ss01` on.
- Scale: Major Third 1.25 from 14px base.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 15px | 400 | 1.2 | 0.15px | `--text-caption` |
| body-sm | 18px | 400 | 1.5 | 0px | `--text-body-sm` |
| body | 20px | 400 | 1.2 | -0.2px | `--text-body` |
| body-lg | 22px | 400 | 1.2 | -0.22px | `--text-body-lg` |
| heading-sm | 33px | 400 | 1.2 | -0.33px | `--text-heading-sm` |
| heading | 36px | 700 | 1.5 | 0px | `--text-heading` |
| heading-lg | 56px | 400 | 1.13 | -0.56px | `--text-heading-lg` |
| display-sm | 105px | 400 | 1.01 | -2.1px | `--text-display-sm` |
| display | 136px | 400 | 1.00 | -2.72px | `--text-display` |

Display signature: 105–136px headlines at line-height 1.00–1.01 with -0.02em tracking for a cinematic stacked look.

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 16, 20, 40, 56, 60, 64, 72, 108px (`--spacing-*`).
- Section gap 108px · card padding 20px · element gap 7px.
- Radius: nav 5px · cards 15px · buttons 0px · tags/pills 9999px.
- Borders: 1px solid #403f3f (hairline dividers, card outlines, footer separator). Sole bordered header element: outlined Contact button (1px solid #fffdf9, 5px radius).
- Shadows: zero box-shadows; depth from #101010–#495764 contrast and the prism's chromatic edges. Flat by design.

## Layout
- Max-width 1440px; full-bleed dark canvas, single centered column.
- Hero: centered prism artifact with overlapping headline, left-aligned subtitle.
- Nav: thin top bar — wordmark left, four ghost links, outlined Contact button.
- Alternates full-viewport hero and narrower content bands at ~108px gaps.
- Single-column text max ~440px; no multi-column grids, card matrices or pricing tables. Asymmetric: prism anchors visual center, headlines wrap around it.

## Components
- **Ghost Nav Button** — transparent, #fffdf9 text, uppercase Neue Montreal 14–15px, 0px radius, no padding, no underline.
- **Outlined Contact Button** — transparent, 1px solid #fffdf9, 5px radius, 9px 15px padding, uppercase 14px #fffdf9. Only bordered element in header.
- **Display Headline Block** — Neue Montreal 400, 105–136px, line-height 1.00, letter-spacing -0.02em, #fffdf9; stacks across lines, ~50–60% viewport height.
- **Hero Lead Paragraph** — Neue Montreal 400, 18–22px, line-height 1.5, #fffdf9, max-width ~440px, left-aligned beneath prism.
- **Prism Artifact** — 4–6 glass cubes with #000000 cores, #fffdf9 specular highlights, red/cyan/green channel-offset edges; no shadows.
- **Ghost Service Label** — transparent, #6f879c text, 0px radius, 20px padding-top, 30px padding-bottom, 20px Neue Montreal; de-emphasized metadata under case-study titles.
- **Case-Study Title Link** — Neue Montreal 400, 33px, #fffdf9, letter-spacing -0.33px, line-height 1.2, no underline; likely hovers to #6f879c.
- **Footer Hairline Divider** — 1px solid #403f3f, full-width, 15px margin-top.

CSS reference returned:
```css
:root {
  --color-bone-white: #fffdf9;
  --color-obsidian: #101010;
  --color-graphite-veil: #495764;
  --color-ash-border: #403f3f;
  --color-fog-blue: #6f879c;
  --color-pure-black: #000000;
  --color-prism-red: #ff2a2a;
  --color-prism-cyan: #2a7fff;
  --color-prism-lime: #2aff2a;
  --font-neue-montreal: 'Neue Montreal', ui-sans-serif, system-ui;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --spacing-108: 108px;
  --page-max-width: 1440px;
  --radius-nav: 5px;
  --radius-cards: 15px;
  --radius-buttons: 0px;
}
```

## Motion
- Default duration 0.5s.
- Signature easing `cubic-bezier(0.52, 0.01, 0, 1)` — slow start, decisive stop (optical focus-pull).
- Transform and opacity ~90% of animation; border-color and color ~10%.
- Named animation kVfqLU runs 6.65s (likely prism shimmer).
- Avoid springs, bounces, scale-pop.

## Rules (do / don't)
**Do**
- #fffdf9 for all text/interactive elements; #6f879c only for de-emphasized metadata.
- Let scale carry hierarchy: 136px display with 18px body (7.5× ratio).
- Neue Montreal 400 default; 700 only for 36px subheadings.
- Display line-height 1.00–1.01, -0.02em tracking.
- 0px radius for buttons/cards — the prism supplies visual softness.
- Center hero compositions, ~50% viewport for headline.
- Prism artifact at full scale as the only chromatic element.

**Don't**
- No filled buttons, gradients, or saturated action colors.
- No weights 600–800 for headlines.
- No box-shadows on cards/nav.
- No line-height above 1.5 on display sizes.
- No letter-spacing looser than -0.01em above 22px.
- Don't split prism colors into separate UI tokens.
- Don't lighten canvas past #495764 (contrast collapse risk).

Imagery: hero artifact only (abstract 3D glass cubes with RGB-split aberration); no photography; minimal thin-line iconography; no pattern/texture.

## Steal this
- Warm off-white text (#fffdf9) instead of pure white on near-black — softer, more print-like.
- 7.5× display-to-body scale ratio as the sole hierarchy device.
- Focus-pull easing cubic-bezier(0.52, 0.01, 0, 1) at 0.5s.
- Keep effect colors (RGB split) inside the artwork; never promote them to UI tokens.
