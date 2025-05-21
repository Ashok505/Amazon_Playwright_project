import { test, expect } from '@playwright/test';

test('Click Today\'s Deals and scroll down and up', async ({ page }) => {
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  const todaysDeals = page.locator('a:has-text("Today\'s Deals")');
  await todaysDeals.first().click();

  await page.waitForLoadState('load'); 

  await page.waitForTimeout(1000);

  await page.evaluate(async () => {
    await new Promise(resolve => {
      const interval = setInterval(() => {
        window.scrollBy(0, 300);
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(3000);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

  await page.waitForTimeout(2000);
});
