# Test info

- Name: Navigate to Amazon Help and explore Kindle Help topic
- Location: /home/ashok/Desktop/amazon-playwright-js/tests/checkDelivery.spec.js:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: 'Fashion' }) resolved to 2 elements:
    1) <a tabindex="0" class="nav-a  " data-csa-c-type="link" data-csa-c-slot-id="nav_cs_7" data-csa-c-content-id="nav_cs_fashion" href="/gp/browse.html?node=6648217031&ref_=nav_cs_fashion">Fashion</a> aka getByRole('link', { name: 'Fashion', exact: true })
    2) <a class="nav_a" href="https://www.shopbop.com/">…</a> aka getByRole('link', { name: 'Shopbop Designer Fashion' })

Call log:
  - waiting for locator('a').filter({ hasText: 'Fashion' })

    at checkDelivery.clickCategory (/home/ashok/Desktop/amazon-playwright-js/pages/checkDelivery.js:18:24)
    at /home/ashok/Desktop/amazon-playwright-js/tests/checkDelivery.spec.js:9:14
```

# Page snapshot

```yaml
- button "Shortcuts menu"
- banner:
  - navigation "Primary":
    - link "Amazon.in":
      - /url: /ref=nav_logo
      - text: .in
    - button "Delivering to Bengaluru 562130 Update location"
    - search:
      - text: All
      - combobox "Select the department you want to search in":
        - option "All Categories" [selected]
        - option "Alexa Skills"
        - option "Amazon Devices"
        - option "Amazon Fashion"
        - option "Amazon Fresh"
        - option "Amazon Pharmacy"
        - option "Appliances"
        - option "Apps & Games"
        - option "Audible Audiobooks"
        - option "Baby"
        - option "Beauty"
        - option "Books"
        - option "Car & Motorbike"
        - option "Clothing & Accessories"
        - option "Collectibles"
        - option "Computers & Accessories"
        - option "Deals"
        - option "Electronics"
        - option "Furniture"
        - option "Garden & Outdoors"
        - option "Gift Cards"
        - option "Grocery & Gourmet Foods"
        - option "Health & Personal Care"
        - option "Home & Kitchen"
        - option "Industrial & Scientific"
        - option "Jewellery"
        - option "Kindle Store"
        - option "Luggage & Bags"
        - option "Luxury Beauty"
        - option "Movies & TV Shows"
        - option "MP3 Music"
        - option "Music"
        - option "Musical Instruments"
        - option "Office Products"
        - option "Pet Supplies"
        - option "Prime Video"
        - option "Shoes & Handbags"
        - option "Software"
        - option "Sports, Fitness & Outdoors"
        - option "Subscribe & Save"
        - option "Tools & Home Improvement"
        - option "Toys & Games"
        - option "Under ₹500"
        - option "Video Games"
        - option "Watches"
      - searchbox "Search Amazon.in"
      - button "Go"
    - link "Choose a language for shopping in Amazon India. The current selection is English (EN).":
      - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
      - img "India"
      - text: EN
    - button "Expand to Change Language or Country"
    - link "Hello, sign in Account & Lists":
      - /url: https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3FnodeId%3D200507590%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
    - button "Expand Account and Lists"
    - link "Returns & Orders":
      - /url: /gp/css/order-history?ref_=nav_orders_first
    - link "0 items in cart":
      - /url: /gp/cart/view.html?ref_=nav_cart
    - button "Open All Categories Menu": All
    - list:
      - listitem:
        - link "Fresh":
          - /url: /fresh?ref_=nav_cs_fresh
      - listitem:
        - link "MX Player":
          - /url: /minitv?ref_=nav_avod_desktop_topnav
      - listitem:
        - link "Sell":
          - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
      - listitem:
        - link "Bestsellers":
          - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
      - listitem:
        - link "Today's Deals":
          - /url: /deals?ref_=nav_cs_gb
      - listitem:
        - link "Mobiles":
          - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
      - listitem:
        - link "Customer Service":
          - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
      - listitem:
        - link "Fashion":
          - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
      - listitem:
        - link "Prime":
          - /url: /prime?ref_=nav_cs_primelink_nonmember
        - button "Prime Details"
      - listitem:
        - link "New Releases":
          - /url: /gp/new-releases/?ref_=nav_cs_newreleases
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
      - listitem:
        - link "Amazon Pay":
          - /url: /gp/sva/dashboard?ref_=nav_cs_apay
      - listitem:
        - link "Home & Kitchen":
          - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
      - listitem:
        - link "Car & Motorbike":
          - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
      - listitem:
        - link "Computers":
          - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
      - listitem:
        - link "Books":
          - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
      - listitem:
        - link "Toys & Games":
          - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
      - listitem:
        - link "Beauty & Personal Care":
          - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
      - listitem:
        - link "Home Improvement":
          - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
      - listitem:
        - link "Gift Cards":
          - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
      - listitem:
        - link "Sports, Fitness & Outdoors":
          - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
      - listitem:
        - link "Health, Household & Personal Care":
          - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
      - listitem:
        - link "Grocery & Gourmet Foods":
          - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
      - listitem:
        - link "Baby":
          - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
      - listitem:
        - link "Custom Products":
          - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
      - listitem:
        - link "Video Games":
          - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
      - listitem:
        - link "Pet Supplies":
          - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
      - listitem:
        - link "Gift Ideas":
          - /url: /gcx/-/gfhz/?ref_=nav_cs_giftfinder
      - listitem:
        - link "AmazonBasics":
          - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
      - listitem:
        - link "Audible":
          - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
      - listitem:
        - link "Subscribe & Save":
          - /url: /auto-deliveries/landing?ref_=nav_cs_sns
    - dialog
