import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { endpoint, Todo } from './TodoList';

const TodoForm = () => {

  const queryClient = useQueryClient();

  const addTodo = useMutation({
    // The mutation function that will be called when adding a new todo
    mutationFn: (todo: Todo) =>
      // Send a POST request to the server to create a new todo
      axios
        .post<Todo>(endpoint + 'todos', todo)
        // Extract the response data from the API response
        .then(res => res.data),

    // The success callback that will be executed after the mutation is successful
    onSuccess: (newTodo) => {
      // Update the 'todos' data in the query client cache
      queryClient.setQueryData<Todo[]>(['todos'], todos => [newTodo, ...(todos || [])])
    }
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="row mb-3" onSubmit={(event) => {
      event.preventDefault();

      if (ref.current && ref.current.value)
        addTodo.mutate({
          id: 0,
          userId: 1,
          completed: false,
          title: ref.current?.value
        })
    }}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
