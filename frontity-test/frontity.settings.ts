import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "@frontity/mars-theme-typescript/types";

const settings: Settings /*<Theme | WpSource>*/ = {
  name: "frontity-test",
  state: {
    frontity: {
      url: "https://contextual.web.illinois.edu",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme-typescript",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
      // name: "test-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
