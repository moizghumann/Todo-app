import { useReducer } from 'react';
import './App.css';
import loginStatusReducer from './state-management/reducers/loginStatusReducer';
import { TasksContext } from './state-management/context/taskContext';
import taskReducer from './state-management/reducers/taskReducer';

import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { AuthContext } from './state-management/context/authContext';

function App() {

  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [user, authDispatch] = useReducer(loginStatusReducer, '')

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider>
    </>

  )
}

export default App;
