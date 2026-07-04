<script setup lang="ts">
import { computed } from "vue"; // 1. Импортируем computed
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Task } from "@/entities/task/model/types/types";

const props = defineProps<{
  task: Task;
}>();

const update = () => {
  emit("update", {
    ...props.task,
    completed: !props.task.completed,
    completedAt: new Date().toISOString(),
  });
};

const select = () => {
  emit("select", props.task);
};

const formattedCreatedDate = computed(() => {
  return new Date(props.task.createdAt).toLocaleDateString();
});

const formattedCompletedDate = computed(() => {
  if (!props.task.completedAt) return "";
  return new Date(props.task.completedAt).toLocaleDateString();
});

const emit = defineEmits(["update", "select"]);
</script>

<template>
  <Card class="w-full h-full flex flex-col justify-between min-w-0">
    <CardHeader class="space-y-4">
      <div class="flex items-start justify-between gap-2 min-w-0">
        <div class="space-y-1 min-w-0 flex-1">
          <CardTitle class="text-base font-semibold leading-tight break-words">
            {{ task.title }}
          </CardTitle>
          <CardDescription
            class="text-sm text-muted-foreground line-clamp-3 break-words"
          >
            {{ task.description }}
          </CardDescription>
        </div>
        <Badge
          :variant="task.completed ? 'success' : 'destructive'"
          class="shrink-0 whitespace-nowrap"
        >
          {{ task.completed ? "Completed" : "In Progress" }}
        </Badge>
      </div>
    </CardHeader>

    <CardContent class="mt-auto">
      <div class="space-y-1.5 text-xs text-muted-foreground">
        <p>
          <span class="font-medium text-foreground">Created:</span>
          {{ formattedCreatedDate }}
        </p>
        <p v-if="task.completedAt">
          <span class="font-medium text-foreground">Completed:</span>
          {{ formattedCompletedDate }}
        </p>
        <p>
          <span class="font-medium text-foreground">Author ID:</span>
          {{ task.authorId }}
        </p>
      </div>
    </CardContent>

    <CardFooter class="flex justify-end gap-2 pt-4 shrink-0">
      <Button variant="outline" size="sm" class="h-8" @click="select">
        Open
      </Button>
      <Button
        :variant="task.completed ? 'outline' : 'default'"
        size="sm"
        class="h-8"
        @click="update"
      >
        {{ task.completed ? "Mark incompleted": "Completed"  }}
      </Button>
    </CardFooter>
  </Card>
</template>
