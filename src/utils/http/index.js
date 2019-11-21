import axios from 'axios'
import './requestInterception'
import './responseInterception'

// 代理后的路径
axios.defaults.baseURL = process.env.VUE_APP_API
// 设置所有接口超时时间为10秒
axios.defaults.timeout = 10000

/**
 * @function 封装请求；这边请求成功且success为true的时候的处理都在then中；请求失败或者业务逻辑错误的处理都在catch中；
 * @author Eleven
 * @param {*} reqOptions 请求的参数，可以直接是一个url；但是如果有参数的话需要传入一个对象
 */
function http(reqOptions) {
    let options = {
        url: '', // 请求url
        data: {}, // 请求参数
        specialError: false, // 特殊的错误处理，这边指报错不使用统一提示，需要做特殊处理;这时候把整个response返回
        specialLoading: false, // 特殊的请求loading，不需要使用统一的loading开关
        method: 'post', // 请求类型，默认post
        contentType: 'application/json;charset=utf-8;' // 返回数据contentType类型，默认是'application/json;charset=utf-8;'
    }
    let urlMethod = ''

    if (typeof reqOptions === 'string') {
        urlMethod = reqOptions
    } else if (typeof reqOptions === 'object') {
        urlMethod = reqOptions.url
        delete reqOptions.url
        options = {...options, ...reqOptions}
    }
    // 经过转换后的真正的请求参数
    let reqData = JSON.stringify(options.data)
    console.log("reqData: " + reqData)
    return new Promise((resolve, reject) => {
        axios[options.method](
            urlMethod,
            reqData,
            {
                headers: {
                    'Content-Type': options.contentType
                }
            }
        ).then(response => {
            let resultCode = response.resultCode;
            let resultMessage = response.resultMessage;
            if (resultCode === 200) {
                resolve(response);
            } else {
                reject({resultCode, resultMessage});
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

export default http
