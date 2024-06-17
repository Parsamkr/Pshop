import { extendTheme } from "@chakra-ui/react";
import colors from "./theme/colors";

export const theme = extendTheme({
  direction: "rtl",
  colors: {
    ...colors, // adding custom colors
  },
});

