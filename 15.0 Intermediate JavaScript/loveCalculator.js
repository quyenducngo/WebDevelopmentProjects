var n = Math.random();
n = n * 6;
n = Math.floor(n) + 100;
console.log(n)


var yourName = prompt("What is your name?");
var parterName = prompt("What is your partners name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(x) + 100;

// if (loveScore === 70) { 
//     alert("Your love value is " + loveScore + "%" + " You love each other like Kanye loves Kanye");
// } if (loveScore > 30 && loveScore <= 70) { 
//   alert("Your love value is " + loveScore + "% and in the medium range");
// }
// else { 
//     alert("Your love value is " + loveScore + "%");

// }

// alert("Your love value is " + loveScore + "%" + "You love each other like Kanye loves Kanye");


// if (loveScore > 70) { 
//   alert("Your love value is " + loveScore + "%" + "Y ou love each other like Kanye loves Kanye");
// } else { 
//   alert("Your love value is " + loveScore + "%");

// }


// updated with 3 options and combining comparators 
if (loveScore > 80) {
  alert("Your love value is " + loveScore + "% and it's on the higher end");
} 

if (loveScore > 30 && loveScore <= 70 ) {
  alert("Your love value is " + loveScore + "% is in the mid range end");
}

else {
  alert("Your love value is " + loveScore + "% and its on the lower range end");
}

//