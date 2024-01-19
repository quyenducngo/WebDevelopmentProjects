function main(){
  moveTopRightCorner();

}

function moveTopRightCorner() {
     move();
  move();
  move();
  move();
  turnLeft();
  move();
  move();
  move();
  move();
}


function main(){
  putBeeper();
  turnLeftBeeper();
  turnRightBeeper();
  turnLeftBeeper();
  turnRightBeeper();
  }
  
  
  function turnLeftBeeper() {
     
     move();
     turnLeft();
     move();
     putBeeper();
  }
  
  function turnRightBeeper() {
     
     move();
     turnRight();
     move();
     putBeeper();
  }

  //ches board solution

  function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }