/* Reduce Method
Finding Maximum in an array */

let num = [1,2,3,4,5,6,7,2,8,9,2];

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
console.log(finalValue);

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