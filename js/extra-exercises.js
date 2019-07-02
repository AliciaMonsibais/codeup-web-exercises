(function() {
    "use strict";
//     /*When a user hits the "g" key, the background of the page should turn purple.*/
//     var body = document.querySelector('#body');
//     var submitButton = document.querySelector('#submit');
//     var input = document.querySelector('#key-search');
//     function findPurple(e){
//         e.preventDefault();
//         var filter = input.value;
//         if (filter == "g" || filter == "G") {
//              filter.textContent = "You guessed the right key!";
//             body.style.background = 'purple';
//         } else {
//             return filter.textContent = "Try again..."
//         }
//     }
//     input.addEventListener('keyup', findPurple);
//     submitButton.addEventListener('click', findPurple);
//
//
//
//     /*Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.*/
//
//
//
//     /*When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".*/
//
//     /*Create a dog object
//
//     The dog object should have properties for:
//
//     breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//     The dog object should have methods to:
//
//     bark() - will console.log "Woof!"
//     getOlder() - will increase age by 1
//     fix() - will set sterile to true if dog sterilized property is false
//     vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array*/
// var dog= [
//     {
//         breed: "Border Collie",
//         weightInPounds: 40,
//         color: "black and white",
//         sterilized: true,
//         shotRecords: [
//             {date: 12-31-15, typeOfShot: shot1},
//             {date: 4-18-18, typeOfShot: shot2},
//             {date: 1-18-19, typeOfShot: shot3}
//         ]
//     }
// ];

/*Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

Example input: ["fred", true, 5, 3] Example output: [3, 5]*/
var mix = ["fred", true, 5, 3];
console.log(mix);
    var filtered = mix.filter(function(item) {
        return typeof item === "number";
    });
    console.log(filtered);
})();