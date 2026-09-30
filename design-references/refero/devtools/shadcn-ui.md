---
name: Ui (shadcn/ui)
source: https://styles.refero.design/style/0fd67ec5-7e9c-4ca9-b368-5d9c7388477a
category: devtools
tags: [light, achromatic, monochrome, large-radius, geist, component-showcase]
best_for: Component libraries, docs and developer infrastructure where the UI itself is the content
---
# Ui (shadcn/ui)
> Clinical blueprint on frosted paper: strict achromatic restraint, white surfaces, soft warm grays, large-radius hairline cards.

Geist's geometric neutrality with tight display tracking gives a "quiet, code-adjacent feel that reads as developer infrastructure rather than consumer product." A single destructive red (#e7000b) appears only in error states; no chromatic brand colors otherwise.

## Color tokens
| token | hex | role |
|---|---|---|
| Canvas | #f5f5f5 | Page background, muted surface fills, secondary buttons |
| Paper | #ffffff | Card surfaces, popover backgrounds, primary button fills |
| Surface Alt | #fafafa | Sidebar background, subtle card variant, input resting state |
| Ink | #0a0a0a | Primary text, headings, button labels, icon strokes |
| Ink Soft | #171717 | Filled button backgrounds, secondary text on light surfaces |
| Mid Gray | #737373 | Muted body, placeholder, helper labels, resting icon fills |
| Hairline | #e5e5e5 | Borders, input outlines, card edges, badge outlines |
| Ember | #e7000b | Destructive accent — error states only |

Surface hierarchy: 0 Canvas #f5f5f5 (page) · 1 Sidebar #fafafa · 2 Card #ffffff · 3 Input fill #f5f5f5 (matches canvas). "The three-tone surface stack (canvas → soft → paper) creates layering without borders."

## Typography
- **Geist** (primary), Inter fallback. Weights 400, 500, 600. Sizes 12–48px across 9 steps. Features `"ss01" on, "cv11" on`.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| Caption | 12px | — | 1.33 | 0.6px |
| Body | 14px | 400 | 1.43 | — |
| Body Large | 16px | 400 | 1.5 | — |
| Subheading | 18px | — | 1.56 | — |
| Heading Small | 24px | 600 | 1.33 | -0.6px |
| Heading | 30px | 600 | 1.2 | -0.75px |
| Heading Large | 36px | 600 | 1.11 | -0.9px |
| Display | 48px | 600 | 1.1 | -2.4px |

Tracking tightens aggressively at display (−0.05em at 48px), loosens slightly on small uppercase labels (0.05em).

## Spacing, radius, elevation
- Base unit 4px; density compact. Scale: 4, 8, 12, 16, 20, 24, 48px.
- Radius: small 6px · nested 10px · badges/inputs/buttons 18px · cards 24px.
- Card shadow stack: `0 0 0 1px rgba(23,23,23,0.05)` + `0 1px 3px rgba(0,0,0,0.1)` + `0 1px 2px -1px rgba(0,0,0,0.1)` — "barely-perceptible elevation that reads as 'card' without drama."
- Filled button: no shadow, tonal contrast only. Input focus: 1px solid #e5e5e5 ring, no offset shadow.

## Layout
- Max width 1280px; section gap 48–80px; card padding 20px; element gap 8px.
- Imagery: almost entirely UI — no hero photography, illustrations or decorative graphics. Component mockups (cards, inputs, buttons) in grids act as documentation and visual content; "the page functions as a living style guide."
- Icons: thin-stroke geometric (likely Lucide-derived), 1.5–2px stroke, #0a0a0a or #737373, used sparingly.

## Components
- **Primary filled button** — bg #0a0a0a, text #fafafa, no border, 18px radius, 0–12px padding, Geist 14px/500, height ~36–40px (pill geometry). The dark-on-light inversion is the only chromatic interaction.
- **Secondary ghost button** — bg #f5f5f5, text #0a0a0a, no border, 18px radius, same padding/font.
- **Outline button** — transparent, text #0a0a0a, 1px solid #e5e5e5, 18px radius.
- **Card** — bg #ffffff, 24px radius, 1px solid #e5e5e5, stacked shadow, 20px padding. The hairline is essential — "shadow alone does not define the card edge."
- **Nested card header/footer** — asymmetric radius (24px on active edge, transparent opposite), 20px horizontal padding, no fill.
- **Input** — bg #f5f5f5 (resting) or transparent (inline), text #0a0a0a, placeholder #737373, no border at rest, 1px #e5e5e5 ring on focus, 18px radius, 8px 10px padding, 14px/400.
- **Badge solid** — bg #171717, text #fafafa, 18px radius, 2px 8px, 12px/500.
- **Badge soft** — bg #f5f5f5, text #171717, same dims.
- **Badge outline** — transparent, text #0a0a0a, 18px radius, 2px 8px.
- **Sidebar surface** — bg #fafafa, full-height; one tonal step off canvas, no divider line.
- **Breadcrumb** — inline 14px/400, chevron separators #737373, current segment #0a0a0a; purely typographic.
- **Stat block** — label 12–14px uppercase #737373; value 30–48px/600 #0a0a0a tight tracking; no card chrome.
- **Search trigger** — bg #f5f5f5, text #737373, 18px radius, 8px 10px, right-aligned ⌘K.
- **Destructive action** — text/icon #e7000b; never decoration or branding.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #0a0a0a on #ffffff for filled buttons — the only primary treatment.
- 18px radius on interactive elements; 24px only on cards.
- Display 48px/600 with −0.05em tracking.
- Reserve #e7000b for destructive states.
- Stack card shadows as hairline + 1px + 2px offset.
- #f5f5f5 for secondary surfaces and inputs; #fafafa for sidebar.

**Don't**
- No chromatic brand colors beyond #e7000b.
- Only 18px or 24px radius; never square corners.
- Never skip the 1px card hairline.
- Body text no smaller than 14px or lighter than #737373.
- No gradients, colored shadows, accent fills.
- Tracking within −0.05em to +0.05em.
- Don't mix filled and outline buttons of the same size without rhythm variation.

Pillars: achromatic by default; radius defines hierarchy (18 interactive / 24 containers); whisper-quiet elevation.

## Steal this
- Radius as hierarchy: one radius for everything clickable, one larger for containers, nothing in between.
- Three near-white tones (#f5f5f5 / #fafafa / #ffffff) create layers without borders.
- Hairline + two tiny shadows = a card that reads as a card with zero drama.
- Color only means "destructive" — makes the one red instantly legible.
