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