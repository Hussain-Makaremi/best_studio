---
name: Notion
source: https://styles.refero.design/style/2bf4c61f-de10-4614-ba1b-20c0453bd2a9
category: productivity
tags: [light, warm-neutral, single-accent, blue-cta, illustration, hairline-borders]
best_for: Warm, friendly SaaS marketing and app pages — paper canvas, one blue CTA, rotating accent feature cards
---
# Notion
> A well-loved paper notebook under afternoon light.

Warm off-white canvas with generous sans typography, sparse color punctuation and hairline borders. Tactile analog feeling over clinical precision, with playful 200ms ease transitions and bouncy character animations.

## Color tokens
| token | hex | role |
|---|---|---|
| Notion Blue | #0075de | Singular chromatic commitment for CTAs and primary actions |
| Paper Warmth | #f6f5f4 | Page canvas (warm off-white signature) |
| Pure White | #ffffff | Card surfaces only |
| Ink Black | #000000 | Primary text, used at alpha 100/95/90/60/40/20% |
| Charcoal | #111111 | Harsh-moment text variant |
| Graphite | #615d59 | Body text with warm brown cast |
| Slate | #696969 | Secondary card content |
| Stone | #757575 | Muted helpers and disabled buttons |
| Marigold | #ffb110 | Warm yellow, hero pills |
| Coral | #f64932 | Warm-to-hot accent |
| Sky Tint | #e6f3fe | Ghost CTA background |
| Saffron | #e89d01 | Secondary warm yellow |
| Vermillion | #e32d14 | Deep coral saturation |
| Mocha | #b18164 | Earthy warm brown |
| Signal Blue | #097fe8 | Secondary blue variety |
| Sky Wash | #62aef0 | Lightest blue for washes |
| Midnight Ink | #02093a | Violet wash and dark cards |

Accent palette (Marigold → Midnight Ink) rotates for card backgrounds.

Surfaces: 0 Page Canvas #f6f5f4 · 1 Card Surface #ffffff · 2 Accent Card (rotated hues) · 3 Dark Card #02093a.

## Typography
- **NotionInter** (primary sans) — geometric humanist, weights 400/500/600/700, 12–96px; aggressive negative tracking at display (-4.6px @ 96px, -2px @ 72px).
- **Lyon Text** (editorial serif) — weight 400, used sparingly at 18px & 32px for editorial voice and pull-quotes.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 12px | 1.33 | — |
| body-sm | 14px | 1.43 | — |
| body | 16px | 1.5 | — |
| subheading | 20px | 1.0 | — |
| heading-sm | 22px | 1.27 | -0.242px |
| heading | 40px | 1.5 | — |
| heading-lg | 48px | 1.5 | — |
| display-sm | 54px | 1.04 | -1.89px |
| display | 72px | 1.21 | -2.016px |
| display-lg | 96px | 1.04 | -4.608px |

## Spacing, radius, elevation
- Base unit 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 64, 80px.
- Section gap 80px · card padding 24px · element gap 8px.
- Radius: small 4px · buttons 8px · cards 12px · pills 9999px.
- Card borders: 1px solid rgba(0,0,0,0.08) hairline; no shadows on content cards.
- Shadows only on nav & product mockups:
  - Nav (sticky): `0px 0.7px 1.462px 0px rgb(0% 0% 0%/0.015), 0px 3px 9px 0px rgb(0% 0% 0%/0.03)`
  - Product UI mockup: `0px 4px 12px rgba(0, 0, 0, 0.1)`

## Layout
- Max-width 1440px.

## Components
- **Primary CTA Button** — #0075de bg, #ffffff text, 14px NotionInter 500, 8px radius, 6px 15px padding.
- **Ghost CTA Button** — #e6f3fe bg, #0075de text, same sizing.
- **Ghost Text Button** — transparent, #000000 at 95% alpha.
- **Outlined Text Button** — transparent, 1px #000000 at 90% alpha border, 4px radius.
- **Muted Nav Link** — transparent, #000000 at 54% alpha, 12px 16px padding.
- **Pill Tag** — colored fill, 9999px radius, 4px 12px padding.
- **White Feature Card** — #ffffff, 12px radius, 24px padding, 1px hairline border, no shadow.
- **Accent Feature Card** — rotated accent bg, 12px radius, 24px padding, no border.
- **Dark Feature Card** — #02093a bg, #ffffff text, 12px radius.
- **Hero Highlight Pill** — accent bg, 9999px radius, 8px 24px padding, inline in copy.
- **Avatar Character Mark** — 40–48px circles with 2px colored border, flat illustration, white fill.
- **Section Header** — 48–54px NotionInter 500–700, #000000, -1.89 to -2.016px tracking.
- **Logo Wall** — desaturated SVGs at #000000 60% alpha, no individual borders.

## Motion
- Hovers/transitions: 200ms ease.
- Character marks & hero elements: spring/bounce only.

## Rules (do / don't)
**Do**
- #f6f5f4 canvas + #ffffff cards — never invert.
- #0075de for a single primary action per screen; secondary uses ghost or text.
- Negative letter-spacing on all display sizes; body stays normal.
- 1px hairlines instead of shadows for cards.
- Paint feature blocks with accent hues rather than borders/shadows; cycle the accent palette.

**Don't**
- No pure white page background.
- No shadows on content cards.
- No multiple chromatic filled buttons.
- No 100% black for all text — build hierarchy via alpha on one color.
- No Lyon Text for UI labels.
- No radius >12px on rectangles.
- No gradients — strictly flat fills.

Imagery: illustration-first, photography-free — flat character marks (round faces in 2px colored circles), decorative squiggles/sparkles/arrows/flowers, product UI mockups. No lifestyle or stock.

## Steal this
- Text hierarchy via alpha steps of a single black (100/95/90/60/40/20%) instead of many grays.
- Warm canvas (#f6f5f4) + white cards: elevation through temperature, not shadow.
- Rotating flat accent backgrounds on feature cards for variety without chaos.
- Inline "highlight pill" behind a word in hero copy.
