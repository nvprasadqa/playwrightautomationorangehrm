import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,
  timeout: 60 * 1000,
  fullyParallel: false,
  reporter: [['html'], ['list']],
  use: {
     headless:false,
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'setup',
      testDir: '.',
      testMatch: 'auth.setup.ts',
      // use:{...devices['Desktop Firefox']}
    },
    {
      name: 'login-tests',
      testDir: './tests',
      testMatch: 'login.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Chrome',
      testDir: './tests',
      // testMatch: /pim\.spec\.ts|network\.spec\.ts/,
      testIgnore: 'login.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
         storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    }
  ]
});