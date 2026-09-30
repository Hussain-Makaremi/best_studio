---
name: Resend
source: https://styles.refero.design/style/0d914ef0-fa84-4c60-a9aa-cef0b5eb6e5d
category: dark-mode
tags: [dark, pure-black, developer-tool, serif-display, monospace, hairline-borders]
best_for: Developer-first SaaS / API products where code is the imagery and the brand is anti-decorative
---
# Resend
> Black velvet with violet neon — pure black canvas, hairline graphite borders, white-on-black type.

Hero pairs a 96px serif (Domaine) with a 3D black cube, deliberately anti-decorative. Developer identity through monospaced code (Commit Mono, appears 814 times). 1px borders instead of shadows; restrained motion.

## Color tokens
| token | hex | role |
|---|---|---|
| Void Black | #000000 | Page background, card surfaces, overlay scrims |
| Graphite Hairline | #292d30 | 1px borders on cards, inputs, buttons, code blocks, dividers |
| White | #ffffff | Primary headings, hero text, button labels, icons |
| Bone White | #f0f0f0 | Body text, secondary headings, stroke outlines |
| Ash Gray | #a1a4a5 | Muted body, badge labels, icon strokes |
| Smoke Gray | #abafb4 | Links, inactive button text, captions |
| Iron | #6e727a | Decorative strokes, disabled, low-emphasis borders |
| Charcoal | #464a4d | Inline code text, muted labels |
| Iris Violet | #9281f7 (also oklab violet→magenta gradient) | Code strings, developer identifiers, link accents, tags |
| Iris Violet Glow | #baa7ff | Violet text accent for links, tags, emphasis |
| Signal Blue | #3b9eff | Filled button action color, selected nav |
| Sky Blue | #70b8ff | Blue text accent |
| Pulse Green | #3ad389 | Green accent for links, tags |
| Alarm Red | #ff9592 | Red accent for links, tags |
| Crimson | #ff6465 | Red wash for highlight backgrounds |
| Amber | #ffca16 | Yellow text accent |
| Amber Glow | #ffd60a | Yellow wash for highlight backgrounds |
| Surface Gradient | linear-gradient(rgb(27,27,27), rgb(3,3,3)) | Subtle card-to-canvas lift, edge fades, elevated panels |

## Typography
- **Inter** — body, UI, nav, buttons, links (1,280 uses). 400, 500, 600; 12, 14, 16, 18, 24px; lh 1.0–1.6. Fallback Söhne, system-ui.
- **Domaine** — hero display. 400; 77, 96px; lh 1.0; -0.01em; features ss01, ss04, ss11. Fallback GT Sectra, Tiempos Headline, Playfair Display.
- **aBC Favorit** — section headlines. 400, 500; 14, 16, 20, 56px; lh 1.0–1.5; -0.05em at 56px, +0.025em at 14px; features ss01, ss03, ss04, ss11. Fallback Inter Display, Söhne Breit, GT America.
- **Commit Mono** — code, inline code, terminal badges, API labels. 400; 12, 14, 16px; lh 1.33–1.5. Fallback JetBrains Mono, Berkeley Mono, IBM Plex Mono.

Scale (Major Third 1.25 from 12px):
| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 12px | — | 1.33 | 0 | --text-caption |
| body-sm | 14px | — | 1.43 | 0 | --text-body-sm |
| body | 16px | — | 1.5 | 0 | --text-body |
| subheading | 20px | — | 1.0 | 0 | --text-subheading |
| heading-sm | 24px | — | 1.5 | 0 | --text-heading-sm |
| heading | 56px | 400 | 1.2 | -2.8px | --text-heading |
| heading-lg | 77px | 400 | 1.0 | -0.77px | --text-heading-lg |
| display | 96px | 400 | 1.0 | -0.96px | --text-display |

