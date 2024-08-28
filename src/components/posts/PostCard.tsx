import React from 'react';
import { Post } from '@/types/Post';
import Link from 'next/link';
import DeletePostButton from './DeletePostButton';

interface IPost {
  post: Post;
}

export default function PostCard({ post }: IPost) {
  return (
    <div
      id="post-card"
      className="flex flex-col my-5 border border-solid border-slate-400 rounded-lg bg-slate-600 px-4"
    >
      <div id="post-container" className="flex flex-col py-3">
        <div id="post-header" className="flex flex-row justify-between">
          <Link href={`/posts/${post.id}`}>
            <h1 id="post-title" className="text-2xl">
              {post.title}
            </h1>
          </Link>
          <div id="post-card-buttons">
            <Link href={`/posts/${post.id}/update`}>
              <button
                id="post-card-edit-button"
                className="py-1 px-3 mr-2 text-sm bg-slate-400 rounded-lg hover:bg-slate-500"
              >
                Edit
              </button>
            </Link>
            <DeletePostButton post={post} />
          </div>
        </div>

        <div id="post-content" className="py-3">
          {post.content}
        </div>
      </div>
    </div>
  );
}
