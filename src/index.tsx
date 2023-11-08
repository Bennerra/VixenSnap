import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/context";

import App from "./Components/App/App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
