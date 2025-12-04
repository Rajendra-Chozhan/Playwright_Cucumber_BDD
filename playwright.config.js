// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: ['./tests/features/*.feature'],
  steps: ['./tests/steps/**/*.js'],
});

export default defineConfig({
  testDir,

  fullyParallel: true,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    headless: false,
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: null,                     // maximize the viewport
        // remove deviceScaleFactor — it conflicts with viewport: null
        launchOptions: {
          args: ['--start-maximized'],     // opens the window maximized on OS level
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],       // keep device profile for WebKit
        // note: Desktop Safari device has fixed viewport & deviceScaleFactor
      },
    },
    {
      name: 'edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});
