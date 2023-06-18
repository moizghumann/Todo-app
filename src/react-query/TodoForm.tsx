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

    // The onSuccess callback is called after the mutation is successfully executed.
    // To access the result of a mutation and perform additional actions, you can use the onSuccess callback
    onSuccess: (newTodo) => {
      // Update the 'todos' data in the query client cache by passing the query key -> ['todos] and the updated data -> [newTodo, ...(todos || [])] to the setQueryData function.
      queryClient.setQueryData<Todo[]>(['todos'], todos => [newTodo, ...(todos || [])])
    }
  });


  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="row mb-3" onSubmit={(event) => {
      event.preventDefault();

      // checking if the input exists, if truthy, only then the mutation is triggered
      if (ref.current && ref.current.value)
        // triggering the mutation with mutate method
        // its argument should be the data you want to send to the server for the mutation.
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
