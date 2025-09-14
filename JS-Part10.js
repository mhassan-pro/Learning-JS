let btn = document.createElement('button');
let body = document.querySelector('body');
body.append(btn);
btn.innerText = "Click !me"

btn.addEventListener('click' , function(){
    btn.style.backgroundColor = "blue"; 
})
