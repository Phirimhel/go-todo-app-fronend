import { httpClient, getErrorMessage } from "@/shared/axios";
import type { taskDTO, CreateTaskPayload, UpdateTaskPayload } from "../types/types";

export interface FetchTasksParams {
  limit?: number;
  offset?: number;
  author_id?: number;
}

export const fetchTasks = async (
  filters: FetchTasksParams = {},
): Promise<taskDTO[]> => {
  try {
    const { data } = await httpClient.get("/tasks", {
      params: filters,
    });

    return data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const createTask = async (
  payload: CreateTaskPayload,
): Promise<taskDTO> => {
  try {
    const response = await httpClient.post<taskDTO>("/tasks", payload);

    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const updateTask = async (
  payload: UpdateTaskPayload,
  id: number,
): Promise<taskDTO> => {
  try {
    const response = await httpClient.patch<taskDTO>(`/tasks/${id}` , payload);

    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};


export const deleteTask = async (
  id: number,
): Promise<void> => {
  try {
    await httpClient.delete<void>(`/tasks/${id}`);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
