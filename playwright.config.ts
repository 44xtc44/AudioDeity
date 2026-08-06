import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'unit',
      testDir: './tests/unit', // Only looks in this folder
      // Optional: Run without browser for pure logic tests
      use: { browserName: 'chromium' },
    },
    {
      name: 'e2e',
      testDir: './tests/e2e',
      use: { browserName: 'chromium' },
    },
  ],
});
