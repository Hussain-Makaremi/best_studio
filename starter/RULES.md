# RULES.md — Best Studio design + engineering rules

Single source of truth for **UI/UX, product design, front-end code, SEO, performance and QA**.
Every design and every line of code produced for any project must follow this file.
Stack: **HTML + Tailwind CSS v4 + Alpine.js**, front-only, built with the CLI, deployed to DirectAdmin.

Keywords **MUST / MUST NOT / SHOULD** are used in their RFC 2119 sense.
Rule IDs in `[brackets]` are enforced by `starter/scripts/check-rules.mjs` (run by `npm run lint`).
Language: this file is English for precision. Chat replies and client-facing copy follow the user's language (Persian → natural, fluent Persian).

---

## 0. How to work (read first)

### 0.1 Order of precedence
1. The user's explicit instruction in the current message.
2. This file.
3. The project's `docs/design-system.md` (project-specific tokens; may tighten this file, never loosen accessibility or performance rules).
4. Reference libraries (`design-references/`) — inspiration only.

### 0.2 Agent protocol for every task
1. Read this file and the project's `docs/design-system.md` + `docs/decisions.md` (if present).
2. Restate the task as: **user, job-to-be-done, primary action, constraints**. If the product, audience or primary job is unknown, propose one concrete guess and continue (ask only when a wrong guess is expensive).
3. For design work: complete §2 before writing any code.
4. For every non-trivial decision apply §0.3.
5. Build. Then run `npm run check` (build + all linters). Zero errors required.
6. Verify in a real browser (screenshots at 360, 768, 1440; RTL; dark; keyboard). A page you have not looked at is not done.
7. Report: what changed, decisions taken (one line each), what was NOT verified.

### 0.3 Decision protocol (mandatory)
For **every** problem you are about to solve (architecture, component, layout, tooling, SEO tactic, deployment step):

1. Think as **Software Engineer** *and* **QA** separately.
2. List **at least 3 options** (A/B/C). One may be "do nothing/remove it".
3. Score each on: fit with hard constraints (§1), risk & reversibility, testability, performance, accessibility, maintenance cost.
4. Implement the best one. Say why in ≤3 lines. Record it in `docs/decisions.md`:

```
## YYYY-MM-DD - Title
Context / Options: A (SWE: … / QA: …), B (…), C (…)
Chosen: X because …   Trade-off accepted: …   Revisit when: …
```

Trivial choices (a margin value, a label) do not need an ADR; anything that changes structure, dependencies, tokens, URLs or the build does.

### 0.4 Honesty rules
- **Never fabricate** data in a real document or page: no invented client facts, statistics, testimonials, logos, certifications, prices, addresses. Use clearly marked placeholders (`[نام مشتری]`, `Lorem`-free realistic *structure* with `TODO:` markers) and list them in the report.
- Say plainly what was not tested (e.g. screen reader, real device).
- Roast weak ideas when asked: name the problem, the evidence and the fix.

---

## 1. Context and hard constraints

| # | Constraint | Consequence |
|---|---|---|
| C1 | **Front-only.** No backend, no database, no server code, no PHP. | Forms/contact use links (§4.7). Data = static files or the client's existing API called with `fetch` from `src/js/api/`. |
| C2 | HTML + Tailwind + Alpine only. Build via **CLI** (`package.json`). | No bundler frameworks (Vite/Next/Astro). esbuild is allowed only to bundle `src/js`. |
| C3 | **Zero runtime external dependencies.** Fonts, CSS, JS, icons, images all self-hosted. | No CDN, no Google Fonts, no analytics/chat/embed scripts unless the user explicitly approves and it is logged (§0.3). CI/dev tooling may use npm. |
| C4 | **No embedded code.** No inline `<style>`, `style=""`, inline `<script>`, `on*=""`, `javascript:`, `data:` URIs. | Only exception: `<script type="application/ld+json">` (a data block, not code). `[E-01]` |
| C5 | HTML is **hand-written, unminified**, DOM order = **tab order**. | `[H-01]` `[A-03]` `[A-07]` |
| C6 | Dev environment: **VS Code + Live Server** (`ritwickdey.LiveServer`, root = project root). | Every URL is root-absolute (`/static/...`); every page is `<slug>/index.html` so clean URLs work with no rewrite rules. |
| C7 | Deploy: **DirectAdmin** (Apache/LiteSpeed, `.htaccess` honored), served from domain root. | Ship `release/site.zip`; no Node on the server. |
| C8 | Quality bar: Google **Core Web Vitals "Good"**, **WCAG 2.2 AA**, Lighthouse 100 for a11y / best-practices / SEO, ≥95 performance. | Enforced in CI (`lighthouserc.json`). |

Static folder rule (resolves “css/js in assets, everything static in static”):
`static/` holds **all** static files; `static/assets/css` and `static/assets/js` hold built CSS/JS; images in `static/images`, fonts in `static/fonts`.

---

## 2. Product design process

Do these in order. Skipping steps is how generic, templated work happens.

### 2.1 Workflow and deliverables

| Step | Output (saved in `docs/`) | Done when |
|---|---|---|
| 1 Brief | `brief.md`: product, audience, **primary job**, success metric, constraints, content available, competitors | One sentence: “X helps Y do Z so that W.” |
| 2 IA | Sitemap + URL plan + nav model + content inventory | Every page has one purpose, one primary action, one target query (SEO) |
| 3 Flows | User flows per role (Mermaid or FigJam); include error/empty/permission branches | Each flow has entry, success, failure, recovery |
| 4 Wireframes | Low-fi, mobile first, content-real (no lorem) | Hierarchy readable in grayscale |
| 5 Design system | `design-system.md` from §2.5 (tokens + components + dials) | All values named; no raw hex/px in later steps |
| 6 Hi-fi + states | Every screen in: default, hover, focus, active, disabled, loading, empty, error, success, long-content, RTL, dark | State matrix complete |
| 7 Build | Code per §5 | `npm run check` green |
| 8 QA | §8 checklist + evidence | Definition of Done met |

