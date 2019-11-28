import Vue from 'vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import NProgress from 'nprogress'

import '@/styles/index.scss'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'

import App from './App'
import store from './store'
import router from './router'

import '@/icons'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

NProgress.configure({ showSpinner: false })

router.beforeEach((to,from,next) => {
    NProgress.start();
    next();
})

router.afterEach((to, from, next) => {
    document.title = to.meta.title || '管理后台';
    NProgress.done();
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
