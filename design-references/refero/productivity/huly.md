---
name: Huly
source: https://styles.refero.design/style/d018e81d-6bb6-4445-86d7-39fd6be7e74d
category: productivity
tags: [dark, aurora-gradient, two-accent, pill-buttons, dark-light-bands, product-screenshots]
best_for: Dark-first productivity/project-management SaaS marketing with an aurora hero and alternating dark/light sections
---
# Huly
> Aurora through a midnight observatory — the hero is a vertical beam of violet melting into coral, and every quiet section below it borrows that same two-color story told at lower volume.

Cosmic-workspace aesthetic on near-black canvas with a single violet-to-amber aurora slicing through the hero. One electric iris blue and one ember coral do all brand work against layered graphite. Inter for functional UI, custom Esbuild display face for hero moments at 80–84px with aggressive negative tracking. Pill-shaped controls (9999px), 12px cards, minimal shadow, glowing gradient strokes as primary decoration. Pages alternate full-bleed dark spectacle and calm light sections.

## Color tokens
| token | hex | role |
|---|---|---|
| Electric Iris | #5683da | Primary action bg, active nav, hero aurora cool stop |
| Ember Pulse | #ff8964 | Secondary accent, aurora warm stop, notification dot, illustration highlight |
| Molasses | #5a250a | Deep ember for dark borders, icon strokes, tag fills |
| Void | #090a0c | Deepest surface — hero gradients, modal backdrops |
| Charcoal Card | #111111 | Elevated card and panel surfaces |
| Obsidian Canvas | #303236 | Page background (dark sections) |
| Slate Edge | #4a4b50 | Hairline borders and dividers on dark |
| Iron Veil | #6b6c6d | Muted tag backgrounds, list fills, disabled washes |
| Smoke | #95979e | Icon strokes, secondary text, inactive controls |
| Ash | #a9a9aa | Tertiary text, subtle body borders in lists |
| Frost | #d1d1d1 | Light-mode borders, inputs, secondary CTA borders |
| Linen | #e5e5e7 | Light-mode surface tint, subtle dividers |
| Snow | #ffffff | Hairlines, dividers, input outlines, card edges on light; not a primary CTA |
| (MetaBrain card base) | #0e0e10 | Deep card base |
| (light section alt) | #f6f6f6 | Secondary light section (Linen surface level) |
| (light heading) | #050506 | Display heading color on light sections |
| (sunburst stops) | #ffaa81, #ffda9f | Radial sunburst gradient |
| (transition tint) | #d5d8f6 | Soft violet tint in white → violet section transition |

Surfaces: 0 Obsidian Canvas #303236 · 1 Void #090a0c · 2 Charcoal Card #111111 · 3 Light Canvas #ffffff · 4 Linen #f6f6f6.

## Typography
- **Inter** — all functional UI. Weights 300, 400, 500, 600, 700; sizes 10, 11, 12, 14, 15, 16, 18, 22, 24px; lh 1.00, 1.13, 1.25, 1.38, 1.50; tracking -0.04em large, -0.02em subhead, -0.01em body, normal caption. 500–600 emphasis, 400 body, 300 quiet metadata. Fallback: DM Sans, IBM Plex Sans.
- **Esbuild** — display only. Weights 400, 500, 600; sizes 28, 32, 80, 84px; lh 0.80, 0.90, 1.00; tracking -0.05em to -0.02em (tightest at 80–84px). Never below 28px. Fallback: Sora, General Sans.
- Scale: Minor Third 1.2 from 16px.

| role | size | line-height | tracking | token |
|---|---|---|---|---|
| Caption | 11px | 1.38 | -0.1px | `--text-caption` |
| Body | 14px | 1.5 | -0.14px | `--text-body` |
| Body Large | 16px | 1.5 | -0.16px | `--text-body-lg` |
| Subheading | 18px | 1.5 | -0.36px | `--text-subheading` |
| Heading Small | 22px | 1.25 | — | `--text-heading-sm` |
| Heading | 24px | 1.25 | -0.48px | `--text-heading` |
| Display Small | 32px | 1 | -1.6px | `--text-display-sm` |
| Display | 80px | 0.9 | -4px | `--text-display` |

