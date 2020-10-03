import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const id = "root";
  const element = document.getElementById(id);

  if (!element) throw new Error(`couldn't find element with id: ${id}`);

  ReactDOM.render(<App />, element);
});
