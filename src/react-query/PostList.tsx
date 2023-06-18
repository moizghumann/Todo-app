import React from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {

  const pageSize = 10;

  const { data: posts, isLoading, error, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

  if (isLoading) return <h2>Loading Posts..</h2>

  if (error) return <h2>{error.message}</h2>


  return (
    <>

      <ul className="list-group">
        {posts.pages.map((post, index) => (
          <React.Fragment key={index}>
            {post.map(item =>
              <li key={item.id}
                className='list-group-item'>
                {item.title}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className="div my-3">

        <button className="btn btn-primary"
          disabled={isFetchingNextPage}
          // fetchNextPage calls GetNextPageParam function
          onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading..' : 'Load More'}
        </button>
      </div>
    </>
  );
};

export default PostList;
