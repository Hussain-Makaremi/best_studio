---
name: LaunchDarkly
source: https://styles.refero.design/style/18a75348-513a-49d8-94f5-e2df8c118b6b
category: devtools
tags: [dark, violet-blue, glow, pill-radius, white-screenshots, floating-nav]
best_for: Dark enterprise dev-platform marketing where bright product screenshots float on a glowing canvas
---
# LaunchDarkly
> Neon control room: deep charcoal canvas, cool violet-blue as the only chromatic voice, glow instead of shadow.

Borrows developer-tool language (monospace code, panel grids, pill inputs) inside a confident marketing skin. The #405bff → #7084ff gradient is the "electronic pulse" in glows, hero text, active states and washes rather than flat fills. Pill-soft corners (30–60px), hairline-white borders on near-black.

## Color tokens
### Chromatic
| token | hex | role |
|---|---|---|
| Signal Violet | linear-gradient(179deg, #405bff 1.06%, #7084ff 123.42%) | Hero text accent, link underlines, icon glows, ambient washes, card glow halos |
| Voltage Blue | #405bff | Primary CTA fill; outline accent for tags, dividers, focused edges |
| Plasma Cyan | #3dd6f5 | Secondary gradient endpoint for radial glows |

### Neutrals (dark → light)
| token | hex | role |
|---|---|---|
| Midnight Ink | #0e0e0e | Page canvas |
| Carbon | #191919 | Surface 1 (nav pill, cards, buttons, footer) |
| Smoke | #2c2c2c | List dividers, row separators |
| Graphite | #414042 | Surface 2 (elevated panels, borders) |
| Steel | #58595b | Input borders, inactive fields |
| Slate | #6d6e71 | Muted helper, disabled labels |
| Fog | #a7a9ac | Secondary text, subtle borders, placeholder |
| Ash | #d1d3d4 | Tertiary text, icon strokes, list dividers |
| Paper | #ffffff | Primary text, headings, icon strokes |

## Typography
- **Sohne / custom grotesk** (primary) — fallback Inter, Geist, Söhne, Space Grotesk.
- **Sohne Mono / JetBrains Mono** (code) — fallback JetBrains Mono, IBM Plex Mono, Geist Mono.
- Weights 400, 500, 600, 700.

Scale (Minor Third 1.2 from 16px):
| role | size | weight | lh |
|---|---|---|---|
| caption | 12px | 400 | 1.5 |
| body-sm | 14px | 400 | 1.5 |
| body | 16px | 400 | 1.5 |
| subheading | 20px | 400 | 1.4 |
| heading-sm | 24px | 500 | 1.3 |
| heading | 36px | 500 | 1.2 |
| heading-lg | 66px | 500 | 1.09 |
| display | 100px | 500 | 1.0 |

Additional sizes: 13, 15, 18, 22, 26, 28, 32, 40, 84, 85, 125px. Letter spacing 0.129em and 0.167em on small uppercase labels; normal on body/display.

## Spacing, radius, elevation
- Base 8px. Scale: 8, 16, 24, 32, 40, 48, 64, 72, 80, 104, 120, 160px. Density comfortable.
- Radius: inputs 10px · tags 30px · cards 30px · buttons 30px · nav pill 60px. Additional: 4px (md), 20px (2xl), 40px, 46px, 100px (full-2).
- Shadow lg: `rgba(0,0,0,0.45) 0px 4px 20px 0px`.
- Glows instead of drop shadows: hero form input `0 0 40px rgba(64,91,255,0.25)`; general `rgba(64,91,255,0.25)` or `rgba(112,132,255,0.19)`.

## Layout
- Max width 1200px; section gap 80–120px; card padding 32–48px; element gap 16–24px.
- Only headlines/hero blocks center; body copy and feature lists left-aligned.
- Imagery: bright white product UI screenshots floating on dark; hero is type + glow + large form input; grayscale logo strip; syntax-highlighted code; no lifestyle, 3D or decorative illustration.

## Components
- **Floating nav pill** — fixed top center, 60px radius, Carbon fill, 1px white-alpha border; logo, links (Platform, Solutions, Resources, Developers, Pricing), Sign In, Sandbox, Voltage Blue "Get a demo"; 16–24px from viewport top.
- **Primary action** — #405bff, white text, 30px, 16px × 24px. "Get a demo", "Get started".
- **Hero form input** — Carbon, 10px, 1px border; email left, Voltage Blue button right; ~600px wide centered; blue glow halo; ~16–20px vertical padding.
- **Segmented tab control** — Release/Observe/Iterate, 30px, Carbon, 1px border; active = Voltage Blue dot + brighter white text; inactive Ash.
- **Feature checklist item** — Voltage Blue or white checkmark + white 16–18px text; 12–16px vertical gap.
- **Sub-feature card** — semi-transparent dark, 16–20px, violet/blue edge glow; icon, label, right arrow.
- **Product screenshot panel** — pure #ffffff, 12–20px, soft shadow — signals "real workspace."
- **Code snippet block** — Carbon, 12–16px, 24px padding; language tabs (JavaScript/Python/iOS/React); mono 14–16px; syntax green strings, cyan keywords, pink literals; copy button top-right.
- **SDK/resource card** — Carbon, 1px white-alpha, 20–30px, 32–40px padding; icon top-left, heading ~18–20px/500, subtext 14–15px/400; grid of 3.
- **Logo strip** — grayscale, ~70% opacity, Ash/Fog.
- **Hero headline** — 84–100px/500, lh 1.0–1.09; line 1 white ("Move at AI speed."), line 2 Signal Violet ("Stay in control."); tight tracking.
- **Ghost/outlined action** — transparent, 1px Signal Violet border and text, 30px.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 30px radius for buttons, tags, cards.
- 60px for nav pill and full-width pill containers.
- Signal Violet (#7084ff) for the second half of hero headlines.
- Product screenshots as pure white panels.
- #405bff → #7084ff at 179deg for ambient glows.
- Body 16–18px/400 white on Carbon; never below 14px.
- Mono for SDK names, code, technical identifiers.

**Don't**
- No square or small (4–8px) radii.
- No drop shadows — glow instead.
- No other accents (no green, red, yellow).
- No white/gray primary buttons — Voltage Blue only.
- No centered body copy or feature lists.
- No 1.5+ line-height on display.
- No dark product screenshots.

Similar: Linear, Vercel, Datadog, Stripe.

## Steal this
- Two-line hero: plain statement in white, "why it matters" line in accent gradient.
- White product screenshots on a dark page for deliberate contrast tension.
- Colored glow (accent at ~25% alpha, 40px) replaces every drop shadow.
- Floating pill nav detached 16–24px from the top edge.
