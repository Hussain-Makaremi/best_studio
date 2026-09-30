---
name: N8n
source: https://styles.refero.design/style/8601c8ef-e1ea-4186-adb2-6f9a74caf436
category: devtools
tags: [dark, violet-black, gradient-cta, ember-orange, color-stepping, light-weight-display]
best_for: Automation/workflow platforms and real-time monitoring UIs targeting technical audiences
---
# N8n
> Workflow engine at midnight: deep purple-black surfaces lit from within by orange fire and electric blue current.

Technological restraint over flashiness: near-black violet base (#0e0918), intentional color stepping for elevation, two gradient accents.

## Color tokens
### Brand gradients
| token | value | role |
|---|---|---|
| Ember CTA | linear-gradient(30deg, rgb(253,137,37), rgb(255,12,0)) | Primary CTA buttons only — "ember glow that reads as kinetic energy" |
| Electric Current | linear-gradient(141deg, rgb(7,122,199), rgb(107,33,239)) | Link underlines, focus rings, canvas connections — data flow |

### Brand solids
| token | hex | role |
|---|---|---|
| Ember Scorch | #ff492c | Icon fills, secondary accents |
| Crimson Glow | #56312d | Card shadow tints |

### Neutrals (dark)
| token | hex | role |
|---|---|---|
| Void Base | #0e0918 | Page background — violet undertone |
| Elevated Surface | #1a1624 | Card backgrounds |
| Deep Panel | #1b1728 | Secondary card surface |
| Muted Shell | #2c2834 | Ghost button backgrounds |
| Border Smoke | #3e3a46 | Nav and container borders |

### Neutrals (light)
| token | hex | role |
|---|---|---|
| Steel Muted | #48556a | Badge text on light backgrounds |
| Fog Text | #9d9797 | Secondary body, captions |
| Ash Text | #d1cece | Primary body and UI text |
| Silver Rail | #e5e7eb | Border lines, nav edges |
| Cloud White | #ffffff | High-emphasis headings, icon fills |

## Typography
- **Geomanist** (display & body) — 300, 400; 12–54px; fallback DM Sans, Inter (variable, 300 for display).
- **Geomanist-Book** (medium emphasis) — 400; 16–24px; fallback DM Sans 500.

Scale (Major Second 1.125 from 16px):
| role | size | weight | lh | tracking |
|---|---|---|---|---|
| Caption | 12px | 400 | 1.5 | — |
| Body-sm | 14px | 400 | 1.5 | — |
| Body | 16px | 400 | 1.5 | −0.29px |
| Subheading | 18px | 400 | 1.4 | — |
| Heading-sm | 20px | 400 | 1.25 | — |
| Heading | 24px | 400 | 1.2 | −0.17px |
| Heading-lg | 48px | 300 | 0.94 | −0.86px |
| Display | 54px | 300 | 0.88 | −1.08px |

Weight 300 at 48–54px is "deliberately restrained, letting the lightning bolt hero illustration do the shouting"; lh 0.88 "stacks headline lines into a dense visual block"; body 400 at 1.5–1.7 line-height for dark reading comfort.

## Spacing, radius, elevation
- Base 8px. Scale: 8, 16, 24, 32, 40, 48, 64, 80, 128px. Density comfortable.
- Radius: inputs/buttons 8px · nodes 12px · pills/tags 9999px · badges 24px · cards 16px · large cards 24px.
- Elevation strategy: "color-stepping instead of drop shadows" — page → card → elevated panel by background only.

| shadow | value |
|---|---|
| Subtle | rgba(255,255,255,0.2) 0 1px 1px inset, rgba(8,8,8,0.2) 0 1px 2px, rgba(8,8,8,0.08) 0 4px 4px, rgb(7,122,199) 0 7px 0 −12px, rgba(255,255,255,0.12) 0 6px 12px inset |
| Small | rgba(0,0,0,0.26) 0 0 8px 0 |
| Subtle-2 (glowing inset) | rgba(255,255,255,0.1) 0 0 0 1px inset, rgba(255,142,93,0.3) 0 1px 0 0 inset |

Cards use inset white-10% borders and faint orange inset bottom glows (rgba(255,142,93,0.3)) — "backlit hardware."

## Layout
- Max width 1200px; section gap 80–120px; element gap 16–24px.
- Imagery: single hero 3D orange-red lightning bolt (volumetric light, glass facets, bloom) right-bleed; product screenshots with 24px radius clipping; section backgrounds with subtle radial gradients (warm ember corners, faint blue halos); no photography. Integration icons (Slack, Jira…) 32–48px in 12px containers are the only colorful elements outside CTA and hero.

## Components
- **Ember gradient CTA** — Ember gradient bg, #ffffff Geomanist 400 14–16px, 8px, 10–14px × 20–24px. Top nav + hero.
- **Ghost outline** — transparent, 1px solid #e5e7eb, #ffffff text, 6px, 24px padding.
- **Frosted ghost** — bg rgba(13,10,25,0.28), 1px solid rgba(255,255,255,0.1), #d1cece, 8px, 14px, shadow rgba(0,0,0,0.26) 0 0 8px. Tertiary/icon buttons.
- **Pill tag button** — bg rgba(163,163,163,0.2), 1px solid #e5e7eb, #ffffff, 8px, 0 20px. Category/use-case filters.
- **Feature card** — #1a1624, 16px, 48px 44px padding, no shadow.
- **Glowing inset card** — transparent, inset hairline + orange bottom glow (Subtle-2), 24px. Stats, testimonials, proof.
- **Dark feature panel** — #1b1728, 24px; full-width panels with screenshots.
- **Hiring badge** — #ffffff, text #48556a 12px, 24px radius, 4px 10px.
- **Workflow node** — #1a1624 or brand color, 12px, 40–48px icon containers, Electric Current gradient connection lines.
- **Nav bar** — #0e0918 full-bleed, 1px bottom #3e3a46, 66px; logo left; links 14px #d1cece; right GitHub pill, "Sign in", "Get Started" Ember button.
- **Footer mega-nav** — #0e0918 with radial ember glow rgba(175,106,140,0.46) → transparent; 5 columns; headers 14px/400 #ffffff; links 14px/300 #9d9797.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #0e0918 as the only page background — "the violet undertone is load-bearing."
- Ember gradient exclusively on primary CTAs.
- Geomanist 300, lh 0.88 for 48–54px display.
- Inset box-shadows instead of borders on transparent cards.
- Cards at #1a1624 / #1b1728 — exactly one step above base.
- 8px buttons/inputs, 16px cards, 24px large panels.
- Electric Current only for link underlines, focus rings, connection lines.

**Don't**
- No warm/neutral dark grays (#1a1a1a, #222, #333) — all surfaces carry violet.
- No 700/800 weights — 300 and 400 only.
- No #ffffff body text at normal sizes — #d1cece or #e5e7eb.
- No drop shadows for card elevation.
- No Ember gradient as section fill.
- No 9999px on cards/sections.
- No brand-colored partner logos — monochrome #d1cece.

Use cases: automation platforms, workflow engines, dev tools, SaaS dashboards, API products; mission-critical / real-time monitoring UIs.

## Steal this
- Tint the dark base toward a hue (violet) so the whole page has an undertone, not dead charcoal.
- Two gradients with strict jobs: warm = action, cool = connection/flow.
- 1px orange inset bottom-glow on cards reads as backlit hardware.
- Light (300) display weight with lh 0.88 lets an illustration do the shouting.
