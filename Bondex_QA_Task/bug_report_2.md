## Bug Title: “Google Play” Button Links to Apple App Store

**Environment:**
- Web: https://bondex.app
- Browser: Google Chrome
- OS: Windows 11
- “Google Play” Button Links to Apple App Store

**Steps to Reproduce:**
1. Open Bondex Home Page by using the link: https://bondex.app
![Bondex Home Page]("images/Bondex%20Home%20Page.png")
2. Scroll to the footer in the Home Page
![Bondex Footer]("images/Bondex Footer.png")
3. Under “Get the app” or anywhere in the Bondex WebPage, click on the “Google Play” button
![Google Play Button Selection]("images/Google Play Button Selection.png")

**Expected Result:**
User is redirected to the Google Play Store page for Bondex.

**Actual Result:**
User is redirected to the Apple App Store link instead.

**Notes:**
This issue appears on most instances of the “Google Play” button across the site.  
The only correctly working link is in:
- Home Page → "$BDXN is now LIVE on exchanges!" → "Learn more"
![Learn More Selection]("images/Learn More Selection.png")
- Scrool down a little to "About Bondex" field → select "Download the App" 
![Download the App Selection]("images/Download the App Selection.png")
- Which leads to this a QR code page: https://onelink.to/ddddwr, in that field navigate to "Available Downloads:" which has links to "iPhone", "iPad", "Android"
- Click on the "Android" link
![Android Selection]("images/Android Selection.png")

**Evidence:**
![Wrong Google Play Link]("images/Wrong Google Play Link.png")

**Severity:** Medium  
**Suggested Priority:** P2 – Functional error with marketing impact.
