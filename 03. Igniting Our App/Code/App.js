
// let root = document.querySelector("#root")

// let h1 = document.createElement("h1")
// h1.textContent = "Namaste Everyone from JS !"
// root.appendChild(h1)


import React from "react";
import { createRoot } from "react-dom/client";

const heading1 = React.createElement("h1", {
  id: "title",
  key: "h1"
}, "Heading 1!");

const heading2 = React.createElement("h2", {
  id: "title-2",
  key: "h2"
}, "Heading 2!");

const container = React.createElement("div", {
  id: "container",
  hello: "world"
}, [heading1, heading2]);

const root = createRoot(document.getElementById("root"));
root.render(container);
