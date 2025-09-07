/* Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers. */

let arrayAverage = (arr) => {
     let sum = arr.reduce( (sum,el) => sum + el);
    return sum / arr.length;
};

console.log("Output :",arrayAverage([2,4,6,8,3,4,6,5]));
console.log("==========================================");

/* Qs2. Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not. */
let isEven = (num) => {
    let reminder = num.every((el) => el % 2)
    return reminder == 0;
}
console.log("Output :",isEven([2]));