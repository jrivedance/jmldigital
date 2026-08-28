# jmldigital

JML Digital's marketing site — a Create React App app (`react-scripts` 4, React 17, `react-router-dom` v5). See `README`-level context in `package.json`; there's no separate README yet.

Node 17+ needs `NODE_OPTIONS=--openssl-legacy-provider` to run webpack 4's build — already wired into the `start`/`build`/`test` npm scripts via `cross-env`, so plain `npm start` / `npm run build` work.

## Design

All UI work in this repo follows the JML Digital design system in
`.claude/skills/jml-digital-design/`. Before writing or changing any interface:

- Read `.claude/skills/jml-digital-design/readme.md` for the visual foundations,
  content voice and iconography rules.
- Use the tokens in `.claude/skills/jml-digital-design/tokens/` — never
  hard-code a hex, radius, font size or duration that already has a token.
  The live copy powering this site is `src/styles/jml-tokens/` (imported once,
  at the top of `src/App.css`); keep the two in sync if tokens change.
- Match the component behaviour in
  `.claude/skills/jml-digital-design/components/` (each has a `.prompt.md`
  with usage and variants). These are reference patterns (Button, Panel,
  TextField, FilterChip, etc.) — this app is plain JS/CSS, not the Next.js
  app the components were authored for, so port the *treatment*, not the
  files verbatim.

Do not introduce new colours, fonts, shadows or radii without asking.

**Important:** this design system was built from a different, unrelated
product (`jrivedance/jml-digital-app`, a real-estate media business) that
happens to share the JML Digital brand. Only the brand layer (tokens,
component styling, type, the existing hex-logo assets) applies here — never
pull in that product's `ui_kits/`, its real-estate photography, or its
copy/pricing/services content. This site's own content (client portfolio,
service descriptions, contact info) stays as-is unless the user explicitly
asks to change it.
