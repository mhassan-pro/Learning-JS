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

// Reduce Method [if the initial value is not given it starts with first element ]
let num = [1,2,3,4,5];
let finalValue = num.reduce((res,el) => res + el );
console.log(finalValue);

/*  Default Parameters
  Giving the default value to the argument
  function func (a, b = 2)
   { 
     // do something 
    } */
   function power(a, b=3){
    return Math.pow(a,b);
   }  
 
   console.log(power(5));


   /* Spread
    Spread and iterable into multiple values
     function func (...arr) 
      {
       // do something
      }
  */
  function newFunc(...num){
    console.log(num);

  }
  newFunc(1,2,3,5,6);
    
// Spread with array

let arr1=[1,2,3,4,5];
let newArr = [...arr1];
console.log(newArr);

// Spread with objects
let data = {
  email:"Mhassan.pro@gmail.com",
  password:"asdfg"
}
let dataCopy = {...data, id:1234, country:"Pakistan"};
console.log(dataCopy);


/* Rest
 Allows a function to take an indefinite number of arrguments and bundle them in an array */
  
function sum(...args){
  for (let i = 0; i < args.length; i++){
    console.log("You gave us :",args[i])
  }
}

function sum(...args){
  return args.reduce( (sum,el) => sum + el);
}
sum(1,2,3,4,5,6,7,8,9);

/* Destructuring
stroing values of arrays in multiple variables. */ 

let names = ["ali","hamza","asad","umer","umair","zohaib","imran","sultan"];
//let winner = names[0];
//let runnerUp = names[1];
//let secondRunnerUp = names[2];

let [winner, runnerUp , others] = names  // others will use rest concept to store the remaning values.

// Destructuring object

const student1 = {
  name:"umer",
  age:23,
  class:12,
  subject:["Math","Computer Science","Physics"],
  username:"umer@123",
  password:"asdf"
}

//let username =  student1.username;
//let password = student1.password;

let {username : user , password : secret,  city:place = "Bahawalpur", country = "Pakistan"} = student1; // city and country are not present in the object so it will take the default values provided


/* DOM Manipulation
   Select Elements
  -> getElementsById  (returns the element as an object or null (if not found) ).
  -> getElementsByClassName (Returns the Element as an HTML Collection or empty collection if not found).
  -> getElementsByTagName (return the elements as an html collection or empty collection (if not found). )*/

  /* Query Selectors
    -> Allows us to use any CSS selector
    -> document.querySelector ('p'); Selects first p element 
    -> document.querySelector ('#myId') select first element with id= myId
    -> document.querySelector ('.myClass') select first element with class=myClass
    -> document.querySelectorAll ("p") select all p elements
  */

  /* Using Properties & Methods
    -> innerText : shows the visible ext contain in a node 
    -> TEXTcONTENT : shows the entire text
    -> innerHTML : shows full markup
 */

  /* Manipulating Attributes (basically these are called getter and setter)
    ->obj.getAttribute( attr )
    ->obj.setAttributes( attr, val)

    Manipulating Style
    -> style property
    -> obj.style 
  */
  /* Manipulating Style
     using classList Property

    -> obj.classList
    -> obj.classList.add('className') : add a class
    -> obj.classList.remove('className') : remove a class
    -> obj.classList.toggle('className') : toggle between add & remove
    -> obj.classList.contains('className') : return true or false if the class is present or not
  */
  /* Navigation
    -> parentElement 
    -> children
    -> childElementCount
    -> nextElementSibling
    -> previousElementSibling 
  */

  /* Adding Elements
      -> document.createElements (`tagname`) use to create new elements.
    -> appendChild (element) use to add elements as a child to the parent element
    -> append (element)
    -> prepend (element)
    -> insertAdjacent (where, element)

    Removing Elements
     -> removeChild (element)
     -> remove (element)
  */
/* DOM Events
   -> Events are signals that something has occurred.(user input / action)
   ->
   onclick ( when an element is clicked)
   onmouseenter (when mouse enters an element)
*/ 
 
/* Event Listener

   element.addEventListener(event, callback)

   Keyboard Events
   key : it tell us which key is pressed
   code : it retrun the particular code of key pressed

   More Event
   -> channge event : it occurs when value of an element has been changed (only works on input,textarea,and select elements).
   -> input event : the event fires when the value of an input ,select or textarea element has been changed (character key only trigger).
*/

/* Call Stack 
   -> A data structure that track which function in calling 
    */

   function one(){
    return 1;
   }
   function two(){
    return one() + one();
   }
   function three(){
    let ans = two() + one();
    console.log(ans); 
   }

   three();

/*call back hell
 changeColor("red",1000,() => {
    changeColor("orange",1000,()=>{
        changeColor("blue",1000,() => {
            changeColor("green",1000,() =>{
                changeColor("purple",1000,() =>{});
            });
        });
    });
});
*/

    


   // Promises


   function changeColor(color, delay){
   return new Promise((resolve,reject) => {
         setTimeout(() => {
        h1.style.color = color;
        resolve("color changed")
    },delay)

    })
}

