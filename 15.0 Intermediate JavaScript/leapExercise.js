// is it cleanly divisible by 4?


// is it cleanly disvisible by 100?


// is it cleanly divisible by 400? 



function isLeap(year) {
    
  /**************Don't change the code above****************/    
      
      //Write your code here.
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          return "Leap year.";
      }
      return "Not leap year.";
  }
  
  /**************Don't change the code below****************/    
  
  
  isLeap(2020);
  
  var result = isLeap(year);
  console.log(result );



  // answer #2 
  function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return "Leap year.";
        }
        return "Not leap year.";
    }
    
    /**************Don't change the code below****************/    
    
    
    var result = isLeap(1900);
    console.log(result);