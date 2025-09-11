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

/* Qs3. Access the btn using the querySelector and button id. Change the button
background color to blue and text color to white.
 */
let btn = document.querySelector('#btn');
btn.classList.add('btnStyle');

/* Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
Change its color to purple.
 */

let h1Element = document.createElement('h1');
body.append(h1Element);
h1Element.innerText = "DOM Practice";
h1Element.classList.add('h1-Style');

/*Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
where Delta is bold.  */

let pElement = document.createElement('p');
body.prepend(pElement);
pElement.innerHTML = "Apna College <b>Delta</b> Practice";