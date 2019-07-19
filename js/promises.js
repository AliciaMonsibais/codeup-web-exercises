"use strict";

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (num) == "number") {
                resolve();
            } else {
                reject();
            }
        }, (1000 * num));
    }) .then(() => {
        console.log('You\'ll see this after ' + num + ' second(s)');
    }) .catch(() => {
        console.log(num + ' is not a number.')
    });
};

wait(1);
wait(3);
wait(5);
wait('banana');



// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

/*Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.*/
//Authentication is credentials
//Authorization is credentials and seeing what you're allowed to do2
const lastPush = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {"Authorization": `token ${gitHubKey}`}})
        .then(response => response.json())
        //console logging users to display function call
        .then((events) => {
            console.log(events);
            // console.log(data[0].created_at);
            const userData = events.filter((gitStat) => {
                // console.log(gitStat);
                //going with push events due to complexity of finding the correct last commit
                if (gitStat.type === "PushEvent") {
                    return gitStat
                }
            });
            console.log(userData[0].created_at)
        })
        .catch(error => console.error(error));
};

lastPush("AliciaMonsibais");
lastPush("viviancan");