import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sound-sniff',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
