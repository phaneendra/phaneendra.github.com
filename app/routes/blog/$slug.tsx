import { createFileRoute, redirect } from '@tanstack/react-router';
import { BlogPage } from '@/pages/blog/blog-page';
import { allPosts } from 'content-collections';
import { seo } from '@/lib/utils/seo';

export const Route = createFileRoute('/blog/$slug')({
  beforeLoad: () => ({
    allPosts,
  }),
  loader: async ({ params, context: { allPosts } }) => {
    const slug = params.slug;
    const post = allPosts.find((post) => post._meta.path === slug);
    if (!post) {
      throw redirect({
        to: '/blog',
      });
    }

    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          ...seo({
            title: `${loaderData?.post.title} | TSS Blog Starter`,
            description: loaderData?.post.description,
          }),
        ]
      : [],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return <BlogPage post={post} />;
}
