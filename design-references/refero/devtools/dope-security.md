---
name: dope.security
source: https://styles.refero.design/style/e1f18a7e-5af1-46b3-8f89-bce6c78b80d4
category: devtools
tags: [dark, single-accent, violet, italic-serif-display, stamped-mono, shadowless]
best_for: Security/infra brands that want a confident, expensive, slightly secretive dark look
---
# dope.security
> Midnight terminal with violet signal lighting: near-black canvas, one vivid violet, italic serif display, stamped mono labels.

Whyte Inktrap (geometric sans) paired with GrandSlang (italic display serif) for dramatic headlines and Whyte Inktrap Mono for stamped section labels. Surfaces are flat and borderless; elevation from hairline strokes and translucent washes — never shadows. Reads as "confident, expensive, and slightly secretive."

## Color tokens
| token | hex | role |
|---|---|---|
| Near Black | #090909 | Page canvas, card surfaces, filled button backgrounds |
| Almost White | #f7f9fa | Primary text, icon strokes, nav labels, 1px borders |
| Soft White | #f0f0f0 | Section label text (stamped uppercase) |
| Steel | #828384 | Muted secondary text, inactive buttons, subdued borders |
| Graphite | #474747 | Card internal text, subtle dividers |
| Iron | #423738 | Dark borders, elevated surfaces, inverted UI |
| Ash | #6b6b6b | Nav dividers, helper text, low-emphasis body |
| Signal Violet | #af50ff | Feature card glow, primary action fill, accent strokes (rationed) |
| Lavender Mist | #e1bdff | Soft tint paired with violet for contrast-safe text and washes |

Surfaces: L0 Void Canvas #090909 · L1 Translucent Panel #333248b3 (frosted nav) · L2 Iron Wash #423738 · L3 Violet Bloom #af50ff.

## Typography
- **Whyte Inktrap** (workhorse) — 300, 400, 500, 700; 10–88px (15 values); lh 1.0–1.6; tracking −0.04em at 64px, 0.18em at 10px uppercase; fallback Inter, General Sans. Body, nav, buttons, links, most headings.
- **Whyte Inktrap Mono** — 400; 14px, 74px; lh 0.9–1.5; tracking 0.2em constant; fallback JetBrains Mono, IBM Plex Mono. Section signposting (e.g. "SSL INSPECTION" at 74px uppercase).
- **GrandSlang** (display italic serif) — 300, 400; 32–146px (5 values); lh 0.8–1.5; tracking −0.03em; features `liga`, `dlig`; fallback Tiempos Headline, Lora Italic. Hero/large display only.

Scale (Minor Third 1.2 from 16px):
| role | size | lh | tracking |
|---|---|---|---|
| caption | 10px | 1 | 1.8px |
| body-sm | 14px | 1.5 | 0 |
| body | 16px | 1.5 | 0 |
| subheading | 20px | 1 | −0.2px |
| heading-sm | 32px | 1.2 | −0.32px |
| heading | 48px | 1.2 | −0.48px |
| heading-lg | 64px | 1.2 | −0.64px |
| section-stamp | 74px | 0.9 | 14.8px |
| display | 88px | 0.8 | −2.64px |

## Spacing, radius, elevation
- Base 4px; density comfortable. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72, 80, 96, 128, 136, 160px.
- Radius: small controls 6px · buttons 8px · cards 19.2px · pills 1584px.
- Only one shadow: subtle `rgba(16,24,40,0.05) 0px 1px 2px 0px`.
- Hairline divider: 0.5px or 1px solid #f7f9fa at 10–20% opacity replaces shadows and heavy borders.

## Layout
- Max width 1200px; section gap 120px; card padding 40px; element gap 16px.
- Fixed frosted top nav: brand left, links center, buttons right.
- Pages end with a coordinate-stamp footer.
- Don't center body copy or use multi-column text layouts.

## Components
- **Frosted nav bar** — bg rgba(51,50,72,0.7), backdrop blur(10px), 1px bottom #6b6b6b, fixed top; nav text Whyte Inktrap 12px uppercase 0.07em.
- **Filled action button** — bg #090909, 1px solid #f7f9fa, 8px radius, 16px padding, 16px/400 white. Primary CTAs (Book a Demo, Log In).
- **Ghost pill** — bg rgba(237,195,196,0.05), no border, 1584px radius, 20px 32px, #f7f9fa ("Try now with Google").
- **Compact outlined** — bg rgba(247,249,250,0.08), 1px solid #f7f9fa, 6px radius, 9px 15px. Toolbars, table rows.
- **Stamped section heading** — Whyte Inktrap Mono 74px/400 uppercase, 0.2em, #f0f0f0; tracking IS the design.
- **Hero boarding-pass card** — 19.2px radius, bg rgba(237,195,196,0.05), 1px solid rgba(247,249,250,0.2), 40px padding; label, origin/destination line, barcode, two pill CTAs.
- **Violet bloom feature card** — #af50ff or radial bloom, 19.2px, 40px padding; max one or two per page.
- **Feature row card** — transparent, 19.2px, no padding; boundary by spacing; link left, body right.
- **Coordinate footer** — full-width #090909; left "+" icon + "Fly Direct" 14px; right live GPS coordinate 14px.
- **Hairline divider** — see above.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Signal Violet only for one glow card, one filled action, one accent stroke per page.
- Section headings in Whyte Inktrap Mono 74px uppercase, 0.2em.
- Cards 19.2px radius, 0 internal padding; layout creates the boundary.
- 1px/0.5px #f7f9fa low-opacity borders instead of shadows.
- GrandSlang italic only for 88–146px display (two or three moments).
- Frosted nav rgba(51,50,72,0.7) + blur(10px) + 1px bottom border.
- End pages with coordinate stamp footer.

**Don't**
- No box shadows beyond the nav hairline.
- Violet not for borders, text or body backgrounds (fills/glows only).
- No GrandSlang below 32px.
- Don't mix Mono and GrandSlang on one line.
- No third accent — 95% achromatic + violet.
- No centered body copy or multi-column text.
- No 0px or 4px button radius — only 8px and 1584px.

Similar: Linear, Vercel, Arc Browser, Stripe Press, Nothing.tech.

## Steal this
- Giant ultra-tracked (0.2em) mono stamp as section headings.
- Metaphor-driven hero object (boarding-pass card) carrying the CTAs.
- Signature closing gesture: live coordinates footer.
- Italic display serif rationed to 2–3 moments against a geometric sans system.
