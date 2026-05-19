# Project Context — SWCS Website

## What we're building
A complete redesign of the **NMRDA Single Window Clearance System (SWCS)** marketing/portal site. SWCS is the digital platform investors use to obtain approvals, NOCs, building permissions, and licenses for the **Naveen Nagpur International Business and Finance Centre (IBFC)** — a 692-hectare greenfield development by the Nagpur Metropolitan Region Development Authority.

## Reference (existing site)
- URL: https://swcs-app-qa.jedix.co/
- Status: QA build. Treat as a content source ONLY, not a design source. We are rebuilding visual language, hierarchy, and structure from scratch.

## Who it's for
- **Primary:** Investors evaluating whether to set up operations in Naveen Nagpur IBFC
- **Secondary:** Applicants who have begun the approval process and need to track / continue
- **Tertiary:** Government / press / general public looking up the project

## Why a redesign
- The current site reads like a generic government portal. We want it to read like a confident, modern investment destination.
- Must NOT look like AI-generated slop — distinct typography, intentional motion, real spatial rhythm, considered color use.

## Key facts (for copy reference)
- 692 hectares across Godhni, Ladgaon, Hingna villages
- ₹8,200 crore investment target
- 42 km underground utility tunnels
- 25% mandatory green cover
- 400 kV dedicated power supply
- 100 Gbps optical fiber connectivity
- Zones: Finance (120 Ha), IT/ITeS (95 Ha), Residential (140 Ha), Green (173 Ha)
- 200+ registered applicants to date

## Tech constraints
- Plain HTML + CSS + JS — no build step, no framework
- Multi-file structure (separate CSS per section, JS modules)
- Deploys to GitHub Pages
- Must work in VS Code Live Server during dev

## Tools/skills available
- **MCP:** 21st-magic (component builder), Stitch (screen generation), Figma (design context), Claude Preview (browser verification)
- **Skills:** ui-ux-pro-max, ui-design-master, frontend-design, animated-website, design-md
- User will provide 21st-magic prompts directly when they want specific components

## What the user is providing
- Section-by-section vision (hero, middle, body, footer)
- Color palette (primary fixed, secondary flexible)
- Inspirations / mood references
- Client content from existing codebase (use as source, not structure)
- 21st-magic prompts and tweaks

## Non-negotiables
1. Does not look AI-generated
2. Separate files (HTML / CSS / JS / per-section)
3. Works on GitHub Pages with relative paths
4. Each section is self-contained and readable in isolation
