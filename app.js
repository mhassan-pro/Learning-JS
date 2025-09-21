
let btn = document.querySelector("button");
btn.addEventListener('click', async ()=>{
    let fact = await getFetch();
    console.log("fact--",fact);
})
 let url = "https://catfact.ninja/fact";

 async function getFetch(){
    try{
    let req = await axios.get(url);
    return req.data.fact;
 }
 catch(err){
    console.log("errrr---",err)
    return "no fact found";
 }
}