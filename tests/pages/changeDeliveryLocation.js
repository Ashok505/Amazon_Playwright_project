const { test, expect } = require('@playwright/test');

test('Change Delivery Location', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in');

  console.log(' Clicking location...');
  await page.locator('#nav-global-location-popover-link').click();

  console.log(' Filling pincode...');
  await page.fill('input#GLUXZipUpdateInput', '560001');

  console.log(' Clicking Apply...');
  await page.click('input#GLUXZipUpdate');

  console.log(' Waiting for location to refresh...');
  await page.waitForTimeout(3000);

  console.log(' Delivery location updated!');
});
