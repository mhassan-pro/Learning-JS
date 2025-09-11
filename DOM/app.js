let newPara = document.createElement('p');
newPara.innerText = "Hey I'm red!";
newPara.style.color = "red";
let body = document.querySelector('body');
body.appendChild(newPara);
