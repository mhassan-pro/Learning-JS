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