# Test info

- Name: Navigate to Mobiles category and verify
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/navigateToMobileSection.spec.js:4:5

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Mobiles' })
    - locator resolved to <a class="a-link-normal _cropped-image-link_style_centerImage__1rzYI aok-block image-window" href="/b/?_encoding=UTF8&node=1389401031&pd_rd_w=doioM&content-id=amzn1.sym.332d6cd3-6172-4516-af2e-2702d2087e1c&pf_rd_p=332d6cd3-6172-4516-af2e-2702d2087e1c&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=shciG&pd_rd_r=6df2683c-dc57-49b2-805f-d7aabd944515">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-order-ws="3" data-order-sm="3" id="desktop-grid-3" data-pd_rd_w="UitX0" data-pd_rd_wg="Og1b7" data-ref_="pd_gw_unk" data-display-at="smws" data-csa-c-type="widget" data-csa-op-log-render="" data-cel-widget="desktop-grid-3" data-csa-c-slot-id="desktop-grid-3" data-csa-c-id="melyek-pbcguq-bmi22-urmfmd" data-csa-c-painter="fluid-fat-image-link-v2" data-pf_rd_p="f5268ea3-26a1-4af3-b54d-91535345b76c" data-pd_rd_r="acc71930-c50b-4e34-af2f-8d3d2ac771bf" data-csa-c-content-id="amzn1.sym.f5268ea3-…>…</div> from <div id="gw-layout" class="a-section a-spacing-none aok-relative">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-order-ws="3" data-order-sm="3" id="desktop-grid-3" data-pd_rd_w="UitX0" data-pd_rd_wg="Og1b7" data-ref_="pd_gw_unk" data-display-at="smws" data-csa-c-type="widget" data-csa-op-log-render="" data-cel-widget="desktop-grid-3" data-csa-c-slot-id="desktop-grid-3" data-csa-c-id="melyek-pbcguq-bmi22-urmfmd" data-csa-c-painter="fluid-fat-image-link-v2" data-pf_rd_p="f5268ea3-26a1-4af3-b54d-91535345b76c" data-pd_rd_r="acc71930-c50b-4e34-af2f-8d3d2ac771bf" data-csa-c-content-id="amzn1.sym.f5268ea3-…>…</div> from <div id="gw-layout" class="a-section a-spacing-none aok-relative">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    113 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div data-order-ws="3" data-order-sm="3" id="desktop-grid-3" data-pd_rd_w="UitX0" data-pd_rd_wg="Og1b7" data-ref_="pd_gw_unk" data-display-at="smws" data-csa-c-type="widget" data-csa-op-log-render="" data-cel-widget="desktop-grid-3" data-csa-c-slot-id="desktop-grid-3" data-csa-c-id="melyek-pbcguq-bmi22-urmfmd" data-csa-c-painter="fluid-fat-image-link-v2" data-pf_rd_p="f5268ea3-26a1-4af3-b54d-91535345b76c" data-pd_rd_r="acc71930-c50b-4e34-af2f-8d3d2ac771bf" data-csa-c-content-id="amzn1.sym.f5268ea3-…>…</div> from <div id="gw-layout" class="a-section a-spacing-none aok-relative">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

    at /home/ashok/Desktop/amazon-playwright-js/tests/navigateToMobileSection.spec.js:9:53
```

# Page snapshot

```yaml
- link "Amazon":
  - /url: /ref=nav_bb_logo
- search:
  - textbox "Search For"
  - button "Go"
- link "Your Account":
  - /url: /gp/css/homepage.html/ref=nav_bb_ya
- link "Help":
  - /url: /gp/help/customer/display.html/ref=nav_bb_help
- link "Cart":
  - /url: /gp/cart/view.html/ref=nav_bb_cart
