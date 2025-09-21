
let btn = document.querySelector("button");
let img = document.querySelector("#dogImg");    

btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    console.group(country)

    let colleges =await getColleges(country);
    console.log(colleges)

    show(colleges)
})

function show(colleges){
    for(col of colleges)
        console.log(col);

}

let url = "http://universities.hipolabs.com/search?name=";

async function getColleges(country){
    try{
       let result = await axios.get(url+country);
       return result.data;
    }
    catch(error){
        console.log("error 404".error);
    }
}