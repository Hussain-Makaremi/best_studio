# Project instructions

Read `RULES.md` (repo root, or `../RULES.md` when this starter lives inside the best_studio repo) BEFORE designing or coding anything here. It is the single source of truth for UI/UX, product design, code, SEO, performance and QA.

Non-negotiables (details in RULES.md):

1. Front-only static site: HTML + Tailwind CSS v4 + Alpine.js (CSP build). No backend, no runtime third parties.
2. CSS/JS sources are in `src/`, built by CLI into `static/assets/`. Images, fonts and all other static files live in `static/`.
3. HTML is hand-written, unminified, semantic, DOM order = tab order. No inline `<style>`, `style=""`, inline `<script>` (except JSON-LD), `on*=` handlers or `data:` URIs.
4. Before finishing any change run `npm run check`. It must pass with zero errors.
5. For every non-trivial decision, list at least 3 options from a software-engineer and a QA point of view, choose the best, and log it in `docs/decisions.md`.
