<script setup lang="ts">
import { ref } from 'vue'
import LoginWidget from '@/widgets/users/LoginWidget.vue'
import LoginAsAdminDev from '../users/LoginAsAdminDev.vue'

const slides = [
  { id: 'login', component: LoginWidget },
  { id: 'admin', component: LoginAsAdminDev },
]

const active = ref(0)

function setActive(index: number) {
  active.value = index
}

function cardStyle(index: number) {
  const isActive = index === active.value
  const isAfter = index > active.value

  if (isActive) {
    return {
      transform: 'scale(1) translateX(0)',
      opacity: 1,
      zIndex: 10,
      cursor: 'default',
    }
  }

  return {
    transform: `scale(0.9) translateX(${isAfter ? '24px' : '-24px'})`,
    opacity: 0.4,
    zIndex: 5,
    cursor: 'pointer',
  }
}
</script>

<template>
  <div class="auth-stack">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="auth-stack-item"
      :style="cardStyle(index)"
      @click="index !== active && setActive(index)"
    >
      <component :is="slide.component" />
    </div>
  </div>
</template>

<style scoped>
.auth-stack {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
}

.auth-stack-item {
  flex-shrink: 0;
  width: 380px;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.auth-stack-item:hover:not([style*="cursor: default"]) {
  opacity: 0.6 !important;
}
</style>