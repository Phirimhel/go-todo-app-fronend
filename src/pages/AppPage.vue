<script setup lang="ts">
import AppSidebar from "@/widgets/common/AppSidebar.vue";
import { SidebarProvider } from "@/components/ui/sidebar";
import ModeToggle from "@/widgets/common/ModeToggle.vue";
import TasksWidget from "@/widgets/tasks/TasksWidget.vue";
</script>
<template>
  <SidebarProvider>
    <AppSidebar>
      <template #modeToggle>
        <ModeToggle></ModeToggle>
      </template>
       <template #mainContent>
        <TasksWidget />
      </template>
    </AppSidebar>
  </SidebarProvider>
</template>
