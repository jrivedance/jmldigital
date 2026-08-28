# JML Digital — Design System

JML Digital is a real estate media company run by Jordan Michael Lugenbeel,
serving Central Florida "from the Gulf to the Coast" — the Space Coast,
Orlando, Titusville, Cocoa and Tampa. It sells four services (Photography,
Video, Drone / Aerial, and 3D Tours & Floor Plans) to listing agents, in five
packages from Launch ($195) to Elevated Luxury ($1,300), plus à la carte
add-ons.

Two surfaces make up the product:

1. **Marketing site** — `jmldigital.com`. Hero carousel, services, gallery,
   about, testimonials, pricing, contact and a three-step booking flow.
2. **Admin / order portal** — `order.jmldigital.com`. Staff dashboard, orders
   with media delivery, CRM pipeline, email marketing, website content
   management, plus a client-facing "my orders" and shared gallery view.

## Sources this system was built from

- **GitHub:** <https://github.com/jrivedance/jml-digital-app> (private, branch
  `main`) — Next.js 14 App Router + Tailwind + Framer Motion + Supabase. The
  design tokens here are lifted from `tailwind.config.ts` and
  `src/app/globals.css`; the components from `src/components/**`; copy and
  prices from `src/lib/services.ts`, `src/lib/pricing.ts` and
  `src/lib/testimonials.ts`. Worth exploring further before building anything
  new — the admin area alone has ~30 components this system does not cover.
- **Live site:** <https://jmldigital.com> — used to confirm published copy,
  testimonials and contact details.
- **Uploads:** `Righteous.zip` (the display font, SIL OFL), `JML Digital Logo.png`
  (the monogram), and seven screenshots of camera-wrap swatches
  (`IMG_8290–8296.PNG`, from maiacombo.com) supplied as texture references —
  circuit "electric", hex "matrix" halftone, camo and mesh. Those informed the
  accent patterns in `tokens/patterns.css`; the screenshots themselves are
  third-party product photography and are not shipped as brand assets.
- Related repos visible on the connection but **not** used: `jrivedance/jmldigital`,
  `jrivedance/blockwaiter`, `jrivedance/starter_kit`.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The entry point consumers link. Imports everything below. |
| `tokens/` | `colors` · `typography` · `spacing` · `shape` · `motion` · `patterns` · `fonts` · `base` |
| `components/` | React primitives, grouped by concern (see below) |
| `ui_kits/marketing-site/` | Click-through recreation of jmldigital.com |
| `ui_kits/admin-portal/` | Click-through recreation of the staff portal |
| `ui_kits/client-portal/` | Click-through recreation of the agent-facing gallery |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Shape, Motion, Brand) |
| `assets/` | Logos, honeycomb graphics, listing photography, the Righteous font |
| `SKILL.md` | Agent-skill entry point |
| `INSTALL.md` | How to install this in Claude Code and wire the tokens into the app |
| `github.md` | Source-repo association for one-click sync |

### Components