### 2.2 Design thinking rules
- **One primary action per screen**, others visibly subordinate.
- Hierarchy through size, spacing and contrast — never color alone. If everything is bold, nothing is.
- Every element must justify its existence; remove until it breaks, then restore the last thing.
- Same component = same look and behavior everywhere. Found an inconsistency? Fix the system, don't invent a third variant.
- Every change needs a design reason tied to hierarchy or task success (“CTA → brand color to separate it from secondary actions”, not “make it blue”).
- Design for the feeling: calm, confident, responsive; motion explains cause and effect.
- Systems thinking: design the states, roles and edge cases of the *system*, not just the happy-path screen.

### 2.3 Using the reference libraries (`design-references/`)
- `refero/<category>/*.md` — ~110 real-world design systems (tokens, type, components, rules) grouped by category; `refero/_guides/` — DESIGN.md spec/template, UI quality checklist, prompts per page type, font pairings.
- `uiuxpro/styles.md` — 88 named UI styles with best-for / avoid-for; `uiuxpro/font-pairings.md`.
- Procedure: pick **2–3 references** whose *product type and tone* match (§2.4) → read their “Steal this” + tokens → write down **transferable moves** (e.g. “hairline borders instead of shadows”, “one accent reserved for CTAs”) → adapt to this brand.
- **Never clone** a brand: no copying another company's palette + typeface + layout combination, logo, wordmark or mascot as the client's identity. Ideas yes, replicas no.
- Web fonts in those files point at Google Fonts/CDNs: **self-host** what you use (C3) and verify the license.

### 2.4 Style selection (match style to product; don't mix randomly)

| Product / project type | Lean toward | Avoid |
|---|---|---|
| Corporate / holding site, catalog | Trust & Authority, Swiss/minimal, Editorial grid; refero: `clean-saas`, `minimal`, `editorial` | Glass/neon/brutalist gimmicks, autoplay heroes |
| CRM / ERP / admin / ticketing | Data-dense dashboard, Enterprise SaaS, Fluent/Polaris-style restraint; refero: `productivity`, `devtools`, `fintech` | Bento/parallax, low-contrast “soft UI”, decorative motion |
| Health / wellness subscription | Accessible & Ethical, Organic/soft, high-contrast calm; large type, clear progress | Dark-patterns, dense UI, gamified pressure |
| Booking / space / marketplace | Product-led, photography-first; refero: `ecommerce` | Hidden prices/policies, multi-step without progress |
| AI-native tool | AI-Native UI: conversational + explicit state (thinking, streaming, failed, edited) | Glow-on-everything, hiding uncertainty |
| Agency / portfolio | Editorial grid, exaggerated minimalism, kinetic type (sparingly) | Motion that hurts LCP/INP |
| Fintech / trading | Calm dark-capable, tabular figures, strong number hierarchy; refero: `fintech`, `dark-mode` | Red/green as the only signal, animated numbers that hinder reading |

**Anti-generic checklist** (defaults to avoid unless the brief demands them): cream background + high-contrast serif + terracotta accent; near-black + single acid accent; identical rounded cards with the same soft shadow; gradient washes as decoration; tracked ALL-CAPS eyebrow over every heading (all caps is also poor for Persian); `01 / 02 / 03` numbering on non-sequences; one word of a headline in another color; fade-up on every section; `→` on every link. Spend boldness in **one** place; keep the rest quiet.

**Design dials** (record per project in `design-system.md`, 1–10): `variance` (centered → asymmetric), `motion` (subtle → choreographed), `density` (spacious 24–96px scale → dense 8–32px scale). Marketing pages: density ≤4; dashboards: density ≥7.

### 2.5 Project design-system file (`docs/design-system.md`) — required
Contains: brand idea (1 line) · dials · color tokens (semantic names, light + dark, contrast ratios) · type scale + font stack · spacing scale · radius · elevation · z-index · motion tokens · breakpoints · component inventory with all states · icon set + stroke width · imagery rules · tone of voice · page-type patterns. Tokens defined here are the **only** values allowed in code (`@theme` in `src/css/input.css`).

---

## 3. Playbooks derived from Best Studio's projects

Derived from project summaries in the user's memory (Amn Negar Partak CRM, BodyYar, Packtory, Zarvan Holding website, Partak coworking, Best Studio site builder, Zhaket copy). Repos/Figma files were not opened; refine these when they are shared.

| Project pattern | Rules to apply |
|---|---|
| **Multi-role systems** (CRM: Admin / Expert / Customer; BodyYar: Admin / Patient / Doctor) | Draw one flow per role first; keep a **role × screen × permission matrix**; same components across roles, different density; show role context in the UI; every action has a visible permission-denied state. |
| **Ticketing / SLA (ITIL)** | Ticket lifecycle as an explicit state machine (New → Assigned → In progress → Waiting → Resolved → Closed/Reopened); SLA timers use text + icon + color (never color alone), tabular numbers, absolute *and* relative time; filters and sort persisted in the URL; bulk actions with undo. |
| **Subscription / health platform** | Progress and next-step always visible; long sessions save state; video is lazy, `preload="none"`, poster image, captions; medical/health copy never overpromises. |
| **Booking flows** (Partak coworking: 4-step booking) | Step indicator with back-navigation; price + cancellation policy visible before commitment; availability shown by text + icon + color; a summary before confirm; confirmation states are copyable/printable. |
| **AI-native products** (Packtory) | Model async states explicitly: idle → generating (progress/cancel) → result → edited → failed (retry with reason); label AI output; keep the human in control (accept/edit/regenerate); never hide latency behind a blank screen. |
| **Corporate website + catalog** (Zarvan) | IA first; trust blocks (about, certifications *only if real*, contact routes, address/map as link); catalog = list → filter → detail with structured data; every page has one CTA; inquiry via tel/mail/Telegram/WhatsApp links (C1). |
| **Site builder / modular blocks** | Design blocks as components with variants, not pages; each block documents content limits (min/max text, image ratios) and its empty/long-content state. |
| **Sales landing pages** | One promise, proof, one CTA; benefit-first Persian copy in plain, youth-appropriate tone; no dark patterns or fake urgency. |

