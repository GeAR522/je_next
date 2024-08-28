'use client';

import { Post } from '@/types/Post';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

interface IPostForm {
  post?: Post;
}

export default function PostForm({ post }: IPostForm) {
  const [title, setTitle] = React.useState(post?.title || '');
  const [content, setContent] = React.useState(post?.content || '');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch('http://127.0.0.1:3000/api/v1/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }).then(async (response) => {
      if ([200, 201].includes(response.status)) {
        const post: Post = await response.json();
        router.replace(`/posts/${post.id}`);
      } else {
        alert('Failed to create post');
        console.log(response);
      }
    });
  }

  return (
    <div
      id="post-form"
      className="flex flex-col border border-solid border-slate-400 rounded-lg px-7 pb-6 bg-slate-500 max-w"
    >
      <div id="post-form-container" className="my-5 flex flex-col">
        <div id="post-form-header">
          <h1 id="post-form-create-a-post" className="text-3xl">
            Create a Post
          </h1>
        </div>
      </div>

      <div id="post-form-content">
        <form id="post-form" onSubmit={handleSubmit}>
          <div id="post-form-title-input" className="py-4">
            <label htmlFor="post-form-title">Title</label>
            <input
              type="text"
              id="post-form-title"
              name="title"
              placeholder="Post Title..."
              className="w-full p-2 border-solid rounded-lg text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="post-form-content-input" className="py-4">
            <label htmlFor="post-form-content">Content</label>
            <textarea
              rows={5}
              id="post-form-content"
              name="content"
              placeholder="Post Content..."
              className="w-full p-2 border-solid rounded-lg text-black"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            type="submit"
            id="post-form-submit"
            className="bg-gray-700 hover:bg-slate-800 px-5 py-2 rounded-lg text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
