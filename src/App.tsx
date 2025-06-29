import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./components/Navbar";
import darkTheme from "./config/Theme";
import { CssBaseline } from "@mui/material";
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
