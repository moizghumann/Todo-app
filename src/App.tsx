import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import AuthProvider from './state-management/AuthProvider';
import TasksProvider from './state-management/TasksProvider';
import Counter from './state-management/counter/Counter';

function App() {

  return (
    <>
      <Counter />
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </AuthProvider>
    </>
  )
}

export default App;
