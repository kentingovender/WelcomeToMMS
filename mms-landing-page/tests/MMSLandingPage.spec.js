const { test, expect } = require('@playwright/test');

test('Verify Submit Button Presence', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    //Verify the submit button is present
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });

test('Submit Button Enabled Based on textbox Input', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  //Verify the submit button is disabled when no text entered
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();

  //Enter name into textbox
  await page.getByPlaceholder('Enter your name').dblclick();
  await page.getByPlaceholder('Enter your name').fill('John Doe');

  //Verify the submit button is now enabled
  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
});

test('Submit Button Clicked Triggers Popup', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    // Enter name into textbox
    await page.getByPlaceholder('Enter your name').fill('John Doe');

    // Variable to store the dialog message
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
    expect(alertMessage).toBe('Welcome to MMS.');

});

test('Validate Popup Message Content', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    // Enter name into textbox
    await page.getByPlaceholder('Enter your name').fill('John Doe');

    // Variable to store the dialog message
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

    // Verify that the dialog message is correct
    expect(alertMessage).toBe('Welcome to MMS.');
});

test('Verify API returns 200 status code', async ({ request }) => {
    // Define the API endpoint
    const apiUrl = 'http://postman-echo.com./get';

    // Make the API call
    const response = await request.get(apiUrl);

    // Verify that the status code is 200
    expect(response.status()).toBe(200);
});

