import { ref } from "vue";
import { defineStore } from "pinia";
import type {
  LoginPayload,
  User,
  UserStoreContext,
  UserLoginStoreContext,
} from "@/entities/user/model/types/types";
import { loginAction } from "./actions/login";

export const useUserStore = defineStore("user", () => {
  const loggedUser = ref<User>();
  const users = ref<User[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const context: UserStoreContext = { users, isLoading, error };
  const loginContext: UserLoginStoreContext = { loggedUser, isLoading, error };

  const login = async (loginPayload: LoginPayload) => {
    await loginAction(loginContext, loginPayload);
  };

  return {
    // state
    loggedUser,
    // actions
    login,
  };
});
