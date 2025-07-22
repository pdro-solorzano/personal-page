import { SvgIcon } from "@mui/material";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PortfolioSection } from "../components/PortfolioSection";
import type { Practice } from "../models/models";
import {
  antDesignIcon,
  chakraIcon,
  cssIcon,
  htmlIcon,
  jsIcon,
  reactIcon,
} from "../utils/icons";

const practices: Practice[] = [
  {
    name: "Mexican Lottery",
    url: new URL("https://pdro-solorzano.github.io/mexican-lottery/"),
    description: "Mexican Bingo, can be played or used only to shuffle cards",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "Chakra UI", color: "#3abdb1" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, chakraIcon, reactIcon],
  },
  {
    name: "Light Pokedex",
    url: new URL("https://pdro-solorzano.github.io/light-pokedex/"),
    description: "Light version of a web pokedex, it sends request to pokeAPI",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "Ant Design", color: "#f22944" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, antDesignIcon, reactIcon],
  },
  {
    name: "Todo app",
    url: new URL("https://pdro-solorzano.github.io/todo-app/"),
    description:
      "Just a typical todo-app, it uses local storage to keep todos stored in the browser storage",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "HTML", color: "#e34f26" },
      { name: "CSS", color: "#1d31dc" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, htmlIcon, cssIcon, reactIcon],
  },
  {
    name: "Notes app",
    url: new URL("https://pdro-solorzano.github.io/notes-app/"),
    description:
      "App to create notes and filter them by category, local storage used to keep notes store in the browser",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "HTML", color: "#e34f26" },
      { name: "CSS", color: "#1d31dc" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, htmlIcon, cssIcon, reactIcon],
  },
  {
    name: "Rock paper scissor",
    url: new URL("https://pdro-solorzano.github.io/rock-paper-scissor/"),
    description:
      "Rock paper scissor typical game, it uses local storage to keep track of the games record",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "HTML", color: "#e34f26" },
      { name: "CSS", color: "#1d31dc" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, htmlIcon, cssIcon, reactIcon],
  },
  {
    name: "Calculator",
    url: new URL("https://pdro-solorzano.github.io/calculator/"),
    description: "Calculator for basic operations",
    techTags: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "HTML", color: "#e34f26" },
      { name: "CSS", color: "#1d31dc" },
      { name: "React", color: "#00d8ff" },
    ],
    icons: [jsIcon, htmlIcon, cssIcon, reactIcon],
  },
];

function MainLayout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortfolioSection practices={practices} />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export { MainLayout };
