# Progress Log

> Append-only. Newest entries at the top.

## 2026-05-18 — First draft shipped
**Built:**
- 11 sections, end to end: nav, hero, integrations trust strip, problem, two-journeys, how-it-works (4 steps), platform modules (12 cards), the-hub scale band, audience, final CTA, footer
- Per-section CSS in `css/sections/*.css` — 11 files
- JS modules: `nav.js` (sticky behavior) + `reveal.js` (settle fade-up IntersectionObserver)
- Inline SVG icons throughout (no emoji, no icon font dep)
- Google Fonts: `Instrument Serif` (display, italic-emphasis) + `Inter` (body) + `JetBrains Mono` (data)
- Real numbers everywhere from SRS — 15+, 10, 40-60%, 99.5%, 692 Ha, ₹8,200 cr, 42 km, 400 kV, 100 Gbps, 25%

**Decisions logged:**
- Primary palette LOCKED to `#050C36` (ink) and `#EB470C` (flame). Flame used disciplined (1-2× per fold)
- Warm paper background `#FBF8F2` — no pure-white page bg
- Editorial serif display, sans body — italic flame accent on key words for "wow" without gradients
- Settle animation: 720ms fade + 20px translateY, easing `cubic-bezier(0.22, 1, 0.36, 1)`
- Skipped FAQ + testimonials for v1 (no real quotes; would feel like AI slop)
- GIS Map placed as a Phase 2 module card, not a separate section

**Source material parsed:**
- `SWCS_SRS_v1.0.pdf` — full 39-page SRS read via pypdf (installed user-local). Extracted: 4 portals, 2 journeys, 11 modules, 18 integrations, NFRs, user groups
- Inspiration analysis: goswift.in/products + investkarnataka.co.in (via WebFetch)
- Existing site: swcs-app-qa.jedix.co (content reference, structure ignored)

**Open / awaiting:**
1. User review of first draft via VS Code Live Server
2. Real NMRDA logo asset to replace `S` brand mark
3. Real integration partner logos for trust strip
4. Mobile nav drawer (toggle button is present, drawer not wired)
5. Decision on whether to add: FAQ accordion / press section / sectoral approvals deep dive
6. Per-section iteration: user will direct section-by-section refinements

## 2026-05-18 — Project kickoff
- Created scaffold on Desktop: `~/Desktop/swcs-website/`
- Set up `/css`, `/js`, `/assets`, `/docs`, `/inspirations` directories
- Wrote context MD files: README, PROJECT_CONTEXT, DESIGN_SYSTEM, CONTENT, SECTIONS, INSPIRATIONS, PROGRESS
- Confirmed connected stack: 21st-magic, Stitch, Figma, Claude Preview, ui-ux-pro-max, ui-design-master, frontend-design, animated-website
- Nano Banana NOT connected

## Next session quick-start
Read in order: `PROJECT_CONTEXT.md` → `DESIGN_SYSTEM.md` → `CONTENT.md` → `SECTIONS.md` → this file.
