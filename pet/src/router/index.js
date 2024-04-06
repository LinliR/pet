import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component:()=>import("../components/user/index.vue"),
      children:[
        {
          path: '/home',
          name: 'home',
          component:()=>import("../components/user/home/home.vue"),
        },
        {
          path: '/adopt',
          name: 'adopt',
          component:()=>import("../components/user/adopt/adopt.vue"),
        },
        {
          path: '/find',
          name: 'find',
          component:()=>import("../components/user/find/find.vue"),
        },
        {
          path: '/center',
          name: 'center',
          component:()=>import("../components/user/center/center.vue"),
        },
        {
          path: '/message',
          name: 'message',
          component:()=>import("../components/user/message/message.vue"),
        },
        {
          path: '/collection',
          name: 'collection',
          component:()=>import("../components/user/collection/collection.vue"),
        },
        {
          path: '/publish',
          name: 'publish',
          component:()=>import("@/components/user/publish/publish.vue"),
        },
      ]
    },
    {
      path:'/admin',
      name:'admin',
      component:()=>import('../components/admin/index.vue')
    }
  ]
})

export default router
