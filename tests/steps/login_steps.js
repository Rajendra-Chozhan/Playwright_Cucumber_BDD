// tests/steps/login_steps.js
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginpage.js'; // adjust path if needed

const { Given, When, Then } = createBdd();

let loginPage; //  global variable (per worker / scenario run)

Given('user launches the OrangeHRM login page', async ({ page }) => {
  // create the page object only once, store globally
  loginPage = new LoginPage(page);
  await loginPage.launch();
});

When(
  'user enters username {string} and password {string}',
  async ({}, username, password) => {
    // we already have loginPage from the Given step
    await loginPage.login(username, password);
  }
);

When('user clicks the login button', async ({}) => {
  await loginPage.clickLogin();
});

Then('user should be navigated to the dashboard', async ({}) => {
  const dashboard = await loginPage.verifyDashboard();
  await expect(dashboard).toBeVisible();
  await expect(dashboard).toContainText('Logged In Successfully');
});
