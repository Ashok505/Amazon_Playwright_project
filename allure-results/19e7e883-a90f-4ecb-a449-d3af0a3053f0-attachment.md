# Test info

- Name: Change the delivery location on Amazon
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/changeDeliveryLocation.spec.js:3:5

# Error details

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('input#GLUXZipUpdate')

    at /home/ashok/Desktop/amazon-playwright-js/tests/changeDeliveryLocation.spec.js:19:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Change the delivery location on Amazon', async ({ page }) => {
   4 |   console.log('✅ Navigating to Amazon homepage...');
   5 |   await page.goto('https://www.amazon.in');
   6 |
   7 |   console.log('✅ Clicking on location icon...');
   8 |   await page.locator('#nav-global-location-popover-link').click();
   9 |
  10 |   const pincodeInput = page.locator('input#GLUXZipUpdateInput');
  11 |   await expect(pincodeInput).toBeVisible({ timeout: 5000 });
  12 |
  13 |   // Generate a dynamic Bangalore pincode
  14 |   const randomPin = '600' + Math.floor(10 + Math.random() * 900).toString();
  15 |   console.log(`✅ Entering pincode: ${randomPin}`);
  16 |   await pincodeInput.fill(randomPin);
  17 |
  18 |   console.log('✅ Clicking Apply button...');
> 19 |   await page.click('input#GLUXZipUpdate');
     |              ^ Error: page.click: Test ended.
  20 |
  21 |   // Wait for location update (optional: can add assertion here)
  22 |   await page.waitForTimeout(3000);
  23 |   console.log('🎯 Delivery location updated successfully!');
  24 | });
  25 |
```