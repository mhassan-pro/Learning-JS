// <p> tag with red text that says "Hey I'm red!"
let newPara = document.createElement('p');
newPara.innerText = "Hey I'm red!";
let body = document.querySelector('body');
body.appendChild(newPara);
newPara.classList.add('red');


// an <h3> tag with blue text that says "I'm a blue h3!"
let heading = document.createElement('h3');
heading.innerText = "I'm blue h3!";
body.appendChild(heading);
heading.classList.add('heading');


// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says "I'm in a div"
//     a <p> that says "ME TOO 
let div = document.createElement('div');
div.classList.add('div-style');
body.appendChild(div); 

let divHeading = document.createElement('h1');
divHeading.innerText = "I'm in a div";
div.appendChild(divHeading);

let divPara = document.createElement('p');
divPara.innerText = "ME TOO!";
div.appendChild(divPara);

