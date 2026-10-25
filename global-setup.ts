import * as fs from 'fs';

async function globalSetup() {
  console.log('\n========== GLOBAL SETUP START ==========');

  // FIX: Create folders if not exist
  if (!fs.existsSync('test-results')) {
    fs.mkdirSync('test-results', { recursive: true });
  }
  if (!fs.existsSync('auth')) {
    fs.mkdirSync('auth', { recursive: true });
  }

  console.log('[GlobalSetup] Seeding test data...');

  const seedData = {
    employees: [
      { id: `EMP_${Date.now()}`, firstName: 'Seeded', lastName: 'User1' }
    ],
    adminUser: {
      username: process.env.ADMIN_USER || 'Admin',
      password: process.env.ADMIN_PASS || 'admin123'
    },
    timestamp: new Date().toISOString()
  };

  fs.writeFileSync('test-results/seeded-data.json', JSON.stringify(seedData, null, 2));

  process.env.TEST_DATA_SEEDED = 'true';
  process.env.EMPLOYEE_ID = seedData.employees[0].id;

  console.log(`[GlobalSetup] Seeded: ${seedData.employees[0].id}`);
  console.log('========== GLOBAL SETUP COMPLETE ==========\n');
}

export default globalSetup;