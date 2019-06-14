"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterNumber = confirm("Would you like to enter a number?");
if (enterNumber === true) {
    var whatNumber = Number(prompt("Please enter a number."));
    if (isNaN(whatNumber) === false) {
        alert ((whatNumber % 2 === 0) ? whatNumber + " is an odd number!" : whatNumber + " is an even number!");
        alert(whatNumber + " + 100 = " + (whatNumber + 100));
        if (whatNumber < 0) {
        alert("The number " + whatNumber + " is a negative number.");
        } else {
        alert("The number " + whatNumber + " is a positive number.");
        }
        // else {
        //     alert("Please enter a valid number.");
        // }
    } else {
        alert("Fine, don't have any fun.");
    }
}


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (analyzeColor(blue) === true) {
//         console.log("blue is the color of the sky");
//     } else if (analyzeColor(red) === true) {
//         console.log("Strawberries are red");
//     } else if (analyzeColor(cyan) === true) {
//         console.log ("I don't know anything about cyan");
//     } else (analyzeColor())
//
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



console.log(analyzeColor("cyan"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    color=color.toLowerCase();
    switch (color){
        case red:
            message = "Strawberries are red";
            break;
        case "blue":
            message =  "blue is the color of the sky";
            break;
        case "cyan":
            message = "I don't know anything about that color."
            break;
        default:
            message =  color+" sure is a color.";
            break;
    }
    return message;
}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

console.log(randomColor);

var analyzeColor = prompt("What is your favorite color?");
switch(randomColor) {
    case "red":
        alert("Red is my favorite color.");
        break;
    case "orange":
        alert("Oranges are orange.");
        break;
    case "yellow":
        alert("Yellow is terrible. You should feel bad if you like it.");
        break;
    case "green":
        alert("Grass is green.");
        break;
    case "blue":
        alert("The sky is blue.");
        break;
    case "indigo":
        alert("Is indigo even a color?");
        break;
    case "violet":
        alert("Violet, you're turning violet!");
    default:
        alert("I don't know that color. Try again.");
        break;
}

var userColor = prompt("Please enter a color.")
alert(analyzezColorSwitch(userColor));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var initialTotal = Number(prompt("How much is your total bill?"));
var luckNum = Number(prompt("What is your lucky number?"));

function calculateTotal(luckNum,initialTotal) {
    switch (luckNum){
        case 0:
            return initialTotal;
        case 1:
            return initialTotal * .9;
        case 2:
            return initialTotal * .75;
        case 3:
            return initialTotal * .65;
        case 4:
            return initialTotal * .5;
        default:
            return 0;
    }
}

alert("Your new total is $" + calculateTotal(luckNum, initialTotal));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = Number(prompt("What was your total today?"));

alert("Your total is " + userTotal + ". Your lucky number was " + luckyNumber + " meaning you pay " + calculateTotal(luckyNumber, userTotal));
