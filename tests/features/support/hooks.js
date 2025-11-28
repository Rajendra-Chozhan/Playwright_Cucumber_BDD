import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
});

After(async function () {
  await this.browser.close();
});
