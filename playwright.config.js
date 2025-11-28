// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// BDD generator only needs features + steps path
const testDir = defineBddConfig({
  features: ['./tests/features/*.feature'],
  steps: ['./tests/steps/**/*.js'],
});

export default defineConfig({
  testDir,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    headless: false, // Optional: Forces headed by default (can still override CLI)
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit', // Safari engine
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge', // Closest supported browser to legacy IE behavior
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
  ],
});
