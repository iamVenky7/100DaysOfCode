//Introducing Events

/* User clicks on some element   2)  User types some text into a input field    3) User scrolls to a certain part of the page
(.eg on a button)


Events to which we might want to react - to then execute javaScript code 

SomeElement.addEventListener('<EVENT>',...); */

//Adding first 'click' EventListener.

//let paragraphElement = document.body.firstElementChild;
let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("paragraph clicked");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);
// here by calling function we no need to use ().
//This is also called "a callback function": A function that is passed as a parameter value to another function or method ("to be executed in the future").

//listening to user input events

let inputElement = document.querySelector("input");

function retriveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value; //The 'event' Object

  //let enteredText = event.data;  => This is different
  console.log(enteredText);
  //console.log(event);
}

inputElement.addEventListener("input", retriveUserInput);

//introducing 'Constant variables'('Constants')

//Understanding Variables & Constants
/* 32 - value - age --> Label('Name of the variable')

 Variables are "labeled data containers" */

//Variables
/* "True" variables where the stored value actually changes
let name = 'Venky';
name = 'Ven';
//Constants
"Variables" where the value actually never changes
const enteredValue ='Hi'; */

//Changing Element Styles

// const spanElement = document.getElementById("remaining-chars");
// spanElement.style.backgroundColor = "red";

//Managing CSS  classes with JavaScript

/* spanElement.className = "first-class second-class";
("first-class second-class");
spanElement.className = "warning";
("warning");
spanElement.className = "warning some-class";
("warning some-class");
spanElement.classList.add("warning");
undefined;
spanElement.classList.remove("warning");
undefined; */

//Summary
