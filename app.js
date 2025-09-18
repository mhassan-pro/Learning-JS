// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//        if( nextColorChange ) nextColorChange();
//     },delay)

// }
// changeColor("red",1000,() => {
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,() => {
//             changeColor("green",1000,() =>{
//                 changeColor("purple",1000,() =>{});
//             });
//         });
//     });
// });


function saveToDb(data, success, failure){
    let randomInternetSpeed = Math.floor(Math.random() *10) + 1;
    if(randomInternetSpeed > 5){
        success();
    } else{
       failure();
    }
}

saveToDb("apna college",() => {
     console.log("your data was saved");
}, () => {
     console.log("weak connection data was not saved")
});