---
name: Reworkd
source: https://styles.refero.design/style/95913740-3ff7-45ec-a05b-4acf040850a0
category: ai-startup
tags: [light, lavender-aurora, serif-display, single-accent, blue, product-mockup]
best_for: Data/agent AI tools that lead with a big product mockup and a serif headline on a soft aurora
---
# Reworkd
> Soft daylight over a product interface: lavender-to-white canvas, one electric blue, a high-contrast serif against Swiss sans.

Calm AI-tool aesthetic. The defining move pairs custom display serif Selecta with Suisse Intl for UI — the only decorative gesture on a utilitarian surface. Compact, centered, max-width layout; thin 6px cards on layered soft shadows and 1px hairlines. 95% achromatic + one electric blue family; green only for status; gradients sparing (atmosphere and emphasis).

Collection group: "Put a task in front of the claim."

## Color tokens
| token | value | role |
|---|---|---|
| Iris Blue | radial-gradient(335.69% 99.21% at 57.77% 0px, rgb(0,89,255) 0px, rgba(129,118,255,0.73) 36.5%, rgba(255,225,66,0) 75.65%, rgba(72,132,239,0) 100%) | Brand borders, gradient text, icon strokes, link accents; hero radial glow |
| Cobalt | linear-gradient(rgb(88,151,247) 0px, rgb(56,114,230) 100%) | Primary action button fill, active states — only solid-color button |
| Sky Glow | #3e9ed0 | Secondary blue for illustrations, decorative icon strokes |
| Mint Pulse | #89ecb0 | Green outline accent for tags, dividers, focus; active/success status only |
| Midnight Iris | #2c65d3 | Link border accent, gradient text deep stop |
| Ink | #272c30 | Primary text, dominant border, nav, headings |
| Iron | #526068 | Muted body, secondary button text, supportive labels |
| Graphite | #60737a | Tertiary text, helper copy, table metadata |
| Slate Mist | #7b8e95 | Icon stroke variant, heading accent borders, line work |
| Dove Gray | #a6b4ba | Icon strokes, muted borders, secondary button borders |
| Pale Slate | #e3e8ea | Secondary surface, input bg, hairline variant |
| Lavender Mist | #f0f5fe | Hero gradient origin, soft section backgrounds |
| Pure White | #ffffff | Canvas, cards, button text, inverted surfaces |

Note (as returned): the don'ts reference "exactly two blues (Iris Blue #3161df, Cobalt #3e79ea) plus Sky Glow #3e9ed0" — these hexes differ from the gradient tokens above; recorded verbatim.

Surfaces: 0 Pure Canvas #ffffff · 1 Lavender Wash #f0f5fe · 2 Pale Slate #e3e8ea · 3 Dove Gray #a6b4ba · 4 Graphite Smoke #d4d5d6 (card shadow inner stop, subtle elevated panels).

### Gradient system
- **Display headline fill** — linear top-to-bottom #5897f7 → #3872e6, `background-clip: text`, second line of hero/section headlines only.
- **Hero aurora** — radial at 57% / 0%: rgb(0,89,255) → rgba(129,118,255,0.73) at 36.5% → transparent via warm yellow and cool blue stops, over linear Lavender Mist #f0f5fe → white.
- **Section wash** — linear #f0f5fe → rgb(195,217,250), sparingly.
- Don't stack gradients; no aurora on cards/non-hero sections; palette is closed.

## Typography
- **Selecta** (display serif) — 400, 500; 18–86px (5 values); lh 0.95–1.33; tracking −2.15px (86px) to 0.36px (18px); fallback Fraunces, Tiempos Headline, Playfair Display. Display headlines 40px+ only.
- **Suisse Intl** (UI sans) — 400, 450, 500, 600; 8–16px (7 values); lh 1.00–1.67; tracking 0.05em (8–9px), 0.04em (10px), 0.02em (12–14px), 0.01em (16px); fallback Inter, Söhne, General Sans. 450 is the signature body weight; 500 emphasis/nav.
- **Geist Mono** — 400, 450, 500, 600; 8–16px (5 values); lh 1.20–1.67; tracking 0.15em (eyebrows), 0.02em (code blocks), 0.01em (inline); fallback JetBrains Mono, IBM Plex Mono. Code, tab labels, file paths, technical micro-copy.
- **Geist Sans** (secondary) — 400–700; 8–12px (3 values); lh 1.45–2.18; tracking 0.01–0.02em; fallback Inter, system-ui.

| role | size | lh | tracking | token |
|---|---|---|---|---|
| caption | 10px | 1.5 | 0.4px | --text-caption |
| body | 14px | 1.43 | 0.14px | --text-body |
| heading-sm | 18px | 1.33 | 0.36px | --text-heading-sm |
| heading | 40px | 1.1 | −0.6px | --text-heading |
| heading-lg | 56px | 1.0 | −1.12px | --text-heading-lg |
| display | 80px | 0.95 | −2px | --text-display |

