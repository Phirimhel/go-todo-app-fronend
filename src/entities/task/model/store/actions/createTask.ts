import type {
  Task,
  TasksStoreContext,
} from "@/entities/task/model/types/tasksTypes";
import { createTask } from "@/entities/task/model/api/tasksApi";
import {
  NewCreateTaskPayload,
  taskDTOfromModel,
  taskModelFromDTO,
} from "@/entities/task/model/types/tasksUtils";

export async function createTaskAction(
  context: TasksStoreContext,
  createdTask: Task,
) {
  const taskDTO = taskDTOfromModel(createdTask);
  const payload = NewCreateTaskPayload(taskDTO);

  try {
    const data = await createTask(payload);
    context.tasks.value.push(taskModelFromDTO(data));
  } catch (err: any) {
    context.error.value = err.message || "Failed to fetch tasks";
    console.error(err);
  } finally {
    context.isLoading.value = false;
  }
}
