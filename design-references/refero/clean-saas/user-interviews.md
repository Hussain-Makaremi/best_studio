---
name: User Interviews
source: https://styles.refero.design/style/376baf20-9ace-405d-bf4a-086016f2b1e3
category: clean-saas
tags: [light, mint-tint, serif-display, mono-labels, hand-drawn-illustration, flat]
best_for: Research / people-centric platforms wanting a human, sketchbook-like, scholarly tone
---
# User Interviews
> Hand-drawn research field notes — warm off-white canvas with pale mint and blush surfaces, literary serif headlines, mono uppercase labels, hand-drawn line illustrations.

## Color tokens
| token | hex | role |
|---|---|---|
| Deep Teal | #1c5d5f | Primary action button fill |
| Pine Shadow | #0e4749 | Outlined/ghost borders, secondary link underlines |
| Sage | #65b8a2 | Outlined borders, illustrations, soft accent strokes |
| Lake Teal | #2a7779 | Illustration fills, accent borders |
| Forest Floor | #156152 | Filled button hover/selected |
| Ink Navy | #16325a | Secondary filled CTA (product direction), selected nav |
| Dusty Rose | #d6aec1 | Accent button borders, illustration tints |
| Mint Mist | #a2cbcd | Outlined borders, illustration washes, ghost buttons, stat separators |
| Sea Foam | #cae1e2 | Highlight washes, decorative backgrounds |
| Soft Black | #1a1a1a | Link text, image fallback borders |
| Illustration Ink | #231e21 | Hand-drawn outlines |
| Charcoal Navy | #283338 | Nav text and borders |
| Slate | #333333 | Body text fallback, secondary headings |
| Paper White | #f2f8f7 | Page canvas (near-white with mint tint) |
| Card Mint | #e4f0f1 | Card and panel surfaces |
| Blush Sand | #f2e8e2 | Alternating sections, illustration backgrounds |

## Typography
- **Sofia Pro** (UI & body) — 400/500/700; 12–24px (9 values); line-height 1.27–2.0; tracking -0.01em at 18px+, 0.043em at 12–14px. Fallback: Inter, DM Sans, Manrope.
- **P22 Mackinac Pro** (display & headings) — 400/500; 30, 44, 50, 64px; line-height 1.16, 1.20, 1.32, 1.33; tracking normal. Fallback: Source Serif 4, Lora, Crimson Pro.
- **P22 Mackinac Pro Italic** (accent) — 700; 30, 36, 50px; line-height 1.17, 1.20, 1.33. Emphasis inside serif headings.
- **IBM Plex Mono** (section labels) — 400/500/600; 13–20px; line-height 1.30–2.76; tracking 0.038–0.059em; always uppercase.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| Caption | 12px | 400 | 1.5 | 0.52px |
| Body-sm | 14px | 400 | 1.43 | — |
| Body | 16px | 400 | 1.5 | — |
| Subheading | 20px | 500 | 1.4 | -0.2px |
| Heading-sm | 24px | 700 | 1.38 | -0.24px |
| Heading | 44px | 400 (P22) | 1.2 | — |
| Heading-lg | 50px | 400 | 1.16 | — |
| Display | 64px | 400 | 1.2 | — |

## Spacing, radius, elevation
- Base 8px; comfortable. Scale: 8, 16, 24, 32, 40, 48, 56, 64, 88, 112px.
- Radius: cards 12px, buttons 48px, nav pills 88px, tags 100px, full pill 1000px.
- Elevation: flat color layering only; no drop shadows. Surfaces step canvas → mint → blush with 1px hairlines.

## Layout
- Max-width 1200px; section gap 88px; card padding 24px; element gap 8px.

## Components
- **Primary Filled Button:** #1c5d5f, white, 48px radius, Sofia Pro 14px/500, 12px 24px; hover #156152. One per viewport.
- **Secondary Filled Button (Navy):** #16325a, white, 48px, 14px/500 — product-direction CTA beside teal.
- **Ghost Outline Button:** transparent, 1px #0e4749, #0e4749 text, 48px.
- **Pill Nav Button:** 88px radius, 14px/400, #283338, no fill/border; active may use teal text.
- **Section Eyebrow Label:** IBM Plex Mono 13–14px/500–600, uppercase, 0.038–0.059em, #283338 or #0e4749, colored dot prefix (teal/navy/sage).
- **Feature Card (two-column):** #e4f0f1, 12px radius, 32px padding; equal-width pair with UI mockup on top, heading + checklist below; no shadow.
- **Stat Banner Strip:** full-width, 1px border (#e4f0f1 or black), white/canvas bg; Plex Mono uppercase 600 numbers / 400 labels; pipe separators in #a2cbcd (e.g. "6 MILLION participants | 1 HOUR to first match | 98% POSITIVE session feedback").
- **Filter Pill:** 88–100px radius; #e4f0f1 default / #1c5d5f active; Sofia 13–14px/500; 6px 14px; text #283338 / white.
- **Logo Trust Bar:** grayscale logos (#333 / monochrome), centered in light bordered container.
- **AI Assistant Pill Banner:** 88–1000px radius; #e4f0f1 or #f2f8f7 with thin border; sparkle prefix; teal link "Explore AI Assistant →".
- **Illustration Panel:** people in browser/window frames; #231e21 ~2px outlines; selective #65b8a2 / #d6aec1 fills; motifs (stars, arrows, circles, plants) in #65b8a2, #d6aec1, #cae1e2.
- **Checklist Feature List:** bold teal ✓ (#0e4749 or #1c5d5f); Sofia 16px #333 or #283338; 8px gap; fixed indent.
- **Card UI Mockup:** white, 12px radius, thin border; filter chips, dropdowns, stats; embedded at top of feature cards.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #1c5d5f teal as sole primary action, max one per viewport; pair with navy #16325a for secondary product direction.
- Headlines P22 Mackinac Pro 44–64px, normal tracking, 1.16–1.20.
- All eyebrows: Plex Mono uppercase 13–14px, 0.038–0.059em, colored dot prefix.
- 48px radius on buttons; 1000px on nav pills.
- Distinguish cards with #e4f0f1 / #f2e8e2 fills, never shadows.
- Illustrations in #231e21 line work with selective teal/rose fills.

Don't:
- Drop shadows on cards/panels.
- Pure #ffffff page bg — use #f2f8f7.
- Button colors beyond teal, navy, ghost.
- Sofia Pro headlines.
- System fonts for section labels.
- Sharp button corners (48px minimum).
- Photography instead of illustration.

Similar: Calendly, Substack, Notion, Zapier, Typeform.

## Steal this
- Mono uppercase eyebrow with a small colored dot prefix — the "system annotation" voice.
- Stat banner strip in mono uppercase with pipe separators.
- Bold-italic serif phrase inside a regular-weight serif headline for pull-quote energy.
- Flat tinted surfaces (mint/blush) instead of shadows to separate cards.
