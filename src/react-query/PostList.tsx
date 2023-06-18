import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {

  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data: posts, isLoading, error } = usePosts({ page, pageSize });

  if (isLoading) return <h2>Loading Posts..</h2>

  if (error) return <h2>{error.message}</h2>


  return (
    <>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <div className="div my-3">

        <button className="btn btn-primary"
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}>Previous</button>

        <button className="btn btn-primary ms-2"
          disabled={page === 10}
          onClick={() => setPage((page) => page + 1)}>Next</button>
      </div>

      <p>{`Page: ${page}`}</p>
    </>
  );
};

export default PostList;
