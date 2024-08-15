import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
  preview: {
    host: true,
    strictPort: true,
    port: 3000,
  },
});
