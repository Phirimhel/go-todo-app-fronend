<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, Field as VeeField } from "vee-validate";
import { z } from "zod";
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/entities/user/model/store/store";
import type { LoginPayload } from "@/entities/user/model/types/types";

const userStore = useUserStore();
const isSubmitting = ref(false);
const loginError = ref<string | null>(null);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email("Введите корректный email."),
    password: z.string().min(1, "Введите пароль."),
  }),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "",
    password: "",
  },
});

const onSubmit = handleSubmit(async (values: LoginPayload) => {
  isSubmitting.value = true;
  loginError.value = null;
  try {
    await userStore.login(values);
    // редирект после успешного логина, например:
    // router.push('/tasks')
  } catch (e) {
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <Card class="w-full sm:max-w-md">
    <CardHeader>
      <CardTitle>Вход</CardTitle>
      <CardDescription>
        Введите свои данные, чтобы войти в аккаунт.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form id="form-login" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="email">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="login-email"> Email </FieldLabel>
              <Input
                id="login-email"
                v-bind="field"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="password">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="login-password"> Пароль </FieldLabel>
              <Input
                id="login-password"
                v-bind="field"
                type="password"
                autocomplete="current-password"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <p v-if="loginError" class="text-sm text-destructive">
            {{ loginError }}
          </p>
        </FieldGroup>
      </form>
    </CardContent>
    <CardFooter>
      <Button
        type="submit"
        form="form-login"
        class="w-full"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "Вход..." : "Войти" }}
      </Button>
    </CardFooter>
  </Card>
</template>
