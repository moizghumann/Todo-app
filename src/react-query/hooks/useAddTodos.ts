import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CACHE_TODO_KEY from "../constants";
import { endpoint, Todo } from "./useToDos";


interface AddTodoContext {
    // page of all existing todos, thus array type Todos
    previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
    // this queryClient instance of useQueryClient hook is responsible for interacting with the cache and perform cache updates after a successful mutation.
    const queryClient = useQueryClient();

    // Declare a mutation using the `useMutation` hook.

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        // The mutation function that will be called when adding a new todo
        mutationFn: (todo: Todo) =>
            // Send a POST request to the server to create a new todo
            axios
                .post<Todo>(endpoint + 'todos', todo)
                // Extract the response data from the API response
                .then(res => {
                    console.log('response data:', res);
                    return res.data
                }),

        onMutate: (newTodo) => {


            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_TODO_KEY) || [];
            console.log('previous:', previousTodos)

            const updatedTodos = queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, existingTodos =>
                [newTodo, ...(existingTodos || [])]
            )
            console.group('updated:', updatedTodos);

            return { previousTodos }

        },

        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData(CACHE_TODO_KEY, context.previousTodos);

        },

        // The success callback that will be executed after the mutation is successful
        onSuccess: (savedTodo, newTodo) => {

            queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, todos =>

            (todos?.map(todo => (
                todo === newTodo ? savedTodo : todo
            )))
            );

            onAdd();
        }

    });
}

export default useAddTodo;