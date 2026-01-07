# Christmas Shop — React + TypeScript + TailwindCSS

A small, fully runnable festive e-commerce campaign landing page built with **React**, **TypeScript**, **TailwindCSS** and **pnpm**.

## 📌 Objectives (from the spec)
- Header + navigation
- Hero section with a call‑to‑action and a **Christmas tree animation** (blinking lights + floating)
- Product gallery (4 product cards)
- Footer
- Responsive design (mobile / tablet / desktop)

## 🔧 Tech Stack
- React 18 + TypeScript
- Vite for dev / build
- TailwindCSS (utility classes + custom animations)
- pnpm as package manager

## ⚙️ Installation & run
```bash
pnpm install     # install deps
pnpm dev         # start dev server (http://localhost:5173)
```

> The app is client-side only — no backend is required.

## ✅ Test Cases (what to verify)
### Test Case 1 — App bootstrap
- Run: `pnpm install` then `pnpm dev`
- Expected: dev server starts successfully with no runtime errors.

### Test Case 2 — UI correctness
- Page renders all sections: Header, Christmas tree, Product cards, CTA button
- Expected: no console errors; elements visible as designed; animations run automatically.

### Test Case 3 — Responsiveness
- Resize viewport to: `375px` (mobile), `768px` (tablet), `1280px` (desktop)
- Expected: layout adapts. Product grid collapses to 1/2 columns on smaller screens and no horizontal overflow.

---

If you want to modify the animation, check `tailwind.config.js` → `keyframes` and `animation` entries.

