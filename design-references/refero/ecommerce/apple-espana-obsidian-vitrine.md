---
name: Apple (España)
source: https://styles.refero.design/style/da7e5084-9e5d-4eb2-bb10-4c2d7733a56e
category: ecommerce
tags: [dark, cinematic, single-accent, category-eyebrows, shadowless, product-first]
best_for: Dark cinematic launch pages for premium hardware, alternating black stages and white detail bands
---
# Apple (España) — Obsidian gallery vitrine
> A dark showroom where a single titanium object glows against pure black; dramatic scale, negative space, and restrained color as functional punctuation.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Apple Blue | #0071e3 | Primary filled CTA on dark; only chromatic button color |
| Link Blue | #0066cc | Text links, optimized for white |
| Halo Blue | #2997ff | Lighter link variant, accent on dark |
| Signal Orange | #f56900 | Category eyebrow tags, dividers, focused UI edges |
| Iris Violet | #8668ff | Secondary category accent for product differentiation |
| Reef Teal | #00a1b3 | Tertiary category accent, cool counterpoint |
| Pure Black | #000000 | Hero/feature stage canvas, footer |
| Carbon | #111111 | Elevated surface above black, badge backgrounds |
| Obsidian | #1d1d1f | Primary dark canvas, card surfaces, text on light |
| Graphite | #333336 | Subtle elevated surfaces, secondary buttons |
| Smoke | #424245 | Hairline borders, low-contrast dividers |
| Platinum | #86868b | Muted body text, secondary descriptions |
| Silver Mist | #cccccc | Nav borders, button outlines, inactive chrome |
| Frost White | #f5f5f7 | Primary text on dark, light section surfaces |
| Paper White | #ffffff | Light section backgrounds, button text |

Surfaces: L0 #000000 (hero, stages) · L1 #111111 (elevated badges) · L2 #1d1d1f (cards on dark) · L3 #333336 (subtle panels) · L4 #f5f5f7 (light blocks) · L5 #ffffff (full light sections)

## Typography
- **SF Pro Display** (600–700) — sizes 19, 21, 24, 28, 32, 56, 80px; lh 1.00–1.21; tracking -0.015em (19px) → -0.003em (80px); fallback Inter, system-ui; `numr`
- **SF Pro Text** (400–600) — sizes 10, 12, 14, 17, 20, 44px; lh 1.00–1.83; tracking -0.037em (10px) → -0.010em (20px); fallback Inter, system-ui; `numr`

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| caption | 10px | 400 | 1.83 | -0.37px |
| body | 14px | 400 | 1.43 | -0.22px |
| heading-sm | 19px | 600 | 1.21 | -0.28px |
| heading | 24px | 600 | 1.17 | -0.24px |
| heading-lg | 32px | 600 | 1.14 | -0.32px |
| display | 56px | 700 | 1.07 | -0.84px |
| hero | 80px | 700 | 1.05 | -0.24px |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 76, 80, 96, 104, 160px
- Radius: nav 980px; pill 980px; cards 28px; links 10px; buttons 36px (allowed set: 10, 28, 32, 36, 980px)
- Elevation: no shadows; depth from #000000 / #111111 / #1d1d1f contrast; product photos carry their own gradient shadow on canvas.

## Layout
- Max width 1440px; section gap 88–120px; card padding 28px; element gap 10–12px
- Full-bleed dark canvas, hero fills viewport with massive negative space; dark feature sections stacked, each with a large 28px-radius photo card; transitions to white sections with two-column image+text. Never card grids, masonry, or multi-column text. Single subject per viewport. Dark → dark → light "three-act" rhythm.
- Imagery: studio-lit titanium on #000000 with metallic highlights; lifestyle in high-contrast B&W; SF Symbols outlined icons (Frost White on dark / Obsidian on light).

## Components
- **Hero Stage** — full-bleed #000000, product at 60% viewport height centered; headline 80px SF Pro Display 700 Frost White (-0.24px) bottom-left; eyebrow 17px SF Pro Text 600 Frost White; price label and filled CTA below.
- **Primary CTA (Apple Blue)** — 36px radius, #0071e3, #ffffff SF Pro Text 14px 600, padding 10px 20px. Only filled chromatic button per viewport.
- **Ghost Price Label** — borderless, #ffffff text on dark, SF Pro Text 14px 400, 36px radius, transparent.
- **Category Eyebrow** — #f56900 plain text, SF Pro Text 17px 600, no chrome.
- **Feature Card (dark)** — 28px radius, ~28px padding, full-width B&W photo, white overlay text (SF Pro Text 14–17px Frost White) upper-left, max 3 lines.
- **Light Section Block** — #ffffff bg, orange eyebrow, 56px SF Pro Display 700 Obsidian headline, 14–17px SF Pro Text Platinum body (lh 1.47), image in opposite column.
- **Navigation Bar** — #000000, 980px radius, 10px vertical padding, sticky; logo left, items SF Pro Text 12px 400 Frost White, search/bag right; semi-transparent with backdrop blur on scroll.
- **Promo Banner** — #1d1d1f above nav, SF Pro Text 12px Frost White centered, #0066cc inline link, 3px vertical padding.
- **Section Headline (dark)** — full-bleed, left-aligned, SF Pro Display 600–700 at 56–80px Frost White (-0.84px at 56px); no subtitle.
- **Inline Feature Link** — 32px circular icon container with outlined arrow/compass + 2-line SF Pro Text 17px 600 Obsidian.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #0071e3 as only filled chromatic CTA on #000000
- Radius 28px cards, 36px buttons, 980px nav/pills
- Headlines SF Pro Display 600–700 at 56–80px with negative tracking (-0.84px @56, -0.24px @80)
- Alternate #000000 and #ffffff sections with 88–120px gaps
- #f56900 eyebrows at 17px SF Pro Text 600 — never body or buttons
- Body #86868b on white, #f5f5f7 on dark — never pure #ffffff for paragraphs
- 980px radius for nav and pill interactives

**Don't**
- No shadows or CSS elevation
- Max one filled chromatic button per viewport
- No card grids, masonry, multi-column text
- No orange/violet/teal on paragraphs, backgrounds, large surfaces
- No #ffffff paragraph text on white — use Frost White or Platinum
- No gradients, textures, decorative backgrounds
- No radius outside 10, 28, 32, 36, 980px

## Steal this
- Category-coded eyebrows (orange / violet / teal) as the only use of extra hues — plain text, no chips.
- "Single subject per viewport" rule for cinematic long-scroll pages.
- Off-white body text on black (#f5f5f7, never #ffffff) to reduce glare.
- Floating pill nav (980px radius) on pure black.
