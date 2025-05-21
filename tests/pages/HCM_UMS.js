import { expect } from "@playwright/test"

exports.HCM_UMS =

    class HCM_UMS {
        constructor(page) {
            this.page;

        }
        async checkbox() {
            await this.page.locator('');

        }

        async hcmAdoption() {
            await this.page.locator();

        }

        async courses() {
            await this.page.locator();

        }

        async umsStatus() {
            await this.page.locator();
        }

        async tenthDocStatus() {
            await this.page.locator();

        }

        async twelvethDocStatus() {
            await this.page.locator();

        }

        async kycDocStatus() {
            await this.page.locator();

        }

        async photoStatus() {
            await this.page.locator();

        }

        async abcIDStatus() {
            await this.page.locator();
        }

        async submit () {
            await this.page.locator('//button[text()="submit"]');
        }
    }

