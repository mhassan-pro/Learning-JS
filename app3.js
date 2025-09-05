// "this" keyword.
// refers to an object that is executing the current piece of code. 
const student = {
    name: "Hassan",
    age: 23,
    eng:90,
    math:80,
    phy:85,
    get avg(){
        let avg = (this.eng + this.math + this.phy) / 3 ;
        console.log("The average marks are :",avg) ;
    }
}

student.avg;

/* Try and Catch
   the Try statement allows you to define a block of code to be tested for error while it is being executed.
    the Catch statement allows you to define a block of code to be execued if an error occurs in a block.
 */
try{
    console.log(a);
}
catch{
    console.log("Error found");
}

/* Miscellaneous Topics
  Arrow functions syntax[ const func=(arg1,arg2) => { function definition} ] */

  const sum = (a,b) => {
    console,log(a+b);
  }
  sum(23,54);

  const pow = (a,b) => {
    return a ** b;
  }
  pow (2,8);

  // implicit return in Arrow function

  const mul = (a,b) => (
    a * b
  );

  /* Set Timeout
   setTimeout (function ,timeout) 
   It take time in mili second (1000 ms = 1 s )*/

   console.log("Hi");

   setTimeout( ()=> {
    console.log("Apna College");
   },5000); 

   console.log("Wellcome");

   /* Set Interval
    setInterval (function, timeout);
    it will print after every ( number of seconds ) provided 
    Every call has an indiviual id 
    To stop  clearInterval(id);*/

    let id = setInterval(() => {
        console.log("Hello World");
    },2000);

/* "this"  with arrow function 
these function uses lexical scope 
for nomal function this refers to the object that is calling the function
for arrow function this refers to the object where the function is defined
*/


// Arry Methods  they take callback as input
// forEach arr.forEach(some function defination or name);

let arr = [1,2,3,4,5];

let print = function(el){
  console.log(el)
};
arr.forEach(print);

/* Every Method
Return true  value if every element of array gives true for some function Else return false 
arr.every(some function defination or name); */

let num1 = [0,2,4];
let finalValue1 = num.every((el) => el % 2 == 0 );
console.log(finalValue1);

// Reduce Method
let num = [1,2,3,4,5];
let finalValue = num.reduce((res,el) => res + el );
console.log(finalValue);