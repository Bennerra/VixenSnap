import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/store";
import { ThemeProvider } from "@/context";

import { App } from "./modules/App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter basename={`/${process.env.REACT_APP_PUBLIC_URL}`}>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
