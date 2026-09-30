---
name: Dylanbrouwer
source: https://styles.refero.design/style/b1e82907-d1cf-46cd-8ae7-3561c5b15fd0
category: agency
tags: [dark-to-light, brutalist, condensed-display, mono-labels, single-accent, gradient-type]
best_for: Brutalist designer portfolios with monument-scale condensed type, dark hero dropping into light content
---
# Dylanbrouwer
> Brutalist type foundry at dusk.

A brutalist designer portfolio treating the page as a typographic monument: dark hero with massive condensed display letters fading black-to-light, dropping into clean monochrome content sections. Secondary elements stripped bare. Single chromatic accent: vivid ember orange for status dots, accent fills and live signals only. Tight, grid-ruthless spacing; hairline borders; mostly sharp corners (pills reserved for interactive elements); expressive motion with weighted custom easings.

## Color tokens
| token | hex | role |
|---|---|---|
| Ember Orange | #ff6436 | Status indicators, accent dots, live signals, decorative fills — sole chromatic note |
| Onyx | #161616 | Dark hero background, deep badges, dark surfaces |
| Graphite | #3c3a3e | Primary text, nav links, body copy, filled button text |
| Stone | #7b7a7c | Secondary text, heading subtitles, supporting copy |
| Ash | #a2a2a2 | Muted helper text, inactive nav, subtle metadata |
| Silver Mist | #c9c7cc | Hairline dividers, grid lines, light borders, low-emphasis text |
| Fog | #f1f1f1 | Light body backgrounds, section washes, nav inactive bg |
| Paper | #f8f8f8 | Page canvas |
| Pure White | #ffffff | Card surfaces, elevated panels, tag/card borders |
| Display Fade Gradient | linear-gradient(rgb(0,0,0), rgb(110,108,112) 25%, rgb(185,183,187) 50%, rgb(220,214,214) 75%, rgb(241,241,241)) | Gradient fill on massive display type |
| Horizon Gradient | linear-gradient(90deg, rgb(123,122,124), rgb(60,58,62)) | Section transitions and hero vignette |

Surfaces: 0 Page Canvas #f8f8f8 · 1 Card Surface #ffffff · 2 Section Wash #f1f1f1 · 3 Accent Surface #ff6436 (highlighted callouts, status) · 4 Dark Hero #161616.

## Typography
- **Die Grotesk B** (primary) — weight 500; 12–60px (7 values); lh 1.0–1.3; tracking -0.01em to -0.03em. Fallback: Inter, Söhne, General Sans. Body, mid headings, labels, captions, links. Uniform 500 — hierarchy from size and color only.
- **ABC Gravity Variable** (display) — weights 400–500; 12–288px (5 values); lh 0.74; tracking -0.005em to -0.02em. Fallback: Bebas Neue, Anton, Oswald. Monument-scale super-condensed; letters nearly touch forming a wall of type.
- **IBM Plex Mono** (code/technical) — weights 500–600; 12, 14px; lh 1.0–1.3; tracking -0.01em to -0.02em. Fallback: JetBrains Mono, Space Mono, Geist Mono. Metadata, timestamps, nav labels, status — always uppercase, always small.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| micro | 12px | 500/600 | 1.3 | -0.01px |
| caption | 14px | 500/600 | 1 | -0.01px |
| body-sm | 17px | 500 | 1.3 | -0.01px |
| body | 21px | 500 | 1.1 | -0.02px |
| subheading | 23px | 400–500 | 1 | -0.005px |
| heading-sm | 36px | 500 | 1 | -0.03px |
| heading | 60px | 500 | 1 | -0.03px |
| heading-lg | 96px | 400–500 | 0.74 | -0.01px |
| heading-xl | 274px | 400 | 0.74 | -0.02px |
| display | 288px | 400 | 0.74 | -0.01px |

