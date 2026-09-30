---
name: Branding (SVZ)
source: https://styles.refero.design/style/4d4772a3-e1da-415f-a6d7-658dcefdcecd
category: agency
tags: [dark, single-accent, red, serif-italic-mix, oversized-display, editorial]
best_for: High-fashion editorial branding agencies — gallery-signage type on a void canvas with rare red punctuation
---
# Branding (SVZ)
> Black gallery wall, blood-red punctuation — oversized white display type floats on a void-like dark canvas, interrupted by a single vivid red accent and dramatic ornamental display faces that feel like gallery signage rather than web UI.

High-fashion editorial aesthetic: pitch-black canvas, oversized display type dominating the viewport, a single arterial red as rare punctuation. Hierarchy from scale (160px → 10px) and weight contrast (300 whisper-thin to 700 blocky caps), never color or chrome. Ghost buttons and hairline borders replace conventional UI. (Refero lists this style as "Branding"; the content documents the SVZ branding system.)

## Color tokens
| token | hex | role |
|---|---|---|
| Arterial Red | #fe1e34 | Sole brand accent — card borders, cursor, hero dot; punctuation, not paint |
| Crimson Pure | #ff0000 | Heading underlines and decorative fill; typographic emphasis only |
| Absolute Black | #000000 | Deepest surface, decorative fills, icon strokes |
| Void Canvas | #080808 | Primary page background |
| Charcoal Plate | #171617 | Footer and inverted section backgrounds |
| Smoke Plate | #262525 | Secondary surface for content blocks and image treatments |
| Graphite Lift | #393939 | Subtle elevation surface and card background |
| Iron | #525252 | Link underlines, nav dividers, hairline separators |
| Pebble | #b5b2b2 | Disabled borders, tertiary helper text, low-priority metadata |
| Ash | #d4d2d2 | Muted secondary text, nav labels, subtle borders |
| Linen | #f3efef | Inverted body sections, off-white text on dark cards |
| Bone White | #fcfcfc | Primary text, hairline borders, icon outlines |

Surfaces: 0 Void #080808 · 1 Absolute #000000 · 2 Charcoal #171617 · 3 Smoke #262525 · 4 Graphite #393939 (only surface receiving the white inset highlight) · 5 Linen #f3efef (inverted body panel).

## Typography
- **Kmr Waldenburg** (primary) — weights 300, 400, 700; 10–160px (9 values); lh 0.9–1.5. Tracking: -0.017em body; -0.038em to -0.050em headings; -0.075em to -0.080em display; tracked OUT to +0.071em and +0.308em for 10–12px nav labels. Fallback: Neue Haas Grotesk Display / Inter.
- **Editorialnew** — weight 300; 14, 20, 32px; lh 1.00, 1.10, 1.50; tracking -0.050em at 32px, -0.020em at 20px. Serif italic companion for connective words ("crafting", "for the"). Fallback: Editorial Old / Playfair Display Italic.
- **Dirtyline 36 Daysoftype 2022** (ornamental) — weight 400; 24, 64, 80px; lh 0.90, 1.05, 1.10; tracking -0.100em at 24px, -0.037em at 64px, -0.030em at 80px. Single-letter spectacle moments. Fallback: Tobias / Rogue Serif.
- **system-ui** — weights 300, 400; 12, 14px; lh 1.20, 1.50. Quiet body fallback / small icon labels.

| role | size | line-height | tracking | token |
|---|---|---|---|---|
| caption | 10px | 1.2 | +0.8px | `--text-caption` |
| body | 14px | 1.5 | -0.24px | `--text-body` |
| subheading | 24px | 1.1 | -0.91px | `--text-subheading` |
| heading-sm | 32px | 1.05 | -1.6px | `--text-heading-sm` |
| heading | 42px | 1.05 | -2px | `--text-heading` |
| heading-lg | 64px | 1 | -4.8px | `--text-heading-lg` |
| display | 80px | 0.9 | -6px | `--text-display` |
| display-xl | 160px | 0.9 | -12.8px | `--text-display-xl` |

(Weights per scale step not captured.)

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 48, 56, 80, 112, 128, 184px.
- Section gap 48–64px · card padding 12–24px · element gap 24px.
- Radius: nav 3px · cards 8px · buttons 8px · largeCards 14.4px.
- Shadow (dark card): `rgba(255, 255, 255, 0.2) 0px 2px 5px 0px inset` — single white inset highlight only; no drop shadows or gradients on UI.

