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
console.log(largerThan(arr,num));

console.log("------------------------------------------");


