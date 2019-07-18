"use strict";
//.map
const myNumbers = [4,5,6,5,8];

//map doesn't decrease or increase the number of elements. It just transforms.
//this is kind of a new way to do a for loop
const myNewNumbers = myNumbers.map(function(x){
    return x ** 2;
});

//this returns [16,25,36,49,64]
console.log(myNewNumbers);
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

//use filter to return the longest author name
const longestName = books.reduce(function(previous, current){}, "");

//mapping through book titles and now saying they're Harry Potter
//not changing array but names of objects inside an array
//  const bookTitles = books.map(book => {
//      return book.title = 'Harry Potter';
//  });
/*
    MAP
    using .map, create an array that returns all author names.
 */
const bookAuthors = books.map(book => book.author);
console.log(bookAuthors);
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
//the map portion is just to display the book titles for this. It is not necessary to make the function work
const threeBookGenres = books.filter(book => book.genres.length > 2).map(book => book.title);
console.log(threeBookGenres);
/*
    REDUCE
    using .reduce, return the total years between all books.
 */
const yearsBetween = books.reduce(function(total, years) {
    const currentBook = years.yearsInPublication;
    return total + currentBook;
}, 0);
console.log(yearsBetween);
