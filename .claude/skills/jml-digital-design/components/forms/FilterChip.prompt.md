Row of category filters above a media grid, and the time-slot / availability picker in booking and settings.

```jsx
<FilterChip active>All Work</FilterChip>
<FilterChip>Drone</FilterChip>
```

Labels are Title Case and match the service names ("All Work", "Photography", "Drone", "Video", "3D Tours"). Centred, 8px gap, wrapping. Hide a filter entirely when it has no items rather than disabling it.

Hover follows the Button rule: an active (blue) chip's border turns white, an inactive (white) chip picks up a `--brand-500` outline and brand-700 label.
