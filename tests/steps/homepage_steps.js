// tests/steps/login_steps.js
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

import { HomePage } from '../pages/homepage.js';

const { Given, When, Then, And } = createBdd();

let homePage;

// ---------------- Drag & Drop ----------------

When('user scrolls to drag and drop', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.scroll_to_drag_drop_text();
});

When('user performs drag and drop action', async ({ page }) => {
  await homePage.drag_drop();
});

// ---------------- Tabs Section ----------------

When('user verify appearance of Tabs section', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.verify_Tabs();
});

When('user verify appearance of Popup section', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.verifyPopupElement();
});


// tests/steps/homepage_steps.js
When('user clicks on Popup section and moves to popup window', async ({ page }) => {
  homePage = new HomePage(page);

  const [popup] = await Promise.all([
    page.context().waitForEvent('page'),
    homePage.click_popup_element(), // make sure this triggers page.open
  ]);

  await popup.waitForLoadState('load');       // or 'domcontentloaded' as needed
  await popup.setViewportSize({ width: 1920, height: 1080 });
  await popup.bringToFront();                 // optional: focus the popup

  
  await popup.waitForSelector('//*[@id ="Layer_1"]', { state: 'visible' });
   await popup.click('//*[@id ="Layer_1"]');
});




When('user searches for {string}', async ({ page }, searchTerm) => {
  homePage = new HomePage(page);
  await homePage.enter_search_term(searchTerm);
});

// ---------------- New Tab Handling ----------------

When('user selects search result {string}', async ({ page }, resultKeyword) => {
  // Reuse the existing homePage
  // Ensure the click that opens the new tab is awaited inside Promise.all

  const [newTab] = await Promise.all([
    page.context().waitForEvent('page'),        // must start FIRST
    homePage.clickSearchResult(resultKeyword),  // action that opens a new tab
  ]);

  await newTab.waitForLoadState();
  globalThis.newTab = newTab; // correctly saved for next step
});

Then('user verifies new tab title contains {string}', async ({}, resultKeyword) => {
  if (!globalThis.newTab) {
    throw new Error('newTab is not available; previous step failed to open a new tab');
  }

  const title = await globalThis.newTab.title();
  console.log('NEW TAB TITLE =>', title);

  if (!title.toLowerCase().includes(resultKeyword.toLowerCase())) {
    throw new Error(
      `Expected title to contain "${resultKeyword}" but got "${title}"`
    );
  }
});
