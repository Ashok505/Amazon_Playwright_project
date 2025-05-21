# Test info

- Name: Download, edit C2 and E2, upload, and clean up Excel file
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Client' })

    at /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:19:54
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import xlsx from 'xlsx';
   3 | import fs from 'fs';
   4 | import path from 'path';
   5 |
   6 | test('Download, edit C2 and E2, upload, and clean up Excel file', async ({ page }) => {
   7 |     const downloadsDir = '/home/ashok/downloads';
   8 |
   9 |   if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir);
  10 |
  11 |   // Step 1: Login
  12 |   await page.goto('https://hcm-consumer-ui-qa.teamlease.com/associateOnboarding?mode=Clients_mode&client_id=AFBCH');
  13 |   await page.locator('#username').fill('T10533');
  14 |   await page.getByRole('button', { name: 'Continue' }).click();
  15 |   await page.locator('#password').fill('12345');
  16 |   await page.getByRole('button', { name: 'Login' }).click();
  17 |
  18 |   // Step 2: Trigger download
> 19 |   await page.getByRole('button', { name: 'Client' }).click();
     |                                                      ^ Error: locator.click: Test ended.
  20 |   await page.getByRole('textbox', { name: 'Search Client / ID' }).fill('A2FDL');
  21 |   await page.getByRole('option', { name: 'AAM AADMI PARTY' }).click();
  22 |   await page.getByRole('img', { name: 'Download master data' }).click();
  23 |   await page.getByText('Download Client MOL Edit Data').click();
  24 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  25 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  26 |
  27 |   const [download] = await Promise.all([
  28 |     page.waitForEvent('download'),
  29 |     page.getByRole('button', { name: 'Download XLSX' }).click()
  30 |   ]);
  31 |
  32 |   await page.waitForTimeout(6000);
  33 |
  34 |   const originalFileName = await download.suggestedFilename();
  35 |   const downloadedFilePath = path.join(downloadsDir, originalFileName);
  36 |   await download.saveAs(downloadedFilePath);
  37 |
  38 |   // Step 3: Edit C2 and E2 in the Excel file
  39 |   const workbook = xlsx.readFile(downloadedFilePath);
  40 |   const sheet = workbook.Sheets[workbook.SheetNames[0]];
  41 |
  42 |   // Change C2 to new name
  43 |   sheet['C2'] = { t: 's', v: 'New Name Automated' };
  44 |
  45 |   // Change E2 from 'N' to 'Y'
  46 |   if (sheet['E2'] && sheet['E2'].v === 'N') {
  47 |     sheet['E2'].v = 'Y';
  48 |   } else {
  49 |     sheet['E2'] = { t: 's', v: 'Y' }; // fallback if cell is missing
  50 |   }
  51 |
  52 |   const editedFilePath = path.join(downloadsDir, 'edited_file.xlsx');
  53 |   xlsx.writeFile(workbook, editedFilePath);
  54 |
  55 |   // Step 4: Upload the edited file
  56 |   await page.getByRole('img', { name: 'Bulk Upload' }).click();
  57 |   await page.getByText('Client MOL Edit Data').click();
  58 |   const fileInput = await page.locator('input[type="file"]');
  59 |   await fileInput.setInputFiles(editedFilePath);await page.waitForTimeout(5000);
  60 |   await page.getByTestId('upload-button').click();
  61 |
  62 |   await page.waitForTimeout(5000);
  63 |
  64 |   // Step 5: Clean up the files
  65 |   fs.unlinkSync(downloadedFilePath);
  66 |   fs.unlinkSync(editedFilePath);
  67 | });
  68 |
```