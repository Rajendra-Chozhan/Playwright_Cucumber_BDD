// tests/steps/login_steps.js
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

import { HomePage } from '../pages/homepage.js';

const { Given, When, Then, And } = createBdd();

let  homePage; 

When('user scrolls to drag and drop', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.scroll_to_drag_drop_text();
});


When('user performs drag and drop action', async ({ page }) => {
  await homePage.drag_drop();
});
