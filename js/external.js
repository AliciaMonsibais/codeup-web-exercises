"use strict";

console.log('Hello from external Javascript!');

alert("Welcome to my website!");

var userColor = prompt('What is your favorite color?');
console.log("The user's favorite color is " + userColor);
if (userColor === "yellow" || userColor === "Yellow") {
    alert("Yellow? Gross!");
} else if (userColor === "purple" || userColor === "Purple") {
    alert ("Purple? How noble of you.");
} else if (userColor === "blue" || userColor === "Blue") {
    alert ("I'm sorry to tell you only lame people like blue.");
} else if (userColor === "grey" || userColor === "Grey" || userColor === "gray" || userColor === "Gray") {
    alert (userColor + "-t!")
}
else {
    alert("Great, " + userColor + " is my favorite color too!");
}

//exercise #3

//movie rental exercise

var mermaid = Number(prompt("How many days will you rent The Little Mermaid?"));
console.log("The user will rent the Little Mermaid for " + mermaid + " days.");
var bear = Number(prompt("How many days will you rent Brother Bear?"));
console.log("The user will rent Brother Bear for " + bear + " days.");
var hercules = Number(prompt("How many days will you rent Hercules?"));
console.log("The user will rent Hercules for " + hercules + " days.");
var movieTotal = (mermaid + bear + hercules) * 3;
    alert("Your total will be $" + movieTotal + ".");

//pay rate exercise

var google = 400;
var amazon = 380;
var facebook = 350;

var response = confirm("I hear you're a contractor for different companies.");
    if (response) {
        alert("Awesome, let's talk numbers.");
    } else {
        alert("Too bad. You're a contractor for this activity.");
    }
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var contractTotal = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours);
    alert("You will make $" + contractTotal + " this week.");

//class exercise

var classTime = prompt("What time is the class?");
var noTimeConflict = !confirm("Does the student have a class at " + classTime + "?");
var maxClassSize = Number(prompt("What's the maximum class size?"));
var studentsEnrolled = Number(prompt("How many students are currently enrolled?"));
    alert("Student can enroll in class: " + (noTimeConflict && (studentsEnrolled < maxClassSize)));


//product offer exercise

var premiumMember = confirm("Are you a premium member of our super awesome program?");
    var numberOfItems = Number(prompt("How many items did the customer buy?"));
    var offerValid = confirm("Is the coupon still good?");
    alert("Customer coupon valid: " + (offerValid && (premiumMember || numberOfItems >= 2)));
