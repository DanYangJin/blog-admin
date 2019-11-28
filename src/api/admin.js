import http from '@/utils/http/'

/**
 * 登陆接口
 * @param {*} params 登录参数
 */
export function login (params) {
  return http({
    url: '/admin/login',
    data: params
  })
}

/**
 * 退出登录接口
 */
export function logOut () {
  return http({
    url: '/admin/logout',
  })
}


