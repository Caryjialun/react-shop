import axios from 'axios';
import qs from 'qs';
import {storage} from '../utils/util';
// axios 拦截器处理方式 在拦截器里面统一处理token
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // 统一配置token,通用参数传递
    if(storage('token')){
      config.headers['token'] = storage('token');
    }
  
    // 配置get请求时必须传的参数
    if(config.method === 'get'){
      config.params ={
        ...config.params,
      }
    }
    // 配置post请求时必须传的参数
    if(config.method === 'post'){
      config.data = qs.stringify({
        ...config.data,
      })
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  
  // axios 拦截器响应处理结果
  axios.interceptors.response.use(function (response) { 
    return response 
  }, function (error) { 
    if(error && error.response){
      switch (error.response.status){
        case 4003:
            window.location.href = "/login";
            break;
        default: 
          error.message = "网络请求错误，请联系管理员"
      }
      
    }
    return Promise.reject(error) 
  })