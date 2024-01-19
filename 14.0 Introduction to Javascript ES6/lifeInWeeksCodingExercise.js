// how many days, weeks and months we have left if we live until 90 years old.

// It will take your current age as the input and console.logs a message with our time left in this format:

// You have x days, y weeks, and z months left. Where x, y and z are replaced with the actual calculated numbers.



function lifeInWeeks(age) {
    
  /************Don't change the code above************/    
      
      //Write your code here.
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52; 
  var months = yearsRemaining * 12; 

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
      
      
      
      
  /*************Don't change the code below**********/
  }
  
  lifeInWeeks(33)