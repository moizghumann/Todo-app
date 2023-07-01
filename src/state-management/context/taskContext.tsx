import { Task, TaskAction } from "../reducers/taskReducer";
import React from "react";

// declaring the shape of data we want from the context
interface TasksContextType {
    tasks: Task[];
    dispatch: React.Dispatch<TaskAction>
}

// createContext taskes one argument containing the initial value of context
// This creates a context object (TasksContext) that holds the initial value of the tasks
// context returns an object of type TasksContextType
// initial value is an empty object {} of type TasksContextType
export const TasksContext = React.createContext<TasksContextType>({} as TasksContextType)