- **core/** — `Button`, `Panel`, `SectionLabel`, `Badge`, `StatCard`, `Skeleton`
- **brand/** — `Logo`, `HexMedia`, `HexBadge`, `HexDivider`, `PatternField`
- **forms/** — `TextField`, `FilterChip`, `Toggle`
- **feedback/** — `Alert`
- **cards/** — `ServiceCard`, `PackageCard`, `TestimonialCard`, `PriceRow`
- **navigation/** — `TopNav`, `SidebarNav`, `Tabs`

Every one of these has a counterpart in the codebase. **Intentional additions:**
`PatternField` (no source equivalent — added so the uploaded texture references
have a governed home) and `Logo` (a wrapper so the shipped raster lockups are
used instead of being redrawn).

## Content fundamentals

**Voice.** Direct, warm, specific. Jordan speaks in first person on the About
section ("Hi, I'm Jordan", "My only goal is to make your listings shine"); the
rest of the site speaks as "we" to "you"/"your listings". Never corporate-plural
about the founder.

**Claims carry numbers.** Nearly every marketing sentence lands on a statistic:
"increases buyer interest by 30%", "403% more inquiries", "68% increase in
engagement", "homes sell 73% faster with virtual staging", "sell homes 25%
faster". Figures are always set in the mono face. Do not invent new statistics —
reuse these five.

**Sentence shape.** One clause, then an em-dash qualifier: "Four services, one
point of contact — see real examples in the gallery below." /
"From booking to delivery — no hand-offs, no guesswork."

**Casing.** Title Case for eyebrows, nav, buttons and package names
("Book a Shoot", "What We Offer", "Elevated Luxury"). Sentence case for
headings and body ("One team. Every angle.", "A look at the gallery").
UPPERCASE only for the 12px eyebrow/label style, never for a heading.

**Headings are short declaratives**, often two beats: "One team. Every angle." ·
"Trusted by Central Florida agents" · "Let's make your next listing
unforgettable" · "Welcome back, Jordan".

**Errors and empty states are plain speech**: "That email or password isn't
right. Try again." · "Nothing needs a look right now." · "Nothing due today." ·
"Thanks — we've got it."

**Deliverables are literal.** Package features are counted nouns —
"40 MLS Photos", "8 Drone Photos", "60-90 sec Scripted Video" — never
adjectives. Prices are whole dollars, no cents.

**No emoji anywhere.** The only non-alphabetic glyphs in use are the middot
separator (`Space Coast · Orlando · Titusville`), the em dash, curly quotes,
and the oversized `"` on testimonial cards.

**Place names carry weight** — the region is part of the pitch. Mention Central
Florida, the Space Coast, Orlando, Titusville, Cocoa or Tampa wherever it fits.

## Visual foundations

**Palette.** White and black, with one blue. Backgrounds are `#ffffff` (or
`#f7f9fc` for the footer/raised areas); every neutral is *black at an alpha*,
not a grey hex — body copy 80%, muted 60%, labels 40–50%, borders 10% and 6%.
Brand blue (`#1c65a2`) appears only at small scale: flat CTAs, prices and
figures, the active nav pill, the hex stat badge, icon chips at 50/100 tint.
Status colours (amber, red, green) are admin-only. Amber stars on testimonials
are the sole other colour. **Buttons are a flat fill, not a gradient** — the
only gradients left in the system are the soft 50→100 icon chip, the hexagon
stat badge, and photo scrims.

**Type.** Righteous 400 for display — headings, card titles, dashboard figures.
Geist for body and UI. Geist Mono for every numeral the brand quotes: prices,
percentages, phone number, counts. Hero h1 at 54px, sections at 36px, card
titles 20px, body 14–18px, labels 12px with `0.1em` tracking, eyebrows 12px
uppercase with `0.2em`. Display type carries `-0.02em` tracking.

**Backgrounds.** Overwhelmingly plain white. Depth comes from photography and
from frosted panels, not from fills. The codebase also ships a `GradientOrbs`
layer — three slow-drifting blue blurs at 25–40% behind admin pages — and a
radial white wash that fades them out; use it sparingly, never behind dense
text. Accent textures (`--pattern-matrix`, `--pattern-circuit`,
`--pattern-hex-mesh`) carry the camera-wrap references: hex-halftone and
circuit-trace tiles at 6–10% ink, always masked with `--pattern-fade-corner` or
`--pattern-fade-down`. The matrix tokens are image *lists* and need their
paired `-size` / `-position` tokens set alongside them; `PatternField` handles
this for you. In practice one per major section, alternating —
matrix under the hero, hex mesh behind the services grid, matrix again on the
contact panel, hex mesh in the client portal — so the texture reads as a
rhythm rather than wallpaper. Never two adjacent sections with the same tile,
and never behind a portrait or long-form quote (the About block stays clean).

**The hexagon is the brand's shape.** It comes from the mark itself. Photos are
clipped to `--hex-clip` at a 7:6.13 ratio (service covers, portraits); stat
badges are gradient-blue hexes; sections are separated by the scattered
honeycomb PNGs (`JMLHex1–4`) at 80% opacity. Everything else is a rounded
rectangle.

**Cards.** One treatment only: the glass panel — 16px radius, 1px black-6%
border, `rgba(255,255,255,0.7)` over a 24px backdrop blur,
`0 8px 32px rgba(16,24,40,0.08)`. On hover it goes opaque white, the border
firms to 10%, and `--shadow-glow-brand` fades in over 500ms. No coloured
left borders, no flat-grey cards, no double shadows.

**Radii.** 8px icon buttons and chips · 12px inputs, nav items, thumbnails ·
16px panels and the nav bar · pill for buttons, badges and filters.

**Borders and dividers.** Hairlines at 6% black inside panels and between list
rows; 10% for interactive outlines; 20% on hover.

**Transparency and blur.** Reserved for surfaces that float over content: the
nav bar (white 60% → 90% after 12px of scroll), all panels, the section-label
pill, carousel controls over photos (black 25% + 8px blur), the gallery
lightbox (black 90% + 4px blur). Never blur a static section background.

**Protection.** Photos that carry text or controls get a gradient scrim
(`--gradient-photo-scrim`, black 40% up from the bottom), never a solid overlay
or a capsule.

**Motion.** Fades and short lifts; nothing bounces. Scroll reveals fade up 28px
over 600ms on `cubic-bezier(0.16,1,0.3,1)`, staggered 60–80ms across a grid.
Hero slides crossfade over 1s on a 5.5s dwell. Panels transition 500ms, buttons
300ms. Ambient orbs drift on 22–32s loops. All of it respects
`prefers-reduced-motion`.

**Hover states.** Buttons and chips pick up an outline on hover: blue ones turn
their border white, white ones take a `--brand-500` outline with a brand-700
label. Primary buttons scale
to 1.03 and keep their glow; secondary buttons go opaque and their outline
darkens to brand-700; text links move from 60% to 100% black; nav items pick up
a 3% black wash; gallery thumbnails scale 1.03 on a spring; panels lift as
described above.

**Press states.** `scale(0.98)`, 300ms. No colour change, no inner shadow.

**Focus.** Border turns brand-blue at 50%. No ring, no glow, no outline offset.

**Imagery.** Real Central Florida listings: bright HDR interiors, warm twilight
exteriors, aerial context shots. Warm, high-key, saturated — never black &
white, never grainy, never a stock-photo person. Aspect ratios in use: 4:3
gallery tiles, 8:3 package banners, full-bleed hero, 7:6.13 hex crops.

**Layout.** Content maxes at 1152px with a 24px gutter (32px at large). Sections
run 112px of vertical padding (80px when tight). The nav is fixed and floating —
a rounded slab inset 16px from the top, max 1024px wide — not a full-width band.
The admin sidebar is a fixed 256px glass column.

## Iconography

**Lucide, 16px, 2px stroke, `currentColor`.** The product imports
`lucide-react`; recreations here load `lucide@0.454.0` from unpkg and render
`<i data-lucide="…">`, which produces the identical SVGs. This is a straight
match, not a substitution.

Glyphs in use: `arrow-right`, `arrow-up-right`, `arrow-left`, `play-circle`,
`chevron-left`, `chevron-right`, `x`, `menu`, `check`, `check-circle-2`,
`alert-circle`, `bell-ring`, `calendar-days`, `camera`, `plane`, `video`, `box`,
`map-pin`, `users-2`, `phone`, `send`, `instagram`, `facebook`, `star`,
`layout-dashboard`, `shopping-cart`, `mail`, `globe`, `settings`, `plus`,
`trending-up`, `image`, `file-text`, `megaphone`, `upload`, `download`.

Icons sit in one of three containers: bare inline beside text; a 36px 8px-radius
chip with a 3% black fill and 10% border (contact rows, social links); or a 40px
12px-radius chip with the `--gradient-brand-soft` fill and a brand-700 glyph
(dashboard stats, about facts). Stars are the one filled icon — amber, 14px.

No icon font, no PNG icons, no emoji, and no hand-drawn SVG. Logos are raster
files in `assets/` and must be used as-is.

## Known gaps

- **Righteous vs Geist.** `tailwind.config.ts` currently aliases `sans`, `mono`
  *and* `display` to Righteous, which would set body copy in a display face.
  This system treats Righteous as display-only and uses Geist / Geist Mono for
  body and numerals, matching the fonts the app actually loads in `layout.tsx`.
  Confirmed as the intended direction.
- **The logo files are rasters (PNG) and there is no vector master.** These
  cannot be converted to SVG here — tracing a logo produces an approximation,
  and wrapping the PNG inside an `<svg>` gains nothing. Ask whoever built the
  mark for the original `.ai` / `.svg`; until then, the PNGs are the source of
  truth and should not be scaled much past 500px wide.
