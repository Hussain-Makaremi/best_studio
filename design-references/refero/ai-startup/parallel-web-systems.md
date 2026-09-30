---
name: Parallel Web Systems
source: https://styles.refero.design/style/32845f27-6b24-48be-af25-8e664f826b30
category: ai-startup
tags: [light, cream-paper, serif-plus-mono, 2px-radius, data-as-graphic, uppercase-mono-ui, two-accent]
best_for: AI web-infrastructure / API brand with an engineering-journal look: serif reading text, mono UI chrome, data-stream imagery
---
# Parallel Web Systems
> "Engineering journal at dawn — a technical reading room where data streams replace photography and the type does the talking." Cream Paper canvas, serif reads / mono acts, 2px radii, Schematic Blue and Signal Orange as the only chroma.

## Color tokens
| token | hex | role |
|---|---|---|
| Schematic Blue | #0d6ea5 | Hero data-visualization panels, inline emphasis phrases, link/heading accents |
| Signal Orange | #fb631b | Orange supporting accent for decorative details and low-frequency emphasis; LOG IN button fill |
| Ink Black | #181818 | Primary text, dark filled buttons (CONTACT), the HUMAN/MACHINE pill toggle |
| Graphite | #434343 | Secondary nav and button text, footer secondary links |
| Slate | #858483 | Supporting neutral for secondary UI, dividers, muted labels |
| Ash Gray | #666666 | Body muted text, captions |
| Hairline | #e5e5e5 | All borders, dividers, and 0.5px inset shadows |
| Cream Paper | #f5f4f1 | Page canvas and card surfaces; warm off-white, never pure white |
| Pure White | #ffffff | Elevated card surface, button text on dark fills |
| Fog | #eeeeee | Secondary surface, subtle background bands, disabled-state wash |
| Mortar | #dedede | Inactive chips, tag backgrounds, low-emphasis surface fills |
| Concrete | #cbcbcb | Inert dividers in nested layouts, scroll-track backgrounds |

Surfaces: 0 Cream Paper #f5f4f1 → 1 Pure White #ffffff (elevated cards) → 2 Fog #eeeeee → 3 Schematic Blue #0d6ea5 (full-bleed hero data panel) → 4 Ink Black #181818 (dark buttons, dithered footer, toggles).

## Typography
- **gerstnerProgramm** (display/body) — weights 400, 500. Fallback: Source Serif 4, Tiempos Text, IBM Plex Serif. All reading content: body, subheadings, section headings.
- **ftSystemMono** (UI) — weights 400, 500. Fallback: IBM Plex Mono, JetBrains Mono, Berkeley Mono. All UI chrome: nav links, button labels, pill toggles, tags.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 10px | 400 | 1.5 | 0.015em |
| 13px | 13px | 400 | 1.23 | 0.01em |
| 14px | 14px | 400 | 1.5 | — |
| 16px | 16px | 400 | 1.5 | — |
| heading-sm | 26px | 500 | 1.23 | 0.012em |
| heading | 36px | 500 | 1.11 | 0.012em |
| 11px (micro) | 11px | 400 | 0.73 | 0.012em |
| 12px | 12px | 400 | 1.5 | — |

## Spacing, radius, elevation
- Base unit 8px; density compact.
- Spacing: 8, 16, 24, 48, 80, 160px.
- Radius: all structural elements 2px (tags, cards, pills, images, inputs, buttons); exception 8px for inline callout pills on the blue hero.
- Shadows:
  - subtle: rgb(229,229,229) 0 0 0 0.5px
  - subtle-2: rgb(229,229,229) 0 0.5px 0 0
  - sm: rgba(0,0,0,0.02) 0 13px 8px 0, rgba(0,0,0,0.03) 0 6px 6px 0, rgba(0,0,0,0.04) 0 1px 3px 0

