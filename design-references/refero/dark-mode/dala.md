---
name: Dala
source: https://styles.refero.design/style/e5f5f8cf-e68d-4ed1-bbf5-6b67569af648
category: dark-mode
tags: [dark, pure-black, single-accent, violet, light-weight-type, particle-hero]
best_for: AI / knowledge products that want a spacious, scale-driven dark landing page with one procedural hero visual
---
# Dala
> Constellation floating on black — black voids meet a single vivid violet accent, punctuated by amber sparks.

Typography dominates through massive scale (78–113px) rather than weight variation. Signature visual: an animated constellation of thousands of tiny multicolored triangular particles forming an organic brain shape ("knowledge visualized as distributed intelligence"). Two-column asymmetric compositions with no cards, borders, or shadows.

## Color tokens
| token | hex | role |
|---|---|---|
| Void | #000000 | Page canvas, section backgrounds, negative space |
| Bone White | #ffffff | Headlines, body text, icon fills, nav active state |
| Ash Gray | #9a9a9a | Muted nav text, ghost links, secondary labels |
| Silver Mist | #bdbdbd | Tertiary body text, captions, supporting context |
| Electric Iris | #8052ff | Primary action buttons, logo, brand accents |
| Saffron Spark | #ffb829 | Highlight emphasis, accent links, attention punctuation |
| Deep Verdant | #15846e | Secondary surface tint, logo gradient stop |

## Typography
- Primary: **PPNeueMontreal** (fallback Inter). Weights 200, 400, 600, 700.

| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| caption | 12px | — | 1.5 | — |
| nav-label | 14px | 600 | 1.2 | 0.35px |
| body | 18px | 200 | 1.5 | — |
| heading-2xs | 24px | 400 | 1.25 | -0.48px |
| heading-xs | 27px | 400 | 1.0 | — |
| subheading | 36px | 400 | 1.2 | — |
| heading-sm | 42px | 400 | 1.2 | -1.68px |
| heading | 48px | 400 | 1.1 | -1.68px |
| heading-lg | 78px | 400 | 1.1 | -3.12px |
| display | 113px | 400 | 1.1 | -4.52px |

Rules: "The number 400 doing both 113px display and 15px body is unusual — it means the brand trusts scale, not weight, for hierarchy." -0.04em tracking on display sizes 42px+. Body at weight 200 is a signature.

## Spacing, radius, elevation
- Base unit 6px. Scale: 6, 12, 18, 24, 30, 36, 60, 96, 120px.
- Section gap 60–120px; card padding 24–38px; element gap 6–18px.
- Radius: nav 24px, cards 24px, buttons 24px, tags 9999px.
- **No shadows or elevation.** Levels: 0 Void Canvas #000000 (page/sections); 1 Deep Verdant Tint #15846e (brand gradient, subtle accents); 2 Electric Iris #8052ff (filled buttons, active elements only).

## Layout
- Page max-width 1280px. Full-bleed sections on pure black.
- Hero: two-column asymmetric split (oversized left headline + body/CTA; particle brain right at massive scale). Subsequent sections alternate visual/text positions (zigzag). Extremely spacious — one or two elements per viewport.

## Components
- **Primary action button:** filled #8052ff, white text, 22.5px radius (pill), padding 14.4px × 15.96px, PPNeueMontreal 14px weight 400 or 600, uppercase, 0.025em tracking.
- **Ghost text button:** no bg/border, #ffffff or #9a9a9a, 14px weight 400. Nav and inline links.
- **Navigation bar:** transparent on black; logo left + links (Manifesto, Team, Blog) 14px/600 uppercase 0.025em; inactive #9a9a9a, active #ffffff; "Request Access" button right.
- **Team member card:** no bg/border/shadow; large rounded portrait (24px radius); role label 12px uppercase #8052ff; name in large white display type; social icons inline.
- **Section headline block:** two-column — 78–113px headline (400, #ffffff, -0.04em) left; 18px body (200, #bdbdbd) right with small uppercase amber label above.
- **Logo lockup:** triangular icon #8052ff with gradient fade to #15846e + 'Dala' wordmark in white.
- **Carousel dot:** ~8px filled circle, #8052ff active.
- **Hero constellation:** thousands of tiny outlined triangles (1–2px stroke) in violet, amber, teal, magenta, blue forming an organic brain/cloud on pure black; ambient particles at low opacity.

## Motion
_not captured_ (only: the hero constellation is animated).

## Rules (do / don't)
Do:
- Use #8052ff exclusively for filled action buttons
- Every headline at weight 400; never bold
- PPNeueMontreal weight 200 for 18px body
- Pure #000000 for every section background
- -0.04em tracking on display 42px+
- 24px radius consistently for buttons, cards, nav
- "Let the particle constellation be the only hero imagery"

Don't:
- Filled violet for large background blocks
- Body text at weight 400
- Card containers with borders, shadows, or fills
- #0000ee default link blue
- Gradients on UI components
- Substitute system fonts without preserving weight/scale hierarchy
- Multiple filled buttons in proximity

Imagery: entirely procedural and abstract — no photography except team portraits; no product screenshots, lifestyle photos, or 3D renders.

## Steal this
- Hierarchy by scale alone: one weight (400) from 24px to 113px, ultra-light (200) body for contrast.
- A single procedural/generative visual as the entire brand imagery.
- Cardless layout: two-column asymmetric headline/body splits with a tiny uppercase accent label.
- Two accents with strict jobs: violet = action, amber = attention.
