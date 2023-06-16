import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

const TodoList = () => {

  const fetchToDos = () =>
    axios
      .get<Todo[]>(endpoint + 'todos')
      .then(res => res.data)

  // useQuery is used to ask the magical source to find something specific. 
  const { data: todos } = useQuery({
    // queryKey is used to define what specific thing we need from magical source
    queryKey: ['todos'],
    // queryFn is like a special instruction that tells the magical source how to find the information you want. It's like a map that guides the magical source to the right place.
    queryFn: fetchToDos
  })

  // if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
