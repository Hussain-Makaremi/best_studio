---
source: https://styles.refero.design/ai-agents/tailwind-design-tokens
type: spec
---

# Tailwind Design Tokens for AI Agents

Use Tailwind design tokens for AI agents with real color palettes, type scales, spacing rules, radius systems, and component constraints.

## Use Tailwind tokens as agent instructions

When the token layer is clear, an agent is less likely to invent random colors, spacing, radii, and component treatments on every section.

### Why Tailwind prompts need token context

AI agents can write Tailwind quickly, but speed does not guarantee consistency. Without a token reference, the output often becomes a mix of one-off classes.

A Refero style gives the agent a palette, type direction, spacing rhythm, and component feel before it starts choosing utilities.

Use these references when you want Tailwind output that feels designed rather than assembled.

## Tailwind tokens are design decisions

A color class or spacing value is not neutral. It changes hierarchy, density, tone, and perceived quality.

Use real references to anchor those choices before the agent starts composing utilities.

## Ask for consistency across components

Buttons, cards, inputs, tabs, menus, and tables should share the same radius, border, shadow, and text logic.

A token-guided prompt gives the agent a better chance of keeping those elements aligned.

## Look for utility drift

After generation, scan for repeated arbitrary values, inconsistent text colors, random radii, and unrelated shadows.

Those are signs the agent used Tailwind as decoration instead of a design system.

## Prompt Tailwind work with tokens first

1. **Choose the reference system** — Pick a style with the density and surface treatment you need, then give the agent the extracted colors and typography.
2. **Name the token roles** — Tell the agent which values map to background, foreground, muted text, border, accent, radius, and spacing.
3. **Ask it to avoid one-off styling** — Require reusable token logic and consistent utility patterns instead of ad hoc classes for every element.

## Featured styles (partial list returned)

Steep, Awesomic, Calendly.com, Superhuman, Slack, monday.com (page lists 20+).
