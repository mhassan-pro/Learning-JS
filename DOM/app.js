let smallImages = document.getElementsByClassName("oldImg");
 
for( let i=0; i<smallImages.length; i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of imges no. ${i} is changed`)
}