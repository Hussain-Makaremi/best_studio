---
name: Hyperstudio
source: https://styles.refero.design/style/8eb9c53e-d69c-497a-b640-610856cf3a60
category: dark-mode
tags: [dark, agency, hairline-borders, wireframe, gold-accent, editorial]
best_for: Studio / agency sites wanting an architectural, type-led "wireframe in light" dark aesthetic
---
# Hyperstudio
> Blueprint scratched into obsidian — type and hairline borders carve white space from pure black, with the occasional gold compass-mark.

Editorial-tech: near-black #101010, off-white #f3f3f3 type, 1px #212121 hairlines, warm gold or signal-green accents. Oversized weight-400 headlines with negative tracking. Skeletal components — outlined buttons, ghost pills, thin dividers, no shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #101010 | Page canvas, full-bleed dark background |
| Carbon | #080808 | Deepest surface, hero bands, overlays |
| Chalk | #f3f3f3 | Primary text, headings, body on dark |
| Smoke | #9c9c9c | Secondary muted text, captions, helpers (also body text per rules) |
| Ash | #c1c1c1 | Mid-weight borders, subtle dividers, tertiary text |
| Graphite | #212121 | Primary 1px border — cards, grids, section dividers |
| Iron | #474747 | Secondary border and stroke detail |
| Signal White | #ffffff | Filled pill buttons, inverted text, icon strokes |
| Compass Gold | #6f6759 | Outlined icon strokes — warm metallic accent |
| Card Slate | #3b3d45 | Card/panel border accent on elevated sections |
| Pulse Green (component) | #98ff38 | Live/active status dot only |
| Badge surface (component) | #1a1a1a | Status badge background |

## Typography
- **Aeonik**: 400, 700; 13–63px (10 values); lh 0.95–1.43; -0.011em @ 63px, -0.007em @ 44px, default at body; features `'ss01' on, 'cv11' on`; fallback Inter, Satoshi, General Sans. Weight 400 across all sizes is the signature.
- **Input** (mono-feel meta): 400; 8–18px (6 values); lh 1.20–1.54; -0.037em @ 8px, -0.022em @ 18px; fallback IBM Plex Mono, JetBrains Mono, Space Mono. Labels, captions, status pills, fine print.

Scale (Minor Third 1.2 from 14px):
| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 13px | 400 | 2.69 | — |
| body | 16px | 400 | 1.25 | — |
| heading-xs | 18px | 400 | 1.31 | — |
| subheading | 21px | 400 | 0.95 | — |
| heading-sm | 23px | 400 | 1.07 | — |
| heading | 34px | 400 | 1.03 | — |
| heading-lg | 44px | 400 | 1.07 | -0.31px |
| display | 63px | 400 | 1.05 | -0.69px |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 40px.
- Max-width 1200px; section gap 120–210px; card padding 32–48px; element gap 20–24px.
- Radius: tags 4px, cards 8px, icons 99px, pill buttons 9999px. (CSS vars also list --radius-md 4.5px, --radius-lg 8px, --radius-2xl 20px, --radius-full 99px.)
- No drop shadows. Elevation only via 1px #212121 hairlines; white pill buttons lift by contrast. Levels: 0 Obsidian #101010; 1 Carbon #080808; 2 Hairline Grid #212121.

## Layout
Full-bleed Obsidian canvas, content in 1200px column. Hero: centered headline stack with full-width dot-map below. Sections separated only by 1px Graphite rules — no alternating bands. Services in a bordered 2×2 grid. "Why Hyperstudio?" narrow centered column. Transparent non-sticky nav. Slow editorial rhythm (120–210px between sections).

## Components
- **White pill (primary):** #ffffff fill, #101010 text, 9999px, 12px 24px, Aeonik 14px/400 uppercase, right icon/arrow, no shadow ("START NOW", "LET'S CHAT").
- **Ghost outline (secondary):** transparent, 1px #ffffff, white text, 8px radius, 10px 20px, 14px/400 uppercase ("VIEW WORK").
- **Status badge:** bg #1a1a1a, 1px #212121, 4px, 8px 14px, #98ff38 dot prefix, Aeonik 12px/400 #9c9c9c uppercase tracking ("2/5 SPOTS LEFT FOR JULY").
- **Service card (2×2 cell):** transparent, 1px Graphite (bottom and sides, no top), 32px Compass Gold outlined icon top-left, heading 14px/400 uppercase #f3f3f3, body 14px/400 #9c9c9c, 48px padding.
- **Portfolio card:** no fill, 1px #212121 border/divider, 8px, small outlined client icon centered, name 16px/400 Chalk, category Input 13px uppercase Smoke, 24px vertical padding.
- **Section divider:** 1px solid #212121 full width — the most repeated element.
- **Top nav:** transparent; "Hyperstudio" wordmark 18px/400 Chalk; links SERVICES, PORTFOLIO, PROCESS 14px uppercase Smoke, 24px gaps; outlined "LET'S CHAT" pill right; 1px Graphite bottom border.
- **Headline display block:** 63px/400 Chalk, lh 1.05, -0.69px; followed by 21px/400 Smoke sub-headline.
- **Dot-map world graphic:** full-width globe of #f3f3f3 dots; decorative.
- **Manifesto block:** max 600px centered; title 23px/400 Chalk; body 16px/400 Smoke, 24px lh; ghost "READ MANIFESTO" button.
- **Outlined icon set:** 1.5px stroke, no fill, #6f6759 or #f3f3f3, 24–32px, geometric (pen nib, open book, monitor, waveform).
- **Footer:** 1px Graphite top border, transparent; email 14px Chalk; links Input 13px Smoke; 32px vertical padding.

## Motion
_not captured_ ("Not specified in documentation").

## Rules (do / don't)
Do:
- Weight 400 for all headings
- Separate every section with 1px #212121; no background shifts
- 9999px only on filled white pills; else 4px or 8px
- Display 63px Aeonik 400, -0.69px — "This is the voice."
- #6f6759 Compass Gold only for icon strokes
- #98ff38 dot only for live/active status
- Body text #9c9c9c, never #808080 ("the slight warm tilt matters")

Don't:
- Drop shadows
- Bold/semibold display
- Colored fill behind text
- Card radius above 8px
- Icons in colors other than Gold or Chalk
- Photography as hero/section content
- Break the 1200px column (full-bleed only for canvas and dot-map)

Imagery: near-zero photography; dot-matrix world map; thin gold/chalk icons. Similar: Resn, Active Theory, Locomotive, Pentagram, Ueno.

## Steal this
- 1px hairline rules as the only section separator — no band color changes.
- Bordered 2×2 service grid with open tops for an architectural blueprint look.
- Muted warm-metal accent (#6f6759) for icons only — luxury without saturation.
- Status badge with green live dot + mono uppercase ("2/5 spots left") for scarcity.
