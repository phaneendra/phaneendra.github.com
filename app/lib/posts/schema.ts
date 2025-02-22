import { z } from 'zod';

export const postsRaw = {
  title: z.string(),
  description: z.string(),
  publishedAt: z.string().date(),
  tags: z.array(z.string()),
};

export const postsSchema = z.object(postsRaw);

export type Post = z.infer<typeof postsSchema>;
