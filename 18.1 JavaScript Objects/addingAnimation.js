buttonAnimation(buttonInnerHTML);

//to select the class of the drum
document.querySelector(".w");

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}