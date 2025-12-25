# Noortomark (Vite + React)

Noortomark is a multilingual (FR/EN/AR) marketing/agency website built with React and Vite, styled with Tailwind CSS. It includes a Home page composed of sections (Hero, About, Services, Contact, Testimonials) and a dedicated Services page with detailed service cards.

## Table of Contents

- Overview
- Features
- Tech stack
- Routes
- Project structure
- Content & translations
- Theming (dark/light)
- Styling system (Tailwind v4 + CSS tokens)
- SEO metadata
- Getting started
- Scripts
- Build & deployment
- Troubleshooting
- Specs

## Overview

- **App entry:** `index.html` mounts React into `#root`.
- **Bootstrap:** `src/main.jsx` renders the React app.
- **Routing:** `src/App.jsx` uses React Router.
- **State:** language stored in `localStorage`, theme stored in `localStorage`.

## Features

- **Two routes**
	- `/` (Home): Hero, About, Services (summary), Contact form, Testimonials
	- `/services` (Services page): detailed service sections with features and CTA
- **Language switcher:** FR / EN / AR with translation keys
- **RTL support for Arabic:** sets `document.documentElement.dir = 'rtl'` and applies RTL CSS adjustments
- **Theme toggle:** light/dark saved to `localStorage` and applied via `document.documentElement` classes
- **Responsive UI:** mobile menu, smooth scrolling to sections, touch-friendly targets

## Tech Stack

- **React:** 18
- **Router:** `react-router-dom` 7
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` + Tailwind v4 CSS imports)
- **Icons:** `react-icons`
- **Linting:** ESLint (React hooks + react-refresh rules)

See `package.json` for the full dependency list and versions.

## Routes

Defined in `src/App.jsx`:

- `/` → `src/pages/Home.jsx`
- `/services` → `src/pages/ServicesPage.jsx`

### Navigation behavior

The Navbar supports both:

- **Anchor navigation** on the Home page (`#home`, `#about`, `#services`, `#contact`) with smooth scrolling.
- **Route navigation** to `/services`.

If you click an anchor while not on `/`, the app navigates to `/` first, then scrolls to the requested section.

## Project Structure

High-level layout:

```
.
├─ index.html
├─ vite.config.js
├─ eslint.config.js
├─ tailwind.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ components/
│  ├─ contexts/
│  ├─ data/
│  ├─ hooks/
│  ├─ logo/
│  └─ pages/
└─ public/
```

### Key files

- `src/main.jsx`: React root rendering
- `src/App.jsx`: Router setup + layout (Navbar + Routes + Footer)
- `src/App.css`: Tailwind v4 CSS imports + design tokens + components/utilities layers
- `src/contexts/LanguageContext.jsx`: language state + `lang`/`dir` updates
- `src/hooks/useTheme.js`: theme state + updates HTML/body classes

### Pages

- `src/pages/Home.jsx`: composes `Hero`, `About`, `Services`, `ContactForm`, `Testimonials`
- `src/pages/ServicesPage.jsx`: renders a detailed services grid (accordion on mobile)

### Components

- `src/components/Navbar.jsx`: navigation + language switcher + theme toggle + responsive menu
- `src/components/Hero.jsx`: main hero section (CTA buttons)
- `src/components/About.jsx`: about section
- `src/components/Services.jsx`: services summary section
- `src/components/ContactForm.jsx`: contact/order form UI
- `src/components/Testimonials.jsx`: testimonials section
- `src/components/Footer.jsx`: footer content

### Data

- `src/data/services.js`: service definitions (icon + translation keys + feature keys + duration)
- `src/data/testimonials.js`: testimonial data (if used by the Testimonials component)
- `src/data/translations.js`: FR/EN/AR string dictionary

## Content & Translations

Most UI strings are translation keys resolved through:

- `LanguageContext` (stores `language` in `localStorage`, default `fr`)
- `translations` object in `src/data/translations.js`

Example pattern:

- Services use keys like `marketing-services` and `marketing-services-desc`.
- Features use keys like `meta-ads-feature`, `landing-pages-feature`, etc.

To add a new language:

1. Add a new language entry in `src/data/translations.js`
2. Update the language toggle in `src/components/Navbar.jsx`
3. If the language is RTL, set the appropriate `dir` handling (currently Arabic is RTL)

## RTL (Arabic)

When `language === 'ar'`:

- `document.documentElement.dir` is set to `rtl`.
- `src/App.css` includes RTL-specific CSS overrides for spacing, flex direction, text alignment, and icon alignment.

## Theming (Dark/Light)

Theme state is controlled by `src/hooks/useTheme.js`:

- Saves theme in `localStorage` under the key `theme`.
- Applies classes on the root element:
	- Dark: adds `dark`, removes `light`
	- Light: adds `light`, removes `dark`
- Adds/removes `light-mode` class on `<body>`.

The Navbar exposes a theme toggle (sun/moon icon).

## Styling System

### Tailwind v4 CSS imports

Instead of `@tailwind base/components/utilities`, this project uses Tailwind v4 CSS imports in `src/App.css`:

- `@import "tailwindcss/theme" layer(theme);`
- `@import "tailwindcss/preflight" layer(base);`
- `@import "tailwindcss/utilities" layer(utilities);`

### Design tokens

`src/App.css` defines CSS variables in an `@theme` block (example: `--noor-900`, `--color-primary`). These variables are then used throughout styles and inline gradients.

### Component classes

`src/App.css` defines project-specific utility classes under `@layer components`, including (not exhaustive):

- `.btn-gold`
- `.btn-dark`
- `.section-title`
- `.card-hover`

### Note about `tailwind.config.js`

This repo contains a `tailwind.config.js` file that currently holds CSS (custom keyframes and `@apply` utilities) rather than exporting a standard Tailwind config object. The actual styling behavior comes primarily from `src/App.css` + Tailwind’s Vite plugin. If you want a conventional Tailwind JS configuration, you can migrate those rules into `src/App.css` or replace `tailwind.config.js` with a proper Tailwind config export.

## SEO & Metadata

`index.html` includes:

- `<title>Noortomark - Premium Services</title>`
- Meta description + keywords
- Open Graph title/description

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

From `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Build & Deployment

### Production build

```bash
npm run build
```

Outputs static files to `dist/`.

### Deploy as a static site

You can deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Typical settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Because this is a client-side routed SPA, ensure your host is configured to rewrite unknown routes to `index.html` (so `/services` works on refresh).

## Troubleshooting

- **`/services` works in dev, but 404s in production:** configure SPA rewrites to serve `index.html`.
- **Styles not applying:** confirm the Vite Tailwind plugin is enabled in `vite.config.js` and that `src/App.css` is imported by `src/App.jsx`.
- **Language/RTL looks wrong:** verify `localStorage.language` is set correctly and that `document.documentElement.dir` changes to `rtl` for Arabic.
- **Theme toggle not persisting:** check `localStorage.theme` and ensure the page isn’t blocking storage.
- **Lint errors:** run `npm run lint` and fix issues reported by ESLint.

## Specs

Technical specification and architecture notes are in `SPECS.md`.
