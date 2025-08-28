// Practicing Functions

// Q 1 : Create a fucntion that prints poem.

function poem()
  {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");      
    console.log("up above the world so high,");
    console.log("Like a diamond in the sky.");
  };

  poem(); // calling function

  console.log("-------------------");
 // Create a function to roll a dice and always display the value of the dice.

 function diceRoll(){
    let random = Math.floor(Math.random() * 6 )+ 1;
    console.log(random);
 }

diceRoll(); // calling function

  console.log("-------------------");

  // Q 2 : Create a functon that gives us the average of 3 numbers.

  function average(a,b,c,){
    average = (a+b+c)/3;
    console.log("Average of three numbers is :",average);
  }

  average(78,97,80);