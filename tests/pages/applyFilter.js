const { test, expect } = require('@playwright/test');

test('Apply Brand Filter in Amazon search results', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in');

  console.log(' Searching for "smartphone"...');
  await page.fill('#twotabsearchtextbox', 'smartphone');
  await page.press('#twotabsearchtextbox', 'Enter');

  console.log(' Waiting for results...');
  await page.waitForSelector('span.a-size-medium');

  console.log(' Applying "Samsung" filter...');
  await page.getByLabel('Samsung').check();

  console.log(' Waiting for filter to apply...');
  await page.waitForTimeout(3000);

  console.log(' Samsung brand filter applied!');
});