- list:
  - listitem:
    - text: You can view the content of this page in your preferred language, by clicking
    - link "here":
      - /url: https://www.amazon.in/customer-preferences/edit?ref_=icp_cs_lop_help
    - text: . For detailed steps on how to change your language settings, see our
    - link "Help":
      - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=GARKQZZYZ542RGWK
    - text: page.
  - listitem:
    - text: For information on our live sale events, including promotions, deals, cashbacks, and quick solutions, refer to our Help page on
    - link "Sale Events":
      - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=TTOLfLWVy6YRkUJc35
    - text: .
- heading "Hello. What can we help you with?" [level=1]
- heading "Some things you can do here" [level=2]
- link "Your Orders Your Orders Track packages Edit or cancel orders":
  - /url: /gp/css/order-history?ref_=hp_ss_v3_yo_t4
  - img "Your Orders"
  - heading "Your Orders" [level=3]
  - list:
    - listitem: Track packages
    - listitem: Edit or cancel orders
- link "Returns and Refunds Returns and Refunds Return or exchange items Print return mailing labels":
  - /url: /gp/css/order-history?ref_=hp_ss_v3_rr_t4
  - img "Returns and Refunds"
  - heading "Returns and Refunds" [level=3]
  - list:
    - listitem: Return or exchange items
    - listitem: Print return mailing labels
- link "Manage Addresses Manage Addresses Update your addresses Add address, landmark details":
  - /url: /gp/css/account/address/view.html?ref_=hp_ss_v3_ma_t4
  - img "Manage Addresses"
  - heading "Manage Addresses" [level=3]
  - list:
    - listitem: Update your addresses
    - listitem: Add address, landmark details
- link "Manage Prime Manage Prime View your benefits Membership details":
  - /url: /gp/primecentral?ref_=hp_ss_v3_mp_t4
  - img "Manage Prime"
  - heading "Manage Prime" [level=3]
  - list:
    - listitem: View your benefits
    - listitem: Membership details
- link "Payment Settings Payment Settings Add or edit payment methods Change expired debit or credit card":
  - /url: /cpe/managepaymentmethods?ref_=hp_ss_v3_ps_t4
  - img "Payment Settings"
  - heading "Payment Settings" [level=3]
  - list:
    - listitem: Add or edit payment methods
    - listitem: Change expired debit or credit card
- link "Account Settings Account Settings Change your email or password Update login information":
  - /url: /ap/cnep?ref_=hp_ss_v3_as_t4&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.in/gp/css/homepage.html?ie=UTF8&ref_=ya_cnep&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.assoc_handle=inflex&openid.ns.pape=http://specs.openid.net/extensions/pape/1.0&openid.mode=checkid_setup&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.ns=http://specs.openid.net/auth/2.0
  - img "Account Settings"
  - heading "Account Settings" [level=3]
  - list:
    - listitem: Change your email or password
    - listitem: Update login information
- link "Digital Services and Device Support Digital Services and Device Support Find device help and support Troubleshoot device issues":
  - /url: /gp/help/customer/display.html?nodeId=200127470&ref_=hp_ss_v3_ds_t4
  - img "Digital Services and Device Support"
  - heading "Digital Services and Device Support" [level=3]
  - list:
    - listitem: Find device help and support
    - listitem: Troubleshoot device issues
