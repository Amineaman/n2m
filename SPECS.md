# Noortomark Website – Technical Specs

## 1) Purpose

Noortomark is a premium marketing/agency website that:

- Presents the brand (Hero + About)
- Lists services (summary on Home, full details on Services page)
- Builds trust using testimonials
- Converts visitors via a contact/order form that opens WhatsApp with a pre-filled message

This is a **static front-end SPA** (single-page application) built with **React + Vite**, intended to be deployed to a static host.

## 2) Scope

### In scope

- Home route (`/`) with section-based navigation
- Services route (`/services`) with detailed service cards
- Multi-language UI (FR/EN/AR)
- RTL support for Arabic via `<html dir="rtl">` and CSS rules
- Theme toggle (dark/light) persisted in `localStorage`
- WhatsApp contact flow via `wa.me` URL

### Out of scope (current implementation)

- Server-side rendering (SSR)
- Backend/API for contact form
- Database, CMS integration
- Authentication/authorization
- Payment, order tracking

## 3) Target Platforms

- Modern evergreen browsers (Chrome/Edge/Firefox/Safari)
- Responsive UI for mobile + tablet + desktop

## 4) Tech Stack

- React 18
- Vite (dev server + build)
- react-router-dom (routing)
- Tailwind CSS v4 (CSS-first imports via `src/App.css` + `@tailwindcss/vite` plugin)
- react-icons (icon set)
- ESLint (linting)

## 5) Application Architecture

### Entry and rendering

- HTML shell mounts at `#root` in `index.html`
- React bootstraps in `src/main.jsx`

### Providers

- `LanguageProvider` in `src/contexts/LanguageContext.jsx` wraps the app
- Router is created with `BrowserRouter`

### Routing

Routes are defined in `src/App.jsx`:

- `/` → `src/pages/Home.jsx`
- `/services` → `src/pages/ServicesPage.jsx`

## 6) UX & Navigation Spec

### 6.1 Home route (`/`)

Home is a composition of sections:

1. `Hero` (`id="home"`)
2. `About` (`id="about"`)
3. `Services` (`id="services"`)
4. `ContactForm` (`id="contact"`)
5. `Testimonials` (`id="testimonials"`)

### 6.2 Services route (`/services`)

- Displays all services in an expanded, detailed format
- Implements a mobile accordion pattern: each service card collapses/expands in mobile layouts
- Includes CTAs linking to `/#contact`

### 6.3 Navbar behavior

Navbar (`src/components/Navbar.jsx`) supports:

- Smooth scroll to Home sections when on `/`:
  - `#home`, `#about`, `#services`, `#contact`
- If user is not on `/` and clicks an anchor:
  - Navigate to `/`, then scroll into view after a short delay
- If user clicks Services:
  - Navigate to `/services`, scroll to top

Active section highlighting:

- On `/`, it detects which section is currently visible (scroll position + bounding rectangles)
- On `/services`, it forces the active section to “services”

## 7) Language / i18n Spec

### 7.1 Supported locales

- French (`fr`) – default
- English (`en`)
- Arabic (`ar`) – RTL

### 7.2 Storage

- Language is persisted in `localStorage` key: `language`

### 7.3 DOM side effects

When language changes:

- `<html lang>` is set to the selected language
- `<html dir>` is set to:
  - `rtl` for Arabic (`ar`)
  - `ltr` otherwise

### 7.4 Translation mechanism

- Translations are defined in `src/data/translations.js`
- Components resolve strings using:
  - `translations[language][key] || key`

Content keys are used extensively, e.g.:

- Navigation: `home`, `about`, `services`, `contact`
- Hero: `hero-text`, `discover-services`, `place-order`
- Services: `marketing-services`, `frontend-development`, etc.
- Contact form labels: `request-service`, `choose-service`, etc.
- Testimonials: `testimonial-1`, `testimonial-2`, `testimonial-3`

## 8) RTL (Arabic) Spec

RTL is enabled when `language === 'ar'`.

- CSS includes `[dir="rtl"]` overrides in `src/App.css`
- Adjustments include:
  - direction + text alignment
  - spacing utilities compatibility (e.g. `.space-x-*`)
  - reversing `.flex-row`
  - icon alignment fixes for common flex patterns

