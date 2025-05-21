# Test info

- Name: Open Today's Deals and verify deals are listed
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:4:5

# Error details

```
Error: page.waitForSelector: Test ended.
Call log:
  - waiting for locator('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW') to be visible

    at /home/ashok/Desktop/amazon-playwright-js/tests/checkTodaysDeals.spec.js:12:14
```

# Test source

```ts
   1 | // tests/checkTodaysDeals.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Open Today\'s Deals and verify deals are listed', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('/');
   7 |
   8 |   console.log('✅ Clicking on "Today\'s Deals" link...');
   9 |   await page.getByRole('link', { name: "Today's Deals" }).click();
  10 |
  11 |   console.log('✅ Waiting for deals to load...');
> 12 |   await page.waitForSelector('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW');
     |              ^ Error: page.waitForSelector: Test ended.
  13 |
  14 |   console.log('✅ Verifying at least one deal is visible...');
  15 |   const dealItems = await page.locator('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW').count();
  16 |   expect(dealItems).toBeGreaterThan(0);
  17 |
  18 |   console.log('🎯 Today\'s Deals page verified!');
  19 | });
  20 |
```