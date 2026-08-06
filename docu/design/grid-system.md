# Grid Layout Documentation

This document serves as a single source of truth for designers and developers, defining the structural rules, breakpoints, and usage guidelines.

## 📐 Project Grid System Specification

### 1. Core Principles

This project utilizes a **12-column flexible grid system** based on the mobile-first methodology. The grid ensures visual harmony and consistent alignment across all breakpoints.

- **Total Columns**: 1
- **Base Unit**: 8px (for spacing and gutters)
- **Max Width**: 1440px (centered)
- **Alignment**: Content aligns to column edges; gutters provide breathing room.

### 2. Breakpoints & Container Widths

The grid adapts to five standard viewport tiers. Columns are fluid within these containers.

| Breakpoint  | Prefix   | Min Width | Container Max Width | Columns     |
| :---------- | :------- | :-------- | :------------------ | :---------- |
| **Mobile**  | _(none)_ | 0px       | 100%                | 4 (stacked) |
| **Tablet**  | `sm`     | 640px     | 100%                | 8           |
| **Laptop**  | `md`     | 768px     | 720px               | 12          |
| **Desktop** | `lg`     | 1024px    | 960px               | 12          |
| **Wide**    | `xl`     | 1280px    | 1200px              | 12          |

### 3. Gutters & Margins

Gutters (the space between columns) and Margins (the space outside the grid) are defined in pixels and rems.

- **Mobile Gutters**: `16px` (1rem)
- **Desktop Gutters**: `24px` (1.5rem)
- **Page Margins**: `20px` (Mobile) scaling to `auto` (centered on Desktop).

### 4. Implementation Examples

#### A. HTML Structure (Standard Row)

A standard row creates a flex container. Columns must sum to 12 per row to avoid wrapping unless intentional.

```html
<!-- 3 Equal Columns on Desktop -->
<div class="row">
  <div class="col-md-4">Content A</div>
  <div class="col-md-4">Content B</div>
  <div class="col-md-4">Content C</div>
</div>
```

#### B. Responsive Behavior (Stacking)

Columns automatically stack on mobile unless a specific mobile class (e.g., `col-6`) is applied.

```html
<!-- Stacks on Mobile, 50/50 on Tablet, 33/33/33 on Desktop -->
<div class="row">
  <div class="col-12 col-sm-6 col-md-4">Item 1</div>
  <div class="col-12 col-sm-6 col-md-4">Item 2</div>
  <div class="col-12 col-sm-6 col-md-4">Item 3</div>
</div>
```

#### C. CSS Grid Definition (Internal System)

If using native CSS Grid instead of a framework, the root definition looks like this:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem; /* Matches Desktop Gutter */
  max-width: 1200px;
  margin: 0 auto;
}

/* Utility class for spanning 8 columns */
.span-8 {
  grid-column: span 8;
}
```

### 5. Do's and Don'ts

- **DO** use the predefined breakpoints rather than creating custom media queries.
- **DO** nest grids carefully (a column can contain another row).
- **DON'T** hardcode widths (e.g., `width: 300px`); always use grid classes (e.g., `col-md-4`).
- **DON'T** exceed 12 units in a single row unless intentional wrapping is desired.

### 6. Visual Diagram

_<!-- (Insert link to Figma/Sketch file or an ASCII representation here)_  -->

```text
| Margin | Col 1 | G | Col 2 | G | ... | Col 12 | Margin |
|--------|-------|---|-------|---|-----|--------|--------|
<------------------- Container (e.g., 1200px) ----------------->
```

**Yes**, Playwright allows you to dynamically resize the browser viewport to verify if your grid layout adheres to defined rules across different breakpoints.

### 1. Resizing the Viewport

You can shrink or expand the screen mid-test using `page.setViewportSize()`. This triggers CSS media queries, allowing you to test responsive behavior without restarting the browser.

```typescript
import { test, expect } from '@playwright/test';

test('verify grid layout at mobile breakpoint', async ({ page }) => {
  await page.goto('https://example.com');

  // Shrink screen to Mobile width (e.g., 375px)
  await page.setViewportSize({ width: 375, height: 667 });

  // Verify grid behavior: e.g., columns should stack
  const gridContainer = page.locator('.grid-container');
  await expect(gridContainer).toHaveCSS('grid-template-columns', '1fr'); // Single column expected

  // Verify element visibility rules
  await expect(page.locator('.desktop-only-nav')).toBeHidden();
  await expect(page.locator('.mobile-menu-btn')).toBeVisible();
});
```

### 2. Automated Breakpoint Loop

To systematically test your documented grid rules (e.g., from your `grid-system.md`), you can loop through your defined breakpoints:

```typescript
const breakpoints = [
  { name: 'mobile-small', width: 360, height: 640 }, // Covers small Androids
  { name: 'mobile-large', width: 430, height: 932 }, // Covers iPhone Pro Max
  { name: 'tablet', width: 768, height: 1024 }, // Standard iPad
  { name: 'laptop', width: 1440, height: 900 }, // Standard Laptop
  { name: 'desktop-wide', width: 1920, height: 1080 }, // Full HD Monitor
];

for (const bp of breakpoints) {
  await test.step(`Check layout at ${bp.name}`, async () => {
    await page.setViewportSize({ width: bp.width, height: bp.height });

    // Capture visual regression screenshot for this breakpoint
    await expect(page).toHaveScreenshot(`grid-layout-${bp.name}.png`);

    // Optional: Assert specific grid column counts
    const columns = await page.locator('.grid-column').count();
    // Add logic to verify column count matches your design rules
  });
}
```

### 3. Visual Regression Testing

For grid layouts, **visual regression testing** is often more effective than checking individual CSS properties. Playwright's `toHaveScreenshot()` automatically detects if elements have shifted, overlapped, or broken the grid structure when the screen shrinks.

- **Masking**: Use the `mask` option to ignore dynamic content (like ads or timestamps) that might cause false positives in grid alignment checks.
- **Thresholds**: Adjust `maxDiffPixelRatio` to allow for minor sub-pixel rendering differences while catching significant layout breaks.

```typescript
// Ignore specific changing elements without loosening global rules
await expect(page).toHaveScreenshot('dashboard.png', {
  mask: [page.locator('.last-updated-time'), page.locator('.user-avatar')],
});
```
