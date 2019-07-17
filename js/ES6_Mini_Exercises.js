"use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

const x = 4 ** 5;
console.log(x);

let random = Math.floor(Math.random() * (2 ** 3));
console.log(random);

/*
    LET & CONST
    Refactor the above to use es6 variable types.
    What happens when you change the 'random' variable to a const?

    Why does this happen?
    How do we fix this behavior?
    Assign let to the random variable since we use it below as well.
 */

random = Math.floor(Math.random() * x);
console.log(random);

/*
    STRING INTERPOLATION
    we can use template strings in the new es6 syntax to avoid concatenating
     multiples strings together.

     Uncomment the two constants, put in the appropriate strings.
     Refactor the code down below to use template strings.
 */

// const name = 'Alicia';
// const cohort = 'Betelgeuse';
// const greeting = `Hello, ${name}! You are in the ${cohort} cohort.`;
// console.log(greeting);

/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];

// instructors.forEach(function(instructor){
//     console.log(instructor);
// });

for (let instructor of instructors){
    console.log(instructor);
}

/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

// function bark(){
//     return "woof woof";
// }
//it's the same thing!
const bark = () => "woof woof";

const  add = (x = 2, y = 3) => x + y;

// function square(x){
//     return x * x;
// }

const square = x => x * x;

/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */
// const greeting = 'Good Morning';
// const name = 'Betelgeuse';
// const myGreeting = (greeting = "Good Morning ", name = "Betelgeuse") => {
//    return greeting + name;
// };
//
// console.log(myGreeting());
// console.log(myGreeting("Hello ", "Sophie"));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const dog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog,
    cat,
    mouse
};
console.log(dog, cat, mouse);

/*
    OBJECT DESTRUCTURING
    1. Use Object Destructuring to refactor
 */

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};

const carInfo = ({make, model}) => {
    // var make = myCar.make;
    // var model = myCar.model;
    console.log(make);
    console.log(model);
};

carInfo(myCar);

/*
    OBJECT DESTRUCTURING
    2. Remember the 'instructors' array that we created at the top of this
     file? Use Array Destructuring to return the first 3 instructors. Use
      the curriculum example as a reference.
 */
const [j, k, l] = instructors;
const betelgeuseInstructors = [j, k];

console.log(j);
console.log(k);
console.log(l);
console.log(betelgeuseInstructors);

//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation

// function goodMorning(greeting,cohort){
//     return greeting + " " + cohort + "!";
// }


const goodMorning = (greeting = "Good Morning", cohort = "Betelgeuse") => {
    return `${greeting} ${cohort}!`;
};
console.log(goodMorning());
console.log(goodMorning(undefined, "Ceres"));
//if you want to use a variable outside of the console, use "undefined", and it will automatically use the default
