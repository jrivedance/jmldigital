---
name: jml-digital-design
description: Use this skill to generate well-branded interfaces and assets for JML Digital, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

> **Note on this copy.** This design system was built from `jrivedance/jml-digital-app`
> (a separate, unrelated real-estate media product — see `readme.md`'s "Sources"
> section and `github.md`). It was imported here, into `jrivedance/jmldigital`,
> to reskin *this* site's existing marketing pages — same JML Digital brand,
> different business/copy. Only the brand-agnostic pieces were kept: `tokens/`,
> `styles.css`, `components/`, `guidelines/`, docs, and the Righteous font +
> logo from `assets/`. Deliberately **not** copied: `ui_kits/` (recreations of
> that other product's admin/client portals) and the real-estate photography
> under `assets/images/` and `uploads/` — none of it applies to this repo.
> Do not pull those in or borrow that product's copy/pricing/services for this
> site without the user asking.

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here

- `readme.md` — brand context, content voice, visual foundations, iconography. Read this first.
- `tokens/` — the CSS custom properties. Never hard-code a value that has a token.
- `components/` — React primitives; each has a `.prompt.md` with usage and variants.
- `guidelines/` — small specimen cards for colour, type, spacing, shape, motion and brand assets.
- `assets/` — the Righteous font and the JML Digital logo.
- `INSTALL.md` — how to wire these tokens into a production codebase (this repo already did steps 1 and 3, against `src/App.css` instead of a Next.js `globals.css` — see the live tokens at `src/styles/jml-tokens/`).
- `ui_kits/` and the real-estate photography in `assets/` were intentionally **not** copied into this repo — see the note above.

## Hard rules

- White and black with one blue (`#1c65a2`). Neutrals are black at an alpha, never a grey hex.
- Righteous for display, Geist for body, Geist Mono for every numeral.
- One card treatment: the frosted glass panel. No coloured left borders.
- Buttons are a flat fill; they pick up their outline on hover, not at rest.
- No emoji. No hand-drawn SVG logos. Icons are lucide at 16px.
