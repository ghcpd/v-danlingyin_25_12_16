# Christmas Shopping Campaign

A festive e-commerce campaign landing page built with React, TypeScript, and TailwindCSS featuring an animated Christmas tree and responsive product showcase.

## Tech Stack

- **React** 18.2.0
- **TypeScript** 5.2.2
- **TailwindCSS** 3.4.0
- **Vite** 5.0.8
- **pnpm** (package manager)

## Installation

Install dependencies using pnpm:

```bash
pnpm install
```

## How to Run

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
pnpm build
```

## Project Structure

```
christmas-shopping-campaign/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with logo
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── ChristmasTree.tsx   # Animated Christmas tree
│   │   ├── ProductCard.tsx     # Product display card
│   │   └── Footer.tsx          # Footer component
│   ├── pages/
│   │   └── HomePage.tsx        # Main landing page
│   ├── styles/
│   │   └── index.css           # Tailwind directives
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

## Features

✅ **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop  
✅ **Christmas Tree Animation** - Blinking lights with CSS animations  
✅ **Product Showcase** - 4 product cards with hover effects  
✅ **Festive Theme** - Christmas colors (red, green, white, gold)  
✅ **Interactive Elements** - Hover effects on buttons and navigation  
✅ **TypeScript** - Full type safety throughout the application  

## UI Test Cases

### TEST CASE 1: App Bootstrap

**Steps:**
1. Run `pnpm install`
2. Run `pnpm dev`

**Expected Results:**
- ✅ All dependencies install successfully
- ✅ Dev server starts on port 5173
- ✅ No build errors
- ✅ No runtime errors in console
- ✅ Application loads in browser

### TEST CASE 2: UI Correctness

**Steps:**
1. Open `http://localhost:5173` in browser
2. Verify all sections render correctly

**Expected Results:**
- ✅ Header displays with "XMAS SHOP" logo
- ✅ Navigation links (Home, Deals, Gifts) visible
- ✅ Hero section shows "Christmas Sale" title
- ✅ "Shop Now" button is visible and styled
- ✅ Christmas tree animation is centered and lights blink
- ✅ 4 product cards display with names, prices, and emoji images
- ✅ "Add to Cart" buttons visible on all product cards
- ✅ Footer displays "© 2025 Christmas Shop"
- ✅ No console errors
- ✅ All animations work smoothly

### TEST CASE 3: Responsiveness

**Steps:**
1. Open browser DevTools
2. Test at different viewport widths:
   - 375px (Mobile)
   - 768px (Tablet)
   - 1280px (Desktop)

**Expected Results:**

**Mobile (375px):**
- ✅ Navigation stays on single line
- ✅ Hero text is readable (smaller font sizes)
- ✅ Product cards stack vertically (1 column)
- ✅ No horizontal overflow
- ✅ Buttons remain fully visible
- ✅ Christmas tree scales appropriately

**Tablet (768px):**
- ✅ Product cards display in 2 columns
- ✅ Text sizes increase appropriately
- ✅ Spacing is balanced
- ✅ Navigation remains horizontal

**Desktop (1280px):**
- ✅ Product cards display in 4 columns
- ✅ Large text in hero section
- ✅ Content centered with proper margins
- ✅ All hover effects work correctly
- ✅ Layout uses full viewport width effectively

## Color Scheme

- **Red**: #DC143C (Primary CTA, headings)
- **Green**: #2D5016 (Tree, footer, buttons)
- **Light Green**: #4F7942 (Hover states)
- **Gold**: #FFD700 (Accents, star)
- **White**: Background
- **Gray**: Text, borders

## Animations

- **Blink**: 1.5s infinite (Christmas lights)
- **Float**: 3s infinite (Hero title)
- **Glow**: 2s infinite (Tree star)

---

Built with ❤️ for the holiday season 🎄
