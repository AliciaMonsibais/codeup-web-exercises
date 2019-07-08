(function() {
    "use strict";
/*Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.

Example input: ["fred", true, 5, 3] Example output: [3, 5]*/
    var mix = ["fred", true, 5, 3];

    function filterNumbers(arr){
        var output = [];
        for(var i = 0; i < arr.length; i += 1){
            if(typeof arr[i] === "number") {
                output.push(arr[i]);
            }
        }
        output.sort();

        return output;
    }

    console.log(filterNumbers(mix));

/*Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.*/
    var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];

    function getOlder(arr){
        arr.forEach(function(dogs){
            dogs.age += 1;
        });
    }
    console.log(dogs);
    getOlder(dogs);
    console.log(dogs);

})();