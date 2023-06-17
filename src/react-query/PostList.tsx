import axios from 'axios';
import { useEffect, useState } from 'react';
import usePosts from './hooks/usePosts';
import usePost from './hooks/usePosts';


const PostList = () => {

  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <h2>Loading Posts..</h2>

  if (error) return <h2>{error.message}</h2>


  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
