---
name: Officevibe
source: https://styles.refero.design/style/ced1c98f-d489-48f7-a01f-1fa59a07b706
category: clean-saas
tags: [light, warm-cream, serif-italic-display, two-blue, pill-buttons]
best_for: HR / people / culture SaaS wanting an editorial, humane, essay-like tone
---
# Officevibe
> Editorial journal on warm cream — a thoughtful HR essay rendered as a product; serif italics whispering through a modern blue interface.

## Color tokens
| token | hex | role |
|---|---|---|
| Ink Navy | #0c1754 | Display headings, dark feature cards, footer |
| Electric Cobalt | #2545ff | Action buttons, active links, single important icon per view |
| Charcoal | #171417 | Primary body/heading text, nav, icon strokes on light |
| Warm Canvas | #f9f8f6 | Page background, footer surface, soft card fills, inputs |
| Paper White | #ffffff | Elevated cards, button text, nav, inputs, icon fills on dark |
| Cream Border | #f0e9e1 | Hairline dividers, card borders, section separators |
| Graphite | #222222 | Secondary text, ghost button text, inactive nav |
| Stone | #969696 | Muted helper, placeholders, tertiary metadata |
| Smoke | #cccccc | Input borders, disabled, neutral dividers |
| Lavender Mist | #eaebf8 | Badge backgrounds, soft highlights on white |

## Typography
- **Martinaplantijn** (display serif, 40–64px) — weight 400; italic cuts carry the brand voice. Fallback: GT Super Display.
- **Abcfavoritvariable** (geometric sans, 16–40px) — weights 400/500; tight tracking at large sizes (-0.05em) is the signature. Fallback: ABC Diatype.
- **Inter** (workhorse, 12–20px) — body, buttons, nav, forms, captions; weights 400/500/700; line-height 1.20–1.60.
- OpenType features (all fonts): ss01, ss04.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.4 | 0 |
| body-sm | 14px | 400 | 1.6 | 0 |
| body | 16px | 400 | 1.6 | 0 |
| subheading | 20px | 400 | 1.4 | 0 |
| heading-sm | 24px | 400 | 1.4 | -0.48px |
| heading | 32px | 400 | 1.4 | -0.64px |
| heading-lg | 40px | 400 | 1.2 | -0.8px |
| display | 48px | 400 | 1.1 | -2.4px |
| display-lg | 64px | 400 | 1.0 | -3.2px |

## Spacing, radius, elevation
- Base 8px; density comfortable. Scale: 8, 16, 24, 32, 40, 48, 56, 64, 80, 128px.
- Radius: cards 16px, badges 16px, inputs 16px, images 24px, buttons (pill) 100px.
- Shadows:
  - Product Dashboard Card: 0 4px 24px rgba(12,23,84,0.08)
  - Chat Widget: 0 8px 32px rgba(12,23,84,0.12)
  - Filled Pill Button: none (color carries weight)

## Layout
- Max-width 1200px; section gap 80px; card padding 32px; element gap 24px.
- Hero: 2-column split (left: eyebrow + display headline with italic + body + CTA; right: product mockup).
- Steps: centered headline over 3-column card grid with numbered badges and hand-drawn arrows.
- FAQ: sticky left headline, right accordion rows.
- ~80px vertical rhythm, seamless flow, no hard dividers. Chat widget fixed bottom-center on all screens.

## Components
- **Filled Pill Button:** 100px radius, #2545ff bg, #ffffff text, Inter 16px/500, padding 12px 24px, no shadow.
- **Dark Feature Card:** #0c1754 bg, 16px radius, 24–32px padding, white text, numbered badge in #2545ff.
- **Light Feature Card:** #ffffff, 1px cream border, 16px radius, 32px padding.
- **Bordered Accent Card:** #ffffff, 1.5px #2545ff border, 16px radius, 32px padding.
- **Chat Widget:** 360px wide, #ffffff, 16px radius, 1px Smoke border, fixed bottom-center. Header: 32px cobalt avatar + Inter 14px question + three pill suggestion chips.
- **Product Dashboard Card:** #ffffff, 16px radius, 32px padding; circular gauge (cobalt score + navy arc) and purple-to-coral gradient area chart with navy trend line.
- **FAQ Accordion:** #ffffff, 1px cream bottom border only, 24px vertical padding; question Inter 16px/500 Charcoal; chevron Graphite; body Inter 16px/400, 1.6.
- **Top Navigation:** #f9f8f6 bg; wordmark Inter 18px/700; links Inter 14px/500 Graphite; 64–72px height; no separator.
- **Metric Pill Badge:** #eaebf8 bg, #0c1754 text, Inter 12px/500, 16px radius, 4px 10px padding.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Italicize one phrase inside the 48–64px Martinaplantijn headline — brand voice, not decoration.
- Electric Cobalt only for filled buttons, active links, one important icon per view.
- Ink Navy + Paper White for dark feature cards and footer; never gray.
- 100px pill radius for all clickables.
- 16px radius for cards/images/chat; 24px only for large hero illustrations.
- Canvas #f9f8f6 and cream borders #f0e9e1 — no cool grays.
- -0.05em tracking on Abcfavoritvariable at 40px+.

Don't:
- Display headline in Inter or Abcfavoritvariable.
- Cobalt for body text, borders, or large fills.
- Gray borders — always cream #f0e9e1.
- Box-shadow on filled buttons.
- A third heading color beyond Charcoal, Paper White, Ink Navy.
- Center-aligned body copy or body line-height below 1.5.
- Square or 4px radius on cards/inputs.

## Steal this
- One italicized phrase inside a serif display headline as the emotional hook.
- Two-blue system: deep navy for weight/surfaces, electric blue strictly for action.
- Warm cream borders (#f0e9e1) instead of gray hairlines to keep the whole page warm.
- Navy-tinted shadows (rgba(12,23,84,…)) that match the brand ink.
