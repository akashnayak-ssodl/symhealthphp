# SYMHEALTH 2026

The website is a React single-page application built with Vite. Its page content and navigation are bundled locally; it does not require PHP or fetch page content from the original site at runtime.

## Run locally

Install Node.js 18 or newer, then run:

```powershell
npm install
npm run dev
```

Vite prints the local development URL. To create and preview a production build:

```powershell
npm run build
npm run preview
```

The production files are written to `dist/`.

## Deploy

Deploy the contents of `dist/` to a static web host. For Apache, copy the included `.htaccess` into the deployed document root as well; it serves the React app for direct visits to page routes and legacy `.php` URLs. Other hosts need an equivalent fallback that serves `index.html` for app routes.

## Project structure

- `src/App.jsx` — shared React layout, routing, and interactive controls
- `src/pages/` — one React component per page, including the home page
- `src/components/` — shared navigation links, page layout, galleries, and cached-content renderer
- `src/data.js` — navigation, shared dates, assets, and content for pages without a saved source page
- `src/styles.css` — responsive styles, including light/dark themes
- `images/` — local university logo
- `public/site-assets/` — locally stored conference, campus, and partner images
- `cache/` — saved source pages used to preserve their original page content and images
- `index.html` — Vite application entry point

All page entry points and page views are React components. The former PHP pages and server helpers have been removed; saved page content remains in `cache/` and is rendered by React. Photographs are stored locally under `public/site-assets/`; archive documents continue to use their original public asset URLs. The included Apache rewrite only sends app routes (and old `.php` bookmarks) to the React entry point; no PHP runtime is required. The site includes a searchable page directory, responsive dropdown navigation, theme switcher, campus photo viewer, collapsible FAQs, share action, conference archive and reduced-motion support. Registration and abstract submissions are closed because the 2026 event has passed.







npm --prefix .\symhealth-php run build
cd /d C:\symhealthphp\symhealth-php
npm run build
npm run preview