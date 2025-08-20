// Loops ( use to iterate a piece of code).

// for loop syntax [ for (initinalization; condition; updation) { statements } ].

// practice Q print 1 to 5 numbers.

for ( let i = 1 ; i<=5 ; i++){
    console.log(i);
}

console.log("----------------------------");

// print odd numbers from 1 to 15.

for ( let j = 1; j<=15; j++)
{
    if ( !(j % 2 == 0) )
    {
        console.log(j);
    }
}

console.log("----------------------------");
// print 1 to 15 even numbers.

for ( let k = 2; k<=10; k++)
{
    if ( k % 2 == 0 )
    {
        console.log(k);
    }
}

console.log("----------------------------");
// print multiplication table of five.
let n = prompt("Enter a number to print its multiplication table: ");
n = parseInt(n);

for ( let m = 1; m <= 10; m++){
    console.log(`${n} * ${m} = ${n * m}.`);
} 

console.log("----------------------------");

// nested loops ( use to iterate a piece of code inside another loop).

for ( let o = 1; o<= 5 ; o++)
{
    console.log(`Outer loop : ${o}`);
    for (let p = 1; p <= 5; p++ )
    {
        console.log(`Inner loop ${p}`)
    }
}

console.log("----------------------------");
// while loop syntax [ while(Condition) {statement} ].
let x = 1;
while (x <= 5)
{
  console.log(`Number :${x}`);
  x++;
}

console.log("----------------------------");
// break keyword

while (x <= 10)

    {
        if(x == 6)
        {
            break;
        }
        console.log(`Number :${x}`);
        x++;
    }

console.log("----------------------------");
// lopps with array

let fruits = ["mango","apple","kiwi","grapes","pineapple","orange"];

for ( let i = 0; i<fruits.length; i++)
{
    console.log(i, fruits[i]);

}

console.log("----------------------------");    

// nested loops
 
let heroes = [ ["spiderman","batman","superman","ironman"],["wonder women","captain america","thor","loki"] ];

for ( let i =0; i<heroes.length; i++)
{
    console.log(i, heroes[i],heroes[i].length);
    for (let j = 0; j<heroes[i].length; j++)
    {
        console.log(`j=${[j]}, ${heroes[i][j]}`);
    }
}

// for of loop syntax [ for(element of arrays)]

let fruits2 = ["apple","grapes","kiwi","orange","peach","banana"];

for( fruit of fruits2  )
{
    console.log(fruit);
}