---
name: monopo saigon
source: https://styles.refero.design/style/3e52dd36-6ab1-48c6-bc40-47ef6d33abc2
category: minimal
tags: [monochrome, iridescent-hero, oversized-type, pill-ghost-buttons, zero-radius, agency]
best_for: Creative agency / studio portfolios with one iridescent hero gesture and austere editorial type
---
# monopo saigon
> Liquid iridescence behind editorial silence — a monochrome editorial gallery floating on molten light; massive Roobert type, full-pill ghost buttons, one chromatic gesture.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Obsidian | #000000 | Primary text, SVG strokes, overlay fills |
| Paper | #ffffff | Light text on dark, inverse labels |
| Inkstone | #181818 | Footer copy, secondary headings |
| Felt Gray | #6d6d6d | Muted helper text, legal copy |
| Slate Pill | #636363 | Filled neutral button background |
| Pewter | #808080 | Hover/muted state layers |
| Ash Mist | #9a9a9a | Disabled/low-contrast surfaces |
| Iridescent Fade | linear-gradient(90deg, rgb(160,224,171), rgb(255,172,46) 50%, rgb(165,45,37)) | Hero gradient only — sage → amber → oxblood |

## Typography
- **Roobert** (300, 400, 600) — 11–225px across 12 steps; lh 0.70–2.34 (0.70–0.76 display, 1.58 body); fallback Inter or Söhne. All interface text.
- **Raleway** (400, 54px, lh 1.39; fallback Montserrat or Jost) — sparse elegant heading accent only.
- **system-ui** (400; 9px / 16px; lh 1.15–1.32) — UI labels, cookie banners, fine print.

| Role | Size | Weight | Line height |
|---|---|---|---|
| caption | 12px | 400 | 1.19 |
| body-sm | 16px | 400 | 1.15 |
| body | 18px | 400 | 1.21 |
| subheading | 39px | 400 | 1.19 |
| subheading-lg | 45px | 400 | 1.15 |
| heading-sm | 54px | 400 | 1.39 |
| heading | 78px | 300 | 1.1 |
| heading-lg | 94px | 400 | 0.76 |
| display | 225px | 400 | 1.25 |

## Spacing, radius, elevation
- Base 4px, spacious. Scale: 8, 12, 28, 40, 48, 64, 68, 152px
- Radius: buttons 75px; tags 75px; cards, images, inputs 0px (nothing between 1–74px)
- Elevation: none — flat surfaces, 1px hairline borders only

## Layout
- Max width 1078px; section gap 46px; card padding 34px; element gap 14px
- Text-dominant layout, one hero visual gesture per page; left-aligned body

## Components
- **Ghost Pill Button (dark surface)** — transparent, 1px rgba(255,255,255,0.3) border, #ffffff text, 75px, padding 11px 33px, Roobert 16px 400.
- **Ghost Pill Button (light surface)** — transparent, 1px #000000 border, #000000 text, 75px, same padding/font.
- **Filled Neutral Pill** — rgba(55,55,55,0.78) bg, #ffffff text, 1px #ffffff border, 75px; cookie consent/confirmations only.
- **Text Link (no underline)** — 0 radius, no border/bg, Roobert 12–16px 400; #ffffff on dark / #000000 on light.
- **Hero Display Headline** — Roobert 225px 400, lh 1.25, #ffffff on iridescent media; no subheads or CTAs.
- **Section Heading (Whisper)** — Roobert 78px 300, lh 1.10.
- **Section Heading (Anchor)** — Roobert 94px 400, lh 0.76.
- **Project Card / List Row** — transparent, 0 radius, no shadow; full-width image, title below (Roobert 16–18px 400); no card chrome.
- **Top Navigation** — fixed transparent 66px; logo left (Roobert 16px 400), locale center, menu right; items 11–12px 400.
- **Cookie Banner** — fixed bottom, rgba(55,55,55,0.78); system-ui 9–16px + Filled Neutral Pill.
- **Iridescent Hero Backdrop** — full-viewport organic gradient (sage → amber → oxblood); media only.

## Motion
- Easing: cubic-bezier(0.19, 1, 0.22, 1) (ease-out)
- Durations: 0.8s–1.25s for transforms; 0.4s for micro-transitions
- Patient gliding, not snappy; scroll indicator slowly rotates continuously; transforms dominate, rare layout shifts

## Rules (do / don't)
**Do**
- Display headlines 225px Roobert 400, owning the viewport
- 75px pill radius only for buttons/tags; everything else 0px
- Color only in one iridescent hero per page
- Weight 300 at 78px; never above 400 at that scale
- Line-height 0.70–0.76 on display above 78px
- cubic-bezier(0.19, 1, 0.22, 1), 0.8–1.25s
- Text links 0 radius, no underline

**Don't**
- No chromatic UI colors — gradient is media only
- No shadows or elevation
- No radius between 1px and 74px
- No 600+ weights above 45px
- No centered body copy
- No gradients on buttons/badges/UI
- Raleway never for body/nav
- More than one hero visual gesture per page

**Similar references:** Resn, Active Theory, Locomotive, Pentagram.

## Steal this
- Binary radius rule: 0px or full pill — nothing in between.
- One organic gradient hero as the page's only color; everything else B/W.
- Slow expo-out motion (cubic-bezier(0.19,1,0.22,1), 0.8–1.25s) for a luxurious glide.
- Semi-transparent white borders (rgba 0.3) for ghost pills on imagery.
