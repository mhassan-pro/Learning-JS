/*Q1 for the given string 
let msg = "help!          ";
Trim and convert it to uppercase */

let msg = "Help!               ";
let trimAndUpper = msg.trim().toUpperCase();
console.log(trimAndUpper);

/*Q2 For the string -> let name = "Apna College", predict the output of the following .  */
let name = "ApnaCollege";
console.log(name.slice(4 , 9)); //Colle
console.log(name.indexOf("na")); //2
console.log(name.replace("Apna","Our")); //OurCollege

/*Q3 Seprate the "College" part above and replace 'l' with 't' in it  */

let text = "ApnaCollege";
console.log(text.slice(4).replace('l' , 't'));