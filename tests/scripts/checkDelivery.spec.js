// tests/checkDelivery.spec.js
const { test, expect } = require('@playwright/test');
const { checkDelivery } = require('../pages/checkDelivery');

test('Visit multiple sections on Amazon using POM', async ({ page }) => {
  const home = new checkDelivery(page);

  const sectionsToVisit = ['MX Player', 'Sell', 'Fashion', 'Electronics', 'Amazon Pay'];

  await home.navigate();
  await home.visitAllSections(sectionsToVisit);
});
