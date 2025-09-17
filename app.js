let h1 = document.querySelector("h1");

function changeColor(color,delay){
    setTimeout(function(){
        h1.style.color = color;
    },delay)

}

