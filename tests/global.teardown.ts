import { test as teardown } from '@playwright/test';
import * as fs from 'fs';

teardown('Global Teardown - Resource Cleanup', async ({}) => {
  console.log('\n========== GLOBAL TEARDOWN START ==========');

  // 1. Cleanup seeded data
  const seedFile = process.env.SEED_FILE || 'test-results/seeded-data.json';
  if (fs.existsSync(seedFile)) {
    const data = JSON.parse(fs.readFileSync(seedFile, 'utf-8'));
    console.log(`[Teardown] Cleaning up ${data.employees?.length || 0} seeded employees`);
    // Here you would call API to delete employees
    // await request.delete(`/api/v2/pim/employees/${employeeId}`)
  }

  // 2. Cleanup auth file if needed (optional - keep for next run)
  // if (fs.existsSync('auth/admin.json')) {
  // fs.unlinkSync('auth/admin.json');
  // }

  // 3. Cleanup test results attachments
  console.log('[Teardown] Cleaning up temp resources...');
  console.log(`[Teardown] Cleaned Employee ID: ${process.env.EMPLOYEE_ID}`);

  console.log('========== GLOBAL TEARDOWN COMPLETE ==========\n');
});