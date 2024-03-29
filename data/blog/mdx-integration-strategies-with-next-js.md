[![Tyler Smith](https://res.cloudinary.com/practicaldev/image/fetch/s--dIlmHGlR--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/68031/18f40970-4f6b-403a-b5bd-3f469a206080.jpeg)](https://dev.to/tylerlwsmith)

[Tyler Smith](https://dev.to/tylerlwsmith)

Posted on 3 Aug 2021 • Updated on 14 Dec 2021

I wanted to use MDX files on my Next.js site, but I discovered that there are a lot of ways to implement MDX with Next. Since I spent a whole day reviewing these options, I wanted to write down what I learned in case I ever need to revisit this decision in the future.

I learned from [Joshua Comeau's blog post](https://www.joshwcomeau.com/blog/how-i-built-my-blog/) that there are four popular packages for accomplishing this. Here are the options that Joshua presents:

1.  The official way, with [@next/mdx](https://www.npmjs.com/package/@next/mdx)
2.  Hashicorp's [next-mdx-enhanced](https://github.com/hashicorp/next-mdx-enhanced)
3.  Hashicorp's [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
4.  Kent C Dodds' [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)

## [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#vercels-nextmdx)Vercel's @next/mdx

The [@next/mdx](https://www.npmjs.com/package/@next/mdx) package is Vercel's (the organization behind Next.js) official way of using MDX with Next.js. To add it to your project, you install it then wrap your `next.config.js` object in in a `withMDX` function and tell next to accept MDX page extensions. Next will then be able to process MDX as a page or as a React component.

```
// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  /** Tell Next that it should render MDX files as page if they're in the page directory. */
  pageExtensions: ["js", "jsx", "mdx"],
};

/** Wrap the config so it can add all of the necessary configuration to process MDX iles. */
module.exports = withMDX(nextConfig);
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdx-pros)@next/mdx Pros:

You can import ad hoc components in your MDX files without issue. In some other packages, you can't do imports within the MDX file itself.

```
// content/some-file.mdx
import Button from "../components/Button";

# This is my markdown file

I can import components and use them like this <Button>button</Button>.
```

Enter fullscreen mode Exit fullscreen mode

You can import MDX files and use them like React components with very little friction.

```
// pages/index.js
import { PageLayout } from "../components/PageLayout.mdx";
import HomepageMDX, { author } from "../content/Homepage.mdx";

export default function Homepage() {
  return (
    <PageLayout author={author}>
      {/** We can use MDX files as components */}
      <HomepageMDX />
    </PageLayout>
  );
}
```

Enter fullscreen mode Exit fullscreen mode

You can also put MDX files directly in your `pages/` directory. If you do this, you'll likely want to wrap the page in some kind of layout. You can do that by exporting a default function that accepts your MDX content as children and other exported values as props.

```
// pages/index.mdx
import PageLayout from "../components/PageLayout";

# Homepage

This is my homepage.

// You can wrap the page in a component by making the default export a function.
export default ({ children }) => <PageLayout author={author} children={children} />;
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdx-cons)@next/mdx Cons:

Unfortunately, `@next/mdx` doesn't support frontmatter. You can export data with standard ES6 `export` syntax, but feels awkward.

```
// pages/exports-are-awkward.mdx
import PageLayout from "../components/PageLayout";

export const author="Tyler Smith";
export const date="2021-07-14"

# Exports are awkward

Just look at them.

export default ({ author, date, children }) => (
  <PageLayout author={author} date={date} children={children} />
);

// If you're importing MDX as a component to another file, it would look like:
// import Content, { author, date } from "../content/exports-are-awkward.mdx";

```

Enter fullscreen mode Exit fullscreen mode

The [Emotion.js](https://emotion.sh/docs/introduction) Babel loader doesn't seem to work with `@next/mdx`. When using the Babel configuration from [the official Next.js Emotion example](https://github.com/vercel/next.js/tree/master/examples/with-emotion), you get an error that says `SyntaxError: importSource cannot be set when runtime is classic`. I believe that this problem is from `@next/mdx` using an older version of React's runtime than Emotion is using and that it is not an issue with Emotion itself. [There is an open issue discussing this on the MDX GitHub](https://github.com/mdx-js/mdx/issues/1441).

At the time of writing this (August 2021), TypeScript support is not implemented on the underlying `@mdx-js/loader` package. The docs say that TypeScript is supported, but the link to `@mdx-js` docs for [@mdx-js v2.0.0-next.9](https://mdxjs.com/advanced/typescript) instead of the current 1.6.22 version. However, it will be supported in the version 2.0 release.

The official [@next/mdx docs](https://www.npmjs.com/package/@next/mdx) are lacking. They don't even show how to wrap your page in a component; I found that in a [Lee Robinson post on the Next.js blog](https://nextjs.org/blog/markdown#sharing-layout).

Finally, all the MDX must be from MDX files within the project: you can't render MDX that is stored in a database.

## [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#hashicorps-nextmdxenhanced)Hashicorp's next-mdx-enhanced

**First and foremost: this project is no longer maintained and doesn't work with Next.js 11 ([GitHub issue](https://github.com/hashicorp/next-mdx-enhanced/issues/103)). The [next-mdx-enhanced](https://github.com/hashicorp/next-mdx-enhanced) package is similar to `@next/mdx` but with more features.**

Like `@next/mdx`, you add [next-mdx-enhanced  
](https://github.com/hashicorp/next-mdx-enhanced)to the project by exporting a function in the project's `next.config.js` file.

```
// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
})(/* your normal nextjs config */);
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdxenhanced-pros)next-mdx-enhanced Pros:

The `next-mdx-enhanced` plugin supports frontmatter.

```
---
# pages/index.mdx

layout: PageLayout
title: "Homepage"
---

This is my homepage.
```

Enter fullscreen mode Exit fullscreen mode

It also supports defining a layout within the frontmatter as seen in the example above. By default, these layouts live in a `layouts/` directory in the root of your project, and accept the content and front matter as arguments.

```
export default function PageLayout({ children, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {children}
    </div>
  );
}
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdxenhanced-cons)next-mdx-enhanced Cons:

The project is no longer maintained and won't work on Next.js 11. When I tried setting it up, every page I navigated to on the site just said `Internal Server Error` in plain text.

If you had a non-trivial amount of MDX files when using `next-mdx-enhanced`, the memory consumption could become massive. The readme for `next-mdx-remote` (also by Hashicorp) says that with a couple hundred pages, developing the site could consume 8 gigs of ram and take 25 minutes to build.

Like `@next/mdx`, all the MDX for `next-mdx-enhanced` must be from MDX files within the project: you can't render MDX that is stored in a database.

You also cannot import JavaScript modules from within MDX files when using `next-mdx-enhanced`: permitted components must be specified in the configuration.

## [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#hashicorps-nextmdxremote)Hashicorp's next-mdx-remote

The [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) package by Hashicorp was created to deal with problems that arose from their `next-mdx-enhanced` package.

Unlike the previous plugins, your content can come from anywhere: markdown files, a database, an API, etc. That's because the markdown is loaded through `getServerProps` or `getStaticProps`.

The package does not require global configuration like `@next/mdx` or `next-mdx-enhanced`; instead, you load the `serialize` function and `<MDXRemote />` component on any page you want to use it in. Here is a full example from the project's README.md:

```
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import matter from "gray-matter";

import Test from "../components/test";

const components = { Test };

export default function TestPage({ source, frontMatter }) {
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `---
title: Test
---

Some **mdx** text, with a component <Test name={title}/>
  `;

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}
```

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdxremote-pros)next-mdx-remote Pros:

Perhaps most substantially, `next-mdx-remote` does not suffer from the intense performance issues that `next-mdx-enhanced` suffered from, meaning it's unlikely to run into the 25 minute builds mentioned above.

The `next-mdx-remote` package also supports frontmatter and it supports remote data loading. It does not require changes to the project's `next.config.js` configuration file. Passing in components to the `<MDXRemote />` component is also trivial.

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#nextmdxremote-cons)next-mdx-remote Cons:

There is more "glue code" to write with `next-mdx-remote` than `@next/mdx` or `next-mdx-enhanced` because you aren't leveraging file-based routing.

You also lose out on the nice `next-mdx-enhanced` layouts feature, though it's likely possible to implement a simple version of that feature yourself.

## [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#mdx-bundler)MDX Bundler

[MDX Bundler](https://github.com/kentcdodds/mdx-bundler) differs from all of the other packages listed above in that it is Framework agnostic, meaning you can use it outside of Next.js. Like `next-mdx-remote`, no changes to the `next.config.js` file are necessary.

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#mdx-bundler-pros)MDX Bundler Pros:

Perhaps the biggest pro is that MDX Bundler can support Remix/Gatsby/Next/CRA/etc.

MDX Bundler supports frontmatter, and it also supports imports within the MDX files. Similar to `next-mdx-remote`, MDX Bundler can use content from anywhere (the filesystem, database, API, etc).

Here is an example of dynamic imports from the docs:

```
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

import Demo from "./demo";

Here's a **neat** demo:

<Demo />
```

Enter fullscreen mode Exit fullscreen mode

This is possible because MDX Bundler is a bundler and not just a compiler: bundling its dependencies using esbuild. esbuild is also _extremely_ fast compared to other build tools, and it is capable of building and bundling on-the-fly.

### [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#mdx-bundler-cons)MDX Bundler Cons:

MDX Bundler requires esbuild as a peer dependency. This isn't necessarily bad, but it feels odd compared to the other options. You may need to set esbuild settings, which is more configuration that you need to learn and understand.

While I haven't tested it personally, the dynamic imports in MDX files feel like they could be a security implication if loading data from untrusted sources. There are likely ways to mitigate this though.

## [](https://dev.to/tylerlwsmith/quick-comparison-of-mdx-integration-strategies-with-next-js-1kcm#final-thoughts)Final thoughts

Which MDX package did I use in my project? I went with `@next/mdx` because it met my needs with minimal overhead. At some point I may migrate to `next-mdx-remote`, but only when it becomes painful to continue doing what I'm doing.

Regardless of if you use `@next/mdx`, `next-mdx-remote` or MDX Bundler, you can leverage the power of MDX to add cool features to your content.