- paragraph: Find more solutions Type something like, "question about a charge"
- searchbox "Find more solutions Type something like, \"question about a charge\""
- article "Browse Help Topics":
  - heading "Browse Help Topics" [level=1]
  - list:
    - listitem: Recommended Topics
    - listitem: Shipping & Delivery
    - listitem: Amazon Prime
    - listitem: Payments & Pricing
    - listitem: Amazon Pay
    - listitem: Product Troubleshooting
    - listitem: Amazon Bazaar
    - listitem: Returns, Refunds, Replacement
    - listitem: Ordering
    - listitem: Managing Your Account
    - listitem: Devices & Digital Services (D2S)
    - listitem: More Help (D2S)
    - listitem: Amazon Business
    - listitem: Other Topics & More Help
    - listitem: Self Service
  - list:
    - listitem:
      - heading "Learn how to..." [level=3]
    - listitem:
      - link "Tracking your Package":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=GENAFPTNLHV7ZACW
    - listitem:
      - link "Checking the Status of your Refund":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=GMP8PC8KBY5FCPM2
    - listitem:
      - link "Return Pick-up Issues":
        - /url: https://www.amazon.in/gp/help/customer/display.html?&nodeId=TAgXDdtqErF6Zz6HnQ
    - listitem:
      - link "Returns and Replacements - FAQ":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=G202115040
    - listitem:
      - link "Shipping Speeds & Charges":
        - /url: https://www.amazon.in/gp/help/customer/display.html?&nodeId=GRK3YG3G4Y3R4LWJ
    - listitem:
      - link "Damaged and Defective Products - FAQ":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=GQHC9JYSMPRP39RH
    - listitem:
      - link "Late Shipments":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=G3H9BPFKAXSW553X
    - listitem:
      - link "Cancelling an Item or Order":
        - /url: https://www.amazon.in/gp/help/customer/display.html?&nodeId=GSL37WQTJZUYA9QE
    - listitem:
      - link "Amazon Bazaar":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=Tce0idTha1BLJw7Kos
      - text: (available on Android Amazon shopping app only)
    - listitem:
      - link "Product Troubleshooting - FAQs":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=TFXmcncLOqCGOBSNdr
    - listitem:
      - link "Self-service video library":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=G2QJYUE6Q9FH5JKL
    - listitem:
      - link "Need more help":
        - /url: https://www.amazon.in/gp/help/customer/display.html?nodeId=TDNIJ2mNNgh0GhH99a
  - list:
    - listitem:
      - heading "Try it Yourself" [level=3]
    - listitem:
      - link "Track your order":
        - /url: https://www.amazon.in/gp/css/order-history/ref=hp_gt_rt_wmo
    - listitem:
      - link "Check the Status of your Refund":
        - /url: https://www.amazon.in/gp/css/order-history/ref=hp_gt_rt_wmo
    - listitem:
      - link "Change Your Language Preference":
        - /url: https://www.amazon.in/customer-preferences/edit?ref_=icp_cs_lop_help
    - listitem:
      - link "Manage Your Returns":
        - /url: https://www.amazon.in/gp/css/returns/homepage.html/ref=hp_gt_rt_ret
    - listitem:
      - link "Sign Up for Amazon Prime":
        - /url: https://www.amazon.in/amazonprime
    - listitem:
      - link "Using Amazon Pay balance":
        - /url: https://www.amazon.in/l/11962108031?ref=hp_gt_rt_apay_t_uapb_dk
    - listitem:
      - link "View Amazon Pay Transactions":
        - /url: https://www.amazon.in/gp/payment/statement?ref=hp_gt_rt_apay_t_vs_dk
    - listitem:
      - link "Manage Your Payment Methods":
        - /url: https://www.amazon.in/gp/css/account/cards/view.html/ref=hp_gt_rt_ss_comp_mpo
- button "Back to top"
- heading "Get to Know Us" [level=6]
- list:
  - listitem:
    - link "About Amazon":
      - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Careers":
      - /url: https://amazon.jobs
  - listitem:
    - link "Press Releases":
      - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Amazon Science":
      - /url: https://www.amazon.science
- heading "Connect with Us" [level=6]
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6
  - listitem:
    - link "Twitter":
      - /url: https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6
  - listitem:
    - link "Instagram":
      - /url: https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards
