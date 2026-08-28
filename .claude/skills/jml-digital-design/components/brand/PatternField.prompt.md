Adds one of the brand's accent textures behind a block, always masked so it fades out.

```jsx
<PatternField pattern="matrix" fade="corner">
  <Panel>…</Panel>
</PatternField>
```

Using a matrix token directly (outside this component) needs all three properties — the image list alone is not enough:

```css
background-image: var(--pattern-matrix);
background-size: var(--pattern-matrix-size);
background-position: var(--pattern-matrix-position);
```

Rules: at most one textured area per screen; never under body copy at full strength; keep `opacity` ≤ 1 on the neutral variants and ≤ 0.6 on the brand-blue ones. `matrix` is the default (hex halftone), `circuit` for technical/equipment contexts, `hexMesh` for large empty areas.
