import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '主页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/articleList',
    name: '文章管理',
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: 'articleList',
        name: '文章列表',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '文章列表', icon: 'list' }
      },
      {
        path: 'articleStatistics',
        name: '数据统计',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '数据统计', icon: 'tree' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/userList',
    children: [
      {
        path: 'userList',
        name: '用户列表',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '用户列表', icon: 'peoples' }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/adminList',
    children: [{
      path: 'adminList',
      name: '管理员',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '管理员', icon: 'user' }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
