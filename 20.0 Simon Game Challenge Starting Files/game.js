// alert("Hello World");

// function nextSequence() {
//   //generate a random number between 0 - 3 
//   // store it in a variable called 
//   return randomNumber;
// }

// var buttonColours = ["red", "blue", "green", "yellow"];

// var randomChosenColor 
// //use the randomNumber to select a random colour from buttonColours

// var gamePattern = [];
// //add the new randomChosenColour to the gamePattern


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
