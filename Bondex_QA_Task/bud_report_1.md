## Bug Title: Wallet Connection via Google Does Not Complete

**Environment:**
- Web: https://bondex.app
- Browser: Google Chrome
- OS: Windows 11
- Wallet Connection Method Failure

**Steps to Reproduce:**
1. Sign in to your account using the link: https://bondex.app/auth/login 
2. Click your profile icon which is top right of the page
![Account Settings Navigation](images/Account_Settings_Navigation.png)
3. Select “Account Settings” from the activated dropdown.
![Account Settings Selection](images/Account_Settings_Selection.png)
3. Navigate to the “Wallet” tab by selecting it
![Wallet Tab Selection](images/Wallet_Tab_Selection.png)
4. Click on the button “Connect Wallet”
![Connect Wallet Button Selection](images/Connect_Wallet_Button_Selection.png)
5. A dialog box should appear, in that select “Continue with Google” as choice to connect wallet
![Connect with Google Button Selection](images/Connect_with_Google_Button_Selection.png)
6. A new tab opens showing Google account options
7. Select an account and confirm.
![Google Account Selection](images/Google_Account_Selection.png)
8. A message appears: _“Authentication successful. Go back to the application, don't close the tab”_
![Authentication Successful](images/Authentication_Successful.png)
9. Return to the original Bondex tab and observe the activity happens

**Expected Result:**
Wallet should show as connected (e.g., wallet address or connected state displayed).

**Actual Result:**
App spins briefly, then returns to the original “Connect Wallet” state with no indication of a successful connection.

**Evidence:**
Loading...
![Loading Captured](images/Loading_Captured.png)
Return to the Original State
![No Connection Made](images/No_Connection_Made.png)

**Severity:** High  
**Suggested Priority:** P1 – Critical user journey is broken.
