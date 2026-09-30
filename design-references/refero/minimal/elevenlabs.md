---
name: ElevenLabs
source: https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26
category: minimal
tags: [light, warm, cream, light-weight-display, pill-buttons, hairline-borders]
best_for: AI/product marketing sites wanting warm editorial restraint with color only in product visuals
---
# ElevenLabs
> Warm cream editorial — Bauhaus studio notebook: eggshell paper, black ink, a single violet and orange spark for product moments; whisper-weight type, hairline borders, flat components.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| Eggshell | #fdfcfc | Page canvas (warm off-white to avoid glare) |
| Warm Taupe | #f5f3f1 | Section bands, secondary surfaces |
| Stone | #ebe8e4 | Hairline borders, dividers, icon backgrounds |
| Ink | #000000 | Primary text, filled buttons, navigation |
| Graphite | #44403b | Strong secondary text, section labels |
| Smoke | #777169 | Body text, muted descriptions |
| Ash | #a59f97 | Helper text, tertiary descriptions |
| Violet Spark | #0447ff | Product visuals only (spheres, icons) — never UI chrome |
| Ember Orange | #ff4704 | Product visuals only — paired with violet, never buttons |
| (button border) | #e5e5e5 | 1px border on pill buttons (from component spec) |

## Typography
- **Waldenburg** (display) — 300 only; 32, 36, 48px; lh 1.08–1.17; -0.02em (−0.64px @32, −0.72px @36, −0.96px @48); fallback Inter 300 or Söhne Light
- **Inter** (body/UI) — 400 default, 500 buttons/emphasis; 10–20px; lh 1.20–2.06; +0.01em (0.14px) at 14–16px, normal elsewhere; fallback system-ui
- **Geist Mono** (code) — 400; 13px; lh 1.69; technical labels, metadata; fallback JetBrains Mono, IBM Plex Mono

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| caption | 10px | 400 | 1.6 | — |
| body-sm | 14px | 400 | 1.5 | +0.14px |
| body | 16px | 400 | 1.5 | +0.16px |
| subheading | 18px | 400 | 1.6 | — |
| body-lg | 20px | 400 | 1.35 | — |
| heading-sm | 32px | 300 | 1.13 | −0.64px |
| heading | 36px | 300 | 1.17 | −0.72px |
| display | 48px | 300 | 1.08 | −0.96px |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 160px
- Radius: inputs 4px; small elements 4–10px; cards 20px; large cards 24px; buttons/tags/pills 9999px

| Shadow | Value |
|---|---|
| subtle | rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.04) 0px 1px 1px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px |
| subtle-2 | rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset |
| subtle-3 | rgba(0,0,0,0.1) 0px 0px 0px 0.5px inset |
| subtle-4 | rgba(0,0,0,0.1) 0px 0px 0px 1px inset |
| subtle-6 | rgba(255,255,255,0.6) 0px 0px 0px 1px inset |
| subtle-7 | rgb(235,232,228) 0px 0px 0px 0.5px inset |

Elevation approach: hairline 1px borders over drop shadows.

## Layout
- Max width 1280px; section gap 96–125px; card padding 32px; element gap 8–16px

## Components
- **Filled Pill Button** — #000000, white text, 9999px, 16px horizontal padding, Inter 14px/500, 1px solid #e5e5e5. Primary.
- **Outline Pill Button** — #fdfcfc fill, #000000 text, 9999px, 14px horizontal padding, Inter 14px/500, 1px solid #e5e5e5. Secondary.
- **Ghost Link Button** — transparent, black text, 9999px, Inter 14px/500, 1px solid #e5e5e5. Tertiary/nav.
- **Feature Card (Taupe)** — #f5f3f1, 20px, 32px horizontal padding, no shadow/border. Most common card.
- **White Card with Whisper Shadow** — #fdfcfc, 20px, 16px padding, three-layer subtle shadow; sparingly.
- **Large Feature Card** — #f5f3f1, 24px, generous padding; hero feature blocks.
- **Tab Pill** — white fill, black text, 9999px, 1px border; active indicator is a colored dot (orange/teal/gray); product switcher.
- **Hairline Divider** — 1px solid #ebe8e4; preferred over whitespace for section separation.
- **Audio Sphere Visual** — ~200px circle, radial gradient of #0447ff, #ff4704, pink, warm tones; centered 48px white play button; signature product visual.
- **Top Navigation Bar** — transparent on eggshell, 50px; logo left, nav center-left (Inter 14px), auth buttons right; not sticky.
- **Trust Logo Grid** — 6 columns, grayscale low-contrast logos, "Read all stories" outline button top-right.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Waldenburg 300 for all 32px+ headlines
- All buttons, tags, pills 9999px
- Only #000000 filled + #fdfcfc outline button hierarchy
- #0447ff and #ff4704 only in product visuals
- 1px solid #ebe8e4 for section separation
- -0.02em on Waldenburg 32px+; +0.01em on Inter 14–16px
- Stack surfaces eggshell → taupe → stone; never pure white/gray

**Don't**
- Never bold/semibold Waldenburg
- Never violet/orange on buttons, links, badges, interactive UI
- No heavy drop shadows
- No accents beyond the two product sparks
- No card corners under 8px
- Never pure #ffffff — always #fdfcfc
- No display fonts for body; Inter 400/500 below 24px

**Similar references:** Linear, Vercel, Stripe, Notion, Framer.

## Steal this
- Brand color lives only in the product visual (gradient sphere); UI stays black on cream.
- Light-weight (300) display with negative tracking — authority through restraint.
- Tab pills with a small colored status dot instead of colored fills.
- 0.5px inset shadows as ultra-fine borders.
