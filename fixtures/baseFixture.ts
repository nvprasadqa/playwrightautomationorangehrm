import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { PimPage } from '../pages/pimPage';

type MyFixtures = {
  loginPage: LoginPage;
  pimPage: PimPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  }
});

 export { expect } from '@playwright/test';
