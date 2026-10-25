import { test } from '../fixtures/baseFixture';

test('PIM API intercept test @integration @regression', async ({ page, pimPage }) => {
  await page.route('**/api/v2/pim/employees**', async route => {
    await route.continue();
  });
  await pimPage.gotoEmployeeList();
  await pimPage.assertPimVisible();
});