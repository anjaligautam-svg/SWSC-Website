# Sections — Build Plan

> Each section has its own CSS file in `css/sections/`. JS modules live in `js/modules/`.

## Live order (top → bottom)
| # | Section | Status | HTML id | CSS | JS |
|---|---------|--------|---------|-----|-----|
| 1 | Navigation | 🟢 draft | `[data-nav]` | `nav.css` | `nav.js` |
| 2 | Hero | 🟢 draft | `.hero` | `hero.css` | — |
| 3 | Trust strip (integrations) | 🟢 draft | `.marquee` | `marquee.css` | — |
| 4 | Problem we replace | 🟢 draft | `#problem` | `problem.css` | — |
| 5 | Two Journeys (A & B) | 🟢 draft | `#journeys` | `journeys.css` | — |
| 6 | How it works (4 steps) | 🟢 draft | `#process` | `process.css` | — |
| 7 | Platform modules (11 cards) | 🟢 draft | `#platform` | `modules.css` | — |
| 8 | The Hub (scale numbers) | 🟢 draft | `#scale` | `scale.css` | — |
| 9 | Who it's for (4 audience cards) | 🟢 draft | `#audience` | `audience.css` | — |
| 10 | Final CTA | 🟢 draft | `.final-cta` | `cta.css` | — |
| 11 | Footer | 🟢 draft | `.footer` | `footer.css` | — |

## Per-section briefs (current drafts)

### 1. Navigation
- Sticky, transparent over the hero; gains a translucent paper background + blur + hairline on scroll past 12px
- Logo + 5 nav links + Sign in (ghost) + Start application (primary flame)
- Mobile: hamburger button visible at ≤960px (drawer not yet implemented — flagged in DESIGN_SYSTEM)

### 2. Hero
- Editorial split: left = headline + lede + CTA + live status pulse; right = "Platform snapshot" stat panel (4 KPIs + uptime footer)
- Background: radial flame wash (top-right) + faint navy wash (left) + dotted grid masked to radial — no gradient blob
- Display serif headline with italic flame emphasis "*One window.*" and "*Every approval.*"

### 3. Trust strip
- 7 integration tiles in a single row, separated by hairlines
- Inline SVG glyphs (no real partner marks yet)
- Wraps to 3-col grid on mobile

### 4. Problem
- 2-col: left = headline + subhead, right = numbered list of 4 problems with stat-callout
- Stats: `15+`, `0×`, `∞`, `→ 1` — playful, contrast against navy ink

### 5. Two Journeys
- Side-by-side cards: A (paper, CA/CS managed) + B (ink, operational approvals)
- Each card: tag badge, headline with italic flame, lede, hairline, 4-item list, footer with action

### 6. How it works
- 4 numbered circles connected by dotted horizontal hairline
- Each step: kicker + display heading + body copy
- Hover: number circle inverts (ink fill)

### 7. Platform modules
- 4 col × 3 row hairline grid (11 modules + 1 "officer portal" → 12 cells, or 11 cells with one empty intentionally)
- Each card: line icon, display name, body, tag (User-facing / Operational / Cross-cutting / Phase 2)
- Phase 2 tag uses flame color

### 8. The Hub (scale band)
- Full-width ink section — strongest contrast moment in the page
- Big display numbers with subtle unit suffixes
- 6 KPIs in a 3×2 grid with hairline cells

### 9. Audience
- 4 cards: Investor / CA-CS / Officer / Administrator
- White card on warm paper. Subtle hover lift.

### 10. Final CTA
- Centered, paper-warm with subtle flame wash at the bottom edge
- Primary + ghost button, security meta line beneath

### 11. Footer
- Ink, 4 columns (brand+about, Platform, For applicants, NMRDA)
- Bottom strip: copyright + legal links

## Status legend
🔲 not started · 🟡 in progress · 🟢 first pass shipped, needs review · ✅ approved

## Decisions log
- Skipped a separate FAQ — most content is already covered in modules + journeys + how-it-works
- Skipped a testimonials carousel for v1 — no real client quotes yet, fake ones would feel like AI slop
- GIS Map listed as a module card with Phase 2 tag, not a separate section
