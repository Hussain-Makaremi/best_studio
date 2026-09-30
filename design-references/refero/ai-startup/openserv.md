---
name: OpenServ
source: https://styles.refero.design/style/063be10d-593d-4c81-a99e-a7543737b9db
category: ai-startup
tags: [light, white-canvas, serif-display-weight-300, signal-violet, pill-buttons, floating-nav, tri-color-stripe]
best_for: AI agent platform site wanting a bright, editorial, gallery-like page with a light serif hero and one violet action color
---
# OpenServ
> "Bright blueprint on frosted glass." White canvas, OS Chronik 300 serif at 72px, OS Studio Grotesk 400 for everything functional, Signal Violet pills, a floating shadowed nav and a mint-violet-black stripe as the closing band.

## Color tokens
| token | hex | role |
|---|---|---|
| Signal Violet | #5f79ff | Primary action fill, active nav, icon accents, focused borders |
| Mint Pulse | #01fe93 | Success, highlights, section stripe accents |
| Pure White | #ffffff | Canvas, card surfaces, button text on violet |
| Ink Black | #000000 | Primary text, headings, borders, icon strokes |
| Fog Gray | #f5f5f5 | Card lift, subtle backgrounds, muted links |
| Mist Gray | #a6a6a6 | Secondary borders, placeholder strokes, muted nav |
| Ash Gray | #4d4d4d | Secondary body text, subdued copy |
| Smoke Gray | #9c9c9c | Tertiary borders, disabled outlines |
| Slate Gray | #707070 | Helper text, metadata, fine print |
| Tint Wash | #d9defc | Subtle violet-tinted accent (Level 2 surface); sparkle decoration |

Surfaces: Level 0 Canvas #ffffff → Level 1 Card #f5f5f5 (elevated content blocks) → Level 2 Tint Wash #d9defc.

## Typography
- **OS Studio Grotesk** (primary UI) — weight 400 only; sizes 12–72px; line-height 0.90–1.40; tracking -0.02em to -0.017em. Fallback: Inter, Manrope, DM Sans. Nav, buttons, body copy, cards, UI text; secondary display at 40–72px.
- **OS Chronik** (display/editorial) — weight 300 only; sizes 18, 24, 34, 72px; line-height 0.90, 1.00, 1.10, 1.20; tracking -0.020em at 72px, -0.015em at 24–34px. Fallback: Cormorant Garamond Light, Playfair Display Light, EB Garamond Light. Editorial headlines, section openers.
- **Generic sans-serif** — weight 400, 12px, line-height 1.2.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.2 | — |
| body | 15px | 400 | 1.4 | — |
| subheading | 20px | 400 | 1.25 | — |
| heading-sm | 24px | 400 | 1.2 | — |
| heading | 30px | 400 | 1.18 | — |
| heading-lg | 40px | 400 | 1.1 | — |
| display | 72px | 300 | 0.9 | -1.44px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 64, 80, 120px.
- Radius: inputs 12px, nav 16px, cards 16px, images 16px, badges 100px, buttons 100px.
- Elevation: Floating Nav Bar `rgba(0,0,0,0.1) 0 0 48px 0`. No other shadows.

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 10–20px.
- Vertically centered hero with sparkles and display word; full-width editorial headline block; alternating centered text blocks and 3-column card grids (horizontal scroll capable); full-bleed colored stripes between sections; floating nav elevated with 48px shadow. Gallery-like breathing rhythm.

## Components
- **Floating Nav Bar:** white pill (#ffffff), 16px radius, 48px soft shadow; logo lockup (icon + "OpenServ" OS Studio Grotesk 15px #000000) left; centered nav links 15px #000000, 16px gaps; violet pill CTA right.
- **Violet Pill CTA:** #5f79ff fill, white text (OS Studio Grotesk 15px/400), 100px radius, 10px vertical, 18–20px horizontal padding, white arrow glyph.
- **Ghost Nav Link:** text-only, OS Studio Grotesk 15px #000000, 8px horizontal padding; hover shifts toward #5f79ff; no fill, no underline.
- **Content Card:** white, 1px #f5f5f5 or #a6a6a6 border, 16px radius, 24px padding; violet caption header, OS Studio Grotesk 20–24px #000000 title, 15px #4d4d4d body; footer: violet pill left, 40px circular expand button right.
- **Highlight Card:** content card structure with 16px-radius image filling 40–50% height; images full-bleed within card (dark photographic or neural-network illustration).
- **Editorial Headline Block:** centered on pure white; OS Chronik 300 72px #000000, -1.44px, line-height 0.9; subtitle OS Studio Grotesk 18–20px #4d4d4d, 16–20px gap; no decoration.
- **Decorative Sparkle:** four-pointed stars and circles in #d9defc or light violet at 10–20% opacity, scattered asymmetrically around display text.
- **Section Divider Stripe:** 2–4px full-bleed band: left third #01fe93, middle #5f79ff, right #000000; no padding above/below.
- **Logo Lockup:** circular concentric ring icon #000000 + "OpenServ" OS Studio Grotesk 400 #000000 15px; 8px gap.
- **Expand Button:** circular 40px, 1px #a6a6a6 border, white fill, thin '+' glyph #000000, bottom-right of content cards.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #5f79ff filled pills (100px radius) for all primary actions.
- Pair typefaces deliberately: OS Chronik 300 for editorial, OS Studio Grotesk 400 for functional.
- Keep cards flat with 1px hairline borders (#a6a6a6 or #f5f5f5); no drop shadows on content.
- -0.020em letter-spacing at 72px display, -0.017em at 20–24px UI sizes.
- Center editorial headlines on pure white with no decoration.
- 16px radius for cards, images, nav; 100px pill for buttons and badges only.
- Mint-violet-black section stripe only as a closing band, not inline.

Don't:
- No drop shadows on cards, buttons, or images (shadow reserved for floating nav).
- No serif weight above 300.
- No additional accent colors (monochromatic + 2 chromatic notes only).
- No rectangular buttons; pill shape is a system commitment.
- No gradients on surfaces (tri-color stripe excepted).
- Body text range 13–18px only.
- Don't use #01fe93 as CTA fill (mint is status/accent only).

## Imagery
Abstract decorative elements (four-pointed sparkles, circles in light violet, low opacity) for the hero. Two image modes: editorial photography (portrait crops, hard edges, only card radius applied) or dark neural-network diagrams (green/teal nodes and lines on #0a0a0a background). No lifestyle, staging, or 3D renders.

## Steal this
- Whisper-weight (300) serif 72px on pure white with scattered pale-violet sparkles.
- Three-color 2–4px stripe (mint / violet / black) as a closing section band.
- Floating white nav with a 48px soft shadow as the only shadow on the page.
- Content cards with a violet caption, violet pill, and a circular "+" expand button.
