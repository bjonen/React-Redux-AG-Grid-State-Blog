import React from "react";

import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);