## 9) Theme Spec

Theme behavior is controlled by `src/hooks/useTheme.js`.

### 9.1 Storage

- Theme persisted in `localStorage` key: `theme`
  - values: `dark` or `light`

### 9.2 DOM side effects

- On dark:
  - `<html>`: add `dark`, remove `light`
  - `<body>`: remove `light-mode`
- On light:
  - `<html>`: add `light`, remove `dark`
  - `<body>`: add `light-mode`

### 9.3 Theme consumption

- Some components read `isDark` (e.g., testimonials imports the hook)
- Most styling is currently done via Tailwind classes + CSS variables in `src/App.css`.

## 10) Content Model

### 10.1 Services

Services are defined in `src/data/services.js`:

Each service:

- `icon`: a React icon component (from `react-icons/fa`)
- `title`: translation key
- `description`: translation key
- `features`: list of translation keys
- `duration`: display string

Consumers:

- Home services summary uses `src/components/Services.jsx`
- Full services page uses `src/pages/ServicesPage.jsx`

### 10.2 Testimonials

Testimonials are defined in `src/data/testimonials.js`:

- `text`: translation key (resolved through translations)
- `author`: raw string

Consumer:

- `src/components/Testimonials.jsx`

## 11) Contact / Conversion Spec (WhatsApp)

The contact form (`src/components/ContactForm.jsx`) is a front-end conversion mechanism.

### 11.1 Fields

- Service (required)
- Full name (required)
- Email (required)
- Phone (required)
- Message (optional)

### 11.2 Submit behavior

On submit:

1. Build a text block containing the field values
2. Construct a WhatsApp deep link:

   `https://wa.me/<number>?text=<encodedText>`

3. Open it in a new tab/window (`window.open(url, '_blank')`)
4. Reset the form after a short delay

### 11.3 WhatsApp target

- Number is currently hard-coded: `212780539618`

## 12) Styling Spec

### 12.1 Tailwind v4 CSS-first

`src/App.css` uses:

- `@import "tailwindcss/theme" layer(theme);`
- `@import "tailwindcss/preflight" layer(base);`
- `@import "tailwindcss/utilities" layer(utilities);`

### 12.2 Design tokens

A palette and spacing variables are declared in `@theme` (CSS variables).

### 12.3 Custom component classes

Custom classes in `@layer components` include:

- `.btn-gold`
- `.btn-dark`
- `.section-title`
- `.card-hover`
- navbar helper classes (`.navbar-blur`, `.navbar-shadow`)

### 12.4 Note on `tailwind.config.js`

This repo includes a `tailwind.config.js` file that contains CSS-like content rather than a JS export. If Tailwind tooling complains, migrate those rules into `src/App.css` or replace with a valid Tailwind configuration.

## 13) SEO Spec

In `index.html`:

- `<title>`
- meta `description`
- meta `keywords`
- OpenGraph tags (`og:title`, `og:description`)

## 14) Build, Deploy, and SPA Rewrites

### 14.1 Build

- `npm run build` outputs `dist/`

### 14.2 Deploy

Deploy `dist/` to any static host.

### 14.3 SPA rewrite requirement

Because this is a React Router SPA, configure rewrites so unknown routes serve `index.html` (so `/services` works on refresh).

## 15) Quality Gates

- `npm run lint` must pass (configured for zero warnings)
- `npm run build` should succeed

## 16) Known Limitations / Risks

- WhatsApp deep link depends on user device/app availability and browser popup policies.
- No backend validation; all validation is client-side HTML required fields.
- RTL support is primarily CSS-based and should be visually verified on real Arabic content.
- Theme toggling currently changes DOM classes; if future styles rely on Tailwind `dark:` variants, ensure they are wired consistently.

## 17) Change Guide

### Add a service

1. Add a new entry in `src/data/services.js`
2. Add translation keys in `src/data/translations.js` for:
   - title
   - description
   - feature keys

### Add a translation

1. Add keys under `en`/`fr`/`ar` in `src/data/translations.js`
2. Ensure UI calls `t(key)` for any new copy

### Change WhatsApp number

- Update the constant in `src/components/ContactForm.jsx`
