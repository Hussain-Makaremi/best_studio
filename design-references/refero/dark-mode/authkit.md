---
name: Authkit
source: https://styles.refero.design/style/e80231a2-e4d6-406a-a2c9-2e6109679690
category: dark-mode
tags: [dark, glassmorphism, single-accent, violet, blueprint-grid, gradient-headline]
best_for: Developer / auth / infra product marketing where floating glass UI mockups are the hero
---
# Authkit
> Frosted glass cathedral at midnight — near-black canvas, translucent glass surfaces, faint blueprint grid, backlit luminous text.

Monochromatic with one vivid violet accent. Elevation from inset frost highlights and soft halos, not hard drop-shadows. Generous, rhythmic spacing — cathedral-like rather than dense SaaS.

## Color tokens
| token | hex | role |
|---|---|---|
| Void Violet | #663af3 | Primary CTA fill, only for auth-form Continue/Submit |
| Blueprint Blue | #b6d9fc | Decorative icon accent, soft highlight wash |
| Ember Glow | #e46d4c | Secondary accent in demo/showcase contexts |
| Signal Blue | #027dea | Secondary accent in customization swatch grids |
| Deep Teal | #269684 | Secondary accent in customization swatch grids |
| Midnight Canvas | #05060f | Page background, deepest card surface, badge fills |
| Steel Plate | #2f343e | Elevated surface, ghost button fills, panel backing |
| Gridline Blue | #3f4959 | Shadow color for outer card drop-shadows |
| Fog Veil | #9da7ba | Muted body copy, card text |
| Glass Edge | #bad7f71f | Hairline borders on buttons, inputs, links (inset 1px) |
| Moon Mist | #c7d3ea | Body text, secondary labels, helper copy |
| Luminous Fill | #c7d3ea1f | Badge fill, soft translucent surface tint |
| Frost Glow | #d1e4fa | Primary text fill for body, links, badge text, icons |
| Ice Highlight | linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%) | Light text on dark, inverse labels; headline gradient (AuthKit wordmark, key headings) |
| Pure White | #ffffff | Button text, input text, max emphasis |

