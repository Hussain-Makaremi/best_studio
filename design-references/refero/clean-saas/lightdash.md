---
name: Lightdash
source: https://styles.refero.design/style/d0f65d12-a8e6-4631-99f7-bb7cdcd5b6c5
category: clean-saas
tags: [light, slate-neutral, single-accent, violet, pixel-art, developer]
best_for: Developer-first BI / data tools wanting a calm command-center feel with a code-native nod
---
# Lightdash
> Violet pixel-grid on drafting paper — near-white canvas, slate type, one saturated violet, a pixel-art mosaic as the only ornament.

## Color tokens
| token | hex | role |
|---|---|---|
| Volt Violet | #5e4cff | Primary CTA fill, active links, brand accent |
| Lavender Wash | #c8ccf3 | Muted accent bg, pixel-art mid-tones, tag chips, code strings |
| Lilac Whisper | #dfdbff | Tertiary accent surfaces, selected rows, callouts |
| Onyx | #1a1b25 | Deepest text, dark surfaces, announcement bar, terminal |
| Midnight Ink | #272835 | Dark fills, code bg, primary button fills; shadow tint |
| Graphite Heading | #36394a | Headings, strong body |
| Slate Body | #666d80 | Secondary body |
| Steel Text | #818898 | Metadata, timestamps, captions |
| Fog Text | #a4abb8 | Helper, link underlines, placeholders |
| Mist Border | #c1c7d0 | Secondary borders, disabled |
| Ash Border | #cdd2d9 | Hairline dividers, card borders |
| Frost Tint | #eceff3 | Tertiary surfaces |
| Cloud Mist | #f6f8fa | Alternate section backgrounds |
| Canvas White | #ffffff | Page bg, cards, inputs |

Surfaces: 0 Canvas #ffffff → 1 Cloud Section #f6f8fa → 2 Frost Block #eceff3 → 3 Card #ffffff → 4 Terminal #1a1b25.

## Typography
- **Britti Sans** (display, custom geometric) — 400/500/600; 18–76px; line-height 0.95–1.30; tracking -0.025em (56–76), -0.02em (48), -0.01em (18–20), +0.01em (14–16). Fallback: Space Grotesk Bold or General Sans Semibold.
- **Inter** — 400/500/600; 9–24px body, 12–18px UI; line-height 1.33–1.70; tracking -0.02/-0.015/-0.01em.
- **IBM Plex Mono** — 400, 12px, 1.50, -0.02em (code, terminal).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.5 | -0.14px |
| body-sm | 14px | 400 | 1.63 | -0.14px |
| body | 16px | 400 | 1.5 | -0.16px |
| subheading | 20px | 400 | 1.3 | -0.2px |
| heading-sm | 24px | 400 | 1.25 | -0.48px |
| heading | 32px | 400 | 1.2 | -0.64px |
| heading-lg | 48px | 400 | 1.05 | -1px |
| display | 76px | 600 | 0.95 | -1.9px |

