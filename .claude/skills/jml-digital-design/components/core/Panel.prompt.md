The frosted-glass container behind almost every block of content — stats, pricing, admin panels, forms.

```jsx
<Panel hoverable padding="24px">…</Panel>
```

16px radius, 1px `--border-hairline`, `rgba(255,255,255,0.7)` over a 24px backdrop blur, `--shadow-glass`. `hoverable` adds the 500ms transition to opaque white + `--shadow-glow-brand`. `tinted` is reserved for the featured pricing tier. Set `padding="0"` when the first child is a full-bleed image, and add `overflow:hidden` via `style`.
