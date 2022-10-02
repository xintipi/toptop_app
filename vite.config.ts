/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import dayjs from 'dayjs';
// @ts-ignore
import pkg from './package.json';
import * as path from 'path';

const { dependencies, devDependencies, name, version, author } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, author },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: true,
    port: 8080,
    open: true,
  },
  preview: {
    port: 5555,
    open: true,
  },
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
  },
  define: { __APP_INFO__: JSON.stringify(__APP_INFO__) },
  plugins: [svgr(), react()],
  test: {
    include: ['src/**/*.{test,spec}.{jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.test.ts',
    css: true,
  },
});
