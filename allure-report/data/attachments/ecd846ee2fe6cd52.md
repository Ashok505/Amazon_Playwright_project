# Test info

- Name: Navigate to Mobiles category and verify
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/navigateToMobileSection.spec.js:4:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('h1 span:has-text("Mobiles & Accessories")')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('h1 span:has-text("Mobiles & Accessories")')

    at /home/ashok/Desktop/amazon-playwright-js/tests/navigateToMobileSection.spec.js:12:75
```

# Test source

```ts
   1 | // tests/navigateToMobileSection.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Navigate to Mobiles category and verify', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('https://www.amazon.in');
   7 |
   8 |   console.log('✅ Clicking on Mobiles link from navbar...');
   9 |   await page.getByRole('link', { name: 'Mobiles' }).click();
  10 |
  11 |   console.log('✅ Verifying Mobile category loaded...');
> 12 |   await expect(page.locator('h1 span:has-text("Mobiles & Accessories")')).toBeVisible();
     |                                                                           ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  13 |
  14 |   console.log('🎯 Mobiles category page opened!');
  15 | });
  16 |
```