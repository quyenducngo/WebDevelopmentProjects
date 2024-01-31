$0.addEventListeners("click", function() {
  console.log("I got clicked");
});

//Callback Function 
document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
  console.log("Key pressed.");
}

//another example
$0.addEventListener("click", function(event) {
  console.log(event);
});

function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code.. 
  var eventThatHappened = {
    eventType: "keypressed",
    key: "p",
    durationOfKeyPress: 2,
  }
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

//same as 
document.addEventListener("keypress", function(event) {
  console.log(event);
})

// use the debugger here