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

/**
 * 获取管理员列表
 */
export function getAdminList () {
  return http({
    url: '/admin/getAdminList',
  })
}

/**
 * 删除管理员
 */
export function deleteAdmin (adminId) {
  return http({
    url: '/admin/deleteAdmin',
    data: {
      adminId: adminId
    }
  })
}

/**
 * 添加管理员
 */
export function addAdmin (adminUsername, adminPassword) {
  return http({
    url: '/admin/addAdmin',
    data: {
      adminUsername: adminUsername,
      adminPassword: adminPassword
    }
  })
}


