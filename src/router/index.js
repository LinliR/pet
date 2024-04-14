import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import("../components/user/index.vue"),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import("../components/user/home/home.vue"),
                },
                {
                    path: '/adopt',
                    name: 'adopt',
                    component: () => import("../components/user/adopt/adopt.vue"),
                },
                {
                    path: '/find',
                    name: 'find',
                    component: () => import("../components/user/find/find.vue"),
                },
                {
                    path: '/center',
                    name: 'center',
                    component: () => import("../components/user/center/center.vue"),
                },
                {
                    path: '/message',
                    name: 'message',
                    component: () => import("../components/user/message/message.vue"),
                    children:[
                        {
                            path: '/review',
                            name: 'review',
                            component: () => import("../components/user/message/operation/review.vue"),
                        },
                        {
                            path: '/collection',
                            name: 'collection',
                            component: () => import("../components/user/message/operation/collection.vue"),
                        }
                    ]
                },
                {
                    path: '/collection',
                    name: 'collection',
                    component: () => import("../components/user/collection/collection.vue"),
                },
                {
                    path: '/publish',
                    name: 'publish',
                    component: () => import("../components/user/publish/publish.vue"),
                    children: [
                        {
                            path: '/adoptForm',
                            name: 'adoptForm',
                            component: () => import("../components/user/publish/formFile/adoptForm.vue"),
                        },
                        {
                            path: '/findFrom',
                            name: 'findFrom',
                            component: () => import("../components/user/publish/formFile/findFrom.vue"),
                        },
                    ]
                },
                {
                    path: '/adoptCommit',
                    name: 'adoptCommit',
                    component: () => import("../components/user/publish/adoptCommit.vue"),
                },
                {
                    path: '/findCommit',
                    name: 'findCommit',
                    component: () => import("../components/user/publish/findCommit.vue"),
                },
                {
                    path: '/login',
                    name: 'user_login',
                    component: () => import("../components/user/login.vue"),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import("../components/user/register.vue"),
                },
                {
                    path: '/userPet',
                    name: 'userPet',
                    component: () => import("../components/user/userPet.vue"),
                }
            ]
        },
        {
            path: '/admin',
            name: 'login',
            component: () => import('../components/admin/login.vue')
        },
        {
            path: '/adminIndex',
            name: 'adminIndex',
            component: () => import("../components/admin/index.vue"),
            children: [
                {
                    path: '/userManage',
                    name: 'userManage',
                    component: () => import("../components/admin/menu/userManage.vue"),
                },
                {
                    path: '/pet',
                    name: 'pet',
                    component: () => import("../components/admin/menu/pet.vue"),
                },
                {
                    path: '/adoptFeel',
                    name: 'adoptFeel',
                    component: () => import("../components/admin/menu/adoptFeel.vue"),
                },
            ]
        }
    ]
})

export default router
