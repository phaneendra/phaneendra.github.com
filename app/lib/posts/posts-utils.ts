import { allPosts, Post } from 'content-collections';

export const sortedPosts = allPosts.sort(
  (a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);

export type Posts = typeof allPosts;

export const getTagsWithCount = (posts: Posts) =>
  posts.reduce((acc: any, post: Post) => {
    post.tags?.forEach((tag: string) => {
      if (acc[tag]) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

export const getPostBySlug = (slug: string) =>
  allPosts.find((post) => post._meta.path === slug);

export const getPostsByTag = (tag: string) =>
  allPosts.filter((post) => post.tags?.includes(tag));

export const getRelatedPosts = (post: Post) =>
  allPosts.filter(
    (p) =>
      p._meta.path !== post._meta.path &&
      p.tags.some((tag) => post.tags.includes(tag))
  );

export const getLatestPosts = (limit: number) =>
  sortedPosts.filter((post) => post.status === 'published').slice(0, limit);
