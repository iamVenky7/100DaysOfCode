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
  let enteredText = event.target.value;

  //let enteredText = event.data;  => This is different
  console.log(enteredText);
  //console.log(event);
}

inputElement.addEventListener("input", retriveUserInput);

//The 'event' Object
