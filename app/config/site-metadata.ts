import { getYear } from 'date-fns';
import type { SiteConfig, SocialProfile, AuthorType } from '@/types';

export const socialProfiles: SocialProfile[] = [
  {
    name: 'github',
    link: 'https://github.com/phaneendra',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/phaneendra.krishnareddy',
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/phaneendra-krishnareddy-69495b38',
  },
  {
    name: 'x',
    link: 'https://twitter.com/phaneekr',
  },
  {
    name: 'youtube',
    link: 'https://youtube.com/@thedevdavid',
  },
];

export const defaultAuthor: AuthorType = {
  name: 'Phaneendra',
  handle: '@phaneendrak',
  socialProfiles,
  email: 'phaneendra.krishnareddy@gmail.com',
  website: 'https://phaneendra.github.io',
  jobTitle: 'Solutions Consultant and Full Stack Developer',
  company: 'Unicorns & Co.',
  availableForWork: false,
  location: {
    city: 'Bengaluru India',
    media: '/images/bengaluru.jpg',
  },
};

export const siteMetadata: SiteConfig = {
  name: 'Learning Notes',
  creator: defaultAuthor,
  keywords: ['learning', 'notes', 'ramblings'],
  creatorTwitterhandle: 'phaneendrak',
  creatorEmail: 'phaneendra.krishnareddy@gmail.com',
  description:
    'My personal ramblings and notes about various topics I learn every day',
  url: 'https://phaneendra.github.io',
  repo: 'https://github.com/phaneendra/phaneendra.github.com',
  ogImage: '/static/images/twitter-card.png',
  authors: [
    {
      name: 'phaneendra',
      url: 'https://phaneendra.github.io',
    },
  ],
  navigationItems: [
    {
      title: 'Home',
      url: '/',
      description: '',
    },
    {
      title: 'Notes',
      description: 'Managing a small business today is already tough.',
      items: [
        {
          title: 'Tech Notes',
          url: '/tech',
        },
        {
          title: 'Stats',
          url: '/stats',
        },
        {
          title: 'Travel',
          url: '/travel',
        },
        {
          title: 'View More',
          url: '/categories',
        },
      ],
    },
    {
      title: 'Me',
      description: 'Who is this guy?',
      items: [
        {
          title: 'About me',
          url: '/about',
        },
        {
          title: 'Uses',
          url: '/uses',
        },
        {
          title: 'Now',
          url: '/now',
        },
        {
          title: 'Contact us',
          url: '/contact',
        },
      ],
    },
  ],
  footer: {
    links: [
      { label: 'Changelog', url: '/changelog' },
      { label: 'About', url: '/about' },
      { label: 'Archive', url: '/archive' },
      { label: 'Github', url: 'https://github.com/phaneendra' },
    ],
    declarations: [`Copyright © ${getYear(new Date())}  Built by Phaneendra`],
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
