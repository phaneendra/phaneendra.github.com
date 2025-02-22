import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import type { Posts } from '@/lib/posts/posts-utils';
import { getRandomImage } from '@/lib/utils/get-random-image';
import { Badge } from '@/components/ui/badge';

export const BlogListFeature = ({ posts }: { posts: Posts }) => {
  return (
    <div className='flex w-full flex-col gap-8'>
      {/* <div className='flex flex-col items-start gap-4'>
            <div>
              <Badge>Notes</Badge>
            </div> */}
      <div className='flex flex-row justify-between'>
        <h2 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
          Latest Notes !
        </h2>
        <Link
          to='/blog'
          className='flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline'
        >
          See all notes <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
        {/* <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg'>
                See what on my mind today. I am always thinking of something new
                and interesting.
              </p> */}
      </div>
      {/* </div> */}
      <div className='flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
        {posts.map((post, index) => {
          if (index === 0) {
            return (
              <div className='flex flex-col gap-2 rounded-md bg-muted p-2 lg:col-span-2 lg:row-span-2'>
                <Link
                  to='/blog/$slug'
                  params={{ slug: post._meta.path }}
                  key={post._meta.path}
                >
                  <img
                    className='max-h-[160px] w-full rounded-md object-cover md:max-h-[560px]'
                    src={getRandomImage()}
                    alt='/'
                  />
                </Link>
                <div className='flex flex-col items-start gap-3 p-2'>
                  <div className='flex items-center gap-3'>
                    <Badge className='bg-primary/5 text-primary shadow-none hover:bg-primary/5'>
                      Technology
                    </Badge>
                    <span className='text-sm font-semibold text-muted-foreground'>
                      {post.readTime} min read
                    </span>
                  </div>
                  <Link
                    to='/blog/$slug'
                    params={{ slug: post._meta.path }}
                    key={post._meta.path}
                  >
                    <h3 className='line-clamp-2 text-xl tracking-tight'>
                      {post.title}
                    </h3>
                  </Link>
                  <p className='line-clamp-2 text-base text-muted-foreground'>
                    {post.description}
                  </p>
                </div>
              </div>
            );
          } else if (posts.length - 1 === index) {
            return (
              <div className='flex h-full flex-col gap-2 rounded-md bg-muted p-2 lg:col-span-2'>
                <Link
                  to='/blog/$slug'
                  params={{ slug: post._meta.path }}
                  key={post._meta.path}
                >
                  <img
                    className='max-h-[160px] w-full rounded-md object-cover'
                    src={getRandomImage()}
                    alt='/'
                  />
                </Link>
                <div className='flex flex-col items-start gap-3 p-2'>
                  <div className='flex items-center gap-3'>
                    <Badge className='bg-primary/5 text-primary shadow-none hover:bg-primary/5'>
                      Technology
                    </Badge>
                    <span className='text-sm font-semibold text-muted-foreground'>
                      {post.readTime} min read
                    </span>
                  </div>
                  <Link
                    to='/blog/$slug'
                    params={{ slug: post._meta.path }}
                    key={post._meta.path}
                  >
                    <h3 className='line-clamp-2 text-xl tracking-tight'>
                      {post.title}
                    </h3>
                  </Link>
                  <p className='line-clamp-2 text-base text-muted-foreground'>
                    {post.description}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div className='flex flex-col gap-2 rounded-md bg-muted p-2'>
                <Link
                  to='/blog/$slug'
                  params={{ slug: post._meta.path }}
                  key={post._meta.path}
                >
                  <img
                    className='max-h-[160px] w-full rounded-md object-cover'
                    src={getRandomImage()}
                    alt='/'
                  />
                </Link>
                <div className='flex flex-col items-start gap-3 p-2'>
                  <div className='flex items-center gap-3'>
                    <Badge className='bg-primary/5 text-primary shadow-none hover:bg-primary/5'>
                      Technology
                    </Badge>
                    <span className='text-sm font-semibold text-muted-foreground'>
                      {post.readTime} min read
                    </span>
                  </div>
                  <Link
                    to='/blog/$slug'
                    params={{ slug: post._meta.path }}
                    key={post._meta.path}
                  >
                    <h3 className='line-clamp-2 text-xl tracking-tight'>
                      {post.title}
                    </h3>
                  </Link>
                  <p className='line-clamp-2 text-base text-muted-foreground'>
                    {post.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
