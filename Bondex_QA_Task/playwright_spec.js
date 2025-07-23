import { test, expect } from '@playwright/test';

test('Google Play button should link to correct Google Play Store page', async ({ page }) => {
  // 1. Go to the Bondex homepage
  await page.goto('https://bondex.app');

  // 2. Scroll to the footer where the "Get the app" section is located
  const googlePlayBtn = page.locator('footer a img[alt="Google Play"]'); // Adjust selector if needed

  // Wait for the button to be visible
  await expect(googlePlayBtn).toBeVisible();

  // 3. Extract the href/link from the parent <a> tag of the image
  const googlePlayLink = await googlePlayBtn.locator('xpath=..').getAttribute('href');

  console.log('Google Play link found:', googlePlayLink);

  // 4. Assert that the link contains 'play.google.com'
  expect(googlePlayLink).toContain('play.google.com');

  // Optional: Navigate to the link to verify the redirection works
  // await page.goto(googlePlayLink);
  // await expect(page).toHaveURL(/play\.google\.com/);
});
