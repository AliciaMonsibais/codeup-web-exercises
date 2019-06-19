"use strict";

/**Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)*/
(function (){
    var showMultiplicationTable = function(x){

    var x = Math.floor((Math.random() * 10) + 1);
    for(var i = 1; i <= 10; i++){
        console.log(x + " x " + i + " = " + (i*parseInt(x)));
    }
    }; showMultiplicationTable(Math.floor((Math.random() * 10) + 1))
})();

/**Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.*/
(function (){
    for(var i = 0; i < 10; i ++) {
        var randoNumber = (Math.floor(Math.random() * 180) + 20);
        var x = randoNumber % 2;
        if (x === 0) {
            console.log(randoNumber + " is even.");
        } else {
            console.log(randoNumber + " is odd.");
        }
    }
})();

/**Create a for loop that uses console.log to create the output shown below.*/
(function(){
var christmasTree = function() {
    for (var outer = 1; outer <= 9; outer++) {
        var output = '';
        for (var inner = 1; inner <= outer; inner++) {
            output += outer;
        }
        console.log(output);
    }
};
christmasTree();
})();

/**Create a for loop that uses console.log to create the output shown below.*/
(function lessThanFive(){
    for (var i = 100; i >= 5; i -= 5){
        console.log(i);
    }
})();
