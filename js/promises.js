"use strict";

const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
        resolve("Resolved.");
    } else {
        reject("Rejected");
    }
});
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));