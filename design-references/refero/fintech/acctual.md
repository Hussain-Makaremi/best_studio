---
name: Acctual
source: https://styles.refero.design/style/aeefc294-a8f7-443d-b76a-538dddc29afe
category: fintech
tags: [light, near-monochrome, single-blue-punctuation, pill-buttons, rounded-geometric-sans, invoice-mockups]
best_for: Invoicing / payments product marketing site that wants paper-white, friendly, product-mockup-led pages
---
# Acctual
> "Paper invoice on frosted glass" — white-canvas invoicing product on a near-monochrome foundation; one electric blue (#0098f2) as functional punctuation; layered invoice mockups do the selling.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Blue | #0098f2 | Checkmark icons, payment rate callouts, inline highlights, eyebrow labels; the single most prominent chromatic color |
| Iris | #6c56fc | Decorative accent / illustration fill; violet chip on invoice cards |
| Magenta | #f200ca | Decorative accent / illustration fill; pink chip on invoice cards |
| Leaf | #5d9c06 | Green text accent for links, tags, emphasized short phrases |
| Coral | #ff6363 | Red decorative accent for icons, marks, small graphic details |
| Ice | #cfeafa | Light blue card backgrounds for highlight sections |
| Lavender | #e1e0fc | Light violet card backgrounds for feature blocks |
| Blush | #f6d2f4 | Light pink card backgrounds, decorative highlight blocks |
| Carbon | #0f0f0f | Body text and secondary headings; secondary dark button fill |
| Midnight | #0d111b | Primary action buttons (filled), dark navy-black |
| Ink | #1e1e1e | Headings and primary body text |
| Smoke | #666666 | Secondary body text, helper copy |
| Fog | #8d8d8d | Tertiary text, nav links, subdued metadata |
| Ash | #999999 | Disabled text, placeholder text, low-priority labels |
| Concrete | #afb0b1 | Muted surface fills, inactive chip backgrounds |
| Mist | #ccd1da | Hairline borders, input outlines, dividers |
| Snow | #f7fafc | Subtle section backgrounds, alternating bands |
| Paper | #ffffff | Page canvas, card surfaces, hero background |

Surfaces (stacking): 0 Paper #ffffff (page canvas) → 1 Snow #fafafa (alternating bands, feature card bg) → 2 Ice #cfeafa (payment info/callouts) → 3 Lavender #e1e0fc (secondary feature cards).

## Typography
- **Open Runde** (primary) — weights 500, 600; sizes 11–64px (11 values); line-height 1.13–1.78; tracking -0.03em (20px+ display), -0.02em (14–16px body), +0.02em (11px uppercase); OpenType ss01 on. Fallback: Inter, DM Sans or Outfit. Geometric sans for all headings and body.
- **Caveat** — weight 600; sizes 16, 24; line-height 1.33, 1.50. Fallback: Dancing Script or Kalam. Handwritten signature font for testimonial attributions only.
- **SF Pro Text** — weight 600; 11px; line-height 1.62; tracking +0.02em. Small uppercase system labels.
- **sans-serif** — weight 400; 12px; line-height 1.2. **Inter** (fallback) — weights 400, 500; sizes 16px, 32px; line-height 1, 1.25.

Scale (Minor Third 1.2 from 16px):
| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| eyebrow | 11px | 600 | 1.62 | +0.22px |
| body-sm | 14px | — | 1.43 | -0.28px |
| body | 16px | 500/600 | 1.5 | -0.32px |
| body-lg | 22px | 500 | 1.29 | 0 |
| subheading | 24px | 600 | 1.33 | -0.72px |
| heading-sm | 32px | 600 | 1.25 | -0.96px |
| heading | 40px | 600 | 1.2 | -1.2px |
| heading-lg | 48px | 600 | 1.17 | -1.44px |
| display | 64px | 600 | 1.13 | -1.92px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 80, 96px.
- Radius: cards 16px, images 20px, large cards 32px, tags 100px, buttons 100px, icons 888px.
- Shadows:
  - subtle: rgba(10,13,20,0.03) 0 1px 2px 0
  - subtle-2: rgb(36,38,40) 0 0 0 1px, rgba(27,28,29,0.48) 0 1px 2px 0
  - subtle-3: rgba(0,0,0,0.06) 0 2px 3px -1px

## Layout
- Max-width 1200px; section gap 96px; card padding 24px; element gap 12px.
- Pill-shaped header container floats above the hero (white, 100px radius) wrapping logo + nav + login + CTA, subtle shadow.
- Large Feature Panel: #fafafa, 32px radius, 96px/48px padding, standalone editorial blocks.
- Hero visual: layered invoice mockup stack with slight rotation and offset; flat-lay office-object photography (keyboard, binder clip, red binder, Apple display) cropped at edges as atmospheric decoration.

## Components
- **Filled Action Button:** #0d111b bg, #ffffff text, 100px radius, padding 8px/12px (small) or 6px/14px (nav), shadow subtle-2, Open Runde 14px/500, tracking -0.02em.
- **Secondary Dark Button:** #0f0f0f bg, white text, 100px radius, padding 6px/10px or 6px/14px; nav-level CTAs and dense button rows.
- **Outline Link Button:** #ffffff bg, #1e1e1e text, 100px radius, padding 8px/12px, no shadow; navigation links.
- **Feature Card:** #fafafa or #ffffff, 16px radius, 24px padding, no shadow; Open Runde 24px/600 heading (-0.03em), body 16px/500 #666666.
- **Elevated Card:** #ffffff, 20px radius, shadow subtle + subtle-3; invoice previews and testimonial blocks.
- **Large Feature Panel:** see Layout.
- **Tinted Accent Card:** rgba(0,152,242,0.16) (Ice at 16%), 16px radius, no padding/shadow; payment rate callout strips.
- **Invoice Mockup Card:** #ffffff, 16px radius, shadow subtle. 'INVOICE NO' label 11px uppercase #666666, FROM/TO blocks with brand-color circular icons (Iris #6c56fc, Leaf #5d9c06), line items in table #666666 labels / #1e1e1e values; stacked with slight rotation and offset.
- **Star Rating Block:** five solid stars (implied #f5a623), centered above quote; Open Runde 24px/600 quote #1e1e1e, Caveat 16px/600 attribution #666666.
- **Payment Rate Badge:** inline row: Electric Blue circular checkmark (12px, 888px radius), label #1e1e1e 16px/500, bold rate value; no bg/border/padding.
- **FAQ Accordion Item:** full-width, no bg, 1px bottom border #ccd1da; question 16px/500 #1e1e1e, plus icon right; padding 16px 0, 12px between rows.
- **Pill Header Container:** see Layout.
- **Logo Mark:** two stacked chevron/arrow shapes in #1e1e1e, with 'Acctual' wordmark Open Runde 16px/500 #1e1e1e.
- **Eyebrow Label:** Open Runde 11px/600, tracking +0.02em, uppercase, #0098f2, centered above the headline, no bg/border.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Open Runde weight 600 for all headings 20px+ with -0.03em tracking.
- Primary action buttons #0d111b with white text and 100px pill radius.
- #0098f2 exclusively for inline icons (checkmarks), rate callouts, eyebrow labels.
- 16px radius on content cards, 32px on large feature panels.
- Page canvas pure #ffffff; #fafafa or #f7fafc only for alternating bands.
- Caveat 16px/600 for testimonial attributions only.
- Stack invoice mockup cards with slight rotation and overlapping offset.

Don't:
- No #0098f2, #6c56fc, or #f200ca as button backgrounds.
- No pure #000000 for text or buttons (use #1e1e1e text, #0d111b fills).
- No box-shadow on feature cards; elevation reserved for invoice mockups and testimonials.
- No border-radius below 10px on any interactive element.
- No gradient backgrounds anywhere; strictly flat solid fills.
- Body text no lighter than #666666.
- No more than two chromatic accent colors on one screen.

## Steal this
- Real-UI invoice mockup stack, slightly rotated and overlapping, as the hero visual.
- One electric blue used only as punctuation (checkmarks, rates, eyebrow) while buttons stay near-black.
- Handwritten Caveat only for testimonial signatures: a single humanizing detail.
- Pill-shaped floating header container that holds the whole nav.
