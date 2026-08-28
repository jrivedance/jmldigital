The only text input in the system — contact, booking, login, admin forms all use it.

```jsx
<TextField id="email" label="Email" type="email" placeholder="you@example.com" required />
<TextField id="phone" label="Phone" hint="optional" type="tel" placeholder="(321) 555-0100" />
<TextField id="message" label="Message" multiline rows={4} placeholder="Tell us about the shoot you need..." />
```

Labels are uppercase, 12px, 40% black, `0.1em` tracking. Focus turns the border brand-blue at 50%; there is no focus ring or glow. Placeholders are realistic examples, never "Enter your email".
