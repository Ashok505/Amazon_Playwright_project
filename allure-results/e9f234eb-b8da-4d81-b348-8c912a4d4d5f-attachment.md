# Test info

- Name: Sort search results from Low to High
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/sortLowToHigh.spec.js:4:5

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('span.a-dropdown-label')
    - locator resolved to <span class="a-dropdown-label">Sort by:</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at /home/ashok/Desktop/amazon-playwright-js/tests/sortLowToHigh.spec.js:13:47
```

# Test source

```ts
   1 | // tests/sortLowToHigh.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Sort search results from Low to High', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('https://www.amazon.in');
   7 |
   8 |   console.log('✅ Searching for "smartphones"...');
   9 |   await page.fill('#twotabsearchtextbox', 'smartphones');
  10 |   await page.press('#twotabsearchtextbox', 'Enter');
  11 |
  12 |   console.log('✅ Opening sort dropdown...');
> 13 |   await page.locator('span.a-dropdown-label').click();
     |                                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  14 |
  15 |   console.log('✅ Selecting "Price: Low to High"...');
  16 |   await page.getByRole('option', { name: 'Price: Low to High' }).click();
  17 |
  18 |   console.log('✅ Waiting for sorted results...');
  19 |   await page.waitForLoadState('networkidle');
  20 |
  21 |   console.log('🎯 Results sorted successfully!');
  22 | });
  23 |
```