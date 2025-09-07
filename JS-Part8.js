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

/* Qs2.Create a new array using the map function
 whose each elementis equal to the original element plus 5. */

let arr = [1,2,3,4,5];
let newArr = arr.map( (el) => el + 5 );

console.log(newArr); 