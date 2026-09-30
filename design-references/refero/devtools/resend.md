---
name: Resend
source: https://styles.refero.design/style/0d914ef0-fa84-4c60-a9aa-cef0b5eb6e5d
category: devtools
tags: [dark, pure-black, serif-display, mono, hairline-borders, ghost-buttons]
best_for: Developer API/platform marketing that wants luxury-editorial restraint on pure black
---
# Resend
> Black velvet with violet neon: pure black canvas, hairline graphite borders, white type on matte glass.

"Resend lives in a near-total darkness — pure black canvas, hairline graphite borders, and white-on-black typography that feels like reading text printed on matte glass." Luxury minimalism meets developer tooling: anti-decorative 96px Domaine serif hero, 3D black cube, violet code accents, restrained 150ms ease-out motion. 1px borders instead of shadows; Commit Mono signals developer identity.

## Color tokens
### Brand accents
| token | hex | role |
|---|---|---|
| Iris Violet | #9281f7 | Code strings, developer identifiers, syntax highlighting only — never decorative |
| Iris Violet Glow | #baa7ff | Secondary violet accent for text |
| Iris Violet (Gradient) | linear-gradient(to right bottom in oklab, rgb(146,129,247) → rgb(154,84,220)) | Icon containers, brand badges |

### Action / status
| token | hex | role |
|---|---|---|
| Signal Blue | #3b9eff | Filled buttons, selected nav, conversion moments |
| Sky Blue | #70b8ff | Text accent for links, tags, emphasized phrases |
| Pulse Green | #3ad389 | Status (delivered), text accent |
| Alarm Red | #ff9592 | Status (bounced/error), text accent |
| Crimson | #ff6465 | Highlight backgrounds, decorative bands, soft emphasis |
| Amber | #ffca16 | Text accent, data indicator (warning) |
| Amber Glow | #ffd60a | Highlight backgrounds, soft emphasis |

### Neutrals
| token | hex | role |
|---|---|---|
| Void Black | #000000 | Page canvas, card surfaces, overlay scrims |
| Graphite Hairline | #292d30 | 1px borders on all UI layers |
| Charcoal | #464a4d | Inline code text, muted labels |
| Iron | #6e727a | Subtle strokes, disabled, low-emphasis borders |
| Ash Gray | #a1a4a5 | Muted body, badge labels, icon strokes |
| Smoke Gray | #abafb4 | Link color, inactive button text, captions |
| Bone White | #f0f0f0 | Body text, secondary headings |
| White | #ffffff | Primary headings, hero text, button labels |
| Surface Gradient | linear-gradient(rgb(27,27,27) → rgb(3,3,3)) | Card-to-canvas lift, edge fades, elevated panels |

Surfaces: L0 Void #000000 · L1 Graphite #292d30 (hairlines) · L2 Surface Lift #0b0e14 · L3 Backdrop Blur #000000f2 with blur(25px) for modals/nav overlays.

## Typography
- **Inter** — 400, 500, 600; 12–24px; lh 1–1.6; fallback Söhne, system-ui. Body, UI, nav, buttons, links (the workhorse, 1280 occurrences).
- **Domaine** — 400 only; 77px, 96px; lh 1.00; tracking −0.01em; features ss01, ss04, ss11; fallback GT Sectra, Tiempos Headline, Playfair Display. Only used twice — largest hero statement.
- **aBC Favorit** — 400, 500; 14, 16, 20, 56px; lh 1.00–1.50; tracking −0.05em at 56px, +0.025em at 14px; features ss01, ss03, ss04, ss11; fallback Inter Display, Söhne Breit, GT America. Section headlines.
- **Commit Mono** — 400; 12, 14, 16px; lh 1.33–1.50; fallback JetBrains Mono, Berkeley Mono, IBM Plex Mono. Code, inline labels, developer strings (814 occurrences).

Scale (Major Third 1.25 from 12px):
| role | size | weight | lh | tracking | token |
|---|---|---|---|---|---|
| caption | 12px | — | 1.33 | 0 | --text-caption |
| body-sm | 14px | — | 1.43 | 0 | --text-body-sm |
| body | 16px | — | 1.5 | 0 | --text-body |
| subheading | 20px | — | 1 | 0 | --text-subheading |
| heading-sm | 24px | — | 1.5 | 0 | --text-heading-sm |
| heading | 56px | 400 | 1.2 | −2.8px | --text-heading |
| heading-lg | 77px | 400 | 1 | −0.77px | --text-heading-lg |
| display | 96px | 400 | 1 | −0.96px | --text-display |

