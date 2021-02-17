import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
// or
import * as PI from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>

    {/* to import all function */}

    <li>{PI.default}</li>
    <li>{PI.doublePi()}</li>
    <li>{PI.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
