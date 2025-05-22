// tests/searchMobile.spec.js
const { test } = require('@playwright/test');
const { MobileSearchPage } = require('../pages/MobileSearchPage');

test('Search for mobile, click on any product, and wait for 3 seconds', async ({ page }) => {
  const mobilePage = new MobileSearchPage(page);

  await mobilePage.gotoHomePage();
  await mobilePage.searchForMobile();
  await mobilePage.waitForResults();
  await mobilePage.clickFirstMobile();
  await mobilePage.waitOnProductPage();
});
