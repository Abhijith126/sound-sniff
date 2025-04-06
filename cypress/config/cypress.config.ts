import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  env: {},
  e2e: {
    baseUrl: 'https://localhost:5173',
    specPattern: 'cypress/e2e/**/*.{ts,tsx}',
  },
});
