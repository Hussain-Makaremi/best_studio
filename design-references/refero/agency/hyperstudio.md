---
name: Hyperstudio
source: https://styles.refero.design/style/8eb9c53e-d69c-497a-b640-610856cf3a60
category: agency
tags: [dark, monochrome, hairline-borders, mono-labels, gold-icons, flat]
best_for: Editorial-tech studios, design agencies, creative services and portfolio sites wanting restrained, type-forward obsidian branding
---
# Hyperstudio
> Blueprint scratched into obsidian. Type and hairline borders carve white space from pure black, with the occasional gold compass-mark to show the way.

Editorial-tech on a near-black canvas where light carves out form. Typography carries hierarchy through scale and tracking rather than weight; components reduce to skeletal outlines — no shadows, no fills except primary white pills. Wireframe rendered on obsidian.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian `--color-obsidian` | #101010 | Page canvas, full-bleed dark background |
| Carbon `--color-carbon` | #080808 | Deepest surface, hero band, overlay backgrounds |
| Chalk `--color-chalk` | #f3f3f3 | Primary text, headings, body copy on dark |
| Smoke `--color-smoke` | #9c9c9c | Secondary muted text, captions, labels |
| Ash `--color-ash` | #c1c1c1 | Mid-weight borders, subtle dividers, tertiary text |
| Graphite `--color-graphite` | #212121 | Primary 1px border for cards, grids, dividers |
| Iron `--color-iron` | #474747 | Secondary border and stroke detail |
| Signal White `--color-signal-white` | #ffffff | Filled pill buttons, inverted text, icon strokes |
| Compass Gold `--color-compass-gold` | #6f6759 | Outlined icon strokes (service/portfolio sections) |
| Card Slate `--color-card-slate` | #3b3d45 | Card and panel border accent on elevated sections |
| Pulse Green (reference) | #98ff38 | Live/active status indicators only |
| (badge bg) | #1a1a1a | Status badge background |

