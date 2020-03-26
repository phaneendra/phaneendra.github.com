# Features

Site uses Next.js for all its rendering So let's dive into what Next.js does:

## Compiler

Next.js compiles React components using webpack and Babel. It ensures compilation is fast and that common dependencies are shared across pages.

We also have multiple webpack plugins doing optimizations both for on-demand as well as static rendering. It handles polyfilling, object rest spread, class properties, removing proptypes in production. It handles hot module replacement, ignoring certain development-only libraries etc.

It also handles small details, for example that you don't have to `import React from 'react'` when using functional components and JSX.

## On-demand rendering (traditional SSR)

On demand rendering means for every request that comes in you render a unique page (It's still possible to cache this response ofcourse) This is great for highly dynamic web apps in which content changes often, you have a login state, and similar use cases. This mode requires having a Node.js server running. Examples of this are zeit.co, marvel.com, deliveroo.com, jobs.netflix.com, and opencollective.com

## Static exporting

Render all pages to `.html` files up-front and serve them using any file server. This does not require you to have a Node.js server running and the html can run anywhere. An example of this is nextjs.org, carbon.now.sh, plot.ly, material-ui.com, and vergecurrency.com

## Automatic code splitting

Next.js builds around a structure that let's you scale your application to thousands of unique pages (using the pages directory), as routes are unaware of eachother and are their own code-splitting entrypoint. This means that you only load the code neccesary for the page that you're rendering. It also means that if someone on your team breaks a certain component used on only one page only that page breaks and not the rest of the application.

## Hot module replacement

Automatic reloading of components without having to refresh the browser. This allows you to see updates to components / styles immediately.

There is another spectrum to this issue which is "what if I make an error", in that case Next.js will show you an overlay showing the exact (source) line the error happened on, so it applies sourcemaps automatically.

## Routing / prefetching

When you have pages in the pages directory you generally want to link between them, we allow you to do this using client rendering (instead of doing full route transitions) in a SPA way. Furthermore this also allows you to "prefetch" pages that you know users are going to navigate to so that navigations are faster.

Documentation can be found here: [Next With Link](https://nextjs.org/docs#with-link)

## Dynamic loading (like React.lazy but more optimized for SSR)

One argument that I've seen come up is "But I can use React.lazy right?", React.lazy is great for loading a component, however when pre-rendering (SSR/static) this can be further optimized. For example Next.js keeps track of exactly the rendered `next/dynamic` components and injects their script tags + preload tags automatically.

[Nextjs dynamic imports](https://nextjs.org/docs#dynamic-import)

## Styling (optional)

In pretty much all applications you need to do styling to some degree, Next.js ships with styled-jsx, but it's not bundled if not used. You can also use any other solution out there, eg styled-component, emotion etc.

[Nextjs CSS in JS](https://nextjs.org/docs#built-in-css-support)

## Handling the `<head>`

When server rendering you need a way for pages to define their `<head>`, eg for meta tags, title etc.

[Nextjs Head](https://nextjs.org/docs#populating-head)

## Data fetching

Next.js introduces a new lifecycle method named `getInitialProps` as a way to asynchronously fetch data before rendering.

React js roadmap is to support ssr intrinsically. For reference the project name for it is [React Fizz](https://github.com/facebook/react/pull/14144)

With Fizz we'll be able to suspend part of the rendering and show a placeholder instead. However even with Fizz there is still a need for data-fetching solutions. It basically comes down to that Next.js will only get better once Fizz lands.

## Error handling

Handling server-rendering and client-rendering errors in a correct manner.

[Nextjs Error Handling](https://nextjs.org/docs#custom-error-handling)

## Serverless

Scaling on-demand rendered pages to a giant level of concurrency with fast cold startup is easy using the serverless compilation target.

## Serverful (or just "running as a server")

Next.js also supports a more traditional server approach where all routes are handled by a single server.

## Optimize for production

There are many things involved here but some of the bigger optimizations we do:

- strip unneeded PropTypes
- minify all Javascript
- optimize page loading (there is no single manifest holding all routes)
- add preload tags (`<link rel="preload">`)
- prefetching
- ensure minimal rendered HTML
- cache builds

We've also done optimizations to webpack and continue to improve the tools Next.js is built on top of, eg: [Webpack Memory](https://nextjs.org/blog/webpack-memory/)

## Optimize for development

One of the larger optimizations we do is compiling pages on-demand, meaning that when starting the development server we don't compile the pages but instead compile them on-demand when accessed. This ensures that even when you have many pages development on a few of them stays fast. Explained more here: [On demand compilation](https://nextjs.org/blog/next-8/#improved-on-demand-entries)

## Zones / Microfrontends

Allows for incrementally adopting Next.js into your organization / team. There are many examples of this. Eg trulia.com, ign.com/games

# Structuring a site

## Document (pages/_document.js)

Defines basic HTML5 document structure with meta tags for

- viewport settings
- manifest definitions for pwa
- favicons
- apple mobile icons
- win mobile icons
- mobile icons

### No Flash of colors

In theme-ui inorder to prevent a flash of colors that occur during rehydration set IntializedColorMode

- IntializeColorMode : rendered in HTML before the main application to help prevent the flash of colors that can occur during rehydration.

## App (pages/_app.js)

Defines the app structure

- Themeprovider
- root style
- meta tags for theme colors
- default seo
- Dynamically set the layout based on the pages layout props

## Site Layout(src/layouts/SiteLayout/index.js)

Site wide layout component to hold meta tags for SEO

- Title
- Description
- OpenGrap tags
- Twitter Cards
- Robots
- Cannonical tags

Layout component also holds the basic structure for the site

- Header
- Main
- Footer

## Pages (pages/*.js)

Any other js file in pages directory is treated as a page in nextjs

each page to import data from getInitialProps method

- sitewide config
- any other page data to initialize the state of the page eg. blog data
