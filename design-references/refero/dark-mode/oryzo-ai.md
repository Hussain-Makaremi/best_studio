---
name: ORYZO AI
source: https://styles.refero.design/style/1f204e95-454a-437e-845b-c1b169d35607
category: dark-mode
tags: [dark, warm-dark, uppercase, editorial, product-showcase, dashed-dividers]
best_for: Single-product showcase / craft brand launch where one object is the hero on a warm dark canvas
---
# ORYZO AI
> Darkroom product editorial — a lone object floating in warm darkness, cream typography the only decoration.

Products as museum artifacts on full-bleed warm-dark canvases. Uppercase weight 500 dominates; 29px/400 mixed-case body is the only conversational voice. One vivid orange appears only for credits — never CTAs. Alternates photographic heroes and void-mode reveals, joined by hairline dashed dividers and pill controls.

## Color tokens
| token | hex | role |
|---|---|---|
| Warm Cream | #ffedd7 | Light text on dark, inverse labels, high-contrast captions |
| Walnut Shadow | #100904 | Page canvas — warm near-black void |
| Bark Brown | #382416 | Elevated surface, filled button background |
| Cork Border | #40372e | Hairline dividers, dashed separators, subtle borders |
| Driftwood | #6c5f51 | Secondary dividers, muted structural elements |
| Ember Accent | #dc5000 | Orange text for credits, tags, emphasized phrases only |
| Pure Black | #000000 | SVG fills / decorative vectors only |

## Typography
- **Halyard Display Variable** (the only typeface): 400, 500; 8–51px; lh 0.90–1.26; fallback Inter or Söhne.
- **Arial** (system fallback): 400, 500; 8px only; lh 1.20 — micro-legal disclaimers.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 51px | 500 | 0.9 | normal |
| heading | 41px | 500 | 0.9 | normal |
| body | 29px | 400 | 1.26 | normal |
| heading-sm | 24px | 500 | 1.09 | normal |
| subheading | 18px | 500 | 1 | normal |
| caption | 8px | 400/500 | 1.20 | normal |

Rules: no negative tracking even at display. Two voices — UPPERCASE 500 (nav, headings, labels, links, buttons, legal; "declarative, museum-label") and mixed-case 400 at 29px for descriptive body only. Line-height 0.9 at 41–51px creates a "sculptural block effect."

## Spacing, radius, elevation
- Spacing: 6, 8, 9, 10, 12, 14, 18, 24, 31, 41, 45, 68, 204px. Card padding 24px; element gap 18px; section gap 100vh.
- Radius: cards 12px, filled pill button 36px, outlined button 22.5px, inputs 0px, full-round 9999px.
- Dividers: 1px dashed #40372e; no solid dividers; nothing thicker than 2px.
- No shadows. Two-step surface stack #100904 → #382416. Levels: 0 Walnut Shadow, 1 Bark Brown, 2 Cork Border, 3 Warm Cream (foreground).

```css
--color-warm-cream:#ffedd7; --color-walnut-shadow:#100904; --color-bark-brown:#382416;
--color-cork-border:#40372e; --color-driftwood:#6c5f51; --color-ember-accent:#dc5000; --color-pure-black:#000000;
--font-halyard:'halyard-display-variable', ui-sans-serif, system-ui;
--text-display:51px; --leading-display:0.9; --text-heading:41px; --leading-heading:0.9;
--text-body:29px; --leading-body:1.26; --text-heading-sm:24px; --leading-heading-sm:1.09;
--text-subheading:18px; --leading-subheading:1;
--radius-cards:12px; --radius-buttons-pill:36px; --radius-buttons-outlined:22.5px; --radius-inputs:0px;
```

## Layout
Full-bleed, no max-width container; every section 100vw and 100vh. Hero: full-viewport top-down photo, massive wordmark upper-left. Later sections: Walnut canvas with centered 3D render (middle 40% width) flanked by left heading and right body (three-column grid, 18px gutters). Seamless dark-on-dark transitions; only dashed dividers break them. Fixed transparent nav, max 4 items. No sidebar, no footer chrome.

## Components
- **Pill button (filled):** radius 36px, bg #382416, text #ffedd7, padding 14px 24px, 500 uppercase, 8–14px. The only filled action surface.
- **Outlined ghost button:** radius 22.5px, transparent, 1px #ffedd7 border, cream text, padding 7.5px 0, 500 uppercase, 8–14px.
- **Underline text link:** 0 radius, cream, 500 uppercase 12–14px; the default interaction.
- **Input:** 0 radius, transparent, 1px cream bottom border only, padding 1px 2px.
- **Fixed top nav:** "ORYZO" left 12–14px/500 uppercase; right items INTRO, FEATURES, PRODUCT, CONTACT 12px/500 uppercase; active has 1px dashed underline; transparent over hero.
- **Hero:** full-viewport top-down photo, wordmark 51px+ upper-left 24px margin, 12px/500 tagline above; rotated vertical label "ORYZO 1-MODEL" right edge (10–12px); semi-transparent info card lower-left; video thumbnail lower-right.
- **Product reveal:** 100vh #100904; centered 3D render; left heading 41px/500 uppercase lh 0.9; right body 29px/400 mixed case; 18px gutters.
- **Section divider:** 1px dashed Cork Border or Driftwood, structural only.
- **Logo wordmark:** "ORYZO" Halyard 500 uppercase; nav (12–14px) and hero (51px+) sizes; no icon.

## Motion
_not captured_ (renders "rotating top-down to 3/4 angle across sections").

## Rules (do / don't)
Do:
- All UI text #ffedd7, never pure white
- #dc5000 only for credits, "Built by" labels, studio links
- Uppercase 500 everywhere except 29px body 400 mixed case
- 36px filled CTA, 22.5px outlined, 12px cards, 0px inputs/links
- 100vh section gaps
- 1px dashed #40372e dividers only
- Center 3D renders with symmetric text flanks at 18px gutters

Don't:
- Pure white text or pure black backgrounds
- Ember on buttons/CTAs/interactive surfaces
- Lowercase/sentence case for headings, nav, labels
- Drop shadows
- Container radius below 12px
- More than one filled button per section
- Center-aligned body copy

Imagery: editorial top-down in-context photography (cork coaster on green cutting mat with pencils, craft knife, paperclip); 3D renders on Walnut lit upper-right with warm rim light; no people/lifestyle/stock; full-bleed, sharp-edged, high-contrast warm grading.
Best-fit: product showcase sites, design studio portfolios, editorial launches, craft/artisanal brands, museum-like single-object stories.

## Steal this
- Warm dark (#100904 / cream #ffedd7) instead of neutral black/white — instantly more tactile.
- Line-height 0.9 uppercase display for sculptural type blocks.
- Accent color reserved for credits/editorial, never CTAs — rarity as signal.
- Dashed 1px dividers as the only structural ornament.
