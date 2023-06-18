import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PageQuery {
    page: number,
    pageSize: number
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

// parameterized queries - Filtering data based on specific parameters in queries.
const usePosts = (query: PageQuery) => {

    // queryfunc to fetch the posts endpoint from api
    const fetchPost = () =>
        // - The `params` property inside the configuration object allows us to specify query parameters for the request
        // - In this case, we are passing a `userId` parameter to filter the posts by a specific user
        axios.get<Post[]>(endpoint + 'posts', {
            params: {
                _page: query.page,
                _pageSize: query.pageSize
            }
        })
            .then(res => res.data)

    // Use the useQuery hook to manage the data fetching and caching
    return useQuery<Post[], Error>({
        queryKey: ['posts', query],  // The query key identifies this specific query
        queryFn: fetchPost,  // The function to fetch the data
        keepPreviousData: true  // our page shows previous existing query while the new one is being fetched
    })

}

export default usePosts