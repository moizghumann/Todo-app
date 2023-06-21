import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CACHE_TODO_KEY from "../constants";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export const endpoint = 'https://jsonplaceholder.typicode.com/' as const

const fetchToDos = () =>
    axios
        .get<Todo[]>(endpoint + 'todos')
        .then(res => res.data)


const useToDos = () => {
    // no catch here because we are handling error with useQuery

    // useQuery is used to ask the magical source to find something specific.
    return useQuery<Todo[], Error>({
        // queryKey is used to define what specific thing we need from magical source
        queryKey: CACHE_TODO_KEY,
        // queryFn is like a special instruction that tells the magical source how to find the information you want. It's like a map that guides the magical source to the right place.
        queryFn: fetchToDos,
        // we can customise query's behaviour in useQuery hook as well
        staleTime: 5 * 1000,
        keepPreviousData: true,

    });
}

export default useToDos