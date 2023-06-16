import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

const useToDos = () => {

    const fetchToDos = () =>
        axios
            .get<Todo[]>(endpoint + 'todos')
            .then(res => res.data)
    // no catch here because we are handling error with useQuery

    // useQuery is used to ask the magical source to find something specific.
    return useQuery<Todo[], Error>({
        // queryKey is used to define what specific thing we need from magical source
        queryKey: ['todos'],
        // queryFn is like a special instruction that tells the magical source how to find the information you want. It's like a map that guides the magical source to the right place.
        queryFn: fetchToDos
    });
}

export default useToDos