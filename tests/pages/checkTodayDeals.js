const { test, expect } = require('@playwright/test');

test('Open Today\'s Deals and verify deals are listed', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in');

  console.log(' Clicking on Today\'s Deals...');
  await page.getByRole('link', { name: "Today's Deals" }).click();

  console.log(' Waiting for deals...');
  await page.waitForSelector('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW');

  const dealItems = await page.locator('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW').count();
  expect(dealItems).toBeGreaterThan(0);

  console.log(' Today\'s deals verified!');
});
