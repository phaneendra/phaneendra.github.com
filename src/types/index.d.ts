import { url } from "@/lib/utils/url";
import type { ImageMetadata, MarkdownHeading, MarkdownInstance } from "astro";

export type NavItem = {
  label: string;
  url: string;
  disabled?: boolean;
};
export type MenuItem = NavItem & {
  icon?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;
  forceReload?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  label: string;
  icon?: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      url: string;
      items?: never;
    }
  | {
      url?: string;
      items: MenuItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  keywords: string[];
  url: string;
  repo: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    discord?: string;
    strava?: string;
    linkedin?: string;
  };
  creator: string;
  creatorTwitterhandle: string;
  creatorEmail: string;
  authors: {
    name: string;
    url: string;
  }[];
  navbar?: SidebarNavItem[];
  footer?: FooterConfig;
};

export type FooterConfig = {
  links?: {
    label: string;
    url: string;
  }[];
  declarations?: React.ReactNode[];
  generator?: boolean;
  rss?: boolean;
  sitemap?: boolean;
};

export type NotesConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

// Pages
export type BasePage = {
  title: string;
  description?: string;
  image?: string | ImageMetadata | Promise<{ default: ImageMetadata }>;
  type?: never;
};

export type Page = BasePage;
