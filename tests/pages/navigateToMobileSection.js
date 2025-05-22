// pages/MobileSearchPage.js

class MobileSearchPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[id="twotabsearchtextbox"]');
    this.searchButton = page.locator('input[id="nav-search-submit-button"]');
    this.resultsContainer = page.locator('.s-main-slot');
    this.firstResult = page.locator('.s-main-slot .s-result-item').first();
  }

  async gotoHomePage() {
    console.log('Navigating to Amazon India homepage...');
    await this.page.goto('https://www.amazon.in');
  }

  async searchForMobile() {
    console.log('Searching for "mobile"...');
    await this.searchBox.fill('mobile');
    await this.searchButton.click();
  }

  async waitForResults() {
    console.log('Waiting for product results...');
    await this.resultsContainer.waitFor();
  }

  async clickFirstMobile() {
    console.log('Clicking on the first mobile product...');
    await this.firstResult.click();
  }

  async waitOnProductPage() {
    console.log('Waiting for 3 seconds on the product page...');
    await this.page.waitForTimeout(3000);
  }
}

module.exports = { MobileSearchPage };
