import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

import Home from '@/pages/home/index.vue';

// 路由表
const routes = [
  { path: '/', component: Home },

];

// 路由器
const router = createRouter({
  // createWebHashHistory (hash路由 Hash模式 #)
  // createWebHistory (history路由 HTML5 模式 推荐，需要服务器配置支持)
  // createMemoryHistory 带缓存 history 路由
  // 添加baseUrl，createWebHistory(baseUrl)
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
