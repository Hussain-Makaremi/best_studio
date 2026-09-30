---
name: Authkit
source: https://styles.refero.design/style/e80231a2-e4d6-406a-a2c9-2e6109679690
category: devtools
tags: [dark, glassmorphism, single-accent, violet, gradient-display, cathedral-spacing]
best_for: Dark-first auth/identity or infra product launches with glass UI cards and a showcase wordmark
---
# Authkit
> Frosted glass cathedral at midnight: near-black canvas, translucent surfaces, faint blueprint gridlines, luminous text lit from behind glass.

Monochromatic (white/cool grays) with a single vivid violet accent. Spacing is generous and rhythmic; elevation from inset frost highlights and soft halos rather than hard drop shadows.

## Color tokens
### Brand
| token | hex | role |
|---|---|---|
| Void Violet | #663af3 | Primary CTA fill — only chromatic accent, exclusive to auth-form Continue/Submit |
| Blueprint Blue | #b6d9fc | Decorative icon accent, soft highlights on feature illustrations |
| Ember Glow | #e46d4c | Secondary accent for demo/showcase (logo recolor swatches) |
| Signal Blue | #027dea | Secondary accent in customization swatch grids |
| Deep Teal | #269684 | Secondary accent in customization swatch grids |

### Neutrals
| token | hex | role |
|---|---|---|
| Midnight Canvas | #05060f | Page background, deepest card surfaces, badge fills |
| Steel Plate | #2f343e | Elevated surfaces, ghost/secondary button fills |
| Gridline Blue | #3f4959 | Shadow color for card drop shadows |
| Fog Veil | #9da7ba | Muted body copy, secondary text |
| Moon Mist | #c7d3ea | Body text, secondary labels, helper copy |
| Frost Glow | #d1e4fa | Primary text fill, body, links, icon fills |
| Glass Edge | #bad7f71f | Hairline borders on buttons, inputs, links (inset 1px) |
| Luminous Fill | #c7d3ea1f | Badge fill, soft surface tints |
| Ice Highlight | linear-gradient(0deg, #d8ecf8 → #98c0ef) | Inverse labels; headline gradient |
| Pure White | #ffffff | Button text, input text, max-emphasis foreground |

### Surface levels
| level | name | value | purpose |
|---|---|---|---|
| 0 | Midnight Canvas | #05060f | Full-bleed page background |
| 1 | Steel Plate | #2f343e | Elevated panels, ghost-button fills |
| 2 | Frosted Glass | #bad6f708 | Translucent card surface |
| 3 | Deep Glass | #05060ff7 | Auth-form modal — nearly opaque midnight |

### Gradients
- **Skywash** (linear 0deg) #d8ecf8 → #98c0ef — display wordmark and largest headings.
- **Fading hairlines** — transparent → rgba(186,215,247,0.12) → transparent; dividers flanking eyebrow labels.
- **Conic spotlight halos** — transparent → rgba(124,145,182,0.5) → transparent; top of full-bleed sections.
- All gradients cool-tinted, never warm.

## Typography
- **Untitled Sans** (fallback Inter) — weights 400, 500, 600, 700; sizes 12–24px; line-height 1.17–2.57; tracking -0.01em. Body, UI, buttons, inputs, badges, small headings.
- **aeonikPro** (fallback Space Grotesk) — weights 400, 500; sizes 28, 44, 48px; line-height 1.14, 1.16, 1.17, 1.20; tracking normal. Display headings, wordmark, hero; 500 at 44–48px.
- **dotDigital** (fallback JetBrains Mono) — weight 400; 15px; line-height 1.20; tracking 0.10em; `"tnum" on`. All-caps eyebrow labels ("Introducing", "Extensible by design", "Shine bright").

Scale (Major Second 1.125 from 16px):
| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.33 | 0px |
| body-sm | 14px | 1.43 | 0px |
| body | 16px | 1.5 | -0.16px |
| subheading | 18px | 1.33 | 0px |
| heading-sm | 24px | 1.17 | -0.24px |
| heading | 28px | 1.14 | 0px |
| heading-lg | 44px | 1.16 | 0px |
| display | 48px | 1.17 | 0px |

Text-color progression: #d8ecf8 → #d1e4fa → #c7d3ea → #9da7ba for heading → body → muted → helper.

## Spacing, radius, elevation
- Base 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 56, 100, 120, 200px. Density comfortable.
- Radius: badges 6px · inputs 6px · cards 16px · modals 16px · buttons 999px · icon containers 9999px.

| shadow | value |
|---|---|
| sm | rgba(186,207,247,0.32) 0 0 6px 0 |
| md | rgba(238,186,247,0.24) 0 0 12px 0 |
| subtle | rgba(186,215,247,0.12) 0 0 0 1px inset |
| subtle-2 | rgba(199,211,234,0.12) -0.5px 0.5px 1px 0 inset, rgba(186,215,247,0.08) 0 0 96px 0 inset |
| subtle-3 | rgba(186,214,247,0.06) 0 0 0 1px inset |
| subtle-4 | rgba(199,211,234,0.12) 0 1px 1px 0 inset, rgba(199,211,234,0.05) 0 24px 48px 0 inset, rgba(6,6,14,0.7) 0 24px 32px 0 |
| subtle-5 | rgba(255,255,255,0.1) 0 0 0 1px inset |
| subtle-6 | rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset, rgba(0,0,0,0.3) 0 16px 32px 0 |
| subtle-7 | rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset |
| subtle-8 | rgba(216,236,248,0.2) 0 1px 1px 0 inset, rgba(168,216,245,0.06) 0 24px 48px 0 inset, rgba(199,211,234,0.08) 0 0 0 1px inset |
| subtle-9 | rgba(186,214,247,0.24) 0 0 0 1px inset |

Elevation recipes:
- Auth-form modal / floating hero auth card: inset 0 1px 1px rgba(216,236,248,0.2), inset 0 24px 48px rgba(168,216,245,0.06), 0 16px 32px rgba(0,0,0,0.3).
- Feature card: inset 0 1px 1px rgba(199,211,234,0.12), inset 0 24px 48px rgba(199,211,234,0.05), 0 24px 32px rgba(6,6,14,0.7).
- Glow halo behind hero wordmark: 0 0 6px rgba(186,207,247,0.32), 0 0 12px rgba(238,186,247,0.24).

## Layout
- Max width 1200px centered, full-bleed dark canvas; section gap 120px; card padding 24px; element gap 16px.
- Hero: centered gradient wordmark ("AuthKit") under small eyebrow; three floating glass auth cards fanned behind (left tilted left, center largest, right tilted right). Theme toggle centered below.
- Feature row: horizontal 6-icon timeline with thin connecting lines between circular icon tiles.
- Section rhythm: centered eyebrow (flanked by fading lines) → 44–48px aeonikPro heading → one line muted body 16–18px, max ~640px.
- Customization section: mock browser frame with auth card centered, floating inspector panels (swatches, radius sliders, logo picker, button text field, background field) at the corners.

## Components
- **Pill button (primary ghost)** — radius 999px, padding 8px 16px, bg rgba(186,214,247,0.06), border 1px inset rgba(186,215,247,0.12), text #ffffff 14px Untitled Sans 500; hover frost to rgba(186,214,247,0.12). "Get started", "Continue with Google", "Learn more".
- **Pill button (outlined)** — 999px, 8px 16px, transparent, 1px inset rgba(186,215,247,0.12), text #d1e4fa 14px/500. Secondary nav, header GitHub icon.
- **Violet CTA** — #663af3, text #ffffff 500, radius 6px, padding 12px 24px. Auth-form Continue/Submit only.
- **Glass card (feature)** — 16px radius, bg rgba(186,214,247,0.03), 24px padding, no border (glass via shadow stack).
- **Auth-form modal card** — 16px, bg rgba(5,6,15,0.97), padding 24–32px, three-layer shadow.
- **Text input** — 6px, bg rgba(199,211,234,0.06), text #ffffff, placeholder #c7d3ea (~60%), 1px inset rgba(186,215,247,0.12), 10px horizontal padding; focus border opacity 0.24.
- **Provider button (social login)** — 999px or 6px variant, 12px 16px, bg rgba(199,211,234,0.06), text #ffffff, left icon; "OR" divider 12px muted caps.
- **Section eyebrow** — dotDigital 15px/400, 0.10em, #c7d3ea, centered, flanked by fading lines to rgba(186,215,247,0.12).
- **Feature icon tile** — 9999px circle, 56–64px, frosted tint, line glyph #d1e4fa 1.5px stroke.
- **Badge/tag** — 6px, bg rgba(199,211,234,0.12), text #d1e4fa 12px/500, padding 4px 8px, multi-layer inset inner glow.
- **Logo mark** — WorkOS: Untitled Sans 500 16px #d1e4fa. AuthKit hero wordmark: aeonikPro 500 at 140–180px filled with Ice Highlight gradient.
- **Background grid layer** — 1px lines rgba(186,215,247,0.06), 80–100px cells, masked to fade at edges, conic halo top center.
- **Theme toggle** — pill segmented control, 999px, 32px height, moon/sun; active brighter frost, inactive transparent.
- **Customization swatch** — 20–24px square, 4–6px radius, brand fill, 4px gap, 12px muted label.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 999px radius for all interactive elements; 16px only for cards/modals; 6px for badges/inputs; 9999px for circular icon containers.
- Elevation = inset frost highlight (rgba(216,236,248,0.2) 1px top) + 24–48px inset glow + dark cool drop.
- Void Violet #663af3 only for auth-form Continue/Submit.
- Headlines aeonikPro 500 at 44–48px with Skywash gradient; body/UI Untitled Sans 400–500.
- Eyebrows dotDigital 15px, 0.10em, #c7d3ea, centered with fading lines.
- rgba(186,215,247,0.12) as universal hairline — never solid strokes.
- Section gap 120px, card padding 24px — cathedral-like, not dense SaaS.
- Conic spotlight halo (rgba(124,145,182,0.5) center) at top of every full-bleed hero.

**Don't**
- No additional chromatic accents.
- No solid colored borders.
- No 600+ weights on aeonikPro display.
- No conventional drop shadows.
- Don't mix radius families on one component type.
- No #ffffff on tints brighter than rgba(186,214,247,0.12).
- No Skywash gradient on body or buttons.
- No light-theme colors in core tokens.

Similar brands: Linear, Vercel, Clerk, Radix, Stripe.

## Steal this
- Glass without blur hacks: translucent fill + 1px inset top highlight + big soft inset glow + dark drop.
- Fanned trio of floating product cards as a hero composition.
- Monospaced dot-matrix eyebrow flanked by fading hairlines as a section marker.
- Faded 80–100px blueprint grid + conic spotlight as ambient background.
