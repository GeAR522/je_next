import BasePage from '@/components/base_pages/BasePage';
import PostCard from '@/components/posts/PostCard';

export default async function PostsShowPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetch(`http://127.0.0.1:3000/api/v1/posts/${params.id}`)
    .then((response) => response.json())
    .then((results) => {
      return results;
    });

  return (
    <BasePage>
      <PostCard post={post} />
    </BasePage>
  );
}
