---
source: https://styles.refero.design/design-md/design-md-specification
type: spec
---

# DESIGN.md Specification for AI Design Systems

> Understand the DESIGN.md specification for AI design systems: tokens, markdown rationale, component rules, accessibility, and agent workflows.

## How the DESIGN.md Specification Helps Agents

The format matters because it combines values an agent can parse with prose that explains when and why to use them.

## What belongs in the specification

A useful DESIGN.md can include colors, typography, spacing, radii, elevation, component patterns, icons, accessibility notes, layout guidance, and usage rules.

The structured layer gives the agent exact values. The markdown layer gives the agent decision-making context.

Together they work better than raw tokens alone because agents need purpose, not just values.

## Tokens tell the agent what exists

Exact values reduce randomness. The agent should know which colors, fonts, spacing values, and radius options are available.

That prevents the model from inventing a new visual system in every component.

## Markdown tells the agent when to use them

A token named primary is not enough. The agent needs to know where primary belongs and where it should be avoided.

Human-readable rationale is the part that turns values into design decisions.

## A specification creates a review target

After generation, reviewers can compare the output against the file instead of debating taste from scratch.

That makes AI-assisted design more repeatable.

## Structure a DESIGN.md file

1. **Start with core tokens** — Define the palette, typography, spacing, radius, and elevation rules that should stay stable.
2. **Add component guidance** — Explain buttons, forms, cards, navigation, tables, and feedback states in plain language.
3. **Add usage rules** — Tell the agent when to use or avoid certain colors, surfaces, density, and interaction patterns.
