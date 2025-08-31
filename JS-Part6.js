//Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [1,3,5,7,12,11,10,9];
let num = 4;

function largerThan (arr,num){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
 largerThan(arr,num);

console.log("------------------------------------------");

/* Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh”
 */
let str = "abcdabcdefgggh";
function uniqueChar(str){
    for (let i = 0; i< str.length;i++){
        if(str.indexOf(str[i]) == i){
            console.log(str[i]);
        }
    }
}
uniqueChar(str);
console.log("------------------------------------------");


/* Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"]
output : "United States of America"
 */
 let country = ["Australia", "Germany", "United States of America"];
 function longestCountry (country){
    for(let i = 0; i < country.length ; i++){

    }
 }

console.log("------------------------------------------");
 /* Qs4. Write a JavaScript function to count the number
        of vowels in a String argument.
 */
let string = "Capital University Of Science & Technology";

function numOfVowels(string){
  let count = 0;
  string.toLowerCase();
  for(let i = 0; i < string.length; i++)
  {
    if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
        count ++;
    }
  }
  return count;
}
  let finalAns =  numOfVowels(string);
  console.log("Number of vowels in string are :",finalAns);
 console.log("------------------------------------------");

 /* Qs5. Write a JavaScript function to generate a random number within a range 
 (start,end).  */

let start = prompt("Enter");
  start = parseInt(start);
let end = prompt("Enter");
  end = parseInt(end);

 function randomNumber(start,end){
    for(let i=0; i<5; i++){
    let diff = end - start;
    let random = Math.floor(Math.random() * diff ) + start;
    console.log(random);
    }
 }

 randomNumber(start,end);