## Typography
- **Aeonik** `--font-aeonik` — weights 400, 700; sizes 13–63px (10 values); line-height 0.95–1.43; letter-spacing -0.011em at 63px, -0.007em at 44px, default at body. OpenType `'ss01' on`, `'cv11' on`. Substitutes: Inter, Satoshi, General Sans. Weight 400 across all sizes — authority through scale and tracking, never bold.
- **Input** `--font-input` — weight 400; sizes 8–18px (6 values); line-height 1.20–1.54; letter-spacing -0.037em (8px), -0.022em (18px). Substitutes: IBM Plex Mono, JetBrains Mono, Space Mono. Role: meta text, labels, captions, status pills, fine print.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 13px | 400 | 2.69 | — | `--text-caption` |
| body | 16px | 400 | 1.25 | — | `--text-body` |
| heading-xs | 18px | 400 | 1.31 | — | `--text-heading-xs` |
| subheading | 21px | 400 | 0.95 | — | `--text-subheading` |
| heading-sm | 23px | 400 | 1.07 | — | `--text-heading-sm` |
| heading | 34px | 400 | 1.03 | — | `--text-heading` |
| heading-lg | 44px | 400 | 1.07 | -0.31px | `--text-heading-lg` |
| display | 63px | 400 | 1.05 | -0.69px | `--text-display` |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 40px (`--spacing-*`).
- Section gap 120–210px · card padding 32–48px · element gap 20–24px.
- Radius: tags 4px · cards 8px · icons 99px · buttons (pills) 9999px.
- Elevation: no drop shadows. Elevation exclusively via 1px Graphite (#212121) hairline borders. Only white-filled pill buttons lift, via color contrast.

## Layout
- Max width 1200px centered column for all content; full-bleed reserved for canvas and dot-map.
- Service grid 2×2; manifesto block centered at max-width 600px.

## Components
- **White Pill Button (primary)** — fill #ffffff, text #101010 Aeonik 14px 400 uppercase, padding 12px 24px, radius 9999px; small icon/arrow right-aligned. Highest-priority CTAs (START NOW, LET'S CHAT).
- **Ghost Outline Button (secondary)** — transparent, 1px #ffffff border, 8px radius (not full pill), text #ffffff Aeonik 14px 400 uppercase, padding 10px 20px.
- **Status Badge / Pill** — bg #1a1a1a, 1px #212121 border, 4px radius, padding 8px 14px, Aeonik 12px 400 uppercase #9c9c9c, 6px Pulse Green (#98ff38) dot prefix. E.g. "2/5 SPOTS LEFT FOR JULY".
- **Service Card (2×2 grid cell)** — transparent, 1px #212121 border bottom and sides only (no top), padding 48px, 32px outlined Compass Gold icon top-left, heading Aeonik 14px 400 uppercase #f3f3f3 with 32px margin-top, body Aeonik 14px 400 #9c9c9c.
- **Portfolio Card** — transparent, 1px #212121 border or divider, 8px radius, small centered outlined icon, client name Aeonik 16px 400 #f3f3f3, category label Input 13px uppercase #9c9c9c, 24px vertical padding.
- **Section Divider Line** — 1px solid #212121, full content width; no gradients, fades or decoration.
- **Top Navigation Bar** — transparent over Obsidian, 1px #212121 bottom border; wordmark Aeonik 18px 400 #f3f3f3 left; links (SERVICES, PORTFOLIO, PROCESS) Aeonik 14px 400 uppercase #9c9c9c with 24px gaps; outlined "LET'S CHAT" pill right.
- **Headline Display Block** — Aeonik 63px 400, #f3f3f3, line-height 1.05, letter-spacing -0.69px, centered or left; followed by sub-headline Aeonik 21px 400 #9c9c9c.
- **Dot-Map World Graphic** — pixelated globe of small #f3f3f3 dots on #101010; no stroke/fill; decorative hero visual.
- **Manifesto Text Block** — centered, max-width 600px; title Aeonik 23px 400 #f3f3f3; body Aeonik 16px 400 #9c9c9c, line-height 1.5, 24px leading; ghost "READ MANIFESTO" button below.
- **Outlined Icon Set** — 1.5px stroke, no fill, Compass Gold #6f6759 or Chalk #f3f3f3, 24–32px, geometric minimal (pen nib, open book, monitor, waveform).
- **Footer / Bottom Bar** — 1px #212121 top border, transparent, email Aeonik 14px #f3f3f3, links Input 13px #9c9c9c, 32px vertical padding.

## Motion
_not captured_ (source states no motion specifications provided).

## Rules (do / don't)
**Do**
- Weight 400 for all headings; never bold. Scale and tracking carry hierarchy.
- Separate every section with a 1px #212121 hairline rule; no background color shifts.
- 9999px radius only on filled white pill buttons; everything else 4px or 8px.
- Display type at 63px Aeonik 400, letter-spacing -0.69px.
- #6f6759 Compass Gold exclusively for icon strokes, never text or backgrounds.
- #98ff38 Pulse Green dot only for live/active status.
- Keep body text #9c9c9c Smoke; never pure #808080 (warm tilt matters).

**Don't**
- No drop shadows; elevation via hairlines and color contrast only.
- No bold/semibold on display type.
- No colored fill behind text; canvas stays Obsidian or Carbon.
- No fully rounded corners on cards; 8px max.
- No icons in colors other than Compass Gold or Chalk.
- No photography for hero or section content; dot-maps, icons, type only.
- Never break the 1200px content column.

Imagery: near-zero photography — dot-matrix world map and outlined icon set only; whitespace and type are primary content.

## Steal this
- Hairline-only elevation: 1px #212121 rules as the entire structural language on near-black.
- Mono "meta" typeface (Input) for labels/status beside a single-weight grotesk for everything else.
- A desaturated, muted accent (Compass Gold #6f6759) used only for icon strokes — accent without shouting.
- Scarcity status pill with a single neon dot (#98ff38) as the only saturated pixel.
