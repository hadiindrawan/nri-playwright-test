# Playwright Automation with TypeScript

This project contains automated tests using [Playwright](https://playwright.dev/) with TypeScript. It is designed for reliable end-to-end testing of web applications.

## Project Structure

    .
    ├── playwright-report               # HTML playwright report
    ├── tests
    │   ├── data                                # Used for data driven for provide multiple cases if any
    │   │   ├── *.data.ts
    │   ├── pages                              # Used for element locator and all UI interaction will declare here
    │   │   ├── *.page.ts
    │   ├── specs                               # Used for testing process and assert the expectation
    │   │   ├── *.spec.ts
    │   ├── utils                                 # Used for any utility
    │   │   ├── *.util.ts
    ├── package.json
    ├── package-lock.json
    └── playwright.config.ts


## Prerequisites

- **Node.js**: Ensure Node.js is installed (Node.js 14 or later recommended)

## Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:hadiindrawan/nri-playwright-test.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Install Playwright browser:**
   ```bash
   npx playwright install
   ```
## Run Test

1. **Run all tests:**
   ```bash
   npm run test
   ```
2. **Run specific file:**
   ```bash
   npm run test 'filename' (example: npm run test home.spec.ts)
   ```
3. **Run debug mode:**
   ```bash
   npm run debug
   ```
4. **Serve report:**
   ```bash
   npm run report
   ```
