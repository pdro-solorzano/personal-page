import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./config/Theme";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection/PortfolioSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { FooterSection } from "./components/FooterSection/FooterSection";
// import "./styles/App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;
