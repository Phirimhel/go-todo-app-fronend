import type {
  Task,
  TasksStoreContext,
} from "@/entities/task/model/types/tasksTypes";
import { updateTask } from "@/entities/task/model/api/tasksApi";
import {
  NewUpdateTaskPayload,
  taskDTOfromModel,
  taskModelFromDTO,
} from "@/entities/task/model/types/tasksUtils";

export async function patchTaskAction(
  context: TasksStoreContext,
  pachedTask: Task,
) {
  const taskID = pachedTask.id;
  const taskDTO = taskDTOfromModel(pachedTask);
  const payload = NewUpdateTaskPayload(taskDTO);
  

  try {
    const data = await updateTask(payload, taskID);
    const taskModel = taskModelFromDTO(data);
    const index = context.tasks.value.findIndex((t) => t.id === taskModel.id);
    if (index !== -1) {
      context.tasks.value[index] = pachedTask;
    }
  } catch (err: any) {
    context.error.value = err.message || "Failed to fetch tasks";
    console.error(err);
  } finally {
    context.isLoading.value = false;
  }
}
