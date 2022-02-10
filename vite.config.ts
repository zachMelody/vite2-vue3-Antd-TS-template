import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';
import { loadEnv } from './src/utils/viteBuild';

const resolve = (dir: string) => path.join(__dirname, dir);

const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve('src'),
      comps: resolve('src/components'),
      store: resolve('src/store'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? VITE_PUBLIC_PATH : './',
  server: {
    port: VITE_PORT,
    open: VITE_OPEN,
  },
});
