import axios from 'axios'
// 工具方法

/**
 * @description localStorage设置
 * @param {*} key 
 * @param {*} value 
 */
export function storage(key,value){
    if(value){
        return localStorage.setItem(key, value);
    }
    if(typeof value=='undefined'){
        return localStorage.getItem(key);
    }
    if(typeof value=='string'){
        return localStorage.removeItem(key);
    }

}
 
/**
 * @description post方法
 * @param {*} api 
 * @param {*} data 
 */
export function post(api,data){
    return new Promise((resolve,reject)=>{
        axios.post(api,data).then((res)=>{
            resolve(res);
        }).catch((error)=>{
            reject(error);
        })
    })
}

/**
 * @description get方法
 * @param {*} api 
 * @param {*} data 
 */
export function get(api,data){
    return new Promise((resolve,reject)=>{
        axios.get(api,data).then((res)=>{
            resolve(res);
        }).catch((error)=>{
            reject(error);
        })
    })
}
