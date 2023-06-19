import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { endpoint, Todo } from './TodoList';

const TodoForm = () => {
  // this queryClient instance of useQueryClient hook is responsible for interacting with the cache and perform cache updates after a successful mutation.
  const queryClient = useQueryClient();

  // Declare a new mutation using the `useMutation` hook.
  // The mutation is defined with generic types to specify the data types of the mutation result, error, and inputs
  const addTodo = useMutation<Todo, Error, Todo>({
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
    <>
      {addTodo.error && (
        <div className="alert alert-danger">
          {addTodo.error.message}
        </div>

      )}
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
