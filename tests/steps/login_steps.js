// tests/steps/login_steps.js
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginpage.js';
import testConfig from '../../configurations/testconfig.js';

const { Given, When, Then, And } = createBdd();

let loginPage;

Given('user launches the Automation Practise login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.launch();
});

Given('user launches the Test Automation Practise login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.launch_test_automation_site();
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

When('user scrolls to static webtable', async ({}) => {
  await loginPage.scroll_to_static_table();
});

Then('user verify the appearance of static webtable', async ({}) => {
  await loginPage.verify_static_table();
});

Then('user get all the rows and columns of static webtable', async ({}) => {
  await loginPage.get_static_table_data()
});


When('user scrolls to dynamic webtable', async ({}) => {
  await loginPage.scroll_to_dynamic_table();
});


Then('user verify the appearance of dynamic webtable', async ({}) => {
  await loginPage.verify_dynamic_table();
});

Then('user get all the rows and columns of dynamic webtable', async ({}) => {
  await loginPage.get_dynamic_table_data()
   await loginPage.getHighestAndLowest()
});



