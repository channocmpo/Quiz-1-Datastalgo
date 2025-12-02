# SIS — Santos Ice Services (SPA)

This project is a single-page React application (CRA) that showcases a local ice supplier called **SIS — Santos Ice Services**. The business supplies clean, affordable ice products to households and small vendors: full and half ice blocks, ice tubes, wrapped ice, and bagged crushed ice.

## Purpose
- Many small local suppliers do not have a proper online presence. This SPA demonstrates how a simple, mobile-first website can clearly communicate products, prices, and contact information to nearby customers.

## Tech stack
- React 19 (Create React App)
- React Router DOM (v6) for SPA routing
- React Bootstrap for components
- Bootswatch (`Morph` theme) via CDN

No Vite configuration is used in this project.

## Project structure
- `public/` — static assets including images and the logo (`public/images/`).
- `src/` — React source files.
  - `components/` — reusable components like `Header`, `Footer`, `ProductCard`.
  - `pages/` — SPA pages (`Home`, `About`, `Contact`).
  - `data/` — dummy data for `products` and `team`.

## Routes
- `/` — Home: informative landing page and full product listing (Menu removed; home contains available items).
- `/about` — About: short description of SIS.
- `/contact` — Contact: label in navigation (non-clickable); contact page file retained if you want to restore routing.

## Dummy data and assets
- `src/data/products.js` — contains a small list of the ice supplier's items (full/half blocks, tubes, wrapped ice) with images (Unsplash URLs) and prices.
- `public/logo.svg` — simple svg logo used in header.

# SIS — Santos Ice Services (SPA)

This repository contains a single-page React application (Create React App) that represents a small local ice supplier called **SIS — Santos Ice Services**. The site is a demo/class project that demonstrates a clean, mobile-first SPA design suitable for a neighborhood supplier.

## Background
SIS is a neighborhood ice supplier selling different ice products at low prices: full blocks, half blocks, single ice tubes in sealed plastic, wrapped ice blocks, and bagged crushed ice. Smaller suppliers often don't have a dedicated website; customers rely on word-of-mouth, social posts, or in-person visits. This project provides a simple, clear web front that lists items and prices and makes it easy for nearby customers to find contact info and product details.

## Why this rehaul
- No dedicated website: many small suppliers lack any website presence.
- Visibility: a clear landing page with prices helps customers decide and reduces friction for repeat customers.
- Mobile-first: customers commonly browse on phones; a responsive SPA improves accessibility and conversion.
- Maintainability: modular components and local assets make future updates simpler.

## Goals
- Provide a mobile-friendly, single-page experience.
- Display available products and prices clearly on the landing page.
- Use reusable components so the site is easy to maintain and extend.

## Tech stack
- React 19 (Create React App)
- React Router DOM (v6) for SPA routing
- React Bootstrap for UI components
- Bootswatch (`Morph` theme) via CDN for styling

No Vite configuration is used in this project.

## Project structure (key files)
- `public/images/` — product images and the logo used by the site.
- `src/components/` — reusable components (`Header.jsx`, `Footer.jsx`, `ProductCard.jsx`).
- `src/pages/` — page components (`Home.jsx`, `About.jsx`).
- `src/data/products.js` — product list with `id`, `name`, `description`, `price`, `image`.

## Routes and pages
The app is intentionally small and focused on clarity:
- `/` — Home: the main landing page and full product listing. The home page contains an introductory paragraph describing SIS, a compact price list, and the product grid (this consolidates the Menu into Home).
- `/about` — About: short background about SIS and hygiene/handling notes.

Notes: The `Contact` label is shown in the navigation as a non-clickable item per project instructions. A `Contact.jsx` file exists in the source tree but is intentionally not routed; keep it if you wish to enable it later.

## Product data
- `src/data/products.js` contains five product objects used by the site. Images referenced by those objects are stored in `public/images/` and are referenced with root-relative paths (e.g. `/images/full-block.jpg`).

## Assets & references used for this demo
- Logo (downloaded and used in the header): https://png.pngtree.com/png-clipart/20190516/original/pngtree-snow-vector-icon-png-image_3725323.jpg
- Product images used (provided or referenced during development):
  - Full block: image provided by the user (downloaded to `public/images/full-block.jpg`)
  - Half block: https://quench.culligan.com/wp-content/uploads/2024/09/The-Half-Classic-Half-Dice-Ice.jpg (downloaded to `public/images/half-block.jpg`)
  - Ice tube: https://e7.pngegg.com/pngimages/347/53/png-clipart-plastic-bag-packaging-and-labeling-ice-ice-tube-waste-industry.png (downloaded to `public/images/ice-tube.png`)
  - Wrapped ice: image provided by the user (downloaded to `public/images/wrapped.jpg`)
  - Bagged crushed ice: referenced thumbnail (downloaded to `public/images/bagged-crushed.jpg`)


## How to run (development)
Prerequisite: Node.js installed (LTS recommended).

Windows PowerShell:
```powershell
cd "c:\Users\RJ\Desktop\luis coding\Frontend\frontend"
npm install
npm start
```

Open http://localhost:3000 in your browser. If port 3000 is busy on your machine, set the port before starting (PowerShell):
```powershell
$env:PORT=3001; npm start
```
