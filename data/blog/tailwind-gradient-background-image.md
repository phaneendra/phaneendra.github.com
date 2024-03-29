---
title: Tailwind Css Gradient Background Image
date: '2022-11-03'
tags: ['tailwind', 'code', 'css']
draft: false
summary: Extend Tailwind Css to include a Gradient Background Image pattern.
---

# Tailwind Css Gradient Background Image

A sample to show how to add a linear gradient and background image and extend tailwind css.

```html
<html lang="en" className="scroll-smooth">
  <head>
    <meta name="theme-color" content="#000000" />
    ...
  </head>
  <body className="bg-white bg-body-pattern text-black antialiased dark:bg-gray-900 dark:text-white">
    ...
  </body>
</html>
```

```js:tailwind-config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'body-pattern': "linear-gradient(rgba(24,25,26,.85), rgba(24,25,26,.85)), url('/static/images/background.svg')",
      },
    },
  },
  variants: {},
  plugins: [],
}

```
