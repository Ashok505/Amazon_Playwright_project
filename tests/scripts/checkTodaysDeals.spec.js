// tests/scrollDeals.spec.js
const { test } = require('@playwright/test');
const { ScrollDealsPage } = require('../pages/ScrollDealsPage');

test('Click Today\'s Deals and scroll down and up', async ({ page }) => {
  const scrollPage = new ScrollDealsPage(page);

  await scrollPage.gotoHomePage();
  await scrollPage.openTodaysDeals();
  await scrollPage.scrollDownToBottom();
  await page.waitForTimeout(3000);
  await scrollPage.scrollToTop();
  await page.waitForTimeout(2000);
});
