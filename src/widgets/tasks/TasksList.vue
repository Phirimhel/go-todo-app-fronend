<script setup lang="ts">
import TaskItem from "@/entities/task/ui/TaskItem.vue";
import type { Task } from "@/entities/task/model/types/tasksTypes";

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: "open-task", task: Task): void;
  (e: "update", task: Task): void;
}>();
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full items-stretch"
  >
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @select="emit('open-task', $event)"
      @update="emit('update', $event)"
    />
  </div>
</template>
