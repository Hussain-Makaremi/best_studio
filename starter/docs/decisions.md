# Decision log

Format (one entry per non-trivial decision, newest first). See RULES.md §0.3.

```
## YYYY-MM-DD - Short title
Context: what forced the decision.
Options:
  A. ...  (SWE: ... / QA: ...)
  B. ...
  C. ...
Chosen: X, because ...
Trade-off accepted: ...
Revisit when: ...
```

## 2026-09-29 - Starter foundations
Context: front-only site, DirectAdmin hosting, VS Code + Live Server, no runtime third parties.
Options:
  A. Bundler (Vite) with HTML templating. SWE: best DX / QA: dev server differs from Live Server, HTML no longer what is deployed.
  B. Tailwind CLI + esbuild + plain HTML with generated partials. SWE: tiny toolchain, output == source / QA: partial drift must be checked (done by `sync --check`).
  C. Static-site generator (Eleventy/Astro). SWE: real includes and collections / QA: extra build layer, violates "write HTML directly".
Chosen: B. Trade-off accepted: header/footer are copies kept in sync by a script. Revisit when a project passes ~30 pages or needs content collections.
