// TO-DO: Consider incorporating a React router library to simplify routing, especially re-rendering page components with switch statements rather than reloading pages

// A "link" with potential child "links"
export interface NavItem {
  readonly label: string;
  readonly subLabel?: string;
  readonly children?: Array<NavItem>;
  readonly link?: string;
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
    link: "/about",
  },
  {
    label: "Research",
    link: "/research",
    children: [
      {
        label: "Focus Areas",
        link: "/focus-areas",
      },
      {
        label: "Projects",
        link: "/projects",
      },
      {
        label: "Resources",
        link: "/resources",
      },
    ],
  },
  {
    label: "Team",
    link: "/team",
  },
  {
    label: "News",
    link: "/news",
  },
];

export const footerInternalItems: Array<NavItem> = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Team",
    link: "/team",
  },
  {
    label: "News",
    link: "/news",
  },
];

export const footerExternalItems: Array<NavItem> = [
  {
    label: "Privacy",
    link: "https://www.vpaa.uillinois.edu/resources/web_privacy",
  },
  {
    label: "Cookies",
    link: "https://www.vpaa.uillinois.edu/resources/cookies",
  },
  {
    label: "Sitemap",
  },
  {
    label: "GitHub",
    link: "https://github.com/quinnouyang/contextual-engineering-site",
  },
];
