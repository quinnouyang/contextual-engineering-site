import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          // Override default border highlight color
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        // Override default round borders
        borderRadius: "none",
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    fonts: {
      // Also set default font in case specified ones have not loaded (Imported into _app.tsx via styles.css)
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "None",
            ...brandRing,
            // Toggles: (darkMode, lightMode)
            color: mode("white", "gray.800")(props),
            // Slight increases...
            backgroundColor: mode("brand.500", "brand.200")(props),
            _hover: {
              backgroundColor: mode("brand.600", "brand.300"),
            },
            _active: {
              backgroundColor: mode("brand.700", "brand.400"),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          // Override border highlight (ring) and radius
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  // Custom global defaults
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
