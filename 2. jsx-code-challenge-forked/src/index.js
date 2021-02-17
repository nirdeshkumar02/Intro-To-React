//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1> Full Stack Dev </h1>
    <ul>
      <li>MERN Stack Dev</li>
      <li>MEAN Stack Dev</li>
      <li>Python-Django Stack Dev</li>
    </ul>
  </div>,
  document.getElementById("root")
);
