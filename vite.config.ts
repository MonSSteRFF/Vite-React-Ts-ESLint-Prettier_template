import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        short_name: 'Template',
        name: 'Vite_Template',
        description:
          'vite template with react, typescript, pwa, eslint, prettier, stylelint',
        display_override: ['fullscreen', 'minimal-ui'],
        display: 'standalone',
        icons: [
          {
            src: '/icons/pwa-64x64.png',
            type: 'image/png',
            sizes: '64x64',
          },
          {
            src: '/icons/pwa-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        screenshots: [
          {
            src: '/screenshots/Screenshot_1.png',
            type: 'image/png',
            sizes: '340x340',
            form_factor: 'narrow',
          },
          {
            src: '/screenshots/Screenshot_1.png',
            type: 'image/png',
            sizes: '340x340',
            form_factor: 'wide',
          },
        ],
        start_url: '.',
        theme_color: '#ffffff',
      },
      workbox: {
        globPatterns: ['../**/*.{css,html,ico,png,svg,json}'],
        globIgnores: ['../node_modules/**/*'],
        // runtimeCaching: [
        //   {
        //     urlPattern: ({ url }) => {
        //       console.log(url);
        //       return true;
        //     },
        //     handler: 'NetworkFirst' as const,
        //     options: {
        //       cacheName: 'vite_cache',
        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //     },
        //   },
        // ],
      },
    }),
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

// Uncaught (in promise) add-to-cache-list-conflicting-entries:
// Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()'
// had the URL http://127.0.0.1:3000/index.html?__WB_REVISION__=ba6ab75157488d8a9e6fe5efd633f009
// but different revision details. Workbox is unable to cache and version the asset
// correctly. Please remove one of the entries.
