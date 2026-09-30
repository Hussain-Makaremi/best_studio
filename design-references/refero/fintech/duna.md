---
name: Duna
source: https://styles.refero.design/style/8cf4a580-bfb6-4090-a899-f734ffe62370
category: fintech
tags: [light, warm-neutrals, achromatic-ui, pill-buttons, editorial, illustrated-hero, compliance]
best_for: Compliance / risk fintech that wants an editorial, document-like site with one painted hero as the only color moment
---
# Duna
> "Sunset watercolor on warm marble — a single painted landscape over a quiet, editorial compliance document." 99% achromatic UI, aubergine-black ink, ultra-compressed -0.06em display headline.

## Color tokens
| token | hex | role |
|---|---|---|
| Aubergine Ink | #1b0624 | Primary text, heading borders, brand character; warm-purple undertone replaces conventional near-black |
| Espresso | #160f0c | Primary action fill (buttons); warmer/darker than Aubergine Ink |
| Onyx | #0d0d0d | Icon fills, select text; graphic emphasis only |
| Smoke | #1a1816 | Icon borders, card edges, dark UI elements |
| Charcoal | #292421 | Heading borders, dark decorative fills; nav link color |
| Graphite | #444444 | Body text variant, icon strokes, input borders |
| Warm Ash | #766a7c | Muted secondary text, subtle borders |
| Stone | #898683 | Tertiary text, dividers, labels, metadata |
| Bone | #edece7 | Card surfaces, subtle elevated panels |
| Mist | #eeeeee | Input field background; only functional surface tint |
| Linen | #f7f7f5 | Warm canvas background; off-white page tint |
| Paper White | #ffffff | Primary surface (cards, buttons, dominant background) |

Surfaces: 1 Linen Canvas #f7f7f5 (page background) → 2 Paper Card #ffffff (cards, panels, button fills) → 3 Bone Panel #edece7 (nested cards/sections).

## Typography
- **GT America** — weights 400, 500; sizes 12–80px (11 values); line-height 1.00–1.76; tracking -0.06em (72–80px display), -0.05em (44px), -0.03em (32px), -0.02em (24px), -0.01em (20px), normal below 18px. OpenType: "blwf", "cv03", "cv04", "cv09", "cv11", "tnum", "zero". Fallback: Inter, Söhne, Suisse Int'l. Body at 400, emphasis at 500, display at 400 with aggressive negative tracking.
- Additional detected: GT America Regular, GT America Trial Rg (400; 14–16px), GT America Trial Md (400–500; 17px, 80px; tracking -0.012), Inter (400; 12–14px), sans-serif (400; 12px; line-height 1.2).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| micro | 12px | — | 1.2 | — |
| caption | 14px | — | 1.5 | — |
| body-sm | 16px | — | 1.6 | — |
| body | 18px | — | 1.5 | — |
| body-lg | 20px | — | 1.4 | -0.2px |
| subheading | 24px | — | 1.3 | -0.48px |
| heading | 32px | — | 1.2 | -0.96px |
| heading-lg | 44px | — | 1.1 | -2.2px |
| display | 72px | — | 1.0 | -4.32px |
| display (80px variant) | 80px | 500 | 1.0 | — |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 64, 80, 128, 140, 240px.
- Radius: inputs 8px, cards 16px, images 24px, large buttons 60px, buttons/badges 999px.
- Shadow: subtle rgba(0,0,0,0.05) 0 0 0 1px inset — elevation is built from hairline borders and contrast alone.

## Layout
- Max-width 1200px; section gap 80–120px; card padding 24–32px; element gap 16px.
- Hero: full-viewport illustrated landscape fading to white; centered stack (announcement pill, 72px headline, subtext, CTA).
- Below fold: white cards on Linen vs. pure Linen sections; customer logo bar; 3-column stat row; 3-column feature grid.
- Nav: flat top bar (not sticky). Rhythm 80–120px between major sections, "generous, unhurried, document-like". No sidebar, mega-menu, or dark sections.

## Components
- **Navigation Bar:** white bg, 64–72px tall; logo (asterisk mark + DUNA wordmark, GT America 500, Aubergine Ink) left; centered text links 14–16px Charcoal; right-aligned dark filled pill CTA; no border, no shadow.
- **Hero Illustrated Landscape:** full-bleed watercolor sunset (warm oranges, pinks, greens, distant mountains, water reflection); the only color saturation; never replicate as UI accent.
- **Hero Headline:** 72–80px GT America 400, Aubergine Ink, centered, -0.06em, line-height 1.00.
- **Announcement Pill:** small dark pill (999px radius), white 12–14px text, centered above hero headline.
- **Primary Filled Button:** Espresso #160f0c bg, white text, 14–16px GT America 400, 999px radius, 10–12px vertical / 18–24px horizontal padding, no shadow/border.
- **Large Pill Button:** 60px radius, 20–24px vertical padding; hero-scale primary.
- **Ghost/Outlined Button:** white/transparent, 1px Graphite or Stone border, dark text, 999px radius.
- **Customer Logo Bar:** row of 6–7 grayscale logos, uniform height, Stone or Graphite monochrome.
- **Stat Display:** oversized number (e.g. 6.2x, 22%, 2.8x) at 72–80px GT America 400, Aubergine Ink, -4.32px; 14px Stone caption below; three-up.
- **Feature Card:** white on Linen, 16px radius, 24–32px padding; small line icon top-left, 24px GT America 500 heading, 16px Graphite description; no shadow or border.
- **Cookie Banner:** fixed bottom-right, white, 12–16px radius, 1px Graphite border, 12–16px Graphite text + ghost 'Okay' button.
- **Input Field:** Mist #eeeeee bg, 8px radius, 1px Graphite or Stone border, 16px text Aubergine Ink; focus = border shifts to Espresso, no glow, no shadow.
- **Logo Mark:** asterisk glyph + 'DUNA' wordmark, GT America 500, Aubergine Ink.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Espresso #160f0c as the only filled button color.
- Display headlines 72–80px with -0.06em tracking (compressed tracking is the editorial signature).
- Linen #f7f7f5 as page canvas, not pure white.
- 999px radius on all interactive buttons and tags.
- Enable GT America features ("blwf", "cv03", "cv04", "cv09", "cv11") when the font is available.
- Keep the interface 99% achromatic; hero illustration is the single color moment.
- 16–24px radius on all cards and images.

Don't:
- No blue or green accent.
- No drop shadows beyond the 1px inset ring.
- No sharp corners on buttons or cards (below 8px breaks softness).
- Don't use the hero sunset colors as UI accents.
- Don't use display tracking on body text (-0.06em only works at 44px+).
- Don't fill the page with multiple colored sections.
- No rounded, friendly icon libraries; use thin-stroke geometric line icons.

## Imagery
Single full-bleed watercolor hero (sunset landscape, mountains, reflective water, green meadow foreground, pink-orange sky). Below the hero: product-screenshot-free, icon-driven, thin-stroke geometric line icons in Charcoal on white cards; grayscale customer logos. No photography, 3D renders, or stock imagery.

## Steal this
- One painted illustration as the entire color budget while the UI stays achromatic.
- -0.06em tracking on 72–80px display type so letters nearly touch.
- Warm aubergine-black ink and espresso buttons instead of the conventional fintech blue.
- Elevation from a 1px inset ring and Linen/Paper/Bone tint steps only.
