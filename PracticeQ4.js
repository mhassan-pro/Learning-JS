/* for the given string 
let msg = "help!          ";
Trim and convert it to uppercase */

let msg = "Help!               ";
let trimAndUpper = msg.trim().toUpperCase();
console.log(trimAndUpper);

/* For the string -> let name = "Apna College", predict the output of the following .  */
let name = "ApnaCollege";
console.log(name.slice(4 , 9)); //Colle
console.log(name.indexOf("na")); //2
console.log(name.replace("Apna","Our")); //OurCollege