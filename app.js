
let btn = document.querySelector("button");
let img = document.querySelector("#dogImg");    

btn.addEventListener('click', async ()=>{
    let image = await getImage();
    console.log("image:",image);
    img.setAttribute("src",image);
    img.scroll.image;

})

 let url = "https://dog.ceo/api/breeds/image/random";

 async function getImage(){
    try{
    let reqImg = await axios.get(url);
    return reqImg.data.message;
 }
 catch(err){
    console.log("errrr---",err)  
    return "no image found";
 }
}