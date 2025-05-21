// tests/searchProduct.spec.js
import { test, expect } from '@playwright/test';

test('Search for headphones and verify results appear', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
  await page.goto('https://www.amazon.in/');

  console.log('Typing "headphones" in the search bar...');
  await page.locator('#twotabsearchtextbox').fill('headphones');

  console.log(' Submitting the search...');
  await page.locator('#twotabsearchtextbox').press('Enter');

  console.log(' Waiting for results to load...');
  await page.waitForSelector('span.a-size-medium.a-color-base');

  const resultsExist = await page.locator('span.a-size-medium.a-color-base').first().isVisible();
  expect(resultsExist).toBeTruthy();

  console.log(' Search results for headphones are visible!');
});
