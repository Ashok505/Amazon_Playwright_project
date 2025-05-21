import { test, expect } from '@playwright/test';

test('Search for mobile, click on any product, and wait for 3 seconds', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  console.log(' Navigating to Amazon India homepage...');

  await page.fill('input[id="twotabsearchtextbox"]', 'mobile');
  await page.click('input[id="nav-search-submit-button"]');
  console.log(' Searching for "mobile"...');

  await page.waitForSelector('.s-main-slot');
  console.log(' Product results loaded.');

  const firstMobile = await page.locator('.s-main-slot .s-result-item').first();
  await firstMobile.click();
  console.log(' Clicking on the first mobile product...');

  await page.waitForTimeout(3000);
  console.log(' Waited for 3 seconds on the product page.');
});
