---
source: https://styles.refero.design/ai-agents/agentic-ui-quality-checklist
type: checklist
---

# AI Generated UI Quality Checklist

A checklist gives you a practical way to review AI-generated UI before it ships. Use it to catch generic design, weak hierarchy, and broken responsive behavior.

## Review AI-Generated UI Like Product Work

The goal is not to make the output prettier. The goal is to make sure the interface communicates, behaves, and fits the product.

### What to check after an agent builds UI

AI-generated UI can look complete while hiding problems in hierarchy, spacing, contrast, states, mobile layout, and content fit.

A good review compares the result against a reference system and against the actual user task.

Use this checklist after generating a page, component, dashboard, form, pricing section, or landing page.

### Review the generated UI in layers

1. **Check hierarchy first** — Make sure the page makes the primary message, state, and action obvious before judging decoration.
2. **Check system consistency** — Scan type scale, color roles, spacing rhythm, component weight, and repeated patterns.
3. **Check real states and viewports** — Review mobile, loading, empty, error, hover, selected, disabled, and long-content states.

## Hierarchy — The first question is what matters most

If the user cannot tell what the screen is for, polishing the visual details will not fix the product problem.

Ask the agent to clarify hierarchy before asking for aesthetic changes.

## Responsive — Mobile is where weak UI breaks

Long headings, crowded buttons, oversized cards, and missing states often show up first on small screens.

A serious review includes at least one mobile viewport and real content lengths.

## Reference — Compare against the chosen style

A reference makes review less subjective. You can point to spacing, type, color, and component behavior that the output should match.

That gives the agent a clearer revision target than "make it better."

## Quick checklist (derived directly from the items above)

- [ ] Primary message, state, and action are obvious
- [ ] Type scale consistent
- [ ] Color roles consistent
- [ ] Spacing rhythm consistent
- [ ] Component weight and repeated patterns consistent
- [ ] Mobile viewport reviewed (at least one) with real content lengths
- [ ] Loading, empty, error states present
- [ ] Hover, selected, disabled states present
- [ ] Long-content state handled
- [ ] Output compared against the chosen reference style (spacing, type, color, component behavior)
