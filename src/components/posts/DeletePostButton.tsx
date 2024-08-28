'use client';

import { Post } from '@/types/Post';
import { useVisibility } from '@/util_hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

interface IDeletePostButton {
  post: Post;
}

export default function DeletePostButton({ post }: IDeletePostButton) {
  const { isVisible, setClose, setOpen } = useVisibility();
  const router = useRouter();

  function deletePost() {
    fetch(`http://127.0.0.1:3000/api/v1/posts/${post.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if ([200, 204].includes(response.status)) {
        close();
        router.replace('/posts');
      } else {
        close();
        console.log(response);
        alert('Failed to delete post');
      }
    });
  }

  return (
    <>
      <button
        id="post-card-delete-button"
        className="py-1 px-3 text-sm bg-rose-900 rounded-lg hover:bg-rose-950"
        onClick={setOpen}
      >
        Delete
      </button>

      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="bg-slate-500 p-6 rounded-3xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Delete Post</h2>
            <p className="mb-6">
              Are you sure you want to delete the post{' '}
              <strong>{post.title}</strong>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={setClose}
                className="bg-slate-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
              <button
                onClick={deletePost}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
