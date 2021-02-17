import React from "react";
import ReactDOM from "react-dom";

const fname = "Nirdesh Kumar";
const lname = "Saini";
const no = 10;

// if i want to use name (js) inside html in rapper element of ReactDom (js)//
// [js-->{HTML-->(js)}]
// ReactDOM.render(<h1>Hello name!</h1>, document.getElementById("root"));
// this will print name as a string not a variable

// method to print -- add the curly brackets over the variable !
// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your Lucky Number is {no}</p>
//   </div>,
//   document.getElementById("root")
// );

// or
// In the curly brackets, we can add any "js expression" inside it //
// but not "js statement"
ReactDOM.render(
  <div>
    <h1>Hello {fname}!</h1>
    {/* <h1>Hello {fname + " " + lname }!</h1> */}
    {/* <h1>Hello {fname} {lname}!</h1> in jsx */}
    {/* <h1>Hello {`${fname} ${lname}`}!</h1> in es6 */}
    <p>Your Lucky Number is {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
