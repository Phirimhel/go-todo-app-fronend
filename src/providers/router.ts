import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/providers/routes'
import { setupAuthGuard } from './guards'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

setupAuthGuard(router)