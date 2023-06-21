import useToDos from './hooks/useToDos';


const TodoList = () => {

  const { data: todos, isLoading, error } = useToDos();

  if (isLoading) return <p>Loading..</p>

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {/* todos can be undefined, thus the optional question mark */}
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};


export default TodoList;
