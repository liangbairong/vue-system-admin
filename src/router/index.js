import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: resolve => require(['../public/Home.vue'], resolve),
            meta: { title: '自述文件' }, 
            children:[
                {
                    path: '/index',
                    component: resolve => require(['../page/home/index.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/list',
                    component: resolve => require(['../page/home/list.vue'], resolve),
                    meta: { title: '书籍列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../page/home/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../page/home/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../page/home/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
