<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { GalleryVerticalEnd, CheckSquare, Users, BarChart3 } from "@lucide/vue";

const menuItems = [
  { title: "Tasks", url: "#", icon: CheckSquare },
  { title: "Users", url: "#", icon: Users },
  { title: "Statisitics", url: "#", icon: BarChart3 },
];
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Go todoapp</span>
                <span class="truncate text-xs">Prodaction v1.12</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="menuItem in menuItems">
                <SidebarMenuButton as-child>
                  <a :href="menuItem.url">
                    <component :is="menuItem.icon" />
                    <span>{{ menuItem.title }}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
        </div>
        <div class="ml-auto flex items-center gap-2 px-4">
          <slot name="modeToggle"></slot>
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div class="flex items-center gap-10 px-4 pt-4">
            <slot name="mainContent"></slot>
          </div>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
