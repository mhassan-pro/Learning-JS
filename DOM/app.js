let smallImages = document.getElementsByClassName("oldImg");
 
for( let i=0; i<smallImages.length; i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of imges no. ${i} is changed`);
}

console.dir(document.querySelector("h1") );

console.dir(document.querySelector("#discription") );

console.dir(document.querySelector(".oldImg") );

console.dir(document.querySelector("div a") );

console.dir(document.querySelectorAll("p") );

console.dir(document.querySelectorAll("div a") );