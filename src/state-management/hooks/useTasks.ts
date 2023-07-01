import { useContext } from "react"
import { TasksContext } from "../context/taskContext"

const useTasks = () => useContext(TasksContext);

export default useTasks;