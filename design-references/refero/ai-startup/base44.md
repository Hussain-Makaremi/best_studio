---
name: Base44
source: https://styles.refero.design/style/e869e214-f672-4ac3-bfc2-bd25de7b003b
category: ai-startup
tags: [light, warm-off-white, lime-accent, pill-buttons, serif-display, gradient-bands]
best_for: Prompt-first AI builders and calm product SaaS where the input box is the hero
---
# Base44
> Sunlit notepad with a lime highlighter: warm off-white canvas, flat white cards, one glowing lime CTA.

Near-monochrome workspace aesthetic; authority through spaciousness rather than density. Three signature colors: a glowing lime-green CTA, vivid orange reserved for the logo, and a sunset gradient for atmospheric breaks. Fully-rounded pill buttons, spring-like motion, generous spacing.

Collection group: "Put a task in front of the claim."

## Color tokens
### Brand
| token | hex | role |
|---|---|---|
| Lime Wash | #ebffb1 | Primary CTA fill — pale lime "like a fresh highlighter mark" |
| Lime Edge | #ade900 | Outlined borders, linked labels, light interactive emphasis |
| Ember Orange | #ff631f | Logo color, decorative accents, secondary action — sparingly |

### Gradients
| token | value | role |
|---|---|---|
| Sunset Gradient | linear-gradient(rgba(250,249,247,0) 2.46%, rgb(255,240,222) 23.04%, rgb(255,174,83) 54.09%, rgba(255,174,83,0) 93.84%) | Full-bleed peach-to-coral section band |
| Sky Wash | radial-gradient(97.22% 78.13% at 50% -21%, rgb(93,179,207) 22.39%, rgba(145,201,220,0.56) 58.43%, rgba(250,249,247,0) 85.73%) | Hero radial — cool blue-cyan from top |

### Neutrals
| token | hex | role |
|---|---|---|
| Ink Black | #0f0f0f | Primary text, filled buttons, icon strokes, nav |
| Graphite | #232529 | Secondary text, button text, nav strokes |
| Muted Ink | #a0a0a0 | Tertiary text, disabled, muted icons |
| Hairline | #d1d1d1 | Default 1px borders on cards, inputs, dividers |
| Soft Border | #e6e6e6 | Secondary borders, subtle surface backgrounds |
| Canvas Bone | #faf9f7 | Page background, section bands |
| Card White | #ffffff | Cards, elevated panels, inputs, footer |

Surfaces: 0 Canvas Bone #faf9f7 · 1 Card White #ffffff · 2 Soft Cream #fefcfb (hero prompt card) · 3 Lime Wash #ebffb1 (CTA).

## Typography
- **WixMadeforText** (UI sans) — 400, 500, 700; 12, 14, 16, 18px; lh 1.25, 1.30, 1.50; tracking 0.025em at 12px, 0.18em uppercase at 12px, normal at 16px; fallback Inter. Body, buttons, nav, inputs, badges.
- **WixMisoRegular** (display) — 400; 20, 24, 48, 54, 56px; lh 1.05, 1.10, 1.20, 1.42; tracking −0.0200em; fallback DM Serif Display or Source Serif Pro.
- **WixMisoLight** (secondary display) — 400 light cut; 17, 25px; lh 1.20, 1.50; fallback DM Serif Display Light or Lora. Subheads and lead text — contrast via weight not size.

| role | size | lh | tracking | token |
|---|---|---|---|---|
| caption | 12px | 1.25 | 0.3px | --text-caption |
| body-sm | 14px | 1.5 | — | --text-body-sm |
| body | 16px | 1.5 | — | --text-body |
| subheading | 20px | 1.1 | — | --text-subheading |
| heading-sm | 25px | 1.2 | — | --text-heading-sm |
| heading | 48px | 1.05 | −0.96px | --text-heading |
| heading-lg | 54px | 1.2 | — | --text-heading-lg |
| display | 56px | 1.05 | — | --text-display |

