import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
  },
  text: {
    primary: "#161616",
    secondary: "#0f62fe",
  },
  shape: {
    borderRadius: 12,
  },
});
