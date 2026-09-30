---
name: Slite
source: https://styles.refero.design/style/607c2098-bbbb-40bb-b23e-adf2b72c63dd
category: clean-saas
tags: [light, warm-cream, single-accent, serif-display, pill-buttons, hand-drawn]
best_for: Knowledge base / docs / writing tools wanting a warm, document-like marketing site
---
# Slite
> Warm parchment notebook with terracotta pen — every surface cream paper, every accent a single ember-orange stroke.

## Color tokens
| token | hex | role |
|---|---|---|
| Ember Orange | #f67748 | Primary action, filled CTAs, selected card borders, scribble annotations — only saturated surface color |
| Neptune Blue | #74a6f1 | Secondary accent, max one button per page, link accents |
| Verification Green | #479a53 | Green text accent (links, tags, phrases) |
| Verified Mint | #bbf7d0 | Decorative fill for icons, marks |
| Tag Violet | #4b51c3 | Violet text accent (links, tags) |
| Illustration Violet | #6b70d6 | Decorative illustration fill |
| Shade Ink | #2d2f34 | Headings, body — warm near-black |
| Shade Charcoal | #3f434a | Secondary body, nav, subdued headings |
| Shade Slate | #5e646e | Tertiary body, captions, helper |
| Shade Dusk | #6a707c | Fine print, pricing footnotes |
| Shade Fog | #9da3af | Disabled, placeholder |
| Parchment Cream | #fdf9f4 | Page canvas, primary card surface |
| Star White | #ffffff | Elevated surfaces, product mockups, tooltips |
| Dust Sand | #f9efe4 | Secondary surface, tag/chip bg |
| Moon Silver | #ecedef | Hairline borders, dividers, 2px button outlines |
| Border Mist | #d9dde6 | Card borders, low-contrast strokes |
| (compact card) | #fdfdfd | Compact UI card bg |

## Typography
- **Garnett** (display) — weights 400/500/700; 12–64px (6 values); line-height 1.20–2.13. Fallback: Lora, Source Serif Pro, PT Serif. OpenType ss14, ss15, ss19. "Serif-like Garnett paired with humanist sans is Slite's signature typographic contrast."
- **UniversalSans** (body & UI) — weights 400/500/600/700; 10–50px (14 values); line-height 1.00–2.00. Fallback: Inter, Roboto, Public Sans. OpenType ss14, ss15, ss19. 50px/400 hero intentionally light.

Scale (Major Second 1.125 from 16px):
| role | size | weight | line-height |
|---|---|---|---|
| label | 10px | — | 1.2 |
| caption | 13px | — | 1.2 |
| body-sm | 15px | — | 1.5 |
| button | 17px | — | 1 |
| body-lg | 19px | — | 1.4 |
| heading-sm | 26px | 700 | 1.3 |
| heading | 28px | 500 | 1.25 |
| heading-lg | 36px | 500 | 1.2 |
| hero | 50px | 400 | 1.5 |
| display | 64px | 500 | 1.2 |

## Spacing, radius, elevation
- Base 4px; comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 72, 80, 100, 120, 176, 240px.
- Radius: ghostButton 8px, smallCards 12px, productCards 18px, cards 32px, buttons 999px, tags 9999px.
- Shadows (only depth treatment; White Product Cards only):
  - Subtle: rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.05) 0px 2px 6px, rgba(0,0,0,0.01) 0px 4px 12px
  - Small: rgba(0,0,0,0.2) 0px 2px 6px 0px

## Layout
- Max-width 1200px; section gap 96px; element gap 8px. Full-bleed cream canvas.
- Hero: centered Garnett 64px headline (one word circled orange) + 19px UniversalSans subtitle + Dust Tag Chip row + single Ember CTA; product mockup below as White Product Card.
- No alternating dark/light bands — page stays cream; single editorial document flow.

## Components
- **Primary CTA (Ember Pill):** #f67748, white, UniversalSans 17px/600, 999px, 12px 24px. Max once above fold.
- **Dark CTA (Charcoal Pill):** #2d2f34, white, 17px/600, 999px, 12px 20px (header nav, highest intent).
- **Outlined Pill:** transparent, 2px solid #2d2f34, 15–17px/500–600, 999px, 10px 20px.
- **Ghost Text Button:** transparent, #3f434a, 14–15px/500, 4px 8px.
- **Square Ghost Button:** transparent, #2d2f34, 8px radius, 0 8px (close/icon toggles — sharpest radius).
- **Cream Feature Card:** #fdf9f4 or #f9efe4, 32px radius, padding 48 top / 32 bottom / 24 sides, no shadow; optional 2px #f67748 border for selected.
- **White Product Card:** #ffffff, 12px radius, three-layer shadow.
- **Compact UI Card:** #fdfdfd, 16px radius, 12px 16px, no shadow.
- **Ember Testimonial Card:** #f67748 bg, white text, 16px radius, 32px padding; max once per page.
- **Dust Tag Chip:** #f9efe4, #3f434a, 13–15px/500, 9999px, 8px 16px; rows of 3–4.
- **Status Pill:** #4b51c3 or #479a53 text on white, small filled icon, 13px/500, inline above titles.
- **Scribble Annotation:** 1.5–2px #f67748 stroke, no fill, imperfect oval around one headline word.
- **Underline Link:** #3f434a, no underline default; 1px #f67748 underline on hover.
- **Hero Product Frame:** White Product Card with mockup (sidebar, breadcrumb, content), 12px radius, optional 0–1deg rotation.
- **Logo Trust Bar:** monochrome logos on cream, shared baseline, 13px caption beneath each.

CSS quick-start variables were provided (colors, fonts, text sizes, spacing, radius --radius-lg 8 / xl 12 / 2xl 18 / 3xl 32 / full 999 / full-2 9999, shadows, --page-max-width 1200px, --section-gap 96px, --element-gap 8px) — values match the above.

## Motion
Restrained; 130ms ease dominant timing.

## Rules (do / don't)
Do:
- Canvas #fdf9f4, never #ffffff at page level.
- #f67748 for exactly one filled CTA per section; rest charcoal/outlined/ghost.
- Garnett headlines, UniversalSans body; never UniversalSans at 40px+ display.
- 999px pill for primary buttons; 8px only for tiny icon buttons.
- 32px card radius for marketing; 12–18px for product mockups.
- #f9efe4 dust for tags and secondary surfaces, not gray.
- Hand-draw a 1.5px #f67748 circle/underline around exactly one hero word.

Don't:
- A second saturated accent.
- 700-weight UniversalSans at display sizes (hero 50px stays 400).
- More than the three-layer shadow on any element.
- Pure #000000 body text.
- #ecedef / #d9dde6 as fills (border tones only).
- Square chips or rounded-but-not-pill buttons.
- #f67748 fills over >20% of a section.

## Steal this
- Hand-drawn scribble circle around one headline word as the brand signature.
- Huge 32px radius on marketing cards vs. tighter 12–18px on product mockups — two radius registers.
- Warm "dust" (#f9efe4) for chips/secondary surfaces instead of gray.
- A page that never alternates bands — one continuous cream document.
