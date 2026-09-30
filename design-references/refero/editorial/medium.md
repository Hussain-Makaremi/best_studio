---
name: Medium
source: https://styles.refero.design/style/9c92c3d1-a2fe-4a27-a324-826b19501774
category: editorial
tags: [light, cream-canvas, serif-display, monochrome, pill-buttons, flat]
best_for: Long-form reading / publishing platforms and text-first landing pages
---
# Medium
> Cream-colored broadsheet at golden hour — warm cream canvas, aggressively monochromatic warm grays, giant weight-400 serif hero, near-black pills as the only solid ink.

## Color tokens
| token | hex | role |
|---|---|---|
| Newsprint Cream | #f7f4ed | Page canvas, hero, section backgrounds |
| Paper White | #ffffff | Card surfaces, elevated panels, inputs |
| Ink | #242424 | Primary text, body, links, headings |
| Body Gray | #333333 | Secondary text |
| Button Black | #191919 | Filled pill buttons (only filled-button bg), wordmark. (Source token table also says "supporting neutral… do not promote to primary CTA" — contradicts its component specs.) |
| Marginalia Gray | #6b6b6b | Secondary UI, muted labels, hero subtext, footer links |

Color philosophy: entire UI warm-grayscale; no chromatic UI (hero illustration green is editorial art only).

## Typography
- **GT Super** (display) — 400 only; 120px; line-height 0.83; -0.055em. Fallback: Playfair Display, EB Garamond, Libre Caslon Text. Weight 400 is the signature.
- **Söhne** (UI sans) — 400; 13–14px nav/buttons, 20–22px subheadings; line-height 1.27–1.54. Fallback: Inter, IBM Plex Sans.
- **Charter / Georgia** (body content serif) — 400; 16px; line-height 1.20. Fallback: Charter, Georgia, Source Serif Pro. Long-form reading.
- **Söhne (extended body)** — 400; line-height 1.20; descriptions, cards.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 13px | 1.27 | — |
| body | 16px | 1.2 | — |
| subheading | 20px | 1.4 | — |
| heading-sm | 22px | 1.54 | — |
| display | 120px | 0.83 | -6.6px |

## Spacing, radius, elevation
- Base 8px; comfortable. Scale: 8, 16, 24, 48, 64px.
- Radius: buttons 9999px, tags 9999px, cards/inputs/containers 0px.
- No shadows or blur — separation by value shifts only (cream → paper → ink).

## Layout
- Max-width 1200px; section gap 64px; card padding 16px; element gap 16–24px.
- Two-column hero: left ~55% headline/subtext/CTA left-aligned; right ~45% illustration. Below: one cream band with centered footer links. "The page functions as a cover, not a dashboard."
- Imagery: occasional hand-drawn editorial illustration (seasonal); no photography or icons on homepage.

## Components
- **Pill Button (Filled):** #191919, #ffffff, Söhne 14px/400, 8px × 16–20px, 9999px, no border/shadow.
- **Wordmark Logo:** "Medium", Söhne 400 ~22px, #191919 — wordmark is the logo.
- **Top Navigation Bar:** #f7f4ed full-width, ~64px, no border/shadow; wordmark left; right: Söhne 14px #242424 links (Our story, Membership, Write, Sign in) + filled pill "Get started"; ~24px spacing.
- **Hero Headline:** GT Super 120px/400, 0.83, -0.055em, #242424; 2-line block; tight leading causes optical overlap.
- **Hero Subtext:** Söhne 20px/400, #6b6b6b, single line (~1/6 headline size).
- **Hero CTA:** same as filled pill ("Start reading").
- **Hero Illustration Panel:** ~40% hero width; green flower, geometric hand, constellation lines.
- **Footer Link Bar:** Söhne 13px/400 #6b6b6b, centered, ~16px spacing, no dividers/top border.
- **Inline Links:** Söhne or body-serif 16px, #242424, underline on hover only — typographic, not chromatic.
- **Card Surface:** #ffffff, 16px padding, 0 radius, no border/shadow.

CSS quick-start variables provided match the above (incl. --tracking-display: -6.6px, --radius-buttons: 9999px, --radius-cards: 0px).

## Motion
_not captured_

## Rules (do / don't)
Do:
- #f7f4ed on all full-width backgrounds.
- GT Super 120px, -0.055em, 0.83 for display.
- Söhne 400 for all UI text.
- 9999px on buttons/tags; 0px on everything else.
- #191919 as the only filled-button background.
- #ffffff for cards lifting off cream.

Don't:
- Any chromatic UI color (no blue links, green buttons, red errors).
- Shadows or blur.
- Bold/semibold GT Super.
- Display line-height above 1.0.
- Radius on cards/inputs/containers.
- Hero illustration green as a brand color.
- Centered body/long-form text.

Similar: Substack, The New Yorker, Are.na, Read.cv, Pocket.

## Steal this
- Regular-weight (400) serif display at huge size with sub-1.0 leading (0.83) and heavy negative tracking — authority through letterforms.
- Pills are the only rounded thing; everything else is 0 radius — makes buttons feel like physical objects.
- Links distinguished by typography (hover underline), not color.
- Homepage as a "cover": one headline, one sentence, one button, one image.
