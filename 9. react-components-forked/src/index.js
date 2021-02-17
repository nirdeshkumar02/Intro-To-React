import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// using multiple component in single file //

ReactDOM.render(<App />, document.getElementById("root"));

// creating components of html code //

// ReactDOM.render(
//   <div>
//     <Heading />
//     <List />
//   </div>,
//   document.getElementById("root")
// );

// Previous code //

// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
