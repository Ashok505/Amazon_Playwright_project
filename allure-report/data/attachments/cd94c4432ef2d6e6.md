# Test info

- Name: Add a product to the cart
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/addToCart.spec.js:4:5

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.s-main-slot div[data-index="1"] h2 a')

    at /home/ashok/Desktop/amazon-playwright-js/tests/addToCart.spec.js:13:63
```

# Test source

```ts
   1 | // tests/addToCart.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Add a product to the cart', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('https://www.amazon.in');
   7 |
   8 |   console.log('✅ Searching for "mouse"...');
   9 |   await page.fill('#twotabsearchtextbox', 'mouse');
  10 |   await page.press('#twotabsearchtextbox', 'Enter');
  11 |
  12 |   console.log('✅ Clicking first product...');
> 13 |   await page.locator('.s-main-slot div[data-index="1"] h2 a').click();
     |                                                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  14 |
  15 |   console.log('✅ Adding product to cart...');
  16 |   await page.getByRole('button', { name: 'Add to Cart' }).click();
  17 |
  18 |   console.log('✅ Verifying cart success message...');
  19 |   const successMessage = page.locator('#huc-v2-order-row-confirm-text h1');
  20 |   await expect(successMessage).toBeVisible();
  21 |
  22 |   console.log('🎯 Product added to cart successfully!');
  23 | });
  24 |
```