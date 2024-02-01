// // alert("Hello World");

// $("h1").css("color", "red");

// // alerternatively 
// $(document).ready(function() {
//   $("h1".css("color", "red"));
// })

// //selecting elements in jquery
// $("h1. title"); //grabbing the class 

// $("#header h1"); // grabbing a div

// //previously we used:
// document.querySelectorAll("button");

// //now we can use: 
// $("button"); // this will grab all of the buttons

// $("h1").css("color", "green");

// $("h1").css("font-size", "1rem");
// if you have 1 value = means you're grabbing and if you have 2 that means you're setting. 
// $("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");

$("h1").text("Bye");
$("button").text("Don't Click Me");
$("button").html("hey hey");

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

//adding event listeners
$("h1").click(function() {
  $("h1").css("color", "purple");
})

$("button").click(function() {
  $("h1").css("color", "purple");
})

// crazy, we can track anytime a key is pressed and updated
$(document).keypress(function(event) {
  $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})

$("h1").on("click", function() {
  $("h1").css("color", "purple");
})

//this will hide the selected element and fadeout
$("h1").on("click", function() {
  $("h1").fadeOut();
})

$("h1").on("click", function() {
  $("h1").hide();
})