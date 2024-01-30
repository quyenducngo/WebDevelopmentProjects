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

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  });
}