- heading "Make Money with Us" [level=6]
- list:
  - listitem:
    - link "Sell on Amazon":
      - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
  - listitem:
    - link "Sell under Amazon Accelerator":
      - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
  - listitem:
    - link "Protect and Build Your Brand":
      - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
  - listitem:
    - link "Amazon Global Selling":
      - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
  - listitem:
    - link "Supply to Amazon":
      - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
  - listitem:
    - link "Become an Affiliate":
      - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
  - listitem:
    - link "Fulfilment by Amazon":
      - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
  - listitem:
    - link "Advertise Your Products":
      - /url: https://advertising.amazon.in/?ref=Amz.in
  - listitem:
    - link "Amazon Pay on Merchants":
      - /url: https://www.amazonpay.in/merchant
- heading "Let Us Help You" [level=6]
- list:
  - listitem:
    - link "Your Account":
      - /url: /gp/css/homepage.html?ref_=footer_ya
  - listitem:
    - link "Returns Centre":
      - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
  - listitem:
    - link "Recalls and Product Safety Alerts":
      - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
  - listitem:
    - link "100% Purchase Protection":
      - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
  - listitem:
    - link "Amazon App Download":
      - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
  - listitem:
    - link "Help":
      - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
- link "Amazon India Home":
  - /url: /ref=footer_logo
- link "Choose a language for shopping. Current selection is English.":
  - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3FnodeId%3D200507590%26ref_%3Dfooter_gw_m_b_he&ref_=footer_lang
  - text: English
  - button "Expand to Change Language or Country"
- button "Choose a country/region for shopping. The current selection is India.": India
- list:
  - listitem:
    - link "AbeBooks Books, art & collectibles":
      - /url: https://www.abebooks.com/
      - heading "AbeBooks" [level=5]
      - text: Books, art & collectibles
  - listitem:
    - link "Amazon Web Services Scalable Cloud Computing Services":
      - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
      - heading "Amazon Web Services" [level=5]
      - text: Scalable Cloud Computing Services
  - listitem:
    - link "Audible Download Audio Books":
      - /url: https://www.audible.in/
      - heading "Audible" [level=5]
      - text: Download Audio Books
  - listitem:
    - link "IMDb Movies, TV & Celebrities":
      - /url: https://www.imdb.com/
      - heading "IMDb" [level=5]
      - text: Movies, TV & Celebrities
- list:
  - listitem:
    - link "Shopbop Designer Fashion Brands":
      - /url: https://www.shopbop.com/
      - heading "Shopbop" [level=5]
      - text: Designer Fashion Brands
  - listitem:
    - link "Amazon Business Everything For Your Business":
      - /url: /business?ref=footer_aingw
      - heading "Amazon Business" [level=5]
      - text: Everything For Your Business
  - listitem:
    - link "Prime Now 2-Hour Delivery on Everyday Items":
      - /url: /now?ref=footer_amznow
      - heading "Prime Now" [level=5]
      - text: 2-Hour Delivery on Everyday Items
  - listitem:
    - link "Amazon Prime Music 100 million songs, ad-free Over 15 million podcast episodes":
      - /url: /music/prime?ref=footer_apm
      - heading "Amazon Prime Music" [level=5]
      - text: 100 million songs, ad-free Over 15 million podcast episodes
- list:
  - listitem:
    - link "Conditions of Use & Sale":
      - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
  - listitem:
    - link "Privacy Notice":
      - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
  - listitem:
    - link "Interest-Based Ads":
      - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
- text: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
   1 | export class checkDelivery {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |   }
   5 |
   6 |   async goToAmazonHome() {
   7 |     await this.page.goto('https://www.amazon.in');
   8 |   }
   9 |
  10 |   async scrollAndClickHelp() {
  11 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  12 |     const helpLink = this.page.locator('a[href*="/gp/help/customer/display.html"]').filter({ hasText: 'Help' });
  13 |     await helpLink.first().click();
  14 |   }
  15 |
  16 |   async clickCategory() {
  17 |     const categoryLink = this.page.locator('a', { hasText: 'Fashion' });
> 18 |     await categoryLink.click();
     |                        ^ Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: 'Fashion' }) resolved to 2 elements:
  19 |   }
  20 |
  21 |   async clickHelpTopic() {
  22 |     const topicLink = this.page.locator('a', { hasText: 'Kindle E-Reader Help' });
  23 |     await topicLink.click();
  24 |   }
  25 | }
  26 |
```