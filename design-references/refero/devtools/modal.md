---
name: Modal
source: https://styles.refero.design/style/68c15685-5db9-4869-b71d-27240568c9d8
category: devtools
tags: [dark, green-tinted, single-accent, lime, phosphor, 3d-isometric]
best_for: Cloud compute / AI infra developer sites with a terminal-phosphor identity
---
# Modal
> Phosphor terminal in a darkened server room: near-black, phosphor-pale green type, one lime accent like an LED status light.

Developer-native: monospaced code windows, isometric 3D icons in brand green, generous negative space. Display face Goga + variable Inter, both with tight negative tracking. Color is rationed — vivid lime (#7fee64) only on primary actions, logo, 3D illustrations and emphasis. Flat, borderless components with green-tinted hairlines and backdrop blur instead of shadows.

## Color tokens
### Brand
| token | hex | role |
|---|---|---|
| Lime Pulse | #7fee64 | Logo, hero CTA pill, tag fills, active states, illustration base |
| Phosphor White | #ddffdc | Primary text, headings, icon strokes, filled button text |
| Mint Frost | #def0dd | Card tint on light sections, secondary text on dark, soft highlight |

### Muted greens
| token | hex | role |
|---|---|---|
| Sage 60 | #8cab87 | Default body copy on dark |
| Sage 40 | #677d64 | Muted helper, secondary descriptions |
| Moss 70 | #9cbf93 | Eyebrow labels, category tags |
| Moss 80 | #aed2a4 | Lead paragraph, hero subhead |
| Fern Link | #859984 | Inline links, tertiary nav on dark |
| Deep Fern | #697368 | Small uppercase labels, micro-copy, footer |

### Neutrals
| token | hex | role |
|---|---|---|
| Void Black | #000000 | Page canvas |
| Ground Iron | #181818 | Primary button fill, card surfaces, base UI |
| Charcoal Rust | #231c1c | Warm dark accent for code-window inner panels |
| Carbon Veil | #212525 | Elevated surfaces, nav background |
| Phosphor Blue-Black | #1f2a33 | Secondary hairlines, separators between dark bands |
| Pine 15 | #3e4a3c | Secondary outlined action border |
| Circuit Border | #485346 | Outlined/ghost action border, primary interactive hairline |

Surfaces: 0 Void #000000 · 1 Ground #181818 · 2 Carbon #212525 · 3 Mint Frost #def0dd (light section) · 4 Lime Pulse #7fee64 (highest emphasis).

Hero marketing gradient: #80ee64 → #18b759 → #09af58; halo rgba(195,198,64,0.85) → transparent.

## Typography
- **Goga** (display/heading) — 400, 500; 20–64px (11 values); lh 1–1.5; tracking −0.017 to −0.007 (tightens from −0.007em at 48px to −0.017em at 21px); `ss01` required; fallback Inter Tight or Space Grotesk. All H1–H4 and card titles; 500 for card titles, 400 for hero/section.
- **Inter Variable** (UI/body) — 400, 500; 12, 14, 16, 20px; lh 1.25, 1.33, 1.43, 1.50; tracking −0.026em @14, −0.022em @16, −0.018em @20, +0.05em @12 uppercase; `cv11` required. 500 for interactive/nav, 400 for paragraphs.
- Code: Fira Mono.

| role | size | weight | lh | tracking |
|---|---|---|---|---|
| display | 64px | 500 | 1.0 | −0.448px |
| 48px | 48px | 500 | 1.05 | −0.448px |
| heading-lg | 42px | 500 | 1.05 | −0.336px |
| heading | 30px | 400 | 1.2 | −0.36px |
| heading-sm | 24px | 400 | 1.3 | −0.312px |
| subheading | 20px | 400 | 1.5 | −0.36px |
| body | 16px | 400 | 1.5 | −0.352px |
| body-sm | 14px | 400 | 1.43 | −0.364px |
| caption | 12px | 400 | 1.33 | +0.6px (uppercase) |

## Spacing, radius, elevation
- Base 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 96, 128, 160px. Density comfortable.
- Radius: cards 8px · inputs 8px · buttons 12px · pill buttons 9999px · icons 0px.
- Only shadow (nav bar): `rgba(0,0,0,0.1) 0 10px 15px −3px, rgba(0,0,0,0.1) 0 4px 6px −4px`.
- Depth via surface shifts #000000 → #181818 → #212525 and 1px #485346 hairlines.

## Layout
- Max width 1280px; section gap 80px; card padding 32px; element gap 20px.
- Hero: centered stack — headline (first phrase lime), subhead, dual CTAs, single 3D glowing cube with radial halo. No split layouts, no sidebar.
- Sections: uppercase eyebrow (Moss 70) → Goga heading → muted body → 2-column (text + code/visual) or 3-column card grid (max 3 columns).
- Alternating #000000 / #181818 bands; one light section (#def0dd) mid-page as breath.
- Single fixed top bar with blur; compact dark footer with muted green link columns.
- Imagery: 3D glowing renders + dark code windows; isometric lime icons; desaturated green-gray logos; no photography.

## Components
- **Primary filled** — bg #181818, text + 1px border #ddffdc, 12px radius, 32px padding, Inter 16px/500, −0.352px. "Engraved into dark."
- **Ghost outline** — transparent, 1px #ddffdc, text #ddffdc, 12px, 32px.
- **Accent pill (hero CTA)** — 9999px, #7fee64, dark text (#181818/#000000), 12–16px × 20–24px, Inter 16px/500. One per viewport max.
- **Outlined ghost link** — transparent, 1px #485346 reduced opacity, 9999px, 8px, text #859984, 14px/500.
- **Nav bar** — #212525 + 10px blur, 1px bottom #1f2a33, sticky, ~64px, 24px horizontal padding; logo left; links center 14px/500 #ddffdc 32px gap; right Login (#859984) + Sign Up accent pill.
- **Hero** — Goga 64px/500, lh 1.0, −0.448px; first two words #7fee64, rest #ddffdc; subhead Inter 20px #aed2a4 max ~640px; Accent Pill + Ghost Outline, 12px gap.
- **Code window card** — 12–16px radius, #181818 or #212525, 1px #485346, 3 traffic-light dots (8px), Fira Mono 14px lh 1.5; keywords #7fee64, strings #ddffdc, comments #677d64; optional title bar #9cbf93 Inter 12px/500; no shadow.
- **Workload card** — #1f2a33 or #181818, 8px, no border or 1px #485346, 32px padding; ~120px isometric 3D icon; title Goga 24px/400 #ddffdc (16px top margin); description Inter 16px #8cab87 (8px margin); 3-col grid, 20–24px gap.
- **Eyebrow** — Inter 12px/500 uppercase, +0.6px, #9cbf93, 8–12px above heading.
- **Logo strip** — two rows, #697368 or #859984, ~20–24px height, 40–60px spacing.
- **Section divider** — 1px #1f2a33, content width, sparing.
- **Tag/chip** — 9999px; active #7fee64 bg / #181818 text; neutral transparent + 1px #485346; Inter 12px/500; 4px 12px. Green for status (running, active, live).

CSS quick start (as returned):
```css
:root {
  --color-void-black:#000000; --color-ground-iron:#181818; --color-carbon-veil:#212525;
  --color-circuit-border:#485346; --color-phosphor-blue-black:#1f2a33; --color-charcoal-rust:#231c1c;
  --color-lime-pulse:#7fee64; --color-phosphor-white:#ddffdc; --color-mint-frost:#def0dd;
  --color-sage-60:#8cab87; --color-sage-40:#677d64; --color-moss-70:#9cbf93; --color-moss-80:#aed2a4;
  --color-fern-link:#859984; --color-deep-fern:#697368; --color-pine-15:#3e4a3c;
  --font-goga:'Goga', ui-sans-serif, system-ui; --font-inter-variable:'Inter Variable', ui-sans-serif, system-ui;
  --text-display:64px; --leading-display:1; --tracking-display:-0.448px;
  --radius-cards:8px; --radius-buttons:12px; --radius-pills:9999px;
  --shadow-md:rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px;
  --page-max-width:1280px; --section-gap:80px; --card-padding:32px; --element-gap:20px;
}
```

## Motion
- Primary duration 300ms, `ease-out` for UI state changes.
- Spring `cubic-bezier(0.34, 1.56, 0.64, 1)` sparingly on 3D cube and key illustrations.
- Ambient 80s continuous rotation on hero cube.
- No bouncy easings on UI chrome.
- color, background-color, border-color, fill, stroke, text-decoration-color transition together over 300ms ease-out.

## Rules (do / don't)
**Do**
- #7fee64 as fill on exactly one element per viewport.
- Inter `cv11` and Goga `ss01` globally.
- Body #8cab87 on #000000.
- Goga headlines with negative tracking.
- 12px buttons, 8px cards.
- Depth through surface shifts + 1px #485346.
- 32px padding on primary cards/blocks.

**Don't**
- No lime as body text color.
- No drop shadows (nav is the ceiling).
- No blue/purple/non-green accents.
- No #ddffdc for body paragraphs.
- No Inter for display headings.
- No 9999px on cards/panels.
- No raw #ffffff or #00ff00.

Similar: Replicate, Together AI, Railway, Vercel, Anyscale.

## Steal this
- Tint the entire neutral ramp toward the brand hue (green-grays) so even body text carries identity.
- First phrase of the hero headline in the accent color.
- One emissive 3D object with a radial bloom as the whole hero visual.
- Unified 300ms ease-out on all color properties; springs only for brand visuals.
