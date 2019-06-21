(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
            firstName: "Alicia",
            lastName: "Monsibais"
        };
        person.sayHello = function() {
            console.log("Hello from " + this.firstName + " " + this.lastName + "!")
        };

        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.sayHello());


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
        ];

    //create a function to calculate the discount to use this in the foreach loop
    function calculateDiscount(total){
        var output = 0;
        if (total > 200){
            output = total * .12;
        }
        return output;
    }

    //create a function to convert number to currency
    function convertToCurrency(num){
        return "$" + num.toFixed(2);
    }

    //display individual info for each shopper
    function displayShopperInfo(shopper){
        //default string
        var output = "";
        //var stores total amount
        var amount = convertToCurrency(shopper.amount);
        //var stores discount to be applied
        var discount = convertToCurrency(calculateDiscount(shopper.amount));
        //var stores final total
        var finalAmount = convertToCurrency(shopper.amount - calculateDiscount(shopper.amount));
        //concatenate onto empty string
        output += shopper.name + " spent " + amount;
        output += " and received a discount of " + discount;
        output += " and paid " + finalAmount;
        //return final string
        return output;
    }
    //display info for all shoppers. This is a higher order function which is a function that calls another function.
    function displayShoppersInfo(shoppers){
        shoppers.forEach(function(shopper){
            console.log(displayShopperInfo(shopper));
        });
    }

    displayShoppersInfo(shoppers);


    // var applyDiscount = function () {
    //     if (shoppers.amount >= 200){
    //         console.log(shoppers.name + "gets a 12% discount with a new total of $" + shoppers.amount * .88 + "!");
    //     } else {
    //         console.log(shoppers.name + " did not purchase enough items to qualify for this discount.");
    //     }
    // };
    // shoppers.forEach(function(shopper){
    //     console.log(shopper.discount);
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Wizarding World of Harry Potter",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            title: "A Series of Unfortunate Events",
            author: {
                firstName: "Lemony",
                lastName: "Snicket"
            }
        },
        {
            title: "Silence of the Lambs",
            author: {
                firstName: "Thomas",
                lastName: "Harris"
            }
        },
        {
            title: "The Shining",
            author: {
                firstName: "Stephen",
                lastName: "King"
            }
        },
        {
            title: "A Song of Ice and Fire",
            author: {
                firstName: "George R. R.",
                lastName: "Martin"
            }
        }
    ];

    console.log(books[0].firstName);
    console.log(books[3].title);

    // books.forEach(function(book, index){
    //     console.log("Check out this nifty book: " + "Book # " + Number(index + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author);
    //     console.log("---------");
    // });

    books.forEach(function(book, index){
        var output = "";
        output += ("Check out this nifty book: " + "Book # " + Number(index + 1)) + "\n";
        output += ("Title: " + book.title) + "\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
        output += "----------" + "\n";
        console.log(output);
    });

    // \n is an internal line break

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, firstName, lastName) {
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
    }

    books.push(createBook("Animal Farm", "George", "Orwell"));
    console.log(books);





})();
