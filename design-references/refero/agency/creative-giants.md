---
name: Creative Giants
source: https://styles.refero.design/style/ff8f39ee-a10e-4a9d-a94d-6993c6084060
category: agency
tags: [light, warm-cream, light-weight-display, pastel-accents, pill-buttons, photo-led]
best_for: Image-led editorial agency sites on cream paper with whisper-weight poster headlines and rationed pastel accent cards
---
# Creative Giants
> Oversized editorial poster on cream paper.

Warm off-white canvas with hairline margins; display type as visual poster rather than heading; negative space as primary structural tool. Single weight (300) headlines whisper at 64–84px; letter-spacing tightens aggressively (-0.04em) as scale increases — "chiseled, not spaced." Chromatic color rationed into small saturated hits (magenta, teal, powder blue, hot pink, mint, navy) used only as card surfaces or accents, never floods. Minimal chrome: black-on-cream pills with 1440px radius, single circular logo, "Menu" button floating in white space.

## Color tokens
| token | hex | role |
|---|---|---|
| Bone White | #fffef7 | Page canvas, card surfaces, text on dark accents — replaces pure #ffffff |
| Ink Black | #000000 | Text, icons, strong contrast; not a primary CTA color |
| Graphite | #666666 | Secondary body, captions, metadata |
| Ash | #aaaaaa | Input borders, inactive links, tertiary dividers |
| Charcoal Scale | #4d4c4a | List borders, subtle dark gradient tracks — warm gray |
| Magenta Bloom | #8a0467 | Decorative details, low-frequency emphasis |
| Forest Teal | #03624c | Card frames, decorative strokes; duotone with Magenta Bloom |
| Powder Blue | #a5c8eb | Card backgrounds, wash backgrounds, muted fills |
| Candy Pink | #ffacea | Pastel card surface (news/article cards) |
| Mint Wash | #a5ebd6 | Pastel card surface |
| Navy Ink | #101731 | Deep accent card surface, inverted text ground; only dark field |
| Signal Yellow | #ffd001 | Highlights (badges, tags, hover) — trace amounts only |

## Typography
- **Switzer** — weights 300 (all display/headline, 12–84px), 400 (body, metadata, UI controls). Fallback: Inter (300, 400), Söhne (300, 400), or any geometric humanist sans with a true 300.
- Weight 300 at 64–84px preserves hairline strokes (airbrushed effect). Tracking tightens with size (-0.04em at 84px, -0.018em at 14px and below).
- Scale: Minor Third 1.2 from 16px.

| role | size | weight | line-height | tracking | token |
|---|---|---|---|---|---|
| caption | 12px | 300/400 | 1.43 | -0.018px | `--text-caption` |
| body-sm | 14px | 300/400 | 1.43 | -0.018px | `--text-body-sm` |
| body | 16px | 400 | 1.4 | -0.018px | `--text-body` |
| subheading | 20px | 300 | 1.4 | -0.018px | `--text-subheading` |
| heading-sm | 34px | 300 | 1.25 | -0.02px | `--text-heading-sm` |
| heading | 54px | 300 | 1.0 | -0.023px | `--text-heading` |
| display | 84px | 300 | 1.0 | -0.04px | `--text-display` |

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 48, 64, 80, 112px.
- Section gap 64px · card padding 24px · element gap 8px.
- Radius: tags, pills, buttons 1440px · cards 0px · images 0px.
- Single shadow: `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px` — white 1px ring as hairline highlight on dark elements. No box-shadows on cards, buttons, modals.

## Layout
- Page margins 16–32px mobile, 32px+ desktop; full-bleed edge-to-edge model.
- Card grid 3 columns; chromatic accent card never more than one per row.

## Components
- **Pill Menu Button** — 16px 400, #fffef7 text on #000000, 1440px radius, 12px / 24px padding; floats top-right.
- **Header Lockup** — two-line eyebrow (12px 400 all-caps Ink Black) left; 32px circular logo; Menu button right; ~16px vertical padding, full-bleed, no background.
- **Display Poster Headline** — 84px 300, -0.04em, lh 1.0, Ink Black, full width minus margin; ~40% viewport height; never more than 2 lines; optional vertical Charcoal-to-Black gradient.
- **Hero Image Band** — full viewport width, no radius/shadow; meta (12px all-caps) + headline (34px 300) overlay bottom-left with 32px padding.
- **Section Title Block** — all-caps eyebrow (12px 400 Graphite) + 34–54px 300 headline; separation by whitespace (48–64px below eyebrow, 32px below headline).
- **Project/News Card** — 3-column, no border/shadow/radius; square or 4:3 image; 16px below: 18–20px 300 title; 8px below: 14px 400 Graphite description, 3-line clamp; optional 1px #8a0467 or #03624c border on image edge.
- **Chromatic Accent Card** — #ffacea, #a5ebd6, #a5c8eb or #101731 surface; text #fffef7 on Navy, #000000 on pastels; 0px radius; 24–32px padding.
- **Carousel Arrow Control** — 32px circular outline, 1px Ash border, transparent, 16px Ink Black chevron; border → Ink Black on hover.
- **Meta Eyebrow** — 12px 400 all-caps #666666, single line.
- **Full-Bleed Footer** — Bone White canvas, 1px top hairline, multi-column 14px 400 Ink Black links with 8px row-gap; dark variant uses Charcoal-to-Black gradient (footer only).
- **Tag/Category Pill** — 8px / 12px padding, 1440px radius, 12px 400 all-caps; default Ink Black text, transparent, 1px Ash border; accent #ffd001 fill, Ink Black text, no border.

CSS returned:
```css
:root {
  --color-bone-white: #fffef7; --color-ink-black: #000000; --color-graphite: #666666;
  --color-ash: #aaaaaa; --color-charcoal-scale: #4d4c4a; --color-magenta-bloom: #8a0467;
  --color-forest-teal: #03624c; --color-powder-blue: #a5c8eb; --color-candy-pink: #ffacea;
  --color-mint-wash: #a5ebd6; --color-navy-ink: #101731; --color-signal-yellow: #ffd001;
  --font-switzer: 'Switzer', ui-sans-serif, system-ui;
  --font-weight-light: 300; --font-weight-regular: 400;
  --spacing-8: 8px; --spacing-16: 16px; --spacing-24: 24px; --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;
  --radius-full: 1440px; --radius-cards: 0px;
  --shadow-subtle: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
}
```

## Motion
_not captured_

## Rules (do / don't)
**Do**
- Headlines weight 300 only.
- Bone White (#fffef7) as sole page background.
- 1440px radius on all buttons, tags, Menu elements.
- Display 64–84px with -0.04em.
- Full-bleed photos carry visual weight; chrome recedes.
- Chromatic accents as borders, small fills, single-card highlights — never section floods.
- 48–64px section gaps.

**Don't**
- Don't bold headlines.
- Don't use pure #ffffff anywhere.
- No shadows.
- Don't round card or image corners.
- Don't fill CTAs with chromatic color; actions are black or transparent.
- Don't exceed two lines on display headlines.
- Don't use default link blue (#0000ee); links inherit Ink Black.

Imagery: full-bleed, sharp-cornered documentary/atmospheric photography, large scale, no overlays or masks. Iconography: circular logo, outline chevrons, 1px-stroke UI icons.

## Steal this
- Light-weight (300) display with aggressive negative tracking for a "carved" poster headline.
- A pastel card palette used one-card-per-row as rhythm punctuation in an otherwise neutral grid.
- Black pill CTAs only — color never signals action, so content colors stay decorative.
- Warm cream (#fffef7) instead of white for a paper feel.