## Layout
- Full-bleed dark canvas, no max-width container.
- Hero fills viewport with 160px display type, dark background visible at all four edges.
- Sections alternate between void (#080808) and a single inverted linen (#f3efef) body panel, 48–80px vertical breathing room.
- Transparent top nav (no sticky header, no sidebar). Asymmetric editorial content; display headlines as 2–3 line stacks with small italic connectives.
- Card grids 2–3 columns, 24px gaps, 8px radius, 1px hairline borders.

## Components
- **Ghost CTA Link** — uppercase 12px Kmr Waldenburg 400, +0.071em, #fcfcfc on void, with 45° arrow; no fill/bg/border; 32px vertical / 8px horizontal padding. Replaces conventional buttons.
- **Discovery Call Outlined Button** — uppercase 12px tracked text, 8px radius, 1px #d4d2d2 border on void, diagonal arrow, 12px/24px padding. Only button-like affordance.
- **Hero Display Headline** — 160px 700 all caps, lh 0.90, -12.8px, #fcfcfc on #080808; Editorialnew italic 300 words at 42px between caps on the same baseline.
- **Section Transition Headline** — 80px 700, -6px, paired with a single oversized Dirtyline 36 letter (80–160px).
- **Bordered Brand Card** — bg #080808–#262525, 1px solid #fe1e34, 8px radius, 24px padding; red border = "featured" marker only.
- **Standard Card** — bg #080808 or #f3efef, 1px hairline (#d4d2d2 on dark, #525252 on light), 8px radius, 12–24px padding; inset highlight on dark.
- **Hairline Link** — 12–14px 400 uppercase +0.071em; underline #525252 (dark) or #b5b2b2 (light); 3px radius on link/nav containers; hover shifts weight/position, not color.
- **Top Navigation** — full-width, transparent; "SVZ" logo top-left in 32px Editorialnew or Kmr caps; four column groups (AGENCY, WORK, CULTURE, INSIGHTS) as tracked uppercase labels with stacked 12px sub-items; Discovery Call button top-right.
- **Footer Panel** — #171617, full-bleed, bone-white text, mirrors nav columns, 48px min vertical padding.
- **Accent Dot** — solid 16–24px #fe1e34 circle, cursor-like marker near CTAs.
- **Decorative Background Shape** — oversized crosses/arrows/letters in #171617–#262525 at 8–20% opacity, bleeding off-canvas.
- **Editorial Body Panel** — #f3efef bg, #080808 text, 14px 400, lh 1.50, 24px section padding; 1px #d4d2d2 border or seamless.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Type carries hierarchy: 80–160px display for hero, 10–12px tracked uppercase for metadata.
- #fe1e34 only as a 1px border on one or two featured elements per page plus the accent dot.
- Mix Kmr Waldenburg caps (700) with Editorialnew italic (300) on the same baseline — the signature.
- 0.90–1.10 line-height on all display sizes.
- Track 10–12px nav OUT (+0.071em to +0.308em) and display IN (-0.050em to -0.080em).
- Anchor interactive elements with ↗ arrow; hover shifts position or weight, not hue.
- #f3efef as the only surface escaping the void.

**Don't**
- No filled buttons, drop shadows, or UI gradients (single white inset highlight at most).
- No #fe1e34 as text, bg fill or icon color.
- No Kmr body weights (300/400) for display headings under 64px; 700 for 42px and above.
- No radius above 14.4px.
- No body text below 14px or above 32px without switching to display role.
- No more than two typeface families per composition.
- No #000000 text on dark surfaces; pure black text only on #f3efef.

Imagery: editorial collage — large photographic textures (leopard print, animal patterns) and oversized geometric shapes bleeding off-canvas; full-bleed, no rounded corners; moody fashion-editorial. Iconography: 1px hairline ↗ arrows and stroked SVGs in bone-white.

CSS returned:
```css
:root {
  --color-void-canvas: #080808; --color-absolute-black: #000000; --color-charcoal-plate: #171617;
  --color-smoke-plate: #262525; --color-graphite-lift: #393939; --color-bone-white: #fcfcfc;
  --color-linen: #f3efef; --color-ash: #d4d2d2; --color-pebble: #b5b2b2; --color-iron: #525252;
  --color-arterial-red: #fe1e34; --color-crimson-pure: #ff0000;
  --font-kmr-waldenburg: 'Kmr Waldenburg', ui-sans-serif, system-ui, -apple-system;
  --font-editorialnew: 'Editorialnew', ui-sans-serif, system-ui, -apple-system;
  --font-dirtyline-36-daysoftype-2022: 'Dirtyline 36 Daysoftype 2022', ui-sans-serif;
  --font-system-ui: system-ui, ui-sans-serif;
  --radius-sm: 3px; --radius-lg: 8px; --radius-xl: 14.4px;
  --shadow-sm: rgba(255, 255, 255, 0.2) 0px 2px 5px 0px inset;
}
```

## Steal this
- Bold grotesk caps + light serif italic connectives on one baseline — instant editorial voice.
- Letter-spacing as a load-bearing token: tracked-out micro labels vs crushed display.
- Accent color used only as a 1px border to mark "featured", never as fill.
- A single inset white highlight on dark cards for a glass-edge feel without drop shadows.