## Spacing, radius, elevation
- Base 4px; density comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 104, 144px.
- Radius: badges/inputs/buttons 6px · cards/code windows 16px · large panels 24px. "Never mix — the radius scale is two values" (6 UI chrome / 16 surfaces).
- Elevation via 1px #292d30 hairlines on flat black — never drop shadows.

| shadow | value |
|---|---|
| --shadow-subtle | rgba(176,199,217,0.145) 0 0 0 1px |
| --shadow-subtle-2 | rgb(0,0,0) 0 0 0 8px |
| --shadow-subtle-3 | rgba(0,0,0,0.1) 0 1px 3px 0, rgba(0,0,0,0.1) 0 1px 2px −1px |

## Layout
- Max width 1200px; section gap 96px; card padding 32px; element gap 16px.
- Imagery: WebGL 3D objects (black cube hero), product UI in dark code windows, inline SVG logos at native colors, 1–1.5px stroke icons in #f0f0f0 or #a1a4a5. No photography, illustration or lifestyle.

## Components
- **Primary button (ghost on black)** — transparent, 1px #292d30, text #ffffff, 6px radius, 12px 16px; border goes white on hover. Never filled, never colorful.
- **Nav link** — transparent, no border, #f0f0f0 14px Inter 400, zero padding; underline or shift to #ffffff on hover.
- **Text link with chevron** — white/#f0f0f0 16px Inter, trailing chevron.
- **Hero announcement pill** — transparent, 1px #292d30, #f0f0f0 14px, 9999px radius, 6px 12px, small chromatic chevron.
- **Section card** — #000000, 1px #292d30, 16px radius, 32px padding, no shadow.
- **Testimonial card** — #000000, 1px #292d30, 16px, 24px padding; quote 16px Inter #f0f0f0; 32px circular avatar; name 14px/500 #f0f0f0; role #a1a4a5.
- **Code block / terminal** — #000000, 1px #292d30, 16px, 24px; Commit Mono 12–14px; syntax #9281f7 strings/keywords, #3b9eff filenames, #3ad389 success, #ff9592 errors; optional 3 traffic-light dots (8px).
- **Logo grid** — native colors on black, 4 columns, 60px row gap, no wrappers/labels.
- **Status dot** — 2–3px filled dot + Commit Mono 12px #a1a4a5 label; #3ad389 delivered, #70b8ff opened, #baa7ff clicked, #ff9592 bounced, #ffca16 complained.
- **Email address badge** — no bg, Commit Mono 12–14px, #9281f7.
- **Icon container** — 32×32 or 48×48, 16px radius, oklab violet→magenta gradient, white/violet stroke icon. Only chromatic surface on page.
- **3D hero cube** — WebGL black cube, subtle #292d30 edge highlights, slow rotation, no glow/color.
- **Footer link row** — "Privacy", "Terms" 14px Inter #a1a4a5; no logo, no columns.

## Motion
- Hero text: fade-and-slide. Hero cube: subtle WebGL rotation.
- Hover transitions 150ms ease-out. "Restrained but expressive."

## Rules (do / don't)
**Do**
- Pure #000000 canvas — never off-black or tinted grays.
- Separate all layers with 1px #292d30 borders, not shadows.
- Commit Mono for code/email/developer strings; Inter for prose/chrome.
- Buttons ghost/outlined: transparent, 1px border, white text.
- 6px for buttons/badges/inputs; 16px for cards/code windows — never mix.
- #9281f7 marks code/developer identifiers only.
- −0.05em tracking at 56px; −0.01em at 96px.

**Don't**
- No gradients, glows or washes on hero/section backgrounds.
- No filled accent-color primary buttons.
- No multiple radii on one surface.
- No colored card backgrounds.
- No shadows for elevation (use borders + subtle backdrop blur).
- Never Iris Violet as decorative large heading color.
- Status colors reserved for data/status only.

Use cases: developer-email platform — code-heavy landing pages, API docs, email-template editors. Similar: Linear, Vercel, Plaid, Railway, Stripe dark mode.

## Steal this
- Editorial serif hero (used exactly twice) against a mono/sans developer system = instant luxury.
- Accent color that behaves like syntax highlighting — color = "this is code/an identifier".
- Status-color vocabulary tied to lifecycle states (delivered/opened/clicked/bounced/complained).
- Two-value radius system (6 chrome / 16 surfaces) enforced strictly.
