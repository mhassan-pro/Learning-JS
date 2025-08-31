// Write an arrow function that return the square of a number.

const square = (n) => (
     n**2 );
console.log( square(6) );

// write a function that prints "Hello World" 5 times at interval of 2 sec.


let id = setInterval(() =>{
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
},10000);