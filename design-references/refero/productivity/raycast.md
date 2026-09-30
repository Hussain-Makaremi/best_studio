---
name: Raycast
source: https://styles.refero.design/style/3b6a17f0-3bdf-418c-a95e-0b89e5a8b2f8
category: productivity
tags: [dark, single-accent, coral, inset-shadows, glass-nav, neutral-cta]
best_for: Dark power-tool / developer utility marketing sites with tactile "keyboard key" cards and neutral CTAs
---
# Raycast
> Midnight command center, coral neon.

Dark power-tool cockpit on near-pure black (#040506) with minimal elevation, single warm coral accent (#ff6363) and quiet Inter typography. Components defined by hairline borders and inset shadows rather than drop shadows; 98% achromatic with coral reserved for logo, hero, AI badge. Glass-blur navigation; primary actions are neutral gray buttons, not chromatic CTAs. Hero breaks the system with red/blue gradient geometry; page returns to austere dark surface below.

## Color tokens
| token | hex | role |
|---|---|---|
| Coral Pulse | #ff6363 | Brand accent — logo, AI badge, hero artwork, warm card tints only |
| Ember Hush | #452324 | Warm-tinted card backgrounds, muted coral backdrop |
| Electric Sky | #63a1ff | Hero illustration mid-tone, decorative gradient only |
| Cobalt Edge | #143ca3 | Hero illustration stroke, deep gradient anchor |
| Deep Space | #02193b | Hero illustration fill (not a UI token) |
| Info Blue | #56c2ff | Blue wash for highlight backgrounds (not status color) |
| Success Green | #59d499 | Green wash for highlight backgrounds |
| Void Black | #040506 | Page canvas |
| Ink | #07080a | Card surfaces, elevated panels |
| Obsidian | #111214 | Subtle surface tint, pressed states, input wells |
| Graphite | #1b1c1e | Neutral form states, badge fill, quiet UI feedback |
| Slate | #2f3031 | Dark button borders, labels on ghost/dark buttons |
| Iron | #454647 | Button text on light fills, mid-gray borders |
| Smoke | #6a6b6c | Secondary body text, muted labels |
| Ash | #9c9c9d | Light text on dark, inverse labels, captions |
| Mist | #e6e6e6 | Light neutral action fill for buttons on dark |
| Pure White | #ffffff | Headings, high-emphasis text |
| (nav border) | #363739 | Glass nav 1px border |

## Typography
- **Inter** (primary) — weights 400, 500, 600; 11–64px (12 values); lh 0.91–1.71; tracking 0.004–0.073px. Fallback: system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif. Body 16px/400, nav/card labels 13–14px/500, subheadings 18–22px/400, section headings 32–56px, display 64px/600.
- **GeistMono** — weights 300, 400, 500; 10, 12, 14px; lh 1.00–1.60; tracking 0.0170em at 12px, 0.0500em at 10px (uppercase). Fallback: 'JetBrains Mono', Menlo, Monaco, Courier, monospace. Version strings, technical micro-labels, terminal text.
- **SF Pro Text** — weights 500, 700; 16, 24, 32px; lh 1.15. Icon glyphs and numeric stat callouts at 24–32px/500.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| eyebrow | 11px | — | 0.91 | 0.8px |
| body | 16px | 400 | 1.15 | 0px |
| body-lg | 18px | 400 | 1.15 | 0px |
| subheading | 20px | 500 | 1.2 | 0.2px |
| heading-sm | 24px | 500 | 1.15 | 0px |
| heading | 32px | 400/500 | 1.15 | 0px |
| heading-lg | 56px | 400 | 1.17 | 0.22px |
| display | 64px | 600 | 1.1 | 0px |

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 120, 224px.
- Section gap 80–120px · card padding 24px · element gap 8–16px.
- Radius: badges 6px · inputs 8px · buttons 8px · cards 16px · largeCards 20px · pills 9999px · iconContainers 99999px.
- Shadows:
  - Featured cards ("keyboard key"): `rgba(255,255,255,0.05) 0px 1px 0px 0px inset, rgba(255,255,255,0.25) 0px 0px 0px 1px, rgba(0,0,0,0.2) 0px -1px 0px 0px inset`
  - Download buttons: `rgba(0,0,0,0.03) 0px 7px 3px 0px, rgba(0,0,0,0.25) 0px 4px 4px 0px`
  - Hero: no conventional shadow; multi-layer radial gradients and 37.5px blur filters.

## Layout
- Max width 1200px.

## Components
- **Glass Navigation Bar** — floating pill, backdrop-filter blur(48px), 1px solid #363739, 8px radius, transparent dark fill; logo (red diamond + "Raycast" 13px/500 white) left; links centered 13–14px #9c9c9d; neutral filled button (Mist fill, Iron text) right.
- **Neutral Filled Button (Download CTA)** — #e6e6e6 fill, #454647 text 13–14px/500, 8px radius, 8px 12px padding.
- **Feature Card with Key Shadow** — 16px radius, 24px padding, inset highlight stack; pressed, tactile surface.
- **Inset Input Field** — 8px radius, rgba(255,255,255,0.05) fill, 8px 12px padding, #ffffff text 16px/400.
- **Badge Tag** — Graphite fill, #ffffff text, 6px radius, 0 6px padding.
- **Circular Icon Container** — 99999px radius, 20px padding, subtle dark fill, 24–32px SF Pro glyph.
- **Hero Gradient Banner** — full-bleed red/blue gradient composition; the only rule-break.
- **Footer Meta Strip** — Geist Mono 12px/400 in Ash, separated by vertical pipes.

CSS excerpt returned:
```css
--color-void-black: #040506;
--color-ink: #07080a;
--color-coral-pulse: #ff6363;
--color-mist: #e6e6e6;
--font-inter: 'Inter', system-ui, -apple-system, sans-serif;
--text-heading-lg: 56px; --leading-heading-lg: 1.17; --tracking-heading-lg: 0.22px;
--spacing-8: 8px; --spacing-24: 24px;
--radius-cards: 16px; --radius-buttons: 8px;
--shadow-subtle-3: rgba(255,255,255,0.05) 0px 1px 0px 0px inset, rgba(255,255,255,0.25) 0px 0px 0px 1px, rgba(0,0,0,0.2) 0px -1px 0px 0px inset;
```

## Motion
_not captured_

## Rules (do / don't)
**Do**
- #040506 only for page background.
- #ff6363 only for logo, hero, AI badge, warm-tinted surfaces.
- "Keyboard key" inset shadow stack on all elevated cards/feature blocks.
- Hero headlines 56px/400 Inter with +0.22px tracking — regular weight intentional.
- Mist (#e6e6e6) filled buttons with Iron text for all primary actions.
- 8px radius for buttons/inputs (6px badges); 16–20px cards; 9999px pills; 99999px icons.
- Footer metadata separated by pipes in Geist Mono 12px.

**Don't**
- No chromatic action buttons.
- No drop shadows on cards/panels.
- No negative letter-spacing on large display.
- No light sections or alternating light/dark bands.
- No #ff6363 for body text, links or general icons.
- No multiple accent colors in the same surface.
- No SF Pro Text for body copy.
- Don't break the 8px grid — snap to 8/12/16/24/40.

## Steal this
- "Keyboard key" card shadow: inset top highlight + 1px white ring + inset bottom shade — tactile without drop shadow.
- Neutral light-gray primary button on dark instead of a brand-colored CTA.
- Slightly positive tracking on large regular-weight headings for a calm, tool-like voice.
- Mono footer meta strip with pipe separators.
