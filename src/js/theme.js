import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
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
        bgmessenger: {
          main: "#F2F2F7",
        },
        mymes: {
          main: "#007AFF",
        },
      },
    },
    dark: {
      palette: {
        bg: {
          main: "#000",
        },
        mymes: {
          main: "#007AFF",
        },
        bgmessenger: {
          main: "#F2F2F7",
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
