---
name: monopo saigon
source: https://styles.refero.design/style/3e52dd36-6ab1-48c6-bc40-47ef6d33abc2
category: agency
tags: [light, monochrome, iridescent-hero, pill-buttons, oversized-display, flat]
best_for: Agency/studio sites that want monumental type on an achromatic UI with one fluid, iridescent hero moment
---
# monopo saigon
> Liquid iridescence behind editorial silence — a monochrome editorial gallery floating on molten light.

Radical monochrome discipline (pure black/white/grays) with massive Roobert typography and a single expressive gesture: full-pill 75px buttons. Hero environments use iridescent fluid gradients while the interface remains strictly achromatic. Motion emphasizes patient gliding over snappy responses.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #000000 | Primary text, SVG strokes, overlay fills |
| Paper | #ffffff | Light text on dark surfaces, inverse labels; primary canvas |
| Inkstone | #181818 | Footer body, secondary headings |
| Felt Gray | #6d6d6d | Muted helper text, legal copy |
| Slate Pill | #636363 | Filled neutral button background |
| Pewter | #808080 | Hover/muted state layers |
| Ash Mist | #9a9a9a | Disabled or low-contrast surfaces |
| Iridescent Fade | linear-gradient(90deg, rgb(160,224,171), rgb(255,172,46) 50%, rgb(165,45,37)) | Hero gradient media only |

Surfaces: 1 Paper #ffffff (primary canvas) · 2 Slate Pill #636363 (button fills) · 3 Obsidian #000000 (dark overlays) · 4 Ash Mist #9a9a9a (muted layers).

## Typography
- **Roobert** — weights 300, 400, 600; sizes 11–225px across 12 values; line-height 0.70–2.34 (tight 0.70–0.76 on display, generous 1.58 on body). Fallback: Inter or Söhne. Role: all interface text, nav, headlines, body, lists.
- **Raleway** — weight 400, 54px, line-height 1.39. Fallback: Montserrat or Jost. Role: specific heading contexts for elegant contrast.
- **system-ui** — weight 400, 9px / 16px, line-height 1.15–1.32. Role: micro UI labels, cookie banner, fine print.

| role | size | weight | line-height |
|---|---|---|---|
| display | 225px | 400 | 1.25 |
| heading-lg | 94px | 400 | 0.76 |
| heading | 78px | 300 | 1.10 |
| heading-sm | 54px | 400 | 1.39 |
| subheading-lg | 45px | 400 | 1.15 |
| subheading | 39px | 400 | 1.19 |
| body | 18px | 400 | 1.21 |
| body-sm | 16px | 400 | 1.15 |
| caption | 12px | 400 | 1.19 |

## Spacing, radius, elevation
- Base unit 4px; density spacious.
- Spacing scale: 8, 12, 28, 40, 48, 64, 68, 152px.
- Section gap 46px · card padding 34px · element gap 14px.
- Radius: buttons 75px, tags 75px; cards, images, inputs 0px.
- Elevation: deliberately none. Surfaces distinguished by color inversion and 1px hairline borders. Only exception: translucent slate pill on cookie banner uses background opacity instead of shadow.

## Layout
- Page max-width 1078px.
- Text-dominant layout; hero is full-viewport iridescent media with centered monumental headline.

## Components
- **Ghost Pill Button (dark surface)** — transparent bg, 1px solid rgba(255,255,255,0.3) border, #ffffff text, 75px radius, 11px / 33px padding, Roobert 16px 400.
- **Ghost Pill Button (light surface)** — transparent bg, 1px solid #000000 border, #000000 text, 75px radius, 11px / 33px padding, Roobert 16px 400.
- **Filled Neutral Pill** — rgba(55,55,55,0.78) bg, #ffffff text, 1px solid #ffffff border, 75px radius. Cookie consent only.
- **Text Link (underline-free)** — no bg/border, 0px radius, Roobert 12–16px 400, #ffffff (dark) or #000000 (light).
- **Hero Display Headline** — Roobert 225px 400, line-height 1.25, #ffffff over iridescent dark media; centered, monumental, no subheads.
- **Section Heading (Whisper)** — Roobert 78px 300, line-height 1.10.
- **Section Heading (Anchor)** — Roobert 94px 400, line-height 0.76.
- **Project Card / List Row** — transparent bg, 0px radius, no shadow; full-width image, title below in Roobert 16–18px 400.
- **Iridescent Hero Backdrop** — full-viewport gradient sage green → molten amber → deep oxblood; organic fluid texture (possibly video/shader); only chromatic surface in system.

## Motion
- Easing: cubic-bezier(0.19, 1, 0.22, 1).
- Durations: 0.8–1.25s for transforms; 0.4s for micro-transitions.
- Transforms favored over repositioning.
- Rotating animation on scroll indicator at slow tempo.

## Rules (do / don't)
**Do**
- Display headlines at 225px weight 400; let them own the viewport.
- Use 75px pill exclusively for buttons/tags; everything else 0px.
- Reserve color for one iridescent hero backdrop per page.
- Weight 300 at 78px for manifesto headlines.
- Line-height 0.70–0.76 on display sizes above 78px.
- Apply the cubic-bezier easing to transforms over 0.8–1.25s.
- Text links at 0px radius, no underlines.

**Don't**
- Never chromatic UI colors (black/white/gray interface only).
- Never box-shadow or elevation on cards/buttons/images.
- Never border-radius between 1–74px (jump 0px to 75px).
- Never bold/heavy weights (600+) above 45px.
- Never center-align body copy.
- Never gradients on buttons/badges/UI controls.
- Never Raleway for body/navigation.
- Never fill canvas with imagery (text-dominant layout).

## Steal this
- Binary radius system: 0px for everything, one big pill value (75px) for interactive elements only — no in-between.
- Quarantine color into a single hero medium (fluid gradient/shader) and keep the UI fully achromatic.
- Light weight (300) at large sizes for "whisper" manifesto headings vs. 400 with ultra-tight 0.76 leading for "anchor" headings.
- Slow expo-out easing (0.19,1,0.22,1) at ~1s for a premium glide.
