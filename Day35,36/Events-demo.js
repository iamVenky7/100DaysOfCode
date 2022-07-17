let productNameInputElement = document.getElementById("product-name");

let remainingCharsElement = document.getElementById("remaining-chars");
//console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainigCharecters(event) {
  let enteredText = event.target.value;
  let enteredTextlength = enteredText.length;

  let remainingCharecters = maxAllowedChars - enteredTextlength;
  remainingCharsElement.textContent = remainingCharecters;
}

productNameInputElement.addEventListener("input", updateRemainigCharecters);
