import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  // withDefaultVariant,
} from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

// const brandRing = {
//   _focus: {
//     ring: 2,
//     ringColor: "brand.500",
//   },
// };

// const inputSelectStyles = {
//   variants: {
//     filled: {
//       field: {
//         _focus: {
//           // Override default border highlight color
//           borderColor: "brand.500",
//         },
//       },
//     },
//   },
//   sizes: {
//     md: {
//       field: {
//         // Override default round borders
//         borderRadius: "none",
//       },
//     },
//   },
// };

const theme = extendTheme(
  {
    // From https://marketing.illinois.edu/design/color
    colors: {
      illiniOrange: "#FF552E", // Bright orange
      illiniBlue: "#13294B", // Very dark blue
      altgeldOrange: "#DD3403", // Dark bright orange
      heritageOrange: {
        50: "#F5821E", // Light-ish orange
        100: "#E56E15",
        200: "#CE5E11",
        300: "#B74D04", // "Burnt" orange
      },
      cloudWhite: {
        50: "#F8FAFC", // Barely off-white
        100: "#E8E9EB",
        200: "#DDDEDE",
        300: "#D2D2D2", // Light gray
      },
      archesBlue: {
        50: "#009FD4", // Very light "water" blue
        100: "#7FC3E1",
        200: "#A6D7EB",
        300: "#009FD4", // Sky blue
      },
      industrialBlue: {
        50: "#CAD9EF", // Very light "jeans" blue
        100: "#90AED5",
        200: "#5783BC",
        300: "#1D58A7", // Moderate blue
      },
      almaMaterBlue: {
        50: "#AFC7DB", // Very light warm blue
        100: "#849BC1",
        200: "#4D69A0",
        300: "#1E3877", // Dark blue
      },
    },
    // colors: {
    //   brand: {
    //     50: "#f5fee5",
    //     100: "#e1fbb2",
    //     200: "#cdf781",
    //     300: "#b8ee56",
    //     400: "#a2e032",
    //     500: "#8ac919",
    //     600: "#71ab09",
    //     700: "#578602",
    //     800: "#3c5e00",
    //     900: "#203300",
    //   },
    // },
    fonts: {
      // Also set default font in case specified ones have not loaded (Imported into _app.tsx via styles.css)
      heading: `Montserrat, ${baseTheme.fonts?.heading}`,
      body: `Montserrat, ${baseTheme.fonts?.body}`,
      mono: `Montserrat, ${baseTheme.fonts?.mono}`,
    },
    components: {
      Heading: {
        baseStyle: {
          color: "illiniBlue",
        },
      },
      Text: {
        baseStyle: {
          color: "illiniBlue",
        },
      },
      Link: {
        baseStyle: {
          color: "illiniBlue",
        },
      },
    },
    // styles: {
    //   global: {},
    // },
    //   components: {
    //     Button: {
    //       variants: {
    //         primary: (props: any) => ({
    //           rounded: "None",
    //           ...brandRing,
    //           // Toggles: (darkMode, lightMode)
    //           color: mode("white", "gray.800")(props),
    //           // Slight increases...
    //           backgroundColor: mode("brand.500", "brand.200")(props),
    //           _hover: {
    //             backgroundColor: mode("brand.600", "brand.300"),
    //           },
    //           _active: {
    //             backgroundColor: mode("brand.700", "brand.400"),
    //           },
    //         }),
    //       },
    //     },
    //     Input: { ...inputSelectStyles },
    //     Select: { ...inputSelectStyles },
    //     Checkbox: {
    //       baseThemeStyle: {
    //         // Override border highlight (ring) and radius
    //         control: {
    //           borderRadius: "none",
    //           ...brandRing,
    //         },
    //       },
    //     },
    //   },
  }
  // // Custom global defaults
  // withDefaultColorScheme({
  //   colorScheme: "brand",
  //   components: ["Checkbox"],
  // }),
  // withDefaultVariant({
  //   variant: "filled",
  //   components: ["Input", "Select"],
  // })
);

export default theme;
