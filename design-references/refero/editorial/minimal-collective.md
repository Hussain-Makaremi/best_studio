---
name: Minimal Collective
source: https://styles.refero.design/style/94c15607-2f19-4dc4-9aec-2b40f28b754f
category: editorial
tags: [dark, black-white-only, single-typeface, weight-400-only, zero-radius, photography-mosaic, shadowless]
best_for: Art / design / culture publications wanting a pure black gallery wall where overlapping photography and huge tracked-tight type do all the work
---
# Minimal Collective
> "midnight gallery wall" — Obsidian canvas, PolySans 400 only, hierarchy purely by scale and negative tracking, 0px-radius overlapping photo mosaics, ghost-pill category badges.

## Color tokens
| token | hex | role |
|---|---|---|
| Obsidian | #000000 | Page canvas, primary surface, image card backgrounds, footer/header fields |
| Ash | #5a5a5a | Secondary structural elements, input borders, mid-tone dividers, muted UI chrome |
| Ghost White | #ffffff | Primary text, heading fills, hairline borders, badge outlines, link strokes |

Surfaces: 1 Obsidian Field #000000 (full-bleed page canvas) → 2 Ash Inset #5a5a5a (secondary controls, muted elements).

## Typography
- **PolySans** — weight 400 only (no bold, medium, or italic permitted). Fallback: Inter, Satoshi, General Sans.

| role | size | line-height | tracking |
|---|---|---|---|
| caption | 14px | 1.43 | 0px |
| body | 16px | 1.43 | 0px |
| subheading | 18px | 1.2 | -0.36px |
| heading-sm | 23px | 1.2 | -0.67px |
| heading | 27px | 1.2 | -0.86px |
| heading-lg | 32px | 1 | -1.18px |
| display | 50px | 1 | -2.2px |
| display-xl | 77px | 0.9 | -4.31px |

Principle: "hierarchy is created purely by scale and negative tracking, never by weight contrast".

## Spacing, radius, elevation
- Density comfortable (base unit not captured).
- Spacing: 5, 6, 7, 9, 14, 18, 45, 54, 144, 173, 216px.
- Section gap 144–173px; card padding 18px; element gap 14px.
- Radius: cards 0px, images 0px, badges 4.5px, buttons 4.5px.
- Elevation: none by design; spatial relationships emerge from photographic overlap, positional offset, and generous whitespace.

## Layout
- Full-bleed dark canvas, no max-width container.
- Hero: full first viewport with centered display headline overlapping a single photograph.
- Mosaic: overlapping image cards (10–30px overlap) in an asymmetric, layered composition.
- Lower section: 2-column editorial spread (photograph + metadata + title + excerpt).
- Navigation: top bar (logo + hamburger), minimal footer nav.

## Components
- **Top Navigation Bar:** persistent site header; full-width black bar, 14px vertical padding with logo.
- **Hero Headline (Overlapping Image):** full-viewport black canvas; headline 77px PolySans 400, Ghost White, line-height 0.9, -4.31px; text overlaps image; faint concentric arc linework (Ash, 1px stroke) as sole decoration.
- **Category Badge (Ghost Pill):** 1px Ghost White border, 4.5px radius, transparent bg, 5px/6px padding, 14px uppercase text.
- **Image Mosaic Card:** full-bleed photograph (0px radius, no border, no shadow); overlaps neighbors 10–30px; optional title overlay (23–32px PolySans 400 Ghost White top-left).
- **Article Card (Editorial Spread):** large photograph (0px radius, full-width) stacked with metadata row (category badges + date 14px) and title (27–32px PolySans 400), excerpt (16px PolySans 400); no container, border, or background.
- **Hairline Divider:** 1px Ghost White line, full container width, 0px radius.
- **Page Corner Footer Nav:** text links anchored bottom-left.
- **Scroll Indicator:** centered vertical scroll prompt.

## Motion
_not captured_

## Rules (do / don't)
Do:
- Obsidian #000000 as the sole page background; no surface tint, gradient, or panel color.
- PolySans 400 for every text; never bold or medium.
- Negative letter-spacing proportional to size: -4.31px @77px, -2.2px @50px, -1.18px @32px, scaling to 0 at body.
- 4.5px radius exclusively for badges/pills; image cards and blocks at 0px.
- Layer photographs directly on canvas, 0px radius, no drop shadow; let overlap create spatial relationships.
- Category labels as ghost pills: 1px Ghost White border, transparent fill, 5px/6px padding, 14px uppercase.
- Section gaps 144–173px; whitespace replaces dividers.

Don't:
- No chromatic color (no blue, red, green); strictly black, ash, white.
- No bold or semibold weights.
- No box-shadows, glows, or elevation effects.
- No rounded image cards; 0px radius for editorial tension.
- No centered or justified body text; left-align all copy.
- No filled buttons or badges; remain ghost/outlined.
- No icon decoration on badges, navigation, or scroll indicators.

## Imagery
Photography dominant: event documentation, art installations, architectural interiors, music studios, street/venue photography. Full-color, unfiltered, uncropped at 0px radius against the black canvas. Editorial-magazine treatment: overlapping mosaics, not uniform grids. No illustrations, abstracts, 3D renders, or icon systems.

## Steal this
- Three-color palette (black, ash, white) where photographs supply all chroma.
- Headline overlapping a photograph, sized 77px at 0.9 line-height and -4.31px tracking.
- Overlapping (10–30px) zero-radius image mosaic instead of a uniform grid.
- Ghost-pill category badges with 1px white outline.
