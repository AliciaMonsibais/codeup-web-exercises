"use strict";

/**Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)*/
(function showMultiplicationTable(){
    var x = Math.floor((Math.random() * 10) + 1);
    for(var i = 1; i < 10; i++){
        console.log(x * i);
    }
})();

/**Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.*/
(function isOdd(){
    var randoNumber = (Math.floor(Math.random() * 180) + 20);
    if (randoNumber % 2 === 0){
        return randoNumber + " is even.";
    } else {
        return randoNumber + " is odd.";
    }
})();

/**Create a for loop that uses console.log to create the output shown below.*/


/**Create a for loop that uses console.log to create the output shown below.*/
(function lessThanFive(){

    for (var i = 5; x = 100; i > 0; i++){
        console.log(x - i);
    }
})();