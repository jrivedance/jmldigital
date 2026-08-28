Status and stat pill.

```jsx
<Badge tone="warning">Unpaid</Badge>
<Badge tone="danger">3d overdue</Badge>
<Badge tone="brandSolid" uppercase>For $1M+ listings</Badge>
```

Tones map to the product's statuses: `warning` = pending payment, `danger` = overdue, `brand` = due today / service stat, `neutral` = has a note. Wrap the numeral in `font-family: var(--font-mono)` when the badge leads with a figure ("30% increase in buyer interest").
