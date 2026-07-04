import type {
  Task,
  TasksStoreContext,
} from "@/entities/task/model/types/types";
import { updateTask } from "@/entities/task/model/api/api";
import {
  NewUpdateTaskPayload,
  taskDTOfromModel,
  taskModelFromDTO,
} from "@/entities/task/model/types/utils";
import { withAsyncState } from "@/shared/lib/helpers/withAsyncState";

export const patchTaskAction = async (
  context: TasksStoreContext,
  pachedTask: Task,
) => {
  const taskID = pachedTask.id;
  const taskDTO = taskDTOfromModel(pachedTask);
  const payload = NewUpdateTaskPayload(taskDTO);

  await withAsyncState(context, async () => {
    const data = await updateTask(payload, taskID);
    const taskModel = taskModelFromDTO(data);
    const index = context.tasks.value.findIndex((t) => t.id === taskModel.id);
     if (index !== -1) {
      context.tasks.value[index] = pachedTask;
    }
  });
};
