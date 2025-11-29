// tests/steps/login_steps.js
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginpage.js';
import testConfig from '../../configurations/testconfig.js';
const { Given, When, Then } = createBdd();

let loginPage;

Given('user launches the Automation Practise login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.launch();
});

When('user enters username {string} and password {string}', async ({}, username, password) => {
  await loginPage.login(username, password);
});

When('user enters username {string} and password {string} via examples', async ({}, username, password) => {
  await loginPage.login(username, password);
});

When('user clicks the login button', async ({}) => {
  await loginPage.clickLogin();
});

Then('user should be navigated to the dashboard', async ({}) => {
  const dashboard = await loginPage.verifyDashboard();
  await expect(dashboard).toBeVisible();
  await expect(dashboard).toContainText('Logged In Successfully');
});

When('user enters config credentials', async ({}) => {
  await loginPage.login(testConfig.username, testConfig.password);
});
