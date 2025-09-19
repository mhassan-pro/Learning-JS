let h1 = document.querySelector("h1");

// async function greet(){
//     throw "page not found"
//     return "hello world";
// }
// greet()
// .then((result) => {
//     console.log("promise was resolved",result);
// })
// .catch((error) => {
//     console.log("promise was rejected",error)
// })

// let demo =async() => {
//     return 5;
// }

 function changeColor(color, delay){
   return new Promise((resolve,reject) => {
         setTimeout(() => {
        h1.style.color = color;
        console.log("Color changed to ",color)
        resolve("color changed")
    },delay)

    })
}

async function demo(){
    await changeColor("pink",1000);
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("yellow",1000);
    await changeColor("orange",1000);
}



function getNum (){
    return new Promise((resolved,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num)
            resolved();
        },1000);

    })
}

async function greet(){
     for(let i = 0;i< 10 ;i++){
        await getNum();
     }
}