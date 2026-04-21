# Right Choice Cleaning - AI Handoff Document

Hello Antigravity (or another AI assistant)! If you are reading this, you are working on the "Right Choice Cleaning" website.

This document contains all the context you need to safely edit, modify, and deploy this project.

## Project Overview
This is a modern, premium cleaning service website built for a Calgary-based cleaning company. It features a high-end "agency" aesthetic with dark navy (`#0B1F3A`) and gold (`#C9A84C`) branding, glassmorphism UI elements, and smooth scroll animations.

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS (CSS variables defined in `src/index.css`)
- **Animations**: `framer-motion` (used for the preloader, scrolling reveals, and micro-interactions)
- **Icons**: FontAwesome 6 (loaded via CDN in `index.html`)

## Key Architecture & Components
All components are located in `src/components/`.
- **Preloader.jsx**: A custom animated loading screen featuring a gold cleaning cloth that wipes dirt away and leaves sparkles.
- **Navbar.jsx**: A floating "pill" style navigation bar with a frosted glass effect. It is centered using a wrapper div.
- **Hero.jsx**: The top section featuring a full-bleed background video (`/hero.mp4`) with a dark overlay and animated hero text.
- **ServicesChecklist.jsx**: An interactive accordion section showing exactly what is included in Standard, Deep, and Move-In/Out cleans with a responsive comparison table.
- **BookingSection.jsx**: Currently uses a placeholder for the BookingKoala iframe widget. 
- **App.jsx**: The main entry point. It wraps all components in a `<ScrollReveal>` component (using `framer-motion` and `IntersectionObserver`) to make sections fade and slide up as the user scrolls.

## How to Run Locally
1. Open a terminal in the project root.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.

## Important Notes for the AI
1. **GitHub Pages Deployment**: The site is configured to be deployed to GitHub Pages at the `/right-choice-cleaning/` subpath. 
   - **CRITICAL**: Because of this, all image paths must be strictly relative (`./logo.png` instead of `/logo.png`) so they resolve correctly on the live domain.
   - To deploy updates, run: `npm run deploy` (this runs a gh-pages script that builds the site and pushes the `dist` folder to the `gh-pages` branch).
2. **Styling Rules**: Do not use Tailwind. Stick to the vanilla CSS architecture. Use the CSS variables in `index.css` (`--navy`, `--gold`, etc.) to maintain the brand colors.
3. **Framer Motion**: Do not apply CSS `transform` rules directly to elements animated by `framer-motion` (like the Navbar), as Framer Motion overrides CSS transforms. Wrap elements in a static `div` if you need to use CSS transforms or flex centering.

## Client Tasks
If the client asks you to make changes, refer to this document first to understand the structure, then proceed with the requested edits. Common future tasks might include:
- Replacing the `YOUR_PAYPAL_CLIENT_ID` in `index.html` with a real PayPal ID.
- Replacing the GoHighLevel/TrueReview placeholders with real embed codes.
- Updating the BookingKoala iframe link in `BookingSection.jsx`.
