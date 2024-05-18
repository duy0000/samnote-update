import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        bg: {
          main: "#f2f2f2",
        },
        bgitem: {
          main: "#fff",
        },
        text: {
          main: "#000",
        },
        bgquicknote: {
          main: "#FFF4BA",
        },
        bgwhite: {
          main: "#fff",
        },
      },
    },
    dark: {
      palette: {
        bg: {
          main: "#000",
        },
        bgitem: {
          main: "#222",
        },
        text: {
          main: "#fff",
        },
        bgwhite: {
          main: "#222",
        },
        bgquicknote: {
          main: "#222",
        },
      },
    },
  },
});

export default theme;
