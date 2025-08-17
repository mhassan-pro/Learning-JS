let favMovie = "Jhon Wick";
let guess = prompt("Guess the favorite movie name:")

while ( (guess != favMovie))
{
    if (guess == "quit")
    {
        console.log("You quit.")
        break;
    }
    guess = prompt("Wrong guess!");

}

if(guess == favMovie)
{
    console.log("Congrats!!!");
}