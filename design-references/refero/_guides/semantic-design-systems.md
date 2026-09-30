---
source: https://styles.refero.design/design-md/semantic-design-systems
type: spec
---

# Semantic Design Systems for AI Agents

Semantic design systems explain what a design value is for. That purpose matters when an AI agent has to choose how to build UI.

## AI Agents Need Semantic Design Decisions

A semantic design system turns raw values into roles, rules, and constraints an agent can apply during generation.

### Why semantics matter for AI-assisted design

A color value alone does not tell an agent whether it is for primary actions, muted backgrounds, danger states, or data visualization.

Semantic roles turn those values into decisions the agent can use in new contexts.

DESIGN.md is a natural place to document those roles because it can pair structured tokens with plain-language guidance.

### Prompt with semantic roles

1. **Name values by purpose** — Use roles like background, surface, foreground, muted, border, accent, success, warning, and danger.
2. **Explain usage rules** — Tell the agent when each role should be used and where it should not appear.
3. **Review for role drift** — Check whether generated UI uses semantic roles consistently across components and states.

### Semantic tokens are easier for agents to apply

A raw hex value is just a value. A semantic token explains intent.

That intent helps the agent choose correctly when the layout changes.

### Components need semantic states

Buttons, forms, cards, alerts, and navigation all need roles for normal, hover, focus, disabled, and error states.

Documenting those roles reduces inconsistent generated UI.

### Markdown can explain why the roles exist

The structured token layer gives exact names and values.

The markdown layer explains the product meaning behind them.

## Style references listed on the page

- Dala ("Your workplace has the answer. Just ask Dala for it.") — constellation floating on black…
- Apple (España) — Cathedral of white space with…
- Mercury — Alpine banking at blue hour
- Linear — midnight precision instrument
- ElevenLabs — Warm cream editorial with…
- Steep — serif analytics on warm paper
- ORYZO AI — Darkroom product editorial. A lone…
- monopo saigon — Liquid iridescence behind…
- Ui Ui — clinical blueprint on frosted paper
- Authkit — Frosted glass cathedral at midnight
- Awesomic — editorial zinc grid with…
- Auros — Abyssal terminal with…
- Apple — white room with a single blue…
- Monad — editorial tech journal on warm…
- General Intelligence Company — Literary journal beside a bonfire
- AI for Business — Brutalist editorial showroom on…
- Ventriloc — Editorial data observatory on warm…
- Cursor — Warm parchment atelier lit by…
- Hyperstudio — blueprint scratched into obsidian…
- Seline Analytics — Quiet analyst's desk on warm paper
- Stripe — indigo-ink ledger on frosted glass
- Origin Financial — midnight gallery of quiet wealth…
- Dub — frosted link dashboard on rice…
- Duolingo — Playful classroom mascot on white…
