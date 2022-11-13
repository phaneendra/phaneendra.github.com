import Link from 'src/components/Link';
import PageTitle from 'src/components/PageTitle';
import SectionContainer from 'src/components/SectionContainer';
import { BlogSEO } from 'src/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import formatDate from 'src/lib/utils/formatDate';
import Comments from 'src/components/comments';
import ScrollTopAndComment from 'src/components/ScrollTopAndComment';
import { ReactNode } from 'react';
import { PostFrontMatter } from 'src/types/PostFrontMatter';

interface Props {
  frontMatter: PostFrontMatter;
  children: ReactNode;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function PostLayout({ frontMatter, next, prev, children }: Props) {
  const { slug, date, title } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-border-color pb-10 text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-base-muted">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-border-color pb-8 xl:divide-y-0 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="divide-y divide-border-color xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="dark:prose-dark prose max-w-none pt-10 pb-8">{children}</div>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link href={`/blog/${prev.slug}`} className="text-primary hover:text-primary-focus">
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link href={`/blog/${next.slug}`} className="text-primary hover:text-primary-focus">
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
