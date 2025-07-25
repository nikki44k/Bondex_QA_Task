## Bug 2: “Google Play” Button Links to Apple App Store

**Environment:**
- Web: https://bondex.app
- Browser: Google Chrome
- OS: Windows 11
- “Google Play” Button Links to Apple App Store

**Steps to Reproduce:**
1. Open Bondex Home Page by using the link: https://bondex.app
![Bondex Home Page](images/Bondex_Home_Page.png)
2. Scroll to the footer in the Home Page
![Bondex Footer](images/Bondex_Footer.png)
3. Under “Get the app” or anywhere in the Bondex WebPage, click on the “Google Play” button
![Google Play Button Selection](images/Google_Play_Button_Selection.png)
4. After clicking the Google Play button, verify that the Google Play tab for the Bondex app download has opened or not

**Expected Result:**
User should be redirected to the Google Play Store page for Bondex App Install

**Actual Result:**
User is redirected to the Apple App Store link instead

**Evidence:**
![Wrong Google Play Link](images/Wrong_Google_Play_Link.png)

**Notes:**
This issue appears on most instances of the “Google Play” button across the site. 

After careful observation, I found that the only correctly working link is at:
- Home Page → "$BDXN is now LIVE on exchanges!" → "Learn more"
![Learn More Selection](images/Learn_More_Selection.png)
- After selecting "Learn more", scroll down a little to "About Bondex" field → select "Download the App" 
![Download the App Selection](images/Download_the_App_Selection.png)
- Which leads to this a QR code page: https://onelink.to/ddddwr, in that field navigate to "Available Downloads:" which has links to "iPhone", "iPad", "Android"
- Click on the "Android" link
![Android Selection](images/Android_Selection.png)
- Now, user should be able to see the correct page - Google Play page to download the Bondex App
![Correct Google Play Link](images/Correct_Google_Play_Link.png)

**Severity:** Medium  
**Suggested Priority:** P2 – Functional error with marketing impact.
