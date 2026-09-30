---
name: Quizlet
source: https://styles.refero.design/style/528eb1d4-8508-4dc6-87b4-c7b92d648dac
category: productivity
tags: [light, cool-gray-canvas, single-indigo, pastel-feature-cards, pill-buttons, compact, education]
best_for: Study / education / learning-app marketing with a cool gray-blue canvas, one indigo action color, and pastel illustrated feature cards
---
# Quizlet
> "Color-coded classroom on white — a quiet study desk where four pastel flashcards are the only splash of color against cool gray walls and a single indigo highlighter mark." Iris Bolt #4255ff, Chalk Canvas #f6f7fb, 200px pill buttons, 8px study cards, 24px feature cards.

## Color tokens
| token | hex | role |
|---|---|---|
| Iris Bolt | #4255ff | Violet accent for decorative details and low-frequency emphasis; filled buttons and links; sole saturated color in the system |
| Ink Charcoal | #282e3e | Primary text, headings, body copy, footer headings, icon strokes |
| Deep Indigo | #2e3856 | Secondary body text, supporting copy |
| Slate Veil | #586380 | Muted helper text, secondary metadata, tertiary nav items |
| Fog Mist | #939bb4 | Placeholder text, disabled states, hairline icon strokes |
| Pure Black | #000000 | App store badges, maximum-contrast text on light panels |
| Chalk Canvas | #f6f7fb | Page background, canvas behind cards |
| Paper White | #ffffff | Card surfaces, modal backgrounds, input fields |
| Lilac Wash | #edefff | Tinted section backgrounds, subtle highlight zones |
| Mist Border | #d9dde8 | Hairline dividers, card edges, input borders |

Surfaces: 0 Page Canvas #f6f7fb → 1 Card Surface #ffffff (study set cards, nav, raised panels) → 2 Tinted Highlight #edefff (promotional sections, feature zones) → 3 Feature Card Pastels #dbdfff (decorative category backgrounds).

## Typography
- **Hurme Geometric Sans** — weights 400, 600, 700; sizes 12, 14, 16, 20, 21, 24, 32, 44px. Fallbacks: Inter, DM Sans, or Nunito Sans. Scale: Major Second (1.125) from 16px base.

| role | size | weight | line-height |
|---|---|---|---|
| caption | 12px | 400 | 1.5 (18px) |
| body-sm | 14px | 400 | 1.43 (20px) |
| body | 16px | 400 | 1.5 (24px) |
| subheading | 20px | 600 | 1.4 (28px) |
| heading-sm | 24px | 600/700 | 1.33 (32px) |
| heading | 32px | 700 | 1.28 (41px) |
| display | 44px | 700 | 1.25 (55px) |

Letter-spacing: _not captured_

## Spacing, radius, elevation
- Base unit 8px; density compact.
- Spacing: 8, 16, 24, 32, 40, 48, 64px.
- Page max-width 1200px; section gap 80px; card padding 24px; element gap 8px.
- Radius: inputs 4px, buttons 4px, cards 8px, feature cards 24px, pills 200px.
- Shadows:
  - md: rgba(40,46,62,0.1) 0 4px 16px 0
  - sm: rgba(40,46,62,0.1) 0 2px 4px 0
  - subtle (inset): rgba(0,0,0,0.3) 0 0 1px 0 inset

## Layout
- Centered max-width 1200px content on full-bleed #f6f7fb.
- Hero: centered text stack (headline → subhead → pill button → ghost link), no background image, followed by a full-width horizontal carousel of four feature category cards at 24px radius.
- Alternating two-column sections (50/50: product mockup left, headline+body+button right) on alternating white and #edefff backgrounds.
- Five-column link footer grid on #f6f7fb with 48px top padding. Sticky top navigation. 80px between major sections, 8px between inline elements.

## Components
- **Filled Pill Button:** #4255ff bg, #ffffff text, weight 600, 14–16px, padding 10px 20px, radius 200px, shadow sm.
- **Outlined/Store Badge:** #000000 bg, #ffffff text, radius 4px, padding 8px 16px.
- **Ghost Text Link:** no bg/border, #4255ff text 16px/400, underline on hover only.
- **Ghost Outlined Button:** transparent, 1px #4255ff border, #4255ff text, radius 200px, padding 10px 24px, weight 600.
- **Feature Category Card:** radius 24px, solid pastel fill, white inner panel (8px radius), title 700 at 20–24px, body 400 at 14–16px.
- **Study Set Card:** #ffffff, 1px #d9dde8 border, radius 8px, padding 16px; title 600 at 16px #282e3e, metadata 400 at 12px #586380, 8px gap.
- **Top Navigation Bar:** #ffffff, max-width 1200px, height ~56px, shadow md; logo left, dropdowns (4px radius), centered search, Create + Log in right.
- **Search Bar:** #f6f7fb bg, radius 200px, padding 8px/16px, placeholder #939bb4 at 14px.
- **Footer Link Column:** five columns on #f6f7fb; headings 600 at 14px #282e3e, links 400 at 14px #586380, 8px vertical gap, 48px top padding.
- **Promotional Section Panel:** full-width #edefff, max-width 1200px centered, two-column (image left, text right); headline 700 at 32px #282e3e, body 400 at 16px #586380.
- **Carousel Navigation Arrow:** circular 40px, #ffffff bg, 1px #d9dde8 border, centered chevron #282e3e, floats at vertical center.
- **Term Count Badge:** transparent/light fill, #586380 12px/400, no border.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #4255ff exclusively for filled interactive elements and links.
- 200px radius on all primary filled buttons.
- Body text #282e3e at weight 400.
- 8px radius on content cards, 24px only on hero feature cards.
- Card surfaces on #ffffff over the #f6f7fb canvas.
- 80px vertical section gap with 24px card padding and 8px element gaps.
- A single shadow token md on nav bars and elevated cards; never stack shadows.

Don't:
- No saturated colors beyond #4255ff.
- No 4px or 8px radius on primary filled buttons.
- No weight 700 for headings by default; 600 is the max for most titles.
- No pure #000000 for body text; use #282e3e.
- Don't place cards directly on #edefff without an inner white panel.
- No heavy or multi-layer shadows.
- Don't use #d9dde8 as a fill; exclusive to hairlines and separators.

## Imagery
Product-first: four large illustrated product card mockups (flashcard interface, study guide table, anatomy diagram, practice test) on distinct pastel backgrounds (cyan, magenta, violet, peach) at 24px radius, flat illustrations with subtle shading. Secondary product previews show UI screenshots on device frames. No editorial photography, human faces, or decorative stock. Icons: thin-stroke geometric line icons ~16–20px, single color #282e3e or #4255ff.

## Steal this
- Four pastel feature cards (cyan, magenta, violet, peach) as the only color on a cool gray-blue page.
- Cool-tinted neutrals (#282e3e ink, #f6f7fb canvas) rather than pure black/gray.
- Card inside a pastel card: white 8px-radius inner panel on a 24px-radius tinted card.
- Shadows tinted with the ink color (rgba(40,46,62,0.1)).
