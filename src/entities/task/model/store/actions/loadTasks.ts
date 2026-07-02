import { fetchTasks } from "@/entities/task/model/api/tasksApi";
import { taskModelsFromDTOs } from "@/entities/task/model/types/tasksUtils";
import type { FetchTasksParams } from "@/entities/task/model/api/tasksApi";
import type { TasksStoreContext } from "@/entities/task/model/types/tasksTypes";

export async function loadTasksAction(context: TasksStoreContext , filters: FetchTasksParams) {
  context.isLoading.value = true;
  context.error.value = null;

  try {
    const data = await fetchTasks(filters);
    context.tasks.value = taskModelsFromDTOs(data);
  } catch (err: any) {
    context.error.value = err.message || "Failed to fetch tasks";
    console.error(err);
  } finally {
    context.isLoading.value = false;
  }
} 