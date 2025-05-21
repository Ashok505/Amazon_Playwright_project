# Test info

- Name: Download, edit, and upload Excel file from TeamLease
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('option', { name: 'AGS CINEMAS PRIVATE LIMITED -' })

    at /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:17:77
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import xlsx from 'xlsx';
   3 | import fs from 'fs';
   4 | import path from 'path';
   5 |
   6 | test('Download, edit, and upload Excel file from TeamLease', async ({ page }) => {
   7 |   // Step 1: Go to login and login
   8 |   await page.goto('https://hcm-auth-uat.teamlease.com:3035/realms/hiretech/protocol/openid-connect/auth?client_id=alcs-saas&redirect_uri=https%3A%2F%2Fhcm-consumer-ui-qa.teamlease.com%2FassociateOnboarding%3Fmode%3DClients_mode%26client_id%3DAFBCH&state=4909cbbc-078c-4f45-bd5a-ddc6eb96cea4&response_mode=fragment&response_type=code&scope=openid&nonce=e000dc69-a252-47d5-9611-b88f2351c8e2&code_challenge=CDGLIIUJTLNQe__AyGkn4sZARtTm_ijlxpK12psDw20&code_challenge_method=S256');
   9 |   await page.locator('#username').fill('T10533');
  10 |   await page.getByRole('button', { name: 'Continue' }).click();
  11 |   await page.locator('#password').fill('12345');
  12 |   await page.getByRole('button', { name: 'Login' }).click();
  13 |
  14 |   // Step 2: Navigate and trigger download
  15 |   await page.getByRole('button', { name: 'Client' }).click();
  16 |   await page.getByRole('textbox', { name: 'Search Client / ID' }).fill('afbch');
> 17 |   await page.getByRole('option', { name: 'AGS CINEMAS PRIVATE LIMITED -' }).click();
     |                                                                             ^ Error: locator.click: Target page, context or browser has been closed
  18 |   await page.getByRole('img', { name: 'Download master data' }).click();
  19 |   await page.getByText('Download Client MOL Edit Data').click();
  20 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  21 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  22 |
  23 |   // Step 3: Handle download
  24 |   const [download] = await Promise.all([
  25 |     page.waitForEvent('download'),
  26 |     page.getByRole('button', { name: 'Download XLSX' }).click()
  27 |   ]);
  28 |   const downloadsDir = path.resolve(__dirname, '../downloads');
  29 |   fs.mkdirSync(downloadsDir, { recursive: true });
  30 |
  31 |   const originalFilePath = path.join(downloadsDir, await download.suggestedFilename());
  32 |   await download.saveAs(originalFilePath);
  33 |
  34 |   // Step 4: Modify Excel (C2 cell)
  35 |   const workbook = xlsx.readFile(originalFilePath);
  36 |   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  37 |   worksheet['C2'] = { t: 's', v: 'Updated Name from Automation' };
  38 |
  39 |   const editedFilePath = path.join(downloadsDir, 'edited_file.xlsx');
  40 |   xlsx.writeFile(workbook, editedFilePath);
  41 |
  42 |   // Step 5: Upload edited file
  43 |   await page.getByRole('img', { name: 'Bulk Upload' }).click();
  44 |   await page.getByText('Client MOL Edit Data').click();
  45 |
  46 |   const fileInput = await page.locator('input[type="file"]');
  47 |   await fileInput.setInputFiles(editedFilePath);
  48 |
  49 |   await page.getByTestId('upload-button').click();
  50 |
  51 |   // Optional: Verify upload success
  52 |   await expect(page.getByText('Upload successful')).toBeVisible();
  53 | });
  54 |
```