---
name: SoundCloud
source: https://styles.refero.design/style/35f89ccd-614d-4f8f-9cce-bb94309df237
category: editorial
tags: [dark, near-black, single-blue-signal, weight-100-display, 4px-radius, artwork-led, flat]
best_for: Music / audio platforms where album art carries color and chrome stays near-black with white buttons
---
# SoundCloud
> "Concert darkroom with neon blue signal — a near-black gallery where album art and one cool accent color do all the work, and the chrome around them stays invisible." White filled buttons, Söhne weight 100 at 60px for hero.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #121212 | Page background, hero overlay base, primary dark surface |
| Graphite | #303030 | Elevated dark surfaces: input fields, card backgrounds over dark canvas, nested panels |
| Mid Gray | #666666 | Mid-tone dividers, secondary surface tier above Graphite |
| Fog | #999999 | Supporting neutral for secondary UI, dividers, muted labels |
| Silver | #cccccc | Hairline borders, subtle dividers between dark surface tiers |
| Bone | #f2f2f2 | Light supporting surface for subtle backgrounds, section separation |
| White | #ffffff | Primary text, filled buttons, headings, input text on dark |
| Signal Blue | #699fff | Accent for decorative details, links only (not CTA fill) |

Also referenced in components: promotional banner orange dot icon #ff5500.

Surfaces: 0 Obsidian Canvas #121212 → 1 Graphite Surface #303030 (inputs, nested dark panels, elevated cards) → 2 Mid Gray Tier #666666 (hover/secondary surfaces, dividers) → 3 Bone Light Band #f2f2f2 (inverted promotional sections) → 4 White Highlight #ffffff (filled buttons, highest-emphasis text).

## Typography
- **Söhne** (custom geometric sans) — weights 100, 400, 600, 700; sizes 12, 14, 17, 18, 22, 28, 36, 60px. Fallback: Inter; secondary fallbacks DM Sans or Manrope. Scale: Major Second (1.125) from 18px base.

| role | size | weight | line-height |
|---|---|---|---|
| caption | 12px | 400 | 1.41 |
| body-sm | 14px | 400/600 | 1.43 |
| body | 17px | 600 | 1.41 |
| subheading | 22px | 600 | 1.27 |
| heading-sm | 28px | 600 | 1.29 |
| heading | 36px | 100 | 1.33 |
| display | 60px | 100 | 1.00 |

Letter-spacing: _not captured_

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 180px.
- Max-width 1200px; section gap 64px; card padding 16px; element gap 8px; grid: 6-column with 16px row/column gaps (desktop).
- Radius: cards 0px, badges 4px, images 4px, inputs 4px, buttons 4px.
- Shadow: subtle `rgba(18,18,18,0.1) 0 0 0 1px inset`.

## Layout
- Hero: full-bleed editorial photo with subtle dark gradient overlay; left-aligned column with 60px Söhne 100 headline, 17px subhead, white filled 'Get Started' button; pagination dots lower right.
- Trending Grid: 22px white section heading, 6-column card grid with 16px gaps, centered 'Explore trending playlists' white button below.
- Device Mockup Section: #f2f2f2 full-width, 64px vertical padding; phone/tablet mockups left with orange frames showing app screenshots; right 36px Söhne 100 heading #121212, 17px body #121212, black App Store/Google Play badges side by side.

## Components
- **Promotional Banner:** full-width #121212, 4px vertical padding, orange dot icon (#ff5500), white 14px text, #699fff inline link, #999999 close icon.
- **Top Navigation:** transparent over hero (solidifies to #121212 on scroll). Left wordmark + waveform icon in white. Right: 'Sign In' ghost link #999999, 'Create account' white filled button (4px radius, 8px/16px padding, 600 weight), 'For Artists' ghost link #999999.
- **Hero Section:** see Layout; pagination dots lower right (#999999 inactive, #ffffff active).
- **Search Bar:** #303030 bg, 4px radius, 1px inset border rgba(18,18,18,0.1), 16px horizontal/12px vertical padding, #999999 placeholder 14px, white magnifier icon; adjacent 'Upload your own' white button.
- **Track/Album Card:** bare container (no bg/border/shadow); 1:1 cover art with 4px radius, 16px gap below, title 14px white 600, artist 14px #999999 400.
- **Trending Grid:** see Layout.
- **Primary Filled Button:** #ffffff bg, #121212 text, 4px radius, 700 weight, ~8px/16px padding, 14px font.
- **Ghost Text Button:** no bg/border, #999999 14px/400; hovers to white.
- **Input Field (Dark):** #303030 bg, 4px radius, 1px inset rgba(18,18,18,0.1), 12–16px vertical/16px horizontal padding; placeholder/icon #999999, typed text white; focus uses lighter background.
- **App Store Badges:** #000000 with white text/icons, 4px radius, on light promotional band.
- **Device Mockup Section:** see Layout.
- **Pagination Dots:** 8px circles, #ffffff active, #999999 ~40% opacity inactive, 8px gap.

## Motion
_not captured_

## Rules (do / don't)
Do:
- #121212 as default page background; reserve #303030 for inputs/elevated dark panels.
- 4px border-radius on all buttons, inputs, badges (never pill shapes).
- Flat-fill buttons, no drop shadow; inset hairlines for boundaries.
- Söhne 100 at 60px for hero headlines; switch to 600–700 for body/UI.
- Let photography/artwork supply color; keep surrounding chrome achromatic.
- #699fff exclusively for inline links/accent strokes (never button fill).
- 6-column grid with 16px gaps (desktop).

Don't:
- No drop shadows on cards/buttons (flat by design).
- No #699fff as CTA background or button fill (action color is white #ffffff).
- No border-radius above 4px on interactive elements.
- No gradients on buttons, cards, backgrounds (page is flat black).
- No body text below 14px, and no weight 100 for anything smaller than display.
- No multiple saturated accent colors.
- No elevation tiers beyond gray scale shifts; no shadow stack.

## Steal this
- White (not colored) filled button as the primary action on near-black.
- Hairline-light Söhne 100 at 60px as the hero voice, then 600/700 for UI.
- Bare artwork cards: 1:1 cover, 4px radius, title white, artist gray, no card chrome.
- Inverted #f2f2f2 band for the app-download section.
