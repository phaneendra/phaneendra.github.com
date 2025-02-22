import { Link } from '@tanstack/react-router';
import { Post } from 'content-collections';
import { ChevronLeft } from 'lucide-react';
import { PageLayout } from '~/components/layout/page-layout';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils/format-date';
import { buttonVariants } from '@/components/ui/button';
import { Mdx } from '@/components/widgets/mdx/mdx-components';

export const BlogPage = ({ post }: { post: Post }) => {
  return (
    <PageLayout>
      <section className=''>
        <article className='container relative max-w-3xl'>
          <Link
            to='/blog'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'top-30 absolute left-[-200px] hidden xl:inline-flex'
            )}
          >
            <ChevronLeft className='mr-2 h-4 w-4' />
            See all posts
          </Link>
          {/* TODO:  */}
          {/* <div className="hidden text-sm xl:block"> */}
          {/*   <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"> */}
          {/*     <TableOfContents toc={toc} /> */}
          {/*   </div> */}
          {/* </div> */}
          <div>
            {post.publishedDate && (
              <time
                dateTime={post.publishedDate}
                className='block text-sm text-muted-foreground'
              >
                Published on {formatDate(post.publishedDate)}
              </time>
            )}
            <h1 className='font-heading my-4 inline-block text-4xl leading-tight lg:text-5xl'>
              {post.title}
            </h1>
          </div>
          <Mdx code={post.mdx} />
          <hr className='mt-12' />

          <div className='flex justify-center py-6 lg:py-10'>
            <Link
              to='/blog'
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <ChevronLeft className='mr-2 h-4 w-4' />
              See all posts
            </Link>
          </div>
        </article>
      </section>
    </PageLayout>
  );
};
