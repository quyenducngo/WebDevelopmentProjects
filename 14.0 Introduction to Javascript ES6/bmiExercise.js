//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:


var bmi = bmiCalculator(65, 1.8); 
function bmiCalculator(weight, height) { 
var bmi = weight / (height * height);




bmi should equal 20 when it's rounded to the nearest whole number.

*/


// my solution
function bmiCalculator(weight, height) { 
  var bmi = weight / (height * height)
  var roundedBMI = Math.round(bmi);
  
  return roundedBMI;
  
  }
  
  var bmi = bmiCalculator(65, 1.8);
  
  console.log("BMI" , bmi);


  // angela's solution
  function bmiCalculator(weight, height) { 
    var bmi = weight / (height * height)
    return Math.round(bmi);
    
    }
    var bmi = bmiCalculator(65, 1.8);
    console.log("BMI" , bmi);