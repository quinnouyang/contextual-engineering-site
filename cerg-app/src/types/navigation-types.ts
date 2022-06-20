// TO-DO: Consider re-rendering page components with switch statements rather than reloading pages
export type NavItem = { readonly label: string };
export type NavCategory = NavItem & { readonly children: NavPage[] };
export type NavPage = NavItem & { readonly link: string };
export type CategoryLabel = { readonly label: string };

 export const navbarItems: Array<NavCategory | NavPage> = [
  {
    label: "About",
    children: [
      {
        label: "The Group",
        link: "/group",
      },
      {
        label: "Contextual Engineering",
        link: "/contextual-engineering",
      },
    ],
  },
  {
    label: "People",
    link: "/people",
  },
  {
    label: "Research",
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
        label: "Publications",
        link: "/publications",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Predictive Tool",
        link: "/predictive-tool",
      },
      {
        label: "Courses & Certificate",
        link: "/courses-certificate",
      },
    ],
  },
];

export const footerPrimaryItems: NavPage[] = [
  {
    label: "About",
    link: "/group",
  },
  {
    label: "People",
    link: "/people",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const footerSecondaryItems: NavPage[] = [
  {
    label: "Privacy",
    link: "https://www.vpaa.uillinois.edu/resources/web_privacy",
  },
  {
    label: "Cookies",
    link: "https://www.vpaa.uillinois.edu/resources/cookies",
  },
  // {
  //   // TO-DO: Generate a sitemap and link it here
  //   label: "Sitemap",
  //   link: "/",
  // },
  {
    label: "GitHub",
    link: "https://github.com/quinnouyang/contextual-engineering-site",
  },
];
