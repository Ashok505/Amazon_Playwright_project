# Test info

- Name: Sort search results from Low to High
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/sortLowToHigh.spec.js:4:5

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Price: Low to High' })
    - locator resolved to <option value="price-asc-rank" data-url="/s?k=smartphones&s=price-asc-rank&crid=3AB8B9G0Z4VDA&qid=1745830982&sprefix=smartphones%2Caps%2C2154&ref=sr_st_price-asc-rank&ds=v1%3A5uH%2BuRXRwnsj%2Bi%2FxZIapNDNiR754dh7iD3OratTaEHY">Price: Low to High</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    41 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

    at /home/ashok/Desktop/amazon-playwright-js/tests/sortLowToHigh.spec.js:16:66
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
  13 |   await page.locator('span.a-dropdown-label').click();
  14 |
  15 |   console.log('✅ Selecting "Price: Low to High"...');
> 16 |   await page.getByRole('option', { name: 'Price: Low to High' }).click();
     |                                                                  ^ Error: locator.click: Test timeout of 60000ms exceeded.
  17 |
  18 |   console.log('✅ Waiting for sorted results...');
  19 |   await page.waitForLoadState('networkidle');
  20 |
  21 |   console.log('🎯 Results sorted successfully!');
  22 | });
  23 |
```