import type { taskDTO } from "../types/tasksTypes";

export const mockTasks: taskDTO[]= [
  {
    "id": 1,
    "version": 2,
    "title": "Task For Uliana",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    "completed": true,
    "created_at": "2026-06-23T12:36:33.013767Z",
    "completed_at": "2026-06-23T12:44:34.331944Z",
    "author_id": 1
  },
  {
    "id": 2,
    "version": 1,
    "title": "Fix Popup Layout Issues",
    "description": "The 'user_id' field inside the task creation modal overflows on smaller mobile screens (widths under 360px). Need to make it responsive.",
    "completed": false,
    "created_at": "2026-06-23T13:00:00.000000Z",
    "completed_at": null,
    "author_id": 1
  },
  {
    "id": 3,
    "version": 1,
    "title": "Validate Null Values in Form",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    "completed": false,
    "created_at": "2026-06-23T14:15:22.500000Z",
    "completed_at": null,
    "author_id": 2
  },
  {
    "id": 4,
    "version": 3,
    "title": "Update API Endpoints Documentation",
    "description": "Add new versioning headers parameters into Swagger schema for the POST /tasks endpoint.",
    "completed": true,
    "created_at": "2026-06-22T09:00:10.123456Z",
    "completed_at": "2026-06-22T11:30:45.987654Z",
    "author_id": 3
  },
  {
    "id": 5,
    "version": 1,
    "title": "Code Review: Task Service",
    "description": "Review refactored database queries in the task creation pipeline. Pay attention to concurrent requests handling.",
    "completed": false,
    "created_at": "2026-06-23T16:40:00.000000Z",
    "completed_at": null,
    "author_id": 1
  },
    {
    "id": 1,
    "version": 2,
    "title": "Task For Uliana",
    "description": "Pls could you test the process of task creation\ntest_user_id: 1 \nexmple: task{\n  title: \"name of task\"\n   description: \"description of task\"\n\n}\n\nin the popap of task creation there is a field with  numm values: this is user's ID",
    "completed": true,
    "created_at": "2026-06-23T12:36:33.013767Z",
    "completed_at": "2026-06-23T12:44:34.331944Z",
    "author_id": 1
  },
  {
    "id": 2,
    "version": 1,
    "title": "Fix Popup Layout Issues",
    "description": "The 'user_id' field inside the task creation modal overflows on smaller mobile screens (widths under 360px). Need to make it responsive.",
    "completed": false,
    "created_at": "2026-06-23T13:00:00.000000Z",
    "completed_at": null,
    "author_id": 1
  },
  {
    "id": 3,
    "version": 1,
    "title": "Validate Null Values in Form",
    "description": "Ensure that the user's ID field doesn't accept negative numbers or empty strings before submitting the task creation form.",
    "completed": false,
    "created_at": "2026-06-23T14:15:22.500000Z",
    "completed_at": null,
    "author_id": 2
  },
  {
    "id": 4,
    "version": 3,
    "title": "Update API Endpoints Documentation",
    "description": "Add new versioning headers parameters into Swagger schema for the POST /tasks endpoint.",
    "completed": true,
    "created_at": "2026-06-22T09:00:10.123456Z",
    "completed_at": "2026-06-22T11:30:45.987654Z",
    "author_id": 3
  },
  {
    "id": 5,
    "version": 1,
    "title": "Code Review: Task Service",
    "description": "Review refactored database queries in the task creation pipeline. Pay attention to concurrent requests handling.",
    "completed": false,
    "created_at": "2026-06-23T16:40:00.000000Z",
    "completed_at": null,
    "author_id": 1
  }
];
