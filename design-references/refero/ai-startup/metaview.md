---
name: Metaview
source: https://styles.refero.design/style/f99856e1-3627-4624-a811-f6053a978b62
category: ai-startup
tags: [dark, near-black-green, electric-mint, weight-300-headlines, pill-buttons, atmospheric-gradient, mono-data]
best_for: AI product marketing with a dark instrument-panel look, a single mint signal color, and product mockups on a glow
---
# Metaview
> "Bioluminescent control room — a near-black instrument panel lit by a single living mint signal." Deep Forest canvas, weight-300 headlines with heavy negative tracking, Electric Mint pills, bioluminescent radial glow behind the product card.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Mint | #7affb4 | Filled buttons, selected navigation states, focused conversion moments |
| Mint Whisper | #e3ffef | Pale mint accent for decorative borders, outline strokes, subtle highlight washes; active tab/nav pill bg |
| Bioluminescent Bloom | radial-gradient(circle, rgba(0,100,70,0.4) 0%, rgba(0,60,40,0.2) 30%, rgba(0,30,20,0.08) 55%, rgba(0,0,0,0) 75%) | Small decorative accents; backdrop behind product mockup sections |
| Pine-to-Abyss | linear-gradient(rgb(15,58,43) 0%, rgb(0,10,7) 100%) | Green-to-black wash on secondary atmospheric blocks, footer transitions |
| Pure Black | #000000 | Maximum-contrast text, outline button borders |
| Abyssal Indigo | #01051b | Violet accent for outlined action borders, linked labels, lightweight interactive emphasis |
| Deep Forest | #000a06 | Page background, hero canvas, footer; near-black with barely-perceptible green undertone |
| Pine Bark | #0a1a14 | Card and secondary surface background |
| Charcoal | #161818 | Elevated card surface, modals, overlaid containers |
| Ash Gray | #5e6262 | Muted body text, helper copy |
| Smoke | #828282 | Tertiary text and subdued labels |
| Silver | #d9d9d9 | Light borders, dividers, hairline rules |
| Paper White | #ffffff | Primary text on dark surfaces, inverted button text, icon strokes |

Surfaces: 0 Canvas #000a06 (hero, sections, footer) → 1 Card #0a1a14 (mockup containers, feature cards) → 2 Elevated #161818 (modals, popovers).

## Typography
- **Euclid Circular A** — weights 300, 400, 500, 700; sizes 12–72px (12 values); line-height 1–1.6; tracking -4.32px at 72px to 0.12px at 12px. Fallback: Inter, DM Sans, or Space Grotesk. Sole UI typeface: headlines at 300, body 400, nav/subheads 500, emphasis 700.
- **Onsite SemiMono** (code) — weight 400; sizes 12, 16px; line-height 1.48, 1.60; tracking 0.01em. Fallback: JetBrains Mono, IBM Plex Mono, or Geist Mono. Inline code, badges, data labels, numeric micro-copy.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | 400 | 1.48 | 0.12px |
| body-sm | 14px | 400 | 1.42 | 0.14px |
| body | 16px | 400 | 1.5 | -0.16px |
| subheading | 20px | 500 | 1.34 | -0.4px |
| heading-sm | 28px | 500 | 1.2 | -0.56px |
| heading | 36px | 500 | 1.16 | -1.08px |
| heading-lg | 48px | 500 | 1.1 | -1.92px |
| display | 68px | 400 | 1.04 | -4.08px |

Note: the source table lists display at 400, while Components/Do's describe headlines at weight 300 (68px, -4.08px); both are recorded as captured.

## Spacing, radius, elevation
- Base unit 8px; density comfortable.
- Spacing: 8, 16, 24, 32, 40, 48, 56, 80, 112px.
- Radius: icons 4px, inputs 8px, nested 8px, cards 16px, badges 100px, buttons 999px.
- Shadows:
  - subtle: rgba(0,0,0,0.02) 0 3px 3px 0, rgba(0,0,0,0.01) 0 7px 7px 0, rgba(0,0,0,0.01) 0 14px 14px 0, rgba(0,0,0,0.01) 0 25px 24px 0
  - subtle-2: rgba(1,5,27,0.06) 0 0 0 1px inset

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 8px.
- Page rhythm: announcement bar → nav → dark hero (centered text, max-width headline, two-button row) → product showcase (green gradient backdrop, centered card at 1200px) → alternating content sections; 80px gaps, no visible dividers.
- Product mockup sections: narrow left rail (60px) for icon navigation, wide fluid right panel. No sidebar navigation, mega-menus, or sticky behavior beyond top nav.

