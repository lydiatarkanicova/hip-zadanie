import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// React Router Dom v6
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
