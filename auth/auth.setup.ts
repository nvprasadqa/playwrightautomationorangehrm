import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

setup('login and save auth', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});