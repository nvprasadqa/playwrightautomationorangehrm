import { test, expect } from '../fixtures/baseFixture';


test('login test @smoke', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertLoginSuccess();
});

test('invalid login test @regression', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('Admin', 'wrongpass');
  await loginPage.assertLoginError();
});