// alert("hello world");

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
}

// another way to do this is by using the anonamous function 
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked");
});

//solution 1
document.querySelectorAll("button")[1].addEventListener("click", function () {
  alert("I got clicked");
});

//solution 2 with loops
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//example
function calculator(num1, num2) {
  return num1 + num2;
};

calculator(2,3);
// numb1 = 2 and num2 = 3 answer = 5

//example 2
function calculator(num1, num2) {
  return num1 * num2;
};

calculator(2,3);
// 2 * 3 = 6

//how to enter debugger in console
debugger;
calculator(3,4,multiply);

//example
// $0.addEventListener(intput1, input2);
// function respondToClick() {
//   console.log("I got clicked");
// };

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(4,5,add);
calculator(4,5,multiply);
debugger;
calculator(10,5,divide);

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    this.style.color = "white";

  })
};



// var audio = new audio("sounds/tom-1.mp3");
// audio.play();