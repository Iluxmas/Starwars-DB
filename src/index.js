import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

//import { createRoot } from "react-dom";
import App from "./components/app/app";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