- main:
  - list:
    - listitem:
      - link "Mobiles":
        - /url: /b/?_encoding=UTF8&node=1389401031&pd_rd_w=doioM&content-id=amzn1.sym.332d6cd3-6172-4516-af2e-2702d2087e1c&pf_rd_p=332d6cd3-6172-4516-af2e-2702d2087e1c&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=shciG&pd_rd_r=6df2683c-dc57-49b2-805f-d7aabd944515
        - img "Mobiles"
  - heading "New looks for the new season" [level=2]
  - link "New looks for the new season Shop fashion":
    - /url: /b/?_encoding=UTF8&node=6648217031&pd_rd_w=xv1PD&content-id=amzn1.sym.43137b1c-9be7-4bb2-8e44-4eb62a10acab&pf_rd_p=43137b1c-9be7-4bb2-8e44-4eb62a10acab&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf&ref_=pd_gw_unk
    - img "New looks for the new season"
    - text: Shop fashion
  - heading "Do up your home" [level=2]
  - link "Do up your home See more":
    - /url: /b/?_encoding=UTF8&node=976442031&pd_rd_w=YGHXv&content-id=amzn1.sym.a5c44ec7-a410-4e5d-bd7e-5628454e5b72&pf_rd_p=a5c44ec7-a410-4e5d-bd7e-5628454e5b72&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf&ref_=pd_gw_unk
    - img "Do up your home"
    - text: See more
  - heading "Smart gadgets by Amazon" [level=2]
  - link "Devices Shop now":
    - /url: /s/?_encoding=UTF8&hidden-keywords=B0792KTHKK%7CB0725W7Q38%7CB0794JD9JS%7CB01J6A7FGQ%7CB0793HNP9Z%7CB0791YHVMK%7CB079QQZZJK%7CB07FRJTZ4T%7CB077454Z99%7CB06XDBNSCP%7CB07C9L72VC&ref=nb_sb_noss&pd_rd_w=UitX0&content-id=amzn1.sym.f5268ea3-26a1-4af3-b54d-91535345b76c&pf_rd_p=f5268ea3-26a1-4af3-b54d-91535345b76c&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf&ref_=pd_gw_unk
    - img "Devices"
    - text: Shop now
  - heading "Up to 30% off | Smartphones to suit your budget" [level=2]
  - link "budget":
    - /url: /s/?_encoding=UTF8&i=electronics&bbn=1389401031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_36%3A1318505031&ref_=tile1_jup_budgetphone_xiaomi&pd_rd_w=bEl2Y&content-id=amzn1.sym.02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_p=02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf
    - img "budget"
    - text: Budget | Below ₹10,000
  - link "mid":
    - /url: /s/?_encoding=UTF8&i=electronics&bbn=1389432031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cn%3A1805560031%2Cp_36%3A1000000-2500000&ref_=tile2_jup_Budgetphone_redmi&pd_rd_w=bEl2Y&content-id=amzn1.sym.02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_p=02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf
    - img "mid"
    - text: Mid-range | ₹10,000 - ₹25,000
  - link "premium":
    - /url: /s/?_encoding=UTF8&i=electronics&bbn=1389432031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cn%3A1805560031%2Cp_36%3A2500000-4000000&ref_=tile3_jup_budgetphone_iphoneF&pd_rd_w=bEl2Y&content-id=amzn1.sym.02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_p=02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf
    - img "premium"
    - text: Premium | ₹25,000 - ₹40,000
  - link "ultra premium":
    - /url: /s/?_encoding=UTF8&i=electronics&bbn=1389432031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cn%3A1805560031%2Cp_36%3A4000000-&ref_=tile1_jup_budgephone_oneplus&pd_rd_w=bEl2Y&content-id=amzn1.sym.02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_p=02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf
    - img "ultra premium"
    - text: Ultra Premium | Above ₹40,000
  - link "See all":
    - /url: /b/?_encoding=UTF8&node=1389401031&pd_rd_w=bEl2Y&content-id=amzn1.sym.02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_p=02658ac8-c8fb-4f2f-8b7a-6ec066fe8522&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=Og1b7&pd_rd_r=acc71930-c50b-4e34-af2f-8d3d2ac771bf&ref_=pd_gw_unk
  - heading "Value bazaar" [level=2]
  - link "Value bazaar, for your daily essentials Shop daily essentials":
    - /url: /b/?_encoding=UTF8&node=6802110031&pd_rd_w=Qqum8&content-id=amzn1.sym.580c29f8-587f-47f2-99a2-9e81bbbd3de1&pf_rd_p=580c29f8-587f-47f2-99a2-9e81bbbd3de1&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Value bazaar, for your daily essentials"
    - text: Shop daily essentials
  - heading "Work from home essentials" [level=2]
  - link "Routers":
    - /url: /b/?_encoding=UTF8&node=1375427031&pd_rd_w=zICip&content-id=amzn1.sym.5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_p=5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Routers"
    - text: Routers
  - link "Laptops":
    - /url: /b/?_encoding=UTF8&node=1375424031&pd_rd_w=zICip&content-id=amzn1.sym.5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_p=5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Laptops"
    - text: Laptops
  - link "Keyboards, mice & more":
    - /url: /b/?_encoding=UTF8&node=1375248031&pd_rd_w=zICip&content-id=amzn1.sym.5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_p=5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Keyboards, mice & more"
    - text: Keyboards, mice & more
  - link "Headphones":
    - /url: /b/?_encoding=UTF8&ie=UTF8&node=1388921031&pd_rd_w=zICip&content-id=amzn1.sym.5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_p=5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Headphones"
    - text: Headphones
  - link "See more":
    - /url: /b/?_encoding=UTF8&node=20982412031&pd_rd_w=zICip&content-id=amzn1.sym.5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_p=5e64825e-9adf-44ea-9cf1-1fd280972588&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
  - heading "Revamp your home in style" [level=2]
  - link "Bedsheets, curtains & more":
    - /url: /b/?_encoding=UTF8&node=1380442031&pd_rd_w=it1BB&content-id=amzn1.sym.7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_p=7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Bedsheets, curtains & more"
    - text: Bedsheets, curtains & more
  - link "Home decoration":
    - /url: /b/?_encoding=UTF8&node=1380374031&pd_rd_w=it1BB&content-id=amzn1.sym.7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_p=7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Home decoration"
    - text: Home decoration
  - link "Home storage":
    - /url: /b/?_encoding=UTF8&node=1380510031&pd_rd_w=it1BB&content-id=amzn1.sym.7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_p=7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Home storage"
    - text: Home storage
  - link "Lighting solutions":
    - /url: /b/?_encoding=UTF8&node=1380485031&pd_rd_w=it1BB&content-id=amzn1.sym.7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_p=7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Lighting solutions"
    - text: Lighting solutions
  - link "Explore all":
    - /url: /b/?_encoding=UTF8&node=12414705031&pd_rd_w=it1BB&content-id=amzn1.sym.7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_p=7be475bb-e91c-4d7d-b01a-2705d402f382&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
  - heading "Innovations from Emerging Indian Brands" [level=2]
  - link "Innovations from Emerging Indian Brands Explore more startups":
    - /url: /b/?_encoding=UTF8&node=10894223031&ref=INALGW&pd_rd_w=BtZBm&content-id=amzn1.sym.ddca436f-69f3-4c7e-8939-558a5786f5f4&pf_rd_p=ddca436f-69f3-4c7e-8939-558a5786f5f4&pf_rd_r=6DKPEPK478G6BPKGK03X&pd_rd_wg=e9aGk&pd_rd_r=00c8aca8-a232-471d-9fb5-8e83f97e38e1&ref_=pd_gw_unk
    - img "Innovations from Emerging Indian Brands"
    - text: Explore more startups
