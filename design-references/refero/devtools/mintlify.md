---
name: Mintlify
source: https://styles.refero.design/style/80d7ef36-ed7e-48bb-b558-f772eb40106f
category: devtools
tags: [light, monochrome, single-accent, green, illustrated-hero, square-4px]
best_for: Documentation platforms and dev SaaS with one expressive hero and austere content below
---
# Mintlify
> Cloud garden over a glass desk: an illustrated teal hero, then white canvas, near-black text and one vivid green.

"Near-total monochrome discipline: white canvas, near-black text, and a single vivid green." The hero's hand-illustrated cloud landscape on a dark teal gradient is the only expressive visual; everything below is austere white surfaces, tight Inter, square-cornered components (4px buttons, 16–24px cards). Shadows sit at 0.03–0.05 opacity.

## Color tokens
| token | hex | role |
|---|---|---|
| Mint Green | #0c8c5e | Brand links, active nav, feature icons, decorative dots, inline code underlines — the only chromatic accent, sparingly |
| True Black | #000000 | Body text, default links, icon strokes, footer rules |
| Ink Black | #08090a | Dark neutral for text/icons; filled button backgrounds |
| Paper White | #ffffff | Canvas, card surfaces, button text on dark, inputs |
| Mist Gray | #f2f2f2 | Subtle dividers, hairlines, low-emphasis bg, hover wash |
| Cloud Gray | #dddddd | Input borders, card outlines on hover, secondary dividers |

## Typography
- **Inter** only (no display face, no mono override) — 400, 500, 600; sizes 13, 14, 15, 16, 18, 20, 24, 40, 57px; lh 1.10, 1.15, 1.30, 1.33, 1.50, 1.71; tracking −0.02em at 57px, −0.01em from 40px down to 16px, neutral at 13–14px, +0.05em on small uppercase eyebrows; features `"ss01" on, "cv11" on`; fallback IBM Plex Sans or General Sans.

| role | size | weight | lh | tracking |
|---|---|---|---|---|
| caption | 13px | 400 | 1.5 | +0.05em (0.65px) |
| body | 16px | 400 | 1.5 | −0.16px |
| subheading | 20px | 500 | 1.3 | −0.2px |
| heading-sm | 24px | 500 | 1.33 | −0.24px |
| heading | 40px | 600 | 1.15 | −0.4px |
| display | 57px | 600 | 1.1 | −1.14px |

## Spacing, radius, elevation
- Density comfortable. Scale: 4, 5, 6, 7, 8, 10, 12, 16, 24, 28, 32, 48, 64, 72, 96, 201px.
- Radius: tags/inputs/buttons 4px · cards 16px · large containers 24px (CSS also defines --radius-lg 8px).
- sm: `lab(2.42579 -0.165291 -0.470081 / 0.03) 0px 2px 4px 0px` — primary filled buttons.
- sm-2: `lab(100 0 0 / 0.05) 0px 2px 4px 0px` — cards/elevated surfaces.
- "Limit shadows to 2px offset at 3–5% opacity; if a component needs more separation, use a 1px #dddddd border instead."

## Layout
- Max width 1200px; section gap 80px; card padding 24px; element gap 12px.
- Full-viewport dark hero (teal gradient + cloud illustration) with centered headline, email input, and a large floating docs product mockup overlapping into the white section below.
- Below: centered headline + paragraph + card grids (3-col customer stories, 2-col feature cards) and logo wall bands.
- Nav sticky, transparent on hero, white on content.
- Imagery: hero illustration in warm yellows/creams on teal-to-mint gradient (children's-book style); below fold product screenshots and customer photography (16:9 with bottom gradient fade); grayscale partner logos; no 3D, patterns or decorative gradients.

## Components
- **Primary filled** — #08090a, text #ffffff, 4px, 8px 16px, Inter 14–15px/500, shadow sm.
- **Ghost nav button** — transparent, #000000, no border, 14px/500; hover Mist Gray wash.
- **Hero email input** — #ffffff, 1px #dddddd, 4px outer, flush circular dark submit button on right with white arrow; placeholder muted gray 14–15px.
- **Docs product card (hero showcase)** — 16px, white, sm-2, ~24px padding; left sidebar with Mint Green active rows, tabs, right TOC.
- **Customer story card** — 16px, white, 1px #f2f2f2, 24px; full-bleed 16:9 image top with gradient fade; text 16px/400 #000000 max 2 lines; "Read story →" 14px/500; 3-column grid.
- **Feature capability card** — ~6% #0c8c5e tint, 16px, 24px; eyebrow 13px/500 Mint Green +0.05em uppercase; heading 20px/600 #08090a; description 16px/400 #000000.
- **Partner logo tile** — no bg/border, grayscale, 4 per row, 24px column gap, no hover.
- **Top nav** — white; Mint Green mark + black wordmark left; links 14px/500 #000000 center-left; right "Contact sales" ghost + "Start for free" filled; no border.
- **Sidebar nav item** — 16px/400 #000000, 6px vertical / 8px left indent; active = faint mint tint + Mint Green text; 16px icons 1.5 stroke.
- **Eyebrow** — 13px/500 #0c8c5e, +0.05em, uppercase.

CSS quick start (as returned, abridged to values):
```css
:root{
 --color-mint-green:#0c8c5e; --color-ink-black:#08090a; --color-true-black:#000000;
 --color-paper-white:#ffffff; --color-mist-gray:#f2f2f2; --color-cloud-gray:#dddddd;
 --text-display:57px; --leading-display:1.1; --tracking-display:-1.14px;
 --text-heading:40px; --leading-heading:1.15; --tracking-heading:-0.4px;
 --text-heading-sm:24px; --leading-heading-sm:1.33; --tracking-heading-sm:-0.24px;
 --text-subheading:20px; --leading-subheading:1.3; --tracking-subheading:-0.2px;
 --text-body:16px; --leading-body:1.5; --tracking-body:-0.16px;
 --text-caption:13px; --leading-caption:1.5; --tracking-caption:0.65px;
 --page-max-width:1200px; --section-gap:80px; --card-padding:24px; --element-gap:12px;
 --radius-md:4px; --radius-lg:8px; --radius-2xl:16px; --radius-3xl:24px;
}
```

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Inter for everything.
- Mint Green only for active states, brand links, decorative icons, eyebrows.
- 4px buttons, 16px cards.
- −0.02em at 57px, −0.01em 40–16px, +0.05em only on 13px eyebrows.
- #08090a for button fills, #000000 for body text — separate roles.
- Hero is the only colorful moment; white/black below the fold.
- Shadows ≤2px offset at 3–5%; else 1px #dddddd border.

**Don't**
- No pill buttons, 9999px radii, rounded avatars — 4/16/24 only.
- No Mint Green on button fills, large backgrounds, hero text.
- No second accent.
- No body below 14px or line-height looser than 1.5.
- No gradients, glassmorphism, colored shadows.
- No illustration outside the hero.
- No non-white page background in content sections.

## Steal this
- Spend the entire expressive budget on one illustrated hero; go forensic-plain below the fold.
- Product mockup overlapping the hero/content boundary to bridge the two moods.
- Accent-tinted (~6%) feature cards as the only colored surfaces.
- "If it needs more separation, use a 1px border, not a bigger shadow."
