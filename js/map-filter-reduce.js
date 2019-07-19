"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(user => user.languages.length > 2).map(user => user.name);
console.log(threeLanguages);

//Use .map to create an array of strings where each element is a user's email address
const userEmail = users.map(user => user.email);
console.log(userEmail);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const userExperience = users.reduce(function(total, years){
    const experiences = years.yearsOfExperience;
    return total + experiences;
}, 0);
console.log(userExperience);
const averageYears = userExperience / users.length;
console.log(averageYears);

//Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((prev, current) => {
    //this const stores the email property of the object we are currently iterating over
    const currentEmail = current.email;
    if (currentEmail.length > prev.length) {
        return currentEmail;
    }else {
        return prev;
    }
}, '');
console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userString = users.reduce((total, instructor, index, arr) =>{
    if (index === (arr.length - 1)){
    return `${total} ${instructor.name}.`;
}else {
        return `${total} ${instructor.name},`;
    }
}, "Your instructors are:");

console.log(userString);

//Use .reduce to get the unique list of languages from the list of users.
// const allTheLanguages = users.reduce( (total, current)=>{
//     const newLanguages = current.languages.map(language => {
//         total.push(language);
//     });
//     return total;
// },[]);
//
// //why did Set, with a capital "S" work?
// const filterLanguages = new Set(allTheLanguages);
// console.log(filterLanguages);
const uniqueLanguages = users.reduce(function(prev, current){
    const langs = current.languages;
    for (const lang of langs){
        prev.add(lang);
    }
    return prev;
}, new Set);

//new Set checks for unique values. It does the sorting for you.