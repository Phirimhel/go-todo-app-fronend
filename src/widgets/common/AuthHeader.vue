<script setup lang="ts">
import { RouterLink } from "vue-router";
import ModeToggle from "@/widgets/common/ModeToggle.vue";
</script>

<template>
  <header class="flex h-16 w-full items-center justify-between border-b px-6">
    <RouterLink to="/" class="text-lg font-semibold"> TodoApp </RouterLink>
    <ModeToggle />
  </header>
</template>
