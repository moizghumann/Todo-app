import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

// parameterized queries - Filtering data based on specific parameters in queries.

const usePosts = (userId: number | undefined) => {

    // queryfunc to fetch the posts endpoint from api
    const fetchPost = () =>
        // - The `params` property inside the configuration object allows us to specify query parameters for the request
        // - In this case, we are passing a `userId` parameter to filter the posts by a specific user
        axios.get<Post[]>(endpoint + 'posts', {
            params: {
                userId
            }
        })
            .then(res => res.data)

    // Use the useQuery hook to manage the data fetching and caching
    return useQuery<Post[], Error>({
        queryKey: ['users', userId, 'posts'],  // The query key identifies this specific query
        queryFn: fetchPost  // The function to fetch the data
    })

}

export default usePosts