## Spacing, radius, elevation
- Base unit 4px; density comfortable.
- Spacing: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 64, 160, 180, 240px.
- Section gap 96px · card padding 24px · element gap 12px.
- Radius: tags/buttons 9999px `--radius-full` · cards 12px `--radius-xl` · inputs 4px `--radius-md` · panels 30px `--radius-3xl`.
- Shadows: subtle `rgba(255,255,255,0.4) 0 0 0 6px` · sm `rgba(0,0,0,0.15) 0 4px 6px 0` · md `rgba(0,0,0,0.35) 0 4px 16px 0` · xl `rgba(0,0,0,0.5) 0 6px 25px 0`.

## Layout
- Max width 1200px.
- Full-bleed hero: vertical aurora beam, left-aligned headline, product screenshot floating bottom-right.
- Below: alternating dark and light bands; each section = heading + 3–4 column card grid; 96px gaps.
- MetaBrain section breaks grid with centered display heading and mixed-size card mosaic.
- Single transparent top bar becoming opaque on scroll.

## Components
- **Primary Pill Button** — #5683da fill, white text, Inter 14px 500, 9999px radius, 12px/24px padding; Electric Iris glow on hover; tracking -0.01em.
- **Ghost Pill Button** — transparent, 1px #303236 border on dark, white text, Inter 14px 500, 9999px, 10px/20px padding; solid white-on-charcoal on hover.
- **White Pill Button** — #ffffff fill, #090a0c text, 9999px, 12px/24px padding; hero "SEE IN ACTION →".
- **Feature Card** — #111111 or gradient-tinted, 12px radius, 24px padding, optional 1px #4a4b50 border; some with radial coral-to-amber glow behind edge.
- **MetaBrain Card** — #0e0e10 base, 12px radius, 16–20px padding, Esbuild 32px heading white; soft radial gradient bleed in corner.
- **Product Screenshot Frame** — dark UI in 12px radius frame with `rgba(0,0,0,0.5) 0 6px 25px` shadow, floating above aurora.
- **Top Navigation Bar** — transparent over hero, sticks with backdrop blur on scroll; logo left, Inter 14px nav center, "Star Us" + outlined "Sign In" + filled "Sign Up" pill right.
- **Aurora Hero Background** — on #090a0c: vertical linear gradient Electric Iris (~60% opacity) → Ember Pulse → white as narrow streak; radial warm-amber sunburst at base.
- **Tag/Chip** — 9999px, 4px/10px padding, Inter 11px 500; text in category color on category color at 12% opacity.
- **Stat Counter** — Esbuild 80px white numeral in 30px-radius circle with + button below.
- **Light Section Band** — #ffffff or #f6f6f6 bg, Esbuild heading #050506, Inter body #303236.
- **Kanban Board Preview** — mini dark kanban (BACKLOG, TO DO, IN PROGRESS) in 12px card with subtle shadow, real tags and avatars.
- **Inbox/Chat Panel** — dark panel, avatar circles, 12px radius, names Inter 14px 500 white, previews #a9a9aa; unread pills and status dots in iris blue.

Gradients:
- Aurora beam (hero only): linear-gradient(180deg, Electric Iris → Ember Pulse → white), narrow streak 15–25% page width; once per page.
- Radial sunburst (card glows): radial-gradient(#ffaa81 → #ffda9f → transparent), 200–400px, 30–50% opacity.
- Section transition (rare): linear-gradient(white → #d5d8f6).
- Never stack two full-opacity gradients in the same viewport.

## Motion
_not captured_

## Rules (do / don't)
**Do**
- 9999px radius for all buttons, tags, pills.
- Esbuild only for display (28px+).
- Pick background mode first: dark #303236 for product screens, white for editorial — never blend in one component.
- Electric Iris for the single most important action per screen.
- Ember Pulse as warm punctuation (tags, dots, gradient stops).
- Body 14px / 1.5 / -0.14px; compress proportionally to -4px at 80px.
- Alternate dark and light bands with 96px gaps.

**Don't**
- No sharp corners (0–8px) on buttons/tags.
- Don't pair Inter display weights with Esbuild.
- Don't use aurora as full-surface background.
- No third accent color.
- Don't use shadows for elevation on dark cards — prefer #4a4b50 borders and contrast.
- No Esbuild below 28px or in body copy.
- Check contrast when mixing white text / #303236 text across bands.

Imagery: hero is pure aurora gradient; all illustrations are real dark-mode product UI screenshots; icons monochrome line in #95979e or white. "The product is the photography."

## Steal this
- Tinted chips: text in category color on the same color at 12% opacity.
- A single narrow vertical gradient beam as the hero — dramatic but contained (15–25% width).
- Dark/light band alternation as page rhythm for a dense SaaS story.
- Real product UI (kanban, inbox) as the illustration system.
