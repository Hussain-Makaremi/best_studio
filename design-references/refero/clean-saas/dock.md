---
name: Dock
source: https://styles.refero.design/style/d7fb1721-1878-4cbb-a24b-051800557c75
category: clean-saas
tags: [light, warm-cream, single-accent, cobalt, pill-buttons, gradient-cta]
best_for: Sales enablement / B2B product sites where real product screenshots are the hero
---
# Dock
> Sunlit cream paper, cobalt pulse — warm #faf9f7 canvas, one electric cobalt for all interaction, featherlight pills, hairlines and soft cards.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Cobalt | #0068f9 | Primary CTA fill, active states, primary links |
| Deep Cobalt | #024bb1 | Hover/pressed for cobalt buttons |
| Cerulean | #0074dd | Supporting accent, text links |
| Vivid Violet | #6736eb | Decorative accent: tags, metrics |
| Forest | #046645 | Supporting accent; checklist complete icon; never a status color |
| Canvas Cream | #faf9f7 | Page background |
| Surface Ivory | #fbfaf7 | Card/panel surfaces, active tab pill |
| Pure White | #ffffff | Elevated surfaces, nav, button text on filled CTAs |
| Lavender Mist | #f4f0ff | Decorative wash behind icons, highlight badges |
| Powder Blue | #d6e4f1 | Ghost button borders, blue-tinted dividers |
| Ink Charcoal | #121722 | Primary text, headings, icons (17.9:1 on white) |
| Deep Ink | #1d1d1d | Secondary text, dark surfaces |
| Mid Graphite | #2d2d2d | Dark UI moments, modal overlays |
| Slate Gray | #777c86 | Secondary body, metadata, table labels |
| Steel Gray | #a5a5a5 | Helpers, placeholders, disabled |
| Faint Gray | #cccccc | Icon strokes, subdued control borders |
| Hairline | #efefef | Borders and dividers (max 1px) |
| (gradient stops) | #d5ecff, #c8dcf5 | Hero / CTA banner gradients |

Surfaces: 0 Canvas Cream #faf9f7 → 1 Surface Ivory #fbfaf7 → 2 Pure White #ffffff → 3 Lavender Mist #f4f0ff.

## Typography
- **Roobert** only — 400/500/600/700; sizes 13, 14, 15, 16, 18, 20, 24, 40, 48, 57, 84px; line-height 1.06–1.60; tracking 0.077em on tracked uppercase labels/small caps; OpenType "ss01" on, "kern" on. Fallback: Inter; or Söhne / GT America.

| role | size | line-height | token |
|---|---|---|---|
| caption | 13px | 1.5 | --text-caption |
| body | 16px | 1.56 | --text-body |
| subheading | 18px | 1.5 | --text-subheading |
| heading-sm | 20px | 1.38 | --text-heading-sm |
| heading | 24px | 1.33 | --text-heading |
| heading-lg | 40px | 1.25 | --text-heading-lg |
| heading-xl | 48px | 1.2 | --text-heading-xl |
| display | 57px | 1.09 | --text-display |
| display-lg | 84px | 1.06 | --text-display-lg |

## Spacing, radius, elevation
- Base 8px; comfortable. Scale: 8, 16, 24, 32, 40, 48, 64, 80, 88px (--spacing-N).
- Radius: cards 16px, images 16px, buttons 48px, nav items 48px, icons 60px, pills 100px.
- Shadows:
  - subtle: rgba(0,0,0,0.07) 0px 1px 1px 0px, rgba(0,0,0,0.04) 0px -1px 1px 0px inset, rgba(0,0,0,0.14) 0px 0px 0px 0.5px inset (cards/panels)
  - lg: rgba(0,0,0,0.04) 0px 20px 20px -8px (product screenshots)
- Elevation via background lightness steps (Canvas → Ivory → White) more than shadow. No heavy, colored, or glow shadows.

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 8px.
- Hero: centered 84px headline → 18px subtext (~640px) → two pills, on cream-to-blue gradient.
- Features alternate full-bleed gradient backgrounds and contained card grids; horizontal pill tab bar above large product screenshot; 3-column social-proof stat cards; final full-bleed CTA with diagonal blue gradient from lower-right; 6-column footer.
- Imagery: real product screenshots in 16px containers with lg shadow on gradient/lavender; no photography/illustration/3D; minimal monoline icons.

## Components
- **Primary Filled Button:** #0068f9, #ffffff, 500, 15–16px, 48px radius, 12px 24px, no border; hover #024bb1.
- **Ghost/Neutral Button:** #ffffff, #121722, 500, 15–16px, 48px, 1px #efefef, 12px 24px.
- **Text Link:** #0074dd or #0068f9, 500, underline on hover only.
- **Top Nav:** #ffffff, 1px bottom #efefef; logo left, links center (14–15px/500 #121722), right: Log in text + Request Demo ghost pill + Start for Free filled pill.
- **Hero Section:** gradient #faf9f7 (top) → soft blue (#d5ecff → #f4f0ff) bottom; headline 84px/600 #121722, 1.06, centered; subtext 18px/400, ~640px; ghost + filled CTA pair.
- **Product Feature Card:** #ffffff, 16px, 1px #efefef, 24px padding, subtle shadow; screenshot often overflows the card.
- **Tab Bar:** text labels; active = #fbfaf7 pill bg, 48px radius; inactive plain #121722; no underlines/borders.
- **Customer Stat Card:** #fbfaf7 → #ffffff gradient, 16px, 1px #efefef, 24px; logo 24px tall; label 14–15px/500 #777c86; metric 40–48px/600 in #0068f9 or #6736eb (alternating for rhythm); subtle shadow.
- **Gradient CTA Banner:** full-width diagonal #faf9f7 → #c8dcf5 → #0068f9 (blue bleeds lower-right); headline 48–57px/600 #121722 centered; single cobalt button.
- **Footer:** #ffffff, 1px top #efefef; 6-column link grid; headers 13–14px/600; links 14px/400 #777c86; legal 13px #a5a5a5.
- **Pricing Table Row:** #ffffff, 1px bottom #efefef; headers 14px/500 #777c86; cells 15–16px/400 #121722; total right-aligned 600.
- **Checklist/Step Item:** green circle check #046645 (done), hollow (pending); 15px/400 #121722; 6–8px row gap; optional 8px-radius badge.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #faf9f7 page background — never pure #ffffff.
- 48px pill on all buttons, 16px on all cards.
- Primary buttons #0068f9 / #ffffff / 500 / 15–16px.
- Hero 84px Roobert 600, line-height 1.06.
- Pair filled cobalt CTA with white ghost CTA in heroes.
- #efefef for all borders, never >1px.
- Blue gradient corner only in the final CTA banner.

Don't:
- #ffffff page background.
- Flat single shadows like 0 4px 8px.
- A second chromatic fill on CTAs.
- Headline line-height above 1.15.
- #6736eb for CTAs/links (decorative only).
- Heavy gradients on cards/panels (only hero + CTA banner).
- Borders heavier than 1px in #efefef or #d6e4f1.

Similar: Linear, Attio, Raycast, Pitch, Loom.

## Steal this
- Final CTA banner with a diagonal gradient that "bleeds" the brand blue from one corner — gradient budget spent once.
- Stat cards alternating two accent colors for big metrics to create rhythm without extra UI color.
- Pill-background-only active tab (no underline/border).
- Micro three-layer shadow with inset 0.5px ring for featherlight cards.
