import type { Ref } from "vue";

interface AsyncStateContext {
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
}

export async function withAsyncState<T>(
  context: AsyncStateContext,
  fn: () => Promise<T>
): Promise<T | undefined> {
  context.isLoading.value = true;
  context.error.value = null;
  try {
    return await fn();
  } catch (e) {
    context.error.value = e instanceof Error ? e.message : "Unknown error";
    return undefined;
  } finally {
    context.isLoading.value = false;
  }
}