## Components
- **Pill Primary Button:** Electric Mint fill, Deep Forest text, 999px radius, 8px/16px padding, 14px/500. Only filled chromatic button.
- **Outlined Ghost Button:** transparent, 1px Paper White border, Paper White text, 999px radius, 8px/16px padding, 14px/500; paired with primary.
- **Dark Secondary Button:** Pine Bark fill, 1px Abyssal Indigo border, Paper White text, 16px radius, 8px/16px padding.
- **Top Navigation Bar:** Deep Forest bg, full-width, 80px tall. Left wordmark; center nav links 14px/500 Paper White; right 'Sign in' text, outlined 'Book a demo', mint pill 'Start for free'. No drop shadow.
- **Announcement Banner:** full-width band above nav, Deep Forest bg, centered 14px/400 Paper White with right-arrow chevron, 8px vertical padding, no border.
- **Hero Section:** Deep Forest canvas; display headline 68px weight 300 Paper White, tracking -4.08px; paragraph 18px/400 Ash Gray max 60ch; two-button row, 8px gap; 120px top padding from nav.
- **Product Showcase Card:** sits on Bioluminescent Bloom gradient; Pine Bark with 1px Abyssal Indigo border, 16px radius, 24px padding; left icon rail (60px), right chat interface panel; card stays flat.
- **Side Icon Nav Rail:** vertical stack of 4 items 16px/500; active: Mint Whisper pill bg, Paper White text; inactive Ash Gray; 8px vertical gap, 4px radius active indicator.
- **Chat Interface Panel:** Pine Bark, subtle inner border; input 8px radius, Abyssal Indigo 1px border, 16px padding, 16px text; circular submit button Paper White icon on Abyssal Indigo; assistant response 14px with candidate count in Onsite SemiMono.
- **Tab Pill Group:** 100px radius; active Mint Whisper bg + Deep Forest text; inactive transparent, Paper White @60%; 12px/500, 4px/12px padding, 4px gap.
- **Filter Bar:** segmented chips ('All 32', 'Liked 0', 'Disliked 0'): 28px height, 12px/500, Abyssal Indigo 1px border, 4px radius; active count in Onsite SemiMono.
- **Feature Card:** Pine Bark, 1px Abyssal Indigo border, 16px radius, 24px padding; 24px icon in Electric Mint or Paper White top-left; heading 20px/500 Paper White; body 16px/400 Ash Gray.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Electric Mint exclusively for the primary CTA pill, active tab state, live status indicators.
- Headlines at weight 300 with tight negative tracking: -4.08px @68px, -1.92px @48px, -1.08px @36px.
- 999px radius for buttons/tab pills; 16px for cards/containers; 8px for inputs/nested.
- Bioluminescent Bloom radial gradient as full-bleed backdrop behind product mockup sections only.
- Numeric data in Onsite SemiMono at 12–16px.
- Deep Forest as universal page background; Pine Bark for cards; Charcoal only for true overlays.
- Pair every mint pill CTA with a ghost outlined secondary in the same row, 8px gap.

Don't:
- No weight 600 or 700 for display headlines.
- No Electric Mint on large surfaces, section backgrounds, or body text.
- No drop shadows for card elevation.
- No new accent colors or gradients.
- No mid-gray #5e6262 for anything above 16px.
- No round buttons to 16px or 8px.
- No light or white card surfaces on the dark canvas.

## Steal this
- Near-black with a green undertone (#000a06) plus a radial green bloom behind the product card as the only atmosphere.
- Whisper-weight (300) headlines with extreme negative tracking to create authority through restraint.
- Mono font for numbers and counts inside the product mockup.
- Mint used for exactly one CTA pill and active states; everything else stays neutral.
