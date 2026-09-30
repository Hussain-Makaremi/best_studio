---
name: Freshman
source: https://styles.refero.design/style/a6284fcd-fa69-4469-ac40-4239e5b84a39
category: editorial
tags: [dark, monochrome, ultralight-serif-italic, single-accent, zero-radius, cinematic]
best_for: Film / creative studio portfolios wanting a cinema title-card feel
---
# Freshman
> Cinema title card on black velvet — near-black canvas, oversized ultralight italic wordmark, flat surfaces, a bottom project ticker as the navigation spine.

## Color tokens
| token | hex | role |
|---|---|---|
| Pure White | #ffffff | Primary text, logotype, border strokes (92% of color instances) |
| Carbon Black | #000000 | Base canvas / primary background |
| Charcoal Shale | #101010 | Secondary surface: icon wells, sub-panels, cookie strip |
| Signal Red | #ff2936 | Sparing accent: active states, marquee highlights; max one element per viewport |

Surfaces: 1 #000000 canvas → 2 #101010 utility lift. No shadows or gradients.

## Typography
- **Editorial New** — 200; 16px, 20px; line-height 1.00, 1.25; -0.01em. Fallback: Cormorant Garamond, Playfair Display. Hero/headline display; ultralight 200 is the anti-convention.
- **TT Firs Neue** — 400; 16px; line-height 1.00. Fallback: Inter, Neue Haas Grotesk, Söhne. Workhorse UI/body; ticker labels, menu trigger, utility text.
- **Altform** — 400, 700; 14px, 16px; line-height 0.86, 0.88; -0.03em. Fallback: Druk, Tungsten, Bebas Neue. Compact meta/condensed labels — festival credit roll.
- **Wasted Year** — 400; 12, 14, 17, 20px; line-height 0.86, 0.94, 1.00, 1.25; -0.01em. Fallback: Caveat, Reenie Beanie. Bracket-wrapped taglines, handwritten flourishes.

| role | size | line-height |
|---|---|---|
| caption | 12px | 1 |
| body-sm | 14px | 1 |
| body | 17px | 1 |
| body-lg | 20px | 1 |

## Spacing, radius, elevation
- Base 4px; compact. Scale: 4, 5, 7, 8, 12, 20px.
- Section gap 48–80px; card padding 12–20px; element gap 12px.
- Radius: 0px everywhere (tags, cards, inputs, buttons).
- No shadows/gradients; depth via type scale, weight contrast and the #000000 → #101010 two-step stack ("shadows would make the screen feel like software; flatness makes it feel like cinema").

## Layout
- Full-bleed dark canvas; hero wordmark ~60% viewport width; project reel pinned at viewport bottom on every page; top-right MENU trigger, upper-left glyph; centered year counter as chapter marker; centered tagline block max ~600px.
- Never alternate light/dark sections; no secondary nav, breadcrumbs, or tabs.
- Imagery almost absent — only ~80px-tall cinematic thumbnails inside the ticker, 0 radius, no overlays; no illustration/3D/gradients.

## Components
- **Hero Wordmark:** italic "freshman" in Editorial New 200, #ffffff on #000000, ~60% viewport width, -0.01em; small ® upper-right; no bg/border/shadow.
- **Project Reel Ticker:** pinned bottom bar, #000000, 1px #ffffff top hairline; single row, 12px column gaps; item = uppercase name (TT Firs Neue 16px/400 white) + sub-label (TT Firs Neue 12px, 0.88 line-height, white ~70% opacity); 20px vertical padding; 0 radius.
- **Menu Trigger:** "+ MENU", TT Firs Neue 16px/400 white; bare label — no border, bg, or icon chrome.
- **Brand Glyph:** small hash/cross, #ffffff, ~16px, upper-left at MENU cap height.
- **Year Counter:** centered "2025", Altform 14px/400, 0.88, -0.03em, white.
- **Editorial Tagline Block:** two stacked lines TT Firs Neue 16px/400 white, centered, max ~600px; followed by bracket-wrapped Wasted Year phrase at 14–17px.
- **Cookie Consent Strip:** #101010, 1px #ffffff hairline border, TT Firs Neue 12px/400 uppercase white, ~12px padding, 0 radius, flush to viewport edge.
- **Project Item Cell:** uppercase name 16px + sub-label 12px (Altform 0.88 line-height, ~70% white) + optional ~80px thumbnail; no border/bg.
- **Thin Hairline Divider:** 1px #ffffff at 70–100% opacity.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Wordmark in Editorial New 200 italic — never bold or regular.
- Only #ffffff text on #000000; 1px white hairline is the only structural divider.
- Anchor the project reel to viewport bottom on every page.
- Pair body description with a bracket-wrapped Wasted Year tagline beneath it (non-optional).
- #ff2936 on at most one element per viewport — punctuation, not paint.
- Compact labels in Altform, 0.86–0.88 line-height, -0.03em.

Don't:
- Shadows, gradients, any elevation.
- Card backgrounds or rounded corners.
- Bold/semibold headlines.
- #ff2936 as button fill or large block.
- Secondary nav, breadcrumbs, tabs.
- Body copy above 16px or below 14px.
- Alternating light/dark sections.

Similar: Hypebeast, A24 Films, Bureau Cool, Buck.

## Steal this
- Ultralight (200) italic serif wordmark at viewport scale — authority through lightness on black.
- Bottom-pinned horizontal "reel" ticker as the primary navigation.
- Bracket-wrapped handwritten micro-taglines as personality punctuation.
- Condensed labels at 0.86–0.88 line-height for a credit-roll rhythm.
