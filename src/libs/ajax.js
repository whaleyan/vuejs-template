import axios from 'axios';
import { Toast } from 'vant';

let ajax = axios.create({
    baseURL: '',
    timeout: 30000
});

Toast.allowMultiple();

//Add a request interceptor
ajax.interceptors.request.use(function (config) {

    //显示加载中
    Toast.loading({
        forbidClick: true,
        message: '加载中...',
        duration: 0
    });

    return config;
}, function (error) {
    Toast.fail('网络超时...');
    Promise.reject(error);
});

// Add a response interceptor
ajax.interceptors.response.use(function (response) {
    //加载结束
    Toast.clear("clearAll");
    
    if (response.status === 500) {
        return Toast.fail('请求异常，请联系管理');
    }
    if (response.status === 404) {
        return Toast.fail('请求地址不存在');
    }
    if (response.status === 401) {
        return Toast.fail('请求错误');
    }
    return response.data;
}, function (error) {
    Toast.clear("clearAll");
    console.log("Error:", error);
    Toast.fail('加载失败...');
    // Promise.reject(error);
});

export default ajax;