var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

// Completed Challenge

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods!</h1>
    <ul>
      <li>Pizza</li>
      <li>Bacon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);


//Next Lesson
import React from "react";
import ReactDOM from "react-dom";

const name = "Jimmy";
const luckyNumber = 8;

ReactDOM.render(<h1>Hello {name}</h1>, document.getElementById("root")); 

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

// NEW LESSON

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditabl="false" spellCheck="true">My Favourite Foods!</h1>
    <ul>
      <li>Bacon</li>
      <li>Bacon</li>
      <li>Bacon</li>
    </ul>
  </div>,
  document.getElementById("root")
);


// RESIZING IMAGES IN REACT

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditabl="false" spellCheck="true">
      My Favourite Foods!
    </h1>
    <div>
      <img
        className="food"
        src="https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0"
        alt="noodle one"
      ></img>
      <img
        className="food"
        src="https://lh3.googleusercontent.com/7VxfsOZ0xt_TcfGypsYV7OMXb3BL_kARZPdSCsKOSzRYl1iUGKcXT1XEtnpFxgRkrdwrH6TKgc8qa8DoOq7qGCHm8qz6EZNVekTPYMT_jMrocEqlP8BNGHmJLAbk6p6ft3IiwmgR=s0"
        alt="noodle two"
      ></img>
      <img
        className="food"
        src="https://lh5.googleusercontent.com/VVcj2ZkAR3EKmdDMWlhiFdMqwvvBTSjWeWBi4yobovwtKnQpB2Pi_Llasv144sq0TSThrYX3_otUYes3zMNgogX-a4K6x8jstnN2n-WhTipC0m7Tjtonj_VsuL_R_-vBGXJK6hJg=s0"
        alt="noodle two"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);


// Can also use
import React from "react";
import ReactDom from "react-dom";
const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditabl="false" spellCheck="true">
      My Favourite Foods!
    </h1>
    <img src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);

//INLINE CSS using OBJECTS in JSX
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <h1 style={{ color: "red" }}>My Favourite Foods!</h1>,
  document.getElementById("root")
);

//Some more styling - add a custom style as well by calling it customStyle.color = "insert colour";
import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDom.render(
  <h1 style={customStyle}>My Favourite Foods!</h1>,
  document.getElementById("root")
);
