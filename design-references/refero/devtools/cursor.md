---
name: Cursor
source: https://styles.refero.design/style/4e3b4717-84c8-4599-baaf-a343c3d619b6
category: devtools
tags: [light, warm-cream, editorial, serif-accent, sharp-4px, text-only-accent]
best_for: Developer tools that want a warm, literary, print-like light theme instead of dark SaaS
---
# Cursor
> Warm parchment atelier lit by embers: cream canvas, ink-black text, one ember-orange accent used on links not buttons.

Editorial restraint: headlines in weight-400 CursorGothic with progressively tighter tracking — authority from restraint, never bold. Flat paper-like surfaces, hairline borders, soft warm-gray shadows, corners consistently 4px. EB Garamond for editorial subheads/prose; berkeleyMono for code/metadata. Closer to a literary journal than a SaaS dashboard.

## Color tokens
### Accents
| token | hex | role |
|---|---|---|
| Ember | #f54e00 | Orange text accent for links, tags, emphasis — never button background |
| Amber | #c08532 | Warm action button fill (Build, Continue), accent icon strokes |
| Forest | #34785c | Green filled buttons, selected nav, conversion moments |
| Verdant | #1f8a65 | Green text accent — supporting only |
| Crimson | #cf2d56 | Red text accent — supporting only |

### Neutrals
| token | hex | role |
|---|---|---|
| Ink | #26251e | Primary text, primary button bg, nav text — warm near-black |
| Ash | #7a7974 | Icon fills, tertiary body, subdued labels |
| Driftwood | #84847e | Secondary body, table content |
| Mist | #a1a19f | Tertiary helper text, captions |
| Stone | #cdcdc9 | Hairline borders, dividers |
| Linen | #e6e5e0 | Light neutral action fill |
| Bone | #f2f1ed | Card surfaces — paper-on-paper |
| Parchment | #f7f7f4 | Page background |
| (Selection) | #8BC4F8 | Text selection only — the sole cool tone |

Surfaces: 1 Canvas #f7f7f4 · 2 Card #f2f1ed · 3 Elevated #e6e5e0 (secondary buttons, logo tiles) · 4 Outline #cdcdc9.

## Typography
- **CursorGothic** (primary) — 400, 500; 11–72px (8 values); lh 1.00–1.50; tracking 0.01em (14px) → −0.005em (22px) → −0.012em (26px) → −0.02em (36px) → −0.03em (72px); features ss08, ss09, tnum; fallback Inter, system-ui, Helvetica Neue.
- **EB Garamond** (editorial) — 400, 500; 16, 17, 19px; lh 1.35–1.50; normal tracking; feature cswh; fallback Iowan Old Style, Palatino Linotype, ui-serif, Georgia. Subheadings, prose, table data.
- **berkeleyMono** (code) — 400, 500; 12, 13px; lh 1.43–1.67; fallback ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas. Code, CLI, metadata tags, file paths.
- **system-ui** — 400–700; 11, 12, 13px; lh 1.25–1.55; tracking 0.004em; feature case. Micro labels.
- **Lato** (detected) — 400, 600; 10, 12, 14, 16px; lh 1.1, 1.27, 1.33, 1.5; tracking 0.004.

Scale (Minor Third 1.2 from 15px):
| role | size | weight | lh | tracking | token |
|---|---|---|---|---|---|
| display | 72px | 400 | 1.1 | −2.16px | --text-display |
| heading-lg | 36px | 400 | 1.2 | −0.72px | --text-heading-lg |
| heading | 26px | 400 | 1.25 | −0.312px | --text-heading |
| heading-sm | 22px | 400 | 1.3 | −0.11px | --text-heading-sm |
| body | 16px | 400 | 1.5 | — | — |
| body-sm | 14px | 400 | 1.5 | 0.14px | --text-body-sm |
| eyebrow | 12px | — | 1.63 | — | --text-eyebrow |

## Spacing, radius, elevation
- Base 4px; density compact. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 56, 64px (`--spacing-N`).
- Radius: cards, tiles, inputs, buttons 4px · modals 8px.

| shadow | value |
|---|---|
| --shadow-xl | rgba(0,0,0,0.14) 0 28px 70px 0, rgba(0,0,0,0.1) 0 14px 32px 0 |
| --shadow-xl-2 | rgba(0,0,0,0.25) 0 25px 50px −12px, rgba(0,0,0,0.15) 0 12px 24px −8px |
| --shadow-subtle | rgb(235,234,229) 0 0 0 2px |
| --shadow-subtle-2 | oklab(0.263084 −0.00230259 0.0124794 / 0.1) 0 0 0 1px, rgba(0,0,0,0.28) 0 18px 36px −18px |

