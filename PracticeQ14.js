let newPara = document.createElement('p');
newPara.innerText = "Hey I'm red!";
let body = document.querySelector('body');
body.appendChild(newPara);
newPara.classList.add('red');

let heading = document.createElement('h3');
heading.innerText = "I'm blue h3!";
body.appendChild(heading);
heading.classList.add('heading');