## Spacing, radius, elevation
- Base 4px; comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48, 64, 72, 80, 180px.
- Radius: nav 8, inputs 8, buttons 8, cards 12, badges 999, special 80px.
- Shadows (tinted with #272835 rgba, never neutral gray):
  - sm (hero preview): rgba(0,0,0,0.05) 0 2px 5px 0, rgba(0,0,0,0.04) 0 9px 9px 0, rgba(0,0,0,0.02) 0 20px 12px 0, rgba(0,0,0,0.01) 0 35px 14px 0, rgba(0,0,0,0.01) 0 0 0 1px
  - subtle (branded card): rgba(18,18,18,0.1) 0 1px 1px 0, rgba(18,18,18,0.1) 0 0 0 1px
  - subtle-2: rgba(39,40,53,0.1) 0 0 0 1px
  - subtle-3 (feature elevated): rgba(39,40,53,0.1) 0 0 0 1px, rgba(39,40,53,0.08) 0 24px 24px -12px, rgba(39,40,53,0.08) 0 12px 12px -6px, rgba(39,40,53,0.08) 0 6px 6px -3px, rgba(39,40,53,0.08) 0 2px 2px -1px
  - subtle-4 (soft card): rgba(39,40,53,0.05) 0 0 0 1px, rgba(39,40,53,0.01) 0 50px 20px 0, rgba(39,40,53,0.02) 0 30px 18px 0, rgba(39,40,53,0.04) 0 13px 13px 0, rgba(39,40,53,0.05) 0 3px 7px 0
  - lg: rgba(0,0,0,0.01) 0 54px 21px 0, rgba(0,0,0,0.05) 0 30px 18px 0, rgba(0,0,0,0.09) 0 13px 13px 0, rgba(0,0,0,0.1) 0 3px 7px 0
- Default cards: 1px #cdd2d9, no shadow; multi-layer shadows only for hero previews and elevated feature cards.

## Layout
- Max-width 1200px; section gap 40px; card padding 16px; element gap 8px.
- Hero: asymmetric — left two-thirds headline/sub/CTAs, right one-third pixel mosaic.
- Alternating #ffffff / #f6f8fa bands; 2–3 column card grids; full-width product preview with browser chrome; 2×6 logo grid; testimonials centered at 600px; sticky 64px white nav.

## Components
- **Announcement Bar:** full-width #1a1b25, 12px Inter white centered, inline link #c8ccf3, 8px vertical padding, no radius.
- **Primary Navigation:** white, 64px, 8px-radius dropdowns; violet lightning-bolt logo; links 14px Inter 500 #36394a; Login text link; "Book a demo" ghost (1px #cdd2d9, 8px); "Start for free" filled #272835 white text 8px.
- **Primary Filled Button:** #272835 or #5e4cff, white, 8px, 10–20px horizontal, 14–16px Inter 500. Violet variant one hero CTA per viewport only.
- **Ghost Button:** white, 1px #cdd2d9, 8px, 10px 16px, 14px Inter 500 #36394a; hover border #818898.
- **Tab Toggle:** 999px outer pill, #f6f8fa inactive, white active; 14px Inter 500, #666d80 inactive / #36394a active; active has 1px #cdd2d9 border + 2px shadow; 8px 20px per tab.
- **Hero Section:** #ffffff; headline 56–76px Britti Semibold #36394a -0.025em; body 16–18px Inter #666d80; CTAs 8–12px gap.
- **Pixel-Art Decoration:** 4–12px violet square tiles in a loose grid, upper right; #5e4cff, #c8ccf3, #dfdbff, #ffffff negative space.
- **Product Preview Card:** white, 12px, multi-layer shadow, macOS window chrome, on #f6f8fa.
- **Code Terminal Card:** #1a1b25, 12px, 16px padding; Plex Mono 12px: #a4abb8 plain, #5e4cff keywords, #c8ccf3 strings.
- **Logo Grid:** 2×6, monochrome #36394a or brand colors at 60% scale, 40px row gap.
- **Testimonial Block:** centered 18–20px Inter #36394a, 600px max; small violet pixel icon above; 5 avatars at 80px circles below.
- **Feature Card:** white, 12px, 16px padding, 1px #cdd2d9, no shadow; heading 24px Britti Medium #36394a -0.48px; body 14–16px Inter #666d80 / 1.50; optional 24px violet icon.
- **Input:** white, 1px #cdd2d9, 8px, 10px 12px; 14px Inter #36394a; placeholder #a4abb8; focus 2px #5e4cff at 20% opacity.
- **Badge/Tag:** 999px, #f6f8fa or #dfdbff, 12px Inter 500, 4px 10px, #36394a or #5e4cff.

## Motion
_not captured_ (source states no motion specs)

## Rules (do / don't)
Do:
- #5e4cff for exactly one primary CTA per viewport; never pair with another accent.
- Display Britti Semibold 48–76px, -0.025em.
- Body Inter 14–18px, -0.01 to -0.02em; never #000000 — use #36394a / #666d80.
- 12px cards, 8px buttons/inputs/nav.
- Default cards border-only; shadows reserved.
- Pixel mosaic as sole decoration; tint shadows with #272835.

Don't:
- Additional chromatic accents.
- Centered body copy in feature sections (only hero headlines/testimonials centered).
- Heavy shadows on standard cards.
- Headline line-height > 1.10 (0.95 at 76px is deliberate).
- Inter above 32px.
- Radius > 16px for standard UI (80px, 999px reserved).

## Steal this
- A single pixel-art mosaic in accent tints as the only ornament — instant "code-native" identity.
- Ultra-tight display leading (0.95 at 76px) for architectural headlines.
- Ink-tinted, 4–5-layer long-falloff shadows reserved for the hero preview.
- Dark terminal card embedded in a light page, syntax-coloured with brand accent tints.
