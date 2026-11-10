import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 3,
  timeout: 60 * 1000,
  fullyParallel: true,
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
    },
    // {
    //   name: 'login-tests',
    //   testDir: './tests',
    //   testMatch: 'login.spec.ts',
    //   use: { ...devices['Desktop Chrome'] }
    // },
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
    },
     {
      name: 'firefox',
      testDir: './tests',
      // testMatch: /pim\.spec\.ts|network\.spec\.ts/,
      testIgnore: 'login.spec.ts',
      use: {
        ...devices['Desktop Firefox'],
         storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    },
     {
      name: 'Webkit',
      testDir: './tests',
      // testMatch: /pim\.spec\.ts|network\.spec\.ts/,
      testIgnore: 'login.spec.ts',
      use: {
        ...devices['Desktop Webkit'],
         storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    }

  ]
});