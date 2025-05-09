// src/js/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import SecondsCounter from "./SecondsCounter.jsx";

let seconds = 0;
const root = createRoot(document.getElementById("app"));

setInterval(() => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds++;
}, 1000);
