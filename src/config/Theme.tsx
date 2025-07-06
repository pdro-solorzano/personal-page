import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#666666",
    },
    secondary: {
      main: "#FCA311",
    },
    divider: "#E5E5E5",
    background: {
      default: "#080e18",
      paper: "#080e1a",
    },
  },
  spacing: 8,
});

export default darkTheme;
