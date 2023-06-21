import { useRef } from 'react';
import useAddTodo from './hooks/useAddTodos';



const TodoForm = () => {

  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current) return ref.current.value = '';
  });

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

          <button className="btn btn-primary">
            {addTodo.isLoading ?
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only"></span>
              </div> :
              'Add'}
          </button>

        </div>
      </form>
    </>
  )
};

export default TodoForm

// Wait for a short delay to allow the cache to be updated
      // await new Promise(resolve => setTimeout(resolve, 100));

      // // Refetch the 'todos' query to update the cache with the latest data from the server
      // queryClient.refetchQueries(['todos']);