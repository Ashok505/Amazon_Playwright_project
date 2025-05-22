// tests/searchProduct.spec.js
import { test, expect } from '@playwright/test';
import { applyFilter } from "../pages/applyFilter"

test('Search for headphones and verify results appear', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');

  const searchPage = new applyFilter(page);

  await searchPage.goto();
  await searchPage.searchForProduct();

  const resultExist = await searchPage.isResultVisible();
  expect (resultExist).toBeTruthy();

  console.log('search results for the headphones are available');
  



});
