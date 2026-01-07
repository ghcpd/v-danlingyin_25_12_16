# XMAS SHOP - Campaign Page

A small React + TypeScript + TailwindCSS promo landing page for a Christmas shopping campaign.

Tech stack
- React
- TypeScript
- TailwindCSS
- Vite
- pnpm

How to install
1. pnpm install
2. pnpm dev

How to run
- Start dev server: pnpm dev
- Build: pnpm build

3 UI test cases

TEST CASE 1 — App bootstrap
- Steps:
  - Run: pnpm install
  - Run: pnpm dev
- Expected:
  - Dev server starts successfully
  - No runtime errors in console

TEST CASE 2 — UI correctness
- Steps:
  - Open app in browser
  - Confirm page renders header, Christmas tree animation, product cards, shop CTA
- Expected:
  - No console errors
  - All sections visible and match spec

TEST CASE 3 — Responsiveness
- Steps:
  - Resize browser to 375px, 768px, 1280px
- Expected:
  - No horizontal overflow
  - Layout adapts correctly using Tailwind breakpoints

Notes
- Tree animation implemented using SVG + Tailwind custom animations.
- Colors are limited to green, red and white.
