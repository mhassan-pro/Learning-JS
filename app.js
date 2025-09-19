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


// function saveToDb(data, success, failure){
//     let randomInternetSpeed = Math.floor(Math.random() *10) + 1;
//     if(randomInternetSpeed > 5){
//         success();
//     } else{
//        failure();
//     }
// }

// saveToDb("apna college",() => {
//      console.log("success 1:your data was saved");
//      saveToDb("hello world", 
//         () => {
//             console.log("success 2: data was saved")
//             saveToDb("Hassan",
//                 () => {
//                     console.log("success 3: data was saved")
//                 },
//                 () => {
//                     console.log("failure 3: data was not saved")
//                 }
//             )
//         },
//         () => {
//             console.log("failuer 2 : data was not saved")
//         }
//      )
// }, () => {
//      console.log("weak connection data was not saved")
// });

function saveToDb(data){
    return new Promise ( (resolve, reject) => {

        let randomInternetSpeed = Math.floor(Math.random() *10) + 1;
        if(randomInternetSpeed > 5){
            resolve("data was saved");
        }
        else{
            reject("data was not saved, weak connection");
        }
    });
}    

saveToDb("Apna COllege");