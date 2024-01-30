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