// TO-DO: Consider incorporating a React router library to simplify routing, especially re-rendering page components with switch statements rather than reloading pages

export type NavItem = {
  readonly label: string;
  readonly subLabel?: string;
  readonly children?: NavItem[];
  readonly link?: string;
  readonly shouldHighlight?: boolean;
};

// Label(s) for the current page that correspond to the navigation item
export type CurrNavItem = {
  label: string;
  childLabel?: string;
};

// TO-DO: Assess which items to include
// Labels with children SHOULD NOT have their own link
export const navbarItems: NavItem[] = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Research",
    // link: "/research",
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

// TO-DO: Assess which items to include
export const footerInternalItems: NavItem[] = [
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

export const footerExternalItems: NavItem[] = [
  {
    label: "Privacy",
    link: "https://www.vpaa.uillinois.edu/resources/web_privacy",
  },
  {
    label: "Cookies",
    link: "https://www.vpaa.uillinois.edu/resources/cookies",
  },
  {
    // TO-DO: Generate a sitemap and link it here
    label: "Sitemap",
  },
  {
    label: "GitHub",
    link: "https://github.com/quinnouyang/contextual-engineering-site",
  },
];
