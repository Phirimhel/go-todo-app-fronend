import type {
  Task,
  TasksStoreContext,
} from "@/entities/task/model/types/types";
import { createTask } from "@/entities/task/model/api/api";
import {
  NewCreateTaskPayload,
  taskDTOfromModel,
  taskModelFromDTO,
} from "@/entities/task/model/types/utils";
import { withAsyncState } from "@/shared/lib/helpers/withAsyncState";

export const createTaskAction = async (
  context: TasksStoreContext,
  createdTask: Task,
) => {
  const taskDTO = taskDTOfromModel(createdTask);
  const payload = NewCreateTaskPayload(taskDTO);
  await withAsyncState(context, async () => {
    const data = await createTask(payload);
    context.tasks.value.push(taskModelFromDTO(data));
  });
};
