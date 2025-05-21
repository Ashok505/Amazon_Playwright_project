import { test } from "@playwright/test"
import { HCM_UMS } from "../pages/HCM_UMS"

test('', async ({ page }) => {

    const ums = new HCM_UMS();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses();
    await ums.umsStatus();
    await ums.tenthDocStatus();
    await ums.twelvethDocStatus();
    await ums.kycDocStatus();
    await ums.photoStatus();
    await ums.abcIDStatus();
    await ums.submit();

    


});

