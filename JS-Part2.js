/* Qs1. Create a number variable num with some value.
Now, print “good” if the number is divisible by 10 and print “bad” if it is not. */

let num = 10;
if (num % 10 == 0)
{
    console.log("Good");
}
else
{
    console.log("Bad")
}
console.log("---------------------------------------------------------------------");

/* Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting
their name & age) :
name is age years old.
[Use template Literals to print this sentence] */ 

let userName = prompt("Enter user's name");
let userAge = prompt("Enter user's age");

let massage = `${userName} is ${userAge} year's old.`;
alert(massage);

console.log("---------------------------------------------------------------------");
/* Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December.
[Use the number as the case value in switch]
 */
let quarter = 3;
switch (quarter)
{
    case 1:
        console.log("January, February, March");
        break;

        case 2:
        console.log("April, May, June");
        break;

        case 3:
        console.log("July, August, September");
        break;

        case 4:
        console.log("October, November, December.");
        break;

        default:
        console.log("Invalid quarter number!");   
}

console.log("---------------------------------------------------------------------");
