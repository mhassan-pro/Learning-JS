let heading = document.createElement('h2')
let body = document.querySelector("body");
body.append(heading);
heading.innerText = "Generate a random color";

// button to generate color
let btn = document.createElement('button');
body.append(btn);
btn.innerText = "Generate Color";
btn.classList.add('btn')
btn.addEventListener('click', function(){
    let randomColor = getRandomColor();
    box.innerText = randomColor;
    box.style.backgroundColor = randomColor;
    console.log("done")
});

// box to show color
let box = document.createElement('div');
body.append(box);
box.innerText = "This is your new color";
box.classList.add('div-box');

// function to generate random color
function getRandomColor(){
    let red = Math.floor( Math.random() * 255);
    let green = Math.floor( Math.random() * 255);
    let blue = Math.floor( Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
};