---
name: AgentQL
source: https://styles.refero.design/style/d5307f56-76de-4d13-9741-f969c42e9aa5
category: ai-startup
tags: [dark, midnight-blue, aurora-gradient, pill-buttons, code-first, white-cta, developer-tool]
best_for: Developer-tool landing pages with a midnight-blue terminal look, aurora hero glows, and white pill CTAs
---
# AgentQL
> "Aurora glow over a midnight terminal." Layered midnight-blue surfaces (#0b0c0e to #12244f), purple and pink radial glows on the hero only, white pill CTA, Figtree display over Inter.

## Color tokens
| token | hex | role |
|---|---|---|
| Cobalt Panel | #12244f | Highlighted card surface for feature spotlights; violet-tinted lift |
| Frosted Lilac | #85a6e9 | Violet wash for highlight backgrounds, decorative bands, soft emphasis; badge text |
| Signal Blue | #2862d7 | Vivid blue link and accent text |
| Pulse Violet | #305fbd | Mid-saturation violet-blue used in code-syntax blocks and gradient stops |
| Aurora Purple | radial-gradient(79.43% 95.88% at 38.94% -53.46%, rgba(98,95,255,0.38) 0px, rgba(0,0,0,0)) | Supporting palette color for small decorative accents |
| Plasma Pink | radial-gradient(27.99% 22.08% at 72.13% 103.46%, rgba(255,125,218,0.33) 0px, rgba(0,0,0,0)) | Secondary hero glow bleeding from bottom-right |
| Void | #0b0c0e | Deepest surface layer, page base under hero |
| Abyss | #0e111b | Primary page canvas and most card backgrounds |
| Deep Sea | #0d172b | Elevated card surface, one step above the canvas |
| Inkline | #151e32 | Subtle card borders |
| Obsidian Edge | #172540 | Primary border color on cards and buttons |
| Sapphire Hairline | #24375a | Lighter violet-tinted border for dividers and section separators |
| Slate | #3c3f44 | Muted borders and disabled state outlines |
| Ash | #abaebb | Secondary text and subtle hairline borders |
| Mist | #c7c9d1 | Tertiary text, muted descriptions, helper copy |
| Quartz | #ffffff | Primary text and primary CTA fill |

Surfaces: 0 Void #0b0c0e (hero backdrop, outer page) → 1 Abyss #0e111b (body canvas, list backgrounds, standard cards) → 2 Deep Sea #0d172b (pricing tiers, feature blocks, signup prompts) → 3 Cobalt Panel #12244f (spotlighted feature cards, integration tiles).

Code syntax colors: keywords #ff7dda, strings #28b6ff, comments #8798c1, plain #c7c9d1, line numbers #3c3f44.

## Typography
- **Inter** — weights 300, 400, 500, 600; sizes 9–40px; line-height 1–1.5; tracking -0.04–0.02em. Fallback: system-ui, -apple-system, sans-serif. Body copy, nav, buttons, labels, subheadings.
- **IBM Plex Mono** — weight 400; 13px; line-height 1.00, 1.25, 1.50. Fallback: JetBrains Mono, Fira Code, monospace. Code blocks and inline code only.
- **Figtree** — weights 500, 600; sizes 32–64px; line-height 1.00, 1.13; tracking -0.0200em. Fallback: DM Sans, Outfit, Plus Jakarta Sans. Display and heading font.

Scale (Minor Third 1.2 from 20px):
| role | size | weight | line-height | tracking |
|---|---|---|---|---|
| display | 64px | 500–600 | 1 | -1.28px |
| heading-lg | 48px | 500 | 1.13 | -0.96px |
| heading | 36px | 500 | 1.13 | -0.72px |
| heading-sm | 28px | — | 1.25 | -0.56px |
| subheading | 20px | 500 | 1.38 | -0.54px |
| body | 16px | 400 | 1.5 | -0.32px |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 64, 76, 80, 104, 160, 192px.
- Radius: small 2px, nav 8px, inputs 8px, cards 12px, buttons 9999px, tags 9999px.
- Shadows:
  - md: rgba(0,0,0,0.2) 0 3px 16px 0
  - xl: rgba(0,0,0,0.5) 0 4px 30px 0
  - xl-2: rgba(0,0,0,0.34) 0 20px 35px 0, rgba(0,0,0,0.25) 0 4px 13px 0
  - md-2: rgba(255,255,255,0.35) 0 2px 14px 0
  - xl-3: rgba(0,0,0,0.35) 0 20px 34px 0
  - subtle: rgba(0,0,0,0.15) 0 0 0 1px

## Layout
- Max-width 1200px; section gap 80px; card padding 24px; element gap 8px.
- Navigation: transparent or #0b0c0e at 90% opacity, height 56–64px; logo left (Figtree 500), links Inter 14–15px/400, social + CTA right; active #ffffff, inactive #abaebb.

## Components
- **Primary CTA Button:** #ffffff bg, text #050606, Inter 500 15–16px, 9999px radius, padding 10px 20px, no shadow/border.
- **Ghost Button:** transparent, 1px #777a88 border, #ffffff Inter 500 15px, 9999px radius, padding 10px 20px.
- **Accent Gradient Button:** linear-gradient(90deg, #305fbd, #625fff), #ffffff Inter 500 14–15px, 9999px radius, padding 10px 20px.
- **Feature Card:** #0e111b or #0d172b, 1px #151e32 or #172540 border, 12px radius, 24px padding, shadow rgba(0,0,0,0.5) 0 4px 30px 0.
- **Highlighted Card:** #12244f, 1px #1e2b48 border, 12px radius, 32px padding.
- **Pricing Tier Card:** #0d172b, 1px #172540 border, 12px radius, 24px padding; Professional tier #12244f with "Most Popular" badge.
- **Code Snippet Block:** #0d172b with #151e32 border, 12px radius, 16px padding; header filename Inter 13px #abaebb; code IBM Plex Mono 13px.
- **Navigation Bar:** see Layout.
- **Section Label:** Inter 12–13px/500, uppercase, tracking 0.02em, #abaebb.
- **Integration Tile:** 80–96px square, #0d172b with gradient overlay, 12px radius, centered brand logo.
- **Badge / Tag:** #12244f or #0d172b bg, text #85a6e9 or #ffffff, Inter 12px/500, 9999px radius, padding 4px 12px.
- **Feature List Item:** 16px icon in #8798c1, text Inter 14–15px #c7c9d1, row gap 6–8px.
- **Stat Highlight Row:** icon + label horizontal, Inter 14–15px #c7c9d1, icon 16px #8798c1; 2-column grid, 16–24px gaps.

## Motion
_not captured_

## Rules (do / don't)
Do:
- 9999px radius for all interactive elements: buttons, badges, tags, nav pills.
- Figtree weight 500 for all display text 32px and above with -0.02em tracking.
- Inter weight 300–400 for body copy; let low weight do the work against the dark canvas.
- Aurora gradient pair (purple #625fff + pink #ff7dda) as large soft radial glows on dark hero sections only.
- Layer surfaces in order: #0b0c0e → #0e111b → #0d172b → #12244f to indicate elevation without shadows.
- #2862d7 or #305fbd for link text and code syntax, never for large fills.
- 1px borders in #172540 or #151e32 to define cards; don't rely on shadows alone.

Don't:
- No bright fills on CTA buttons; white is the primary action color, never a saturated blue or purple.
- No radial gradient glows inside content cards or feature sections.
- No Inter for headlines 32px and above; Figtree owns the display register.
- No #12244f as a page background; it is a highlight surface.
- No color in secondary text; keep #abaebb and #c7c9d1 strictly achromatic.
- No sharp corners (0px radius) on any interactive element (min 2px for code, 8px inputs, 12px cards).
- No elevation shadows on ghost or outline buttons.

## Steal this
- White pill as the primary CTA on a dark canvas; blue/violet reserved for links, syntax, and glows.
- Aurora radial glows (purple top, pink bottom-right) on the hero only.
- Four-step navy surface ladder in place of shadows.
- "Most Popular" tier lifted with the Cobalt Panel surface instead of a colored border.