- contentinfo:
  - link "Amazon":
    - /url: /ref=nav_bb_footer_logo
    - img "Amazon"
  - list:
    - listitem:
      - link "Conditions of Use & Sale":
        - /url: /gp/help/customer/display.html?ie=UTF8&nodeId=200545940&ref_=footer_cou
    - listitem:
      - link "Privacy Notice":
        - /url: /gp/help/customer/display.html?ie=UTF8&nodeId=200534380&ref_=footer_privacy
    - listitem:
      - link "Interest-Based Ads":
        - /url: /gp/help/customer/display.html?ie=UTF8&nodeId=202075050&ref_=footer_iba
    - listitem: © 1996-2024, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
   1 | // tests/navigateToMobileSection.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('Navigate to Mobiles category and verify', async ({ page }) => {
   5 |   console.log('✅ Navigating to Amazon homepage...');
   6 |   await page.goto('/');
   7 |
   8 |   console.log('✅ Clicking on Mobiles link from navbar...');
>  9 |   await page.getByRole('link', { name: 'Mobiles' }).click();
     |                                                     ^ Error: locator.click: Test timeout of 60000ms exceeded.
  10 |
  11 |   console.log('✅ Verifying Mobile category loaded...');
  12 |   await expect(page.locator('h1 span:has-text("Mobiles & Accessories")')).toBeVisible();
  13 |
  14 |   console.log('🎯 Mobiles category page opened!');
  15 | });
  16 |
```