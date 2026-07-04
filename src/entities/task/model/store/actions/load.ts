import { fetchTasks } from "@/entities/task/model/api/api";
import { taskModelsFromDTOs } from "@/entities/task/model/types/utils";
import type { FetchTasksParams } from "@/entities/task/model/api/api";
import type { TasksStoreContext } from "@/entities/task/model/types/types";
import { withAsyncState } from "@/shared/lib/helpers/withAsyncState";

export const loadTasksAction = async (
  context: TasksStoreContext,
  filters: FetchTasksParams,
) => {
  await withAsyncState(context, async () => {
    const data = await fetchTasks(filters);
    context.tasks.value = taskModelsFromDTOs(data);
  });
};
