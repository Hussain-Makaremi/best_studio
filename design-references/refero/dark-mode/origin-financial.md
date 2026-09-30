---
name: Origin Financial
source: https://styles.refero.design/style/c60f05ff-2420-4a24-92db-80c4b6a74683
category: dark-mode
tags: [dark, fintech, serif-display, light-weight-serif, chromatic-tiles, three-voice-type]
best_for: Personal finance / wealth platforms wanting editorial authority, restrained luxury, and dark-first UI
---
# Origin Financial
> Midnight gallery of quiet wealth — near-black canvases, whisper-weight serif headlines, chromatic feature cards like illuminated color panels.

Most surfaces monochrome; saturated color only in full-bleed category tiles and data signals. Three type voices: serif for emotion, neo-grotesque for UI, monospace for technical labels. White fill / black text is the sole primary action.

## Color tokens
| token | hex | role |
|---|---|---|
| Iris Gleam | #847dff | Primary chromatic accent for feature category cards |
| Cyan Signal | #00b3dd | Data accent — chart lines, sparklines, forecasting |
| Pale Iris | #d1c9ff | Softer panels, background washes |
| Deep Iris | #4b49aa | Shaded panels, hover states |
| Orchid Bloom | #dd90d8 | Pink category card (lifestyle/spending) |
| Periwinkle | #90b8f0 | Soft blue for advisory/couples modules |
| Void | #000000 | Icon fills, button text on white, input backgrounds |
| Abyss | #090a0b | Deeper stacked sections |
| Obsidian | #0f1011 | Page canvas |
| Graphite | #2e2e2e | Elevated modules |
| Steel | #3f4041 | Hover/pressed surface |
| Silver | #cacaca | Light inverted cards (stats, testimonials) |
| Fog | #6a6b6b | Muted text, disabled links |
| Ash | #9f9fa0 | Body text, descriptions, secondary links |
| Cloud | #f5f5f7 | Softer white heading variant |
| Pure | #ffffff | Primary text, primary action fill, nav strokes |

Structural gradients only:
- Dark Chrome: `linear-gradient(135deg, rgb(43,43,44), rgb(19,19,19))` — device frames, chrome surfaces
- Sky Atmosphere: `linear-gradient(rgb(15,16,17), rgb(19,29,39) 18%, rgb(26,71,136) 37%, rgb(64,138,193) 69%, rgb(64,138,193) 102%)` — behind hero photo

## Typography
| family | weights | sizes | line-height | tracking | role |
|---|---|---|---|---|---|
| Lyon Display | 300 | 38, 80, 96px | 0.9–1.0 | normal | Display headlines |
| Suisse Int'l | 300, 400 | 18px+ | 1.41–2.0 | normal | Body, card descriptions, links, inputs |
| Suisse Int'l Trial | 400 | 16px UI, 11px labels | 1.0–2.18 | 0.182em (11px) | Extended UI, tracked labels |
| Roboto Mono | 400, 500 | 10–16px | 1.35–2.0 | 0.016–0.021em | Uppercase labels, data readouts, badges |

| role | size | line-height | token |
|---|---|---|---|
| mono-label | 12px | 2 | --text-mono-label |
| body-sm | 14px | 1.67 | --text-body-sm |
| body | 16px | 1.5 | --text-body |
| subheading | 18px | 1.5 (0 tracking) | --text-subheading |
| heading-lg | 38px | 0.9 | --text-heading-lg |
| display-sm | 80px | 1 | --text-display-sm |
| display | 96px | 0.9 | --text-display |

Rules: Lyon Display 300 at 80–96px, lh 0.9 — authority through restraint; first word often italic. Suisse 300 at 18px echoes the display. Roboto Mono only uppercase at 10–12px. Substitute for Lyon: DM Serif Display.

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 68, 100, 120, 140px.
- Max-width 1200px; section gap 80px; card padding 32px; element gap 12px.
- Radius: inputs/buttons/nav items 8px; cards/stat blocks 16px; feature cards/category tiles 30px; pill buttons 9999px.
- Elevation by surface color, not shadow. Levels: 0 Obsidian #0f1011; 1 Abyss #090a0b; 2 Graphite #2e2e2e; 3 Steel #3f4041; 4 Silver Inverted #cacaca.
- Only shadow: `--shadow-lg: rgba(0,0,0,0.2) 0px 18px 20px 0px`.

