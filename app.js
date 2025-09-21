
let btn = document.querySelector("button");
let list = document.querySelector("ul");    

btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    console.group(country)

    let colleges =await getColleges(country);
    console.log(colleges)

    show(colleges)
})

function show(colleges){
    list.innerText = "";
    for(col of colleges){
        console.log(col);
        
        let li = document.createElement("li")
        li.innerText = col.name;
        list.appendChild(li);
    }

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