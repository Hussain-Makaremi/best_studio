---
name: DICE
source: https://styles.refero.design/style/f4af4c42-2cba-4aa6-8d06-2f728bce702d
category: editorial
tags: [light, monochrome, gig-flyer, condensed-display, wide-tracked-caps, pill-buttons, flat, mascot-illustration]
best_for: Event / ticketing / music brands wanting a punk-zine monochrome look with huge stacked condensed headlines and wide-tracked UI text
---
# DICE
> "Monochrome gig flyer — black ink on white paper, headlines screaming, everything else dead quiet." Foggy condensed display at 106px/0.83, Favorit at 0.06em everywhere, 40px pill buttons, full-bleed black bands, zero shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Pitch Black | #000000 | Primary text, filled pill buttons, full-bleed dark section backgrounds, icon strokes, hairline borders |
| Paper White | #ffffff | Page canvas, card surfaces, text on dark sections, button text on filled black buttons, search field fill |
| Ash Gray | #eeeeee | Soft image backgrounds, secondary surface tint, subtle card/poster fill behind event artwork |
| Concrete | #d9d9d9 | Hairline dividers, muted borders, input field outlines |
| Charcoal | #333333 | Secondary button fills, elevated dark surfaces, muted-on-dark text in nested components |
| Slate | #595959 | Muted body text, secondary navigation labels, supporting metadata |
| Stone | #808080 | Tertiary body text, disabled states, low-priority metadata |

Surfaces: 0 Paper White #ffffff (canvas, cards, nav) → 1 Ash Gray #eeeeee (soft fill behind posters) → 2 Charcoal #333333 (secondary button fills, elevated dark) → 3 Pitch Black #000000 (full-bleed dark bands, primary filled buttons). Neon-green confirmation screen (#7ffeb1-ish) is the only chromatic color, confined to success states.

## Typography
- **Favorit** (`--font-favorit`) — weights 350, 400, 700; sizes 12, 14, 16, 18, 24, 28px; line-height 1.15–1.50; tracking 0.06em universal (about 0.72px at 12px, 1.68px at 28px); OpenType ss02, ss03, ss05, ss06, ss08 always on. Fallbacks: Inter, Söhne, or Neue Haas Grotesk. All UI text.
- **Foggy** (`--font-foggy`) — weight 400; 106px; line-height 0.83; tracking normal; same OpenType features. Fallbacks: Druk Condensed, Tungsten Bold Condensed, or Antonio Bold. Hero display headlines only (106px+).

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | — | 1.21 | 0.72px |
| body-sm | 14px | — | 1.33 | 0.84px |
| body | 16px | 400 | 1.4 | 0.96px |
| subheading | 18px | 350 | 1.22 | 1.08px |
| heading-sm | 24px | 350 | 1.25 | 1.44px |
| heading | 28px | 350 | 1.21 | 1.68px |
| display | 106px | 400 | 0.83 | 0px |

## Spacing, radius, elevation
- Base unit 4px; density compact.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 120px.
- Page max-width 1200px; section gap 80px; card padding 16px; element gap 8px.
- Radius: small 4px, cards 8px, images 8px, nav elements 20px, buttons 40px, tags 100px.
- Shadows: none; all surfaces flat.

## Layout
- Hero: two-column (left headline + CTA, right phone mockup), white bg, ~80px vertical padding, max-width 1200px.
- Alternate full-bleed black sections with white sections (min. 80px vertical padding) for zine-like rhythm.
- Dark Feature Band: full-width #000000, 80px+ padding, centered Favorit 28px/700 white heading + 3-column grid (white line-art mascot ~200px + 16px white caption per column).
- Event carousel: horizontal flex row of Event Cards, gap 8–16px, horizontal overflow scroll.

## Components
- **Filled Pill Button:** primary action (GET THE APP, VIEW TICKET); 40px radius; #000000 fill; #ffffff text; Favorit 700, 12px; tracking 0.06em; padding 12px/22px; all-caps; pill shape mandatory.
- **Outlined Pill Button:** secondary (BROWSE EVENTS); 40px radius; transparent; 1px #000000 border; #000000 text; Favorit 700 12px; padding 12px/22px; inverts to white border + white text on black sections.
- **Search Field:** global search in nav; ~20px radius; #ffffff fill; 1px border (surface-dependent); placeholder "Search by event, venue or city" in #808080 Favorit 14px; left search icon #000000.
- **Event Card:** image radius 8px; no border, no shadow; poster image + event title (Favorit 16px/700) + date (14px #595959) + venue (14px/700) + price (14px); ~8px between poster and type, no internal padding.
- **Hero Section:** left Foggy 106px / 0.83 (3–4 stacked lines) + Favorit 18px subheading (#333333) + filled pill CTA; right phone mockup with neon-green confirmation screen.
- **Phone Mockup Frame:** 40px radius, #000000 fill, stylized frame with small notch, no shadow.
- **Dark Feature Band:** see Layout.
- **Section Heading Block:** title Favorit 16px/700 #000000, left-aligned; description 16px/400 #333333 (1–2 lines); outlined pill "BROWSE EVENTS" right-anchored.
- **What Else List:** 3 left-aligned items; each ~24px icon + Favorit 18px/400 text; one active (Pitch Black), others dimmed (#808080).
- **Ticket Detail Card:** neon-green background (#7ffeb1-ish), illustrated event icon + Favorit 18px/700 event info + artist/title block + centered filled black "VIEW TICKET" pill.
- **Navigation Bar:** DICE mascot logo left + Search Field + nav links (Favorit 14px) + "GET THE APP" filled pill far right; 1px bottom border #d9d9d9; 24px vertical padding.
- **Mascot Illustrations:** hand-drawn white single-stroke line art on dark sections (character holding drinks, sparklers, phones), ~200px square, no fill, consistent stroke weight.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 40px border-radius on every button; pill shape is mandatory.
- 0.06em letter-spacing on all Favorit text; always enable ss02/ss03/ss05/ss06/ss08.
- Stack hero headlines in Foggy 106px / 0.83 line-height (3–4 stacked lines), never single-line display.
- Alternate full-bleed black sections with white sections (min. 80px vertical padding).
- Lock the palette to black, white, and three grays (#eeeeee, #d9d9d9, #333333); no chromatic accents in UI chrome.
- Round event poster images at 8px, softer than buttons and distinct from the pill system.
- 24px base section padding; 8px for inline element gaps.

Don't:
- No color in UI chrome; status colors confined to confirmation screens/illustrations, never buttons/borders/text tokens.
- No sharp or lightly-rounded button corners; 40px is mandatory.
- No Foggy for body copy or anything under 80px.
- No weight 500 or 600 with Favorit; system uses 350, 400, 700 only.
- No drop shadows on cards or buttons.
- No letter-spacing other than 0.06em on Favorit (open tracking is the brand signal).
- No decorative gradients; strictly flat, solid fills plus the single neon-green confirmation screen.

## Steal this
- All-caps, +0.06em-tracked 12px bold labels in pill buttons against a screaming 106px condensed headline.
- Black/white section alternation as the only rhythm device.
- Neon-green used only inside the confirmation ticket screen of the phone mockup.
- White single-stroke mascot line art as the only illustration on dark bands.
