import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./config/Theme";
import { CssBaseline } from "@mui/material";
import { MainLayout } from "./layouts/MainLayout";
import "./styles/app.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
