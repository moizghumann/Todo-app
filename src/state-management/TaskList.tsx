import { useContext, useReducer } from 'react';
import { TasksContext } from './context/taskContext';
import { AuthContext } from './context/authContext';


const TaskList = () => {
  // accessing the context value
  const context = useContext(TasksContext);
  const { user } = useContext(AuthContext)

  return (
    <>
      {user ? <h5>User: {user}</h5> : <h5>User is not logged in!</h5>}
      <button
        onClick={() =>
          context.dispatch({ type: 'ADD' })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {context.tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                context.dispatch({ type: 'DELETE', id: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
