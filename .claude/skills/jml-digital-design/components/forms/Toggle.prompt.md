Settings switch — used for notification preferences in the admin portal.

```jsx
<Toggle checked={notify.booking} onChange={(v) => set({ ...notify, booking: v })} label="New booking alerts" />
```

Always paired with a label and one line of explanatory text to its left, in a divided list. 40×22px, no track label, no "on/off" text.
