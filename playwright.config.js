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
    { name: 'chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    { name: 'edge',     use: { ...devices['Desktop Edge'], channel: 'msedge' } },
  ],
});
