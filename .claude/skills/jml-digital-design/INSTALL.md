# Installing this design system in Claude Code

This project doubles as a Claude Code **Agent Skill**. Once it's in your repo,
Claude Code reads it automatically and designs against the JML Digital brand.

## 1. Drop it in your repo

Download this project as a zip, then unpack it into your app's repo:

```bash
mkdir -p .claude/skills/jml-digital-design
unzip ~/Downloads/jml-digital-design-system.zip -d .claude/skills/jml-digital-design
```

You should end up with `.claude/skills/jml-digital-design/SKILL.md` at that
exact path — that's the file Claude Code looks for.

Commit it. Everyone on the repo gets it, and it stays versioned with the code.

## 2. Make every future change use it

Add this to `CLAUDE.md` at the root of your repo (create it if it doesn't
exist):

```markdown
## Design

All UI work in this repo follows the JML Digital design system in
`.claude/skills/jml-digital-design/`. Before writing or changing any interface:

- Read `.claude/skills/jml-digital-design/readme.md` for the visual foundations,
  content voice and iconography rules.
- Use the tokens in `.claude/skills/jml-digital-design/tokens/` — never
  hard-code a hex, radius, font size or duration that already has a token.
- Match the component behaviour in
  `.claude/skills/jml-digital-design/components/` (each has a `.prompt.md`
  with usage and variants).
- Reference `.claude/skills/jml-digital-design/ui_kits/` for how real screens
  in this product are composed.

Do not introduce new colours, fonts, shadows or radii without asking.
```

That instruction file is loaded on every Claude Code session in the repo, so
new work inherits the styling without you having to ask for it each time.

## 3. Wire the tokens into the app itself

The design system ships real CSS. To make it the actual source of truth rather
than just a reference:

```bash
cp -r .claude/skills/jml-digital-design/tokens src/styles/jml-tokens
cp .claude/skills/jml-digital-design/styles.css src/styles/jml-tokens/index.css
cp -r .claude/skills/jml-digital-design/assets/fonts public/fonts
```

Then import it once, above your Tailwind layers, in `src/app/globals.css`:

```css
@import "../styles/jml-tokens/index.css";
```

Fix the two relative paths that move: the `@font-face` `src` in
`tokens/fonts.css` should point at `/fonts/Righteous-Regular.ttf`, and
`styles.css` should keep its `@import` list pointing at its own siblings.

### Optional: expose the tokens to Tailwind

In `tailwind.config.ts`, point your theme at the custom properties so
`bg-brand-600` and `var(--brand-600)` can never drift apart:

```ts
theme: {
  extend: {
    colors: {
      brand: {
        50: "var(--brand-50)", 100: "var(--brand-100)", 200: "var(--brand-200)",
        300: "var(--brand-300)", 400: "var(--brand-400)", 500: "var(--brand-500)",
        600: "var(--brand-600)", 700: "var(--brand-700)", 800: "var(--brand-800)",
        900: "var(--brand-900)",
      },
    },
    fontFamily: {
      display: ["var(--font-display)"],
      sans: ["var(--font-body)"],
      mono: ["var(--font-mono)"],
    },
    borderRadius: { xl: "var(--radius-xl)", lg: "var(--radius-lg)" },
  },
}
```

Note this changes the current config, which aliases `sans`, `mono` *and*
`display` to Righteous. See "Known gaps" in `readme.md`.

## 4. Ask for the first pass

In Claude Code, from your repo:

```
Use the jml-digital-design skill. Restyle the marketing site's hero and
services sections to match the design system exactly — tokens, type scale,
button treatment and hover states included. Don't change any copy.
```

Work through one section at a time and review each. The `ui_kits/` recreations
are the reference for what "correct" looks like.

## Keeping it in sync

When this design system changes, re-download and replace the
`.claude/skills/jml-digital-design/` folder, then commit. The `github.md` file
in the project records which commit of `jrivedance/jml-digital-app` the system
was last built against.
