for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  });
}


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