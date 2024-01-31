var bellyboy1 = {
  name: "Jimmy",
  aage: 19,
  hasWorkPermit: true,
  languages: ["Vietnamese", "English"]
}

var houseKeeper1 = {
  name: "Ashley",
  age: 19, 
  workExperienceYears: 2,
  hasWorkPermit: true,
  cleaningSkills: ["Bathroom", "Kitchen", "Bedroom"],
  languages: ["Jamaican", "English"]
}
houseKeeper1;
console.log(houseKeeper1.name);
//this will return the name!

// we can build a factory a CONSTRUCTOR FUNCTION the does not follow camel casing
function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

//initialise object
var bellyboy1 = new BellBoy("Jimmy", 19, true, ["Vietnamese", "English"]);

//case 1 
function HouseKeeper (name, age, workExperienceYears, hasWorkPermit, cleaningSkills, languages) {
  this.name = name;
  this.age = age;
  this.workExperienceYears = workExperienceYears;
  this.hasWorkPermit = hasWorkPermit;
  this.cleaningSkills = cleaningSkills;
  this.languages = languages;
}

var houseKeeper2 = new HouseKeeper ("Lien", 21, 5, true, ["Kitchen", "Bathroom", "Living Room"], ["English", "Vietnamese"]);