import { Page, Locator, expect } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly searchButton: Locator;
  readonly pimHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.pimHeader = page.getByRole('heading', { name: 'PIM' });
  }

  async gotoEmployeeList() {
    await this.page.goto('/web/index.php/pim/viewEmployeeList');
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.gotoEmployeeList();
    await this.addButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
    await this.page.waitForURL('**/viewPersonalDetails/**');
  }

  async searchEmployee() {
    await this.gotoEmployeeList();
    await this.searchButton.click();
  }

  async assertPimVisible() {
    await expect(this.pimHeader).toBeVisible();
  }
}