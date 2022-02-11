import { RouteRecordRaw } from 'vue-router';

import BlankLayout from '@/layout/BlankLayout.vue';

const admins: RouteRecordRaw[] = [
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
];

export default admins;
