import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const endpoint = 'https://jsonplaceholder.typicode.com/';

const usePost = () => {

    // queryfunc to fetch the posts endpoint from api
    const fetchPost = () =>
        axios.get<Post[]>(endpoint + 'posts')
            .then(res => res.data)

    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPost
    })

}

export default usePost