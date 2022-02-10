import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import type { App } from 'vue';

import Home from '@/pages/home/index.vue';
import BasicLayout from '@/layout/BasicLayout.vue';
import BlankLayout from '@/layout/BlankLayout.vue';

// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const hasGithubPages = import.meta.env.VITE_GHPAGES;

// 路由表
const routes = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'Home' },
    component: BasicLayout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: { title: '欢迎', icon: 'icon-icon-test' },
        component: () => import('@/pages/pro/welcome.vue'),
      },
      {
        path: '/admins',
        name: 'admins',
        meta: { title: '管理页', icon: 'icon-tuijian' },
        component: BlankLayout,
        redirect: () => ({ name: 'page1' }),
        children: [
          {
            path: 'page-1',
            name: 'page1',
            meta: { title: '一级页面' },
            component: () => import('@/pages/pro/admins/page1.vue'),
          },
          {
            path: 'page-2',
            name: 'page2',
            meta: { title: '二级页面' },
            component: () => import('@/pages/pro/admins/page1.vue'),
          },
          {
            path: 'dynamic-match/:id(\\d+)',
            name: 'dynamic-match',
            // 路由 path 默认参数再 meta.params 里
            meta: { title: '动态参数页面', params: { id: 1 } },
            component: () => import('@/pages/pro/admins/dynamic-match.vue'),
          },
        ],
      },
      {
        path: '/version',
        name: 'version',
        meta: { title: 'Version', icon: 'icon-antdesign' },
        component: () => import('@/pages/pro/detail.vue'),
      },
    ],
  },
];

// 路由器
const router = createRouter({
  // createWebHashHistory (hash路由 Hash模式 #)
  // createWebHistory (history路由 HTML5 模式 推荐，需要服务器配置支持)
  // createMemoryHistory 带缓存 history 路由
  // 添加baseUrl，createWebHistory(baseUrl)
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
