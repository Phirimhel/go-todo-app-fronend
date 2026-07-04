import { login } from "@/entities/user/model/api/api";
import type {
  LoginPayload,
  UserLoginStoreContext,
} from "@/entities/user/model/types/types";
import { withAsyncState } from "@/shared/lib/helpers/withAsyncState";
import { userModelFromDTO } from "../../types/utils";

export async function loginAction(
  context: UserLoginStoreContext,
  loginPayload: LoginPayload,
) {
  await withAsyncState(context, async () => {
    const data = await login(loginPayload);
    context.loggedUser.value = userModelFromDTO(data.user)
  });
}
