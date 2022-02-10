import { createApp } from 'vue';
import App from './App.vue';

import { setupAntd } from './libs/antdv';
import 'ant-design-vue/dist/antd.css';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import '@ant-design-vue/pro-layout/dist/style.css';

import 'virtual:windi.css';
import 'virtual:windi-devtools'; // windicss devtools: in production will be an empty module

import router, { setupRouter } from './router'; // 路由

const app = createApp(App);

setupAntd(app); // 引入antd
app.use(ProLayout).use(PageContainer); // pro-layout
setupRouter(app); // 引入路由

router.isReady().then(() => {
  app.mount('#app');
});
