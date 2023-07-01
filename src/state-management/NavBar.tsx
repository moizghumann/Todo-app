import { useContext, useReducer } from 'react';
import LoginStatus from './LoginStatus';
import { TasksContext } from './context/taskContext';
import loginStatusReducer from './reducers/loginStatusReducer';
import { AuthContext } from './context/authContext';
import useTasks from './hooks/useTasks';

const NavBar = () => {
  const { tasks } = useTasks();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
