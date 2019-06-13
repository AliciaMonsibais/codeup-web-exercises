"use strict";

//write a function that prints out "Hello World" to console
//write a function that returns the String "Hello World"

// function sayHello() {
//     console.log("Hello World");
// }

// var sayHello = function(){
//     return "Hello World";
// }; //this is called an anonymous function//
//
// var greeting = sayHello();
// console.log(greeting);

// function add(a,b,c){
//     return Number(a + b + c);
// }
//
// var multiply = function(a,b){
//     return Number(a*b);
// }

(function(){
    "use strict";
    //ask user for a password
    var password = prompt("Please enter your password");

    //function call shows hidden copy of password
    function hidePassword(pass){
        var fullPassword = pass.substring(0,pass.length);
        var hiddenPassword = pass.replace(fullPassword,"_");
        return "Your password is: " + hiddenPassword;
    }

   console.log(hidePassword(password));


    //variable stores what user had for lunch - String
    var lunch = prompt("What did you have for lunch?");
    //function concatenates String - returns new String
    function digest(food){
        return "not " + food + " anymore";
    }
    //call function, pass in a argument, log results
    console.log(digest(lunch));
})();