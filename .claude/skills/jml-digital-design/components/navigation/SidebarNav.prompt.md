Vertical nav inside the 256px admin sidebar.

```jsx
<SidebarNav activeHref="/admin" items={[{ label: "Dashboard", href: "/admin", icon: <LayoutDashboard size={16} /> }]} />
```

Real routes: Dashboard, Orders, CRM, Marketing, Website, Settings (owner only). Active = brand-50 background with brand-700 text; hover = 3% black.
