# Test info

- Name: Open Today's Deals and print deal item names
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:3:5

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
    at /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:12:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("Open Today's Deals and print deal item names", async ({ page }) => {
   4 |   await page.goto('https://www.amazon.in');
   5 |
   6 |   // Click on the "Today's Deals" link using partial href
   7 |   const todaysDealsLink = page.locator('a[href*="/deals"]', { hasText: "Deals" }).first();
   8 |   await expect(todaysDealsLink).toBeVisible({ timeout: 10000 });
   9 |   await todaysDealsLink.click();
  10 |
  11 |   // Wait for a heading or title on the Deals page to confirm navigation
> 12 |   await page.waitForLoadState('networkidle');
     |              ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  13 |   await expect(page.locator('h1, h2')).toContainText(['Deals', 'Today'], { timeout: 10000 });
  14 |
  15 |   // Grab all deal item titles using a generic but reliable selector
  16 |   const dealTitles = page.locator('span.a-truncate-full, span.a-text-normal');
  17 |
  18 |   // Wait until at least one is visible
  19 |   await expect(dealTitles.first()).toBeVisible({ timeout: 15000 });
  20 |
  21 |   const count = await dealTitles.count();
  22 |   console.log(`✅ Total deals found: ${count}`);
  23 |
  24 |   for (let i = 0; i < count; i++) {
  25 |     const title = await dealTitles.nth(i).innerText();
  26 |     console.log(`🛍️ Deal ${i + 1}: ${title}`);
  27 |   }
  28 | });
  29 |
```