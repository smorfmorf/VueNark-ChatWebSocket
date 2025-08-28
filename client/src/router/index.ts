import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Layout from '@/layout/Layout.vue'
import ChatLogin from '@/pages/ChatLogin.vue'
import Chat from '@/pages/Chat.vue'
// Ленивая загрузка компонентов
const Favorite = () => import('@/pages/Favorite.vue')
const Admin = () => import('@/pages/Admin.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/favorite',
          name: 'Favorite',
          component: Favorite,
        },
        {
          path: '/chat-login',
          name: 'ChatLogin',
          component: ChatLogin,
        },
        {
          path: '/chat',
          component: Chat,
        },
        {
          async beforeEnter(to, from, next) {
            if (true) {
              console.log('Тут будет гвард')
              next() // Переход к следующему маршруту next('/to')
            }
          },
          path: '/admin',
          name: 'Admin',
          component: Admin,
        },
      ],
    },
  ],
})

export default router

//! Guardian
// beforeEnter: (to, from, next) => {
//   const isAuthenticated = localStorage.getItem("user");
//   if (isAuthenticated) {
//     next(); // доступ разрешен
//   } else {
//     next("/"); // редирект
//   }
// },
