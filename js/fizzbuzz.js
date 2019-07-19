(function() {
    "use strict";
    // function fizzbuzz(input) {
        // for (var i = 1; i < input; i++) {
        //     //     if (i % 15 === 0) {
        //     //         console.log("FizzBuzz");
        //     //     } else if (i % 3 === 0) {
        //     //         console.log("Fizz");
        //     //     } else if (i % 5 === 0) {
        //     //         console.log("Buzz");
        //     //     } else {
        //     //         console.log(i);
        //     //     }
    //              }
    //     // }

//using es6
    const fizzbuzz = input => {
        for (let i = 1; i < input; i++) {
            if (i % 15 === 0){
                console.log("FizzBuzz");
            } else if (i % 3 === 0){
                console.log("Fizz");
            } else if (i % 5 === 0){
                console.log("Buzz");
            } else{
                console.log(i);
            }
        }
    };
}());



// var output = [];
// var a = 1;
//
// function fizzBuzz() {
//
//     if (a%5 === 0 && a%3 === 0) {
//         output.push("FizzBuzz");
//
//     } else if (a%5 === 0) {
//         output.push("Buzz");
//
//     } else if (a%3 === 0) {
//         output.push("Fizz");
//
//     } else {
//         output.push(a);
//     }
//     a++;
//     console.log(output);
// }