import { expect, type Page, type Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly adminMenu: Locator;
  readonly dashboardHeading: Locator;
  readonly userDropdown: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
    this.dashboardHeading = page.locator('h6:has-text("Dashboard")');
    this.userDropdown = page.locator('.oxd-userdropdown-tab');
    this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' });
  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index', { waitUntil: 'domcontentloaded' });
  }

  async verifyDashboard() {
    await expect(this.page).toHaveURL(/.*dashboard/, { timeout: 15000 });
    await expect(this.dashboardHeading).toBeVisible();
  }

  async navigateToPIM() {
    await this.pimMenu.click();
    await expect(this.page).toHaveURL(/.*pim/, { timeout: 10000 });
  }

  async navigateToAdmin() {
    await this.adminMenu.click();
    await expect(this.page).toHaveURL(/.*admin/, { timeout: 10000 });
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL(/.*auth\/login/);
  }
}