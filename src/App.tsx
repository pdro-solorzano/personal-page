import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./config/Theme";
import { CssBaseline } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Navbar } from "./components/Navbar";
// import "./styles/App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
