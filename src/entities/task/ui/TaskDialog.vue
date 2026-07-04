<!-- src/shared/TaskDialog.vue -->
<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Task } from "../model/types/types";
import { NEW_TASK_ID } from "@/entities/task/model/types/types";
import { computed, ref } from "vue";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const props = defineProps<{
  open: boolean;
  task: Task;
  isEdit: boolean;
}>();

const title = ref<string>(props.task.title);
const description = ref<string>(props.task.description);
const isEdit = ref<boolean>(props.isEdit);
const isNewTask = computed(() => props.task.id === NEW_TASK_ID);

const handleSubmit = () => {
  if (isNewTask.value) {
    create();
  } else {
    update();
  }
};

const complete = () => {
  const now = new Date().toISOString();
  emit("update", {
    ...props.task,
    title: title.value,
    description: description.value,
    completed: true,
    completedAt: now,
  });
  isEdit.value = false;
};

const update = () => {
  emit("update", {
    ...props.task,
    title: title.value,
    description: description.value,
  });
  isEdit.value = false;
};

const create = () => {
  const now = new Date().toISOString();
  emit("create", {
    ...props.task,
    title: title.value,
    authorId: 1,
    description: description.value,
    createdAt: now
  });
  isEdit.value = false;
};

const emit = defineEmits(["update:open", "update", "create"]);
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <template v-if="isNewTask">Create New Task</template>
          <template v-else-if="isEdit">Edit Task</template>
          <template v-else>{{ task.title }}</template>
        </DialogTitle>

        <h3 v-if="isEdit" class="font-medium mb-2">Title</h3>
        <Input v-if="isEdit" v-model="title" />

        <DialogDescription v-if="!isNewTask"
          >Task #{{ task?.id }}</DialogDescription
        >
      </DialogHeader>

      <div class="space-y-6 py-4">
        <div>
          <h3 class="font-medium mb-2">Description</h3>

          <p v-if="!isEdit" class="whitespace-pre-wrap text-muted-foreground">
            {{ task.description }}
          </p>

          <Textarea
            v-else
            v-model="description"
            class="w-full border rounded p-2"
            rows="5"
          />
        </div>

    
        <div v-if="isNewTask">
          <h3 class="font-medium mb-2">Chose user</h3>
          // user id
          <slot name="userList"></slot>
        </div>

        <div v-if="!isNewTask" class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-muted-foreground">Status:</span>
            <Badge
              :variant="task?.completed ? 'success' : 'destructive'"
              class="ml-2"
            >
              {{ task?.completed ? "Completed" : "In Progress" }}
            </Badge>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-2">
        <Button v-if="!isEdit" variant="outline" @click="isEdit = true">
          Edit
        </Button>
        <Button v-else @click="handleSubmit">
          {{ isNewTask ? "Create" : "Save" }}
        </Button>

        <Button v-if="!task.completed && !isEdit" @click="complete">
          Complete
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>
