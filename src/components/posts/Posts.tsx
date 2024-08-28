'use client';
import * as React from 'react';
import { Post } from '@/types/Post';
import PostCard from './PostCard';

export default function Posts() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  console.log(posts.length);

  React.useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/posts/')
      .then((response) => response.json())
      .then((results) => setPosts(results));
  }, []);

  return (
    <div>
      <div id="posts-container">
        <h1 className="text-3xl">Posts</h1>
      </div>
      <div id="posts-index" className="py-5">
        {posts.length > 0 ? (
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })
        ) : (
          <p>No posts have been created...</p>
        )}
      </div>
    </div>
  );
}
