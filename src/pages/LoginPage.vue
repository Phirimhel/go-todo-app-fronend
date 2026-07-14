<script setup lang="ts">
import AuthHeader from "@/widgets/common/AuthHeader.vue";
import LoginSlider from "@/widgets/common/LoginSlider.vue";
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <AuthHeader />
    <div class="flex flex-1 items-center justify-center gap-4">
      <LoginSlider></LoginSlider>
    </div>
  </div>
</template>
