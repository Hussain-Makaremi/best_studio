---
name: Vercel
source: https://styles.refero.design/style/f24daf3a-d43f-4dec-85a9-8ac1d5148a03
category: devtools
tags: [light, monochrome, geist, hairline-rings, mono-eyebrows, compact]
best_for: Developer-marketing, infra products, API docs and terminal-adjacent minimal SaaS
---
# Vercel
> Typeset terminal on white paper: monochrome, contrast and type hierarchy over color.

Near-white canvas (#fafafa), black typography, hairline borders, zero decorative color. The only brand ornament is the triangle mark (▲) and wordmark.

## Color tokens
| token | hex | role |
|---|---|---|
| Paper White | #fafafa | Page canvas, card surfaces, light button fills |
| Pure White | #ffffff | Elevated card surfaces, inset highlights, inputs |
| Hairline | #ebebeb | 1px borders on buttons, links, cards |
| Ash | #c9c9c9 | Disabled text, muted labels, brand watermarks |
| Smoke | #a8a8a8 | Tertiary text, placeholder, subtle icon fills |
| Graphite | #8f8f8f | Footer micro-copy, secondary metadata |
| Slate | #7d7d7d | Customer brand names, muted heading variants |
| Stone | #666666 | Muted captions, helper text |
| Charcoal | #4d4d4d | Body text, card descriptions, secondary button labels |
| Obsidian | #171717 | Primary headings, nav borders, dark button fills |
| Carbon | #000000 | SVG icon fills, logo marks, triangle glyph only |
| Terminal Green | #297a3a | Link/tag accents, emphasized phrases (not status) |
| Spectrum Gradient | linear-gradient(90deg, rgb(0,255,149) 0%, rgb(255,208,0) 25%, rgb(255,23,68) 50%, rgb(149,0,255) 75%, rgb(0,229,255) 100%) | Marketing hero accents only |
| Solar Edge | linear-gradient(90deg, rgb(255,220,48) 0%, rgb(56,162,255) 100%) | Feature callouts |

## Typography
- **Geist Sans** — 400, 450, 500; 14–64px; lh 1.00, 1.10, 1.43, 1.50; tracking −3.84px @64, −3.36px @56, −1.5px @30, normal @body; features `"calt" 0, "rlig", "ss11"`; fallback Inter. Weight 450 for hero = "confident without shouting."
- **Geist Mono** — 400, 500, 600; 8–14px; lh 1.00–1.67 (7 values); tracking 0.071em @11–12px; same features; fallback JetBrains Mono. Labels, code, CLI, metadata, uppercase eyebrows.

| role | size | weight | lh | tracking |
|---|---|---|---|---|
| eyebrow | 11px | 400 | 1.5 | — |
| caption | 13px | 400 | 1.54 | — |
| body | 16px | 400 | 1.5 | — |
| heading | 30px | 400 | 1.1 | −1.5px |
| heading-lg | 56px | 450 | 1.0 | −3.36px |
| display | 64px | 400 | 1.0 | −3.84px |

## Spacing, radius, elevation
- Scale: 4, 6, 8, 12, 14, 16, 20, 24, 32, 40, 44, 208px. Density compact.
- Radius: nav 2px · cards 6px · buttons 6px · pills 9999px.
- Subtle (bordered card): `rgba(0,0,0,0.08) 0 0 0 1px, rgb(250,250,250) 0 0 0 2px`.
- Subtle-2 (ghost button/link): `rgb(235,235,235) 0 0 0 1px`.

## Layout
- Max width 1280px; section gap 96–128px (no background shifts or dividers); card padding 16px; element gap 12px.
- Top nav 64px, sticky, #fafafa with backdrop blur; wordmark left, nav center-left 14px/400, ghost + filled buttons right.
- Hero: three-column asymmetric — oversized headline left (56–64px, −0.06em, 450), black triangle center, eyebrow stack right. No background image.
- Feature grid: 2-up bordered cards, 30px titles, 14–16px descriptions #4d4d4d, embedded product mockups.

## Components
- **Filled black button** — #171717, text #ffffff, 6px, 12px horizontal, Geist 14px/400.
- **Ghost outline** — transparent, text #4d4d4d, 1px #ebebeb via box-shadow, 6px, 20px padding.
- **Pill button** — 9999px, 12px horizontal, 0 vertical (header), contrast-flipped.
- **Text link** — no bg/border, #171717 or #4d4d4d, 14–16px.
- **Bordered card** — #ffffff, 6px, stacked box-shadow rings, 16px padding.
- **Inverted card** — #171717, white text, 6px.
- **CLI output panel** — light bg, Geist Mono 12–13px, commands prefixed ▲ (#171717), confirmations ✓ (#297a3a).
- **Logo strip** — 7+ logos, 24–32px gaps, faded to #7d7d7d.
- **Eyebrow label** — Geist Mono 11px/400, 0.071em, uppercase, #171717; 12px margin to heading.
- **Top nav / hero / feature grid** — see Layout.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #171717 for primary text and filled buttons (never pure #000/#fff there).
- 6px radius on cards/buttons; 9999px only for pills.
- Headlines 400–450, −0.06em at 56–64px.
- Geist Mono 11–12px uppercase 0.071em for eyebrows/labels/metadata.
- Depth via hairline box-shadow rings.
- Sections 96–128px apart with no background shifts.
- ▲ prefix for CLI commands, ✓ in #297a3a for confirmations.

**Don't**
- No chromatic color outside Terminal Green or spectrum gradient.
- No radius >6px on cards/buttons.
- No text colors outside #171717/#4d4d4d/#666666.
- No drop shadows.
- No 300 or 600–700 headlines.
- No line-height >1.0 at 56–64px.
- No Geist Sans for labels/metadata/code.

Use cases: developer-marketing platforms, infrastructure, API docs, terminal-adjacent UIs, minimal SaaS dashboards, print-like publications.

## Steal this
- Double box-shadow ring (1px dark alpha + 2px canvas color) as a crisp card border.
- Weight 450 headlines — between regular and medium.
- CLI glyph vocabulary (▲ command, ✓ success in one green) as brand texture.
- Sections separated purely by whitespace — no bands, no dividers.
