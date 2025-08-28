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

  // Create a functon that gives us the average of 3 numbers.

  function average(a,b,c,){
    average = (a+b+c)/3;
    console.log("Average of three numbers is :",average);
  }

  average(78,97,80);

  console.log("-------------------");

  // Create a function that prints multiplication table of a number.

  function printTable()
   {
    let number  = prompt("Enter the number for table");
    number = parseInt(number);
    for (let i = 1; i <= 10; i++)
     {
        console.log(`${number} x ${i} = `,number*i);

     }
   }

   printTable();

   // or can be done by this method also

     function printTable(n)
   {
    for (let i = 1; i <= 10; i++)
     {
        console.log(`${n} x ${i} = `,n*i);

     }
   }

   printTable(6); 

   console.log("-------------------");

   // Create a function that returns the sum of numbers 1 to n.

   function sumReturn(n){
    let sum = 0;
    for(let i =1; i<=n; i++)
    {
        sum = sum+i;
    }
    return sum;
   }
   let num = 45;
   let final = sumReturn(num);
   console.log(`Sum of the numbers from 1 to ${num} is : `,final );

// Create a function that returns the concatination of all strings in an array.

function concatString(){

    let arr = ["Hassan", "A+", "Cust", "Islamabad"];
    let finalStr = "";
     for(let i=0; i<arr.length; i++)
     {
        finalStr +=arr[i];  
     }
     return finalStr;
}
 concatString();