Contexts: product mockup card = --shadow-xl + 1px inset oklab border; flyout/popover = 0 0 1rem #00000005, 0 0 0.5rem #00000002; window inset top border = 0 −1px 0 0 var(--color-theme-border-02) inset.

## Layout
- Max width 1300px centered; outer padding 24px; section gap 64–96px; card padding 24px; element gap 8px.
- Nav: 52px, transparent, 24px horizontal padding; logo + wordmark left (14px/500), links center (14px/400), right cluster Sign in (text) / Contact sales (ghost) / Download (filled). No sticky shadow.
- Hero: left-aligned headline + dual CTA; full-width product mockup card below; muted landscape photo (mountains/desert) bleeds behind hero.
- Trust strip: single row of 8 logo tiles.
- Features: 50/50 alternating text + identical macOS window mockups.
- Footer: four-column link grid, brand mark left; heading 14px/500; links 13px/400 #7a7974, 8px row gap; no background card.
- Imagery: product screenshots dominate (IDE, diffs, agent plans, terminals, Slack/chat); logos monochrome in Linen pill tiles; icons thin monoline in #7a7974.

## Components
- **Primary filled** — bg #26251e, text #f7f7f4, 4px, padding 0.78em 1.35em 0.8em, CursorGothic 14px/400, no gradient/border; transition color/background 150ms cubic-bezier(0.4,0,0.2,1).
- **Secondary filled** — bg #e6e5e0, text #26251e, 4px, same padding, trailing →.
- **Ghost text button** — transparent, #26251e at 60% opacity, no padding (or 6px square for icons), 4px, underline on hover, 13–14px/400.
- **Amber action** — #c08532, light cream text, 4px, 6px 12px. Used in mockups and CLI/agent UI.
- **Forest action** — #34785c, text #f7f7f4, 1px same-green border, 4px. Review/merge confirmations.
- **Default product card** — #f2f1ed, 4px, 1px border color-mix(in oklab, #26251e 5%, transparent), double warm shadow 28px 70px / 14px 32px, 24px padding; flat list variants no shadow.
- **Logo trust tile** — #e6e5e0, pill shape, logo #26251e at 60%, 16px padding, single row.
- **Window mockup frame** — outer #f2f1ed card 4px + hairline + soft elevation; three gray traffic lights, centered title 13px system-ui; tab strip with active underline; file tabs berkeleyMono 12px.
- **Terminal input** — transparent or #f2f1ed, 1px color-mix(#26251e 10%, transparent), 4px, 10px 12px, berkeleyMono 12px, caret #26251e, prompt ($, >) #7a7974.
- **Footer link column** — heading 14px/500 #26251e; links 13px/400 #7a7974; 8px gap.
- **Mono metadata tag** — transparent, berkeleyMono 12px #7a7974, no border/radius, inline.
- **Selection highlight** — #8BC4F8.

## Motion
- color/background 150ms cubic-bezier(0.4, 0, 0.2, 1) on buttons and links.

## Rules (do / don't)
**Do**
- 4px radius on every button, card, input, tile.
- All headlines weight 400 — "the whisper-weight with tight tracking IS the signature."
- Progressive tracking tightening 0.01em → −0.03em as size grows.
- #f7f7f4 canvas, #f2f1ed cards; 1px color-mix borders before shadows.
- #f54e00 only for inline links/emphasis.
- EB Garamond for editorial subheads/prose, never UI labels/nav.
- berkeleyMono 12px for code, paths, CLI, metadata.
- Pair dark filled (#26251e) with light secondary (#e6e5e0); never two filled of same weight.

**Don't**
- No pure #ffffff or #000000.
- No 600/700 headings.
- No pill (≥999px) buttons or cards.
- No gradients, glows, washes.
- No blue/cool shadows — warm rgba(0,0,0,0.14) only.
- No Ember on backgrounds or large fills.
- No system-ui for headings.
- Max two button styles per action group.

Similar: Linear, Vercel, Stripe, Arc Browser, Notion.

## Steal this
- Warm near-black (#26251e) + cream (#f7f7f4) instead of pure black/white for a printed feel.
- Accent color as text-only punctuation (links/emphasis), never a fill.
- A serif reserved for editorial moments inside an otherwise sans/mono product site.
- Progressive negative tracking tied to size; weight stays 400 everywhere.