## Spacing, radius, elevation
- Base 4px; density compact. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 104, 136px.
- Radius: nav, cards, inputs, buttons 6px · pills, tags, circular icons 9999px. Never intermediate (8, 10, 12px).

Shadows:
- Product mockup / hero screenshot: `rgba(63,70,75,0.1) 0 21px 44px -32px, rgba(39,44,48,0.2) 0 26px 30px -23px, rgba(39,44,48,0.05) 0 14px 40px 0, rgba(39,44,48,0.08) 0 0 0 1px, rgba(39,44,48,0.12) 0 4px 8px 0`
- Static feature / elevated card: `rgba(39,44,48,0.1) 0 0 0 1px`
- Button: `rgba(255,255,255,0.25) 0 1px 0 0 inset, rgba(26,41,61,0.15) 0 1px 3px 0, rgba(26,41,61,0.11) 0 7px 11px -5px, rgba(26,41,61,0.08) 0 0 0 1px`
- Icon halo: `rgb(255,255,255) 0 0 0 2px, rgba(39,44,48,0.13) 0 1px 2px 2px`
- Additional named (values not returned): --shadow-subtle, -subtle-2, -xl, -subtle-3, -subtle-4, -xl-2, -sm, -subtle-5, -md, -subtle-6, -subtle-7, -subtle-8, -xl-3.

## Layout
- Max width 1200px; section gap 64px; card padding 12px; element gap 12px.
- Centered, contained; hero = centered text above wide product mockup card.
- Nav: logo left, 4–5 ghost items centered/right, outlined Sign Up far right.
- Sections alternate centered text blocks and full-bleed dividers; 3-column grids at desktop → 1 column mobile; compact cards, 64px+ between sections.
- Imagery: data-extraction dashboard mockup (browser chrome, tabs, filterable table, status badges) as hero; 40–48px circular team headshots; no lifestyle, illustration or 3D; partner logos Ink at 60%.

## Components
- **Primary CTA** — Cobalt fill, white Suisse Intl 14px/500, 6px, 8px × 14–16px, inset highlight + soft drop stack. Once per viewport.
- **Secondary outline** — white/transparent, 1px Ink or Dove Gray, Ink text, 6px; Pale Slate wash on hover.
- **Ghost nav button** — no bg/border, Ink 14px/450, 6px hover, 8px × 12px.
- **Pill badge** — 9999px, 2–3px × 8–10px; Mint Pulse + Ink (status) or Pale Slate + Graphite (neutral); 10–11px/500, 0.04em.
- **Product mockup card** — white, 6px, layered shadow; browser-chrome header Pale Slate with 3 Dove Gray dots and tab bar (white pills, 1px Dove Gray); Geist Mono 9–10px/500 0.02em tabs.
- **Elevated/feature card** — white, 6px, 12px padding, 1px Pale Slate hairline; hover = mockup shadow at reduced opacity.
- **Browser tab bar** — as in mockup card.
- **Data table row** — white, 1px Pale Slate bottom, 12px × 16px; Geist Mono 12px IDs, Suisse Intl 12px descriptions; active row Mint Pulse at 10%.
- **Logo strip card** — white, 1px Pale Slate, 6px, 32–48px vertical padding, logos Ink 60%, vertical 1px Pale Slate dividers.
- **Team member card** — no bg, centered, 40–48px avatar, name 14px/500 Ink, role Graphite 12px, 12px gap.
- **Search input** — white, 1px Dove Gray, 6px, 8px × 12px, leading magnifier Dove Gray, placeholder Graphite 12px.
- **Filter select** — white, 1px Dove Gray, 6px, Ink label/value, Dove Gray chevron; active 1px Iris Blue.
- **Sunset (deprecation) banner** — full-width Ink, 8–10px vertical, white 12px/450 centered lh 1.5, underlined Cobalt email link.
- **Section eyebrow** — Geist Mono 10–12px/500, 0.15em, Graphite, trailing dot or bracket, above serif headline.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Selecta only for display 40px+.
- 6px on all rectangles; 9999px only pills/tags/circular icons.
- Blue gradient on the second line of hero headlines only; first line solid Ink.
- Layered mockup shadow only on hero mockups and hover.
- Static feature cards: 1px Pale Slate, no shadow.
- Hero on radial aurora over Lavender → white; never flat white.
- Mint Pulse only for active/success.
- Negative tracking on Selecta >40px (to −0.025em); positive (0.01–0.05em) on Suisse Intl.

**Don't**
- No Cobalt on non-action elements.
- No serif body; Selecta forbidden below 18px.
- No intermediate radii.
- No decorative green.
- No blue gradient on body, buttons, subheads.
- No dark cards/sections; Ink for text/borders only.
- No additional blues/violets.

Similar: Linear, Perplexity, Vercel, Anthropic, Raycast.

## Steal this
- Serif display vs. positively-tracked Swiss sans: one decorative gesture on a utilitarian UI.
- Two-line hero where only line two gets the gradient text fill.
- Five-layer realistic shadow reserved for the hero product mockup; everything else is a 1px ring.
- Browser-chrome mockup with mono tab labels as the primary visual.
