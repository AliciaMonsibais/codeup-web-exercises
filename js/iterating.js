(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Alicia", "Nicole", "Brandon", "Anthony"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + names.length + " names in the array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
    //  */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    // For loop://
    //
    // for (var i = 0; i < names.length; i++) {
    //     console.log("Name at index: " + i + " is " + names[i]);
    // }

    //ForEach loop//

    names.forEach(function (name, index) {
        console.log("The name at index " + index + " is " + name + ".");

    });

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     *
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }
    function second(array) {
        return array[1];
    }
    function last(array) {
        return array [array.length - 1];
    }

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));

    // var coolArray = [1, 2, 3, 4, 5];
    // console.log("I have " + coolArray.length + " elements in my super cool Array!");
    // var first = coolArray[0];
    // console.log("Here is the first array item: " + first);
    // var second = coolArray[1];
    // console.log("Here is the second array item: " + second);
    // var last = coolArray[4];
    // console.log("Here is the last array item: " + last);

})();
