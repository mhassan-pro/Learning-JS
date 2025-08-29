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
    
    console.log(str.slice());
}
uniqueChar(str);

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

 /* Qs5. Write a JavaScript function to generate a random number within a range 
 (start,end).  */

 function randomNumber(start,end){
    let random = Math.floor(Math.random() *end) + start;
    console.log(random);
 }
