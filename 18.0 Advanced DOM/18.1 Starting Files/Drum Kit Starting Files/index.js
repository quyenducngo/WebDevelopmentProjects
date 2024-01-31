var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new audio("sound/tom-2.mp3");
        tom1.play();

      default:
    }
  })
};


// document.addEventListener("keypress", function() {
//   alert("Key was pressed");
// };

// function makeSound(key) {
//   switch (key) {
//     case "w";
//       var
//   }
// }