# Design System — SWCS

> Living document. All tokens live in `css/variables.css` — keep this in sync.

## Status
🟢 First-draft tokens locked. Refine per feedback.

## Color palette (LOCKED primaries)
| Token | Value | Role |
|---|---|---|
| `--ink` | `#050C36` | Deep navy — primary brand, all body text, dark surfaces |
| `--flame` | `#EB470C` | Primary CTAs only — never as background fill at scale |
| `--flame-dark` | `#c93a09` | Flame hover state |
| `--flame-soft` | `#fde9df` | Flame tints (badges, very subtle highlights) |
| `--paper` | `#FBF8F2` | Warm cream — page background |
| `--paper-warm` | `#F4EFE5` | Alternating section background |
| `--card` | `#FFFFFF` | Pure white card surface |
| `--rule` | `rgba(5, 12, 54, 0.10)` | Hairlines, dividers |
| `--rule-strong` | `rgba(5, 12, 54, 0.18)` | Heavier separators |

### Discipline rules
- `--flame` appears at most 1-2 times per fold. Never as section background.
- Body text never sits on flame.
- Paper tones are warm cream — never pure `#fff` as the page bg (only on cards).

## Typography
- **Display:** `Instrument Serif` (Google Fonts) — italic variant used for emphasis on accent words
- **Body / UI:** `Inter` 400/500/600
- **Mono (small caps/data):** `JetBrains Mono` 400/500

### Hierarchy moves
- Display headlines pair regular roman + italic emphasis (e.g., "One window. *Every approval.*")
- Italic accents in flame color: editorial pop without a gradient
- Eyebrows: small-caps Inter 0.75rem, letter-spacing 0.18em, preceded by a 28px hairline

## Spacing
4px base. Tokens: `--s-1` (4) through `--s-40` (160).
Section vertical padding: `clamp(72px, 8vw, 128px)`.

## Layout
- Max content width: `1240px`
- Narrow variant (text-heavy sections): `880px`
- Gutter: `clamp(20px, 4vw, 40px)`

## Radius scale
`--r-sm 6` · `--r-md 10` · `--r-lg 18` · `--r-xl 28` · `--r-pill 999`

## Motion
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — settle, not bouncy
- Reveal duration: `720ms`
- UI transitions: `180-320ms`
- Reveal pattern: `opacity 0 → 1` + `translateY(20px) → 0`, staggered via `data-delay="1..5"`
- `prefers-reduced-motion` honored globally — all reveals snap on

## Components shipped (first draft)
| Component | File | Notes |
|---|---|---|
| `.nav` | `sections/nav.css` | Sticky, transparent → blurred paper on scroll |
| `.hero` | `sections/hero.css` | Editorial split + stat panel + scroll cue |
| `.marquee` | `sections/marquee.css` | Integration trust strip (single row) |
| `.problem` | `sections/problem.css` | List with stat-callout column |
| `.journey` | `sections/journeys.css` | Two large cards, ink vs paper |
| `.process` | `sections/process.css` | 4 numbered steps + dotted connector |
| `.module` | `sections/modules.css` | 4×3 hairline grid |
| `.scale` | `sections/scale.css` | Ink section, large editorial numbers |
| `.audience-card` | `sections/audience.css` | 4-up audience cards |
| `.final-cta` | `sections/cta.css` | Paper-warm band, single primary CTA |
| `.footer` | `sections/footer.css` | Ink, multi-column |
| `.btn` (`--primary`, `--ghost`, `--link`) | `main.css` | Pill, settle hover |
| `.eyebrow` | `main.css` | Small-caps + hairline |
| `.reveal` | `main.css` | Settle fade-up animation primitive |

## Anti-AI-slop rules (enforced in this draft)
1. ✅ No purple/blue gradient hero blobs — radial wash + dotted grid mask only
2. ✅ No emoji icons — all SVG, single-stroke, monoline
3. ✅ Specific numbers everywhere (15+, 10, 40-60%, 692, ₹8,200 cr, 42 km, 99.5%)
4. ✅ Editorial serif display + grotesk body — not three fonts trying to be "modern"
5. ✅ Generous whitespace, content max-widths respected
6. ✅ Flame used sparingly — primary CTA + italic accents only
7. ✅ Hairline dividers (1px @ 10% ink) — no heavy borders
8. ✅ Warm paper palette — not the default cold white

## Open items
- Real NMRDA logo (replace `S` brand mark)
- Real integration partner logos (currently iconified)
- Hero stat panel could host a live ticker animation if data source available
- Mobile nav drawer (toggle button present, drawer not yet built)
- FAQ section pending if user wants one