Gradients (all cool-tinted; never warm):
1. Skywash linear (#d8ecf8 → #98c0ef, 0deg) — display wordmark and largest headings
2. Fading hairlines (transparent → rgba(186,215,247,0.12) → transparent) — lines flanking eyebrow labels
3. Conic spotlight halos (transparent → rgba(124,145,182,0.5) → transparent) — top of full-bleed sections

## Typography
- **Untitled Sans** (fallback Inter): 400, 500, 600, 700; 12–24px; lh 1.17–2.57; -0.01em. Body, UI, buttons, inputs, badges, small headings.
- **aeonikPro** (fallback Space Grotesk): 400, 500; 28, 44, 48px; lh 1.14–1.20; normal tracking. Display only — wordmark, section headings, hero; 500 at 44–48px.
- **dotDigital** (fallback JetBrains Mono): 400; 15px; lh 1.20; 0.10em; `tnum` on. All-caps eyebrow labels.

Scale (Major Second 1.125 from 16px):
| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.33 | 0 |
| body-sm | 14px | 1.43 | 0 |
| body | 16px | 1.5 | -0.16px |
| subheading | 18px | 1.33 | 0 |
| heading-sm | 24px | 1.17 | -0.24px |
| heading | 28px | 1.14 | 0 |
| heading-lg | 44px | 1.16 | 0 |
| display | 48px | 1.17 | 0 |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 56, 100, 120, 200px.
- Max-width 1200px; section gap 120px; card padding 24px; element gap 16px.
- Radius: badges 6px, inputs 6px, cards 16px, modals 16px, buttons 999px, icon containers 9999px.
- Shadow tokens:
  - sm `rgba(186,207,247,0.32) 0 0 6px 0`
  - md `rgba(238,186,247,0.24) 0 0 12px 0`
  - subtle `rgba(186,215,247,0.12) 0 0 0 1px inset`
  - subtle-2 `rgba(199,211,234,0.12) -0.5px 0.5px 1px 0 inset, rgba(186,215,247,0.08) 0 0 96px 0 inset`
  - subtle-3 `rgba(186,214,247,0.06) 0 0 0 1px inset`
  - subtle-4 `rgba(199,211,234,0.12) 0 1px 1px 0 inset, rgba(199,211,234,0.05) 0 24px 48px 0 inset, rgba(6,6,14,0.7) 0 24px 32px 0`
  - subtle-5 `rgba(255,255,255,0.1) 0 0 0 1px inset`
  - subtle-6 `rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset, rgba(0,0,0,0.3) 0 16px 32px 0`
  - subtle-7 `rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset`
  - subtle-8 `rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset, rgba(199,211,234,0.08) 0 0 0 1px inset`
  - subtle-9 `rgba(186,214,247,0.24) 0 0 0 1px inset`
- Elevation recipes:
  - Auth-form modal / floating hero auth card: `inset 0 1px 1px rgba(216,236,248,0.2), inset 0 24px 48px rgba(168,216,245,0.06), 0 16px 32px rgba(0,0,0,0.3)`
  - Feature card: `inset 0 1px 1px rgba(199,211,234,0.12), inset 0 24px 48px rgba(199,211,234,0.05), 0 24px 32px rgba(6,6,14,0.7)`
  - Glow halo behind hero wordmark: `0 0 6px rgba(186,207,247,0.32), 0 0 12px rgba(238,186,247,0.24)`
- Surface levels: 0 Midnight Canvas #05060f; 1 Steel Plate #2f343e; 2 Frosted Glass rgba(186,214,247,0.03); 3 Deep Glass rgba(5,6,15,0.97).

## Layout
- Full-bleed dark canvas, 1200px centered content.
- Hero: centered gradient wordmark under small eyebrow; three floating glass auth cards in an overlapping fan (left tilted left, center largest, right tilted right). Light/dark toggle centered below.
- Feature row: horizontal 6-icon timeline with thin connecting lines between circular tiles.
- Section rhythm: centered eyebrow flanked by fading lines → 44–48px centered heading → one line of muted 16–18px body, max ~640px.
- Customization section: mock browser frame with centered auth card, floating inspector panels (swatches, radius sliders, icon picker, text fields) at canvas corners.
- Conic spotlight halo rgba(124,145,182,0.5) at top of every full-bleed hero.

## Components
- **Pill button (primary ghost):** radius 999px, padding 8px 16px, bg rgba(186,214,247,0.06), text #ffffff 14px/500, 1px inset rgba(186,215,247,0.12); hover bg → rgba(186,214,247,0.12).
- **Pill button (outlined):** 999px, 8px 16px, transparent, text #d1e4fa 14px/500, 1px inset rgba(186,215,247,0.12).
- **Violet CTA (solid):** radius 6px (exception), padding 12px 24px, bg #663af3, #ffffff 14px/500. Only in auth-form mockups.
- **Glass card (feature):** 16px, bg rgba(186,214,247,0.03), padding 24px, no hard border; inset frost highlight + soft outer halo.
- **Auth-form modal card:** 16px, bg rgba(5,6,15,0.97), padding 24–32px, modal shadow stack above.
- **Text input:** 6px, bg rgba(199,211,234,0.06), text #ffffff, placeholder #c7d3ea ~60%, 1px inset rgba(186,215,247,0.12), 10px horizontal padding; focus border opacity → 0.24.
- **Provider (social login) button:** 999px (or 6px variant), 12px 16px, bg rgba(199,211,234,0.06), #ffffff, left icon; "OR" divider 12px muted caps.
- **Section eyebrow:** dotDigital 15px/400, 0.10em, #c7d3ea, centered, flanked by fading lines to rgba(186,215,247,0.12).
- **Feature icon tile:** circle ~56–64px, frosted tint, 1.5px mono line icon #d1e4fa.
- **Badge/tag:** 6px, bg rgba(199,211,234,0.12), #d1e4fa 12px/500, padding 4px 8px, multi-layer inset glow.
- **Logo:** WorkOS wordmark Untitled Sans 500 16px #d1e4fa; AuthKit hero wordmark aeonikPro 500 ~140–180px with Skywash gradient.
- **Background grid layer:** 1px lines rgba(186,215,247,0.06), ~80–100px cells, edge fade mask, conic halo top center.
- **Theme toggle:** 999px segmented (moon/sun), 32px high; active slightly brighter frost, inactive transparent.
- **Customization swatch:** 20–24px squares, 4–6px radius, brand fills, 4px gaps, "Colour" label 12px muted.

## Motion
_not captured_ (only: button hover frost wash lightens; input focus border opacity increases).

## Rules (do / don't)
Do:
- 999px radius for all interactive elements; 16px cards/modals; 6px badges/inputs; 9999px circular icon containers
- Elevation = inset rgba(216,236,248,0.2) 1px top edge + 24–48px inset glow + dark cool drop
- #663af3 only for auth-form Continue/submit
- Headlines aeonikPro 500 at 44–48px with Skywash gradient; body/UI Untitled Sans 400–500
- Eyebrows: dotDigital 15px, 0.10em, #c7d3ea, centered, flanked by fading lines
- rgba(186,215,247,0.12) as universal hairline — never solid strokes
- 120px section gaps, 24px card padding
- Text progression: Ice Highlight → Frost Glow → Moon Mist → Fog Veil (heading → body → muted → helper)
- Conic spotlight halo at top of every full-bleed hero

Don't:
- Additional chromatic accents
- Solid colored borders
- Bold (600+) aeonikPro display headings
- Conventional drop-shadows
- Mixed radius families on one component type
- #ffffff on tints brighter than rgba(186,214,247,0.12)
- Skywash gradient on body text or buttons
- Light-theme colors in core tokens (marketing site is dark-first)

Imagery: glass-morphism auth-form mockups as floating translucent cards; line-art mono icons in frosted circles; faint blueprint grid; conic spotlight. No photography, lifestyle, or product screenshots. Comparable: Linear, Vercel, Clerk, Radix, Stripe.

## Steal this
- Glass elevation recipe: 1px inset top highlight + large inset glow + dark drop — works on any near-black.
- Translucent blue-white hairline (rgba(186,215,247,0.12)) as universal border.
- Eyebrow label flanked by fading gradient lines as section opener.
- Faint blueprint grid + conic spotlight for atmosphere without imagery.
