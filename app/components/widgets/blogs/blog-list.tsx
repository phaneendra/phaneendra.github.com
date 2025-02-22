import { Link } from '@tanstack/react-router';
import { Check, User } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import type { Posts } from '~/lib/posts/posts-utils';
import { formatDate } from '@/lib/utils/format-date';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function BlogList({ posts }: { posts: Posts }) {
  return (
    <ul className='my-8 gap-4'>
      {posts.map((post) => (
        <Link
          to='/blog/$slug'
          params={{ slug: post._meta.path }}
          key={post._meta.path}
          className='mb-4 flex flex-col space-y-1'
        >
          <div className='flex w-full flex-col space-x-0 md:flex-row md:space-x-2'>
            <p className='tabular-nums text-muted-foreground'>
              {formatDate(post.publishedDate)}
            </p>
            <p className='tracking-tight'>{post.title}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
}
