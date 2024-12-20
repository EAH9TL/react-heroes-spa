import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter, HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </StrictMode>
);