## Spacing, radius, elevation
- Base 4px, comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 104, 144px.
- Max-width 1200px; section gap 96px; card padding 32px; element gap 16px.
- Radius: badges/inputs/buttons 6px; cards 16px; large panels 24px. Never mix on one surface.
- Elevation via 1px #292d30 borders, never drop shadows. Tokens:
  - subtle `rgba(176,199,217,0.145) 0 0 0 1px`
  - subtle-2 `rgb(0,0,0) 0 0 0 8px`
  - subtle-3 `rgba(0,0,0,0.1) 0 1px 3px 0, rgba(0,0,0,0.1) 0 1px 2px -1px`

## Layout
Max-width 1200px, 96px section gaps; hero serif headline + 3D cube; centered 4-column logo grid with 60px row gap. (Further layout detail _not captured_.)

## Components
- **Primary button (ghost on black):** transparent, 1px #292d30, #ffffff text, 6px, 12px 16px; hover border → white. Never filled, never colorful.
- **Nav link:** transparent, #f0f0f0 14px Inter 400, no padding; hover underline or → #ffffff.
- **Text link with chevron:** white or #f0f0f0 16px Inter, trailing chevron.
- **Hero announcement pill:** transparent, 1px #292d30, #f0f0f0 14px, 9999px, 6px 12px, small chromatic chevron.
- **Section card:** #000000, 1px #292d30, 16px, 32px padding, no shadow.
- **Testimonial card:** black, 1px #292d30, 16px, 24px; quote 16px Inter; 32px circular avatar; name 14px/500 #f0f0f0; role #a1a4a5.
- **Code block / terminal:** #000000, 1px #292d30, 16px, 24px; Commit Mono 12–14px; syntax #9281f7 strings/keywords, #3b9eff filenames, #3ad389 success, #ff9592 errors; optional traffic-light dots.
- **Logo grid:** native-color logos on black, centered 4-col, 60px row gap, no wrappers.
- **Status dot:** 2–3px filled; #3ad389 delivered, #70b8ff opened, #baa7ff clicked, #ff9592 bounced, #ffca16 complained; with Commit Mono 12px #a1a4a5 label.
- **Email address badge:** no bg, Commit Mono 12–14px, #9281f7.
- **Icon container:** 32×32 or 48×48, 16px radius, subtle oklab violet→magenta gradient fill, white or violet stroke icon. Only chromatic surface on page.
- **3D hero cube:** WebGL black cube, #292d30 edge highlights, slow rotation, no glow.
- **Footer link row:** 'Privacy', 'Terms' 14px Inter #a1a4a5.

## Motion
- Hero text: fade-and-slide.
- Hero cube: subtle WebGL rotation.
- Hover transitions: 150ms ease-out.

## Rules (do / don't)
Do:
- Pure #000000 canvas, never off-black
- Separate layers with 1px #292d30 borders
- Commit Mono for code/email/dev strings; Inter for prose/UI
- Ghost buttons: transparent, 1px border, white text
- 6px buttons/badges/inputs; 16px cards/code windows
- #9281f7 for code strings and identifiers (syntax-highlight feel)
- -0.05em at 56px; -0.01em at 96px

Don't:
- Gradients, glows, chromatic washes on hero/section backgrounds
- Filled accent-color primary CTAs
- Mixed radii on one surface
- Colored card backgrounds
- Shadows for elevation
- Iris Violet as decorative heading color
- Status colors outside data/status indicators

Imagery: no photography/illustration; WebGL 3D objects, product UI in dark code windows, native-color logos, 1–1.5px stroke icons in #f0f0f0 or #a1a4a5.
Best-fit: developer-first SaaS, email infra, API platforms, terminal-adjacent products, luxury tech. Similar: Linear, Vercel, Plaid, Railway, Stripe dark.

## Steal this
- Serif display hero on a pure-black dev site — editorial contrast against mono/sans.
- Ghost-only buttons: the brand refuses filled color CTAs.
- Accent colors mapped to syntax highlighting / event status, never decoration.
- Status-dot + mono label pattern for event/log UIs.
