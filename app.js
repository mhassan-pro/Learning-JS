// JavaScript Code Practice
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


// string methods [trim,toUpperCase,toLowerCase,indexOf,slice,replace,repeat]
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


// ondex of string method
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// The indexOf() method returns -1 if the value is not found.
let sentence = "The Quick fox jumps over the lazy dog.";

sentence.indexOf("fox");     // return 10
sentence.indexOf("over");   // return 20
sentence.indexOf("not");   // return -1 (not found)
sentence.indexOf("dog");  // return 34
sentence.indexOf("T");   // retrun 0 (case-sensitive)


// method chaining

let MSG = " Hello ";
let newMsg = MSG.trim().toUpperCase();
alert(newMsg);
console.log(newMsg);


//slice method
// The slice() method extracts a section of a string and returns it as a new string,

let text = "hello" ;

console.log( text.slice(2 , 4) ); // starting and ending
console.log(text.slice(0)); // only starting
console.log(text.slice(-1)); // negative index give the last character bu using formula (length-index).

// replace method
// The replace() method replaces a specified value with another value in a string.
let newText = "My name";
console.log( newText.replace("My" , "Your") );// first search value and then new vale, work on first occurrence only.

// repeat method
// The repeat() method returns a new string with a specified number of copies of an existing string.
let repeatText = "CUST";
console.log( repeatText.repeat(10) );

// Arrays
// linear collection of elements.
let students = ["Hassan","Rajaab","Maryam","Zaynab"];
console.log(students[3]); //Zaynab

let numbers = [2,4,6,8,3,5,7,9];
console.log(numbers[6]); //7

let info = ["Hassan", 90, 5.8];
console.log(info.length-1);
console.log(info[0][3]); // 1 squaare bracket is for index of array and second is for index of string.

// arrays mutable

let fruits = ["mango","kiwi","grapes"];

fruits[1] = "banana";

console.log(fruits);

// Arrays method , adding or removing elements :[push, pop, unshift, shift].

let cars = ["BMW","Toyota","Honda","BYD"];
console.log(cars.push("Suzuki")); //it adds a new index at the end of the array and returns the new length of the array.
console.log(cars.pop()); //it will delete the last index of the array and return the deleted value.
console.log(cars.unshift("Skyline")); // it will add a new index at the start of the array and return the new length of the array.
console.log(cars.shift()); // it will delete the first index of the array and return the deleted value.


// arrays method for searching and accessing elements: [indexOf, lastIndexOf, includes, find, findIndex].
// indexOf() , includes()

let animals = ["cat","dog","loin","tiger"]

animals.indexOf("loin"); // if its found it will return the index  otherwise it will return -1.

animals.includes("cat"); // if its found it will give true otherwise false.

// arrays method concatination ( concat() ), reverse

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

arr1.concat(arr2); // it will combine arr1 and arr2 and return a new array.

arr2.concat(arr1); // it will combine arr2 and arr1 and return a new array.

arr1.reverse(); // it will reverse the order of elements in array.

// arrays method slice(original array remains same), splice(original array changes)


let newArr = ["AA","BB","CC","DD","EE"];

newArr.slice(-1); // it will return a new array with the last element of the original array.
newArr.slice(3); // it will return a new array with elements from index 3 to the end of the array.
newArr,slice(1,3); // it will return a new array with elements from index 1 to index 3 (not including index 3).

newArr.splice(1,2,"YY"); // it will remove 2 elements from index 1 and add "YY" in their place, original array will be changed.









