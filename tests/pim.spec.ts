 import { test, expect } from '../fixtures/baseFixture';

test('Add Employee @smoke', async ({ pimPage, page }) => {
  const firstName = 'John' + Date.now();
  await pimPage.addEmployee(firstName, 'Doe');
  await expect(page.getByText(firstName)).toBeVisible();
});

test('Search Employee @regression', async ({ pimPage }) => {
  await pimPage.searchEmployee();
  await pimPage.assertPimVisible();
});