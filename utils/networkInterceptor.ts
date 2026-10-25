import { Page } from '@playwright/test';

export class NetworkInterceptor {
  // API mocking
  static async mockPIMEmployees(page: Page) {
    await page.route('**/api/v2/pim/employees*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: [{ empNumber: 999, firstName: 'Mocked' }] })
      });
    });
  }
  // API validation
  static async validateDashboardAPI(page: Page) {
    await page.route('**/api/v2/dashboard/**', async route => {
      const response = await route.fetch();
      console.log(`[API Validation] Dashboard API Status: ${response.status()}`);
      await route.fulfill({ response });
    });
  }
}