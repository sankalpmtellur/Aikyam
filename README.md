# Aikyam — Women’s PG Website

Aikyam is a premium women’s PG / co‑living website built with React, Vite, and Tailwind CSS. It features a luxury‑leaning visual identity, image‑rich pages, and multiple routes for marketing content like gallery, amenities, location, and contact.

## Features
- Multi‑page marketing site powered by React Router
- Animated UI elements (GSAP, Framer Motion)
- Image‑driven gallery with category filters
- Responsive navigation with mobile drawer
- Tailwind CSS design system and custom theme tokens

## Tech Stack
- React + React Router
- Vite
- Tailwind CSS + PostCSS
- GSAP and Framer Motion
- Lucide and React Icons

## Getting Started

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Project Structure
```
src/
  components/        # Navbar + Footer
  pages/             # Home, Gallery, About, Location, Contact
  assets/            # Image assets used in the UI
  App.jsx            # Route definitions
  main.jsx           # App bootstrap
```

## Routes
- `/` — Home
- `/gallery` — Gallery
- `/about` — About
- `/location` — Location
- `/contact` — Contact

## Deployment (Vercel)
This project includes a `vercel.json` with SPA rewrites. Deploy by importing the repo in Vercel; the build output is `dist`.

## Notes
- Image assets live in `src/assets/` and are bundled by Vite.
- The site is currently configured for a Bangalore‑based women’s PG brand.
