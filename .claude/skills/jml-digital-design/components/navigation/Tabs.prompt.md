Top tabs for admin detail pages (Order detail: Summary / Media / Site Data / Marketing Kit; Website: Gallery / Testimonials / Admin Users).

```jsx
<Tabs tabs={[{ id: "summary", label: "Summary", icon: <FileText size={16} />, panel: <SummaryPanel /> }]} />
```

Active tab: 2px brand-600 underline, black label. Unbuilt sections stay visible with `comingSoon` rather than disappearing.
