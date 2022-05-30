import {
  extendTheme,
  // withDefaultColorScheme,
  theme as baseTheme,
  // withDefaultProps,
  // withDefaultVariant,
} from "@chakra-ui/react";

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

// TO-DO: Implement default component styles (no round borders, black as illiniBlue, etc.)
const customTheme = extendTheme(
  {
    // From https://marketing.illinois.edu/design/color
    colors: {
      brand: baseTheme.colors.red,
      illiniOrange: "#FF552E", // Bright orange
      illiniBlue: "#13294B", // Very dark blue
      altgeldOrange: "#DD3403", // Dark bright orange

      // Generally grows darker/stronger from top to bottom
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
        50: "#D2EBF5", // Very light "water" blue
        100: "#A6D7EB",
        200: "#7FC3E1",
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
    fonts: {
      // `[default], [backup]`
      heading: `Montserrat, sans-serif`,
      body: `Montserrat, sans-serif`,
      mono: `Montserrat, sans-serif`,
    },
    // Less boilerplate way?
    // TO-DO: Determine and implement desired font weights
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
          _hover: { textDecoration: "none", color: "illiniOrange" },
        },
      },
      Divider: {
        baseStyle: {
          borderColor: "cloudWhite.300",
        },
      },
      StackDivider: {
        baseStyle: {
          borderColor: "cloudWhite.300",  // Not working
        },
      },
      Container: {
        baseStyle: {
          maxW: {
            base: "container.sm",
            lg: "container.md",
            xl: "container.lg",
          },
        },
      },
      Button: {
        baseStyle: {
          rounded: "none",
          variant: "ghost",
          _hover: {
            textDecoration: "none",
            color: "illiniOrange",
            backgroundColor: "transparent",
          },
        },
      },
      IconButton: {
        baseStyle: {
          rounded: "none",
          variant: "ghost",
          background: "transparent",
          color: "illiniBlue",
          _hover: {
            bg: "none",
            color: "green",
          },
        },
      },
    },
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

export default customTheme;
