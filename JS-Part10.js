let btn = document.createElement('button');
let body = document.querySelector('body');
body.append(btn);
btn.innerText = "Click !me"

btn.addEventListener('click' , function(){
    btn.style.backgroundColor = "blue"; 
})

let input = document.querySelector('input');
let h2 = document.querySelector('h2');

input.addEventListener('input', function(){
    h2.innerText = input.value.replace(/[^a-zA-Z ]/g, "");;
})

