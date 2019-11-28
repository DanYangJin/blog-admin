import axios from 'axios'

/**
 * @function 响应拦截，如果是接口报错情况下做对应的提示；如果接口正常，则继续
 * @author Eleven
 */
axios.interceptors.response.use(
  config => {
    if (config.data.resultCode === -105) {
      sessionStorage.clear();
      localStorage.clear();
      setTimeout(() => {
        console.log("logout")
        // this.$router.push(`/admin?redirect=${this.$route.fullPath}`)
      }, 2000);
    } else {
      return config.data;
    }
  },
  error => {
    let resultMessage = '';
    let resultCode = -104;
    if (error && error.response) {
      let errorMsgList = {
        400: '错误请求【400】',
        401: '未授权，请重新登录【401】',
        403: '拒绝访问【403】',
        404: '请求错误,未找到该资源【404】',
        405: '请求方法未允许【405】',
        408: '请求超时【408】',
        500: '服务器端出错【500】',
        501: '网络未实现【501】',
        502: '网络错误【502】',
        503: '服务不可用【503】',
        504: '网络超时【504】',
        505: 'http版本不支持该请求【505】'
      };
      resultMessage = errorMsgList[+error.response.status] || '未知错误';
      resultCode = error.response.status
    } else {
      let errorMsgList = {
        'Network Error': '请检查网络情况',
        'Repeated requests': '同一时间请勿重复请求'
      };
      resultMessage = errorMsgList[error.message] || '未知错误'
    }

    return Promise.reject({
      resultCode,
      resultMessage
    })
  }
);
