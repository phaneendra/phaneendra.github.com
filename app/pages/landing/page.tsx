import { siteMetadata } from '@/config/site-metadata';
import { getLatestPosts } from '~/lib/posts/posts-utils';
import { PageLayout } from '@/components/layout/page-layout';
import { AuthorLocationCard } from '@/components/widgets/author/location-card';
import { BlogListFeature } from '@/components/widgets/blogs/blog-list-feature';
import { Hero } from './hero';

export const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <div className='container mt-8'>
        <div className='grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-4'>
          <div className='col-span-1 w-full md:col-span-2 lg:col-span-3'>
            <div className='grid grid-flow-row gap-2'>
              <BlogListFeature posts={getLatestPosts(8)} />
            </div>
          </div>
          <aside className='w-full'>
            <AuthorLocationCard author={siteMetadata.creator} />
          </aside>
        </div>
      </div>
    </PageLayout>
  );
};
