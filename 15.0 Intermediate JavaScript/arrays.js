Jimmy
Ashley
Gerry
Jesse
Ericko
Seraya

var guestList = ["Jimmy", "Ashley", "Gerry", "Jesse", "Ericko", "Seraya"];
guestList.length;
console.log(guestList.length);
console.log(guestList[0]);


guestList.includes();

var guestName = prompt("What is your name");

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}



function whosPaying(names) {


  names["Angela", "Ben", "Jenny", "Michael", "Chloe"]
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";

}