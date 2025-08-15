/*Q1 for the given start state of array change it final form using splice 
start : ["January","July", "March","August"]
final : ["July","June", "March","August"]
*/

let months = ["January","July", "March","August"];

months.splice(0,2,"July","June")
console.log(months);

/* Q2 return the index of the "javaScript" from the given array if it was reversed. */

let lang = ['c',"c++","java","javascript","python","php"];

let final =lang.reverse().indexOf("javascript");
console.log(final);

