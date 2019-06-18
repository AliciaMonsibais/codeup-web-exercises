"use strict";

// (function(){
//     var keepGoing = true;
//     var ourHand = 0;
//     function hitMe(){
//         var nextCard = Math.floor((Math.random()*11)+1);
//         ourHand += nextCard;
//     }
//
//     do {
//             hitMe();
//             alert("Your hand is now " + ourHand);
//             if (ourHand > 21) {
//                 keepGoing = false;
//                 alert("You busted!");
//             }
//
//         if (keepGoing) {
//             keepGoing = confirm("Do you want another card?");
//         }
//     } while(keepGoing);
//
//     // if (ourHand < 21)
//     //     hitMe();
//     // alert("Your hand is now " + ourHand);
//     // if (ourHand > 21)
//     //     alert("You busted!");
//     //
//     // alert("Your hand is now " + ourHand);
//     // if (ourHand <21)
//     //     hitMe();
//     // alert("Your hand is now " + ourHand);
//     // if (ourHand <21)
//     //     hitMe();
//     // alert("Your hand is now " + ourHand);
//     // if (ourHand <21)
//     //     hitMe();
//     // alert("Your hand is now " + ourHand);
//     // if (ourHand <21)
//     //     hitMe();
//
// })();
//
// /**Have user randomly choose a number with guesses until they pick the correct number*/
// (function guessingGame() {
//     var x = Math.floor((Math.random() * 20) + 1);
//     var keepPlaying = true;
//     do {
//         var guessNumber = parseInt(prompt("Pick a number between 1 and 20."));
//         if (guessNumber === x) {
//             alert("You guessed correctly!");
//             keepPlaying = false;
//         }
//         else if (guessNumber > x)
//             alert("Too high!");
//         else
//             alert("Too low!");
//     }
//     while (keepPlaying);
//     console.log("Random Number was " + x);
//     console.log("Guess was " + guessNumber);
// })();
//     do {
//         randoNumber();
//         var guessNumber = prompt("I have selected a number between 1 and 10. Can you guess what it is?");
//         if (guessNumber === x){
//             alert("Congratulations! You guessed correctly!")
//         }
//         if (guessAgain) {
//             prompt("That's not the correct number. Try again.");
//         }
//     } while (guessAgain);
// })();
var x = 2;
while (x <= 65537){
    console.log(x);
    x*=2;
}