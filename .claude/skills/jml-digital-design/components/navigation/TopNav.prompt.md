The marketing site's floating navigation bar — a rounded glass slab, not a full-width band.

```jsx
<TopNav logo={<Logo height="28px" />}
  links={[{label:"Services",href:"/#services"},{label:"Gallery",href:"/#gallery"},{label:"About",href:"/#about"},{label:"Pricing",href:"/pricing"},{label:"Contact",href:"/#contact"}]}
  actions={<><a href="/login">Login</a><Button size="sm">Book a Shoot</Button></>} />
```

Max width 1024px, 16px radius. It sits at `white/60` at the top of the page and transitions to `white/90` with `--shadow-glass` after 12px of scroll.
