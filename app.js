let h1 = document.querySelector("h1");

function changeColor(color, delay){
   return new Promise((resolve,reject) => {
         setTimeout(() => {
        h1.style.color = color;
        resolve("color changed")
    },delay)

    })
}

changeColor("red",1000)
.then( () => {
    console.log("Changed to red color")
    return changeColor("orange",1000)
})
.then( () => {
    console.log("Changed to orange color")
    return changeColor("purple",1000)
})
.then( () => {
    console.log("Changed to purple color")
    return changeColor("blue",1000)
})
.then( () => {
    console.log("Changed to blue color")
    return changeColor("green",1000)
})
.then( () => {
    console.log("Changed to green color")
    
})
.catch( () => {
    console.log("There is sme error")
})
    

// changeColor("red",1000,() => {
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,() => {
//             changeColor("green",1000,() =>{
//                 changeColor("purple",1000,() =>{});
//             });
//         });
//     });
// });

    