## Layout
Full-bleed dark canvas, 1200px container. Rhythm: (1) atmospheric hero + centered headline + inline AI prompt, (2) full-bleed #0f1011 modules, (3) light #cacaca inverted stat blocks, (4) product mockup bands with 90px internal padding. Headlines always centered. Feature grid 3 columns, 12–15px gaps. 24–80px between modules. Sticky glass nav (backdrop-filter blur(24px)): logo, 3 ghost items, "Log In" text link, white "Get Started" right.

## Components
- **Primary CTA:** bg #ffffff, text #000000, 8px, padding 12px 18px, Suisse 16px/400, right arrow → (21:1 contrast).
- **Ghost outline:** transparent, 1px #ffffff, white text, 8px, 12px/18px, 16px.
- **Nav glass button:** bg rgba(255,255,255,0.1), 1px white, 8px, 9px/12px; in nav with blur(24px).
- **Pill badge button:** bg rgba(255,255,255,0.2), 1px white, pill, 1px/6px.
- **Pill chip label:** bg rgba(255,255,255,0.12), 1px rgba(255,255,255,0.15), radius 1440px, 10px/32px, #fafafa 10–11px, uppercase eyebrow.
- **Feature category card:** one of six chromatic fills, 30px, 32px padding, white text; headline Lyon 38px/300; description Suisse 16px/400.
- **Stat / inverted card:** #cacaca, 30px, 32px, #000000 text.
- **Phone mockup module:** #2e2e2e, 16px, 90px padding.
- **AI prompt input:** bg #000000, text #fafafa, 8px, padding 8px top/bottom 22px left, 14–16px; placeholder "Where am I overspending this month?"; round submit rgba(255,255,255,0.2) with arrow.
- **Display headline:** Lyon 300, 80–96px, lh 0.9, #ffffff or #f5f5f7.
- **Section subhead:** Suisse 18px/300, lh 1.5, #ffffff titles or #9f9fa0 descriptions.
- **Promo eyebrow badge:** white 12% bg, 1px white 15%, 1440px, 10px/32px, Roboto Mono 12px/500 uppercase white ("$1 FOR 1 YEAR — LIMITED TIME").
- **Award laurel badge:** white SVG laurel, Lyon 18px/300 headline, Roboto Mono 10–12px uppercase subtext.

## Motion
- Quick state transitions: 0.2s ease on background-color and opacity (hover/focus).
- Long atmospheric reveals: 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) for hero text fades and product entrance.
- Border trace: 'borderTurn' animation on hexagonal/circular frame highlights.
- No bouncy springs, overshoots, or parallax.

## Rules (do / don't)
Do:
- Lyon Display (or DM Serif Display) at 300 for all display — never bold
- 8px buttons/inputs/nav; 16–30px cards; 9999px only true pills
- Chromatic colors only for full-bleed category tiles
- White-on-black as the only primary action
- Roboto Mono uppercase 10–12px with 0.016–0.182em for labels/badges/data
- lh 0.9 on Lyon 96px
- Surfaces by color step (#0f1011 → #2e2e2e → #cacaca), not shadow

Don't:
- Bold Lyon Display
- Drop shadows on cards
- Chromatic colors on text under 18px
- Body at full #ffffff — use #9f9fa0 or #f5f5f7
- Break the serif/sans/mono three-voice system
- Decorative gradients on UI surfaces
- #00b3dd for body or large fills

Imagery: full-bleed desaturated cool sky/cloud hero; tilted iPhone renders on near-black with volumetric glow; no illustrations/abstract/lifestyle; monoline white icons; text ~80% of visual weight.
Best-fit: personal finance, investment apps, HNW advisory, dark-first fintech.

## Steal this
- Light-weight (300) serif display at 80–96px, lh 0.9 — luxury via restraint.
- Three-voice type system: serif = emotion, sans = UI, mono = data.
- Monochrome UI + a family of chromatic category tiles (30px radius) as the only color.
- A light inverted card (#cacaca) to break dark rhythm for stats/testimonials.
