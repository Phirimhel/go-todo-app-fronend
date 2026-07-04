<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import TasksList from "./TasksList.vue";
import TaskDialog from "@/entities/task/ui/TaskDialog.vue";
import type { Task } from "@/entities/task/model/types/types.ts";
import { NewUninitializedTask } from "@/entities/task/model/types/utils.ts";
import Button from "@/components/ui/button/Button.vue";
import { useTasksStore } from "@/entities/task/model/store/store.ts";

const tasksStore = useTasksStore();

onMounted(() => {
  tasksStore.loadTasks({
    limit: undefined,
    offset: undefined,
    author_id: undefined,
  });
});

const isDialogOpen = ref<boolean>(false);
const selectedTask = ref<Task | null>(null);
const isEditMode = ref<boolean>(false);

const handleOpenModal = (task: Task) => {
  selectedTask.value = task;
  isDialogOpen.value = true;
};

const handleCreate = (createdTask: Task) => {
  tasksStore.createTask(createdTask);
  isDialogOpen.value = false;
};

const handleUpdate = (pachedTask: Task) => {
  tasksStore.patchTask(pachedTask)
  selectedTask.value = pachedTask;
  isDialogOpen.value = true;
};

watch(isDialogOpen, (newValue) => {
  if (!newValue) {
    selectedTask.value = null;
    isEditMode.value = false;
  }
});
</script>

<template>
  <div class="w-full min-w-0">
    <div class="p-4 md:p-6 w-full mx-auto max-w-[1600px] flex flex-col">
      <div class="flex items-center justify-between mb-6 shrink-0">
        <h2 class="text-2xl font-semibold tracking-tight">Tasks</h2>
        <Button
          size="sm"
          @click="
            isEditMode = true;
            handleOpenModal(NewUninitializedTask());
          "
        >
          + New Task
        </Button>
      </div>

      <div class="w-full items-stretch">
        <TasksList
          :tasks="tasksStore.sortedTasksByIdAndDate"
          @open-task="handleOpenModal"
          @update="handleUpdate"
        />
      </div>
    </div>
  </div>

  <TaskDialog
    v-if="selectedTask"
    v-model:open="isDialogOpen"
    :task="selectedTask"
    :is-edit="isEditMode"
    @update="handleUpdate"
    @create="handleCreate"
  />
</template>
