// A good string is a string that starts withletter 'a' has a length > 3. Find if the string is good or bad.
let str = "astring";
if( (str.length > 3) && (str[0] == 'a') )
{

    console.log("good string");
} 
else{
    console.log("bad string")
}

console.log("--------------------------------------------------------------------------------------------------------------------------");
// find the output of the following code snippet
let num =  12;

if ( (num%3 == 0) && ( (num+1 == 15) || (num-1 == 11) ) ) 
{
    console.log("safe");
}
else{
    console.log("unsafe");
}