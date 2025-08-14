
 console.log("---------------------------------------------------------------------");

//else if statements Practice

let age = 17;
if( age > 18)
{
    console.log("You can vote.")
}
else if(age < 18)
{
    console.log("You can not vote.")
}
else {
    console.log("Invlid Age")
}

console.log("----------------------------------------------------------------------");

// else if 

let marks = 50;

if (marks >= 90)
{
    console.log("A+");
}

else if(marks >= 80)
    {
        console.log("A");
    }

else if (marks >= 70)
        {
            console.log("B+");
        }

else if (marks >= 60)
            {
                console.log("B");
            }
 else
 {
    console.log("F")
 }           
 console.log("----------------------------------------------------------------------");

 // else if

 let month = "january";

 if (month == "january")
 {
    console.log("January 31 days.");
 }

 else if (month == "february")
    {
       console.log("February 28 days.");
    }

else if (month == "january")
        {
           console.log("March 30 days.");
        }    

        else if (month == "january")
            {
               console.log("April 30 days.");
            }    
 else
 {
    console.log("Invalid Month");
 }          
 console.log("--------------------------------------------------------------------");

 // Practice Question for if else statement 

 let popCornSize = "medium";

 if (popCornSize == "XL")
 {
    console.log("Only $5.66 sir.")
 }

 else if (popCornSize == "large")
    {
       console.log("Only $4.55 sir.")
    }

else if (popCornSize == "medium")
     {
           console.log("Only $3.21 sir.")
    }    

else if (popCornSize == "small")
     {
        console.log("Only $2.55 sir.")
    }

else
     {
           console.log("Invalid popcorn size.")
    }
console.log("--------------------------------------------------------------------");
// nested if statement

let num = 51;

if(num >= 50)
{
    console.log("You are passed.");
    if (num >= 90)
    {
        console.log("You got A+ grade.");
    }
    if (num >= 80)
    {
            console.log("You got B+ grade.");
    }
    if (num >= 70)
    {
            console.log("You got C+ grade.");
    }    
    else{
        console.log("You Got D grade.");
    }
}
else{
    console.log("You are failed.")
}

console.log("------------------------------------------------------------------");

// switch statement...................

let color = "red";

switch(color)
{
    case "red":
        console.log("It means stop.");
        break;
    case "yellow":
        console.log("It means get ready.");
        break;    
    case "grenn":
        console.Log("You can go now.");
        break;
    default:
    console.log("Invalid choice!") ;       
}
console.log("Program ended successfully.");
console.log("---------------------------------------------------------------");

// Alert and Prompt
alert("Wellcome to the JavaScript world!");

console.error("Error: This is an error message!");

console.warn("Save your work frequently to avoid data loss!");

let name = prompt("Enter your name");
let Age = prompt("Enter your age");
let roll = prompt("Your roll number is");
console.log(name + "  "+ age+ "  " +roll);
let msg = (name + " " + roll);
alert(msg);


// string methods
// using trim to remove whitespaces
let str = "        hello world!";
let newStr= str.trim();
console.log(newStr);


let x = prompt("Enter your name");
let y = prompt("Enter your age");
let z = x.trim() + " " + y.trim();
alert(z);

// upper and lower case method

let fruit = "aPpLe";

fruit.toUpperCase();
fruit.toLowerCase();
console.log(fruit.toUpperCase() + "  " + fruit.toLowerCase());