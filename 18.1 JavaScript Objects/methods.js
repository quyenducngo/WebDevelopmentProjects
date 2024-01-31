// function moveSuitcase {
//   alert("May I take your suitcase?");
//   pickUpSuitcase();
//   move();
// }

var bellyboy1 = {
  name: "Jimmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

//we can call this method by running
bellyboy1.moveSuitcase();

//Constructor Function 
function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}
// function Clean {
//   alert("Cleaning in progress");
// }

var houseKeeper1 = {
  name: "Ashley",
  age: 19,
  yearsCleaningExperience: 2,
  Clean: function() {
    alert("Cleaning in PROGRESS");
  }
}

//Look here
function HouseKeeper (name, age, yearsCleaningExperience) {
  this.name = name;
  this.age = age;
  this.yearsCleaningExperience = yearsCleaningExperience;
  this.Clean = function() {
    alert("Cleaning in PROGRESS");
  }
}

// run this to create a new house keeper
var houseKeeper1 = new HouseKeeper("Asley", 19, 2);

//run this to test 
houseKeeper1.cleaningSkills();

// Constructor Function for Audio File 
function Audio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
    //Tap into the audi hardware
    //Check the file at the fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
}

var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();