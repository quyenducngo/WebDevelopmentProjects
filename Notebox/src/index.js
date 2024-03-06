// var React = require("react");
// var ReactDOM = require("react-dom");

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>Hello World!</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

// Completed Challenge

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods!</h1>
//     <ul>
//       <li>Pizza</li>
//       <li>Bacon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );


//Next Lesson
import React from "react";
import ReactDOM from "react-dom";

const name = "Jimmy";
const luckyNumber = 8;

// ReactDOM.render(<h1>Hello {name}</h1>, document.getElementById("root")); 

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Here is a random number {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

// CANNOT WRITE STATMENTS example: if(name === "jimmy")

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Here is a random number {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
