# Best Studio static starter

HTML + Tailwind CSS v4 + Alpine.js (CSP build). Front-only, no runtime third parties, built with the CLI, deployed to DirectAdmin.
**All rules live in `RULES.md`** (best_studio repo root). Read it first.

## Quick start (VS Code + Live Server)
```bash
npm install
npm run build        # fonts, CSS, JS, partials, cache-bust, sitemap
npm run dev          # watch CSS/JS while you work
```
Right-click `index.html` → **Open with Live Server**.

## Before every commit
```bash
npm run check        # build + html-validate + stylelint + eslint + project rules
npm run audit        # optional locally: Lighthouse budgets (CI runs it on every push/PR)
```

## Deploy (DirectAdmin)
`npm run package` → upload `release/site.zip` to `public_html` → Extract. Or download the `site-<sha>` artifact from GitHub Actions.

## Where things go
| What | Where |
|---|---|
| Pages | `index.html`, `<slug>/index.html` |
| Shared header/footer | `partials/*.html` → `npm run sync` |
| CSS source / tokens | `src/css/input.css` → `static/assets/css/app.css` |
| JS source (Alpine components) | `src/js/` → `static/assets/js/app.js` |
| Fonts | `static/fonts/` (drop licensed `IRANYekanX-Variable.woff2` here, then rebuild) |
| Images | originals in `static/images/src/` → `npm run images` → `static/images/` |
| Site settings | `site.config.json` |
| Decisions | `docs/decisions.md` |
