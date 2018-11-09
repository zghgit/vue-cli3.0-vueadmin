import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

// const qq = { a: 1, b: 2 };

// let x = {
//     ...qq,
//     h: 9
// }

// x.a

export const constantRouterMap = [{
        path: '/login',
        name: '登录',
        component: function (resolve) {
            require(['@/views/login/index'], resolve); //异步加载
        },
        // component: () => import('@/views/login/index'), // 同步加载
        hidden: true
    },

    {
        path: '/404',

        name: '出错啦',
        component: function (resolve) {
            require(['@/views/404'], resolve);
        },
        // component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            name: '首页',
            component: function (resolve) {
                require(['@/views/dashboard/index'], resolve); //异步加载
            },
            // component: () => import('@/views/dashboard/index') // 同步加载
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        // meta: { title: 'Example', icon: 'example' },
        meta: {
            title: '首页',
            icon: 'icon-fenleiorguangchangorqitatianchong'
        },
        children: [{
                path: 'table',
                name: '列表',
                component: function (resolve) {
                    require(['@/views/table/index'], resolve);
                },
                meta: {
                    title: '列表',
                    icon: 'icon-shoujitianchong'
                }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: function (resolve) {
                    require(['@/views/tree/index'], resolve);
                },
                // meta: { title: 'Tree', icon: 'tree' }
                meta: {
                    title: '树状',
                    icon: 'icon-gengduotianchong'
                }
            }
        ]
    },

    {
        path: '/form',
        component: Layout,
        children: [{
            path: 'index',
            name: '表单',
            component: function (resolve) {
                require(['@/views/form/index'], resolve);
            },
            meta: {
                title: '表单',
                icon: 'icon-xinfengtianchong'
            }
        }]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'nested',
        meta: {
            title: 'nested',
            icon: 'icon-wenbenbianjitianchong'
        },
        children: [{
                path: 'menu1',
                nema: 'menu1',
                component: function (resolve) {
                    require(['@/views/nested/menu1/index'], resolve);
                },
                meta: {
                    title: 'menu1'
                },
                children: [{
                        path: 'menu1-1',
                        name: 'menu1-1',
                        component: function (resolve) {
                            require(['@/views/nested/menu1/menu1-1'], resolve);
                        },
                        meta: {
                            title: 'menu1-1'
                        }
                    },
                    {
                        path: 'menu1-2',
                        name: 'menu1-2',
                        component: function (resolve) {
                            require(['@/views/nested/menu1/menu1-2'], resolve);
                        },
                        meta: {
                            title: 'menu1-2'
                        },
                        children: [{
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'menu1-2-1',
                                meta: {
                                    title: 'menu1-2-1'
                                }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'menu1-2-2',
                                meta: {
                                    title: 'menu1-2-2'
                                }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'menu1-3',
                        meta: {
                            title: 'menu1-3'
                        }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                meta: {
                    title: 'menu2'
                }
            }
        ]
    },

    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
});