<script setup lang="ts">
import AuthHeader from "@/widgets/common/AuthHeader.vue";
import LoginAsAdminDev from "@/widgets/users/LoginAsAdminDev.vue";
import LoginWidget from "@/widgets/users/LoginWidget.vue";


</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <AuthHeader />
    <div class="flex flex-1 items-center justify-center gap-4">
           <LoginWidget></LoginWidget>
           <LoginAsAdminDev></LoginAsAdminDev>
    </div>
  </div>
</template>
