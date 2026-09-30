---
name: Dia Browser
source: https://styles.refero.design/style/b458ca1a-70f0-4f85-b745-f879a4d08457
category: productivity
tags: [light-and-dark, editorial-serif, whisper-weight-display, glass-nav, near-achromatic, lime-saffron-washes, spectrum-marquee]
best_for: Consumer productivity / browser / AI-app launch pages with a dark theatrical hero opening onto a paper-white editorial broadsheet
---
# Dia Browser
> "Blackroom gallery meets editorial broadsheet. A pitch-dark stage opens onto a sunlit paper spread where a single serif headline anchors each section." 112px Exposure at weight 300, floating glass nav, 96% achromatic with lime and saffron editorial washes.

## Color tokens
| token | hex | role |
|---|---|---|
| Void Black | #020204 | Hero background, dramatic dark sections |
| Pure Black | #000000 | Primary text, button text, icon fills |
| Carbon | #636363 | Secondary text, muted nav, helper labels |
| Slate | #888888 | Tertiary text, inactive nav, disabled states |
| Silver | #c6c6c6 | Placeholder text, subtle UI dividers |
| Soft Graphite | #575757 | Dark button backgrounds on light surfaces |
| Paper White | #ffffff | Primary page canvas, white card surfaces |
| Bone | #f8f8f8 | Page canvas, nav backgrounds, base surface |
| Linen | #efefef | Button fills, pill backgrounds, header wash |
| Lime Wash | #f2fcb3 | Accent background wash, highlight zones |
| Saffron | #ffdc5c | Secondary accent wash, warm highlights |
| Spectrum Marquee | linear-gradient(270deg, #FD02F5, #FA3D1D 15.94%, #FFB005 42.76%, #E1E1FE 72.48%, #0358F7 100.02%, #340B05 150.75%) | Sweeping rainbow gradient, signature motion |

Surfaces: 0 Void #020204 (hero stage) → 1 Paper #f8f8f8 (default page canvas) → 2 Card #ffffff (elevated cards, product windows) → 3 Linen #efefef (button fills, pill backgrounds) → 4 Wash #f2fcb3 (lime accent surface).

## Typography
- **Exposure Variable** (display headlines) — weight 300; 112px; line-height 0.85; tracking -0.03em. Fallback: Playfair Display. 112px whisper-weight serif anchoring hero and section titles.
- **Exposure VAR** (section headings) — weight 650; sizes 24px, 48px; line-height 1.17–1.25; tracking -0.05em (48px), -0.03em (24px). Fallback: Inter Tight. Bold companion for feature titles.
- **ABC Oracle** (body & UI) — weights 300, 400, 500; sizes 10–54px (8 values); line-height 1.11–2.19; tracking -0.04em (54px), -0.02em (18px), normal elsewhere. Fallback: Inter.
- **ABC Oracle Triple** (button text) — weight 400; 16px; line-height 2.19. Fallback: Inter.
- **ABC Favorit Mono** (eyebrows, step numbers) — weight 400; 13px; line-height 1.23–1.27; tracking 0.1em uppercase. Fallback: JetBrains Mono. Editorial chapter-marker effect.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 10px | — | 1.5 | — |
| eyebrow | 13px | — | 1.23 | 0.1em |
| body-sm | 16px | — | 2.19 | — |
| body | 18px | — | 1.5 | -0.36px |
| body-lg | 20px | — | 1.5 | — |
| subheading | 22px | — | 1.36 | — |
| heading-sm | 24px | — | 1.25 | -0.72px |
| heading | 48px | — | 1.17 | -2.4px |
| heading-lg | 54px | — | 1.11 | -2.16px |
| display | 112px | 300 | 0.85 | -3.36px |

## Spacing, radius, elevation
- Density comfortable (base unit not captured).
- Spacing: 5, 8, 10, 12, 13, 14, 16, 20, 24, 28, 30, 40, 70, 80, 90px.
- Max-width 1200px; section gap 80px; card padding 20px; element gap 16px.
- Radius: cards 12px, nav 16px, pills 20px, panels 24px, buttons 9999px.
- Shadows:
  - sm: rgba(0,0,0,0.06) 0 2px 8px 0, rgba(0,0,0,0.04) 0 0 2px 0
  - xl: rgba(0,0,0,0.6) 0 8px 30px -8px
  - Product Screenshot Window: drop-shadow(rgba(0,0,0,0.1) 0 2px 4px) drop-shadow(rgba(0,0,0,0.12) 0 18px 24px) drop-shadow(rgba(0,0,0,0.18) 0 40px 64px)

## Layout
- Page structure: full-bleed dark hero (theatrical moment) → centered max-width (~1200px) content sections. Flow: dark theater → broadsheet editorial → feature galleries → settings toggles → dark footer.
- Hero: full viewport; Void Black; large centered human photograph; white logo, tagline, Download button, Pill Watch button overlaid.
- Content sections: 2-column asymmetric: numbered steps (01, 02, 03) left at 40% + large product cards right at 55% + thin vertical accent line separator.
- Feature grids: 2-column card layouts (not 3 or 4), generous gutters, each card ~half viewport width.
- Section rhythm: alternates light (#f8f8f8 canvas) and accent (lime #f2fcb3 or saffron #ffdc5c) bands, 80px vertical gaps.
- Navigation: floating glassmorphic pill bar centered top; backdrop blur; not full-width header. Footer minimal, dark, on Void Black.

## Components
- **Glass Navigation Bar:** floating pill bar; Bone bg (#f8f8f8); 16px radius; 1px border; backdrop-filter blur(12–24px); shadow sm. Logo left, nav pills center (20px radius, transparent, 14px ABC Oracle), Download CTA right.
- **Hero Download Button:** white bg; 20px radius; 0px vertical / 16px horizontal padding; Pure Black text 16px ABC Oracle Triple; shadow xl; centered below tagline.
- **Pill Watch Button (Hero Video):** rgba(0,0,0,0.65); white text; 9999px radius; 10px vertical / 20px right + 12px left padding; 16px ABC Oracle Triple; play icon left.
- **Feature Card:** Bone or white bg; 1px border; 12–24px radius; generous padding; category tag pill top (Linen, 9999px, 14px ABC Oracle); heading 24px Exposure VAR 650; description 16px ABC Oracle 400; product screenshot bottom.
- **Category Tag Pill:** Linen bg; 9999px radius; ~8px vertical / 16px horizontal padding; 14px ABC Oracle; dark text.
- **Editorial Section Header:** 48px Exposure VAR 650; -0.05em; line-height 1.17; Pure Black; sometimes paired with step-number eyebrow (13px ABC Favorit Mono uppercase).
- **Numbered Step List:** vertical stack; 14px row-gap; each: 13px mono uppercase number (Carbon #636363) + 18–20px heading (Pure Black) + 16px body (Carbon); thin vertical accent line on left.
- **Product Screenshot Frame:** white bg card; traffic-light dots top-left; tab bar with favicons; 12px radius; 3-layer drop-shadow filter stack; floats above page.
- **Dark Hero Section:** full-bleed, Void Black; centered large human photograph; Dia wordmark (white) top; tagline 18–22px white; Download button centered; Pill Watch button overlaid lower-center.
- **Spectrum Gradient Bar:** thin 2–4px horizontal bar; student-marquee gradient (pink→red→yellow→lavender→blue→brown); animated marquee motion; used once per page max.
- **Settings Toggle Row:** label left, toggle switch right; 16px ABC Oracle 400; pill toggle with sliding indicator; minimal chrome.
- **Text Link with Arrow:** transparent bg; rgba(0,0,0,0.85) text; 16px radius; 20px vertical / 24px horizontal padding; 16px ABC Oracle Triple; trailing arrow.

## Motion
- Default transition: 0.2s ease on background-color, border-color, color, fill, stroke (unified color shift).
- Secondary easing: cubic-bezier(0.4, 0, 0.2, 1) for slightly more dramatic transitions.
- Spectrum marquee: continuous moderate-speed motion, animated left-to-right.
- Philosophy: minimal, purpose-driven; "Things change color, not position." No spring physics, bounce, or elastic curves.
- Do not add hover transforms (scale, translate) to buttons.

## Rules (do / don't)
Do:
- 9999px radius for all interactive pills, tags, video play button.
- Display headlines 112px Exposure Variable weight 300, line-height 0.85; never loosen vertical compression.
- 0.1em letter-spacing on uppercase eyebrows/step numbers (ABC Favorit Mono 13px).
- 1px solid borders as the primary depth cue; shadows for floating elements only.
- Primary CTAs as 20px-radius floating buttons; reserve 9999px for secondary pills.
- Spectrum gradient sparingly, once per page max, as divider or hero accent.
- 80px section gaps and 2.19 line-height on body.

Don't:
- No bright saturated colors as background fills; system is 96% achromatic; only lime (#f2fcb3) and saffron (#ffdc5c) in small editorial zones.
- No headlines at weight 600–700; Dia speaks 300 (display) and 650 (subheadings).
- No border-radius outside the defined set (12, 16, 20, 24, 9999px).
- No multi-layer drop-shadow stacks on regular cards; reserved for product windows.
- No colored buttons on colored backgrounds.
- No line-height below 1.25 for any text (112px display uses 0.85 only with the custom font).
- No hover transforms on buttons.

## Imagery
Photography for emotional impact only: a dramatic close-up of a screaming man against pure black. Product screenshots as floating browser-window mockups with traffic-light dots, tab bars, full URL bars, treated as displayed objects with real content. No illustration or abstract graphics; icons minimal outlined thin stroke, monochrome black or white. Sparse density. Eight named gradients exist (--creamsicle, --grapefruit, --cotton-candy, --sunshine, --twilight, --midnight, --student, --student-marquee); only the spectrum marquee is brand-defining.

## Steal this
- Whisper-weight 112px serif at 0.85 line-height opening a dark hero.
- Floating glass pill nav with backdrop blur.
- "Things change color, not position": 0.2s color-only hover transitions.
- Mono uppercase step numbers (01, 02, 03) as editorial chapter markers beside big product cards.
