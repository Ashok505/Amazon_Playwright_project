# Test info

- Name: Open Today's Deals and print all deal item names
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:3:5

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('link', { name: 'Today\'s Deals' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByRole('link', { name: 'Today\'s Deals' })

    at /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:14:27
```

# Page snapshot

```yaml
- dialog "Choose your location":
  - banner:
    - heading "Choose your location" [level=4]
    - button "Close"
  - text: Select a delivery location to see product availability and delivery options
  - button "Sign in to see your addresses"
  - heading "or enter an Indian pincode" [level=5]
  - textbox "or enter an Indian pincode"
  - button "Apply":
    - button "Apply"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test("Open Today's Deals and print all deal item names", async ({ page }) => {
   4 |   await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
   5 |
   6 |   // 🛑 Close location popup if it appears
   7 |   const locationModal = page.locator('#nav-global-location-popover-link');
   8 |   if (await locationModal.isVisible({ timeout: 3000 })) {
   9 |     await locationModal.click();
  10 |   }
  11 |
  12 |   // ✅ Click on "Today's Deals" link
  13 |   const dealsLink = page.getByRole('link', { name: "Today's Deals" });
> 14 |   await expect(dealsLink).toBeVisible({ timeout: 10000 });
     |                           ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  15 |   await dealsLink.click();
  16 |
  17 |   // ✅ Wait for visible deal item (more generic fallback selector)
  18 |   const dealItem = page.locator('div.a-section.a-spacing-none .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW');
  19 |   await expect(dealItem.first()).toBeVisible({ timeout: 15000 });
  20 |
  21 |   const count = await dealItem.count();
  22 |   console.log(`🛍️ Total deals found: ${count}`);
  23 |
  24 |   for (let i = 0; i < count; i++) {
  25 |     const name = await dealItem.nth(i).innerText();
  26 |     console.log(`🔹 Deal ${i + 1}: ${name}`);
  27 |   }
  28 | });
  29 |
```