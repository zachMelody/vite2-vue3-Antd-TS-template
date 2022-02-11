import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
import axios from 'axios';

/**
 * 服务端响应数据
 */
interface Response {
  /** 状态码 */
  code: number;
  /** 状态信息？ */
  message?: string;
  /** 数据 */
  data: object;
  [propName: string]: any;
}

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as any,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res: Response = response.data;
    if (res.code != 200) {
      // 状态码：错误
      message.error(res.message || '状态码：错误');
      return Promise.reject(service.interceptors.response);
    }
    // 成功获取数据
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      message.error('网络超时');
    } else if (error.message == 'Network Error') {
      message.error('网络连接错误');
    } else {
      if (error.response.data) message.error(error.response.statusText);
      else message.error('接口路径找不到');
    }
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
