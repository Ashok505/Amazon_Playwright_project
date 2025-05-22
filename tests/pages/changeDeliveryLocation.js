// pages/LocationPage.js
class LocationPage {
  constructor(page) {
    this.page = page;
    this.locationIcon = page.locator('#nav-global-location-popover-link');
    this.pincodeInput = page.locator('input#GLUXZipUpdateInput');
    this.applyButton = page.getByLabel('Apply');
  }

  async goto() {
    console.log('Navigating to Amazon homepage...');
    await this.page.goto('https://www.amazon.in');
  }

  async openLocationPopover() {
    console.log('Clicking on location icon...');
    await this.locationIcon.click();
    await this.pincodeInput.waitFor({ timeout: 5000 });
  }

  async updatePincode(pincode) {
    console.log(`Entering pincode: ${pincode}`);
    await this.pincodeInput.fill(pincode);

    console.log('Clicking Apply button...');
    await this.applyButton.click();

    await this.page.waitForTimeout(3000);
    console.log('Delivery location updated successfully!');
  }
}

module.exports = { LocationPage };
