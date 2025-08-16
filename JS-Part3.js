 /* Qs1. Write a JavaScript program to get the first n elements of an array.
    [n can be any positive number].
    For example: for array [7, 9, 0, -2] and n=3
    Print, [7, 9, 0] */

    let arr = [7,9,0,-2];
    let n = 3;
    
    let ans = arr.slice(0, n);
    console.log(ans);

/* Qs2. Write a JavaScript program to get the last n elements of an array.
   [n can be any positive number].
   For example: for array [7, 9, 0, -2] and n=3
   Print, [9, 0, -2] */

let arr2 = [7,9,0,-2];
let n2 = -3;
let ans2 = arr2.slice(n2);
console.log(ans2);

// Qs3. Write a JavaScript program to check whether a string is blank or not. 
let str = "";
if(str.length == 0){
    console.log("String is blank.");
}
else{
    console.log("String is not empty.");
}


/* Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case. */

let str1 = "APnaCOllEge";
let index = 2;
if( str1[index]  === str1[index].toLowerCase() ){
    console.log(`Character at index ${index} is lower case.`);
}
else{
    console.log(`Character at index ${index} is not lower case.`)
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string. 

let str3 = "                     Apna College         ";
let finalStr = str3.trim();
console.log(finalStr);

//Qs6. Write a JavaScript program to check if an element exists in an array or not. 
let nums = [1,2,3,4,5];
let element = 2;
if ( !(nums.indexOf(element)  == -1) )
{
    console.log("Element exists");
}
else{
    console.log("Element does not exists.");
}