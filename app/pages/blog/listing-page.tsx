import { sortedPosts } from '@/lib/posts/posts-utils';
import { PageLayout } from '@/components/layout/page-layout';
import { BlogList } from '@/components/widgets/blogs/blog-list';

export const BlogListingPage = () => {
  return (
    <PageLayout>
      <section>
        <h3 className='font-heading mb-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
          My Blog
        </h3>
        <BlogList posts={sortedPosts} />
      </section>
    </PageLayout>
  );
};
