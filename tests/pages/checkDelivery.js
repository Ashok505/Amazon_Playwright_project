// pages/homePage.js
class checkDelivery {
  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://www.amazon.in';
  }

  async navigate() {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async visitSectionByName(section) {
    console.log(` Visiting section: ${section}`);
    const linkLocator = this.page.locator('a', { hasText: section });
    const count = await linkLocator.count();

    for (let i = 0; i < count; i++) {
      const link = linkLocator.nth(i);
      const isVisible = await link.isVisible();

      if (isVisible) {
        await Promise.all([
          this.page.waitForNavigation({ waitUntil: 'load' }),
          link.click()
        ]);
        await this.page.waitForTimeout(2000); 
        await this.navigate(); 
        return;
      }
    }

    console.warn(` No visible link found for ${section}`);
  }

  async visitAllSections(sections) {
    for (const section of sections) {
      await this.visitSectionByName(section);
    }
  }
}

module.exports = {checkDelivery };
