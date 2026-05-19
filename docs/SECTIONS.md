# Sections — Build Plan

> Each section has its own CSS file in `css/sections/`. JS modules live in `js/modules/`.

## Live order (top → bottom)
| # | Section | Status | HTML id | CSS | JS |
|---|---------|--------|---------|-----|-----|
| 1 | Navigation | 🟢 draft v2 | `[data-nav]` | `nav.css` | `nav.js` |
| 2 | Hero | 🟢 draft | `.hero` | `hero.css` | — |
| 3 | Trust strip (integrations) | 🟢 draft | `.marquee` | `marquee.css` | — |
| 4 | About (Problem we replace) | 🟢 draft | `#about` | `problem.css` | — |
| 5 | Two Journeys (A & B) | 🟢 draft | `#journeys` | `journeys.css` | — |
| 6 | How it works (4 steps) | 🟢 draft | `#process` | `process.css` | — |
| 7 | Platform modules | 🟢 draft | `#platform` | `modules.css` | — |
| 8 | The Hub (scale numbers) | 🟢 draft | `#scale` | `scale.css` | — |
| 9 | Who it's for | 🟢 draft | `#audience` | `audience.css` | — |
| 10 | **Help Desk** | 🟢 draft | `#help-desk` | `help.css` | — |
| 11 | Final CTA | 🟢 draft | `.final-cta` | `cta.css` | — |
| 12 | Footer | 🟢 draft | `.footer` | `footer.css` | — |
| — | **FAB Chat (AI Assistant)** | 🟢 draft | `[data-fab]` / `[data-chat]` | `fab.css` | `fab.js` |

## Per-section briefs (current drafts)

### 1. Navigation (v2)
- Sticky, transparent over hero → blurred paper on scroll past 12px
- Real Naveen Nagpur logo PNG (left of wordmark) + "NMRDA / Single Window Clearance System" two-line wordmark
- **Only two menu links:** About · Help Desk
- **Only one CTA:** Login (primary flame pill)
- Mobile (≤760px): wordmark hides, hamburger button shown (drawer pending)

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

### 10. Help Desk (added 2026-05-19)
- 3 contact cards on warm-paper section: Application support (email), Talk to officer (phone), Raise grievance (in-portal)
- Below the grid: full-width ink invite card with bot avatar, headline, and "Open assistant" button that fires the FAB
- All contact numbers / emails are placeholders pending real NMRDA contact details

### FAB Chat — NMRDA Virtual Assistant
- Floating bottom-right button (ink, 60px, flame pulse halo)
- Click → expanding panel matching the supplied design:
  - Deep navy header with bot avatar (light-blue eyes), title + subtitle, refresh + close icons
  - Status strip "Online — typically replies instantly" with pulsing green dot
  - Seeded bot greeting bubble + timestamp
  - 4 suggestion chips (How do I register / What approvals / How long / How to track)
  - Input row with rounded ink-bordered input + circular send button
- Behaviour:
  - ESC closes the panel
  - Reset button clears all messages back to the seed
  - Chip click → injects user message → typing indicator → canned response
  - Free-form Enter or send button → injects user message → generic helpful response
  - `data-fab-open` attribute on any element opens the assistant (used by Help Desk invite)

## Status legend
🔲 not started · 🟡 in progress · 🟢 first pass shipped, needs review · ✅ approved

## Decisions log
- Skipped a separate FAQ — most content is already covered in modules + journeys + how-it-works
- Skipped a testimonials carousel for v1 — no real client quotes yet, fake ones would feel like AI slop
- GIS Map listed as a module card with Phase 2 tag, not a separate section
- 2026-05-19: Nav simplified to About + Help Desk + Login per user direction. Rich body sections kept (didn't strip Hero/Modules/Scale/Audience) — single-page architecture means everything coexists on one scrollable page.
- 2026-05-19: AI assistant is a canned-response demo for v1 — no backend yet. Easy to wire to a real API later by replacing `RESPONSES` map + `reply()` function in `js/modules/fab.js`.
