/* 1) Create three new variables
  - A variable that stores the name of an online course of your choice
  - A variable thar store the price of that course
  - A variable that stores the three main goals that you have, when taking this course.
 */

let courseName = "JavaScript";
let coursePrice = 4999;
let courseGoals = [
  "learnStrongInBasics",
  "learnAdvanceConcepts",
  "Do Projects & have fun!",
];

// 2) Output ("alert") the three variable values

alert(courseName);
alert(coursePrice);
alert(courseGoals);

// 3)Try "grouping" the three variables together and still output their values thereafter
let onlineCourse = {
  name: courseName,
  price: coursePrice,
  goals: ["strongInBasics", "learnAdvanceConcepts", "projects"],
};

// 4)Also output the second Element in your "main goals" variales

alert(onlineCourse.goals[1]);

/*  5) Add a custom command that does the following:
     - Use your "main goals" variable and access an element by its identifier
    - The concrete identifier value should be dynamic / flexible 
 (i.e. the command can be executed for different identifier)
    - The "main goals" variable should also be dynamic: The command should work with ANY list of values
    - The custom command should provide the accessed value (1.e. the list element)  */

function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
//6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal);
