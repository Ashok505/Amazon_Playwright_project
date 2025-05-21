# Test info

- Name: Download, edit, and upload Excel file
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/downloadEditUpload.spec.js:6:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
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
   8 |   await page.goto('https://hcm-auth-uat.teamlease.com:3035/realms/hiretech/protocol/openid-connect/auth?client_id=alcs-saas&redirect_uri=https%3A%2F%2Fhcm-consumer-ui-qa.teamlease.com%2FassociateOnboarding%3Fmode%3DClients_mode%26corp_id%3D%26client_id%3DAFBCH&state=b39e315b-c4a6-4e98-bcc5-8caf99a54ea7&response_mode=fragment&response_type=code&scope=openid&nonce=4c745e17-68dc-4009-a86b-83797d8240af&code_challenge=p31IQ7PMJmepprHNTO0UWjDEw3wY9NQ0jrxX1dGM8hc&code_challenge_method=S256');
   9 |
  10 |   await page.locator('#username').fill('T10533');
  11 |   await page.getByRole('button', { name: 'Continue' }).click();
  12 |   await page.locator('#password').fill('12345');
  13 |   await page.getByRole('button', { name: 'Login' }).click();
  14 |
  15 |   // Step 2: Download Excel
  16 |   await page.getByRole('img', { name: 'Download master data' }).click();
> 17 |   await page.getByText('Download Client MOL Edit Data').click();
     |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  18 |   await page.getByRole('checkbox', { name: 'Name as Aadhar' }).check();
  19 |   await page.getByRole('checkbox', { name: 'Aadhar No' }).check();
  20 |
  21 |   const [download] = await Promise.all([
  22 |     page.waitForEvent('download'),
  23 |     page.getByRole('button', { name: 'Download XLSX' }).click()
  24 |   ]);
  25 |
  26 |   const downloadPath = await download.path();
  27 |   const editedFilePath = path.join(__dirname, '../downloads');
  28 |
  29 |   // Step 3: Edit Excel File
  30 |   const workbook = xlsx.readFile(downloadPath);
  31 |   const sheetName = workbook.SheetNames[1];
  32 |   const worksheet = workbook.Sheets[sheetName];
  33 |
  34 |   // Example: Modify A1
  35 |   worksheet['A2'].v = 'Updated Value';
  36 |
  37 |   xlsx.writeFile(workbook, editedFilePath);
  38 |
  39 |   // Step 4: Upload the edited file
  40 |   await page.getByText('Client MOL Edit Data').click();
  41 |   
  42 |   // Wait for the input[type="file"] element to appear inside the dialog
  43 |   const fileInput = page.locator('input[type="file"]');
  44 |   await fileInput.setInputFiles(editedFilePath);
  45 |
  46 |   await page.getByTestId('upload-button').click();
  47 |
  48 |   // Step 5: Assert upload success (optional)
  49 | //   await expect(page.getByText('Upload successful')).toBeVisible(); // Adjust as needed
  50 | });
  51 |
```