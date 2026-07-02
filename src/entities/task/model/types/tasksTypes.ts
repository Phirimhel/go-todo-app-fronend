import type {Ref} from "vue"

export interface Task {
  id: number;
  version: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  completedAt: string | null;
  authorId: number;
}

export interface taskDTO {
  id: number;
  version: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  completed_at: string | null;
  author_id: number;
}

export const NEW_TASK_ID = -1;

export type CreateTaskPayload =
  Omit<taskDTO, 'id' | 'version' | 'created_at' |'completed_at' >;


export type UpdateTaskPayload =
  Omit<taskDTO, 'id' | 'version' | 'created_at' |'completed_at' |'author_id'  >;

export interface TasksStoreContext {
  tasks: Ref<Task[]>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
}


