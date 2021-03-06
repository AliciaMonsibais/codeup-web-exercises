"use strict";

/** Create a while loop that uses console.log() to create the output shown below.*/
(function() {
    var x = 2;
    while (x <= 65536) {
        console.log(x);
        x *= 2
    }
})();

/**An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.*/

(function(){
    var cones = (Math.floor(Math.random() * 50) + 50);
    console.log("You need to sell " + cones + " cones.");
    do {
        var gimmeMore = Math.floor((Math.random() * 5) + 1);

        if (gimmeMore <= cones) {
            cones -= gimmeMore;
            console.log(gimmeMore + " cones sold...");
        } else {
            console.log ("Cannot sell you " + gimmeMore + " I only have " + cones + "...");
        }
    } while(cones > 0);
    console.log("Yay! I sold them all!")
})();


