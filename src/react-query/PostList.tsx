import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {

  const [userId, setUserId] = useState<number>()

  const { data: posts, isLoading, error } = usePosts(userId);

  if (isLoading) return <h2>Loading Posts..</h2>

  if (error) return <h2>{error.message}</h2>


  return (
    <>
      <select className="form-select mb-3"
        value={userId} // so the right option gets selected in the next render
        onChange={(event) =>
          setUserId(parseInt(event.target.value))} >
        <option selected value=''>Select Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
