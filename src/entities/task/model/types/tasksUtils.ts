import type { taskDTO, Task, CreateTaskPayload, UpdateTaskPayload } from "./tasksTypes";

export function taskModelFromDTO(dto: taskDTO): Task {
  return {
    id: dto.id,
    version: dto.version,
    title: dto.title,
    description: dto.description,
    completed: dto.completed,
    createdAt: dto.created_at,
    completedAt: dto.completed_at,
    authorId: dto.author_id,
  };
}

export function taskDTOfromModel(model: Task): taskDTO {
  return {
    id: model.id,
    version: model.version,
    title: model.title,
    description: model.description,
    completed: model.completed,
    created_at: model.createdAt,
    completed_at: model.completedAt,
    author_id: model.authorId,
  }
}

export function taskModelsFromDTOs(dtos: taskDTO[]): Task[] {
  return dtos.map(taskModelFromDTO);
}

export function NewUninitializedTask(): Task {
  return {
    id: -1,
    version: -1,
    title: "",
    description: "",
    completed: false,
    createdAt: "",
    completedAt: "",
    authorId: -1,
  };
}

export function NewCreateTaskPayload(dto: taskDTO): CreateTaskPayload {
  return {
    completed: dto.completed,
    description: dto.description,
    title: dto.title,
    author_id: dto.author_id
  };
}


export function NewUpdateTaskPayload(dto: taskDTO): UpdateTaskPayload {
  return {
    title: dto.title,
    description: dto.description,
    completed: dto.completed
  };
}
