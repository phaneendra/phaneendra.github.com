import { LinkProps } from '@tanstack/react-router';

// interface User {
//   name: string;
//   email: string;
//   avatar: string;
// }

// interface Team {
//   name: string;
//   logo: React.ElementType;
//   plan: string;
// }

interface BaseNavItem {
  title: string;
  description?: string;
  badge?: string;
  icon?: React.ElementType;
}

type NavLink = BaseNavItem & {
  url: LinkProps['to'];
  items?: never;
};

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] })[];
  url?: never;
};

type NavItem = NavCollapsible | NavLink;

interface NavGroup {
  title: string;
  description?: string;
  items: NavItem[];
}

interface SidebarData {
  // user: User;
  // teams: Team[];
  navGroups: NavGroup[];
}

type FooterConfig = {
  links?: {
    label: string;
    url: string;
  }[];
  declarations?: React.ReactNode[];
  generator?: boolean;
  rss?: boolean;
  sitemap?: boolean;
};

export type SocialProfile = {
  name: string;
  link: string;
};

export type AuthorType = {
  name: string;
  handle: string;
  socialProfiles: SocialProfile[];
  email: string;
  website: string;
  jobTitle: string;
  company?: string;
  availableForWork: boolean;
  location: {
    city: string;
    media: string;
  };
};

type SiteConfig = {
  name: string;
  description: string;
  keywords: string[];
  url: string;
  repo: string;
  ogImage: string;
  creator: AuthorType;
  authors: {
    name: string;
    url: string;
  }[];
  navigationItems?: NavItem[];
  footer?: FooterConfig;
};

export type {
  SidebarData,
  NavGroup,
  NavItem,
  NavCollapsible,
  NavLink,
  SiteConfig,
  FooterConfig,
};
