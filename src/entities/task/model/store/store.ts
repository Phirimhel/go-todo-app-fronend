import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Task, TasksStoreContext } from "../types/types";

import {
  loadTasksAction,
  patchTaskAction,
  createTaskAction,
} from "@/entities/task/model/store/actions/index";

import type { FetchTasksParams } from "../api/api";

export const useTasksStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);
  
  const completedTasks = computed(() => tasks.value.filter((t) => t.completed));
  const activeTasks = computed(() => tasks.value.filter((t) => !t.completed));
  const sortedTasksByIdAndDate = computed(() => [...tasks.value].reverse());

  const context: TasksStoreContext = { tasks, isLoading, error };

  const loadTasks = async (filters: FetchTasksParams) => {
    await loadTasksAction(context, filters);
  };
  const patchTask = async (pachedTask: Task) => {
    await patchTaskAction(context, pachedTask);
  };
  const createTask = async (createdTask: Task) => {
    await createTaskAction(context, createdTask);
  };

  return {
    // State
    tasks,
    isLoading,
    error,
    // Getters
    completedTasks,
    activeTasks,
    sortedTasksByIdAndDate,
    // Actions
    patchTask,
    loadTasks,
    createTask,
  };
});
