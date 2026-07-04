import type { Router } from 'vue-router'
import { useUserStore } from '@/entities/user/model/store/store'

export function setupAuthGuard(router: Router) {
  router.beforeEach((to) => {
    const userStore = useUserStore()

    const isAuthenticated = !!userStore.loggedUser?.id && userStore.loggedUser.id !== -1

    if (to.meta.requiresAuth && !isAuthenticated) {
      return { name: 'login' }
    }

    if (to.meta.guestOnly && isAuthenticated) {
      return { name: 'app' }
    }

    return true
  })
}