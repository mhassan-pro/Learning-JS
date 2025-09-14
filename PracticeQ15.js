let heading = document.createElement('h2')
let body = document.querySelector('body');
body.append(heading);
heading.innerText = "Generate a random color";

let btn = document.createElement('button');
body.append(btn);
btn.innerText = "Generate Color";
btn.classList.add('btn')

let box = document.createElement('div');
body.append(box);
box.innerText = "This is your new color";
box.classList.add('div-box');

