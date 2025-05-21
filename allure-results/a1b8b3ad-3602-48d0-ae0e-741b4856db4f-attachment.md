# Test info

- Name: Download, edit, and upload Excel file
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Download Client MOL Edit Data')

    at /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:17:57
```

# Test source

```ts
   1 | const fs = require('fs');
   2 | const path = require('path');
   3 | const xlsx = require('xlsx');
   4 | const { test, expect } = require('@playwright/test');
   5 |
   6 | test('Download, edit, and upload Excel file', async ({ page }) => {
   7 |   // Step 1: Login
   8 |   await page.goto('https://hcm-consumer-ui-qa.teamlease.com/associateOnboarding?mode=Clients_mode&client_id=AFBCH');
   9 |
  10 |   await page.locator('#username').fill('T10533');
  11 |   await page.getByRole('button', { name: 'Continue' }).click();
  12 |   await page.locator('#password').fill('12345');
  13 |   await page.getByRole('button', { name: 'Login' }).click();
  14 |
  15 |   // Step 2: Download Excel
  16 |   await page.getByRole('img', { name: 'Download master data' }).click();
> 17 |   await page.getByText('Download Client MOL Edit Data').click();
     |                                                         ^ Error: locator.click: Test ended.
  18 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  19 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  20 |
  21 |   const [download] = await Promise.all([
  22 |     page.waitForEvent('download'),
  23 |     page.getByRole('button', { name: 'Download XLSX' }).click()
  24 |   ]);
  25 |
  26 |   const downloadPath = path.join(__dirname, 'downloads', await download.suggestedFilename());
  27 |   await download.saveAs(downloadPath);
  28 |
  29 |
  30 |
  31 |
  32 |   // Step 3: Edit Excel File
  33 |   const workbook = xlsx.readFile(downloadPath);
  34 |   const sheetName = workbook.SheetNames[0];
  35 |   const worksheet = workbook.Sheets[sheetName];
  36 |
  37 |   worksheet['C2'] = worksheet['C2'] || { t: 's', v: '' };
  38 |   worksheet['C2'].v = 'Modified Name';
  39 |
  40 |   const editedFilePath = path.join(__dirname, 'downloads', 'edited_' + path.basename(downloadPath));
  41 |   xlsx.writeFile(workbook, editedFilePath);
  42 |
  43 |   const fileInputt = await page.locator('input[type="file"]'); // update selector if needed
  44 |   await fileInputt.setInputFiles(editedFilePath);
  45 |
  46 |   await page.click('button:has-text("Upload")');
  47 |
  48 |
  49 | });
  50 |
```