## Spacing, radius, elevation
- Base unit 6px; density compact.
- Spacing: 6, 12, 18, 24, 48, 60, 72, 96, 120px (`--spacing-*`).
- Section gap 48–80px · card padding 12–24px · element gap 6–12px.
- Radius: nav 9999px · cards 0px · badges 9999px · inputs 0px · panels 14.4px · buttons 9999px.
- Borders: hairline 1px Silver Mist (#c9c7cc) or rgba(60,58,62,0.15); grid lines and dividers only.
- Elevation: no shadows. Depth via background contrast (dark hero vs light sections), hairlines and backdrop blur (5px on overlapping elements).

## Layout
- Page max-width 1200px.
- Dark-to-light rhythm: full-bleed dark hero (#161616) with centered monument-scale type filling 80% viewport width and a 3D monitor mockup center-stage; then content on Paper (#f8f8f8) at max-width 1200px, 48–80px section gaps.
- Hairline grid lines in Silver Mist mid-page. Collaborators section: horizontal white card strip with skewed dividers.
- Section openers: ghosted white-on-light-gray 96px+ display watermarks.
- Nav: top bar of pill buttons prefixed with '+' or '•', floating on the dark hero (no bar background).

## Components
- **Pill Nav Button** — transparent, 1px border #3c3a3e at 15% alpha, 9999px radius, 7px 12px padding, IBM Plex Mono 14px 500 uppercase #3c3a3e; optional 12px '+'/'•' prefix; 6px column-gap.
- **Ghost Text Link** — no bg/border, 0px radius, Die Grotesk B 17–21px 500 #3c3a3e; may underline 1px on hover.
- **Project Card** — transparent, 0px radius, no shadow, 12px horizontal padding; media with text overlay; 12px grid gaps; image IS the card.
- **Brand Logo Card** — rgba(255,255,255,0.5), 0px radius, 12px top/side + 18px bottom padding, no shadow; monochrome gray logos; skewed dividers.
- **Pill Tag Badge** — Onyx #161616 bg, #f1f1f1 text, 0px radius (rectangular), 0px 6px padding, 6px row-gap; IBM Plex Mono 12–14px 500–600 uppercase.
- **Ghost Glass Tag** — rgba(255,255,255,0.05) bg, rgba(255,255,255,0.7) text, 0px radius, 0px 6px padding, 1px border #ffffff26; IBM Plex Mono 12–14px uppercase.
- **Ember Status Dot** — 50% radius, #ff6436, ~8–12px, Graphite text alongside.
- **Gradient Display Headline** — ABC Gravity Variable 274–288px 400 uppercase, lh 0.74, -0.01 to -0.02em; Display Fade gradient fill; on #161616.
- **Light Content Section** — #f8f8f8 or #f1f1f1, max-width 1200px; headings Die Grotesk B 60px or ghosted ABC Gravity 96px+ in white; 48–80px gaps; Silver Mist hairlines.
- **Hairline Divider** — 1px solid #c9c7cc or rgba(60,58,62,0.15).
- **Monitor Mockup Frame** — thin-bezel display on stand with 3D scene/project preview; slight perspective; hero anchor.
- **Ghosted Section Title** — ABC Gravity Variable 96px+ 400 uppercase #ffffff on #f1f1f1; nearly vanishes — typographic watermark.

## Motion
- Entrance: cubic-bezier(0.32, 0.72, 0, 1) — fast start, gentle settle.
- Exit/Morph: cubic-bezier(0.19, 1, 0.22, 1).
- Durations: micro 0.3s · component 0.5s · page reveals 0.6–0.75s.
- Animate transform, opacity, color only; never width/height/layout. Dark hero elements stagger in with translate-y + opacity.
- Gradients: Display Fade applied as background-clip: text on ABC Gravity display only; Horizon gradient for transitions/dividers. Never on backgrounds, buttons or body text.

## Rules (do / don't)
**Do**
- Die Grotesk B at 500 for all body and mid headings.
- ABC Gravity Variable only for 96px+ display — never below 23px.
- Black-to-light gradient only on display ABC Gravity text.
- Ember Orange only as small functional element (dots, accent fills, live indicators).
- 9999px radius for interactive elements only; 0px for cards/panels.
- IBM Plex Mono always uppercase.
- -0.03em tracking on Die Grotesk B headings 36px+.

**Don't**
- No multiple chromatic colors.
- No shadows/elevation on cards.
- No radius on cards or content panels.
- No mixing weights within Die Grotesk B.
- No ABC Gravity for body/small text.
- No center-aligned body or mid headings (center only for display statements).
- No bouncy/spring easings.

Similar: Locomotive, Rauno Freiberg, Resn, Active Theory.

## Steal this
- Gradient-clipped display type (black → light) so giant letters "emerge from shadow".
- Ghosted white-on-#f1f1f1 section titles as quiet typographic watermarks.
- Three-voice type system: condensed display / single-weight grotesk / uppercase mono data layer.
- Dark hero → light content rhythm as a narrative page transition.
