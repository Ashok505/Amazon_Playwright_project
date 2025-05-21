# Test info

- Name: Open Gift Cards section
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/openGiftCardSection.spec.js:4:5

# Error details

```
Error: page.waitForSelector: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('h1:has-text("Gift Cards")') to be visible

    at /home/ashok/Desktop/amazon-playwright-js/tests/openGiftCardSection.spec.js:12:14
```

# Test source

```ts
   1 | // tests/openGiftCardsSection.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Open Gift Cards section', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('https://www.amazon.in');
   7 |
   8 |   console.log('✅ Clicking on "Gift Cards" link...');
   9 |   await page.getByRole('link', { name: 'Gift Cards' }).click();
  10 |
  11 |   console.log('✅ Waiting for Gift Cards page...');
> 12 |   await page.waitForSelector('h1:has-text("Gift Cards")');
     |              ^ Error: page.waitForSelector: Test timeout of 60000ms exceeded.
  13 |
  14 |   console.log('✅ Verifying Gift Cards page opened...');
  15 |   const giftHeader = page.locator('h1:has-text("Gift Cards")');
  16 |   await expect(giftHeader).toBeVisible();
  17 |
  18 |   console.log('🎯 Gift Cards section verified!');
  19 | });
  20 |
```