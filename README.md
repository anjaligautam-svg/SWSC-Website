# SWCS Website Rebuild

A from-scratch rebuild of the **NMRDA Single Window Clearance System (SWCS)** portal — the digital gateway for business approvals at the Naveen Nagpur International Business and Finance Centre (IBFC).

Reference site (do NOT mirror structure): https://swcs-app-qa.jedix.co/

## Local development
1. Open this folder in VS Code
2. Install the **Live Server** extension (Ritwick Dey)
3. Right-click `index.html` → "Open with Live Server"

## Deployment target
GitHub Pages — flat root `index.html`, relative asset paths only.

## Project structure
```
swcs-website/
├── index.html              # Single entry point
├── css/
│   ├── reset.css           # Normalize/reset
│   ├── variables.css       # Design tokens (colors, fonts, spacing)
│   ├── main.css            # Global styles
│   └── sections/           # Per-section styles (hero.css, etc.)
├── js/
│   ├── main.js             # Entry script
│   └── modules/            # Per-feature modules
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── inspirations/           # Reference screenshots, mood boards
└── docs/                   # Living context for future Claude sessions
    ├── PROJECT_CONTEXT.md  # What we're building & why
    ├── DESIGN_SYSTEM.md    # Tokens, components, motion rules
    ├── CONTENT.md          # Client-supplied copy & data
    ├── SECTIONS.md         # Section-by-section build plan
    ├── INSPIRATIONS.md     # References & what to borrow from each
    └── PROGRESS.md         # What's done, what's next, decisions log
```

## For future Claude Code sessions
Read these in order to get full context:
1. `docs/PROJECT_CONTEXT.md` — the brief
2. `docs/DESIGN_SYSTEM.md` — visual language
3. `docs/SECTIONS.md` — current build plan
4. `docs/PROGRESS.md` — where we left off
