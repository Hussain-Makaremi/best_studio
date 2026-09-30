---
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (data/styles.csv)
type: style-catalog
---
# UI style catalog

Grouped by Type. Pick a style by product fit, then read "Do not use for". Use as *idea bank*; RULES.md decides what ships.


## BI/Analytics

### Data-Dense Dashboard
- **Keywords:** Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility
- **Colors:** Neutral primary (light grey/white #F5F5F5), data colors (blue/green/red), dark text #333333 / Chart colors: success (green #22C55E), warning (amber #F59E0B), alert (red #EF4444), neutral (grey)
- **Effects:** Hover tooltips, chart zoom on click, row highlighting on hover, smooth filter animations, data loading spinners
- **Best for:** Business intelligence dashboards, financial analytics, enterprise reporting, operational dashboards, data warehousing
- **Avoid for:** Marketing dashboards, consumer-facing analytics, simple reporting
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, grid-template-columns: repeat(12, 1fr), gap: 8px, padding: 12px, font-size: 12-14px, overflow: auto for tables, compact card design, sticky headers
- **Checklist:** ☐ Grid layout 12 columns, ☐ KPI cards responsive, ☐ Tables sortable, ☐ Filters functional, ☐ Loading states for data, ☐ Export functionality

### Heat Map & Heatmap Style
- **Keywords:** Color-coded grid/matrix, data intensity visualization, geographical heat maps, correlation matrices, cell-based representation, gradient coloring
- **Colors:** Gradient scale: Cool (blue #0080FF) to hot (red #FF0000), neutral middle (white/yellow) / Support gradients: Light (cool blue) to dark (warm red), divergent for positive/negative data, monochromatic options
- **Effects:** Color gradient transitions on data change, cell highlighting on hover, tooltip reveal on click, smooth color animation
- **Best for:** Geographical analysis, performance matrices, correlation analysis, user behavior heatmaps, temperature/intensity data
- **Avoid for:** Linear data representation, categorical comparisons (use bar charts), small datasets
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, background: linear-gradient for legend, cell hover states, tooltip positioning, color scale (blue→white→red), SVG for geographic, canvas for large datasets
- **Checklist:** ☐ Color scale clear, ☐ Legend visible, ☐ Tooltips informative, ☐ Colorblind alternatives, ☐ Zoom/pan for geo, ☐ Performance for large data

### Executive Dashboard
- **Keywords:** High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary
- **Colors:** Brand colors, professional palette (blue/grey/white), accent for KPIs, red for alerts/concerns / KPI highlight colors: positive (green), negative (red), neutral (grey), trend arrow colors
- **Effects:** KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect
- **Best for:** C-suite dashboards, business summary reports, decision-maker dashboards, strategic planning views
- **Avoid for:** Detailed analyst dashboards, technical deep-dives, operational monitoring
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: flex for KPI row, large font-size (24-48px) for metrics, sparkline SVG inline, status indicators (border-left color), card shadows for hierarchy, responsive breakpoints
- **Checklist:** ☐ KPIs 4-6 maximum, ☐ Trends visible, ☐ Status colors clear, ☐ One-page view, ☐ Mobile simplified, ☐ Print-friendly layout

### Real-Time Monitoring
- **Keywords:** Live data updates, status indicators, alert notifications, streaming data visualization, active monitoring, streaming charts
- **Colors:** Alert colors: critical (red #FF0000), warning (orange #FFA500), normal (green #22C55E), updating (blue animation) / Status indicator colors, chart line colors varying by metric, streaming data highlight colors
- **Effects:** Real-time chart animations, alert pulse/glow, status indicator blink animation, smooth data stream updates, loading effect
- **Best for:** System monitoring dashboards, DevOps dashboards, real-time analytics, stock market dashboards, live event tracking
- **Avoid for:** Historical analysis, long-term trend reports, archived data dashboards
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** animation: pulse for live, WebSocket for streaming, position: fixed for alerts, status-dot with animation, chart real-time updates, notification toast, connection indicator
- **Checklist:** ☐ Live updates working, ☐ Alert sounds optional, ☐ Connection status shown, ☐ Auto-refresh indicated, ☐ Critical alerts prominent, ☐ Offline fallback

### Drill-Down Analytics
- **Keywords:** Hierarchical data exploration, expandable sections, interactive drill-down paths, summary-to-detail flow, context preservation
- **Colors:** Primary brand, breadcrumb colors, drill-level indicator colors, hierarchy depth colors / Drill-down path indicator colors, level-specific colors, highlight colors for selected level, transition colors
- **Effects:** Drill-down expand animations, breadcrumb click transitions, smooth detail reveal, level change smooth, data reload animation
- **Best for:** Sales analytics, product analytics, funnel analysis, multi-dimensional data exploration, business intelligence
- **Avoid for:** Simple linear data, single-metric dashboards, streaming real-time dashboards
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** breadcrumb nav with separators, details/summary for expand, transition for drill animation, position: sticky breadcrumb, nested grid layouts, smooth scroll to detail
- **Checklist:** ☐ Breadcrumbs clear, ☐ Back navigation easy, ☐ Expand animation smooth, ☐ Context preserved, ☐ Mobile drill works, ☐ Deep links supported

### Comparative Analysis Dashboard
- **Keywords:** Side-by-side comparisons, period-over-period metrics, A/B test results, regional comparisons, performance benchmarks
- **Colors:** Comparison colors: primary (blue), comparison (orange/purple), delta indicator (green/red) / Winning metric color (green), losing metric color (red), neutral comparison (grey), benchmark colors
- **Effects:** Comparison bar animations (grow to value), delta indicator animations (direction arrows), highlight on compare
- **Best for:** Period-over-period reporting, A/B test dashboards, market comparison, competitive analysis, regional performance
- **Avoid for:** Single metric dashboards, future projections (use forecasting), real-time only (no historical)
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: flex for side-by-side, gap for comparison spacing, color coding (green up, red down), arrow indicators, diff highlighting, comparison table zebra striping
- **Checklist:** ☐ Period selector works, ☐ Deltas calculated, ☐ Colors meaningful, ☐ Benchmarks shown, ☐ Mobile stacks properly, ☐ Export comparison

### Predictive Analytics
- **Keywords:** Forecast lines, confidence intervals, trend projections, scenario modeling, AI-driven insights, anomaly detection visualization
- **Colors:** Forecast line color (distinct from actual), confidence interval shading, anomaly highlight (red alert), trend colors / High confidence (dark color), low confidence (light color), anomaly colors (red/orange), normal trend (green/blue)
- **Effects:** Forecast line animation on draw, confidence band fade-in, anomaly pulse alert, smoothing function animations
- **Best for:** Forecasting dashboards, anomaly detection systems, trend prediction dashboards, AI-powered analytics, budget planning
- **Avoid for:** Historical-only dashboards, simple reporting, real-time operational dashboards
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** stroke-dasharray for forecast lines, fill-opacity for confidence bands, anomaly markers (circles), tooltip for predictions, toggle switches for scenarios, gradient for probability
- **Checklist:** ☐ Forecast line distinct, ☐ Confidence bands visible, ☐ Anomalies highlighted, ☐ Scenarios switchable, ☐ Predictions dated, ☐ Accuracy shown

### User Behavior Analytics
- **Keywords:** Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis
- **Colors:** Funnel stage colors: high engagement (green), drop-off (red), conversion (blue), user flow arrows (grey) / Stage completion colors (success), abandonment colors (warning), engagement levels (gradient), cohort colors
- **Effects:** Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill
- **Best for:** Conversion funnel analysis, user journey tracking, engagement analytics, cohort analysis, retention tracking
- **Avoid for:** Real-time operational metrics, technical system monitoring, financial transactions
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** SVG funnel with gradients, Sankey diagram library, percentage labels, cohort grid cells, retention chart (line/area), click heatmap overlay, session timeline
- **Checklist:** ☐ Funnel stages clear, ☐ Flow diagram readable, ☐ Conversions calculated, ☐ Cohorts comparable, ☐ Retention trends visible, ☐ Privacy compliant

### Financial Dashboard
- **Keywords:** Revenue metrics, profit/loss visualization, budget tracking, financial ratios, portfolio performance, cash flow, audit trail
- **Colors:** Financial colors: profit (green #22C55E), loss (red #EF4444), neutral (grey), trust (dark blue #003366) / Revenue highlight (green), expenses (red), budget variance (orange/red), balance (grey), accuracy (blue)
- **Effects:** Number animations (count-up), trend direction indicators, percentage change animations, profit/loss color transitions
- **Best for:** Financial reporting, accounting dashboards, portfolio tracking, budget monitoring, banking analytics
- **Avoid for:** Simple business dashboards, entertainment/social metrics, non-financial data
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** number formatting (Intl.NumberFormat), waterfall chart (positive/negative bars), variance coloring, table with totals row, sparkline for trends, sticky column headers
- **Checklist:** ☐ Currency formatted, ☐ Decimals consistent, ☐ P&L clear, ☐ Budget variance shown, ☐ Audit trail complete, ☐ Export to Excel

### Sales Intelligence Dashboard
- **Keywords:** Deal pipeline, sales metrics, territory performance, sales rep leaderboard, win-loss analysis, quota tracking, forecast accuracy
- **Colors:** Sales colors: won (green), lost (red), in-progress (blue), blocked (orange), quota met (gold), quota missed (grey) / Pipeline stage colors, rep performance colors, quota achievement colors, forecast accuracy colors
- **Effects:** Deal movement animations, metric updates, leaderboard ranking changes, gauge needle movements, status change highlights
- **Best for:** CRM dashboards, sales management, opportunity tracking, performance management, quota planning
- **Avoid for:** Marketing analytics, customer support metrics, HR dashboards
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** kanban columns (flex), gauge chart (SVG arc), leaderboard ranking styles, map integration (Mapbox/Google), timeline vertical, deal card with status border
- **Checklist:** ☐ Pipeline stages shown, ☐ Deals draggable, ☐ Quotas visualized, ☐ Rankings updated, ☐ Territory clickable, ☐ CRM integration


## General

### Minimalism & Swiss Style
- **Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential
- **Colors:** Monochromatic, Black #000000, White #FFFFFF / Neutral (Beige #F5F1E8, Grey #808080, Taupe #B38B6D), Primary accent
- **Effects:** Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading
- **Best for:** Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools
- **Avoid for:** Creative portfolios, entertainment, playful brands, artistic experiments
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, gap: 2rem, font-family: sans-serif, color: #000 or #FFF, max-width: 1200px, clean borders, no box-shadow unless necessary
- **Checklist:** ☐ Grid-based layout 12-16 columns, ☐ Typography hierarchy clear, ☐ No unnecessary decorations, ☐ text contrast measured against the chosen project target, ☐ Mobile responsive grid

### Neumorphism
- **Keywords:** Soft UI, embossed, debossed, convex, concave, light source, subtle depth, rounded (12-16px), monochromatic
- **Colors:** Light pastels: Soft Blue #C8E0F4, Soft Pink #F5E0E8, Soft Grey #E8E8E8 / Tints/shades (±30%), gradient subtlety, color harmony
- **Effects:** Soft box-shadow (multiple: -5px -5px 15px, 5px 5px 15px), smooth press (150ms), inner subtle shadow
- **Best for:** Health/wellness apps, meditation platforms, fitness trackers, minimal interaction UIs
- **Avoid for:** Complex apps, critical accessibility, data-heavy dashboards, high-contrast required
- **Perf / A11y:** cost:low|drivers:none / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 12-16px, box-shadow: -5px -5px 15px rgba(0,0,0,0.1), 5px 5px 15px rgba(255,255,255,0.8), background: linear-gradient(145deg, color1, color2), transform: scale on press
- **Checklist:** ☐ Rounded corners 12-16px consistent, ☐ Multiple shadow layers (2-3), ☐ Pastel color verified, ☐ Monochromatic palette checked, ☐ Press animation smooth 150ms

### Glassmorphism
- **Keywords:** Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer
- **Colors:** Translucent white: rgba(255,255,255,0.1-0.3) / Vibrant: Electric Blue #0080FF, Neon Purple #8B00FF, Vivid Pink #FF1493, Teal #20B2AA
- **Effects:** Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth
- **Best for:** Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation
- **Avoid for:** Low-contrast backgrounds, critical accessibility, performance-limited, dark text on dark
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth
- **Checklist:** ☐ Backdrop-filter blur 10-20px, ☐ Translucent white 15-30% opacity, ☐ Subtle border 1px light, ☐ Vibrant background verified, ☐ Text contrast 4.5:1 checked

### Brutalism
- **Keywords:** Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design
- **Colors:** Primary: Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black #000000, White #FFFFFF / Limited: Neon Green #00FF00, Hot Pink #FF00FF, minimal secondary
- **Effects:** No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks
- **Best for:** Design portfolios, artistic projects, counter-culture brands, editorial/media sites, tech blogs
- **Avoid for:** Corporate environments, conservative industries, critical accessibility, customer-facing professional
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 0px, transition: none or 0s, font-family: system-ui or monospace, font-weight: 700+, border: visible 2-4px, colors: #FF0000, #0000FF, #FFFF00, #000000, #FFFFFF
- **Checklist:** ☐ No border-radius (0px), ☐ No transitions (instant), ☐ Bold typography (700+), ☐ Pure primary colors used, ☐ Visible grid/borders, ☐ Asymmetric layout intentional

### 3D & Hyperrealism
- **Keywords:** Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail, immersive
- **Colors:** Deep Navy #001F3F, Forest Green #228B22, Burgundy #800020, Gold #FFD700, Silver #C0C0C0 / Complex gradients (5-10 stops), realistic lighting, shadow variations (20-40% darker)
- **Effects:** WebGL/Three.js 3D, realistic shadows (layers), physics lighting, parallax (3-5 layers), smooth 3D (300-400ms)
- **Best for:** Gaming, product showcase, immersive experiences, high-end e-commerce, architectural viz, VR/AR
- **Avoid for:** Low-end mobile, performance-limited, critical accessibility, data tables/forms
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** transform: translate3d, perspective: 1000px, WebGL canvas, Three.js/Babylon.js library, box-shadow: complex multi-layer, background: complex gradients, filter: drop-shadow()
- **Checklist:** ☐ WebGL/Three.js integrated, ☐ 3D models loaded, ☐ Parallax 3-5 layers, ☐ Realistic lighting verified, ☐ Complex shadows rendered, ☐ Physics animation smooth 300-400ms

### Vibrant & Block-based
- **Keywords:** Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic
- **Colors:** Neon Green #39FF14, Electric Purple #BF00FF, Vivid Pink #FF1493, Bright Cyan #00FFFF, Sunburst #FFAA00 / Complementary: Orange #FF7F00, Shocking Pink #FF006E, Lime #CCFF00, triadic schemes
- **Effects:** Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms
- **Best for:** Startups, creative agencies, gaming, social media, youth-focused, entertainment, consumer
- **Avoid for:** Financial institutions, healthcare, formal business, government, conservative, elderly
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: flex/grid with large gaps (48px+), font-size: 32px+, background: animated patterns (CSS), color: neon/vibrant colors, animation: continuous pattern movement
- **Checklist:** ☐ Block layout with 48px+ gaps, ☐ Large typography 32px+, ☐ 4-6 vibrant colors max, ☐ Animated patterns active, ☐ Scroll-snap enabled, ☐ High contrast verified (7:1+)

### Dark Mode (OLED)
- **Keywords:** Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient
- **Colors:** Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27 / Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF
- **Effects:** Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus
- **Best for:** Night-mode apps, coding platforms, entertainment, eye-strain prevention, OLED devices, low-light
- **Avoid for:** Print-first content, high-brightness outdoor, color-accuracy-critical
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark
- **Checklist:** ☐ Deep black #000000 or #121212, ☐ Vibrant neon accents used, ☐ Text contrast 7:1+, ☐ Minimal glow effects, ☐ OLED power optimization, ☐ No white (#FFFFFF) background

### Accessible & Ethical
- **Keywords:** Accessible, inclusive interface, high contrast, large text (16px+), keyboard navigation, screen reader friendly, accessibility standards aware, focus state, semantic
- **Colors:** Measured high-contrast pairs (4.5:1 normal-text baseline; 7:1 enhanced target), simple primary, clear secondary, high luminosity (7:1+) / Symbol-based colors (not color-only), supporting patterns, inclusive combinations
- **Effects:** Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets
- **Best for:** Government, healthcare, education, inclusive products, large audience, legal compliance, public
- **Avoid for:** None - accessibility universal
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** color-contrast: 7:1+, font-size: 16px+, outline: 3-4px on :focus-visible, aria-label, role attributes, @media (prefers-reduced-motion), touch-target: 44x44px, cursor: pointer
- **Checklist:** ☐ complete-page conformance tested against the chosen target, ☐ 7:1+ contrast checked, ☐ Keyboard navigation tested, ☐ Screen reader tested, ☐ Focus visible 3-4px, ☐ Semantic HTML used, ☐ Touch targets 44x44px

### Claymorphism
- **Keywords:** Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)
- **Colors:** Pastel: Soft Peach #FDBCB4, Baby Blue #ADD8E6, Mint #98FF98, Lilac #E6E6FA, light BG / Soft gradients (pastel-to-pastel), light/dark variations (20-30%), gradient subtle
- **Effects:** Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions
- **Best for:** Educational apps, children's apps, SaaS platforms, creative tools, fun-focused, onboarding, casual games
- **Avoid for:** Formal corporate, professional services, data-critical, serious/medical, legal apps, finance
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 16-24px, border: 3-4px solid, box-shadow: inset -2px -2px 8px, 4px 4px 8px, background: pastel-gradient, animation: soft bounce (cubic-bezier 0.34, 1.56)
- **Checklist:** ☐ Border-radius 16-24px, ☐ Thick borders 3-4px, ☐ Double shadows (inner+outer), ☐ Pastel colors used, ☐ Soft bounce animations, ☐ Playful interactions

### Aurora UI
- **Keywords:** Vibrant gradients, smooth blend, Northern Lights effect, mesh gradient, luminous, atmospheric, abstract
- **Colors:** Complementary: Blue-Orange, Purple-Yellow, Electric Blue #0080FF, Magenta #FF1493, Cyan #00FFFF / Smooth transitions (Blue→Purple→Pink→Teal), iridescent effects, blend modes (screen, multiply)
- **Effects:** Large flowing CSS/SVG gradients, subtle 8-12s animations, depth via color layering, smooth morph
- **Best for:** Modern SaaS, creative agencies, branding, music platforms, lifestyle, premium products, hero sections
- **Avoid for:** Data-heavy dashboards, critical accessibility, content-heavy where distraction issues
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: conic-gradient or radial-gradient with multiple stops, animation: @keyframes gradient (8-12s), background-size: 200% 200%, filter: saturate(1.2), blend-mode: screen or multiply
- **Checklist:** ☐ Mesh/flowing gradients applied, ☐ 8-12s animation loop, ☐ Complementary colors used, ☐ Smooth color transitions, ☐ Iridescent effect subtle, ☐ Text contrast verified

### Retro-Futurism
- **Keywords:** Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave
- **Colors:** Neon Blue #0080FF, Hot Pink #FF006E, Cyan #00FFFF, Deep Black #1A1A2E, Purple #5D34D0 / Metallic Silver #C0C0C0, Gold #FFD700, duotone, 80s Pink #FF10F0, neon accents
- **Effects:** CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes)
- **Best for:** Gaming, entertainment, music platforms, tech brands, artistic projects, nostalgic, cyberpunk
- **Avoid for:** Conservative industries, critical accessibility, professional/corporate, elderly, legal/finance
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** color: neon colors (#0080FF, #FF006E, #00FFFF), text-shadow: 0 0 10px neon, background: #000 or #1A1A2E, font-family: monospace, animation: glitch (skew+offset), filter: hue-rotate
- **Checklist:** ☐ Neon colors used, ☐ CRT scanlines effect, ☐ Glitch animations active, ☐ Monospace font, ☐ Deep black background, ☐ Glow effects applied, ☐ 80s patterns present

### Flat Design
- **Keywords:** 2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy
- **Colors:** Solid bright: Red, Orange, Blue, Green, limited palette (4-6 max) / Complementary colors, muted secondaries, high saturation, clean accents
- **Effects:** No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons
- **Best for:** Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate
- **Avoid for:** Complex 3D, premium/luxury, artistic portfolios, immersive experiences, high-detail
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** box-shadow: none, background: solid color, border-radius: 0-4px, color: solid (no gradients), fill: solid, stroke: 1-2px, font: bold sans-serif, icons: simplified SVG
- **Checklist:** ☐ No shadows/gradients, ☐ 4-6 solid colors max, ☐ Clean lines consistent, ☐ Simple shapes used, ☐ Icon-heavy layout, ☐ High saturation colors, ☐ Fast loading verified

### Skeuomorphism
- **Keywords:** Realistic, texture, depth, 3D appearance, real-world metaphors, shadows, gradients, tactile, detailed, material
- **Colors:** Rich realistic: wood, leather, metal colors, detailed gradients (8-12 stops), metallic effects / Realistic lighting gradients, shadow variations (30-50% darker), texture overlays, material colors
- **Effects:** Realistic shadows (layers), depth (perspective), texture details (noise, grain), realistic animations (300-500ms)
- **Best for:** Legacy apps, gaming, immersive storytelling, premium products, luxury, realistic simulations, education
- **Avoid for:** Modern enterprise, critical accessibility, low-performance, web (use Flat/Modern)
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: complex gradient (8-12 stops), box-shadow: realistic multi-layer, background-image: texture overlay (noise, grain), filter: drop-shadow, transform: scale on press (300-500ms)
- **Checklist:** ☐ Realistic textures applied, ☐ Complex gradients 8-12 stops, ☐ Multi-layer shadows, ☐ Texture overlays present, ☐ Tactile animations smooth, ☐ Depth effect pronounced

### Motion-Driven
- **Keywords:** Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions
- **Colors:** Bold colors emphasize movement, high contrast animated, dynamic gradients, accent action colors / Transitional states, success (Green #22C55E), error (Red #EF4444), neutral feedback
- **Effects:** Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions
- **Best for:** Portfolio sites, storytelling platforms, interactive experiences, entertainment apps, creative, SaaS
- **Avoid for:** Data dashboards, critical accessibility, low-power devices, content-heavy, motion-sensitive
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** animation: @keyframes scroll-reveal, transform: translateY/X, Intersection Observer API, will-change: transform, scroll-behavior: smooth, animation-duration: 300-400ms
- **Checklist:** ☐ Scroll animations active, ☐ Parallax 3-5 layers, ☐ Entrance animations smooth, ☐ Page transitions fluid, ☐ GPU accelerated, ☐ Prefers-reduced-motion respected

### Micro-interactions
- **Keywords:** Small animations, gesture-based, tactile feedback, subtle animations, contextual interactions, responsive
- **Colors:** Subtle color shifts (10-20%), feedback: Green #22C55E, Red #EF4444, Amber #F59E0B / Accent feedback, neutral supporting, clear action indicators
- **Effects:** Small hover (50-100ms), loading spinners, success/error state anim, gesture-triggered (swipe/pinch), haptic
- **Best for:** Mobile apps, touchscreen UIs, productivity tools, user-friendly, consumer apps, interactive components
- **Avoid for:** Desktop-only, critical performance, accessibility-first (alternatives needed)
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** animation: short 50-100ms, transition: hover states, @media (hover: hover) for desktop, :active for press, haptic-feedback CSS/API, loading animation smooth loop
- **Checklist:** ☐ Micro-animations 50-100ms, ☐ Gesture-responsive, ☐ Tactile feedback visual/haptic, ☐ Loading spinners smooth, ☐ Success/error states clear, ☐ Hover effects subtle

### Inclusive Design
- **Keywords:** Accessible, color-blind friendly, high contrast, haptic feedback, voice interaction, screen reader, enhanced contrast targets, universal
- **Colors:** Measured contrast pairs targeting 7:1 for normal text, avoid red-green only, symbol-based indicators, high contrast primary / Supporting patterns (stripes, dots, hatch), symbols, combinations, clear non-color indicators
- **Effects:** Haptic feedback (vibration), voice guidance, focus indicators (4px+ ring), motion options, alt content, semantic
- **Best for:** Public services, education, healthcare, finance, government, accessible consumer, inclusive
- **Avoid for:** None - accessibility universal
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** aria-* attributes complete, role attributes semantic, focus-visible: 3-4px ring, color-contrast: 7:1+, @media (prefers-reduced-motion), alt text on all images, form labels properly associated
- **Checklist:** ☐ complete-page conformance tested against the chosen target, ☐ 7:1+ contrast all text, ☐ Keyboard accessible (Tab/Enter), ☐ Screen reader tested, ☐ Focus visible 3-4px, ☐ No color-only indicators, ☐ Haptic fallback

### Zero Interface
- **Keywords:** Minimal visible UI, voice-first, gesture-based, AI-driven, invisible controls, predictive, context-aware, ambient
- **Colors:** Neutral backgrounds: Soft white #FAFAFA, light grey #F0F0F0, warm off-white #F5F1E8 / Subtle feedback: light green, light red, minimal UI elements, soft accents
- **Effects:** Voice recognition UI, gesture detection, AI predictions (smooth reveal), progressive disclosure, smart suggestions
- **Best for:** Voice assistants, AI platforms, future-forward UX, smart home, contextual computing, ambient experiences
- **Avoid for:** Complex workflows, data-entry heavy, traditional systems, legacy support, explicit control
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** voice-commands: Web Speech API, gesture-detection: touch events, AI-predictions: hidden by default (reveal on hover), progressive-disclosure: show on demand, minimal UI visible
- **Checklist:** ☐ Voice commands responsive, ☐ Gesture detection active, ☐ AI predictions hidden/revealed, ☐ Progressive disclosure working, ☐ Minimal visible UI, ☐ Smart suggestions contextual

### Soft UI Evolution
- **Keywords:** Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid
- **Colors:** Improved contrast pastels: Soft Blue #87CEEB, Soft Pink #FFB6C1, Soft Green #90EE90, better hierarchy / Better combinations, accessible secondary, supporting with improved contrast, modern accents
- **Effects:** Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, measured contrast targets
- **Best for:** Modern enterprise apps, SaaS platforms, health/wellness, modern business tools, professional, hybrid
- **Avoid for:** Extreme minimalism, critical performance, systems without modern OS
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** box-shadow: softer multi-layer (0 2px 4px), background: improved contrast pastels, border-radius: 8-12px, animation: 200-300ms smooth, outline: 2-3px on focus, contrast: 4.5:1+
- **Checklist:** ☐ Contrast measured against the chosen project target, ☐ Soft shadows modern, ☐ Border-radius 8-12px, ☐ Animations 200-300ms, ☐ Focus states visible, ☐ Color hierarchy clear

### Neubrutalism
- **Keywords:** Bold borders, black outlines, primary colors, thick shadows, no gradients, flat colors, 45° shadows, playful, Gen Z
- **Colors:** #FFEB3B (Yellow), #FF5252 (Red), #2196F3 (Blue), #000000 (Black borders) / Limited accent colors, high contrast combinations, no gradients allowed
- **Effects:** box-shadow: 4px 4px 0 #000, border: 3px solid #000, no gradients, sharp corners (0px), bold typography
- **Best for:** Gen Z brands, startups, creative agencies, Figma-style apps, Notion-style interfaces, tech blogs
- **Avoid for:** Luxury brands, finance, healthcare, conservative industries (too playful)
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border: 3px solid black, box-shadow: 5px 5px 0px black, colors: #FFDB58 #FF6B6B #4ECDC4, font-weight: 700, no gradients
- **Checklist:** ☐ Hard borders (2-4px), ☐ Hard offset shadows, ☐ High saturation colors, ☐ Bold typography, ☐ No blurs/gradients, ☐ Distinctive 'ugly-cute' look

### Bento Box Grid
- **Keywords:** Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards
- **Colors:** Neutral base + brand accent, #FFFFFF, #F5F5F5, brand primary / Subtle gradients, shadow variations, accent highlights for interactive cards
- **Effects:** grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions
- **Best for:** Dashboards, product pages, portfolios, Apple-style marketing, feature showcases, SaaS
- **Avoid for:** Dense data tables, text-heavy content, real-time monitoring
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: 200px, gap: 16px, border-radius: 24px, background: #FFFFFF, box-shadow: 0 4px 6px rgba(0,0,0,0.05)
- **Checklist:** ☐ Grid responsive (4→2→1 cols), ☐ Card spans varied, ☐ Rounded corners consistent, ☐ Shadows subtle, ☐ Content fits cards, ☐ Hover scale (1.02)

### Y2K Aesthetic
- **Keywords:** Neon pink, chrome, metallic, bubblegum, iridescent, glossy, retro-futurism, 2000s, futuristic nostalgia
- **Colors:** #FF69B4 (Hot Pink), #00FFFF (Cyan), #C0C0C0 (Silver), #9400D3 (Purple) / Metallic gradients, glossy overlays, iridescent effects, chrome textures
- **Effects:** linear-gradient metallic, glossy buttons, 3D chrome effects, glow animations, bubble shapes
- **Best for:** Fashion brands, music platforms, Gen Z brands, nostalgia marketing, entertainment, youth-focused
- **Avoid for:** B2B enterprise, healthcare, finance, conservative industries, elderly users
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: linear-gradient(135deg, #FF69B4, #00FFFF), filter: drop-shadow for glow, border-radius: 50% for bubbles, metallic gradients (silver/chrome), text-shadow: neon glow, ::before for sparkles
- **Checklist:** ☐ Neon colors balanced, ☐ Chrome effects visible, ☐ Glossy buttons styled, ☐ Bubble shapes decorative, ☐ Sparkle animations, ☐ Retro fonts loaded

### Cyberpunk UI
- **Keywords:** Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir
- **Colors:** #00FF00 (Matrix Green), #FF00FF (Magenta), #00FFFF (Cyan), #0D0D0D (Dark) / Neon gradients, scanline overlays, glitch colors, terminal green accents
- **Effects:** Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts
- **Best for:** Gaming platforms, tech products, crypto apps, sci-fi applications, developer tools, entertainment
- **Avoid for:** Corporate enterprise, healthcare, family apps, conservative brands, elderly users
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: #0D0D0D, color: #00FF00 or #FF00FF, font-family: monospace, text-shadow: 0 0 10px neon, animation: glitch (transform skew), ::before scanlines (repeating-linear-gradient)
- **Checklist:** ☐ Dark background only, ☐ Neon accents visible, ☐ Glitch effect subtle, ☐ Scanlines optional, ☐ Monospace font, ☐ Terminal aesthetic

### Organic Biophilic
- **Keywords:** Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures
- **Colors:** #228B22 (Forest Green), #8B4513 (Earth Brown), #87CEEB (Sky Blue), #F5F5DC (Beige) / Natural gradients, earth tones, sky blues, organic textures, wood/stone colors
- **Effects:** Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes
- **Best for:** Wellness apps, sustainability brands, eco products, health apps, meditation, organic food brands
- **Avoid for:** Tech-focused products, gaming, industrial, urban brands
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 16-24px (varied), background: earth tones, SVG organic shapes (blob), box-shadow: natural soft, color: #228B22 #8B4513 #87CEEB, texture overlays (subtle)
- **Checklist:** ☐ Earth tones dominant, ☐ Organic curves present, ☐ Natural textures subtle, ☐ Green accents, ☐ Rounded everywhere, ☐ Calming feel

### AI-Native UI
- **Keywords:** Chatbot, conversational, voice, assistant, agentic, ambient, minimal chrome, streaming text, AI interactions
- **Colors:** Neutral + single accent, #6366F1 (AI Purple), #10B981 (Success), #F5F5F5 (Background) / Status indicators, streaming highlights, context card colors, subtle accent variations
- **Effects:** Typing indicators (3-dot pulse), streaming text animations, pulse animations, context cards, smooth reveals
- **Best for:** AI products, chatbots, voice assistants, copilots, AI-powered tools, conversational interfaces
- **Avoid for:** Traditional forms, data-heavy dashboards, print-first content
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** chat bubble layout (flex-direction: column), typing animation (3 dots pulse), streaming text (overflow: hidden + animation), input: sticky bottom, context cards (border-left accent), minimal borders
- **Checklist:** ☐ Chat layout responsive, ☐ Typing indicator smooth, ☐ Input always visible, ☐ Context cards styled, ☐ AI responses distinct, ☐ User messages aligned right

### Memphis Design
- **Keywords:** 80s, geometric, playful, postmodern, shapes, patterns, squiggles, triangles, neon, abstract, bold
- **Colors:** #FF71CE (Hot Pink), #FFCE5C (Yellow), #86CCCA (Teal), #6A7BB4 (Blue Purple) / Complementary geometric colors, pattern fills, contrasting accent shapes
- **Effects:** transform: rotate(), clip-path: polygon(), mix-blend-mode, repeating patterns, bold shapes
- **Best for:** Creative agencies, music sites, youth brands, event promotion, artistic portfolios, entertainment
- **Avoid for:** Corporate finance, healthcare, legal, elderly users, conservative brands
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** clip-path: polygon() for shapes, background: repeating patterns, transform: rotate() for tilted elements, mix-blend-mode for overlays, border: dashed/dotted patterns, bold sans-serif
- **Checklist:** ☐ Geometric shapes visible, ☐ Colors bold/clashing, ☐ Patterns present, ☐ Layout asymmetric, ☐ Playful decorations, ☐ 80s vibe achieved

### Vaporwave
- **Keywords:** Synthwave, retro-futuristic, 80s-90s, neon, glitch, nostalgic, sunset gradient, dreamy, aesthetic
- **Colors:** #FF71CE (Pink), #01CDFE (Cyan), #05FFA1 (Mint), #B967FF (Purple) / Sunset gradients, glitch overlays, VHS effects, neon accents, pastel variations
- **Effects:** text-shadow glow, linear-gradient, filter: hue-rotate(), glitch animations, retro scan lines
- **Best for:** Music platforms, gaming, creative portfolios, tech startups, entertainment, artistic projects
- **Avoid for:** Business apps, e-commerce, education, healthcare, enterprise software
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: linear-gradient(180deg, #FF71CE, #01CDFE, #B967FF), filter: hue-rotate(), text-shadow: neon glow, retro grid (perspective + linear-gradient), VHS scanlines
- **Checklist:** ☐ Sunset gradient present, ☐ Neon glow applied, ☐ Retro grid visible, ☐ Glitch effects subtle, ☐ Dreamy atmosphere, ☐ 80s-90s aesthetic

### Dimensional Layering
- **Keywords:** Depth, overlapping, z-index, layers, 3D, shadows, elevation, floating, cards, spatial hierarchy
- **Colors:** Neutral base (#FFFFFF, #F5F5F5, #E0E0E0) + brand accent for elevated elements / Shadow variations (sm/md/lg/xl), elevation colors, highlight colors for top layers
- **Effects:** z-index stacking, box-shadow elevation (4 levels), transform: translateZ(), backdrop-filter, parallax
- **Best for:** Dashboards, card layouts, modals, navigation, product showcases, SaaS interfaces
- **Avoid for:** Print-style layouts, simple blogs, low-end devices, flat design requirements
- **Perf / A11y:** cost:low|drivers:none / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** z-index: 1-4 levels, box-shadow: elevation scale (sm/md/lg/xl), transform: translateZ(), backdrop-filter: blur(), position: relative for stacking, parallax on scroll
- **Checklist:** ☐ Layers clearly defined, ☐ Shadows show depth, ☐ Overlaps intentional, ☐ Hierarchy clear, ☐ Performance optimized, ☐ Mobile depth maintained

### Exaggerated Minimalism
- **Keywords:** Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design
- **Colors:** #000000 (Black), #FFFFFF (White), single vibrant accent only / Minimal - single accent color, no secondary colors, extreme restraint
- **Effects:** font-size: clamp(3rem 10vw 12rem), font-weight: 900, letter-spacing: -0.05em, massive whitespace
- **Best for:** Fashion, architecture, portfolios, agency landing pages, luxury brands, editorial
- **Avoid for:** E-commerce catalogs, dashboards, forms, data-heavy, elderly users, complex apps
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** font-size: clamp(3rem, 10vw, 12rem), font-weight: 900, letter-spacing: -0.05em, color: #000 or #FFF, padding: 8rem+, single accent, no decorations
- **Checklist:** ☐ Typography oversized, ☐ White space extreme, ☐ Black/white dominant, ☐ Single accent only, ☐ Elements minimal, ☐ Statement clear

### Kinetic Typography
- **Keywords:** Motion text, animated type, moving letters, dynamic, typing effect, morphing, scroll-triggered text
- **Colors:** Flexible - high contrast recommended, bold colors for emphasis, animation-friendly palette / Accent colors for emphasis, transition colors, gradient text fills
- **Effects:** @keyframes text animation, typing effect, background-clip: text, GSAP ScrollTrigger, split text
- **Best for:** Hero sections, marketing sites, video platforms, storytelling, creative portfolios, landing pages
- **Avoid for:** Long-form content, accessibility-critical, data interfaces, forms, elderly users
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** @keyframes for text animation, background-clip: text, GSAP SplitText, typing effect (steps()), transform on letters, scroll-triggered (Intersection Observer), variable fonts for morphing
- **Checklist:** ☐ Text animations smooth, ☐ Prefers-reduced-motion respected, ☐ Fallback for no-JS, ☐ Mobile performance ok, ☐ Typing effect timed, ☐ Scroll triggers work

### Parallax Storytelling
- **Keywords:** Scroll-driven, narrative, layered scrolling, immersive, progressive disclosure, cinematic, scroll-triggered
- **Colors:** Story-dependent, often gradients and natural colors, section-specific palettes / Section transition colors, depth layer colors, narrative mood colors
- **Effects:** transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations
- **Best for:** Brand storytelling, product launches, case studies, portfolios, annual reports, marketing campaigns
- **Avoid for:** E-commerce, dashboards, mobile-first, SEO-critical, accessibility-required
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** position: fixed/sticky, transform: translateY(calc()), perspective: 1px, z-index layering, scroll-snap-type, Intersection Observer for triggers, will-change: transform
- **Checklist:** ☐ Layers parallax smoothly, ☐ Story flows naturally, ☐ Mobile alternative provided, ☐ Performance optimized, ☐ Skip option available, ☐ Reduced motion fallback

### Swiss Modernism 2.0
- **Keywords:** Grid system, Helvetica, modular, asymmetric, international style, rational, clean, mathematical spacing
- **Colors:** #000000, #FFFFFF, #F5F5F5, single vibrant accent only / Minimal secondary, accent for emphasis only, no gradients
- **Effects:** display: grid, grid-template-columns: repeat(12 1fr), gap: 1rem, mathematical ratios, clear hierarchy
- **Best for:** Corporate sites, architecture, editorial, SaaS, museums, professional services, documentation
- **Avoid for:** Playful brands, children's sites, entertainment, gaming, emotional storytelling
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, grid-template-columns: repeat(12, 1fr), gap: 1rem (8px base unit), font-family: Inter/Helvetica, font-weight: 400-700, color: #000/#FFF, single accent
- **Checklist:** ☐ 12-column grid strict, ☐ Spacing mathematical, ☐ Typography hierarchy clear, ☐ Single accent only, ☐ No decorations, ☐ High contrast verified

### HUD / Sci-Fi FUI
- **Keywords:** Futuristic, technical, wireframe, neon, data, transparency, iron man, sci-fi, interface
- **Colors:** Neon Cyan #00FFFF, Holographic Blue #0080FF, Alert Red #FF0000 / Transparent Black, Grid Lines #333333
- **Effects:** Glow effects, scanning animations, ticker text, blinking markers, fine line drawing
- **Best for:** Sci-fi games, space tech, cybersecurity, movie props, immersive dashboards
- **Avoid for:** Standard corporate, reading heavy content, accessible public services
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border: 1px solid rgba(0,255,255,0.5), color: #00FFFF, background: transparent or rgba(0,0,0,0.8), font-family: monospace, text-shadow: 0 0 5px cyan
- **Checklist:** ☐ Fine lines 1px, ☐ Neon glow text/borders, ☐ Monospaced font, ☐ Dark/Transparent BG, ☐ Decorative tech markers, ☐ Holographic feel

### Pixel Art
- **Keywords:** Retro, 8-bit, 16-bit, gaming, blocky, nostalgic, pixelated, arcade
- **Colors:** Primary colors (NES Palette), brights, limited palette / Black outlines, shading via dithering or block colors
- **Effects:** Frame-by-frame sprite animation, blinking cursor, instant transitions, marquee text
- **Best for:** Indie games, retro tools, creative portfolios, nostalgia marketing, Web3/NFT
- **Avoid for:** Professional corporate, modern SaaS, high-res photography sites
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** font-family: 'Press Start 2P', image-rendering: pixelated, box-shadow: 4px 0 0 #000 (pixel border), no anti-aliasing
- **Checklist:** ☐ Pixelated fonts loaded, ☐ Images sharp (no blur), ☐ CSS box-shadow for pixel borders, ☐ Retro palette, ☐ Blocky layout

### Bento Grids (Legacy)
- **Keywords:** Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft
- **Colors:** Off-white #F5F5F7, Clean White #FFFFFF, Text #1D1D1F / Subtle accents, soft shadows, blurred backdrops
- **Effects:** Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal
- **Best for:** Product features, dashboards, personal sites, marketing summaries, galleries
- **Avoid for:** Long-form reading, data tables, complex forms
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, grid-template-columns: repeat(auto-fit, minmax(...)), gap: 1rem, border-radius: 20px, background: #FFF, box-shadow: subtle
- **Checklist:** ☐ Grid layout (CSS Grid), ☐ Rounded corners 16-24px, ☐ Varied card spans, ☐ Content fits card size, ☐ Responsive re-flow, ☐ Apple-like aesthetic

### Spatial UI (VisionOS)
- **Keywords:** Glass, depth, immersion, spatial, translucent, gaze, gesture, apple, vision-pro
- **Colors:** Frosted Glass #FFFFFF (15-30% opacity), System White / Vibrant system colors for active states, deep shadows for depth
- **Effects:** Parallax depth, dynamic lighting response, gaze-hover effects, smooth scale on focus
- **Best for:** Spatial computing apps, VR/AR interfaces, immersive media, futuristic dashboards
- **Avoid for:** Text-heavy documents, high-contrast requirements, non-3D capable devices
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backdrop-filter: blur(40px) saturate(180%), background: rgba(255,255,255,0.2), border-radius: 24px, box-shadow: 0 8px 32px rgba(0,0,0,0.1), transform: scale on focus, depth via shadows
- **Checklist:** ☐ Glass effect visible, ☐ Depth layers clear, ☐ Hover states defined, ☐ Colors vibrant on active, ☐ Floating feel achieved, ☐ Contrast maintained

### E-Ink / Paper
- **Keywords:** Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome
- **Colors:** Off-White #FDFBF7, Paper White #F5F5F5, Ink Black #1A1A1A / Pencil Grey #4A4A4A, Highlighter Yellow #FFFF00 (accent)
- **Effects:** No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)
- **Best for:** Reading apps, digital newspapers, minimal journals, distraction-free writing, slow-living brands
- **Avoid for:** Gaming, video platforms, high-energy marketing, dark mode dependent apps
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: #FDFBF7 (paper white), color: #1A1A1A, transition: none, font-family: serif for reading, no gradients, border: 1px solid #E0E0E0, texture overlay (noise)
- **Checklist:** ☐ Paper background color, ☐ High contrast text, ☐ No animations, ☐ Reading optimized, ☐ Distraction-free, ☐ Print-friendly

### Gen Z Chaos / Maximalism
- **Keywords:** Chaos, clutter, stickers, raw, collage, mixed media, loud, internet culture, ironic
- **Colors:** Clashing Brights: #FF00FF, #00FF00, #FFFF00, #0000FF / Gradients, rainbow, glitch, noise, heavily saturated mix
- **Effects:** Marquee scrolls, jitter, sticker layering, GIF overload, random placement, drag-and-drop
- **Best for:** Gen Z lifestyle brands, music artists, creative portfolios, viral marketing, fashion
- **Avoid for:** Corporate, government, healthcare, banking, serious tools
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** mix-blend-mode: multiply/screen, transform: rotate(random), animation: jitter, marquee text, position: absolute for scattered elements, filter: saturate(150%), z-index chaos
- **Checklist:** ☐ Colors clash intentionally, ☐ Stickers/overlays present, ☐ Layout chaotic but usable, ☐ GIFs optimized, ☐ Mobile scrollable, ☐ Performance acceptable

### Biomimetic / Organic 2.0
- **Keywords:** Nature-inspired, cellular, fluid, breathing, generative, algorithms, life-like
- **Colors:** Cellular Pink #FF9999, Chlorophyll Green #00FF41, Bioluminescent Blue / Deep Ocean #001E3C, Coral #FF7F50, Organic gradients
- **Effects:** Breathing animations, fluid morphing, generative growth, physics-based movement
- **Best for:** Sustainability tech, biotech, advanced health, meditation, generative art platforms
- **Avoid for:** Standard SaaS, data grids, strict corporate, accounting
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** SVG morphing (SMIL or GSAP), canvas for generative, animation: breathing (scale pulse), filter: blur for organic, clip-path for cellular, WebGL for advanced, physics libraries
- **Checklist:** ☐ Organic shapes present, ☐ Animations feel alive, ☐ Generative elements, ☐ Performance monitored, ☐ Mobile fallback, ☐ Accessibility alt content

### Anti-Polish / Raw Aesthetic
- **Keywords:** Hand-drawn, collage, scanned textures, unfinished, imperfect, authentic, human, sketch, raw marks, creative process
- **Colors:** Paper White #FAFAF8, Pencil Grey #4A4A4A, Marker Black #1A1A1A, Kraft Brown #C4A77D / Watercolor washes, pencil shading, ink splatters, tape textures, aged paper tones
- **Effects:** No smooth transitions, hand-drawn animations, paper texture overlays, jitter effects, sketch reveal
- **Best for:** Creative portfolios, artist sites, indie brands, handmade products, authentic storytelling, editorial
- **Avoid for:** Corporate enterprise, fintech, healthcare, government, polished SaaS
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: url(paper-texture.png), filter: grayscale() contrast(), border: hand-drawn SVG, transform: rotate(small random), no smooth transitions, sketch-style fonts, opacity variations
- **Checklist:** ☐ Textures loaded, ☐ Hand-drawn elements present, ☐ Imperfections intentional, ☐ Authentic feel achieved, ☐ Performance ok with textures, ☐ Accessibility maintained

### Tactile Digital / Deformable UI
- **Keywords:** Jelly buttons, chrome, clay, squishy, deformable, bouncy, physical, tactile feedback, press response
- **Colors:** Gradient metallics, Chrome Silver #C0C0C0, Jelly Pink #FF9ECD, Soft Blue #87CEEB / Glossy highlights, shadow depth, reflection effects, material-specific colors
- **Effects:** Press deformation (scale + squish), bounce-back (cubic-bezier), material response, haptic-like feedback, spring physics
- **Best for:** Modern mobile apps, playful brands, entertainment, gaming UI, consumer products, interactive demos
- **Avoid for:** Enterprise software, data dashboards, accessibility-critical, professional tools
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** transform: scale(0.95) on active, animation: bounce (cubic-bezier(0.34, 1.56, 0.64, 1)), box-shadow: inset for press, filter: brightness on press, spring physics (react-spring/framer-motion)
- **Checklist:** ☐ Press effect visible, ☐ Bounce-back smooth, ☐ Material feels tactile, ☐ Spring physics tuned, ☐ Mobile touch responsive, ☐ Reduced motion option

### Nature Distilled
- **Keywords:** Muted earthy, skin tones, wood, soil, sand, terracotta, warmth, organic materials, handmade warmth
- **Colors:** Terracotta #C67B5C, Sand Beige #D4C4A8, Warm Clay #B5651D, Soft Cream #F5F0E1 / Earth Brown #8B4513, Olive Green #6B7B3C, Warm Stone #9C8B7A, muted gradients
- **Effects:** Subtle parallax, natural easing (ease-out), texture overlays, grain effects, soft shadows
- **Best for:** Wellness brands, sustainable products, artisan goods, organic food, spa/beauty, home decor
- **Avoid for:** Tech startups, gaming, nightlife, corporate finance, high-energy brands
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: warm earth tones, color: #C67B5C #D4C4A8 #6B7B3C, border-radius: organic (varied), box-shadow: soft natural, texture overlays (grain), font: humanist sans-serif
- **Checklist:** ☐ Earth tones dominant, ☐ Warm feel achieved, ☐ Textures subtle, ☐ Handmade quality, ☐ Sustainable messaging, ☐ Calming aesthetic

### Interactive Cursor Design
- **Keywords:** Custom cursor, cursor as tool, hover effects, cursor feedback, pointer transformation, cursor trail, magnetic cursor
- **Colors:** Brand-dependent, cursor accent color, high contrast for visibility / Trail colors, hover state colors, magnetic zone indicators, feedback colors
- **Effects:** Cursor scale on hover, magnetic pull to elements, cursor morphing, trail effects, blend mode cursors, click feedback
- **Best for:** Creative portfolios, interactive experiences, agency sites, product showcases, gaming, entertainment
- **Avoid for:** Mobile-first (no cursor), accessibility-critical, data-heavy dashboards, forms
- **Perf / A11y:** cost:low|drivers:none / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** cursor: none (custom), position: fixed for cursor element, mix-blend-mode: difference, transform on hover targets, magnetic effect (JS position lerp), trail with opacity fade, scale on click
- **Checklist:** ☐ Custom cursor works, ☐ Hover morph smooth, ☐ Magnetic pull subtle, ☐ Trail performance ok, ☐ Click feedback visible, ☐ Touch fallback provided

### Voice-First Multimodal
- **Keywords:** Voice UI, multimodal, audio feedback, conversational, hands-free, ambient, contextual, speech recognition
- **Colors:** Calm neutrals: Soft White #FAFAFA, Muted Blue #6B8FAF, Gentle Purple #9B8FBB / Audio waveform colors, status indicators (listening/processing/speaking), success/error tones
- **Effects:** Voice waveform visualization, listening pulse, processing spinner, speak animation, smooth transitions
- **Best for:** Voice assistants, accessibility apps, hands-free tools, smart home, automotive UI, cooking apps
- **Avoid for:** Visual-heavy content, data entry, complex forms, noisy environments
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** Web Speech API integration, canvas for waveform, animation: pulse for listening, status indicators (color change), audio visualization (Web Audio API), minimal chrome, large touch targets
- **Checklist:** ☐ Voice recognition works, ☐ Visual feedback clear, ☐ Listening state obvious, ☐ Speaking animation smooth, ☐ Fallback UI provided, ☐ Accessibility excellent

### 3D Product Preview
- **Keywords:** 360 product view, rotatable, zoomable, touch-to-spin, AR preview, product configurator, interactive 3D model
- **Colors:** Product-dependent, neutral backgrounds: Soft Grey #E8E8E8, Pure White #FFFFFF / Shadow gradients, reflection planes, environment lighting colors, accent highlights
- **Effects:** Drag-to-rotate, pinch-to-zoom, spin animation, AR placement, material switching, smooth orbit controls
- **Best for:** E-commerce, furniture, fashion, automotive, electronics, jewelry, product configurators
- **Avoid for:** Content-heavy sites, blogs, dashboards, low-bandwidth, accessibility-critical
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** Three.js or model-viewer, OrbitControls, touch events for rotation, WebXR for AR, canvas with WebGL, loading placeholder, LOD for performance, environment lighting
- **Checklist:** ☐ 3D model loads fast, ☐ Rotation smooth, ☐ Zoom works (pinch/scroll), ☐ AR button functional, ☐ Colors switchable, ☐ Mobile touch works

### Gradient Mesh / Aurora Evolved
- **Keywords:** Complex gradients, mesh gradients, multi-color blend, aurora effect, flowing colors, iridescent, holographic, prismatic
- **Colors:** Multi-stop gradients: Cyan #00FFFF, Magenta #FF00FF, Yellow #FFFF00, Blue #0066FF, Green #00FF66 / Complementary mesh points, smooth color transitions, iridescent overlays, chromatic shifts
- **Effects:** CSS mesh-gradient (experimental), SVG gradients, canvas gradients, smooth color morphing, flowing animation
- **Best for:** Hero sections, backgrounds, creative brands, music platforms, fashion, lifestyle, premium products
- **Avoid for:** Data interfaces, text-heavy content, accessibility-critical, conservative brands
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** background: conic-gradient or mesh (SVG), animation: gradient flow (background-position), filter: hue-rotate for shimmer, mix-blend-mode: screen, canvas for complex mesh, multiple gradient layers
- **Checklist:** ☐ Mesh gradient visible, ☐ Colors flow smoothly, ☐ Aurora effect achieved, ☐ Performance acceptable, ☐ Text remains readable, ☐ Mobile renders ok

### Editorial Grid / Magazine
- **Keywords:** Magazine layout, asymmetric grid, editorial typography, pull quotes, drop caps, column layout, print-inspired
- **Colors:** High contrast: Black #000000, White #FFFFFF, accent brand color / Muted supporting, pull quote highlights, byline colors, section dividers
- **Effects:** Smooth scroll, reveal on scroll, parallax images, text animations, page-flip transitions
- **Best for:** News sites, blogs, magazines, editorial content, long-form articles, journalism, publishing
- **Avoid for:** Dashboards, apps, e-commerce catalogs, real-time data, short-form content
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid with named areas, column-count for text, ::first-letter for drop caps, blockquote styling, figure/figcaption, gap variations, font: serif for body, variable widths
- **Checklist:** ☐ Grid asymmetric, ☐ Typography editorial, ☐ Pull quotes styled, ☐ Drop caps present, ☐ Images large/impactful, ☐ Mobile reflows well

### Chromatic Aberration / RGB Split
- **Keywords:** RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect
- **Colors:** Offset RGB: Red #FF0000, Green #00FF00, Blue #0000FF, Black #000000 / Neon accents, scan lines, noise overlays, error colors
- **Effects:** RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover
- **Best for:** Music platforms, gaming, tech brands, creative portfolios, nightlife, entertainment, video platforms
- **Avoid for:** Corporate, healthcare, finance, accessibility-critical, elderly users
- **Perf / A11y:** cost:low|drivers:none / risk:high|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** filter: drop-shadow with offset colors, text-shadow: RGB offset (-2px 0 red, 2px 0 cyan), animation: glitch (random offset), ::before for scanlines, mix-blend-mode: screen for overlays
- **Checklist:** ☐ RGB split visible, ☐ Glitch effect controlled, ☐ Scan lines subtle, ☐ Performance ok, ☐ Readability maintained, ☐ Reduced motion option

### Vintage Analog / Retro Film
- **Keywords:** Film grain, VHS, cassette tape, polaroid, analog warmth, faded colors, light leaks, vintage photography
- **Colors:** Faded Cream #F5E6C8, Warm Sepia #D4A574, Muted Teal #4A7B7C, Soft Pink #E8B4B8 / Grain overlays, light leak oranges, shadow blues, vintage paper tones, desaturated accents
- **Effects:** Film grain overlay, VHS tracking effect, polaroid shake, fade-in transitions, light leak animations
- **Best for:** Photography portfolios, music/vinyl brands, vintage fashion, nostalgia marketing, film industry, cafes
- **Avoid for:** Modern tech, SaaS, healthcare, children's apps, corporate enterprise
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** filter: sepia() contrast() saturate(0.8), background: noise texture overlay, animation: VHS tracking (transform skew), light leak gradient overlay, border for polaroid frame, grain via SVG filter
- **Checklist:** ☐ Film grain visible, ☐ Colors faded/warm, ☐ Light leaks present, ☐ Nostalgic feel achieved, ☐ Performance with filters, ☐ Images look vintage


## Landing Page

### Hero-Centric Design
- **Keywords:** Large hero section, compelling headline, high-contrast CTA, product showcase, value proposition, hero image/video, dramatic visual
- **Colors:** Brand primary color, white/light backgrounds for contrast, accent color for CTA / Supporting colors for secondary CTAs, accent highlights, trust elements (testimonials, logos)
- **Effects:** Smooth scroll reveal, fade-in animations on hero, subtle background parallax, CTA glow/pulse effect
- **Best for:** SaaS landing pages, product launches, service landing pages, B2B platforms, tech companies
- **Avoid for:** Complex navigation, multi-page experiences, data-heavy applications
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** min-height: 100vh, display: flex, align-items: center, background: linear-gradient or image, text-shadow for readability, max-width: 800px for text, button with hover scale (1.05)
- **Checklist:** ☐ Hero section full viewport height, ☐ Headline visible above fold, ☐ CTA button high contrast, ☐ Background image optimized (WebP), ☐ Text readable on background, ☐ Mobile responsive layout

### Conversion-Optimized
- **Keywords:** Form-focused, minimalist design, single CTA focus, high contrast, urgency elements, trust signals, social proof, clear value
- **Colors:** Primary brand color, high-contrast white/light backgrounds, warning/urgency colors for time-limited offers / Secondary CTA color (muted), trust element colors (testimonial highlights), accent for key benefits
- **Effects:** Hover states on CTA (color shift, slight scale), form field focus animations, loading spinner, success feedback
- **Best for:** E-commerce product pages, free trial signups, lead generation, SaaS pricing pages, limited-time offers
- **Avoid for:** Complex feature explanations, multi-product showcases, technical documentation
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** form with focus states, input:focus ring, button: primary color high contrast, position: sticky for CTA, max-width: 600px for form, loading spinner, success/error states
- **Checklist:** ☐ Single primary CTA visible, ☐ Form fields minimal (3-5), ☐ Trust badges present, ☐ Social proof above fold, ☐ Mobile form optimized, ☐ Loading states implemented, ☐ A/B test ready

### Feature-Rich Showcase
- **Keywords:** Multiple feature sections, grid layout, benefit cards, visual feature demonstrations, interactive elements, problem-solution pairs
- **Colors:** Primary brand, bright secondary colors for feature cards, contrasting accent for CTAs / Supporting colors for: benefits (green), problems (red/orange), features (blue/purple), social proof (neutral)
- **Effects:** Card hover effects (lift/scale), icon animations on scroll, feature toggle animations, smooth section transitions
- **Best for:** Enterprise SaaS, software tools landing pages, platform services, complex product explanations, B2B products
- **Avoid for:** Simple product pages, early-stage startups with few features, entertainment landing pages
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), gap: 2rem, card hover effects (translateY -4px), icon containers, alternating background colors
- **Checklist:** ☐ Feature grid responsive, ☐ Icons consistent style, ☐ Card hover effects smooth, ☐ Alternating sections contrast, ☐ Benefits clearly stated, ☐ Mobile stacks properly

### Minimal & Direct
- **Keywords:** Minimal text, white space heavy, single column layout, direct messaging, clean typography, visual-centric, fast-loading
- **Colors:** Monochromatic primary, white background, single accent color for CTA, black/dark grey text / Minimal secondary colors, reserved for critical CTAs only, neutral supporting elements
- **Effects:** Very subtle hover effects, minimal animations, fast page load (no heavy animations), smooth scroll
- **Best for:** Simple service landing pages, indie products, consulting services, micro SaaS, freelancer portfolios
- **Avoid for:** Feature-heavy products, complex explanations, multi-product showcases
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** max-width: 680px, margin: 0 auto, padding: 4rem 2rem, font-size: 18-20px, line-height: 1.6, minimal animations, no box-shadow, clean borders only
- **Checklist:** ☐ Single column centered, ☐ White space generous, ☐ One primary CTA only, ☐ No decorative images, ☐ Page weight < 500KB, ☐ Load time < 2s

### Social Proof-Focused
- **Keywords:** Testimonials prominent, client logos displayed, case studies sections, reviews/ratings, user avatars, success metrics, credibility markers
- **Colors:** Primary brand, trust colors (blue), success/growth colors (green), neutral backgrounds / Testimonial highlight colors, logo grid backgrounds (light grey), badge/achievement colors
- **Effects:** Testimonial carousel animations, logo grid fade-in, stat counter animations (number count-up), review star ratings
- **Best for:** B2B SaaS, professional services, premium products, e-commerce conversion pages, established brands
- **Avoid for:** Startup MVPs, products without users, niche/experimental products
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** testimonial cards with avatar, logo grid (grayscale filter), star rating SVGs, counter animations (count-up), blockquote styling, carousel for testimonials, metric cards
- **Checklist:** ☐ Testimonials with real photos, ☐ Logo grid 6-12 logos, ☐ Star ratings accessible, ☐ Metrics animated on scroll, ☐ Case studies linked, ☐ Mobile carousel works

### Interactive Product Demo
- **Keywords:** Embedded product mockup/video, interactive elements, product walkthrough, step-by-step guides, hover-to-reveal features, embedded demos
- **Colors:** Primary brand, interface colors matching product, demo highlight colors for interactive elements / Product UI colors, tutorial step colors (numbered progression), hover state indicators
- **Effects:** Product animation playback, step progression animations, hover reveal effects, smooth zoom on interaction
- **Best for:** SaaS platforms, tool/software products, productivity apps landing pages, developer tools, productivity software
- **Avoid for:** Simple services, consulting, non-digital products, complexity-averse audiences
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** video element with controls, position: relative for overlays, hover reveal (opacity transition), step indicators, modal for full demo, screenshot lightbox, play button overlay
- **Checklist:** ☐ Demo video loads fast, ☐ Fallback for no-JS, ☐ Step indicators clear, ☐ Hover states obvious, ☐ Mobile touch friendly, ☐ Demo CTA prominent

### Trust & Authority
- **Keywords:** Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges
- **Colors:** Professional colors (blue/grey), trust colors, certification badge colors (gold/silver accents) / Certificate highlight colors, metric showcase colors, comparison highlight (success green)
- **Effects:** Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal
- **Best for:** Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services
- **Avoid for:** Casual products, entertainment, viral/social-first products
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** badge grid layout, shield icons, lock icons for security, certificate styling, metric cards with icons, professional color scheme (blue/grey), subtle shadows for depth
- **Checklist:** ☐ Security badges visible, ☐ Certifications verified, ☐ Metrics with sources, ☐ Professional imagery, ☐ Guarantee clearly stated, ☐ Contact info accessible

### Storytelling-Driven
- **Keywords:** Narrative flow, visual story progression, section transitions, consistent character/brand voice, emotional messaging, journey visualization
- **Colors:** Brand primary, warm/emotional colors, varied accent colors per story section, high visual variety / Story section color coding, emotional state colors (calm, excitement, success), transitional gradients
- **Effects:** Section-to-section animations, scroll-triggered reveals, character/icon animations, morphing transitions, parallax narrative
- **Best for:** Brand/startup stories, mission-driven products, premium/lifestyle brands, documentary-style products, educational
- **Avoid for:** Technical/complex products (unless narrative-driven), traditional enterprise software
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** scroll-snap sections, Intersection Observer for reveals, parallax backgrounds, section transitions, timeline CSS, narrative typography (varied sizes), image-text alternating
- **Checklist:** ☐ Story flows naturally, ☐ Scroll reveals smooth, ☐ Sections timed well, ☐ Emotional hooks present, ☐ Mobile story readable, ☐ Skip option available


## Mobile

### Bauhaus (包豪斯)
- **Keywords:** bauhaus, geometric, constructivist, primary colors, hard shadow, bold, tactile, functional, poster, mechanical, architectural
- **Colors:** Primary Red #D02020, Primary Blue #1040C0, Primary Yellow #F0C020 / Background #F0F0F0 (Off-white), Foreground #121212 (Stark Black), Muted #E0E0E0
- **Effects:** Hard offset shadows (4px 4px 0px black), mechanical press active:translate, no smooth hover — instant 0ms transitions, dot grid pattern on sections, slide-over transitions
- **Best for:** Mobile-first apps needing high personality, onboarding flows, branding-forward product screens, artisan/design brands, editorial mobile experiences
- **Avoid for:** Enterprise dashboards, accessibility-critical contexts (requires extra a11y work), data-heavy screens, conservative industries
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 0px (cards/inputs) or 9999px (buttons/FAB), box-shadow: 4px 4px 0px 0px #121212, active:translate-x-[2px] active:translate-y-[2px] active:shadow-none, border: 2px solid #121212, font-family: Outfit, font-weight: 900 uppercase tracking-tighter (headlines)
- **Checklist:** ☐ Geometric shapes only (circle/square), ☐ Primary color blocking applied, ☐ Hard offset shadows 4px, ☐ border-2 border-black on all elements, ☐ Mechanical press active state, ☐ Outfit Black 900 uppercase headlines, ☐ Safe area (pt-safe pb-safe) respected, ☐ Thumb-friendly h-12/h-14 touch targets, ☐ No hover states (mobile-only), ☐ Vertical rhythm single-column stack

### Minimalist Monochrome
- **Keywords:** monochrome, black white, editorial, austere, typographic, sharp, zero radius, high contrast, brutalist, pocket editorial, serif, mechanical
- **Colors:** Pure Black #000000, Pure White #FFFFFF / Muted #F5F5F5, Dark Gray #525252, Border Light #E5E5E5
- **Effects:** Instant inversion active state (tap → bg-black text-white, zero transition-none), no shadows (strictly 2D), full-bleed horizontal rules (4px black section dividers), subtle paper noise texture (opacity: 0.03), slide-in page transitions with hard edge
- **Best for:** Luxury fashion e-commerce mobile, editorial publications, high-end portfolio apps, experimental/avant-garde brands, digital exhibitions
- **Avoid for:** Entertainment, colorful brands, friendly consumer apps, anything requiring visual warmth or gradient
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** border-radius: 0px (ALL elements including modals), box-shadow: none, active:bg-black active:text-white transition-none, border-b-4 border-black (section dividers), divide-y divide-black (lists), font-family: Playfair Display (headers) + Source Serif 4 (body) + JetBrains Mono (labels), background-image: noise SVG opacity-[0.03]
- **Checklist:** ☐ 0px border-radius on ALL elements, ☐ No shadows anywhere, ☐ Instant inversion on every tap (transition-none), ☐ 4px black line separates hero from content, ☐ Safe area respected (pt-safe pb-safe), ☐ h-14 touch targets, ☐ Sticky section headers with border-b, ☐ Typography hero: word spans full screen width, ☐ Paper noise texture on backgrounds, ☐ Menu word-label instead of icon

### Modern Dark (Cinema Mobile)
- **Keywords:** dark mode, cinematic, ambient light, glassmorphism, deep black, indigo, glow, blur, atmospheric, reanimated, haptic, premium, layered, frosted glass, linear gradient
- **Colors:** Deep #020203, Base #050506, Elevated #0a0a0c, Accent #5E6AD2 / Foreground #EDEDEF, Muted #8A8F98, Accent Glow rgba(94 106 210/0.2), Border rgba(255 255 255/0.08), Surface rgba(255 255 255/0.05)
- **Effects:** Expo.out Bezier(0.16,1,0.3,1) easing; spring modals (damping:20 stiffness:90); haptic-linked press (Impact Light/Medium); animated ambient light blobs (Reanimated translateX/Y slow oscillation); BlurView glassmorphism headers/nav (intensity 20); scale press 0.97 → 1.0; avoid pure #000000 (OLED smear)
- **Best for:** Developer tools, pro productivity apps, fintech/trading dashboards, media/streaming platforms, AI tool interfaces, high-end gaming companion apps
- **Avoid for:** Consumer apps needing warmth, children's apps, health/medical contexts where dark feels harsh, high-accessibility contexts needing maximum contrast
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderRadius: 16 (cards/buttons), background: LinearGradient #0a0a0f→#020203, border: StyleSheet.hairlineWidth rgba(255,255,255,0.08), BlurView intensity={20} tint='dark', useAnimatedStyle + withRepeat (blob oscillation), Easing.bezier(0.16,1,0.3,1), withSpring damping:20 stiffness:90, Haptics.impactAsync(ImpactFeedbackStyle.Light), scale: 0.97 press
- **Checklist:** ☐ No pure #000000 backgrounds, ☐ LinearGradient base screen, ☐ Animated ambient blobs (Reanimated, native driver), ☐ BlurView on tab bar and headers, ☐ borderRadius 16 on all cards, ☐ Haptic feedback on every Pressable, ☐ Bezier(0.16,1,0.3,1) easing used, ☐ Accent glow behind primary button, ☐ No solid grey borders (rgba only), ☐ Bottom sheets replace all modals

### SaaS Mobile (High-Tech Boutique)
- **Keywords:** saas, electric blue, gradient, fintech, spring animation, dual font, glassmorphism, boutique, premium, calistoga, inter, mono, tactile, haptic, bento
- **Colors:** Electric Blue #0052FF, Gradient End #4D7CFF / Background #FAFAFA, Foreground #0F172A, Muted #F1F5F9, Card #FFFFFF, Border #E2E8F0
- **Effects:** Spring animations (mass:1 damping:15 stiffness:120); gradient buttons (0052FF→4D7CFF); scale press 0.96→1.0 with haptics; floating FAB with gentle bobbing (Reanimated); glassmorphism BlurView navigation bars; staggered fade-in entrance (Y:20→0 + opacity:0→1); pulsing status dot on section badges; layout transitions (LayoutAnimation or Reanimated entering)
- **Best for:** B2B SaaS mobile dashboards, fintech apps, developer tool mobile companions, marketing analytics apps, HR/operations apps, modern business productivity
- **Avoid for:** Pure consumer entertainment, children's apps, highly decorative lifestyle apps, contexts where Electric Blue feels too corporate
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderRadius: 16 (buttons/cards), LinearGradient colors={['#0052FF','#4D7CFF']}, shadowOpacity: 0.1, shadowRadius: 10, elevation: 4, Haptics.impactAsync(ImpactFeedbackStyle.Light) on press, withSpring({mass:1, damping:15, stiffness:120}), withTiming Y:20→0 opacity:0→1 staggered entrance, LayoutAnimation.configureNext for list updates, BlurView on nav bars
- **Checklist:** ☐ SafeAreaView wraps all screens, ☐ All touch targets ≥ 44×44px, ☐ Spring config used for all transitions, ☐ Gradient buttons (not flat), ☐ Haptic on every Pressable, ☐ Section badges with PulseDot, ☐ Staggered entrance animation on screen mount, ☐ JetBrains Mono for data labels, ☐ Calistoga for hero headlines, ☐ Elevation/shadow on cards

### Terminal CLI (Mobile)
- **Keywords:** terminal, cli, matrix green, monospace, hacker, ascii, command line, developer, web3, crypto, sci-fi, OLED, retro-future, field operative
- **Colors:** Matrix Green #33FF00, OLED Black #050505 / Amber #FFB000, Muted Green #1A3D1A, Error Red #FF3333, Border Green #33FF00
- **Effects:** Blinking cursor (500ms opacity loop), typewriter text reveal hook, scanline overlay (repeating lines 0.05 opacity), ASCII art headers, instant color inversion on press (bg-green text-black), haptic on every keystroke, boot sequence splash on launch
- **Best for:** Developer tools, Web3/blockchain apps, geek-culture apps, ARG games, sci-fi/noir gaming companions, hacker/security tools, creative studio portfolios
- **Avoid for:** Consumer products, health apps, anything requiring approachability or warmth, children's apps, standard enterprise contexts
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderRadius: 0 (ALL elements), borderWidth: 1, borderColor: '#33FF00', backgroundColor: '#050505', color: '#33FF00', fontFamily: 'SpaceMono-Regular' or JetBrains Mono, fontSize: 12 or 14 or 16 only, lineHeight: 1.2x fontSize, Haptics.impactAsync(Light) on every press, useAnimatedValue blink 500ms, hitSlop: 12px all sides for bracketed buttons
- **Checklist:** ☐ 0px border-radius everywhere, ☐ ASCII-style borders on cards, ☐ Boot sequence on launch, ☐ Blinking cursor component, ☐ Typewriter hook for new content, ☐ Scanline overlay (0.05 opacity), ☐ Haptic on every button press, ☐ Footer status bar component, ☐ hitSlop on all bracketed buttons (44×44dp), ☐ Reduced motion respected

### Kinetic Brutalism (Mobile)
- **Keywords:** kinetic, brutalism, motion, marquee, acid yellow, uppercase, oversized, aggressive typography, street, zine, high contrast, scroll-driven, haptic, reanimated
- **Colors:** Acid Yellow #DFE104, Rich Black #09090B / Off-white #FAFAFA, Dark Gray #27272A, Zinc #A1A1AA, Border Zinc #3F3F46
- **Effects:** Infinite marquee (Reanimated, Linear easing, 5s loop, hard clip), hero parallax (scale 1.0→1.3 + fade), sticky section header push, card flood inversion on press (bg→#DFE104, text→#000000), haptic Medium on every press, scroll-triggered interpolate transforms, 0px radius, 2px borders, 100ms color transitions
- **Best for:** Immersive storytelling apps, brand flagship mobile, music/culture platforms, sports apps, underground zines, limited-edition product drops, performance dashboards
- **Avoid for:** Calm informational apps, healthcare, finance contexts needing trust, children's, any context where aggressive typography feels inappropriate
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderRadius: 0, borderWidth: 2, borderColor: '#3F3F46', backgroundColor: '#09090B', color: '#FAFAFA', fontWeight: '800 or 900', letterSpacing: -1 (large) or 2 (labels), lineHeight: 0.9–1.1 * fontSize, Reanimated withRepeat marquee timing 5000ms Easing.linear, Interpolate scroll→scale + opacity, Haptics.impactAsync(Medium), scale press: 0.95, 100ms color transitions
- **Checklist:** ☐ Infinite marquee rows (Reanimated, no fade edges), ☐ Hero parallax scroll (scale+opacity Interpolate), ☐ All display text uppercase, ☐ 0px border-radius, ☐ 2px borders, ☐ Acid yellow card flood on press, ☐ Haptic Medium on every interaction, ☐ Font scale helper (windowWidth/375*size), ☐ Safe area for massive headers, ☐ Reduced motion stops marquees

### Flat Design Mobile (Touch-First)
- **Keywords:** flat, 2D, no shadow, color blocking, geometric, bold, poster, icon, touch-first, minimal, clean, tailored, cross-platform
- **Colors:** Blue #3B82F6, Emerald #10B981 / Background #FFFFFF, Surface #F3F4F6, Text #111827, Amber #F59E0B, Border #E5E7EB
- **Effects:** Immediate press feedback (scale 0.97, no delay), color section blocking (full-width contrasting View), zero elevation/shadow, solid icon containers (colored squares/circles), geometric low-opacity shape overlays, bottom tabs solid fill (no floating)
- **Best for:** Cross-platform apps (iOS+Android parity), information-dense dashboards, system UI, brand illustration, onboarding flows, marketing pages, icon design
- **Avoid for:** Ultra-premium contexts needing depth/shadow, dark-mode-first products, contexts where flat design reads as unfinished or sterile
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** shadowOpacity: 0, elevation: 0, borderRadius: 6/12/999, height: 48 minimum touch targets, spacing: 4/8/16/24/32/48 system, backgroundColor (section blocking), Pressable scale: pressed ? 0.97 : 1, fontWeight: '800' heads / '600' sub / '400' body, letterSpacing: -0.5 heads / 1 labels, textTransform: 'uppercase' labels, strokeWidth={2.5} icons, borderWidth: 3/4 for featured CTAs
- **Checklist:** ☐ Zero elevation AND shadowOpacity on all elements, ☐ Color-blocking sections (not borders), ☐ All touch targets ≥ 48×48, ☐ No gradients on flat elements, ☐ Icons inside solid colored containers, ☐ Pressable scale feedback, ☐ Geometric shapes as bg decoration, ☐ Bold flat bottom tabs (no floating), ☐ Primary headlines much larger than body, ☐ 4pt spacing system throughout

### Material 3 Expressive (Mobile)
- **Keywords:** material 3 expressive, vibrant color, spring motion, adaptive components, flexible typography, contrasting shapes, android
- **Colors:** Primary Violet #6750A4, Secondary Container #E8DEF8, Tertiary #7D5260 / Surface #FFFBFE, On Surface #1C1B1F, Surface Container #F3EDF7, Outline #79747E
- **Effects:** Tonal elevation (overlay colors instead of strong shadows), pill-shaped buttons and chips (borderRadius 999), emphasized easing Easing.bezier(0.2,0,0,1), state layers (pressed overlays 10–15% opacity), Reanimated-filled label float for inputs, HapticFeedback on FAB/toggles
- **Best for:** Android, Wear OS, and Pixel-aligned products using Material 3 components
- **Avoid for:** Ultra-minimal brutalist brands, terminal/hacker aesthetics, monochrome editorial apps
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderRadius: 999 (buttons/chips), containerRadius: 16–28, backgroundColor: '#FFFBFE', colorPrimary: '#6750A4', colorSecondaryContainer: '#E8DEF8', colorSurfaceContainer: '#F3EDF7', outlineColor: '#79747E', Pressable state-layer overlay (opacity 0.1–0.15), Easing.bezier(0.2,0,0,1), HapticFeedback.impactMedium on FAB, floating label using Reanimated translateY/scale
- **Checklist:** ☐ MD3 color tokens applied (background/surface/container), ☐ All CTAs are pill-shaped, ☐ State-layer overlays instead of opacity 0.5 hacks, ☐ Emphasized easing used for all animations, ☐ Floating label inputs implemented, ☐ FAB uses tertiary color with correct elevation, ☐ Safe areas respected for organic shapes, ☐ No pure white background, ☐ No harsh box-shadows (ambient only)

### Neo Brutalism (Mobile)
- **Keywords:** neo brutalism, pop art, stickers, thick borders, cream background, hot red, vivid yellow, soft violet, hard offset shadow, mechanical press, collage
- **Colors:** Cream #FFFDF5, Hot Red #FF6B6B, Vivid Yellow #FFD93D / Soft Violet #C4B5FD, Pure Black #000000, White #FFFFFF
- **Effects:** Thick 4px black borders on all major elements, hard offset shadows (4–8px, no blur), mechanical press: translateX/Y equal to shadow offset, slightly rotated cards/badges (-2deg/2deg), high-saturation color blocking, spring/linear animations only
- **Best for:** Creative tools, collab platforms, Gen Z marketing & e-commerce, portfolio sites, sticker-book style content apps
- **Avoid for:** Serious enterprise apps, conservative industries, sober fintech, accessibility-first contexts (must tune contrast)
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** borderWidth: 4 (primary), 2 (secondary), borderRadius: 0 or 999 (badges only), backgroundColor: '#FFFDF5', shadow implemented as offset View, transform: [{translateX:4},{translateY:4}] on PressIn, fontFamily: 'SpaceGrotesk-Bold', fontWeight: '700/900', transform: [{ rotate: '-1deg' }] on cards, padding: 20
- **Checklist:** ☐ 4px borders on major elements, ☐ Hard offset shadow implemented via extra View, ☐ Mechanical press hides shadow, ☐ Cream canvas background, ☐ Pop-art color palette used, ☐ Cards/badges slightly rotated, ☐ No gradients or soft shadows, ☐ Only bold/black type weights, ☐ Badges slapped with absolute positioning, ☐ Anti-patterns (no subtle gray, no blur) avoided

### Bold Typography (Mobile Poster)
- **Keywords:** bold typography, editorial, poster, broadsheet, vermillion, negative space, edge-to-edge type, underline CTA, near-black, warm white
- **Colors:** Near Black #0A0A0A, Warm White #FAFAFA / Muted #1A1A1A, Secondary Text #737373, Accent Vermillion #FF3D00, Border #262626
- **Effects:** Hero headlines 48–72px (5:1 vs body size), tight tracking (-1.5px), edge-to-edge type, massive vertical spacing (60px+), underline CTAs (2–3px accent line), instant 200ms transitions (no bounce), strictly 0px radius containers, color shifts for active state instead of elevation
- **Best for:** Creative brand heroes, reading-focused apps, event/exhibition pages, editorial mobile experiences, landing hero sections
- **Avoid for:** Utility dashboards, kids apps, playful consumer products, contexts needing many icons or heavy imagery
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#0A0A0A', color: '#FAFAFA', accent: '#FF3D00', borderColor: '#262626', borderRadius: 0, paddingHorizontal: 24, headline style: fontSize:56–72, fontWeight:'700/800', letterSpacing:-1.5, lineHeight:1.1*fontSize, body: fontSize:16–18, lineHeight:1.6*fontSize, underline CTA: 2–3px height View under text, transition: 200ms cubic-bezier(0.25,0,0,1)
- **Checklist:** ☐ H1 at least 4–5× body size, ☐ All containers 0 radius, ☐ Underline CTA pattern used, ☐ Large vertical gaps between sections, ☐ No shadows or soft corners, ☐ Accent used only for interaction, ☐ Text bleeds to/over screen edges, ☐ Animation timings 200ms, ☐ Accessible contrast ≥ 18:1, ☐ Body text never below 16px

### Academia (Scholarly Mobile)
- **Keywords:** academia, library, mahogany, parchment, brass, crimson, serif, drop cap, arch-top, vignette, leather, scholarly, tactile
- **Colors:** Mahogany #1C1714, Oak #251E19 / Parchment #E8DFD4, Worn Leather #3D332B, Faded Ink #9C8B7A, Brass #C9A962, Library Crimson #8B2635
- **Effects:** Deep mahogany backgrounds, oak surface cards, brass accented CTAs, arch-top hero/imagery, heavy vignette overlays, sepia-tinted images, drop caps with brass Cinzel, Roman numeral volume headings, slow timing-based animations (Easing.out poly(4)), zero neon or modern tech cues
- **Best for:** Knowledge management apps, deep reading tools, ritual-heavy personal brands, lore-heavy RPG/roleplay apps, culture-specific community platforms
- **Avoid for:** Hyper-modern tech dashboards, neon/glassmorphism, playful Gen Z branding
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#1C1714', altSurface: '#251E19', textColor: '#E8DFD4', mutedBg: '#3D332B', borderColor: '#4A3F35', brass: '#C9A962', crimson: '#8B2635', borderRadius: 4 (default), archTopRadius: 100 for hero, shadowOpacity:0.4 shadowRadius:6 elevation:8 for cards, textShadow on headings, vignette overlay via LinearGradient
- **Checklist:** ☐ Mahogany/oak/parchment palette applied, ☐ Brass used on all tappable items, ☐ Arch-top imagery used in hero/cards, ☐ Drop caps & Roman numerals used, ☐ Vignette overlay present, ☐ No sans-serif body fonts, ☐ No neon/bright modern colors, ☐ Animations use non-spring timing, ☐ Inputs use worn-leather style, ☐ Wax seal badges implemented

### Cyberpunk Mobile HUD
- **Keywords:** cyberpunk, neon, glitch, chamfered, orbitron, jetbrains, scanlines, crt, hud, matrix, military, decker
- **Colors:** Void #0A0A0F, Card #12121A / Neon Green #00FF88, Neon Magenta #FF00FF, Cyber Cyan #00D4FF, Neutral Text #E0E0E0, Alert Red #FF3366, Border #2A2A3A
- **Effects:** Deep void background with neon radiance, chamfered 45° corners via SVG/Skia, scanline overlay, CRT flicker opacity oscillation, glitch animations (translateX ±2), neon pulses around buttons, HUD corner brackets, terminal prompt text inputs, heavy use of blurView holographic panels
- **Best for:** Gaming dashboards, crypto/cyberpunk apps, sci-fi companion tools, hacker OS skins, data-heavy monitoring HUDs
- **Avoid for:** Serious enterprise, health/finance requiring calm trust, minimal editorial apps
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#0A0A0F', cardBg: '#12121A', accent: '#00FF88', accent2: '#FF00FF', accent3: '#00D4FF', borderColor: '#2A2A3A', destructive: '#FF3366', borderRadius: 0, chamfer via SVG path, shadowColor accent with animated radius, scanline overlay View pointerEvents='none', withRepeat glitch translateX [-2,2,0], Easing.steps(2)
- **Checklist:** ☐ Chamfered corners used instead of radius, ☐ Scanline & CRT flicker implemented, ☐ Orbitron + JetBrains Mono typography, ☐ Neon glow shadows on primary buttons, ☐ Glitch animation on active states, ☐ Prompt-style inputs with custom cursor, ☐ HUD corner brackets implemented, ☐ Safe-area system status bar styled, ☐ Reduced motion disables glitch/flicker, ☐ Icons configured with Lucide accent color

### Bitcoin DeFi (Mobile)
- **Keywords:** web3, bitcoin, defi, digital gold, fintech, wallet, orange, glassmorphism, gradient, blur, holographic, trust, precision
- **Colors:** Bitcoin Orange #F7931A, Burnt Orange #EA580C, Digital Gold #FFD600 / Void #030304, Dark Matter #0F1115, Pure Light #FFFFFF, Stardust #94A3B8, Border Dim rgba(30,41,59,0.2)
- **Effects:** Deep void + dark matter surfaces, Bitcoin orange/gold gradients for CTAs, pill buttons with glowing shadows, glassmorphic BlurView nav, monospace data rows, gradient text balances + masked orange-gold, pulsing status indicators and vertical ledger timelines, ultra-thin borders, high-precision typography
- **Best for:** DeFi dashboards, wallets, NFT marketplaces, Web3 social, metaverse utilities, high-tech fintech brands
- **Avoid for:** Playful casual apps, low-tech brands, ultra-minimal editorial apps
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#030304', cardBg: '#0F1115', textColor: '#FFFFFF', mutedText: '#94A3B8', borderColor: 'rgba(30,41,59,0.2)', accentBitcoin: '#F7931A', accentBurnt: '#EA580C', accentGold: '#FFD600', borderRadius: 24 for cards, radiusPill: 999 for buttons, BlurView intensity 20, LinearGradient on CTAs, shadowColor '#F7931A' shadowRadius up to 10, JetBrains Mono for numeric text
- **Checklist:** ☐ Void/dark-matter palette applied, ☐ Bitcoin orange/gold gradient buttons, ☐ BlurView nav implemented, ☐ Monospace for numeric data, ☐ Hairline borders on blocks, ☐ Gradient text on balances, ☐ Pulsing network status indicators, ☐ Ledger vertical timeline, ☐ Haptics on money actions, ☐ SafeArea + FlashList for heavy lists

### Claymorphism (Mobile)
- **Keywords:** claymorphism, clay, 3d, soft, bubbly, candy, playful, rounded, squish, tactile, inflate, silicone, haptic, spring
- **Colors:** Vivid Violet #7C3AED, Hot Pink #DB2777 / Canvas #F4F1FA, Soft Charcoal #332F3A, Emerald #10B981, Amber #F59E0B, Lavender-Gray #635F69
- **Effects:** Multi-layer shadow stacks (nested View) to simulate clay depth, LinearGradient #A78BFA→#7C3AED buttons, borderRadius 40–50 outer / 32 cards / 20 buttons, Reanimated spring squish (scale 0.92 on press), BlurView glass-clay hybrid cards, floating blobs with slow ±20px drift, Haptics Light on every press
- **Best for:** Children education apps, teen social products, crypto gamification, creative tools, brand mascot-led apps
- **Avoid for:** Serious enterprise, high-density data, editorial reading apps, fintech trust signals
- **Perf / A11y:** cost:high|drivers:animation,large-images / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#F4F1FA', cardBg: 'rgba(255,255,255,0.7)', textPrimary: '#332F3A', textMuted: '#635F69', accentPrimary: '#7C3AED', accentSecondary: '#DB2777', success: '#10B981', warning: '#F59E0B', radiusOuter: 50, radiusCard: 32, radiusButton: 20, shadowStack: 'nested View', gradientButton: ['#A78BFA', '#7C3AED'], springDamping: 10
- **Checklist:** ☐ Background uses #F4F1FA (no pure white), ☐ Multi-layer clay shadow stack applied, ☐ Cards use blurred glass-clay hybrid, ☐ Buttons squish to scale 0.92 on press, ☐ Spring physics on all interactions, ☐ Nunito Black for headings, ☐ Background blobs drifting, ☐ Haptics on every press, ☐ Nested border radius (card 32, inner 24), ☐ Bento layout with hero span

### Enterprise SaaS (Mobile)
- **Keywords:** enterprise, saas, b2b, professional, indigo, violet, gradient, polished, trustworthy, clean, approachable, spring, haptic
- **Colors:** Indigo #4F46E5, Violet #7C3AED / Slate 50 #F8FAFC, White #FFFFFF, Slate 900 #0F172A, Slate 500 #64748B, Emerald #10B981, Slate 200 #E2E8F0
- **Effects:** Indigo→Violet gradient primary CTAs + active tab highlights, colored card shadows rgba(79,70,229,0.08), pill buttons or 12pt radius, full-width CTA at screen bottom, spring press scale 0.97, floating label inputs with animated focus border, skeletal loading pulses (Indigo/Slate tint), Bottom Sheets with drag dismiss, swipe-to-action list cards, scroll-linked title collapse
- **Best for:** B2B backend management, productivity tools, government and finance mobile apps, SaaS companion apps, enterprise dashboards
- **Avoid for:** Pure consumer entertainment, Gen-Z youth apps, gaming UI, ultra-minimal editorial
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#F8FAFC', surfaceBg: '#FFFFFF', textPrimary: '#0F172A', textMuted: '#64748B', primary: '#4F46E5', secondary: '#7C3AED', success: '#10B981', border: '#E2E8F0', radiusCard: 16, radiusButton: 999, radiusInput: 8, shadowCard: 'rgba(79,70,229,0.08)', gradientPrimary: ['#4F46E5', '#7C3AED'], screenPadding: 20
- **Checklist:** ☐ Background #F8FAFC applied, ☐ Indigo→Violet gradient on primary CTA, ☐ Colored card shadows (not gray), ☐ Plus Jakarta Sans typography, ☐ Floating label inputs with Indigo focus, ☐ Scale 0.97 press with haptic Medium, ☐ Bottom Tab Navigation implemented, ☐ Safe Area strict compliance, ☐ Skeletal loading placeholders, ☐ Reduced Motion fallback

### Sketch Hand-Drawn (Mobile)
- **Keywords:** sketch, hand-drawn, handwriting, wobbly, imperfect, paper, kalam, organic, collage, post-it, tape, offset shadow, scribble
- **Colors:** Red Marker #FF4D4D, Pencil Black #2D2D2D / Warm Paper #FDFBF7, Old Paper #E5E0D8, Blue Ballpoint #2D5DA1, Post-it Yellow #FFF9C4
- **Effects:** Wobbly borderRadius (unique per corner: 15/25/20/10), borderWidth 2–3 solid/dashed, hard offset shadow via rear View (4px,4px) #2D2D2D, Kalam Bold headings, PatrickHand Regular body, slight rotation (-1deg/1deg) on cards, absolute SVG scribble overlays (arrows/tape/tacks), jiggle -2deg↔2deg on error, LayoutAnimation spring on layout changes, Haptics on press, paper texture repeating background
- **Best for:** Low-fidelity prototyping, creative brands, children/picturebook apps, education tools, journaling apps, gamified puzzles
- **Avoid for:** Enterprise dashboards, high-density data tables, fintech precision tools, medical or legal apps
- **Perf / A11y:** cost:low|drivers:none / risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#FDFBF7', cardBg: '#FFFFFF', textPrimary: '#2D2D2D', accentRed: '#FF4D4D', accentBlue: '#2D5DA1', accentYellow: '#FFF9C4', border: '#2D2D2D', shadowView: 'offset 4px 4px #2D2D2D', wobblyRadius: [15,25,20,10], fontHeading: 'Kalam-Bold', fontBody: 'PatrickHand-Regular'
- **Checklist:** ☐ Warm paper background texture applied, ☐ Kalam Bold headings, ☐ Wobbly corner radii on all cards, ☐ Hard offset shadow View (not blur), ☐ Cards slightly rotated, ☐ Button press shifts to cover shadow, ☐ SVG tape/tack decorations, ☐ PatrickHand for inputs, ☐ Jiggle error animation, ☐ Minimum 48x48 touch targets

### Neumorphism (Mobile)
- **Keywords:** neumorphism, soft ui, dual shadow, extruded, inset, clay surface, monochromatic, cool grey, haptic, ceramic, physical, depth
- **Colors:** Accent Violet #6C63FF, Clay Base #E0E5EC / Text Dark #3D4852, Text Muted #6B7280, Shadow Light rgba(255,255,255,0.6), Shadow Dark rgba(163,177,198,0.7), Inset Background #D1D9E6
- **Effects:** Full-screen #E0E5EC base, dual-layer shadow via nested View (light top-left + dark bottom-right), extruded convex resting state, inset concave pressed/input state, Reanimated scale 0.97 on press, shadow opacity interpolates 1→0.4 on press, Haptics Light on every interaction, 8pt grid, no blur shadows (no shadowRadius blend), nested depth (extruded card contains inset icon slot)
- **Best for:** Minimal hardware controls, smart home apps, aesthetic utility tools, health monitors, brand showcase pages
- **Avoid for:** High-density data, bright multi-color apps, apps needing strong visual hierarchy via color, dark-mode-only products
- **Perf / A11y:** cost:low|drivers:none / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** backgroundColor: '#E0E5EC', textPrimary: '#3D4852', textMuted: '#6B7280', accent: '#6C63FF', shadowLight: 'rgba(255,255,255,0.6)', shadowDark: 'rgba(163,177,198,0.7)', insetBg: '#D1D9E6', radiusCard: 32, radiusButton: 16, radiusPill: 999, shadowOffset: 6, shadowRadius: 10
- **Checklist:** ☐ Single #E0E5EC base applied across all screens, ☐ Dual shadow (light+dark) implemented via nested View, ☐ Extruded resting state on cards/buttons, ☐ Inset concave state on inputs, ☐ Scale 0.97 press + shadow opacity interpolation, ☐ Haptics Light on all presses, ☐ No black shadows or white backgrounds, ☐ Nested depth pattern (extruded→inset), ☐ Accent #6C63FF on active/focus only, ☐ 8pt grid spacing


## Platform/Material

### Liquid Glass
- **Keywords:** dynamic material, optical glass, translucency, lensing, refraction, fluid morphing, system navigation
- **Colors:** Adaptive translucent material derived from surrounding content; use color judiciously / Semantic content and system tint colors; preserve legibility and hierarchy
- **Effects:** Lensing and refraction, adaptive translucency, and fluid morph transitions aligned to Apple platform behavior
- **Best for:** Apple-platform navigation, controls, and system-aligned app chrome
- **Avoid for:** content layers, dense reading surfaces, or custom effects without accessibility fallbacks
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** platform material, adaptive translucency, lensing, refraction, reduced transparency, reduced motion
- **Checklist:** ☐ Use for navigation and controls, ☐ Keep content on a separate layer, ☐ Apply color judiciously, ☐ Test reduced transparency, ☐ Test reduced motion, ☐ Verify text and control contrast


## Platform/System

### Fluent 2
- **Keywords:** fluent 2, microsoft, enterprise, calm, rounded, tokenized, cross-platform, copilot
- **Colors:** Fluent neutral palette with brand and status tokens / System semantic tokens; product brand accents
- **Effects:** Subtle depth, calm transitions, platform-adaptive motion
- **Best for:** Microsoft 365, Windows, Copilot, and enterprise line-of-business tools
- **Avoid for:** Products that should not inherit Microsoft platform conventions
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** design tokens, semantic color, component states, focus-visible, reduced motion
- **Checklist:** Use official tokens and components; preserve platform conventions; test keyboard, contrast, zoom, motion preferences, and responsive behavior

### Shopify Polaris
- **Keywords:** shopify polaris, merchant admin, commerce, checkout, web components, app home
- **Colors:** Shopify admin semantic tokens and merchant brand accents / System semantic tokens; product brand accents
- **Effects:** Purposeful admin feedback and restrained transitions
- **Best for:** Shopify admin apps, merchant tools, checkout, customer accounts, POS, and extensions
- **Avoid for:** Generic marketing sites or products outside Shopify surfaces
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** design tokens, semantic color, component states, focus-visible, reduced motion
- **Checklist:** Use official tokens and components; preserve platform conventions; test keyboard, contrast, zoom, motion preferences, and responsive behavior

### Adobe Spectrum
- **Keywords:** adobe spectrum, creative tools, enterprise, content creation, tokenized, cross-platform
- **Colors:** Spectrum semantic colors with product-specific accents / System semantic tokens; product brand accents
- **Effects:** Layered depth and restrained professional motion
- **Best for:** Creative tools, media workflows, document products, and Adobe-adjacent enterprise software
- **Avoid for:** Consumer brands that do not need dense professional-tool conventions
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** design tokens, semantic color, component states, focus-visible, reduced motion
- **Checklist:** Use official tokens and components; preserve platform conventions; test keyboard, contrast, zoom, motion preferences, and responsive behavior

### Spectrum 2
- **Keywords:** spectrum 2, adobe, expressive, approachable, adaptive, inclusive, creative tools
- **Colors:** Spectrum 2 semantic themes with updated contrast and personalization / System semantic tokens; product brand accents
- **Effects:** Updated depth, expressive illustration, adaptive motion
- **Best for:** New Adobe-style creative and document surfaces adopting Spectrum 2
- **Avoid for:** Products not aligned with Adobe professional workflows
- **Perf / A11y:** cost:moderate|drivers:animation,blur / risk:conditional|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **CSS hints:** design tokens, semantic color, component states, focus-visible, reduced motion
- **Checklist:** Use official tokens and components; preserve platform conventions; test keyboard, contrast, zoom, motion preferences, and responsive behavior
