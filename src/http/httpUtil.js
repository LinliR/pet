// src/axios.js
import axios from 'axios';

// 创建axios实例，设置基本URL和默认配置
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 10000,
    // 其他默认配置项...
});

// 添加全局请求/响应拦截器（可选）
axiosInstance.interceptors.request.use(config => {
    // 请求前的处理
    return config;
});

axiosInstance.interceptors.response.use(response => {
    // 响应后的处理
    return response.data;
}, error => {
    // 处理错误响应
    return Promise.reject(error);
});

// 或者直接将HTTP方法挂在axios实例上
axiosInstance.getData = (url) => axiosInstance.get(url, {});
axiosInstance.postData = (url, data) => axiosInstance.post(url, data,{});
axiosInstance.putData = (url, data) => axiosInstance.put(url, data, {});
axiosInstance.deleteData = (url) => axiosInstance.delete(url, {});


// 将axios实例暴露出去
export default axiosInstance;