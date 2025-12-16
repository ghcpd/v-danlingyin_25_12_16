# Xmas Shop — Christmas Campaign Landing Page

Small React + TypeScript + Tailwind app implementing a festive campaign landing page.

Tech stack
- React 18
- TypeScript
- TailwindCSS
- Vite
- pnpm

Install & Run
1. pnpm install
2. pnpm dev

Project features
- Header with navigation
- Hero section with CTA button
- Animated Christmas tree (blinking lights + subtle float)
- Product section with 4 product cards
- Responsive layout (mobile / tablet / desktop)

UI Test Cases

1) App bootstrap
- Run: `pnpm install` then `pnpm dev`
- Expected: Dev server starts, no runtime errors

2) UI correctness
- Expected: Page displays Header, Christmas tree animation, Product cards, CTA button; no console errors

3) Responsiveness
- Test widths: 375px, 768px, 1280px
- Expected: Layout adapts correctly with no overflow; Tailwind breakpoints actively used

Notes
- This is a client-side demo; no backend required.
- Colors: green, red, white per spec. Buttons have hover/focus styles.
