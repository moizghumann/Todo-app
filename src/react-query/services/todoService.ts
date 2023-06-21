import ApiClient from "./api-client";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export default new ApiClient<Todo>('/todos');