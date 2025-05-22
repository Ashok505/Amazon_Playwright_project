import { test } from '@playwright/test';
import { ChangeDeliveryLocation} from '../pages/changeDeliveryLocation';

test('Change the delivery location on Amazon', async ({ page }) => {
  console.log(' Navigating to Amazon homepage...');
 const locationPage = new ChangeDeliveryLocation (page);
 
 await locationPage.goto();
 await locationPage.openLocationPopover();
 
 const randomPin = '6000' + Math.floor(10 + Math.random() *900).toString();
 await locationPage.updatePincode(randomPin);


});

