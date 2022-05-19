import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "@frontity/mars-theme-typescript/types";

const settings: Settings<Theme | WpSource> = {
  name: "frontity-migration",
  state: {
    frontity: {
      url: "https://contextual.engineering.illinois.edu/",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "test-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://contextual.engineering.illinois.edu/",
          postTypes: [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
