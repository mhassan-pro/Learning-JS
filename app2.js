/* Objects literals  
Used to store keyed collections  and complex entities 
property => (key , value) pair
objects are collection of properties. */

let student = {
    name:"Hassan",
    age: 23,
    marks: 80

};
console.log(student.marks);

// Thread / Twitter Post
/* Creating an object literal for the
 properties of thread / twitter post includes 
 -> username
 -> content
 -> likes
 -> reports
 -> tags */

 const post = {
    username : "@muhammadhassan",
    content : "Developer Road-Map",
    likes : 200,
    reports : 5,
    tags : ["@apnacollege", "@developerroadmap"]

 };

 /* Get values 
   1: (object name.property)  we use object name a dot and property
   2:(object name["property"]) in this we use object name and then square brackets and inside
   square brackets properties are written in side double quotes
   
   */

 console.log(post.username); //method 1 
 console.log(post.tags[0]);  // method 1 
 console.log(post["content"]); //method 2

/* Add , Update and delete Values */

student.name = "Zaynab"; // updated name
console.log(`Updated student name : ${student.name}`);

student.age = 17;
console.log(`Updated student age : ${student.age}.`);

console.log(`Updated Student object :`, student);

delete student.marks; // it will delete that specific property.

console.log(`After deleting marks property :`, student);



 



