const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  workers : 1,
  retries: 0,
  use: {
    baseURL : 'https://www.amazon.in/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } }
  ],
  reporter: [
    // ['list'], // shows output in console
    ['allure-playwright'] // generates allure results
  ],
  testDir: './tests'
});
