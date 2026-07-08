export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface MainNavItem extends NavItem {}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
    twitter: string;
  };
}