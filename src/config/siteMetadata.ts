import type { SidebarNavItem, SiteConfig } from "@/types";
import { url } from "@/lib/utils/url";
import { getYear } from "date-fns";

export const siteMetadata: SiteConfig = {
  name: "Learning Notes",
  creator: "Phaneendra",
  keywords: ["learning", "notes", "ramblings"],
  creatorTwitterhandle: "phaneendrak",
  creatorEmail: "phaneendra.krishnareddy@gmail.com",
  description:
    "My personal ramblings and notes about various topics I learn every day",
  url: "https://phaneendra.github.io",
  repo: "https://github.com/phaneendra/phaneendra.github.com",
  ogImage: "/static/images/twitter-card.png",
  links: {
    github: "https://github.com/phaneendra",
    twitter: "https://twitter.com/phaneekr",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/phaneendra-krishnareddy-69495b38/",
  },
  authors: [
    {
      name: "phaneendra",
      url: "https://phaneendra.github.io",
    },
  ],
  navbar: [
    {
      label: "Home",
      url: url("/"),
      icon: "tabler:home",
    },
    {
      label: "Tags",
      url: url("/tags"),
      icon: "tabler:tag",
    },
    {
      label: "Categories",
      url: url("/categories"),
      icon: "tabler:category",
    },
    {
      label: "Archive",
      url: url("/archive"),
      icon: "tabler:archive",
    },
    {
      label: "About",
      url: url("/about"),
      icon: "tabler:info-circle",
    },
    // {
    //   label: 'Notes',
    //   icon: 'tabler:menu-2',
    //   children: [
    //     { label: 'SubItem1', url: '#', icon: 'tabler:circle'},
    //     { label: 'SubItem2', url: '#', icon: 'tabler:circle'},
    //     {
    //       label: 'SubItem3',
    //       icon: 'tabler:menu-2',
    //       children: [
    //         { label: 'SubItem1', url: '#', icon: 'tabler:circle'},
    //         { label: 'SubItem2', url: '#', icon: 'tabler:circle'},
    //         { label: 'SubItem3', url: '#', icon: 'tabler:circle'},
    //       ]
    //     },
    //   ]
    // },
  ],
  footer: {
    links: [
      { label: "Changelog", url: url("changelog") },
      { label: "About", url: url("about") },
      { label: "Archive", url: url("archive") },
      { label: "Github", url: "https://github.com/phaneendra" },
    ],
    declarations: [
      `Copyright © ${getYear(new Date())} 银河渡舟 All Rights Reserved.`,
    ],
    generator: true,
    rss: true,
    sitemap: true,
  },

  // analytics: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // supports plausible, simpleAnalytics, umami or googleAnalytics
  //   plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
  //   simpleAnalytics: false, // true or false
  //   umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
  //   googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  // },
  // newsletter: {
  //   // supports mailchimp, buttondown, convertkit, klaviyo
  //   // Please add your .env file and modify it according to your selection
  //   provider: "buttondown",
  // },
  // comment: {
  //   // If you want to use a commenting system other than giscus you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // Select a provider and use the environment variables associated to it
  //   // https://vercel.com/docs/environment-variables
  //   provider: "giscus", // supported providers: giscus, utterances, disqus
  //   giscusConfig: {
  //     // Visit the link below, and follow the steps in the 'configuration' section
  //     // https://giscus.app/
  //     repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  //     repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  //     category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  //     categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  //     mapping: "pathname", // supported options: pathname, url, title
  //     reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
  //     // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  //     metadata: "0",
  //     // theme example: light, dark, dark_dimmed, dark_high_contrast
  //     // transparent_dark, preferred_color_scheme, custom
  //     theme: "light",
  //     // theme when dark mode
  //     darkTheme: "transparent_dark",
  //     // If the theme option above is set to 'custom`
  //     // please provide a link below to your custom theme css file.
  //     // example: https://giscus.app/themes/custom_example.css
  //     themeURL: "",
  //   },
  //   utterancesConfig: {
  //     // Visit the link below, and follow the steps in the 'configuration' section
  //     // https://utteranc.es/
  //     repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
  //     issueTerm: "", // supported options: pathname, url, title
  //     label: "", // label (optional): Comment 💬
  //     // theme example: github-light, github-dark, preferred-color-scheme
  //     // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
  //     theme: "",
  //     // theme when dark mode
  //     darkTheme: "",
  //   },
  //   disqusConfig: {
  //     // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  //     shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
  //   },
  // },
};
