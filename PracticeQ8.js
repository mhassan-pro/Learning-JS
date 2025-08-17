let favMovie = "Jhon Wick";
let guess = prompt("Guess the favorite movie name:")

while ( (guess != favMovie) && (guess != "quit" ) )
{
    guess = prompt("Wrong guess!");

}

if(guess == favMovie)
{
    console.log("Congrats!!!");
}