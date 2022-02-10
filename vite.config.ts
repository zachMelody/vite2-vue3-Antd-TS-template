import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';

const resolve = (dir: string) => path.join(__dirname, dir);

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
});
