import BasePage from '@/components/base_pages/BasePage';
import PostForm from '@/components/posts/PostForm';

export default async function PostsNewPage() {
  return (
    <BasePage>
      <PostForm />
    </BasePage>
  );
}
