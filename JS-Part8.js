/*Qs1.Square and sum the array elements using the arrow
function and then find the average of the array. 
 */

let nums = [1,2,3,4,5];
let square = nums.map( (el) =>
    el * el );
console.log(square);

let sum = square.reduce( (sum , el) => sum + el );
console.log(sum);

let avg = sum / nums.length;
console.log(avg);

console.log("==============================");
/* Qs2.Create a new array using the map function
 whose each elementis equal to the original element plus 5. */

let arr = [1,2,3,4,5];
let newArr = arr.map( (el) => el + 5 );

console.log(newArr); 
console.log("==============================");

/* Qs3. Create a new array whose elements are in uppercase of words present in the
original array.
 */

let words = ["hello","hi","bye","good","bad","new"];
let upperCaseWords = words.map( (el) => el.toUpperCase() );
console.log(upperCaseWords);

console.log("==============================");
/* Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/

let doubleAndReturnArgs = (arr,...args) =>
[ 
    ...arr,...args.map((el) => el * 2),
];

console.log( doubleAndReturnArgs([2,6,4],223,55)
)


console.log("==============================");