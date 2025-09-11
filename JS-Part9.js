/*Qs1. Create a new input and button element on the page using JavaScript only. Set the
text of button to “Click me”; */
let body = document.querySelector('body');

let inputElement = document.createElement('input');
body.append(inputElement)

let buttonElement = document.createElement('button');
body.append(buttonElement)
buttonElement.innerText = "Click me";


/*Qs2. Add following attributes to the element :
- Change placeholder value of input to “username”
- Change the id of button to “btn” */

buttonElement.setAttribute('id','btn');
inputElement.setAttribute('type', 'text')

