import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);

let greeting;
const customeStyle = {
  color: " ",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customeStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Aftenoon";
  customeStyle.color = "green";
} else {
  greeting = "Good Evening";
  customeStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customeStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
