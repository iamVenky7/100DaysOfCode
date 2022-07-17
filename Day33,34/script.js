/* "Window" & "document"  
----------------------
-> Built-in Variables & Functions
Global "window" Object - Holds information and functionality related to the active browser window/tab */
//e.g. current location, utility function like alert()
/* 
The "document" Object (window.document)-- Holds information and functionality to the loaded website content
e.g.utility functions to access HTML elements */

//document.body.children[1].children[0].href = "https://www.google.com";
/* 
console.dir(document);
alert();
window.alert("Hey!"); */

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); //p a {color:red;}  same as css.  to select all querSelectorAll
anchorElement.href = "https://facebook.com";
