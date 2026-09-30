---
name: Auros
source: https://styles.refero.design/style/21cfe0c1-778d-4613-9f47-a5718eb929b3
category: dark-mode
tags: [dark, teal-tinted, fintech, gradient-cta, oversized-type, shadowless]
best_for: Trading / crypto / institutional data platforms wanting a cinematic, deep-water instrument feel
---
# Auros
> Abyssal terminal — near-black teal canvas with bioluminescent data orbs and teal-to-pink light gradients suggesting depth, liquidity, and flow.

Sparse, cinematic, instrument-like; single custom typeface (Matter) at medium weight with aggressive negative tracking. Achromatic neutrals carry content; chromatic palette reserved for gradients, card surfaces, and one signature button. Cards float on teal-tinted surface lifts (16px radius, no shadows) — depth-of-water, not paper.

## Color tokens
| token | hex | role |
|---|---|---|
| Liquid Abyss | #012624 | Primary canvas — page, header, hero |
| Liquid Deep | #011d1c | Recessed surface — footer, deeper panels |
| Liquid Kelp | #003734 | Raised card surface, primary button fill |
| Liquid Mist | #edfffe | Cool off-white for emphasized body, section labels |
| Platinum | #ffffff | Headings, nav, icon strokes, high-contrast text |
| Silver Mist | #bbc7c6 | Secondary body, muted descriptions, link resting |
| Ash | #f2f2f2 | Tertiary text for pull-quotes/testimonials |
| Slate Deep | #707777 | Low-emphasis/inactive surface tint |
| Lavender Phosphor | #fde9ff | Large statistics and counter numbers |
| Bioluminescent Gradient | linear-gradient(90deg, rgb(0,130,124) 0%, rgb(203,255,252) 100%) | Signature button/UI gradient |
| Aurora Gradient | linear-gradient(90deg, rgb(203,255,252) 0%, rgb(237,255,254) 26.25%, rgb(255,253,250) 47.57%, rgb(250,209,255) 88.96%) | Small decorative accents (and primary CTA fill per component spec) |

## Typography
- **Matter**: 400, 500; 10–295px (12 sizes); lh 1.0, 1.3, 1.4, 1.5. 500 for all headings and oversized kinetic text (86–295px); 400 body/UI. Tracking -0.04em at 61px, -0.046em at 86px; uppercase labels +0.08em at 20px, 0.12em at 12px, 0.15em at 10px. Fallback Inter, DM Sans, or Satoshi.
- **Arial**: 400, 14px only, lh 1.43 — secondary fallback for nav, buttons, hero micro-copy, footer.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 10px | 1.4 | 1.5px |
| body | 16px | 1.4 | 0 |
| subheading | 24px | 1.3 | -0.48px |
| heading | 36px | 1.0 | 0 |
| heading-lg | 61px | 1.0 | -2.44px |
| display | 96px | 1.0 | -3.84px |

## Spacing, radius, elevation
- Base 4px, spacious. Scale: 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 80, 120, 140, 160, 164px.
- Max-width 1440px; section gap 68px; card padding 36–48px; element gap 20px.
- Radius: cards 16px, buttons 6px, small 6px.
- No shadows. Levels: 0 Liquid Abyss #012624; 1 Liquid Deep #011d1c; 2 Liquid Kelp #003734; 3 Slate Deep #707777.

```css
--color-liquid-abyss:#012624; --color-liquid-deep:#011d1c; --color-liquid-kelp:#003734;
--color-liquid-mist:#edfffe; --color-platinum:#ffffff; --color-silver-mist:#bbc7c6;
--color-ash:#f2f2f2; --color-slate-deep:#707777; --color-lavender-phosphor:#fde9ff;
--font-matter:'Matter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--page-max-width:1440px; --section-gap:68px; --radius-cards:16px; --radius-small:6px;
```

## Layout
Full-bleed dark canvas, 1440px content. Hero: centered stack (eyebrow → headline → subtext → CTA) at full viewport height, particle sphere behind. Full-width bands with 68px+ gaps alternating canvas and recessed. Explore section: asymmetric two columns — stacked feature cards left, molecular illustration right. Narrow content columns (~600px). Footer is a recessed well (#011d1c) with 120px vertical padding.

## Components
- **Gradient pill button (primary CTA):** aurora gradient fill (cyan → white → pink), 6px radius, padding 32px vertical / 22px horizontal, text #222222 14px Arial uppercase.
- **Ghost nav link:** transparent, uppercase 12px Matter 400, 0.12em; white active, #bbc7c6 inactive; no padding, 16px column gap.
- **Surface card:** #003734, 16px, 36px padding, no shadow/border; headings 36px Matter 500 white, body 16px 400 silver.
- **Recessed card:** #011d1c, 16px, 120px vertical padding.
- **Feature row card:** transparent, 16px, 48px / 36px padding; heading, description, 32×32 arrow button.
- **Arrow icon button:** 32×32, 6px, rgba(3,81,75,0.5), white ↗.
- **Uppercase section label:** 12 or 20px Matter 500, uppercase, 0.08–0.12em, #bbc7c6 or #edfffe.
- **Hero headline:** 61–96px Matter 500, lh 1.0, -0.04em, white, fluid via clamp().
- **Oversized kinetic text:** 86–295px Matter 500, lh 1.0, -0.046em.
- **Statistic counter:** e.g. '$18.21B' 86px Matter 500 #fde9ff, lh 1.0, -3.96px; label 13px 400 uppercase 0.055em #edfffe.
- **Navigation bar:** full-width transparent, ~80px tall, logo left, links centered, CTA right (6px radius), 16–24px gaps.
- **Geometric molecule illustration:** flat white circles + thin connector lines, right-column decoration.
- **Particle sphere visual:** rotating 3D sphere of teal-cyan and white dots, picks up accent pink at edges.

## Motion
_not captured_ (only: particle sphere rotates; oversized "kinetic" text).

## Rules (do / don't)
Do:
- Only the teal surface stack (#011d1c → #012624 → #003734) for background differentiation
- Aurora gradient only for primary CTAs and signature accents
- All headings Matter 500
- Uppercase tracking 0.08–0.15em on labels/kickers/eyebrows
- #fde9ff only for large statistics
- Only two radii: 16px cards, 6px small
- lh 1.0 display above 36px; 1.4 body

Don't:
- Drop shadows / box-shadows for elevation
- Bold (600+) or light (300-) at display sizes
- #ffffff for body text
- Aurora gradient on text, borders, or anything bigger than a button
- Radius above 16px
- Light text on #fde9ff
- Any color outside teal scale, silver neutrals, lavender accent

Imagery: minimal, atmospheric — 3D particle sphere hero (should appear at least once per major page), flat molecular diagrams; no photography or people.
Best-fit: fintech terminals, trading platforms, data dashboards, institutional crypto, deep-tech command centers.

## Steal this
- Tinted dark canvas (teal) instead of neutral black gives an instant brand atmosphere.
- Pink stat numbers on teal as the single emphasis treatment for metrics.
- Wide-tracked uppercase labels + tightly-tracked giant display = "instrument panel" typography.
- Recessed footer well (darker than canvas) as a closing depth cue.
