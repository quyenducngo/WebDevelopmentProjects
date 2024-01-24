// We can Push and Pop to add and remove


// Let's create a function instead


var output = [];
var count = 1;

function fizzBuzz() {

//write code here
if (count % 3 === 0) { 
  output.push("Fizz");
} 
else if (count % 5 === 0) {
  output.push("Buzz");
}
else if (count % 3 === 0 && count % 5 === 0) {
  output.push("FizzBuzz");
}
else {
  output.push(count);
}
  console.log(output);
  count++;
}