# Test info

- Name: Download, edit, and upload Excel file from TeamLease
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:5

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "download"
============================================================
    at /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:28:10
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import * as fs from 'fs';
   3 | import * as path from 'path';
   4 | import * as xlsx from 'xlsx';
   5 |
   6 | test('Download, edit, and upload Excel file from TeamLease', async ({ page, context }) => {
   7 |   const downloadPath = '/home/ashok/downloads'; // real Downloads folder
   8 |
   9 |   // Step 1: Login and navigate
  10 |   await page.goto('https://hcm-consumer-ui-qa.teamlease.com/associateOnboarding?mode=Clients_mode&client_id=AFBCH');
  11 |   await page.locator('#username').fill('T10533');
  12 |   await page.getByRole('button', { name: 'Continue' }).click();
  13 |   await page.locator('#password').fill('12345');
  14 |   await page.getByRole('button', { name: 'Login' }).click();
  15 |
  16 |   // Step 2: Navigate to download section and initiate download
  17 |   // await page.locator('//button//span[text()="Select Client"]').click();
  18 |   // await page.getByRole('button', { name: 'Client' }).click();
  19 |   // await page.getByRole('textbox', { name: 'Search Client / ID' }).fill('afbch');
  20 |   // await page.getByRole('option', { name: 'AGS CINEMAS PRIVATE LIMITED -' }).click();
  21 |   await page.getByRole('img', { name: 'Download master data' }).click();
  22 |   await page.getByText('Download Client MOL Edit Data').click();
  23 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  24 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  25 |
  26 |   // Capture the download
  27 |   const download = await Promise.all([
> 28 |     page.waitForEvent('download'),
     |          ^ Error: page.waitForEvent: Test ended.
  29 |     page.getByRole('button', { name: 'Download XLSX' }).click(),
  30 |   ]).then(([download]) => download);
  31 |
  32 |   // Save the downloaded file to /home/ashok/downloads with known name
  33 |   const downloadedFilePath = path.join(downloadPath, download.suggestedFilename());
  34 |   await download.saveAs(downloadedFilePath);
  35 |
  36 |   // Step 3: Edit the Excel file (change C2 and E2)
  37 |   const workbook = xlsx.readFile(downloadedFilePath);
  38 |   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  39 |
  40 |   // Modify cells
  41 |   worksheet['C2'].v = 'New Name';
  42 |   worksheet['E2'].v = 'Y';
  43 |
  44 |   // Save it (overwrite same file or use new one)
  45 |   xlsx.writeFile(workbook, downloadedFilePath); // save back to same path
  46 |
  47 |   // Step 4: Upload the edited file
  48 |   await page.getByRole('img', { name: 'Bulk Upload' }).click();
  49 |   await page.getByText('Client MOL Edit Data').click();
  50 |   const fileUploadDialog = await page.getByRole('dialog', { name: 'Client MOL Edit Upload' });
  51 |   await fileUploadDialog.setInputFiles(downloadedFilePath);
  52 |   await page.getByTestId('upload-button').click();
  53 |
  54 |   // Step 5: Clean up file (optional)
  55 |   fs.unlinkSync(downloadedFilePath); // delete the file after upload
  56 | });
  57 |
```