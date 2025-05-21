const { test, expect } = require('@playwright/test');

test('Navigate to Mobiles category and verify', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in');

  console.log(' Clicking on Mobiles...');
  await page.getByRole('link', { name: 'Mobiles' }).click();

  console.log('Waiting for Mobiles section...');
  await expect(page.locator('h1 span:has-text("Mobiles & Accessories")')).toBeVisible();

  console.log('Mobiles category verified!');
});
