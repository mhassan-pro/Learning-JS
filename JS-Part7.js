/* Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers. */

let arrayAverage = (arr) => {
     let sum = arr.reduce( (sum,el) => sum + el);
    return sum / arr.length;
};

console.log("Output :",arrayAverage([2,4,6,8,3,4,6,5]));