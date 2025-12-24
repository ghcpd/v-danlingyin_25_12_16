# Christmas Shop - Holiday Campaign Page

A festive e-commerce landing page built with React, TypeScript, and TailwindCSS featuring an animated Christmas tree and product showcase.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS 3** - Utility-first styling
- **Vite 5** - Build tool and dev server
- **pnpm** - Package manager

## Project Structure

```
christmas-shop/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header with logo
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── ChristmasTree.tsx    # Animated Christmas tree
│   │   ├── ProductCard.tsx      # Individual product card
│   │   ├── ProductSection.tsx   # Product grid container
│   │   └── Footer.tsx           # Footer section
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # TailwindCSS config
├── postcss.config.js            # PostCSS config
└── vite.config.ts               # Vite config
```

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- pnpm installed (`npm install -g pnpm`)

### Steps

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Build for production**
   ```bash
   pnpm build
   ```

4. **Preview production build**
   ```bash
   pnpm preview
   ```

## Features

✅ **Header** - Navigation with responsive mobile menu  
✅ **Hero Section** - Title, subtitle, and "Shop Now" CTA button  
✅ **Animated Christmas Tree** - Blinking lights with glow effect on star  
✅ **Product Cards** - 4 featured products with discount badges  
✅ **Responsive Design** - Mobile, tablet, and desktop breakpoints  
✅ **Interactive Elements** - Hover effects, smooth scrolling, button feedback  
✅ **Festive Colors** - Green, red, and gold theme  

## Test Cases

### TEST CASE 1: App Bootstrap ✓
**Objective:** Verify the development environment starts successfully.

**Steps:**
1. Open terminal in project root
2. Run `pnpm install` - installs all dependencies
3. Run `pnpm dev` - starts Vite dev server

**Expected Results:**
- ✓ No install errors
- ✓ Dev server starts on `http://localhost:5173`
- ✓ Browser opens automatically or is accessible via URL
- ✓ No TypeScript or compilation errors in terminal

---

### TEST CASE 2: UI Correctness & Component Rendering ✓
**Objective:** Verify all page sections render correctly without errors.

**Verification Checklist:**
1. **Header Renders**
   - ✓ Logo "🎄 XMAS SHOP" displays
   - ✓ Navigation links (Home, Deals, Gifts) visible on desktop
   - ✓ Mobile menu icon appears below 768px width
   - ✓ Green background with white text

2. **Hero Section Displays**
   - ✓ Title "Christmas Sale" visible
   - ✓ Subtitle "Up to 50% off holiday gifts" displayed
   - ✓ "Shop Now" button with gold background
   - ✓ Gradient background (green to red) visible

3. **Christmas Tree Animation**
   - ✓ Tree structure displays with 3 tiers
   - ✓ Lights blink with alternating gold and red colors
   - ✓ Star on top glows continuously
   - ✓ Brown trunk at base

4. **Product Section**
   - ✓ "Featured Products" heading displays
   - ✓ 4 product cards render in grid
   - ✓ Each card shows: emoji placeholder, name, price, discount badge, "Add to Cart" button
   - ✓ Cards display 1 column on mobile, 2 on tablet, 4 on desktop

5. **Footer**
   - ✓ Copyright text "© 2025 Christmas Shop" displays
   - ✓ Green background matches header
   - ✓ Positioned at bottom of page

6. **Console Check**
   - ✓ No red errors in DevTools Console
   - ✓ No TypeScript warnings
   - ✓ No missing imports or undefined references

---

### TEST CASE 3: Responsiveness & Layout Adaptation ✓
**Objective:** Verify layout adapts correctly across different screen widths.

**Test Widths & Expected Behavior:**

**Mobile (375px)**
- ✓ No horizontal overflow
- ✓ Header: Logo visible, navigation hidden (hamburger icon shows)
- ✓ Hero: Title and subtitle stack vertically, button spans full width (with padding)
- ✓ Christmas Tree: Centered, no overflow
- ✓ Products: 1 column grid, cards full width (with margin)
- ✓ Footer: Text centered, full width

**Tablet (768px)**
- ✓ Header: Navigation links visible horizontally
- ✓ Hero: Title larger, button with padding
- ✓ Christmas Tree: Centered
- ✓ Products: 2-column grid
- ✓ No overflow or clipping on any element
- ✓ Touch-friendly button sizes (44px+ height)

**Desktop (1280px)**
- ✓ Header: Full navigation with proper spacing
- ✓ Hero: Full-width section with centered content
- ✓ Christmas Tree: Centered, prominent
- ✓ Products: 4-column grid layout
- ✓ Container max-width applied (centered on very large screens)
- ✓ Hover effects work smoothly (transform scale, color transitions)

**Device Testing Tools:**
- Open DevTools (F12)
- Use Device Emulation (Ctrl+Shift+M)
- Test at: 375, 425, 768, 1024, 1280px widths
- Check mobile devices if available (iOS Safari, Android Chrome)

---

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- **No external images** - uses emoji and CSS shapes
- **Minimal dependencies** - React + TailwindCSS only
- **Vite fast refresh** - instant HMR updates during development
- **Optimized build** - ~50KB gzipped

## Troubleshooting

**Port 5173 already in use?**
```bash
pnpm dev -- --port 3000
```

**Clear cache and reinstall:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**TypeScript errors?**
Ensure `src/` folder exists and all component files are TypeScript (`.tsx`).

---

**Happy Holidays! 🎄🎁**
