<h1 align="center">
  Personal Blog and Learning Notes
</h1>

<p align="center">
  This is my personal portfolio blog and learning notes hosted <a href="https://phaneendra.vercel.app/" target="_blank">here</a> built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and hosted with <a href="https://www.vercel.com/" target="_blank">Vercel</a>.
</p>

<p align="center">
  The original template is designed by <a href="https://github.com/timlrx" target="_blank">Timothy Lin</a> and can be found <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" target="_blank">here</a>. The demo for the same can be found <a href="https://tailwind-nextjs-starter-blog.vercel.app/" target="_blank">here</a>.
</p>

<div align="center">

<a href="https://phaneendra.vercel.app/" target="blank" >![View Demo](https://img.shields.io/badge/-View%20Demo%20-orange?color=%23DE1D8D&style=for-the-badge)</a> <a href="https://github.com/phaneendra/phaneendra.github.com/issues/new?assignees=&labels=bug&template=bug_report.md&title=">![Report Bug](https://img.shields.io/badge/-Report%20Bug%20-orange?color=%23ee0701&style=for-the-badge)</a> <a href="https://github.com/phaneendra/phaneendra.github.com/issues/new?assignees=&labels=&template=feature_request.md&title=">![Request Feature](https://img.shields.io/badge/-Request%20Feature%20-orange?color=%230e8a16&style=for-the-badge)</a> <a href="https://github.com/phaneendra/phaneendra.github.com/fork">![Fork](https://img.shields.io/github/forks/pycoder2000/blog?color=%23bfe5bf&style=for-the-badge)</a> <img src="https://img.shields.io/github/stars/phaneendra/phaneendra.github.com?color=darkgreen&style=for-the-badge">

</div>

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

</div>

## Features

- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Lightweight, 45kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- Self-hosted font with [Fontsource](https://fontsource.org/)
- Supports [plausible](https://plausible.io/), [simple analytics](https://simpleanalytics.com/) and google analytics
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Blog templates
- TOC component
- Support for nested routing of blog posts
- Newsletter component with support for mailchimp, buttondown, convertkit and klaviyo
- Supports [giscus](https://github.com/laymonage/giscus), [utterances](https://github.com/utterance/utterances) or disqus
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!

## Quick Start Guide

1. JS with TypeScript

```bash
npx degit https://github.com/phaneendra/phaneendra.github.com.git
```

1. Personalize `siteMetadata.js` (site related information)
2. Modify the content security policy in `next.config.js` if you want to use
   any analytics provider or a commenting solution other than giscus.
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Vercel

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 10 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## 📚 Tech Stack

| Tool           | Link                                                      |
| -------------- | --------------------------------------------------------- |
| Framework      | [Next.js](https://nextjs.org/)                            |
| ORM            | [Prisma](https://prisma.io/)                              |
| Database       | [PlanetScale](https://planetscale.com)                    |
| Authentication | [NextAuth.js](https://next-auth.js.org/)                  |
| Deployment     | [Vercel](https://vercel.com)                              |
| Styling        | [Tailwindcss](https://tailwindcss.com/)                   |
| Comment        | [Giscus](https://github.com/laymonage/giscus/)            |
| Newsletter     | [Email Octopus](https://emailoctopus.com/)                |
| Favicon        | [realfavicongenerator](https://realfavicongenerator.net/) |
| Content        | [MDX](https://mdxjs.com/)                                 |

## Dependencies

All dependencies are latest except for below
`esbuild | v0.14.54` | to upgrade to v0.15.x waiting on pull https://github.com/kentcdodds/mdx-bundler/pull/188
`globby | 11.0.4` | to upgrade and fix esm issues on next.config.js

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Commit your Changes

   ```bash
   git commit -m 'Add some Feature'
   ```

3. Push to the Branch

   ```bash
   git push origin main
   ```

4. Open a Pull Request

<div align="center">

<a href="https://makeapullrequest.com" target="blank" >![PRs Welcome](https://img.shields.io/badge/PR-Welcome-brightgreen?style=for-the-badge)</a>

</div>

## Licence

[MIT](https://github.com/phaneendra/phaneendra.github.com/blob/source/LICENSE) © [Phaneendra](https://phaneendra.vercel.app/)
