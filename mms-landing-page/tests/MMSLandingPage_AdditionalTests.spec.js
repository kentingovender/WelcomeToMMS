const { test, expect } = require('@playwright/test');

let browser;

test.beforeEach(async ({page, browser: provideBrowser}) => {
    await page.goto('https://kentingovender.github.io/WelcomeToMMS/browser/');
    browser = provideBrowser;
});

test.afterAll(async () => {
    console.log('Closing browser...');
    await browser.close(); // Close the browser explicitly
});

test('Submit Button Disabled After Input Clear', async ({ page }) => {

     //Enter name into textbox
    await page.getByPlaceholder('Enter your name').dblclick();
    await page.getByPlaceholder('Enter your name').fill('John Doe');

    //Verify Submit button Enabled
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();

    //Clear the input field
    await page.getByPlaceholder('Enter your name').clear();

    //Verify Submit button Enabled
    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

test('Textbox cleared after popup closed', async ({ page }) => {

  //Enter invalid characters into textbox
  await page.getByPlaceholder('Enter your name').dblclick();
  await page.getByPlaceholder('Enter your name').fill('John Doe');

  let alertMessage = '';

  // Setting up a listener for the dialog
  page.on('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept(); 
  });

  // Clicking the button to trigger the alert
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for the dialog to appear
  await page.waitForTimeout(500);

  // Verify that the popup message is displayed
  expect(alertMessage).toBeTruthy();
  //verify the textbox has been cleared.
  await expect(page.getByPlaceholder('Enter your name')).toBeEmpty();
});
