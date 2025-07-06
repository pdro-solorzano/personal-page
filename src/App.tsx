import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./config/Theme";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
// import "./styles/App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
