import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "@levi/tokens/styles.css";
import "@levi/ui/styles.css";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
