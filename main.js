/* const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript

// Variables: Containers that store values. Declare a variable with the "let" keyword
let myVariable;
myVariable = 'Bob';
myVariable = [1, 'Bob', 'Steve', 10]

//conditionals
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Aww, but chocolate is my favorite...')
}

// Function that takes two numbers as arguments and multiplies them
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
*/
/*document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
})
*/
// Alternatively
/*let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
})

document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
})
*/

// Adding an image changer
let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
        myImage.setAttribute('src', 'images/logo2.png');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

// Adding a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}