
let btn = document.querySelector("button");
let paragraph = document.querySelector("#result");    
btn.addEventListener('click', async ()=>{
    let fact = await getFetch();
    console.log("fact--",fact);
    paragraph.innerText =fact;
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