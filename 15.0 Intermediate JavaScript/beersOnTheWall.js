var numbersOfBottles = 99
while (numbersOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numbersOfBottles === 1) {
    bottleWord = "bottles";
  }

console.log(numbersOfBottles + " " + bottleWord + " of beer on the wall");
console.log(numbersOfBottles + " " + bottleWord + " of beer,");
console.log("Take one down, pass it around,");
numbersOfBottles--;
console.log(numbersOfBottles + " " + bottleWord + " of beer on the wall.");
}