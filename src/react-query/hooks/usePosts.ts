import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PageQuery {
    pageSize: number
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

// parameterized queries - Filtering data based on specific parameters in queries.
const usePosts = (query: PageQuery) => {

    // queryfunc to fetch the posts endpoint from api
    // receives a paramter from getNextPageParam
    // pageParam is exisiting property of the object returned by getNextPageParam, we destructure it to get pageParam property and initially assign it to 1, indicating first page
    const fetchPost = ({ pageParam = 1 }) =>
        // - The `params` property inside the configuration object allows us to specify query parameters for the request, in simple words it allows us to construct our Url
        axios.get<Post[]>(endpoint + 'posts', {
            params: {
                _start: pageParam,
                _limit: query.pageSize
            }
        })
            .then(res => res.data)

    // Use the useQuery hook to manage the data fetching and caching
    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', query],  // The query key identifies this specific query, also acts like a list of dependencies
        // receives a paramter from getNextPageParam
        queryFn: fetchPost,  // The function to fetch the data
        keepPreviousData: true,  // our page shows previous existing query while the new one is being fetched, using keepPreviousData = true avoids the page bounce between the states of loading and succeed
        staleTime: 4 * 1000,
        // gets called when fetchNextPage is called
        // returns an object to queryFunc
        getNextPageParam(lastPage, allPages) {
            // lastPage.length -> no of items in existing page
            // allPages -> allPages parameter refers to an array that contains all the pages of data fetched so far. 
            // for example, if you have fetched 3 pages of data, allPages will be an array with 3 elements, where each element represents a page and contains the corresponding items.
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    })

}

export default usePosts