"use strict";

/**Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.*/

(function() {
    var numberPicked;
    do {
        numberPicked = Number(prompt("Pick an odd number between 1 and 50."));
        if (numberPicked < 1 || numberPicked > 50)
            alert(numberPicked + " is not between 1 and 50.");
        else if (numberPicked % 2 === 0)
            alert(numberPicked + " is not odd, please pick again.");
        else if (isNaN(numberPicked))
            alert (numberPicked + " is not a number.");
        else {
            alert("Congrats! You can follow directions.");
            break;
        }
    } while (true);


/**Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.*/
//+= automatically makes the counting in odd increments rather than even//

    var yikes = function(skip){
        for (var i = 1; i < 50; i += 2) {
            if (i === skip) {
                console.log("Yikes! Skipping number: " + i);
                continue;
            } console.log("Here is an odd number: " + i);
        }
    };
    yikes(numberPicked);
})();