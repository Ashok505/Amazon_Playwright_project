# Test info

- Name: Apply brand filter and verify the results
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/applyFilter.spec.js:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('span.a-size-base.a-color-base:has-text("HP")') resolved to 3 elements:
    1) <span class="a-size-base a-color-base s-line-clamp-2">↵                                                …</span> aka getByRole('link', { name: 'laptops hp' })
    2) <span class="a-size-base a-color-base s-line-clamp-2">↵                                                …</span> aka getByRole('link', { name: 'hp laptops' })
    3) <span class="a-size-base a-color-base">HP</span> aka getByRole('link', { name: 'Apply the filter HP to narrow' })

Call log:
  - waiting for locator('span.a-size-base.a-color-base:has-text("HP")')

    at /home/ashok/Desktop/amazon-playwright-js/tests/applyFilter.spec.js:16:70
```

# Test source

```ts
   1 | // tests/applyFilter.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Apply brand filter and verify the results', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('https://www.amazon.in');
   7 |
   8 |   console.log('✅ Searching for "laptops"...');
   9 |   await page.fill('#twotabsearchtextbox', 'laptops');
  10 |   await page.press('#twotabsearchtextbox', 'Enter');
  11 |
  12 |   console.log('✅ Waiting for filters...');
  13 |   await page.waitForSelector('span.a-size-base.a-color-base');
  14 |
  15 |   console.log('✅ Clicking on HP brand filter...');
> 16 |   await page.locator('span.a-size-base.a-color-base:has-text("HP")').click();
     |                                                                      ^ Error: locator.click: Error: strict mode violation: locator('span.a-size-base.a-color-base:has-text("HP")') resolved to 3 elements:
  17 |
  18 |   console.log('✅ Waiting for results update...');
  19 |   await page.waitForLoadState('networkidle');
  20 |
  21 |   const filterApplied = await page.locator('span.a-size-base.a-color-base:has-text("HP")').isVisible();
  22 |   expect(filterApplied).toBeTruthy();
  23 |
  24 |   console.log('🎯 Filter applied and verified!');
  25 | });
  26 |
```