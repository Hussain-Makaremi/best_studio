---
name: Lithic
source: https://styles.refero.design/style/077aecd0-4401-4696-a196-164d74ac8746
category: fintech
tags: [light, warm-neutrals, single-typeface, orange-cta, 24px-radius, editorial]
best_for: Developer-focused card-issuing / payments infrastructure wanting a warm, editorial, confident marketing site
---
# Lithic
> "Warm marble briefing room for card architects — confident, earthy, deliberate." One grotesque at constant -0.02em, ember-orange CTAs, black vault hero with concentric warm arcs, 24px cards.

## Color tokens
| token | hex | role |
|---|---|---|
| Ember Orange | #ff6600 | Primary action fill on CTA buttons, contact links, key navigation |
| Architect Violet | #5c2999 | Decorative stroke/border accent for feature panels, illustrations |
| Lichen Green | #00cc88 | Green outline accent for tags, dividers, focused UI edges; metric values |
| Sandstone | #aa8855 | Muted warm stroke, decorative arc patterns, secondary outlines |
| Bark Brown | #665233 | Darker warm tone for card strokes, secondary illustration fills |
| Honey Bronze | #eec07a | Lighter warm fill for icon strokes, card accent borders |
| Obsidian | #000000 | Primary text, hero canvas, deep borders, ghost-button outlines |
| Ash Gray | #888888 | Secondary body text, muted link borders, disabled iconography |
| Smoke | #e5e5e5 | Hairline border on light buttons, tertiary dividers |
| Warm Cream | #f6f3ee | Primary warm card/panel surface, default elevated neutral |
| Lavender Mist | #f6f1fe | Cool-tinted feature panel, rhythm breaks, pairs with violet |
| Mint Whisper | #ebfef6 | Primary page canvas, white card surfaces (metric/status highlight) |
| Paper White | #ffffff | Page canvas, card surfaces, text on dark grounds |

Surfaces (stacking): 0 Obsidian Vault #000000 (hero canvas, dramatic sections) → 1 Paper White #ffffff (page base, default card) → 2 Warm Cream #f6f3ee (primary elevated card, feature panel) → 3 Lavender Mist #f6f1fe (cool-tinted panel) → 4 Mint Whisper #ebfef6 (metric/status highlight).

## Typography
- **ABC Monument Grotesk** — weights 400, 500. Fallback: Inter. Signature constraint: -0.02em tracking across all sizes (never loosens).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 64px | 500 | 1.0 | -1.28px |
| heading | 36px | 500 | 1.2 | -0.72px |
| heading-sm | 24px | 500 | 1.2 | -0.48px |
| subheading | 20px | 500 | 1.4 | -0.4px |
| body-sm | 16px | 400 | 1.5 | -0.32px |
| caption | 14px | 400 | 1.52 | -0.28px |

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 40, 48, 64, 80, 120, 160px.
- Radius: cards 24px, buttons 24px, images 21.6px, small elements 8px, icons 800px.
- Shadows:
  - xl: rgba(0,0,0,0.5) 0 16px 32px 0
  - xl-2: rgba(0,0,0,0.1) 0 16px 32px 0
  - sm: rgba(0,0,0,0.1) 0 4px 8px 0

## Layout
- Max-width 1200px; section gap 80px; card padding 40px; element gap 24px.
- Hero Vault: #000000 full-bleed, 24px rounded bottom, concentric arcs (#aa8855, #665233), 64px white headline, 20px subhead white @70%, ghost + primary button pair.
- Top nav: white bg, LITHIC wordmark (500, 20px), centered links (400, 16px), right-aligned contact + dashboard button, 16–24px vertical padding.
- Lavender panel: split layout, text left, mockup right. CTA footer bar: full-width mint/cream band, 80px vertical padding, centered stack.

## Components
- **Primary CTA Button:** #ff6600 fill, white text, 500, 16px, 24px radius, 12px/38px padding, sm shadow.
- **Ghost Navigation Button:** transparent, 1px #000000 border, black 500 16px, 8px radius, 10px/16px padding, trailing arrow.
- **Warm Feature Card:** #f6f3ee, 24px radius, 40px padding, 24px heading (500), 16px body (400).
- **Lavender Feature Panel:** #f6f1fe, 24px radius, 40px padding, violet arc background, split layout (text left, mockup right).
- **Mint Metric Callout:** #ebfef6, 24px radius, 16–24px padding, green metric values (#00cc88), black labels.
- **Top Navigation Bar:** see Layout.
- **Hero Vault:** see Layout.
- **Brand Logo Strip:** horizontal row of monochrome wordmarks, centered, 48–64px gaps, #000000 or gray, ~100px wide each.
- **Availability Status Badge:** 6–8px filled #00cc88 circle + label (14px/400, #000000).
- **Concentric Arc Decoration:** thin-stroke arcs (#aa8855, #665233, #5c2999), 1–2px stroke, background/edge use, no fill.
- **Inline Product Mockup Card:** white/cream surface, 24px radius, 21.6px image radius, xl-2 shadow, realistic UI (lists, charts, pills).
- **Check List Item:** 16–20px circular #5c2999 icon with white checkmark, 8–12px gap, 16px/400 label, 12–16px vertical stack gap.
- **CTA Footer Bar:** see Layout; 20–24px headline (500), 16px links (400, 24–32px horizontal gap).

## Motion
_not captured_

## Rules (do / don't)
Do:
- 24px radius on all cards, panels, primary buttons.
- -0.02em tracking at every size (14–64px).
- Reserve #ff6600 for filled primary CTAs; pair with ghost black-border secondary.
- Default #f6f3ee, alternate with #f6f1fe (lavender) and #ebfef6 (mint) at section breaks.
- Weight 500 for interactive/display; 400 for body/secondary.
- Minimum 80px section gap, 40px internal card padding.
- Concentric-arc patterns in warm tones (#aa8855, #665233) as section-edge decoration only.

Don't:
- Don't loosen letter-spacing at larger sizes (constant -0.02em is the signature).
- Don't use #ff6600 for body text, icons, decorative borders.
- Don't mix #5c2999 (violet) and #ff6600 (orange) in one component.
- No heavy shadows on small elements (xl shadow for elevated cards only).
- No new sans-serif families (Monument Grotesk only).
- No sharp 0px corners on interactive elements (min 8px small, 24px cards/buttons).
- No dark text on warm cream below 16px (use #888888 for 14px captions).

## Steal this
- One grotesque with a constant -0.02em tracking rule at all sizes, no size-based loosening.
- Black "vault" hero with 24px rounded bottom and thin concentric warm arcs as the only decoration.
- Three pastel panel tints (cream, lavender, mint) rotated at section breaks instead of a colored accent per section.
- Orange reserved only for filled primary CTAs.
