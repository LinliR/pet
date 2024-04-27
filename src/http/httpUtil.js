// src/axios.js
import axios from 'axios';
import router from "@/router/index.js";

// 创建axios实例，设置基本URL和默认配置
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 10000,
    // 其他默认配置项...
});

// 添加全局请求/响应拦截器（可选）
axiosInstance.interceptors.request.use(config => {
    const userid = localStorage.getItem('userId');
    if (userid) {
        config.headers['X-User-ID'] = userid;
    }
    // 请求前的处理
    return config;
});

const success = 200
const non_login = 401
const non_find = 404

axiosInstance.interceptors.response.use(
    response => {
        if (response.status === success) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (!error.response.status) {
            return Promise.reject(error.response);
        }

        switch (error.response.status) {
            case non_login:
                router.push({
                    name: 'user_login'
                });
                break
            case non_find:
                break
        }
    }
);

// 或者直接将HTTP方法挂在axios实例上
axiosInstance.getData = (url) => axiosInstance.get(url, {});
axiosInstance.postData = (url, data) => axiosInstance.post(url, data, {});
axiosInstance.putData = (url, data) => axiosInstance.put(url, data, {});
axiosInstance.deleteData = (url) => axiosInstance.delete(url, {});


// 将axios实例暴露出去
export default axiosInstance;