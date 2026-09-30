---
name: Together AI
source: https://styles.refero.design/style/461da0f0-fde6-46bc-8137-7eca006260a8
category: ai-startup
tags: [light, research-console, pastel-fills, 4px-radius, mono-labels, flat, 3d-hero]
best_for: AI infrastructure / research platform marketing with mono-labelled chrome, pastel category fills, and one dark research band
---
# Together AI
> "Research console on glacier paper." The Future sans with aggressive negative tracking, PP Neue Montreal Mono for all labels and buttons, 4px radius everywhere, pastel-coded stat cards, one navy dark band.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #000000 | Dark supporting neutral for text, icons, strong contrast; primary button fill |
| Paper White | #ffffff | Page canvas, card surfaces, text on dark |
| Slate | #4d4d4d | Muted secondary text, metadata, low-emphasis copy; trusted-by logos |
| Hairline | #d6d6d6 | Hairline borders, table dividers, input outlines |
| Midnight Ink | #010120 | Dark surface (research section): near-black navy tint |
| Periwinkle | #bdbbff | Accent dashes, active indicators, small UI punctuation |
| Mint Cyan | #c8f6f9 | Gray supporting accent for decorative details; active platform-tab fill |
| Sky | #c1dff9 | Gray supporting accent for decorative details |
| Blush | #fde3f6 | Light supporting surface, section separation |
| Peach | #ffdccd | Card background; warm counterweight to cool tones |

Surfaces: Level 1 Paper Canvas #ffffff (default page background) → Level 2 Midnight Band #010120 (dark research section inversion).

## Typography
- **The Future** (primary sans) — weights 400, 500; sizes 14–64px (7 values); line-height 1.10–1.40; tracking -1.92 to -0.14px. Fallback: Inter Tight, Satoshi, General Sans. Body, nav, headings, hero.
- **PP Neue Montreal Mono** — weights 400, 500; sizes 10, 11, 13, 16px; line-height 1.00–1.40; tracking 0.07–0.11px. Fallback: JetBrains Mono, IBM Plex Mono, Geist Mono. Labels, badges, button text, technical metadata.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 14px | 1.25 | -0.14px |
| body-sm | 16px | 1.3 | -0.16px |
| body | 18px | 1.3 | -0.18px |
| subheading | 22px | 1.25 | -0.22px |
| heading-sm | 28px | 1.2 | -0.42px |
| heading | 40px | 1.15 | -0.8px |
| display | 64px | 1.1 | -1.92px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 88, 100, 120px.
- Radius: all standard UI (tabs, cards, badges, inputs, buttons): 4px.
- Shadow: xl `rgba(1,1,32,0.1) -10px 0 75px 0` (sticky nav only).

## Layout
- Max-width 1200px; section gap 40–80px; card padding 16–24px; element gap 8–16px.
- Nav: top bar (logo left, links center, CTAs right). Hero: asymmetric two-column (text left 50%, 3D right 50%). Stats: three equal pastel cards in a row. Platform: centered header, three tab cards. Research: full-bleed #010120 dark band, horizontally scrollable four-card row.

## Components
- **Primary Dark Button:** #000000 fill, white PP Neue Montreal Mono 13px/500, 4px radius, 8px/16px padding, no border, black-on-black hover.
- **Ghost Button:** transparent, 1px #d6d6d6 border, black PP Neue Montreal Mono 13px/500, 4px radius, 8px/16px padding.
- **Announcement Bar:** full-width #000000, white The Future 14px/400, 8px vertical padding.
- **Sticky Navigation:** white bg, 1200px max-width, 16–24px vertical padding; logo left, links center (The Future 16px/400), CTAs right; navy glow on scroll `rgba(1,1,32,0.1) -10px 0 75px 0`.
- **Hero Section:** two-column split on white; left 64px display headline (The Future 500), continuation line 64px/400, 18px subtext, button pair; right abstract 3D illustration (gradient rings, sphere, faceted diamond, mono labels).
- **Stat Metric Card:** pastel fill (sky/blush/peach/mint), 4px radius, 20–24px padding; mono label top-left with arrow, 64px metric in The Future 500, 14–16px caption below in 400.
- **Platform Tab Card:** white, 4px radius, centered The Future 22px/500 label; active: pastel fill (#c8f6f9 mint); 20–24px vertical padding.
- **Research Paper Card:** on #010120; slightly lighter navy fill, 4px radius, 24–32px padding; centered mono badge (11px/500 white), title The Future 22px/500 white, author list mono 11px/400; small #bdbbff dash on left edge.
- **Category Badge:** PP Neue Montreal Mono 11px/500, uppercase, white on dark, no background fill.
- **Trusted-By Logo Row:** grayscale logos in #4d4d4d; 'TRUSTED BY' label in mono 11px/500.
- **Hero Illustration:** abstract 3D: translucent gradient rings, central sphere, orange faceted diamond; blue→purple→orange palette; glossy, dimensional; mono callout labels.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Body/headings in The Future with aggressive negative tracking at display (-0.03em at 64px, -0.02em at 40px).
- PP Neue Montreal Mono for all labels, badges, button text, technical metadata.
- 4px radius for every card, button, badge, input.
- At most one dark band per page (#010120, not pure black).
- Pastel backgrounds as category-coded fills, not decoration.
- Reserve #bdbbff periwinkle for small punctuation (dashes, underlines, active states).
- Sticky nav is the only element with shadow (navy glow).

Don't:
- No drop shadows on cards, buttons, sections; system is flat.
- No pure white text on pure black; use #ffffff on #010120.
- Don't color partner logos; keep desaturated to #4d4d4d.
- No corners above 4px for standard UI.
- Don't use color for hierarchy on light surfaces; use type weight/size.
- No gradients on UI chrome (hero 3D only).
- Don't mix font families casually: mono in labels/badges/buttons, sans in body/headings.

## Imagery
Single abstract 3D illustration on the hero: translucent gradient geometric forms (rings, sphere, faceted orange diamond) in blue→purple→orange, glossy, floating on white with mono callout labels. No photography, flat illustration, or iconography elsewhere; icons are mono outlines.

## Steal this
- Mono for every label, badge, and button; sans for reading: the "research console" split.
- Pastel-coded stat cards (sky / blush / peach / mint) with 64px metrics.
- A single navy dark band per page for the research section.
- Navy-tinted glow shadow used only on the sticky nav.
