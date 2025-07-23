Feature: Wallet Connection

  Scenario: User connects wallet via Google
    Given I am logged into my Bondex account
    When I navigate to Account Settings and select the Wallet tab
    And I click "Connect Wallet"
    And I choose "Continue with Google" and authenticate
    Then my wallet should appear as connected in the webpage

Feature: Google Play Button Link

  Scenario: "Get it on Google Play" button redirects to Apple Store instead of Google Play
    Given I am on the Bondex homepage
    When I scroll to the footer and click the "Google Play" button
    Then I should be redirected to the Google Play Store (not Apple App Store)

Feature: Correct Play Store Link via Learn More

  Scenario: Verify Android app download from correct link
    Given I am on the Bondex homepage
    When I click "Learn More" under $BDXN section
    And I scroll down and select "Download the App" In About Bondex field
    Leads me to QR code page and click "Android" in Available Downloads
    Then I should be redirected to the correct Google Play Bondex app page
