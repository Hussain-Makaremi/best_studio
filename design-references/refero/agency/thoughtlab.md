---
name: ThoughtLab
source: https://styles.refero.design/style/82d52a5f-b1bb-4a69-91a3-15a7eb8bbe99
category: agency
tags: [dark, single-accent, red, oversized-display, uppercase, flat]
best_for: Bold dark agency/studio homepages where massive uppercase type and one red CTA do all the work
---
# ThoughtLab
> Obsidian monument with crimson signal. A void-black canvas where a single saturated red pill is the only chromatic object in a cathedral of oversized white type.

Black-cathedral design language: pure black canvas, one red pulse, typography as architecture. Hierarchy from extreme scale jumps (198px → 14px), not color, shadow or fills. Components weightless — transparent cards, pill buttons, hairline inputs, zero elevation.

## Color tokens
| token | hex | role |
|---|---|---|
| Void `--color-void` | #000000 | Page background, canvas foundation |
| Ash `--color-ash` | #cccccc | Body/link text; softens glare vs pure white |
| Frost `--color-frost` | #ffffff | Display headings, button text, input rules |
| Graphite `--color-graphite` | #4c4c4c | Copyright, meta, tertiary text |
| Crimson Signal `--color-crimson-signal` | #fc1c46 | Primary action fill only; single red accent per view |

## Typography
- **Sui** — sole typeface (10–198px). Weights 300, 400, 500, 700. Sizes 10, 14, 15, 17, 18, 27, 72, 91, 198px. Fallback: Space Grotesk, Inter, Neue Haas Grotesk Display. Custom geometric sans; 700 reserved for monumental display, 400 for the rest.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 10px | 400 | 1.25 | — | `--text-caption` |
| body-sm | 14px | 400 | 1.15 | — | `--text-body-sm` |
| subheading | 18px | 400 | 1.1 | — | `--text-subheading` |
| heading-sm | 27px | 400 | 1.2 | — | `--text-heading-sm` |
| heading | 72px | 400 | 1.1 | — | `--text-heading` |
| heading-lg | 91px | 700 | 0.92 | -1.82px | `--text-heading-lg` |
| display | 198px | 700 | 0.96 | -1.78px | `--text-display` |

## Spacing, radius, elevation
- Spacing: 7, 9, 22, 29, 30, 36, 43, 65, 72, 86, 108, 126, 180, 198, 216px. Density spacious.
- Section gap 86–108px · card padding 22px · element gap 9px.
- Radius: buttons/tags/pills 9999px · cards 0px · inputs 0px.
- Elevation: none. All cards box-shadow: none. If something must feel "above", use hairline border or transparent bg, not blur.

CSS returned:
```css
:root {
  --color-void: #000000;
  --color-ash: #cccccc;
  --color-frost: #ffffff;
  --color-graphite: #4c4c4c;
  --color-crimson-signal: #fc1c46;
  --font-sui: 'sui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 10px; --leading-caption: 1.25;
  --text-body-sm: 14px; --leading-body-sm: 1.15;
  --text-subheading: 18px; --leading-subheading: 1.1;
  --text-heading-sm: 27px; --leading-heading-sm: 1.2;
  --text-heading: 72px; --leading-heading: 1.1;
  --text-heading-lg: 91px; --leading-heading-lg: 0.92; --tracking-heading-lg: -1.82px;
  --text-display: 198px; --leading-display: 0.96; --tracking-display: -1.78px;
  --font-weight-light: 300; --font-weight-regular: 400; --font-weight-medium: 500; --font-weight-bold: 700;
  --spacing-7: 7px; --spacing-9: 9px; --spacing-22: 22px; --spacing-29: 29px; --spacing-30: 30px;
  --spacing-36: 36px; --spacing-43: 43px; --spacing-65: 65px; --spacing-72: 72px; --spacing-86: 86px;
  --spacing-108: 108px; --spacing-126: 126px; --spacing-180: 180px; --spacing-198: 198px; --spacing-216: 216px;
  --page-max-width: 1400px;
  --section-gap: 86-108px;
  --card-padding: 22px;
  --element-gap: 9px;
  --radius-full: 9999px; --radius-tags: 9999px; --radius-cards: 0px; --radius-inputs: 0px; --radius-buttons: 9999px;
  --surface-canvas: #000000;
  --surface-transparent-card: #000000;
}
```

## Layout
- Full-bleed dark canvas, 126px horizontal margins per side, content column ~1400px max.
- Header: single 72px row, three zones (logo left, tagline center, CTA pill right, hamburger far right); transparent/#000000, no border-bottom.
- Hero split: 198px uppercase headline left with 18px body below; 3D sphere overlaps center-right.
- Sections 86–108px apart. Work items stack as near-full-width list, not card grid. No sidebar or mega-menu. Footer is a single quiet copyright line in #4c4c4c. Hamburger opens full-screen overlay.

## Components
- **Crimson Pill CTA** — fill #fc1c46, text #ffffff, 9999px radius, 30px horizontal padding, height from line-height; 15px Sui 400 uppercase; no border/shadow. One per view.
- **Ghost Text Button** — transparent, #ffffff or #000000 text, 0px radius, no padding/border, underline on hover; 400, 14–17px.
- **Transparent Project Card** — rgba(0,0,0,0), 0px radius, no shadow, 0px padding (22px token when text needs room).
- **Hairline Input** — transparent, #ffffff text, border-bottom 1px solid #ffffff only, 0px radius, padding 7.2px / 21.6px.
- **Display Headline** — 198px 700, lh 0.96, -1.78px, uppercase, #ffffff; descenders kiss ascenders.
- **Section Heading** — 91px 700, lh 0.92, -1.82px, uppercase, #ffffff or #cccccc.
- **Body Lead** — 18px 400, lh 1.10, #cccccc.
- **Uppercase Eyebrow** — 15px 400 uppercase, #cccccc or #4c4c4d.
- **Meta / Copyright** — 10–14px 400, #4c4c4c.
- **Navigation Header** — see Layout; ~72px height.
- **Hero 3D Sphere** — large dark obsidian liquid blob in WebGL, absolute, overlapping headline; subtle blue/purple/amber rim reflections. Only permitted decoration.
- **Hamburger Trigger** — two thin horizontal #ffffff lines, no bg/border, 14px total height, far right.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 9999px radius for every button, tag, pill.
- Display at 198px or 91px, 700, uppercase, lh ≤ 0.96.
- Palette limited to Void, Ash, Frost, Graphite, Crimson Signal.
- 126px horizontal page margins on desktop.
- Crimson only for the single primary action per view and the logo mark.
- Body text #cccccc, not pure white.
- Hierarchy via scale, tracking, whitespace — never shadows or fills.

**Don't**
- No drop shadows, glows, box-shadows.
- No second accent color.
- No filled/gradient/bordered cards.
- No body below 10px; no serif, script or display faces.
- No radius on cards, inputs, non-button elements.
- No line-height above 1.25 for body or 1.10 for supporting copy.
- No Crimson on non-action elements.

Imagery: WebGL obsidian liquid sphere as brand iconography; project thumbnails as edge-to-edge stills in a vertical list; no lifestyle, stock or decorative gradients.

## Steal this
- One saturated CTA per view (#fc1c46) against pure black — maximal signal, zero noise.
- Off-white body (#cccccc) vs pure white display (#ffffff) as a two-tier brightness hierarchy.
- Bottom-border-only inputs on dark for a weightless form.
- Work shown as a full-width vertical list rather than a card grid.
