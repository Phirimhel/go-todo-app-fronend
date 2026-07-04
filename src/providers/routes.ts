import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'landing',
//     component: () => import('@/pages/AppPage.vue'),
//     meta: { requiresAuth: false },
//   },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LoginPage.vue'),
    //meta: { requiresAuth: false, guestOnly: true }, // если уже залогинен - не пускаем обратно на login
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/pages/AppPage.vue'),
    //meta: { requiresAuth: true },
  },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: () => import('@/pages/AppPage.vue'),
//     meta: { requiresAuth: true },
//   },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/app',
  },
]