// Generate random number beteem 1 to 100

let randomNumber = Math.floor(Math.random() * 100) +1;

console.log("Random number between 1 to 100 is : ", randomNumber);

// generate a random number between 1 to 5.
let newRandomNumber = Math.floor(Math.random() * 5) +1;
console.log("Random number between 1 to 5 is : ",newRandomNumber);

// Guessing Game
const max = prompt("Enter the max number");

const  random = Math.floor(Math.random() * n) + 1;

let guess = prompt("Guess the random number");

while(true){
    if( guess === ("quit" || "Quit"))
    {
        console.log("You Quit ");
        break;
    }
    if (guess == random)
    {
        console.log("You win")
    }
};