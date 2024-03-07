import React from "react";
import ReactDOM from "react-dom";

const fName = "Jimmy";
const lName = "Ngo";
const currentDate = new Date();
// console.log(currentDate);
const year = currentDate.getFullYear();
// const luckyNumber = 8;

ReactDOM.render(
  <div>
    <p className="heading">Created by {fName} {lName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

// Adding CSS styling to React now

