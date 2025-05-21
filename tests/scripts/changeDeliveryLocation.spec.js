import { test, expect } from '@playwright/test';

test('Change the delivery location on Amazon', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in');

  console.log(' Clicking on location icon...');
  await page.locator('#nav-global-location-popover-link').click();

  const pincodeInput = page.locator('input#GLUXZipUpdateInput');
  await expect(pincodeInput).toBeVisible({ timeout: 5000 });


  const randomPin = '6000' + Math.floor(10 + Math.random() * 900).toString();
  console.log(` Entering pincode: ${randomPin}`);
  await pincodeInput.fill(randomPin);

  console.log(' Clicking Apply button...');
  await page.getByLabel('Apply').click();


  await page.waitForTimeout(3000);
  console.log(' Delivery location updated successfully!');
});