Front-only note: a CRM/dashboard built here is a **front-end** for an API that exists elsewhere (or a static prototype using JSON fixtures in `static/data/`). Put all network calls in `src/js/api/` behind one small interface so the backend can be swapped without touching components.

---

## 4. UI / UX rules

Priority order — when rules conflict, the lower number wins: **1 Accessibility → 2 Touch/interaction → 3 Performance → 4 Style consistency → 5 Layout/responsive → 6 Type & color → 7 Motion → 8 Forms & feedback → 9 Navigation → 10 Data/charts.**

### 4.1 Accessibility (WCAG 2.2 AA — critical)
- Text contrast ≥ **4.5:1** (large text ≥ 18.66px bold / 24px ≥ **3:1**); UI components, icons that carry meaning, focus rings, input borders ≥ **3:1**. Check light **and** dark separately.
- Use semantic HTML before ARIA: `button` for actions, `a[href]` for navigation, `label`, `table`, `nav`, `main`, `header`, `footer`, `ul/li`. Never `div/span` with click handlers `[A-02]`.
- One `<h1>`, sequential headings without skips `[S-06]` `[S-07]`; landmarks `header/nav/main/footer`; `<main id="main">` `[A-06]`.
- **Skip link is the first focusable element** and targets `#main` `[A-07]`. Sticky headers must not hide the focused element (`scroll-padding-block-start`, WCAG 2.4.11).
- **Tab order = DOM order = visual order** (also in RTL). No `tabindex > 0` `[A-03]`. Avoid `order-*`, `flex-*-reverse`, absolute repositioning that reorders content `[A-04]`.
- Visible focus on every interactive element: `:focus-visible`, 3px outline, offset ≥2px, ≥3:1. Never `outline: none` without a replacement.
- Every meaningful image has `alt`; decorative → `alt=""` `[A-01]`. Icon-only controls have an accessible name. Decorative icons `aria-hidden="true"`.
- Never convey information by color alone (add text/icon/pattern). Support `prefers-reduced-motion` (in base CSS), `prefers-color-scheme`, text zoom to 200% and reflow at 320px/400% without horizontal scroll.
- Don't disable zoom `[A-05]`. Don't block paste. Any drag/swipe/pinch needs a single-pointer or keyboard alternative. Auto-moving content >5s needs pause/stop.
- Dynamic updates (toasts, validation) use `aria-live="polite"` (`role="alert"` for errors) and **never steal focus**. After route/section change, move focus to the new heading.
- Language: `<html lang="fa">`; mark foreign passages with `lang`.

### 4.2 Touch and interaction
- Interactive targets ≥ **44×44 CSS px** (our standard; WCAG 2.2 minimum is 24), ≥ 8px gap between targets. Extend hit areas with padding, not by enlarging visuals.
- Never hover-only interactions; hover is an enhancement. Give press/active feedback within 100 ms.
- Disable + show busy state on async buttons (`disabled`, `aria-busy="true"`) to prevent double submit.
- Use `touch-action: manipulation` on controls; `overscroll-behavior: contain` in modals/drawers.
- Destructive actions: confirmation or **undo window**; danger color + separation from primary actions.
- `cursor: pointer` only on genuinely clickable elements.

### 4.3 Layout and responsive
- **Mobile-first**, then scale up. Test widths **360, 390, 768, 1024, 1440**; Tailwind breakpoints 640/768/1024/1280/1536. No horizontal scroll at any width `[A-05]`.
- Spacing on a **4px base** scale (Tailwind default). No arbitrary `[13px]` values unless logged.
- Container: `.container-page` (max 72rem, 1rem → 2rem gutters). Section rhythm tiers (e.g. 16/24/32/48/64/96) chosen by hierarchy.
- Use `min-h-dvh` not `100vh`; respect `env(safe-area-inset-*)` for full-bleed fixed bars; reserve padding for fixed/sticky bars.
- Prefer grid/flex over JS measurement; use container queries for component-level responsiveness.
- Content priority on mobile: core content first, secondary folded (disclosure), never removed for SEO reasons (mobile-first indexing sees mobile HTML).
- Use **logical properties** everywhere (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `border-s`) so RTL/LTR both work. Physical `ml-/pl-/left-/text-left` are forbidden unless the layout is direction-independent (e.g. a centered gradient).
- Define a z-index scale in tokens (`--z-sticky 40`, `--z-overlay 100`, `--z-toast 1000`); no `z-[9999]`.

### 4.4 Typography
- Body ≥ **16px** (Persian: **17–18px** recommended — Persian glyphs render optically smaller). Scale: 12 · 14 · 16 · 18 · 24 · 32 · 40 · 56 (adjust per project; document it).
- Line-height: **Persian body 1.8**, Latin body 1.5–1.6, headings 1.3–1.4. Line length: Latin 60–75 chars, **Persian 40–65 chars** (`max-w-prose`).
- One family or two clearly distinct ones. Weight carries hierarchy (400 body, 500 labels, 600–700 headings); Persian headings rarely need 800+.
- No letter-spacing on Persian text; no italics for Persian; no ALL-CAPS for Persian; no text-transform tricks.
- `text-wrap: balance` on headings, `pretty` on paragraphs (in base CSS). Long tokens (URLs/IDs): `overflow-wrap: anywhere` + `min-w-0` on flex parents; never `break-all` on prose.
- `font-variant-numeric: tabular-nums` for prices, timers, table columns.
- Prefer wrapping over truncation; if truncating, provide the full text (tooltip/expand) and keyboard access.

