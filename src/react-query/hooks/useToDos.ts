import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";
import CACHE_TODO_KEY from "../constants";


// useQuery is used to ask the magical source to find something specific.
const useToDos = () => useQuery<Todo[], Error>({
    // queryKey is used to define what specific thing we need from magical source
    queryKey: CACHE_TODO_KEY,
    // queryFn is like a special instruction that tells the magical source how to find the information you want. It's like a map that guides the magical source to the right place.
    queryFn: todoService.getAll,
    // we can customise query's behaviour in useQuery hook as well
    staleTime: 5 * 1000,
    keepPreviousData: true,

});

export default useToDos