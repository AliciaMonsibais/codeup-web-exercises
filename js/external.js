"use strict";

console.log('Hello from external Javascript!');

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
console.log("The user's favorite color is " + userInput);
var confirmed = confirm("Great, " + userInput + " is my favorite color too!");

//exercise #3

//movie rental

var mermaid = prompt("How many days will you rent The Little Mermaid?");
console.log("The user will rent the Little Mermaid for " + mermaid + " days.");
var bear = prompt("How many days will you rent Brother Bear?");
console.log("The user will rent Brother Bear for " + bear + " days.");
var hercules = prompt("How many days will you rent Hercules?");
console.log("The user will rent Hercules for " + hercules + " days.");
var movieTotal = confirm("Your total will be $" + ((mermaid * 3) + (bear * 3) + (hercules * 3)));

//pay rate

var response = confirm("I hear you're a contractor for different companies.");
    if (response) {
        alert("Awesome, let's talk numbers.");
    } else {
        alert("Too bad. You're a contractor for this activity.");
    }
var google = prompt("How much does Google pay per hour?");
console.log("The user makes " + google + " per hour with Google.");
var googleHours = prompt("How many hours did you work for Google this week?");
var amazon = prompt("How much does Amazon pay per hour?");
console.log("The user makes " + amazon + " per hour with Amazon.");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebook = prompt("How much does Facebook pay per hour?");
console.log("The user makes " + facebook + " per hour with Facebook.");
var facebookHours = prompt("How many hours did you work for Facebook this week?")
var contractTotal = confirm("You will make $" + ((google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours)) + " this week.");

//class

var studentTime = prompt("What time are you looking for this class to be available?");
if (studentTime === "11:30") {
    alert("Fantastic! There's a class available at that time.");
} else if (studentTime === "1337") {
    alert("Leet!");
} else if (studentTime === "13:37") {
    alert("Leet!");
} else {
    alert(studentTime + " isn't available for your desired course. Shucks.");
}

//product offer

var premium = confirm("Are you a member of our super awesome program?");
    if (premium) {
        alert("Fantastic! Enjoy this nifty item with no purchase necessary!");
    } else {{
       var numberOfItems= prompt("You can receive a promo item! But first, how many items have you bought?");
    }
    if (numberOfItems > 2) {
        alert("Great! Enjoy this promo item.");
    } else {
        alert("Please purchase 2 or more items to receive this super cool promo item.");
    }}