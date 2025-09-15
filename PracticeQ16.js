let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = input.value;
    input.value = "";
    ul.appendChild(item);


    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete')
    item.appendChild(delBtn)

});


    ul.addEventListener('click',function(event){
        if(event.target.nodeName == "BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("deteted")
        }
    })

