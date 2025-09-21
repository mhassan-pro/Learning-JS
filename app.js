/* First Request using fetch
this method return promise in foorm of response object
api calls are working asynchronously
  */
 let url = "https://catfact.ninja/fact";
//  fetch(url)
//  .then((response) => {
//     console.log("accepted",response);
//     // response.json().then((data) => {
//     //     console.log(data); })
//     return response.json();
// })
// .then((data) => {
//     console.log(data.fact)
//     console.log(data)
//     return fetch(url);
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data.fact)
//     console.log(data)
//     return fetch(url)
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data.fact)
//     console.log(data)
// })
//  .catch((error) => {
//     console.log("rejected",error)
//  })
    /* Second Request using async await
    */
async function getFetch(){
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    console.log(data.fact)

    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log(data1)
    console.log(data1.fact)

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2)
    console.log(data2.fact)
}
catch (err){
    console.log(err)
}
let number  = 123;
console.log(number)
}
