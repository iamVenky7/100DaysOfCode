// Splitting code across multiple lines (objects)

let age = 22;
let userName = "Venky!";
let hobbies = ["Sports", "Cooking,", "Reading"];
let job = {
  title: "developer",
  place: "Banglore",
  salary: 30000,
};

/* alert(hobbies[0]);
alert(job.title); //to access object properties use .
 */

//Performing Operations
//adultYears = age - 18;
//alert(adultYears);

/* 
age = 45;
adultYears = age - 18;
 alert(adultYears);
 */

// ****FUNCTIONS****  ( key features of programming)
/* 
let totaladultYears;

function calculateAdultYears() {
  totaladultYears = age - 18; // we got error if declare variable inside and if we declare both inside and outsite we get undefined
}

calculateAdultYears();
alert(totaladultYears);

age = 45;
calculateAdultYears();
alert(totaladultYears);
 */

//***Returning Values***

/* let totaladultYears;

function calculateAdultYears() {
  return age - 18;
}
totaladultYears = calculateAdultYears();
alert(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears();
alert(totaladultYears);
 */

//*** Passing Data into Functions with Parameters**
let totaladultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;

  /*  let result;
  result=userAge-18;
  return result; */
}
totaladultYears = calculateAdultYears(age);
//alert(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);
//alert(totaladultYears);
console.log(totaladultYears);

//***INTRODUCING METHODS***

let person = {
  name: "venky", //property
  greet() {
    //method
    console.log("hello!");
    //alert("Hey there!");
  },
};
person.greet();
