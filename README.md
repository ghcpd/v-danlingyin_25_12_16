# XMAS SHOP — Campaign Landing Page

Small React + TypeScript + TailwindCSS app implementing a Christmas shopping campaign landing page.

Tech stack
- React 18
- TypeScript
- Vite (dev server)
- TailwindCSS
- pnpm (package manager)

Install & run
1. pnpm install
2. pnpm dev

What you should see
- Header with navigation and logo text "XMAS SHOP"
- Hero section with title "Christmas Sale", subtitle and a primary CTA "Shop Now"
- Animated Christmas tree (blinking lights + subtle float)
- Product section with 4 product cards, each has image placeholder, name, price and "Add to Cart" button
- Footer text: "© 2025 Christmas Shop"

3 UI test cases
TEST CASE 1 — App bootstrap
- Run: pnpm install
- Run: pnpm dev
Expected:
- Dev server starts successfully
- No runtime errors in console

TEST CASE 2 — UI correctness
- Page renders:
  - Header
  - Christmas tree animation
  - Product cards
  - CTA button
Expected:
- No console errors
- All sections visible and clickable

TEST CASE 3 — Responsiveness
- Test at widths: 375px (mobile), 768px (tablet), 1280px (desktop)
Expected:
- No horizontal overflow
- Layout adapts using Tailwind breakpoints

Notes
- Animation respects prefers-reduced-motion
- All code is client-side only and minimal to keep the example focused

Enjoy — Merry coding and happy holidays! 🎄
