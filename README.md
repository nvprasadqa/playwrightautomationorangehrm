# OrangeHRM Playwright Automation Framework

## Overview

This project is developed using:

- Playwright
- TypeScript
- Page Object Model (POM)
- Data Driven Testing (JSON)
- Cross Browser Testing
- Parallel Execution
- HTML Reporting

Target Application:

https://opensource-demo.orangehrmlive.com/

Credentials:

Username: Admin

Password: admin123

# Framework Features

✅ Page Object Model (POM)

✅ Data Driven Testing using JSON

✅ Login Validation

✅ Logout Validation

✅ Employee Creation

✅ Dynamic Employee ID Handling

✅ Employee Search

✅ Data Persistence Validation

✅ Form Validation

✅ Error Handling

✅ Parallel Execution

✅ Cross Browser Testing

✅ Screenshot Capture on Failure

✅ Trace Collection on Failure

✅ HTML Reporting

✅ Retry Mechanism

---

# Project Structure

project-root │ ├── pages │ ├── LoginPage.ts │ └── PIMPage.ts │ ├── tests │ ├── LoginPositive.spec.ts │ ├── LoginNegative.spec.ts │ └── Employee.spec.ts │ ├── testData │ ├── validUsers.json │ ├── invalidUsers.json │ └── employees.json │ ├── playwright-report │ ├── test-results │ ├── playwright.config.ts │ ├── package.json │ └── README.md

# Prerequisites

Install:

- Node.js (Latest LTS)
- VS Code

Verify Installation

```bash
node -v

npm -v