## Spacing, radius, elevation
- Base 4px; density comfortable. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 80, 120px (`--spacing-N`).
- Radius: tags 9999px · buttons 9999px · cards 8px · inputs 8px · large cards 30px.
- Shadow lg: `rgba(0,0,0,0.07) 0px 6px 20px 0px` — hero prompt card only. Otherwise flat + hairlines; depth from white-on-bone contrast and spacing.

## Layout
- Max width 1200px; section gap 80px; card padding 24px; element gap 16px.
- Hero: centered prompt-input card (product as hero visual) under a sky-wash radial; full-bleed gradient bands as dividers.
- Entirely light mode; no dark sections.
- Imagery: no photography, stock illustration or visible screenshots; line icons in #0f0f0f; logo = orange disc with black horizontal lines.

## Components
- **Lime CTA pill** — 9999px, #ebffb1 fill, 1px #ade900 border, #0f0f0f text, 8px/16px, 14–16px WixMadeforText 500.
- **Ink filled pill** — 9999px, #0f0f0f, #ffffff text, 0/21.6px horizontal padding. Secondary dark CTAs, "Get started".
- **Ghost pill** — transparent, #232529/#0f0f0f text, 1px #d1d1d1, 9999px, 8px/12px. Tertiary, suggestion chips.
- **Frosted nav pill** — rgba(255,255,255,0.4) + backdrop blur(6px), 9999px, 1px rgba(15,15,15,0.15). Sticky header CTA container.
- **Text link button** — no bg/border, #0f0f0f 16px/400, zero padding, underline on hover.
- **Flat white card** — #ffffff, 8px, 1px #d1d1d1, no shadow, 24px. Content, FAQ, feature blocks.
- **Soft shadow card** — #fefcfb, 30px, shadow lg. Hero input container.
- **Ghost input** — transparent inside soft card, no border, #0f0f0f placeholder, 25px top / 16px horizontal / 28px left padding (icon).
- **Orange submit circle** — #ff631f, ~40px circle, white arrow.
- **Uppercase eyebrow** — 12px/500, 0.18em, uppercase, #232529.
- **Accordion FAQ row** — 1px #d1d1d1 bottom border, no bg, question 16px #0f0f0f left, plus icon right; no card wrapper.
- **Top nav** — sticky, #faf9f7, 1200px centered, ~56px; logo left; links centered (Product, Use Cases, Resources, Pricing, Enterprise); language toggle + frosted lime CTA right.
- **Sunset gradient band** — full-bleed divider between sections.

## Motion
- Entrance easing `cubic-bezier(0.22, 1, 0.36, 1)` (spring-out); named animation `fade-in-up`.
- Color/border transitions 0.15–0.16s; micro-interactions 0.15–0.3s; ambient animations up to 2s.
- Transition color, background-color, border-color, fill, stroke, transform, opacity — never layout properties.
- Frosted nav blur(6px). "Gentle and spring-like, matching the warm unhurried atmosphere."

## Rules (do / don't)
**Do**
- WixMisoRegular 48–56px/400 with −0.96px tracking for headlines.
- All buttons and tags 9999px.
- #ebffb1 fill + #ade900 border for primary CTA.
- 1px #d1d1d1 hairlines for structure.
- Canvas #faf9f7; #ffffff only for cards — two-tone depth model.
- Uppercase eyebrow (12px, 0.18em, 500) for section labels.
- cubic-bezier(0.22, 1, 0.36, 1) for entrances.

**Don't**
- No card drop shadows (hero prompt card only).
- No #ff631f on text or large fills.
- No headline weight above 400.
- No saturated "info blue" for links/actions.
- No dark sections — use the sunset band.
- No borders heavier than 1px.
- No radii below 8px.

Similar: Linear, Vercel, Framer, Notion. Best for: product-focused SaaS, workflow tools, input-heavy interfaces, editorial/content-first platforms.

## Steal this
- The prompt box as the hero: a single soft-shadow 30px card with an orange submit circle.
- Highlighter CTA: pale fill + saturated 1px border of the same hue.
- Full-bleed gradient bands as section breaks instead of dark sections.
- Two-tone depth (bone canvas / white cards) with a single reserved shadow.
