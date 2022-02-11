import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layout/BasicLayout.vue';

const modules = import.meta.globEager('./*.ts');

const routeModuleList: Array<RouteRecordRaw> = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const routes: RouteRecordRaw = {
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
    // 其余路由
    ...routeModuleList,
  ],
};

export default [routes];
