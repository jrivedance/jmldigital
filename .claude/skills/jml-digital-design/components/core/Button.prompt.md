Pill-shaped action button — flat brand blue for the one primary action on a view, glass `secondary` beside it, `ghost` for tertiary links.

```jsx
<Button href="#contact" icon={<ArrowRight size={16} />}>Book a Shoot</Button>
<Button variant="secondary" icon={<PlayCircle size={16} />} iconPosition="start">View Our Work</Button>
```

Variants: `primary` (solid `--brand-600` + brand glow; on hover it darkens to 700, its border turns white and it scales to 1.03; 0.98 on press), `secondary` (white/70 glass with a hairline border; on hover it goes opaque with a `--brand-500` outline and brand-700 label), `ghost`, `solid` (black — admin utility). Sizes `sm` (12px text) / `md` / `lg`. Never place two primaries side by side.
