# Test info

- Name: Download, edit, and upload Excel file
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:1

# Error details

```
Error: locator.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[type="file"]')

    at /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:47:3
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
  15 |   await page.getByRole('button', { name: 'Client' }).click();
  16 |   await page.getByRole('option', { name: 'AAM AADMI PARTY / A2FDL' }).click();
  17 |
  18 |   // Step 2: Download Excel
  19 |   await page.getByRole('img', { name: 'Download master data' }).click();
  20 |   await page.getByText('Download Client MOL Edit Data').click();
  21 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  22 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  23 |
  24 |   const [download] = await Promise.all([
  25 |     page.waitForEvent('download'),
  26 |     page.getByRole('button', { name: 'Download XLSX' }).click()
  27 |   ]);
  28 |
  29 |   const downloadPath = path.join(__dirname, 'downloads', await download.suggestedFilename());
  30 |   await download.saveAs(downloadPath);
  31 |
  32 |
  33 |
  34 |
  35 |   // Step 3: Edit Excel File
  36 |   const workbook = xlsx.readFile(downloadPath);
  37 |   const sheetName = workbook.SheetNames[0];
  38 |   const worksheet = workbook.Sheets[sheetName];
  39 |
  40 |   worksheet['C2'] = worksheet['C2'] || { t: 's', v: '' };
  41 |   worksheet['C2'].v = 'Modified Name';
  42 |
  43 |   const editedFilePath = path.join(__dirname, 'downloads', 'edited_' + path.basename(downloadPath));
  44 |   xlsx.writeFile(workbook, editedFilePath);
  45 |
  46 |   const fileInputt = await page.locator('input[type="file"]'); // update selector if needed
> 47 |   await fileInputt.setInputFiles(editedFilePath);
     |   ^ Error: locator.setInputFiles: Target page, context or browser has been closed
  48 |
  49 |   await page.click('button:has-text("Upload")');
  50 |
  51 |
  52 | });
  53 |
```