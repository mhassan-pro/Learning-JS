/* Q1 start of the array change it to the given using methods 
start : ["January","July", "March","August"]
final : ["July","June", "March","August"]
*/  

let start = ["January","July", "March","August"];

start.shift();
start.shift();
start.unshift("June");
start.unshift(("July"));
console.log(start);