changeColor("red",1000)
.then( () => {
    console.log("Changed to red color")
    return changeColor("orange",1000)
})
.then( () => {
    console.log("Changed to orange color")
    return changeColor("purple",1000)
})
.then( () => {
    console.log("Changed to purple color")
    return changeColor("blue",1000)
})
.then( () => {
    console.log("Changed to blue color")
    return changeColor("green",1000)
})
.then( () => {
    console.log("Changed to green color")
    
})
.catch( () => {
    console.log("There is sme error")
})
   

function saveToDb(data, success, failure){
    let randomInternetSpeed = Math.floor(Math.random() *10) + 1;
    if(randomInternetSpeed > 5){
        success();
    } else{
       failure();
    }
}

saveToDb("apna college",() => {
     console.log("success 1:your data was saved");
     saveToDb("hello world", 
        () => {
            console.log("success 2: data was saved")
            saveToDb("Hassan",
                () => {
                    console.log("success 3: data was saved")
                },
                () => {
                    console.log("failure 3: data was not saved")
                }
            )
        },
        () => {
            console.log("failuer 2 : data was not saved")
        }
     )
}, () => {
     console.log("weak connection data was not saved")
});

function saveToDb(data){
    return new Promise ( (resolve, reject) => {

        let randomInternetSpeed = Math.floor(Math.random() *10) + 1;
        if(randomInternetSpeed > 4){
            resolve("data was saved");
        }
        else{
            reject("data was not saved, weak connection");
        }
    });
}    
//promise Chaining
saveToDb("Apna College")
    .then((result) => {
        console.log("data 1 saved : promise was resolved");
        console.log("result of promise",result)
        return saveToDb("hello world")
    })
    .then( (result) => {
        console.log("data 2 saved: promise was resolved")
              console.log("result of promise",result)
        return saveToDb("Hassan")
    })
    .then((result) => {
        console.log("data 3 : was saved")
              console.log("result of promise",result)
    })
    .catch((error)=>{
        console.log("promise was rejected")
              console.log("error of promise",error)
    });


/* Async Function
    creates an async function   (async and await) by default they return promise  */


// async function greet(){
//     throw "page not found"
//     return "hello world";
// }
// greet()
// .then((result) => {
//     console.log("promise was resolved",result);
// })
// .catch((error) => {
//     console.log("promise was rejected",error)
// })

// let demo =async() => {
//     return 5;
// }

 function changeColor(color, delay){
   return new Promise((resolve,reject) => {
         setTimeout(() => {
            let num = Math.floor(Math.random() * 5);
            if (num > 3){
                reject("Promise rejected")
            }
        h1.style.color = color;
        console.log("Color changed to ",color)
        resolve("color changed")
    },delay)

    })
}

async function demo(){
    try {
        await changeColor("pink",1000);
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
        await changeColor("orange",1000)}
    catch (error){
        console.log(error)
    }
     

     let a = 5;
     console.log(a);

}



function getNum (){
    return new Promise((resolved,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num)
            resolved();
        },1000);

    })
}

async function greet(){
     for(let i = 0;i< 10 ;i++){
        await getNum();
     }
}


/* JSON
    JavaScript Object Notation
    
    ->JSON.parse(data) method
    to parse a string data into json object.

    ->JSON.stringify(json) method
    to parse a JS object into JSON 

 */

    let jsonRes = `{"fact":"There are approximately 100 breeds of cat.","length":42}`;
console.log(jsonRes)

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let STUDENT = {
    name:"Hassan",
    age: 24,
    isActive: true
}

let studentJSON = JSON.stringify(STUDENT);
console.log(studentJSON)

/* Testing API request
     ->Hoppscotch
     ->Postman
*/


/* First Request using fetch
this method return promise in foorm of response object
api calls are working asynchronously
  */
 let url = "https://catfact.ninja/fact";
 fetch(url)
 .then((response) => {
    console.log("accepted",response);
    // response.json().then((data) => {
    //     console.log(data); })
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
    return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
    return fetch(url)
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.fact)
    console.log(data)
})
 .catch((error) => {
    console.log("rejected",error)
 })
    /* Second Request using async await
    */
async function getFetch(){
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    console.log(data.fact)

    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log(data1)
    console.log(data1.fact)

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2)
    console.log(data2.fact)
}
catch (err){
    console.log(err)
}
let number  = 123;
console.log(number)
}


// Axios library to make http request
// to get random cat facts
btn.addEventListener('click', async ()=>{
    let fact = await getFetch();
    console.log("fact--",fact);
    paragraph.innerText =fact;
})

 async function getFetch(){
    try{
    let req = await axios.get(url);
    return req.data.fact;
 }
 catch(err){
    console.log("errrr---",err)
    return "no fact found";
 }
}


