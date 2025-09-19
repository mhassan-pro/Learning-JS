let h1 = document.querySelector("h1");

async function greet(){
    throw "page not found"
    return "hello world";
}
greet()
.then((result) => {
    console.log("promise was resolved",result);
})
.catch((error) => {
    console.log("promise was rejected",error)
})

let demo =async() => {
    return 5;
}