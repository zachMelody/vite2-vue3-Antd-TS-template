import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'; // 按需引入
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'; // 按需引入antd
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';

import { loadEnv } from './src/utils/viteBuild';

const resolve = (dir: string) => path.join(__dirname, dir);

const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: true, // enabled by default if `typescript` is installed
    }),
  ],
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
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${new Date().getTime()}.js`,
        chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
        assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
      },
    },
  },
});
