import type { Ref } from "vue";

export interface User {
  id: number;
  version: number;
  fullName: string;
  phoneNumber: string;
  role: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponseDTO {
  token: string;
  user: UserDTO;
}

export interface UserDTO {
  id: number;
  version: number;
  full_name: string;
  phone_number: string;
  role: string;
  email: string;
}

export interface UserStoreContext {
  users: Ref<User[]>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
}

export interface UserLoginStoreContext {
  loggedUser: Ref<User | undefined, User | undefined>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
}

