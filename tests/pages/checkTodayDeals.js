// pages/ScrollDealsPage.js

class ScrollDealsPage {
  constructor(page) {
    this.page = page;
    this.todaysDealsLink = page.locator('a:has-text("Today\'s Deals")');
  }

  async gotoHomePage() {
    console.log("Navigating to Amazon homepage...");
    await this.page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
  }

  async openTodaysDeals() {
    console.log("Clicking on Today's Deals...");
    await this.todaysDealsLink.first().click();
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(1000);
  }

  async scrollDownToBottom() {
    console.log("Scrolling down the page...");
    await this.page.evaluate(async () => {
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
  }

  async scrollToTop() {
    console.log("Scrolling back to top...");
    await this.page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

module.exports = { ScrollDealsPage };
