import { httpClient, getErrorMessage } from "@/shared/axios";
import type {
  LoginPayload,
  LoginResponseDTO,
} from "@/entities/user/model/types/types";

export const login = async (
  payload: LoginPayload,
): Promise<LoginResponseDTO> => {
  try {
    const { data } = await httpClient.post<LoginResponseDTO>(
      "/users/login",
      payload,
    );

    return data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
