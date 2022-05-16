// TO-DO: Consider incorporating a React router library to simplify routing, especially re-rendering page components with switch statements rather than reloading pages

// A "link" with potential child "links"
export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  shouldHighlight?: boolean;
}

// Label(s) for the current page that correspond to the navigation item
export interface CurrNavItem {
  label: string;
  childLabel?: string;
}

export const NAVBAR_ITEMS: Array<NavItem> = [
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
