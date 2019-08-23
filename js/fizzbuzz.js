// (function() {
//     "use strict";
const sayHello = (name) => 'Hello, ' + name + '!';

console.log(sayHello());

    // function fizzbuzz(input) {
    //     for (var i = 1; i < input; i++) {
    //             if (i % 15 === 0) {
    //                 console.log("FizzBuzz");
    //             } else if (i % 3 === 0) {
    //                 console.log("Fizz");
    //             } else if (i % 5 === 0) {
    //                 console.log("Buzz");
    //             } else {
    //                 console.log(i);
    //             }
    //              }
    //     }

    // function (isCaps){
    //     for (var i =1; i < input; i++) {
    //         if (i === isCaps)
    //     }
    //
    // }

function isSum(array){
    newArr = [];
    num = 0;
    array.forEach(function(e){
        newArr.push(e + num);
        num += e;
    });
    return newArr;
}

console.log(isSum([1,1,1]));
console.log(isSum([4,2,1,3,5]));


function isAllCase(str) {
    if (str === str.toUpperCase()) {
        return true;
    } else if (str === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isAllCase("HELLO WORLD"));
console.log(isAllCase("hello world"));
console.log(isAllCase("hEllO WorLd"));

function isIsogram(str) {
    if (typeof str === undefined){
        return true;
    }
    var passing = true;
    var str2 = str.toLowerCase();
    var counts = {};
    for (i = 0; i <= str2.length; i++) {
        var letter = str2.charAt(i);
        if(counts[letter]) {
            counts[letter] = 1 + counts[letter]
        } else {
            counts[letter] = 1
        }
        if(counts[letter] > 1) {
            return passing = false
        }
    }
    return passing;
}
console.log(isIsogram("fish"));
console.log(isIsogram("food"));
console.log(isIsogram("color"));


function convertPhoneLetters(input) {

    var inputlength = input.length;
    input = input.toLowerCase();
    var phonenumber = "";
    for (i = 0; i < inputlength; i++) {
        var character = input.charAt(i);


        switch(character) {

            case '0': phonenumber+="0";
            break;
            case '1': phonenumber+="1";
            break;
            case '2': phonenumber+="2";
            break;
            case '3': phonenumber+="3";
            break;
            case '4': phonenumber+="4";
            break;
            case '5': phonenumber+="5";
            break;
            case '6': phonenumber+="6";
            break;
            case '7': phonenumber+="7";
            break;
            case '8': phonenumber+="8";
            break;
            case '9': phonenumber+="9";
            break;

            case 'a': case 'b': case 'c': phonenumber+="2";
            break;
            case 'd': case 'e': case 'f': phonenumber+="3";
            break;
            case 'g': case 'h': case 'i': phonenumber+="4";
            break;
            case 'j': case 'k': case 'l': phonenumber+="5";
            break;
            case 'm': case 'n': case 'o': phonenumber+="6";
            break;
            case 'p': case 'q': case 'r': case 's': phonenumber+="7";break;
            case 't': case 'u': case 'v': phonenumber+="8";
            break;
            case 'w': case 'x': case 'y': case 'z': phonenumber+="9"
                break;

            default: phonenumber+=character;

        }
    }

    return phonenumber;
}

console.log(convertPhoneLetters("210-367-CODE"));
console.log(convertPhoneLetters("TRY-THE-FOOD"));

function isPartition(arr, filter) {
    return arr.reduce(
        (r, e, i, a) => {
            r[filter(e, i, a) ? 0 : 1].push(e);
            return r;
        }, [[], []]);
}
console.log(isPartition([1, 5, 3, 2]));
//using es6
//     const fizzbuzz = input => {
//         for (let i = 1; i < input; i++) {
//             if (i % 15 === 0){
//                 console.log("FizzBuzz");
//             } else if (i % 3 === 0){
//                 console.log("Fizz");
//             } else if (i % 5 === 0){
//                 console.log("Buzz");
//             } else{
//                 console.log(i);
//             }
//         }
//     };
// }());
//     let timer = 0;
//
//     let clock = setInterval(() => {
//         console.log(++timer*10);
//     }, 10);
//     const url = "https://api.github.com/users";
//     fetch(url).then(()=>{
//         console.log("ding!");
//         clearInterval(clock);
//     })
//neilbuzz
//     const neilbuzz = () => {
//     for (let i = 1; i < 100; i++) {
//         if (i % 15 === 0) {
//             console.log("NeilBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Neil");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
//     };
// });

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