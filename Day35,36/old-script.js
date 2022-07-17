let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); //p a {color:red;}  same as css.  to select all querSelectorAll
anchorElement.href = "https://facebook.com";

// Inserting a new HTML elements via JavaScript

// ADD AN ELEMENT

//1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "click me!";
newAnchorElement.href = "https://amazon.com";
// 2. Get access to the parent element that should hold the new element

let firstparagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content
firstparagraph.append(newAnchorElement);

// Deleting or Remove the DOM elements

//1. select the elements that should be removed
let firstH1Element = document.querySelector("h1");

//2. Remove it!
//firstH1Element.remove();  -- modern browsers
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

//MOVE ELEMENTS

firstparagraph.parentElement.append(firstparagraph);

//Working with 'innerHTML'

//innerHTML
console.log(firstparagraph.innerHTML);
firstparagraph.innerHTML = "Hi! This is <strong>important!</strong>";
