// TO-DO: Consider incorporating a React router library to simplify routing, especially re-rendering page components with switch statements rather than reloading pages

// A "link" with potential child "links"
export interface NavItem {
  readonly label: string;
  readonly subLabel?: string;
  readonly children?: Array<NavItem>;
  readonly href?: string;
  readonly shouldHighlight?: boolean;
}

// Label(s) for the current page that correspond to the navigation item
export interface CurrNavItem {
  label: string;
  childLabel?: string;
}

export const navbarItems: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Research",
    href: "/research",
    children: [
      {
        label: "Focus Areas",
        href: "/focus-areas",
      },
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "Resources",
        href: "/resources",
      },
    ],
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "News",
    href: "/news",
  },
];

export const footerInternalItems: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "News",
    href: "/news",
  },
];

export const footerExternalItems: Array<NavItem> = [
  {
    label: "Privacy",
    href: "https://www.vpaa.uillinois.edu/resources/web_privacy",
  },
  {
    label: "Cookies",
    href: "https://www.vpaa.uillinois.edu/resources/cookies",
  },
  {
    label: "Sitemap",
  },
  {
    label: "GitHub",
    href: "https://github.com/quinnouyang/contextual-engineering-site",
  },
];
