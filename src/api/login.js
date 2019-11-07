import http from '@/utils/http/'

/**
 * 登陆接口
 * @param {*} params 登录参数
 */
export function login (params) {
  return http({
    url: '/user/login',
    data: params
  })
}

