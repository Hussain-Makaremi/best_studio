---
name: Mercury
source: https://styles.refero.design/style/3172cd4d-118a-4a16-a259-6b634d32322e
category: dark-mode
tags: [dark, fintech, single-accent, cobalt, pill-controls, shadowless]
best_for: Premium banking / fintech marketing sites wanting restrained, cinematic dark UI with one conversion color
---
# Mercury
> Alpine banking at blue hour — cinematic, observatory-like; near-black canvas, graphite cards, one cobalt accent.

Extreme restraint: near-black canvas (#171721) with subtly elevated graphite cards (#1e1e2a); monochrome broken only by cobalt (#5266eb). Intermediate weights (480 on display) convey confidence without aggression. All elevation from value contrast — no shadows. Full-bleed photographic hero (misty mountains, isolated desk) before product UI.

## Color tokens
| token | hex | role |
|---|---|---|
| Onyx Canvas | #171721 | Dominant page background, hero overlay, footer, section canvases |
| Graphite Card | #1e1e2a | Elevated card/section surfaces, one step lighter than canvas |
| Obsidian Button | #272735 | Secondary button fills, inline form backgrounds, subtle interactive surfaces |
| Slate Border | #70707d | Medium-weight dividers, structural borders |
| Mist Border | #e2e3ed | Light hairline borders, ghost-button outlines, input edges |
| Ash Text | #c3c3cc | Muted body copy, helper text, secondary labels |
| Ivory Text | #ededf3 | Primary text, icons, nav, ghost-button strokes |
| Cobalt | #5266eb | Sole chromatic accent: filled buttons, selected nav, conversion |
| Pure White | #ffffff | Text/icons on cobalt primary buttons |

## Typography
- **arcadia** (body/UI): weights 360, 400, 420, 480; sizes 12–21px; line-height 1.00–1.50; tracking 0.01em at 12px, 0.005em at 14px; fallback Inter. "Never bold, never thin, always measured."
- **arcadiaDisplay** (headlines): weights 360, 480, 530; sizes 21–65px; line-height 1.10–1.20; tracking 0.02em at 24px, 0.015em at 32px, 0.01em at 42px; fallback Söhne Breit. Headings 28–65px at 480; 530 for largest display. Positive tracking + tight leading = "wide-set, architectural quality."

| role | size | line-height | tracking | token |
|---|---|---|---|---|
| caption | 12px | 1.00 | 0.12px | --text-caption |
| body-sm | 14px | 1.00 | 0.07px | --text-body-sm |
| body | 16px | 1.50 | — | --text-body |
| body-lg | 18px | 1.35 | — | --text-body-lg |
| subheading | 21px | 1.35 | — | --text-subheading |
| heading-sm | 28px | 1.20 | 0.42px | --text-heading-sm |
| heading | 32px | 1.15 | 0.48px | --text-heading |
| heading-lg | 42px | 1.15 | 0.42px | --text-heading-lg |
| display | 65px | 1.10 | — | --text-display |

## Spacing, radius, elevation
- Base 4px, spacious density. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 112, 128px (tokens --spacing-N).
- Section gap 72px; card padding 32px; element gap 12px.
- Radius: default 4px, cards 12px, inputs 32px, buttons 32px, nav 40px, tags 40px.
- No shadows. Levels: 0 Onyx Canvas #171721; 1 Graphite Card #1e1e2a; 2 Obsidian Button #272735.

```css
--color-onyx-canvas:#171721; --color-graphite-card:#1e1e2a; --color-obsidian-button:#272735;
--color-slate-border:#70707d; --color-mist-border:#e2e3ed; --color-ash-text:#c3c3cc;
--color-ivory-text:#ededf3; --color-cobalt:#5266eb; --color-pure-white:#ffffff;
--font-arcadia:'arcadia', ui-sans-serif, system-ui, sans-serif;
--font-arcadiadisplay:'arcadiaDisplay', ui-sans-serif, system-ui, sans-serif;
--radius-md:4px; --radius-xl:12px; --radius-3xl:32px; --radius-3xl-2:40px;
--page-max-width:1200px; --section-gap:72px; --card-padding:32px; --element-gap:12px;
```

## Layout
- Full-bleed dark canvas. Hero: 100vw × ~100vh photographic with dark overlay; centered headline + subtext + email-capture stack (max-width ~640px).
- Below hero: 1200px max-width sections, 72px vertical padding; text-left/image-right splits and 3-column card grids.
- Transparent top nav over hero → frosted (backdrop-blur) solid dark on scroll. Top bar only; no sidebar. Dark footer with disclaimer.

## Components
- **Primary CTA (Cobalt):** bg #5266eb, text #ffffff 16px arcadia 400, radius 32px, padding 0 20px inline (40px vertical standalone), no border/shadow. Sole chromatic action.
- **Ghost/outline button:** transparent, 1px solid #ededf3, text #ededf3 16px/400, radius 40px, padding 0 20px.
- **Nav pill link:** transparent, text #ededf3 16px/400, radius 40px, padding 0 20px; optional dropdown caret; solid dark fill + backdrop-blur on scroll.
- **Graphite card:** bg #1e1e2a, radius 12px, padding 32px, no border/shadow.
- **Email capture input:** transparent, 1px solid #ededf3 (left pill), text #ededf3 16px/400, radius 32px 0 0 32px, padding-left 20px, placeholder #c3c3cc; attached submit button.
- **Full-bleed hero:** 65px arcadiaDisplay 480, lh 1.1, #ffffff centered; subtext 18px arcadia 480 #ededf3, max-width 520px; content ~640px.
- **Top nav:** brand left, links centered (Products, Solutions, Resources, About, Pricing), Log in + cobalt "Open account" right; scroll state backdrop-blur 8–20px.
- **Disclaimer banner:** 12px arcadia 480, 0.01em, #ededf3 or #c3c3cc.
- **Section container:** full-width #171721, inner max 1200px, 72px vertical padding, 2–3 col grids.

## Motion
_not captured_ (only: nav transitions to backdrop-blur on scroll).

## Rules (do / don't)
Do:
- Cobalt #5266eb only for the single primary action per page
- All cards #1e1e2a, 12px radius, 32px padding; value lift not shadows
- arcadiaDisplay 480 (not 600/700) for all headings
- 32/40px pill radius for interactive controls; 4px only structural
- Body 16px arcadia 400, lh 1.5
- 72px vertical rhythm between sections
- Ivory #ededf3 for ghost-button border and text

Don't:
- Multiple bright accents (breaks monochrome discipline)
- Drop shadows on cards/components
- Bold (700+) headings — 480 is the ceiling
- Sharp corners on buttons, inputs, nav
- #ffffff for body text — always #ededf3
- Cobalt elements adjacent without 32px+ gap
- Bright/saturated section backgrounds; only #171721 or #1e1e2a

Imagery: cinematic, slightly desaturated cool-toned full-bleed photography with dark overlay in hero; below, product UI screenshots and abstract atmospheric backgrounds. Minimal line/glyph icons in Ivory. Comparable: Wise, Ramp, Brex, Linear, Stripe.

## Steal this
- Off-white text (#ededf3) instead of pure white for softer dark-mode contrast.
- Two-step value elevation (#171721 → #1e1e2a) replaces shadows entirely.
- Intermediate font weights (360/420/480) with positive tracking on display for "measured" premium tone.
- Pill email input + attached button as the hero conversion unit.
