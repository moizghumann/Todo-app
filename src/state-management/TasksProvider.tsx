import { ReactNode, useReducer } from 'react'
import { TasksContext } from './context/taskContext'
import taskReducer from './reducers/taskReducer';

interface Prop {
    children: ReactNode;
}

const TasksProvider = ({ children }: Prop) => {

    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider