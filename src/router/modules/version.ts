import { RouteRecordRaw } from 'vue-router';

const version: RouteRecordRaw[] = [
  {
    path: 'version',
    name: 'version',
    meta: { title: 'Version', icon: 'icon-antdesign' },
    component: () => import('@/pages/pro/detail.vue'),
  },
];

export default version;
