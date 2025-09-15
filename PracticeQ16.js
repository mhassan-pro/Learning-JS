let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = input.value;
    input.value = "";
    ul.appendChild(item);
})