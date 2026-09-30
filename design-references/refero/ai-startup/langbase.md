---
name: Langbase
source: https://styles.refero.design/style/ad48f4ad-42c0-4c91-a189-fa7a73a7a9e9
category: ai-startup
tags: [dark, charcoal, monochrome, terminal-aesthetic, mono-display, pill-buttons, grid-backdrop, aurora-bars]
best_for: Developer AI platform with a terminal/blueprint feel: charcoal canvas, coordinate grid backdrop, mono display type, tiny aurora bars
---
# Langbase
> "Midnight aurora console." Console Charcoal canvas, hairline coordinate grid behind the hero, white pill CTAs, GeistMono display at -0.3em, and a multi-hue aurora used only as fragmented bars.

## Color tokens
| token | hex | role |
|---|---|---|
| Console Charcoal | #232324 | Dominant page canvas, structural hairline borders, visible grid backdrop |
| Bone White | #fafafa | Primary text, primary action fill; bright system pole |
| True Black | #000000 | Deepest surface tone, darkest interactive states, inverted text |
| Off-White | #ebeced | Secondary text, subtle emphasis |
| Mute Gray | #a1a1aa | Muted helper text, nav links, secondary icon strokes |
| Wire Gray | #5c5c61 | Hairline borders, icon strokes, content dividers |
| Recess Black | #181818 | High-contrast neutral action fill, recessed surfaces |
| Nav Ink | #0e0e10 | Navigation bar background only |
| Smoke | #454546 | Muted body text, mid-tone neutral scale |
| Ash | #696970 | Tertiary metadata, timestamps |
| Aurora Spectrum | linear-gradient(to right, #f6d1ac, #f3b5d2, #c7b8f5, #a7eadc, #afcdf6) | Decorative accent only, fragmented bars |

Surfaces: 0 True Black #000000 (deepest accent, inverted CTAs) → 1 Nav Ink #0e0e10 (sticky navigation band) → 2 Recess Black #181818 (recessed interactive fields) → 3 Console Charcoal #232324 (page canvas ground plane).

## Typography
- **GeistSans** (primary UI) — weights 400, 500, 600, 700; sizes 12, 14, 16, 18, 20, 48px; line-height 1.0–1.75; tracking -0.025em all sizes (about -0.3px @12px, -1.2px @48px). Fallback: Inter, system-ui, -apple-system. All UI text.
- **GeistMono** (display/code) — weights 400, 500; sizes 12, 13, 16, 60, 72px; line-height 1.0–1.5; tracking -0.3em @60–72px (about -18px to -21.6px); tight at smaller sizes. Fallback: JetBrains Mono, IBM Plex Mono, ui-monospace. Developer-identity display type and inline code/numeric emphasis.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 18 | -0.3px |
| body-sm | 14px | 20 | -0.35px |
| body | 16px | 24 | -0.4px |
| subheading | 18px | 28 | -0.45px |
| heading | 20px | 28 | -0.5px |
| heading-lg | 48px | 56 | -1.2px |
| display | 60px | 60 | -18px |
| display-xl | 72px | 72 | -21.6px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 80, 112, 160px.
- Radius: tags 4px, icons 4px, inputs 4px, cards 12px, buttons 9999px, large-buttons 100px.
- Shadow: subtle `rgba(0,0,0,0.1) 0 1px 3px 0, rgba(0,0,0,0.1) 0 1px 2px -1px`, applied only to the Primary Pill CTA.

## Layout
- Max-width 1200px; section gap 64–80px; card padding 24px; element gap 12px.
- Hero Grid Backdrop: 1px Console Charcoal coordinate grid lines forming blueprint texture behind the hero, sitting behind headline and aurora bars.
- Hero Headline: GeistSans 48px/500 (or GeistMono 60px), Bone White, -1.2px, line-height 56px, max two lines.

## Components
- **Primary Pill CTA:** Bone White bg, True Black text, 9999px radius, 8px/16px or 10px/20px padding, GeistSans 14px/500; subtle shadow only.
- **Ghost Outline Button:** transparent, 1px Wire Gray border, Bone White text, 9999px radius, same padding, GeistSans 14px/500.
- **Sticky Navigation Bar:** Nav Ink bg, 1px Console Charcoal bottom border, ~56px height; logo left, links center, CTA right; GeistSans 14px/500, links in Mute Gray.
- **Announcement Strip:** full-width band, 1px Console Charcoal border all sides, centered GeistSans 12px Mute Gray; 16px leading icon (4px radius), 8px vertical padding.
- **Hero Grid Backdrop:** see Layout.
- **Aurora Gradient Bars:** fragmented horizontal bars (8px height, varying widths) with multi-hue gradient, positioned right of hero headline; never button fill, text, or container background.
- **Hero Headline:** see Layout.
- **Logo Trust Strip:** horizontal grid of wordmarks (6 per row, then 5), monochrome Bone White or Mute Gray, 24px gap, 32px row gap; caption GeistSans 12px Mute Gray.
- **Code/Mono Label:** GeistMono 13px/400, Mute Gray, no background; 0 letter-spacing at body size (display sizes use -0.3em).
- **Input/Code Field:** Recess Black bg, 1px Wire Gray border, 4px radius, padding 12px/16px; GeistMono 13px for code, GeistSans 14px for text; placeholder Mute Gray; focus 1px Bone White border.
- **Dark Card Surface:** Console Charcoal bg (distinguished by border), 1px Wire Gray border, 12px radius, 24px padding; no shadow.
- **Icon (Geometric Mono):** 1.5px stroke, 16–20px, 4px square or 9999px circular bounding; Bone White primary, Mute Gray secondary, Wire Gray tertiary; outlined only, never filled.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 9999px radius for all primary and ghost buttons.
- -0.025em letter-spacing on every GeistSans size and -0.3em on GeistMono display sizes.
- Anchor every page on Console Charcoal #232324; Nav Ink reserved for top navigation.
- Aurora gradient only as fragmented horizontal bars in hero/feature sections.
- Hold the 4px spacing grid: 4, 8, 12, 16, 24, 32, 40, 48, 64.
- Express depth through #181818 recessed surfaces, not shadows.
- GeistMono 60–72px with -0.3em tracking for a terminal feel.

Don't:
- No chromatic color for buttons, links, or icons.
- No shadows beyond a single 1px whisper on the primary CTA.
- No #000000 as page/section background.
- Don't break the 4px grid or invent radii outside 4, 12, 100, 9999px.
- No aurora gradient as text fill, border, or icon stroke.
- No second accent color or chromatic functional palette.
- No multi-color or filled icons.

## Steal this
- Visible 1px coordinate-grid backdrop behind the hero as a blueprint texture.
- Aurora spectrum limited to small fragmented 8px bars beside the headline.
- Mono display at 60–72px with extreme negative tracking for developer identity.
- Recessed #181818 input/field surfaces on the charcoal canvas instead of shadows.