## Layout
- Max-width 1200px; section gap 80px; card padding 24px (Do's also cite 48px); element gap 8px.
- Hero Data Panel: full-bleed Schematic Blue, full viewport width, 400–500px tall; monospaced data text (ftSystemMono 10–11px, white reduced opacity) in vertical columns; centered white pill; dark HUMAN/MACHINE toggle below.
- Feature cards: 4-column grid, 48px column gap.
- Dithered Dark Footer Band: full-bleed Ink Black, ~200–300px tall, dithered/noise texture in Slate/Graphite pixels; centered HUMAN/MACHINE toggle.
- Sections separated by 80px gaps; 1px Hairline borders or 48–80px whitespace are the only dividers.

## Components
- **Top Navigation Bar:** Cream Paper bg; wordmark 14px gerstnerProgramm 500 Ink Black left; centered nav 11px ftSystemMono 500 Slate, 0.015em; dark CONTACT button (Ink Black bg, Cream Paper text, 8px/16px, 2px radius); orange LOG IN button (Signal Orange bg, white text, 8px/16px, 2px radius).
- **Dark Filled Button:** #181818, Cream Paper text, 2px radius, 8px/16px padding, 11px ftSystemMono 500 uppercase, 0.015em.
- **Orange Filled Button:** #fb631b, white text, 2px radius, 8px/16px padding, 11px ftSystemMono 500 uppercase; only ever one orange button per page cluster.
- **Ghost / Outlined Button:** transparent, 1px Hairline border, 2px radius, 11px ftSystemMono 500 Ink Black uppercase, 8px/16px padding, 0.015em.
- **Hero Data Panel:** see Layout.
- **Human/Machine Pill Toggle:** Ink Black fill, 2px radius; segments 'HUMAN' and 'MACHINE' 11px ftSystemMono 500 uppercase Cream Paper, 12–16px internal padding; 28–32px tall.
- **Feature Card (Flat):** no bg fill, 1px Hairline top border only; title 14px ftSystemMono 500 Ink Black uppercase 0.012em; body 13–14px gerstnerProgramm 400 Slate 1.5; 4-column grid, 48px column gap.
- **Section Headline + Subhead Stack:** primary 36px gerstnerProgramm 500 Ink Black, 1.11, 0.012em; subhead 26px gerstnerProgramm 400 Ink Black, 1.23 (sometimes with one orange emphasis phrase).
- **Customer Logo Row:** single horizontal row on cream, no bg/border, ~80–120px spacing; label above 13px gerstnerProgramm 500 Slate + 'Case Study →' link; logos keep their brand color.
- **Pricing Tier Card:** Cream Paper bg, 1px Hairline border, 2px radius, 24px padding; tier name 11px ftSystemMono 500 uppercase Slate; price 36px gerstnerProgramm 500 Ink Black; features 14px 400 Ink Black, 8px row gap; dark or orange CTA.
- **Inset Annotation Tag:** transparent or Fog bg, 1px Hairline border, 2px radius, 2px/8px padding, 10–11px ftSystemMono 500 uppercase Ink Black.
- **Footer Link Column:** header 11px ftSystemMono 500 uppercase Ink Black 0.012em; links 13px gerstnerProgramm 400 Ink Black, 1.5, 4–8px row gap; 48px between columns.
- **Dithered Dark Footer Band:** see Layout.
- **System Status Pill:** no bg, inline; small green dot (3–4px) + 11px ftSystemMono 500 uppercase Ink Black.

## Motion
_not captured_

## Rules (do / don't)
Do:
- gerstnerProgramm for all reading text; weight 400 body, 500 headlines and first 2–3 emphasis words.
- ftSystemMono for all UI chrome; always uppercase, always 0.012–0.015em tracking.
- 2px radius on every rectangular element; 8px only for inline callout pills on blue hero.
- Build on Cream Paper #f5f4f1; #ffffff only to lift elevated cards or for button text; never as page background.
- Signal Orange for exactly one thing per cluster: one filled button OR one inline emphasis phrase, never both in one view.
- Sections 80px apart, 48px card padding; 1px Hairline borders or whitespace as the only dividers.
- Mirror the hero's data-stream language in the dark footer using dithered texture.

Don't:
- No third accent color, gradient, or saturated mid-tone (grayscale plus Schematic Blue and Signal Orange only).
- No box-shadows beyond the recorded patterns.
- No corners beyond 2px on structural elements; capsule shapes (9999px) are foreign.
- Don't set body text in ftSystemMono or UI labels in gerstnerProgramm ("serif reads, mono acts").
- No #ffffff as page canvas or card surface on Cream Paper.
- No orange on disabled states, helper text, or metadata.
- No photographic or illustrated imagery.

## Steal this
- Inverted SaaS convention: serif for prose, uppercase mono for every control.
- Data-as-graphic imagery: a full-bleed blue panel of monospaced text columns and a dithered black footer.
- HUMAN / MACHINE pill toggle as a product-metaphor switch.
- 2px radii and 0.5px hairline shadows for a printed-paper feel.