### 4.5 Color and theming
- **Semantic tokens only** (`bg`, `surface`, `ink`, `muted`, `line`, `brand`, `danger`, `success`, …) — raw hex/`bg-blue-500` in HTML is forbidden. Tokens are CSS variables switched by `prefers-color-scheme`; components don't use `dark:`.
- Design light and dark **together**. Dark mode uses desaturated/lighter tonal variants, not inverted colors; re-check every contrast pair. `color-scheme: light dark` is set on `:root`.
- One brand/accent color reserved for the primary action and active state. Functional colors (error/success/warning) always paired with icon or text.
- Elevation via a small consistent scale (borders and/or one shadow token); no random shadow values. Blur only where it means “background dismissed”.
- Icons: one set, one stroke width, one filled/outline convention per hierarchy level, inline **SVG files in `static/images/icons`** (no emoji as structural icons, no icon fonts, no CDN).

### 4.6 Motion
- Motion must express cause and effect (opening, moving, confirming). Non-user-triggered motion: sparse, one orchestrated moment at most.
- Only animate `transform` and `opacity`; never `transition: all`; never animate width/height/top/left. No layout shift from animation.
- Tokens: fast 150ms (hover, toggles) · base 200ms · slow 300ms (modals/sheets). Enter ease-out, exit ease-in and **shorter** (~60–70% of enter). Micro-feedback ≤100ms.
- Interruptible; never block input; stagger lists 30–50ms/item max; respect `prefers-reduced-motion` (global override exists in base CSS — don't fight it).
- Carousels/auto-rotating content need pause controls and stop on focus. Parallax/scroll-jacking: avoid.

### 4.7 Forms and feedback
- Visible `<label for>` per field (placeholder is not a label). Required marked in text (“(اجباری)”), not color only.
- Correct `type`, `inputmode`, `autocomplete`, `name`. Emails/phones/codes: `dir="ltr"`, `spellcheck="false"`.
- Validate **on blur/submit**, not per keystroke. Error text: cause + how to fix (“ایمیل کامل نیست. نمونه: name@example.com”), placed below the field, linked with `aria-describedby`, field `aria-invalid="true"`. After failed submit, focus the error summary (or first invalid field).
- Submit: busy state → success/error state; keep entered data on error; warn before leaving with unsaved changes; long forms autosave drafts (`localStorage` per-viewer only, wrapped in try/catch).
- Empty states explain what to do next; success states confirm briefly; toasts auto-dismiss in 3–5s, never hold focus, never contain the only copy of important info.
- **No backend (C1) — how contact/inquiry works** (decision already made, revisit only with the user): `tel:`, `mailto:` (with subject/body prefilled), Telegram/WhatsApp deep links, or the client's existing API. A form that posts to a server requires explicit approval + ADR (options: client API · DirectAdmin-hosted script = a backend · third-party form service = external dependency).
- Never invent success: a form must not show “sent” unless a real transport succeeded.

### 4.8 Navigation
- Primary nav ≤ 7 items; current page marked (`aria-current="page"`, generated by `sync`); same placement on every page; predictable back behavior; every state reachable by **URL** (filters, tabs, pagination in query params).
- Breadcrumbs for hierarchies ≥ 3 levels (with `BreadcrumbList` JSON-LD). Footer repeats critical links. Search reachable in ≤1 step for catalogs > 30 items.
- Modals are not navigation. Overflow menus rather than cramming. Unavailable destinations explain why.
- Links: `a[href]` (Cmd/Ctrl-click works); external links `rel="noopener"` when `target="_blank"` `[E-03]`; link text describes the destination (“دانلود کاتالوگ (PDF، ۲ مگابایت)”, not “اینجا”).

### 4.9 States (every component and page)
Design and test: default · hover · focus-visible · active · disabled · loading (skeleton for >1s, spinner only for short waits) · empty · error (with recovery) · success · partial data · offline/slow · permission denied · very long content · very short content · RTL · dark · zoomed 200%.

### 4.10 Content and copy
- Copy is design. Write from the user's perspective in plain words; sentence case in English; natural, conversational Persian (avoid literal translation).
- Buttons say what happens (“ذخیره تغییرات”, not “ارسال”); one action = one name across the whole flow (button “انتشار” → toast “منتشر شد”).
- Errors never blame, never apologize vaguely, always say what to do. Empty screens invite action.
- Numerals for counts. Dates/currency via `Intl` (see §4.12). No fake urgency, no dark patterns.
- Real content or explicit placeholders (§0.4). Lorem ipsum is banned in deliverables.

### 4.11 Data, tables and charts
- Chart type follows data (trend → line, comparison → bar, part-to-whole ≤5 slices). Legends visible, direct labels for small sets, axes with units, subtle gridlines.
- Color-blind-safe palettes; add pattern/shape/label — never red/green alone. Provide a **table alternative** and a one-sentence text summary for each chart. Data text ≥4.5:1, marks ≥3:1.
- Tables: real `<table>` with `<caption>`/`th scope`; sortable columns expose `aria-sort`; tabular numbers; sticky header only if it doesn't hide focus; mobile = stacked cards or horizontal scroll container with visible affordance.
- Empty/loading/error state for every chart. Respect reduced motion for chart entrances. Aggregate large datasets instead of drawing thousands of points.

### 4.12 RTL and Persian
- `<html lang="fa" dir="rtl">` on every page `[H-03]`. Never hard-code `left/right`; use logical properties (§4.3).
- Mirror directional icons (arrows, chevrons, progress, “back/next”); don't mirror logos, media controls' play glyph, clocks, or numerals.
- Mixed-direction strings (emails, URLs, phone numbers, codes, English brand names) get `dir="ltr"` or `<bdi>`; keep punctuation from jumping with isolation.
- Use Persian letters **ی ک** (never Arabic ي ك), ZWNJ (U+200C) in compound words (می‌خواهم، خانه‌ها), Persian punctuation « » ، ؛ ؟ and `…`.
- Digits: Persian digits (۰–۹) for reading content (`Intl.NumberFormat('fa-IR')`); Latin digits inside inputs, codes, URLs and data attributes. Be consistent per project and document the choice.
- Dates: Jalali via `Intl.DateTimeFormat('fa-IR-u-ca-persian')`; show Gregorian only when the audience needs it. Currency: state Toman vs Rial explicitly and format with thousands separators.
- Search/filter must normalise Persian input (ی/ي، ک/ك، ZWNJ, digits) on the client.
- Fonts: **IRANYekanX preferred** (verify its license permits web embedding), **Vazirmatn (OFL) as the shipped, self-hosted fallback** (`starter` does this). Stack: `"IRANYekanX","Vazirmatn",system-ui,Tahoma,sans-serif`.
- Test with real Persian content, long words, mixed English, numbers, and both `dir` values.

---

## 5. Code rules

### 5.1 Repository layout (starter)
```
/                       deployed root (public_html)
├─ index.html           home
├─ 404.html
├─ about/index.html     every page = <slug>/index.html  (clean URLs, Live Server-friendly)
├─ partials/            header.html, footer.html  (sources for generated copies)
├─ src/
│  ├─ css/input.css     Tailwind entry: tokens (@theme), base, ≤12 component classes
│  └─ js/               app.js (entry) + components/*.js (Alpine.data) + api/*.js
├─ static/              ALL static files (deployed)
│  ├─ assets/css/app.css   built (committed)      assets/js/app.js  built (committed)
│  ├─ fonts/  images/  images/icons/  data/  docs/ (downloads)
│  └─ images/src/       originals (NOT deployed)
├─ scripts/             build & rule scripts (NOT deployed)
├─ docs/                brief.md design-system.md decisions.md
├─ .github/workflows/ci.yml   .vscode/   .htaccess   robots.txt   sitemap.xml (generated)   site.webmanifest
├─ site.config.json     siteUrl, lang, dir, locale, themeColor (single source for scripts)
└─ package.json  eslint.config.js  .stylelintrc.json  .htmlvalidate.json  lighthouserc.json  .nvmrc  .editorconfig
```
Built `static/assets/*` **are committed** so DirectAdmin can `git pull` or accept a zip with no Node. CI verifies/rebuilds them.

### 5.2 HTML
- Hand-written, **unminified**, 2-space indent, lowercase, lines ≤200 chars, `<!doctype html>` first `[H-01]` `[H-02]`. No template engines, no runtime includes.
- `<head>` order: `charset` (first) → `viewport` → `title` → `description` → `robots` → `theme-color` → canonical/icons/manifest → OG/Twitter → font preload → **one** stylesheet → `script defer` → JSON-LD `[H-04]` `[H-05]` `[P-03]` `[P-04]` `[P-05]`.
- Body order = visual order = tab order: skip link → header/nav → `main` → footer.
- Shared header/footer live in `partials/` and are copied between `<!-- partial:name -->` markers by `npm run sync`; **never edit inside markers in a page**. `--check` fails CI when stale.
- Classes: utilities in HTML; the small component layer (`btn`, `card`, `field-*`, `container-page`, `skip-link`, `link`) for repeated patterns. Order utilities: layout → box → typography → color → state.
- IDs are unique, kebab-case; `data-*` for behavior hooks; no styling by ID.
- Images: always `alt`, `width`, `height`, explicit `loading`, `decoding="async"`, responsive `srcset/sizes`/`<picture>` (AVIF → WebP → JPEG) `[A-01]` `[P-01]` `[P-02]`.
- Internal links are root-absolute (`/about/`, `/static/…`); verified to exist `[L-01]` `[L-02]`.
- No `<table>` for layout, no `<br>` for spacing, no empty elements for spacing, no `<center>`/`<font>`, no `target=_blank` without `rel="noopener"`.

### 5.3 Tailwind CSS v4
- Config is **CSS-first** in `src/css/input.css` (`@theme inline`), sources declared with `@source`; built by `@tailwindcss/cli` to `static/assets/css/app.css`. No `tailwind.config.js`, no CDN play script.
- Tokens only via `@theme`; utilities are semantic (`bg-surface text-ink border-line`). Raw palette classes and arbitrary values are exceptions to be logged.
- Mobile-first variants (`md:` up); logical utilities (`ms-`, `pe-`, `start-`); `motion-reduce:` respected; `focus-visible:` not `focus:`.
- Class names must be **statically detectable** — never build them with string interpolation (`bg-${x}-500`).
- `@apply` only inside `@layer components` and only for patterns repeated ≥3× across pages (limit ≈12 classes) — reason: there is no template engine, so a tiny component layer beats copy-pasted class strings.
- No `!important` except `[x-cloak]`/`scripting: none` display rules.
- Budget: **CSS ≤ 25 KB gzip** `[P-06]`.

### 5.4 Alpine.js (CSP build)
- Use **`@alpinejs/csp`** so the strict CSP works (no `unsafe-eval`). Consequence: **no inline logic in attributes**. Allowed in HTML: `x-data="name"`, `@click="method"`, `:attr="property"`, `x-show="property"`, `x-ref`, `x-cloak`, `x-transition`.
- All logic lives in `src/js/components/*.js`, registered with `Alpine.data('name', fn)` in `src/js/app.js`. Derived values are **getters** (e.g. `get expanded() { return this.open ? 'true' : 'false' }` for `aria-expanded`).
- Alpine enhances; **content must be in the HTML** for crawlers and no-JS users. Collapsed content uses `x-show` (present in DOM), never `x-if`/`x-html` for indexable content. Navigation must work without JS: base CSS has `@media (scripting: none)` fallbacks.
- Keep components small, one file each, no global state except `Alpine.store` when truly shared. Every interactive component manages `aria-expanded/controls`, Escape to close, and focus return.
- Budget: **JS ≤ 50 KB gzip** total `[P-06]`. Alpine is bundled into `app.js` (no separate vendor request).

### 5.5 JavaScript
- ES2022 modules in `src/js`, bundled by esbuild (`iife`, minified) into one file. ESLint flat config, `eqeqeq`, `no-var`, `prefer-const`, `no-eval`.
- No `innerHTML` with dynamic data (XSS); use `textContent`/DOM APIs. No `document.write`. No layout thrash (batch reads/writes). Debounce/throttle scroll/resize/input.
- `fetch` only to same-origin endpoints (CSP `connect-src 'self'`); centralise in `src/js/api/`; handle loading/error/timeout with retry.
- Wrap `localStorage`/`sessionStorage` in try/catch (may throw or be empty).
- Format with `Intl` (dates, numbers, currency, plural rules); never hand-roll formats.

### 5.6 Assets
- **Images**: originals in `static/images/src`; `npm run images` → AVIF + WebP at 480/960/1440/1920 (never upscaled), OG image 1200×630 PNG, icons 192/512/180. Photos ≤ 200 KB per rendition where possible. LCP image: `loading="eager"`, `fetchpriority="high"`, preloaded when it is CSS-independent. SVG for logos/icons, minified, with `width/height`.
- **Fonts**: WOFF2 only, self-hosted in `static/fonts`, `font-display: swap`, **preload only the one primary font** (`type="font/woff2" crossorigin`), subset when a project uses <200 glyph blocks (unicode-range for Persian + Latin). `@font-face` rules are generated by `scripts/copy-fonts.mjs`.
- **Video/audio**: self-hosted MP4 (H.264) + WebM, `preload="none"`, `poster`, captions `<track>`, no autoplay with sound; muted decorative loops stop for reduced motion.
- **Downloads** (PDF etc.) in `static/docs`, with size + type in the link text.
- File names: lowercase-kebab, ASCII, no spaces. No base64/data URIs `[E-01]`.

### 5.7 Naming and hygiene
- Files/dirs: lowercase-kebab. JS: camelCase functions, PascalCase only for classes. CSS component classes: `noun` or `noun-modifier` (`btn-primary`).
- No dead code, commented-out blocks, `console.log`, TODOs without an owner/date. No dependency added without an ADR.
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`). Small, reviewable.

---

## 6. Build, CI, lint, dev and deploy

### 6.1 Commands (`package.json`)

| Command | What it does |
|---|---|
| `npm run dev` | Tailwind + esbuild in watch mode. Serve with **Live Server** (right-click `index.html` → Open with Live Server). |
| `npm run build` | fonts → CSS → JS → `sync` partials → `stamp` (?v=hash cache-busting) → `sitemap` |
| `npm run lint` | html-validate + stylelint + eslint + project rules (`check-rules`) |
| `npm run check` | build + lint (**run before every commit**) |
| `npm run images` | image pipeline (§5.6) |
| `npm run serve` | production-like local server (CSP, cache, gzip) on :8080 — for QA and Lighthouse |
| `npm run audit` | Lighthouse CI against budgets (starts `serve` itself) |
| `npm run package` | `release/site.zip` (only deployable files) |

### 6.2 What is enforced automatically
`html-validate` (HTML validity + a11y rules) · `stylelint` · `eslint` · `sync --check` (partials) · `check-rules`: unminified HTML, doctype/lang/dir, charset first, viewport w/o zoom lock, title/description length, canonical, Open Graph/Twitter, manifest, favicon, single h1/no heading skips, single `main#main`, skip link first, no positive tabindex, images alt/size/loading, no inline style/script/handlers/`data:`, no external runtime resources, broken internal links/anchors, JSON-LD validity, sitemap completeness, font preload, single stylesheet, `script defer`, CSS/JS size budgets, required files.
Not automatable → §8 manual checks.

### 6.3 CI (`.github/workflows/ci.yml`)
- Push to `main`: build → lint → **auto-commit rebuilt assets** (`[skip ci]`, no loop) → package → upload `site.zip` artifact → Lighthouse job.
- Pull request: build → lint → **fail if committed built files are stale** → package → Lighthouse.
- Node version from `.nvmrc`. `npm ci` only. Lighthouse budgets in `lighthouserc.json`: performance ≥0.95; accessibility/best-practices/SEO = 1; LCP ≤2000 ms; CLS ≤0.05; TBT ≤150 ms; script ≤60 KB, CSS ≤40 KB transferred.

### 6.4 VS Code + Live Server
- Open the **project root** as the workspace (Live Server root `/`; `.vscode/settings.json` is provided). Install the recommended extensions.
- Live Server serves files as they are, so URLs are root-absolute and pages are `<slug>/index.html`. It injects a reload script locally only; production CSP is not applied by Live Server — before delivery test with `npm run serve` (same CSP/cache intent as `.htaccess`) and `npm run audit`.
- Live Server does not rewrite `.html`-less URLs — that is why we use folder pages.

### 6.5 Deploy to DirectAdmin
1. `npm run check` green → `npm run package` (or download `site.zip` from the CI artifact).
2. DirectAdmin → **File Manager → `domains/<domain>/public_html`** → upload → **Extract** (or `git pull` on a server with Git; built assets are committed).
3. Enable **SSL** (Let's Encrypt) → then uncomment HSTS in `.htaccess`. Set PHP to *off/none* for the domain (static site). Enable HTTP/2 (and Brotli/HTTP/3/LiteSpeed cache if the host offers them).
4. Smoke test: `curl -I https://domain/` (status, `content-security-policy`, `cache-control`), `/robots.txt`, `/sitemap.xml`, a 404 URL, `/static/assets/css/app.css` (1-year immutable, compressed).
5. Google Search Console: verify (DNS preferred), submit `sitemap.xml`, inspect the home URL; run PageSpeed Insights and the Rich Results Test.
6. Rollback = re-upload the previous `site.zip` (keep the last 3).

`.htaccess` provides: HTTPS + non-www redirect, dev-file blocking, Brotli/Deflate, cache headers (HTML `no-cache`; `/static` 1-year immutable with `?v=hash`), strict CSP, `nosniff`, referrer-policy, permissions-policy, COOP, `ErrorDocument 404`. If a needed feature requires a new external origin, extend the CSP **and** record an ADR.

---

## 7. SEO and performance (Google-first)

### 7.1 Core Web Vitals targets (75th percentile, field) — lab budgets are stricter
| Metric | Good (Google) | Our lab budget |
|---|---|---|
| LCP | ≤ 2.5 s | ≤ 2.0 s |
| INP | ≤ 200 ms | ≤ 150 ms (TBT ≤ 150 ms as lab proxy) |
| CLS | ≤ 0.1 | ≤ 0.05 |
| Initial transfer (HTML+CSS+JS+fonts+LCP image) | — | ≤ 500 KB |

### 7.2 Page-level SEO (every indexable page)
- Unique `<title>` 10–60 chars, primary topic first, brand last `[S-01]`. Unique meta description 70–160 chars written for humans `[S-02]`.
- **Self-referencing absolute canonical** (`siteUrl` + path) `[S-03]`. One canonical host (non-www + HTTPS) enforced by `.htaccess`.
- Open Graph (`type, title, description, url, image 1200×630, locale, site_name`) + `twitter:card=summary_large_image` `[S-04]`.
- One `<h1>` matching the page intent; logical `h2/h3` outline `[S-06]` `[S-07]`. Descriptive internal links; no orphan pages; ≤3 clicks from home.
- URLs: lowercase, short, hyphenated ASCII slugs (Persian slugs only if the client insists, UTF-8 percent-encoded consistently), trailing slash consistent (`/slug/`).
- `robots` meta only when needed: `noindex` for utility pages (styleguide, thank-you, 404) `[S-05]`; otherwise `index, follow, max-image-preview:large`.
- Multilingual: separate folders (`/en/`), `hreflang` pairs + `x-default`, each page canonical to itself; never auto-redirect by IP/Accept-Language.
- Content: real, useful, original, people-first (E-E-A-T): who is behind it, contact info, policies, dated updates; no keyword stuffing, no hidden text, no doorway pages, no thin duplicates.

### 7.3 Site-level files
- `sitemap.xml` generated from real pages only (indexable, canonical, 200) with `lastmod` from git `[S-10]`; ≤50 000 URLs/file.
- `robots.txt` with `Sitemap:` line; don't block `/static/` (Google needs CSS/JS/images to render) `[S-11]`.
- `site.webmanifest`, favicon SVG + PNG 192/512, `apple-touch-icon` 180 `[S-08]`. Custom `404.html` (noindex) returning a real 404 status via `ErrorDocument`.
- HTTPS everywhere, no mixed content (CSP `upgrade-insecure-requests`).

### 7.4 Structured data (JSON-LD, valid, matches visible content)
- Home: `Organization` (+`logo`, `sameAs`, `contactPoint`) and `WebSite`. Inner pages: `BreadcrumbList`. Content: `Article`/`BlogPosting`. Catalog: `Product` (+`Offer` only with real price/availability) or `ItemList`. Local business: `LocalBusiness` with real NAP. `FAQPage` rich results are restricted by Google — mark up FAQs only when they are visible on the page and don't expect a rich result. Validate with the Rich Results Test. Never mark up content that isn't on the page `[S-09]`.

### 7.5 Loading performance
- **Critical path**: one small render-blocking stylesheet, no blocking JS (`defer`), no `@import` chains, no third-party origins (no preconnect needed).
- **LCP**: identify the LCP element per page template; if an image → real `<img>` (not CSS background), correct `srcset/sizes`, `fetchpriority="high"`, `loading="eager"`, ≤ ~100 KB; if text → font preloaded and `font-display: swap`.
- **CLS**: width/height on every image/video/iframe/SVG; reserve space for late content; fonts with fallbacks tuned via `size-adjust` if shift is visible; never inject content above existing content.
- **INP**: small JS, no long tasks (>50 ms), event handlers do minimal work, animations on the compositor, `content-visibility: auto` + `contain-intrinsic-size` for long below-fold sections.
- **Fonts**: one variable WOFF2 for the primary text face (+ optional display face), preload only the primary; no icon fonts.
- **Images**: AVIF/WebP + fallback, `srcset` + `sizes`, lazy below the fold, `decoding="async"`, dimensions, no upscaling, compress (`npm run images`).
- **Caching**: HTML `no-cache`; `/static` `immutable` 1 year with `?v=<hash>` busting (`npm run stamp`); gzip/Brotli on; ETag default.
- **Third parties**: none by default (C3). If approved: `async/defer`, facade until interaction, isolated, budgeted, removable.
- **Resilience**: works without JS for content + navigation; offline messaging optional; graceful `prefers-reduced-data` handling (skip heavy media).
- **Measure**: Lighthouse CI on every PR; PageSpeed Insights/CrUX after deploy; Search Console Core Web Vitals report monthly.

### 7.6 Answer-engine / AI visibility (low cost, high leverage)
Clear headings that state the question and a direct answer in the first sentence; consistent entity naming; `Organization` + `sameAs`; accessible, crawlable HTML (no content only in JS); optional `llms.txt` at root for key pages.

---

## 8. QA and Definition of Done

### 8.1 Definition of Done (all must be true)
- [ ] `npm run check` passes (0 errors); `npm run audit` meets budgets.
- [ ] Looked at in a real browser: **360 / 390 / 768 / 1024 / 1440**, RTL, light **and** dark.
- [ ] **Keyboard-only** walkthrough: tab order logical, focus always visible and never hidden by sticky UI, Escape closes overlays, no traps.
- [ ] Zoom 200% and text-spacing override: no loss of content, no horizontal scroll (reflow at 320 px).
- [ ] `prefers-reduced-motion` and JS-disabled behave sensibly (content + nav usable).
- [ ] All states designed and reachable (§4.9) — including empty/error/long content with real Persian text.
- [ ] Copy reviewed; no placeholders left unmarked; no fabricated facts (§0.4).
- [ ] SEO: title/description/canonical/OG/JSON-LD correct per page; sitemap/robots correct; Rich Results Test clean.
- [ ] Performance: LCP element identified and optimized; no layout shift on load; images sized; fonts preloaded.
- [ ] Security headers present after deploy (CSP not violated: check the console), no mixed content.
- [ ] Decisions logged in `docs/decisions.md`; `design-system.md` updated if tokens/components changed.

### 8.2 Test matrix
| Axis | Cover |
|---|---|
| Viewports | 360×740, 390×844, 768×1024, 1024×768, 1440×900, 320 wide (reflow) |
| Browsers | Chrome (desktop + Android), Safari (macOS + iOS), Firefox, Edge; Samsung Internet if analytics show it |
| Input | Mouse, touch, keyboard-only, screen reader smoke (NVDA/VoiceOver) |
| Preferences | Dark, reduced motion, forced-colors, 200% text zoom, no-JS |
| Network/CPU | Fast 3G + 4× CPU throttle for the top 3 pages |
| Content | Empty, one item, many items, very long names, mixed Persian/English/numbers, missing image |
| Direction | `dir="rtl"` (default), spot-check `dir="ltr"` components for logical-property bugs |

### 8.3 Reporting format (evidence-graded)
Each finding: **severity** (Critical = blocks a task, no workaround · Serious = task possible but hard · Moderate = friction · Minor = polish) + **evidence** (● verified/reproducible with selector or steps · ◐ needs a human decision, with your opinion · ○ needs assistive-technology/real-user testing → hand off, don't guess) + location + fix. Report failures and handoffs in words; passes as a bare list. Anything not exercised is reported as **undetermined**, never as a pass.

### 8.4 Regression guard
Any bug fixed gets a mechanical guard when possible (a new rule in `check-rules.mjs`, an html-validate rule, or a Lighthouse assertion) so it can't return.

---

## 9. Starting a new project

1. Copy the **contents** of `starter/` into the new repository root (GitHub Actions only runs `.github/workflows` at a repo root) (keep `RULES.md` at that repo's root or reference the best_studio copy).
2. Edit `site.config.json` (`siteUrl`, `siteName`, colors) and the placeholders in `index.html`, `partials/`, `robots.txt`, `.htaccess` (host rules).
3. `npm install` → `npm run build` → open with Live Server → `npm run check`.
4. Write `docs/brief.md` and `docs/design-system.md` (§2) **before** designing pages.
5. Drop the licensed brand font into `static/fonts` (e.g. `IRANYekanX-Variable.woff2`) and rebuild; update the font preload in every page.
6. Add pages as `<slug>/index.html`, copy the head/skeleton from `index.html`, run `npm run sync && npm run sitemap`.
7. Push → CI builds/lints/packages → download `site.zip` → deploy (§6.5).

Non-web deliverables (PPTX / DOCX / XLSX / decks): use **only IRANYekanX**, set text direction RTL for Persian, verify RTL rendering in the target app, never invent data.

---

## 10. Sources and limits

Distilled from: `nextlevelbuilder/ui-ux-pro-max-skill` (10-category priority rules, 119 UX guidelines, styles/typography data, Master+Overrides pattern, design dials) · `anthropics/skills` `frontend-design` (anti-generic process, restraint, copy rules) · `vercel-labs/agent-skills` + `web-interface-guidelines` (focus, forms, animation, typography, i18n, anti-patterns) · `AccessLint/skills` (WCAG-EM process, evidence tiers ●◐○, severity) · `bencium/bencium-marketplace` (design principles, controlled-UX protocol, motion/responsive specs) · `styles.refero.design` (DESIGN.md format, quality checklist, 100+ style extracts) · Google Search Central / web.dev (CWV thresholds, SEO fundamentals) · Tailwind v4 and Alpine CSP docs.

Known limits: `uupm.cc` and `styles.refero.design` are not reachable from the build shell; refero content was read through a page-summarizing fetch tool, so extracted values are near-verbatim but not guaranteed exact — re-check a value before relying on it. The `styles.csv` catalog (88 styles) comes from the ui-ux-pro-max repository, not the website's 57-style list. Project playbooks (§3) come from memory summaries, not the projects' source files.
