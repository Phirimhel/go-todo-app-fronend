<script setup lang="ts">
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useUserStore } from "@/entities/user/model/store/store";
import type { LoginPayload } from "@/entities/user/model/types/types";

const userStore = useUserStore();
const isSubmitting = ref(false);
const loginError = ref<string | null>(null);

const loginAsAdmin = async () => {
  isSubmitting.value = true;
  loginError.value = null;

  const value: LoginPayload = {
    email: 'petuh@pepa.com',
    password: 'unset',
  };
  await userStore.login(value);
};
</script>

<template>
<Card class="w-full sm:max-w-sm">
    <CardHeader class="flex flex-col items-center text-center">
      <!-- Fixed h-32 w-32 (128px) or use h-28 w-28 (112px) -->
      <Avatar class="h-32 w-32 border flex items-center justify-center rounded-full overflow-hidden">
        <AvatarImage src="/admin-avatar.png" alt="Admin" class="h-full w-full object-cover" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <CardTitle class="mt-4">Быстрый вход</CardTitle>
      <CardDescription>Войти под тестовым админ-аккаунтом.</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col items-center gap-4">
      <Button class="w-full" :disabled="isSubmitting" @click="loginAsAdmin">
        {{ isSubmitting ? "Вход..." : "Login as admin" }}
      </Button>
      <p v-if="loginError" class="text-sm text-destructive">
        {{ loginError }}
      </p>
    </CardContent>
</Card>
</template>
