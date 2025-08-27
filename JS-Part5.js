/* Qs1. Create a program that generates a random number representing a dice roll.
   [The number should be between 1 and 6]. */

   let diceRoll = Math.floor(Math.random() * 6) + 1;
   console.log("Dice Roll :",diceRoll);

/* Qs2. Create an object representing a car that stores the following properties for the
   car: name, model, color.
   Print the car’s name. */

   let car = {
    name: "Toyota",
    model: "Grande",
    color: "Black"
   };

console.log("Car,s name :",car.name);

/* Qs3. Create an object Person with their name, age and city.
   Edit their city’s original value to change it to “New York”.
   Add a new property country and set it to the United States.  */

   let Person = {
    name : "Hassan",
    age : 23,
    city : "Bahawalpur"
   } 
   console.log("Before updation :",Person);

   Person.city = "New York";

   Person.country = "United States";
   console.log("After updation :",Person);
