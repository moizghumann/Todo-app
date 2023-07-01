
export interface TaskAction {
    type: 'ADD' | 'DELETE';
    id?: number;
}

export interface Task {
    id: number;
    title: string;
}

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [{ id: Date.now(), title: 'Task ' + Date.now() }, ...tasks]
        case 'DELETE':
            return tasks.filter(task => task.id !== action.id)
        default:
            return tasks
    }
}

export default taskReducer;