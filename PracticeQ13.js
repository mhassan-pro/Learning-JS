/* Reduce Method
Finding Maximum in an array */

let num = [1,2,3,4,5,6,11,34,65,7,2,8,9,2];

let finalValue = num.reduce((max,el) => 
{
    if(max < el){  
        return el;
    }
    else{
        return max;
    }
}
)
console.log("The maximun value is :",finalValue);
console.log("==========================");

/* Check if all the numbers in our array are 
multiple of 10 or not  */

let num2 = [10,20,30,40,50,60,70,80,90,100];

let finalValue2 = num2.every((el) => 
    {
        console.log(el);
         return el % 10 == 0;
    }
)
console.log(finalValue2);

console.log("==========================");

// Create a function to find minimum number in an array.

let  num3 = [-1,3,5,2,7,8,4,9,-10];

let finalValue3 = num3.reduce( (min,el) => 
{
    if(min < el)
    {
        return min;
    }
    else{
        return el;
    }
});

console.log("The minimum value is :",finalValue3)