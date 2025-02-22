import { createFileRoute } from '@tanstack/react-router';
import { BlogListingPage } from '@/pages/blog/listing-page';
import { seo } from '@/lib/utils/seo';

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Blog | TSS Blog Starter',
      }),
    ],
  }),
  component: BlogListingPage,
});
