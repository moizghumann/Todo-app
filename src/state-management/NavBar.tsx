import { useContext, useReducer } from 'react';
import LoginStatus from './LoginStatus';
import { TasksContext } from './context/taskContext';
import loginStatusReducer from './reducers/loginStatusReducer';
import { AuthContext } from './context/authContext';
import useTasks from './hooks/useTasks';
import useCounterStore from './counter/store';

const NavBar = () => {
  const { tasks } = useTasks();
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
