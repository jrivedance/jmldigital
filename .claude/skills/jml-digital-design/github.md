repo: jrivedance/jml-digital-app
branch: main

## Last sync

date: 2026-08-28T18:20:00Z

### Updated in this project

- Buttons switched from the blue gradient to a flat `--brand-600` fill.
- Accent textures now applied section-by-section across the marketing site.
- Admin CRM, Marketing, Website and Settings screens built out.
- Added a client portal kit: sign-in, listings, download gallery.

## Screen map

| Screen | Built from |
| --- | --- |
| `ui_kits/marketing-site/index.html` | `src/app/(marketing)/page.tsx` |
| `ui_kits/marketing-site/Shell.jsx` | `src/components/Navbar.tsx`, `src/components/Footer.tsx` |
| `ui_kits/marketing-site/Home.jsx` | `src/components/Hero.tsx`, `Services.tsx`, `Gallery.tsx`, `About.tsx`, `Testimonials.tsx`, `Contact.tsx`, `ui/HeroCarousel.tsx`, `ui/HexDivider.tsx` |
| `ui_kits/marketing-site/Pricing.jsx` | `src/app/(marketing)/pricing/page.tsx`, `src/components/pricing/PackageCard.tsx`, `ALaCarteList.tsx`, `src/components/booking/BookingForm.tsx` |
| `ui_kits/marketing-site/data.js` | `src/lib/services.ts`, `src/lib/pricing.ts`, `src/lib/testimonials.ts` |
| `ui_kits/admin-portal/Login.jsx` | `src/components/auth/LoginForm.tsx` |
| `ui_kits/admin-portal/AdminShell.jsx` | `src/components/admin/AdminShell.tsx` |
| `ui_kits/admin-portal/Screens.jsx` | `src/app/admin/page.tsx`, `src/components/admin/ui/TabsShell.tsx`, `src/components/admin/orders/*` |
| `ui_kits/admin-portal/AdminSections.jsx` | `src/app/admin/crm`, `admin/marketing`, `admin/website`, `admin/settings` |
| `ui_kits/client-portal/ClientScreens.jsx` | `src/app/(client)/*`, `src/app/g/[token]/page.tsx` |
| `tokens/*.css` | `tailwind.config.ts`, `src/app/globals.css` |
| `components/**` | `src/components/ui/*`, `src/components/pricing/*`, `src/components/admin/*` |

## Sync history

### 2026-08-28T13:45:00Z

- Built the token layer from `tailwind.config.ts` and `src/app/globals.css`.
- Authored 21 React primitives mirroring the repo's components.
- Recreated the marketing site and admin portal as UI kits.
- Copied logos, honeycomb graphics and listing photography into `assets/`.
